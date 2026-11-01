import type { Control } from "../inventory/Control";
import { MouseButton } from "../inventory/MouseButton";
import type { Ripple } from "../inventory/Ripple";

type EncodedStack = [icon: number, count: number];

interface Frame {
  slots: Record<string, EncodedStack>;
  cursor: EncodedStack | null;
  held: Control[];
}

interface InputView {
  pointer: string | null;
  ripple: Ripple | null;
  doubleClick: boolean;
}

interface DemoData {
  pace: number;
  endPause: number;
  icons: string[];
  frames: Frame[];
  inputs: InputView[];
  stepEnds: number[];
}

const glideShare = 0.5;

const pressFlashDuration = 150;

const pointerVariance = 8;

const restingSlot = "inventory 1";

export class InventoryDemoController {
  private readonly data: DemoData;
  private readonly slots: Map<string, HTMLElement>;
  private readonly keys: Map<string, HTMLElement>;
  private readonly pointer: HTMLElement;
  private readonly held: HTMLElement;
  private readonly progress: HTMLElement;
  private readonly playButton: HTMLButtonElement;
  private readonly speedButtons: HTMLButtonElement[];
  private frame = 0;
  private step = 0;
  private speed: number;
  private timer: number | undefined;
  private playing = false;
  private hoverTracking: number | undefined;
  private readonly offsets: [number, number][];

  constructor(private readonly demo: HTMLElement) {
    this.data = JSON.parse(demo.dataset.inventoryDemo!) as DemoData;
    this.slots = new Map(
      [...demo.querySelectorAll<HTMLElement>("[data-slot]")].map((slot) => [slot.dataset.slot!, slot]),
    );
    this.keys = new Map([...demo.querySelectorAll<HTMLElement>("kbd[data-key]")].map((key) => [key.dataset.key!, key]));
    this.pointer = demo.querySelector<HTMLElement>(".inventory-pointer")!;
    this.held = demo.querySelector<HTMLElement>(".inventory-held")!;
    this.progress = demo.querySelector<HTMLElement>("[data-progress]")!;
    this.playButton = demo.querySelector<HTMLButtonElement>('[data-control="play"]')!;
    this.speedButtons = [...demo.querySelectorAll<HTMLButtonElement>("[data-speed]")];
    const pressed = this.speedButtons.find((button) => button.getAttribute("aria-pressed") === "true")!;
    this.speed = Number(pressed.dataset.speed);
    this.offsets = this.data.inputs.map(() => [
      (Math.random() * 2 - 1) * pointerVariance,
      (Math.random() * 2 - 1) * pointerVariance,
    ]);
  }

  private get lastStep(): number {
    return this.data.stepEnds.length;
  }

  private get stepDuration(): number {
    return 1000 / (this.data.pace * this.speed);
  }

  start() {
    this.playButton.addEventListener("click", () => (this.playing ? this.pause() : this.play()));
    this.demo.querySelector('[data-control="previous"]')!.addEventListener("click", () => this.previous());
    this.demo.querySelector('[data-control="next"]')!.addEventListener("click", () => this.next());

    for (const button of this.speedButtons) {
      button.addEventListener("click", () => this.setSpeed(Number(button.dataset.speed)));
    }

    this.show(0);
    this.setStep(0);
    this.demo.closest("[popover]")?.addEventListener("toggle", (event) => {
      if ((event as ToggleEvent).newState === "closed") {
        this.pause();
        this.reset();
      }
    });
    new ResizeObserver(() => this.movePointer(0)).observe(this.demo.querySelector(".inventory-panel")!);
  }

  private play() {
    if (this.step === this.lastStep) {
      this.reset();
    }

    this.playing = true;
    this.playButton.toggleAttribute("data-playing", true);
    this.advance(true);
  }

  private pause() {
    window.clearTimeout(this.timer);
    this.playing = false;
    this.playButton.toggleAttribute("data-playing", false);
  }

  private next() {
    this.pause();

    if (this.step < this.lastStep) {
      this.advance(false);
    }
  }

  private previous() {
    this.pause();

    if (this.step > 0) {
      this.setStep(this.step - 1);
      this.show(this.step === 0 ? 0 : this.data.stepEnds[this.step - 1]!);
      this.movePointer(0);
    }
  }

  private setSpeed(speed: number) {
    this.speed = speed;

    for (const button of this.speedButtons) {
      button.setAttribute("aria-pressed", String(Number(button.dataset.speed) === speed));
    }
  }

  private advance(continuing: boolean) {
    const end = this.data.stepEnds[this.step]!;

    this.playInput(end, this.stepDuration / (end - this.frame), continuing);
  }

  private playInput(end: number, duration: number, continuing: boolean) {
    const input = this.data.inputs[this.frame]!;
    const glide = duration * glideShare;

    this.movePointer(glide, this.pointerTarget(this.frame + 1));
    this.timer = window.setTimeout(() => {
      this.show(this.frame + 1);
      this.ripple(input.ripple, input.doubleClick);

      if (this.frame < end) {
        this.timer = window.setTimeout(() => this.playInput(end, duration, continuing), duration - glide);

        return;
      }

      this.setStep(this.step + 1);

      if (!continuing) {
        return;
      }

      if (this.step === this.lastStep) {
        this.timer = window.setTimeout(() => this.restart(), (this.data.endPause * 1000) / this.speed);

        return;
      }

      this.timer = window.setTimeout(() => this.advance(true), duration - glide);
    }, glide);
  }

  private reset() {
    this.show(0);
    this.setStep(0);
    this.movePointer(0);
  }

  private setStep(step: number) {
    this.step = step;
    this.progress.textContent = `${step} / ${this.lastStep}`;
  }

  private restart() {
    this.show(0);
    this.setStep(0);
    this.movePointer(this.stepDuration * glideShare);
    this.timer = window.setTimeout(() => this.advance(true), this.stepDuration);
  }

  private show(frame: number) {
    this.frame = frame;
    const { slots, cursor, held } = this.data.frames[frame]!;
    const interacted = frame > 0 && this.data.inputs[frame - 1]!.ripple !== null;
    const activeSlot = interacted ? this.slots.get(this.pointerTarget(frame).slot) : undefined;

    for (const [key, element] of this.slots) {
      this.fill(element, slots[key] ?? null);
      element.toggleAttribute("data-active", element === activeSlot);
    }

    for (const [key, element] of this.keys) {
      element.toggleAttribute("data-held", held.includes(key as Control));
    }

    const heldButton = [MouseButton.Left, MouseButton.Right].find((button) => held.includes(button));

    if (heldButton === undefined) {
      delete this.pointer.dataset.held;
    } else {
      this.pointer.dataset.held = heldButton;
    }
    this.fill(this.held, cursor);
  }

  private pointerTarget(frame: number): { slot: string; offset: [number, number] } {
    const index = this.data.inputs.slice(0, frame).findLastIndex((input) => input.pointer !== null);

    return index < 0
      ? { slot: restingSlot, offset: [0, 0] }
      : { slot: this.data.inputs[index]!.pointer!, offset: this.offsets[index]! };
  }

  private movePointer(duration: number, target = this.pointerTarget(this.frame)) {
    const slot = this.slots.get(target.slot)!;
    const x = slot.offsetLeft + slot.offsetWidth / 2 + target.offset[0];
    const y = slot.offsetTop + slot.offsetHeight / 2 + target.offset[1];

    this.pointer.style.transitionDuration = `${duration}ms`;
    this.pointer.style.translate = `${x}px ${y}px`;
    this.trackHover();
  }

  private trackHover() {
    window.cancelAnimationFrame(this.hoverTracking ?? 0);

    const update = () => {
      this.highlightUnderPointer();

      if (this.pointer.getAnimations().length > 0) {
        this.hoverTracking = window.requestAnimationFrame(update);
      }
    };

    update();
  }

  private highlightUnderPointer() {
    const [x = 0, y = 0] = getComputedStyle(this.pointer).translate.split(" ").map((value) => parseFloat(value));

    for (const element of this.slots.values()) {
      const inside =
        x >= element.offsetLeft &&
        x < element.offsetLeft + element.offsetWidth &&
        y >= element.offsetTop &&
        y < element.offsetTop + element.offsetHeight;
      element.toggleAttribute("data-hovered", inside);
    }
  }

  private ripple(ripple: Ripple | null, doubleClick: boolean) {
    if (ripple === null) {
      return;
    }

    const target = ripple.target === "pointer" ? this.pointer : this.keys.get(ripple.key);

    if (target === undefined) {
      return;
    }

    const ring = document.createElement("span");
    ring.className = "inventory-ripple";
    ring.toggleAttribute("data-double-click", doubleClick);

    if (ripple.target === "pointer") {
      ring.dataset.button = ripple.button;
    }

    ring.addEventListener("animationend", () => ring.remove());
    target.append(ring);

    if (ripple.target === "pointer") {
      this.pointer.toggleAttribute("data-double-click", doubleClick);
    }

    target.toggleAttribute("data-pressed", true);
    window.setTimeout(() => target.toggleAttribute("data-pressed", false), pressFlashDuration);
  }

  private fill(element: HTMLElement, stack: EncodedStack | null) {
    if (stack === null) {
      element.replaceChildren();

      return;
    }

    const [icon, count] = stack;
    const image = document.createElement("img");
    image.src = this.data.icons[icon]!;
    image.alt = "";
    image.width = 32;
    image.height = 32;
    element.replaceChildren(image);

    if (count > 1) {
      const label = document.createElement("span");
      label.className = "inventory-count";
      label.textContent = String(count);
      element.append(label);
    }
  }
}
