import type { Control } from "../inventory/Control";
import { MouseButton } from "../inventory/MouseButton";
import type { Ripple } from "../inventory/Ripple";

type EncodedStack = [icon: number, count: number];

interface Frame {
  slots: Record<string, EncodedStack>;
  cursor: EncodedStack | null;
  held: Control[];
}

interface Step {
  pointer: string | null;
  ripple: Ripple | null;
}

interface DemoData {
  pace: number;
  endPause: number;
  icons: string[];
  frames: Frame[];
  steps: Step[];
}

const glideShare = 0.5;

const pressFlashDuration = 150;

const rippleSpacing = 120;

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

  private get lastFrame(): number {
    return this.data.frames.length - 1;
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
    new ResizeObserver(() => this.movePointer(0)).observe(this.demo.querySelector(".inventory-panel")!);
  }

  private play() {
    if (this.frame === this.lastFrame) {
      this.show(0);
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

    if (this.frame < this.lastFrame) {
      this.advance(false);
    }
  }

  private previous() {
    this.pause();

    if (this.frame > 0) {
      this.show(this.frame - 1);
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
    const step = this.data.steps[this.frame]!;
    const glide = this.stepDuration * glideShare;

    this.movePointer(glide, this.pointerSlot(this.frame + 1));
    this.timer = window.setTimeout(() => {
      this.show(this.frame + 1);
      this.ripple(step.ripple);

      if (!continuing) {
        return;
      }

      if (this.frame === this.lastFrame) {
        this.timer = window.setTimeout(() => this.restart(), (this.data.endPause * 1000) / this.speed);

        return;
      }

      this.timer = window.setTimeout(() => this.advance(true), this.stepDuration - glide);
    }, glide);
  }

  private restart() {
    this.show(0);
    this.movePointer(this.stepDuration * glideShare);
    this.timer = window.setTimeout(() => this.advance(true), this.stepDuration);
  }

  private show(frame: number) {
    this.frame = frame;
    const { slots, cursor, held } = this.data.frames[frame]!;
    const interacted = this.data.steps[frame - 1]?.ripple !== null && frame > 0;
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
    this.progress.textContent = `${frame} / ${this.lastFrame}`;
  }

  private pointerSlot(frame: number): string {
    return (
      this.data.steps
        .slice(0, frame)
        .map((step) => step.pointer)
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

  private ripple(ripple: Ripple | null) {
    if (ripple === null) {
      return;
    }

    const target = ripple.target === "pointer" ? this.pointer : this.keys.get(ripple.key);

    if (target === undefined) {
      return;
    }

    const clicks = ripple.target === "pointer" ? ripple.clicks : 1;

    for (let click = 0; click < clicks; click++) {
      window.setTimeout(() => {
        const ring = document.createElement("span");
        ring.className = "inventory-ripple";
        ring.addEventListener("animationend", () => ring.remove());
        target.append(ring);
      }, (click * rippleSpacing) / this.speed);
    }

    if (ripple.target === "key") {
      target.toggleAttribute("data-pressed", true);
      window.setTimeout(() => target.toggleAttribute("data-pressed", false), pressFlashDuration);
    }
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
