export class CategoryRailController {
  constructor(
    private readonly rail: HTMLElement,
    private readonly viewport: HTMLElement,
    private readonly world: HTMLElement,
  ) {}

  start() {
    for (const segment of this.rail.querySelectorAll<HTMLElement>("[data-rail-target]")) {
      segment.addEventListener("click", () => this.scrollTo(segment.dataset.railTarget!));
    }

    this.viewport.addEventListener("scroll", () => this.showView(), { passive: true });
    window.addEventListener("resize", () => this.showView());
    this.showView();
  }

  private scrollTo(categoryId: string) {
    const band = this.world.querySelector<HTMLElement>(`[data-band="${categoryId}"]`)!;
    this.viewport.scrollTo({ top: band.offsetTop, behavior: "smooth" });
  }

  private showView() {
    const view = this.rail.querySelector<HTMLElement>("[data-rail-view]")!;
    const worldTop = this.world.offsetTop;
    const visibleHeight = this.viewport.clientHeight - worldTop;
    const height = this.world.offsetHeight;
    view.style.top = `${(this.viewport.scrollTop / height) * 100}%`;
    view.style.height = `${(Math.min(visibleHeight, height) / height) * 100}%`;
  }
}
