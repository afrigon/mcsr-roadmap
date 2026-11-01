type EncodedStack = [icon: number, count: number];

interface Frame {
  slots: Record<string, EncodedStack>;
  cursor: EncodedStack | null;
}

interface DemoData {
  pace: number;
  icons: string[];
  frames: Frame[];
  steps: string[];
}

export class InventoryDemoController {
  private readonly data: DemoData;
  private readonly slots: Map<string, HTMLElement>;
  private readonly steps: HTMLElement[];
  private readonly playButton: HTMLButtonElement;
  private readonly speedButtons: HTMLButtonElement[];
  private readonly cursor = document.createElement("span");
  private frame = 0;
  private speed: number;
  private timer: number | undefined;

  constructor(private readonly demo: HTMLElement) {
    this.data = JSON.parse(demo.dataset.inventoryDemo!) as DemoData;
    this.slots = new Map(
      [...demo.querySelectorAll<HTMLElement>("[data-slot]")].map((slot) => [slot.dataset.slot!, slot]),
    );
    this.steps = [...demo.querySelectorAll<HTMLElement>("[data-step]")];
    this.playButton = demo.querySelector<HTMLButtonElement>('[data-control="play"]')!;
    this.speedButtons = [...demo.querySelectorAll<HTMLButtonElement>("[data-speed]")];
    this.speed = Number(this.speedButtons[0]!.dataset.speed);
    this.cursor.className = "inventory-cursor";
  }

  private get lastFrame(): number {
    return this.data.frames.length - 1;
  }

  private get playing(): boolean {
    return this.timer !== undefined;
  }

  start() {
    this.playButton.addEventListener("click", () => (this.playing ? this.pause() : this.play()));
    this.demo.querySelector('[data-control="previous"]')!.addEventListener("click", () => this.step(-1));
    this.demo.querySelector('[data-control="next"]')!.addEventListener("click", () => this.step(1));

    for (const button of this.speedButtons) {
      button.addEventListener("click", () => this.setSpeed(Number(button.dataset.speed)));
    }

    this.show(0);
  }

  private play() {
    if (this.frame === this.lastFrame) {
      this.show(0);
    }

    this.playButton.textContent = "Pause";
    this.schedule();
  }

  private pause() {
    window.clearInterval(this.timer);
    this.timer = undefined;
    this.playButton.textContent = "Play";
  }

  private schedule() {
    window.clearInterval(this.timer);
    this.timer = window.setInterval(() => {
      this.show(this.frame + 1);

      if (this.frame === this.lastFrame) {
        this.pause();
      }
    }, 1000 / (this.data.pace * this.speed));
  }

  private step(direction: number) {
    this.pause();
    this.show(Math.min(Math.max(this.frame + direction, 0), this.lastFrame));
  }

  private setSpeed(speed: number) {
    this.speed = speed;

    for (const button of this.speedButtons) {
      button.setAttribute("aria-pressed", String(Number(button.dataset.speed) === speed));
    }

    if (this.playing) {
      this.schedule();
    }
  }

  private show(frame: number) {
    this.frame = frame;
    const { slots, cursor } = this.data.frames[frame]!;
    const activeStep = frame - 1;
    const activeSlot = activeStep < 0 ? undefined : this.slots.get(this.data.steps[activeStep]!);

    for (const [key, element] of this.slots) {
      this.fill(element, slots[key] ?? null);
      element.toggleAttribute("data-active", element === activeSlot);
    }

    for (const [index, step] of this.steps.entries()) {
      step.toggleAttribute("data-active", index === activeStep);
      step.toggleAttribute("data-done", index < activeStep);
    }

    if (cursor !== null && activeSlot !== undefined) {
      this.fill(this.cursor, cursor);
      activeSlot.append(this.cursor);
    } else {
      this.cursor.remove();
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
