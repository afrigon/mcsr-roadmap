const dragThreshold = 4;
const compactBracketWidth = 120;
const tinyBracketWidth = 56;
const labelInset = 16;

interface Drag {
  pointerX: number;
  startOffsetX: number;
  moved: boolean;
}

export class CanvasController {
  private offsetX = 0;
  private offsetY = 0;
  private drag: Drag | null = null;
  private readonly contentWidth: number;
  private readonly contentHeight: number;

  constructor(
    private readonly viewport: HTMLElement,
    private readonly world: HTMLElement,
    private readonly brackets: HTMLElement[],
    private readonly bands: HTMLElement[],
    private readonly labels: HTMLElement[],
  ) {
    this.contentWidth = Number(world.dataset.width);
    this.contentHeight = Number(world.dataset.height);
  }

  start() {
    this.viewport.addEventListener("pointerdown", (event) => this.beginDrag(event));
    this.viewport.addEventListener("pointermove", (event) => this.moveDrag(event));
    this.viewport.addEventListener("pointerup", () => this.endDrag());
    this.viewport.addEventListener("pointercancel", () => this.cancelDrag());
    this.viewport.addEventListener("click", (event) => this.suppressDragClick(event), { capture: true });
    this.viewport.addEventListener("wheel", (event) => this.scroll(event), { passive: false });
    window.addEventListener("resize", () => this.apply());
    this.apply();
  }

  private beginDrag(event: PointerEvent) {
    if (event.button !== 0) {
      return;
    }

    this.drag = { pointerX: event.clientX, startOffsetX: this.offsetX, moved: false };
  }

  private moveDrag(event: PointerEvent) {
    if (this.drag === null) {
      return;
    }

    const distance = event.clientX - this.drag.pointerX;

    if (!this.drag.moved && Math.abs(distance) < dragThreshold) {
      return;
    }

    if (!this.drag.moved) {
      this.drag.moved = true;
      this.viewport.setPointerCapture(event.pointerId);
      this.viewport.classList.add("dragging");
    }

    this.offsetX = this.drag.startOffsetX + distance;
    this.apply();
  }

  private endDrag() {
    this.viewport.classList.remove("dragging");

    if (this.drag !== null && !this.drag.moved) {
      this.drag = null;
    }
  }

  private cancelDrag() {
    this.viewport.classList.remove("dragging");
    this.drag = null;
  }

  private suppressDragClick(event: MouseEvent) {
    if (this.drag?.moved) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.drag = null;
  }

  private scroll(event: WheelEvent) {
    if (event.ctrlKey) {
      return;
    }

    event.preventDefault();
    this.offsetX -= event.shiftKey ? event.deltaY : event.deltaX;
    this.offsetY -= event.shiftKey ? 0 : event.deltaY;
    this.apply();
  }

  private apply() {
    this.offsetX = this.clamp(this.offsetX, this.contentWidth, this.viewport.clientWidth);
    this.offsetY = this.clamp(this.offsetY, this.contentHeight, this.viewport.clientHeight);
    this.world.style.transform = `translate(${this.offsetX}px, ${this.offsetY}px)`;
    this.viewport.style.backgroundPosition = `${this.offsetX}px ${this.offsetY}px`;

    for (const bracket of this.brackets) {
      const start = Number(bracket.dataset.start);
      const width = Number(bracket.dataset.end) - start;
      bracket.style.left = `${this.offsetX + start}px`;
      bracket.style.width = `${width}px`;
      bracket.toggleAttribute("data-compact", width < compactBracketWidth);
      bracket.toggleAttribute("data-tiny", width < tinyBracketWidth);
    }

    for (const band of this.bands) {
      band.style.width = `${Math.max(this.contentWidth, this.viewport.clientWidth)}px`;
    }

    for (const label of this.labels) {
      label.style.left = `${Math.max(labelInset, labelInset - this.offsetX)}px`;
    }
  }

  private clamp(offset: number, content: number, available: number): number {
    return Math.min(0, Math.max(Math.min(0, available - content), offset));
  }
}
