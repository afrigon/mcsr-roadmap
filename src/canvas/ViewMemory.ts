const storageKey = "mcsr-roadmap:view";

interface View {
  left: number;
  top: number;
  popoverId: string | null;
  popoverTop: number;
}

export class ViewMemory {
  constructor(
    private readonly viewport: HTMLElement,
    private readonly storage: Storage | null,
  ) {}

  static fromWindow(viewport: HTMLElement): ViewMemory {
    try {
      return new ViewMemory(viewport, window.sessionStorage);
    } catch {
      return new ViewMemory(viewport, null);
    }
  }

  start() {
    this.restore();
    window.addEventListener("pagehide", () => this.save());
  }

  private restore() {
    const view = this.load();

    if (view === null) {
      return;
    }

    this.viewport.scrollLeft = view.left;
    this.viewport.scrollTop = view.top;

    if (view.popoverId !== null && this.openPopover()?.id === view.popoverId) {
      this.popoverScroller()!.scrollTop = view.popoverTop;
    }
  }

  private save() {
    const popover = this.openPopover();
    const view: View = {
      left: this.viewport.scrollLeft,
      top: this.viewport.scrollTop,
      popoverId: popover?.id ?? null,
      popoverTop: this.popoverScroller()?.scrollTop ?? 0,
    };

    try {
      this.storage?.setItem(storageKey, JSON.stringify(view));
    } catch {
      return;
    }
  }

  private load(): View | null {
    try {
      const stored = this.storage?.getItem(storageKey);

      return stored === null || stored === undefined ? null : (JSON.parse(stored) as View);
    } catch {
      return null;
    }
  }

  private openPopover(): HTMLElement | null {
    return document.querySelector<HTMLElement>("[data-item-popover]:popover-open");
  }

  private popoverScroller(): HTMLElement | null {
    return this.openPopover()?.querySelector<HTMLElement>("[data-popover-scroll]") ?? null;
  }
}
