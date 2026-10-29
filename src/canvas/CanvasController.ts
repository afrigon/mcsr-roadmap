const dragThreshold = 4;

interface Drag {
  pointerX: number;
  pointerY: number;
  startLeft: number;
  startTop: number;
  moved: boolean;
}

export class CanvasController {
  private drag: Drag | null = null;

  constructor(private readonly viewport: HTMLElement) {}

  start() {
    this.viewport.addEventListener("pointerdown", (event) => this.beginDrag(event));
    this.viewport.addEventListener("pointermove", (event) => this.moveDrag(event));
    this.viewport.addEventListener("pointerup", () => this.endDrag());
    this.viewport.addEventListener("pointercancel", () => this.cancelDrag());
    this.viewport.addEventListener("click", (event) => this.suppressDragClick(event), { capture: true });
  }

  private beginDrag(event: PointerEvent) {
    if (event.button !== 0 || this.isOnScrollbar(event)) {
      return;
    }

    this.drag = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      startLeft: this.viewport.scrollLeft,
      startTop: this.viewport.scrollTop,
      moved: false,
    };
  }

  private moveDrag(event: PointerEvent) {
    if (this.drag === null) {
      return;
    }

    const distanceX = event.clientX - this.drag.pointerX;
    const distanceY = event.clientY - this.drag.pointerY;

    if (!this.drag.moved && Math.hypot(distanceX, distanceY) < dragThreshold) {
      return;
    }

    if (!this.drag.moved) {
      this.drag.moved = true;
      this.viewport.setPointerCapture(event.pointerId);
      this.viewport.classList.add("dragging");
    }

    this.viewport.scrollLeft = this.drag.startLeft - distanceX;
    this.viewport.scrollTop = this.drag.startTop - distanceY;
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

  private isOnScrollbar(event: PointerEvent): boolean {
    const bounds = this.viewport.getBoundingClientRect();

    return (
      event.clientX - bounds.left >= this.viewport.clientWidth ||
      event.clientY - bounds.top >= this.viewport.clientHeight
    );
  }
}
