const tooltipGap = 12;

export class TooltipController {
  constructor(
    private readonly container: HTMLElement,
    private readonly tooltip: HTMLElement,
  ) {}

  start() {
    this.container.addEventListener("pointerover", (event) => this.show(event));
    this.container.addEventListener("pointerout", (event) => this.hideFor(event));
    this.container.addEventListener("pointerdown", () => this.hide());
    this.container.addEventListener("scroll", () => this.hide(), { passive: true });
  }

  private show(event: PointerEvent) {
    const frame = (event.target as Element).closest<HTMLElement>("[data-frame]");

    if (frame === null || event.buttons !== 0) {
      return;
    }

    this.tooltip.querySelector("[data-tooltip-title]")!.textContent = frame.dataset.title ?? "";
    this.tooltip.querySelector("[data-tooltip-description]")!.textContent = frame.dataset.description ?? "";
    this.tooltip.querySelector("[data-tooltip-goal]")!.textContent = frame.dataset.goal ?? "";
    this.tooltip.toggleAttribute("data-ranked", frame.hasAttribute("data-ranked"));
    const bounds = frame.getBoundingClientRect();
    this.tooltip.style.left = `${bounds.right + tooltipGap}px`;
    this.tooltip.style.top = `${bounds.top}px`;
    this.tooltip.classList.add("visible");
  }

  private hideFor(event: PointerEvent) {
    if ((event.target as Element).closest("[data-frame]") !== null) {
      this.hide();
    }
  }

  private hide() {
    this.tooltip.classList.remove("visible");
  }
}
