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

const doubleRingSpacing = 90;

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
    new ResizeObserver(() => this.movePointer(0)).observe(this.demo.querySelector(".inventory-panel")!);
  }

  private play() {
    if (this.step === this.lastStep) {
      this.show(0);
      this.setStep(0);
      this.movePointer(0);
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

    this.movePointer(glide, this.pointerSlot(this.frame + 1));
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
    const activeSlot = interacted ? this.slots.get(this.pointerSlot(frame)) : undefined;

    for (const [key, element] of this.slots) {
      this.fill(element, slots[key] ?? null);
      element.toggleAttribute("data-active", element === activeSlot);
    }

    for (const [key, element] of this.keys) {
      element.toggleAttribute("data-held", held.includes(key as Control));
    }

    this.pointer.toggleAttribute(
      "data-held",
      held.some((control) => control === MouseButton.Left || control === MouseButton.Right),
    );
    this.fill(this.held, cursor);
  }

  private pointerSlot(frame: number): string {
    return (
      this.data.inputs
        .slice(0, frame)
        .map((input) => input.pointer)
        .findLast((pointer) => pointer !== null) ?? restingSlot
    );
  }

  private movePointer(duration: number, slotKey = this.pointerSlot(this.frame)) {
    const slot = this.slots.get(slotKey)!;
    const x = slot.offsetLeft + slot.offsetWidth / 2;
    const y = slot.offsetTop + slot.offsetHeight / 2;

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

    const rings = doubleClick ? 2 : 1;

    for (let ring = 0; ring < rings; ring++) {
      window.setTimeout(() => {
        const element = document.createElement("span");
        element.className = "inventory-ripple";
        element.addEventListener("animationend", () => element.remove());
        target.append(element);
      }, (ring * doubleRingSpacing) / this.speed);
    }

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
