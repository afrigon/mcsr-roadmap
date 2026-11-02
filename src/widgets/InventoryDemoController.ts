import type { Control } from "../inventory/Control";
import { MouseButton } from "../inventory/MouseButton";
import type { Ripple } from "../inventory/Ripple";
import type { CountFontMetrics } from "../textures/CountFontMetrics";
import { CountGlyphs } from "../textures/CountGlyphs";

type EncodedStack = [icon: number, count: number];

interface Display {
  slots: Record<string, EncodedStack>;
  cursor: EncodedStack | null;
  dragged: string[];
}

interface DragStage extends Display {
  slot: string;
}

interface Frame extends Display {
  stages: DragStage[];
  held: Control[];
  pointer: [x: number, y: number] | null;
  hovered: string | null;
  selected: string | null;
  book: string;
  bookButtonFocused: boolean;
}

interface InputView {
  ripple: Ripple | null;
  doubleClick: boolean;
  actsOnSlot: boolean;
}

interface DemoData {
  pace: number;
  endPause: number;
  icons: string[];
  frames: Frame[];
  inputs: InputView[];
  stepEnds: number[];
  countFont: CountFontMetrics;
  guiPositions: Record<string, [x: number, y: number]>;
}

const glideShare = 0.5;

const pressFlashDuration = 150;

export class InventoryDemoController {
  private readonly data: DemoData;
  private readonly slots: Map<string, HTMLElement>;
  private readonly keys: Map<string, HTMLElement>;
  private readonly pointer: HTMLElement;
  private readonly held: HTMLElement;
  private readonly screen: HTMLElement;
  private readonly gui: HTMLElement;
  private readonly book: HTMLElement | null;
  private readonly bookButton: HTMLElement | null;
  private readonly progress: HTMLElement;
  private readonly playButton: HTMLButtonElement;
  private readonly speedButtons: HTMLButtonElement[];
  private frame = 0;
  private step = 0;
  private speed: number;
  private timer: number | undefined;
  private playing = false;
  private animating = false;
  private hoverTracking: number | undefined;
  private stages: DragStage[] = [];
  private nextStage = 0;
  private readonly countGlyphs: CountGlyphs;

  constructor(private readonly demo: HTMLElement) {
    this.data = JSON.parse(demo.dataset.inventoryDemo!) as DemoData;
    this.slots = new Map(
      [...demo.querySelectorAll<HTMLElement>("[data-slot]")].map((slot) => [slot.dataset.slot!, slot]),
    );
    this.keys = new Map([...demo.querySelectorAll<HTMLElement>(".inventory-inputs [data-key]")].map((key) => [key.dataset.key!, key]));
    this.screen = demo.querySelector<HTMLElement>(".inventory-screen")!;
    this.gui = demo.querySelector<HTMLElement>(".inventory-gui")!;
    this.book = demo.querySelector<HTMLElement>(".inventory-book");
    this.bookButton = demo.querySelector<HTMLElement>(".inventory-book-button");
    this.pointer = demo.querySelector<HTMLElement>(".inventory-pointer")!;
    this.held = demo.querySelector<HTMLElement>(".inventory-held")!;
    this.progress = demo.querySelector<HTMLElement>("[data-progress]")!;
    this.playButton = demo.querySelector<HTMLButtonElement>('[data-control="play"]')!;
    this.speedButtons = [...demo.querySelectorAll<HTMLButtonElement>("[data-speed]")];
    const pressed = this.speedButtons.find((button) => button.getAttribute("aria-pressed") === "true")!;
    this.speed = Number(pressed.dataset.speed);
    this.countGlyphs = new CountGlyphs(this.data.countFont);
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
    this.movePointer(0);
    this.demo.closest("[popover]")?.addEventListener("toggle", (event) => {
      if ((event as ToggleEvent).newState === "closed") {
        this.pause();
        this.reset();
      }
    });
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
    this.animating = false;
    this.playButton.toggleAttribute("data-playing", false);
  }

  private next() {
    const interrupted = this.animating;

    this.pause();

    if (interrupted) {
      this.finishStep();
    }

    if (this.step < this.lastStep) {
      this.advance(false);
    } else if (!interrupted) {
      this.reset();
    }
  }

  private finishStep() {
    this.show(this.data.stepEnds[this.step]!);
    this.setStep(this.step + 1);
    this.movePointer(0);
  }

  private previous() {
    this.pause();
    this.setStep(this.step === 0 ? this.lastStep : this.step - 1);
    this.show(this.step === 0 ? 0 : this.data.stepEnds[this.step - 1]!);
    this.movePointer(0);
  }

  private setSpeed(speed: number) {
    this.speed = speed;

    for (const button of this.speedButtons) {
      button.setAttribute("aria-pressed", String(Number(button.dataset.speed) === speed));
    }
  }

  private advance(continuing: boolean) {
    const end = this.data.stepEnds[this.step]!;

    this.animating = true;
    this.playInput(end, this.stepDuration / (end - this.frame), continuing);
  }

  private playInput(end: number, duration: number, continuing: boolean) {
    const input = this.data.inputs[this.frame]!;
    const glide = duration * glideShare;

    this.stages = this.data.frames[this.frame + 1]!.stages;
    this.nextStage = 0;
    this.movePointer(glide, this.frame + 1);
    this.timer = window.setTimeout(() => {
      this.show(this.frame + 1);
      this.ripple(input.ripple, input.doubleClick);

      if (this.frame < end) {
        this.timer = window.setTimeout(() => this.playInput(end, duration, continuing), duration - glide);

        return;
      }

      this.animating = false;
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
    this.stages = [];
    const { held, hovered, selected, book, bookButtonFocused } = this.data.frames[frame]!;
    const [guiX, guiY] = this.data.guiPositions[book]!;
    this.gui.style.left = `${guiX}px`;
    this.gui.style.top = `${guiY}px`;
    this.book?.toggleAttribute("hidden", book !== "open");
    this.bookButton?.toggleAttribute("data-focused", bookButtonFocused);
    this.highlightUnderPointer();
    const input = frame > 0 ? this.data.inputs[frame - 1]! : null;
    const ripple = input?.ripple ?? null;
    const activeSlot = input?.actsOnSlot && hovered !== null ? this.slots.get(hovered) : undefined;
    const heldButton = [MouseButton.Left, MouseButton.Right].find((button) => held.includes(button));
    const activeButton = ripple?.target === "pointer" ? ripple.button : heldButton;

    this.display(this.data.frames[frame]!);

    for (const [key, element] of this.slots) {
      element.toggleAttribute("data-active", element === activeSlot);
      element.toggleAttribute("data-selected", key === selected);

      if (element === activeSlot && activeButton !== undefined) {
        element.dataset.button = activeButton;
      } else {
        delete element.dataset.button;
      }
    }

    for (const [key, element] of this.keys) {
      element.toggleAttribute("data-held", held.includes(key as Control));
    }

    if (heldButton === undefined) {
      delete this.pointer.dataset.held;
    } else {
      this.pointer.dataset.held = heldButton;
    }
  }

  private display({ slots, cursor, dragged }: Display) {
    for (const [key, element] of this.slots) {
      this.fill(element, slots[key] ?? null);
      element.toggleAttribute("data-dragged", dragged.includes(key));
    }

    this.fill(this.held, cursor);
  }

  private movePointer(duration: number, frame = this.frame) {
    const target = this.data.frames[frame]!.pointer;

    if (target === null) {
      return;
    }

    const [x, y] = target;

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
    if (this.pointer.hidden) {
      return;
    }

    for (const element of [...this.slots.values(), ...(this.bookButton === null ? [] : [this.bookButton])]) {
      element.toggleAttribute("data-hovered", this.isUnderPointer(element));
    }

    const entered = this.stages.findLastIndex(
      (stage, index) => index >= this.nextStage && this.isUnderPointer(this.slots.get(stage.slot)!),
    );

    if (entered >= 0) {
      this.display(this.stages[entered]!);
      this.nextStage = entered + 1;
    }
  }

  private isUnderPointer(element: HTMLElement): boolean {
    const [x = 0, y = 0] = getComputedStyle(this.pointer).translate.split(" ").map((value) => parseFloat(value));
    const screen = this.screen.getBoundingClientRect();
    const bounds = element.getBoundingClientRect();
    const left = bounds.left - screen.left;
    const top = bounds.top - screen.top;

    return x >= left && x < left + bounds.width && y >= top && y < top + bounds.height;
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
      this.flash(this.keys.get(ripple.button));
    }

    this.flash(target);
  }

  private flash(target: HTMLElement | undefined) {
    if (target === undefined) {
      return;
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
      label.ariaLabel = String(count);

      for (const glyph of this.countGlyphs.layout(count)) {
        const glyphElement = document.createElement("span");
        glyphElement.className = "inventory-count-glyph";
        glyphElement.style.setProperty("--offset", String(glyph.offset));
        glyphElement.style.setProperty("--advance", String(glyph.advance));
        label.append(glyphElement);
      }

      element.append(label);
    }
  }
}
