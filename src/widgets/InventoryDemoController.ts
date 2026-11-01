import type { Modifier } from "../inventory/Modifier";
import type { Press } from "../inventory/Press";

type EncodedStack = [icon: number, count: number];

interface Frame {
  slots: Record<string, EncodedStack>;
  cursor: EncodedStack | null;
}

interface Step {
  slot: string;
  modifier: Modifier | null;
  press: Press;
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

    this.hold(step.modifier);
    this.movePointer(glide, step.slot);
    this.timer = window.setTimeout(() => {
      this.show(this.frame + 1);
      this.ripple(step.press);

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
    const { slots, cursor } = this.data.frames[frame]!;
    const activeSlot = this.slots.get(this.data.steps[frame - 1]?.slot ?? "");

    for (const [key, element] of this.slots) {
      this.fill(element, slots[key] ?? null);
      element.toggleAttribute("data-active", element === activeSlot);
    }

    this.fill(this.held, cursor);
    this.hold(this.restingModifier(frame));
    this.progress.textContent = `${frame} / ${this.lastFrame}`;
  }

  private restingModifier(frame: number): Modifier | null {
    const previous = this.data.steps[frame - 1];
    const next = this.data.steps[frame];

    return previous !== undefined && next !== undefined && previous.modifier === next.modifier ? previous.modifier : null;
  }

  private hold(modifier: Modifier | null) {
    for (const [key, element] of this.keys) {
      element.toggleAttribute("data-held", key === modifier);
    }
  }

  private movePointer(duration: number, slotKey = this.data.steps[this.frame - 1]?.slot ?? restingSlot) {
    const slot = this.slots.get(slotKey)!;
    const x = slot.offsetLeft + slot.offsetWidth / 2;
    const y = slot.offsetTop + slot.offsetHeight / 2;

    this.pointer.style.transitionDuration = `${duration}ms`;
    this.pointer.style.translate = `${x}px ${y}px`;
  }

  private ripple(press: Press) {
    const target = press.device === "mouse" ? this.pointer : this.keys.get(press.key);

    if (target === undefined) {
      return;
    }

    const ripple = document.createElement("span");
    ripple.className = "inventory-ripple";
    ripple.addEventListener("animationend", () => ripple.remove());
    target.append(ripple);

    if (press.device === "keyboard") {
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
