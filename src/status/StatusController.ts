import { Status } from "./Status";
import type { StatusStore } from "./StatusStore";

const toastDuration = 4000;

export class StatusController {
  private toastTimer: number | undefined;
  private readonly parents = new Map<string, string>();

  constructor(
    private readonly document: Document,
    private readonly store: StatusStore,
  ) {}

  start() {
    for (const frame of this.document.querySelectorAll<HTMLElement>("[data-frame][data-parent]")) {
      this.parents.set(frame.dataset.statusOf!, frame.dataset.parent!);
    }

    this.applyAll();

    for (const button of this.document.querySelectorAll<HTMLButtonElement>("[data-status-option]")) {
      button.addEventListener("click", () => this.choose(button));
    }

    for (const popover of this.document.querySelectorAll<HTMLElement>("[popover][data-item-popover]")) {
      popover.addEventListener("toggle", (event) => this.syncHash(popover, event as ToggleEvent));
    }

    this.openFromHash();
  }

  private choose(button: HTMLButtonElement) {
    const id = button.dataset.itemId!;
    const status = button.dataset.statusOption as Status;
    const previous = this.store.get(id);
    this.store.set(id, status);
    this.applyAll();

    if (status === Status.Mastered && previous !== Status.Mastered) {
      this.showToast(button.dataset.itemTitle ?? id, button.dataset.itemIcon ?? "");
    }
  }

  private applyAll() {
    for (const element of this.document.querySelectorAll<HTMLElement>("[data-status-of]")) {
      element.dataset.status = this.store.get(element.dataset.statusOf!);
    }

    for (const button of this.document.querySelectorAll<HTMLButtonElement>("[data-status-option]")) {
      const selected = this.store.get(button.dataset.itemId!) === button.dataset.statusOption;
      button.setAttribute("aria-pressed", String(selected));
    }

    for (const element of this.document.querySelectorAll<HTMLElement>("[data-frame][data-parent]")) {
      element.toggleAttribute("data-warning", this.hasUnlearnedAncestor(element.dataset.statusOf!));
    }
  }

  private hasUnlearnedAncestor(id: string): boolean {
    const status = this.store.get(id);

    if (status === Status.NotLearned || status === Status.Ignored) {
      return false;
    }

    let ancestor = this.parents.get(id);

    while (ancestor !== undefined && this.store.get(ancestor) === Status.Ignored) {
      ancestor = this.parents.get(ancestor);
    }

    return ancestor !== undefined && this.store.get(ancestor) === Status.NotLearned;
  }

  private showToast(title: string, icon: string) {
    const toast = this.document.getElementById("advancement-toast");

    if (toast === null) {
      return;
    }

    toast.querySelector("[data-toast-title]")!.textContent = title;
    toast.querySelector<HTMLImageElement>("[data-toast-icon]")!.src = icon;
    toast.showPopover();
    window.clearTimeout(this.toastTimer);
    this.toastTimer = window.setTimeout(() => toast.hidePopover(), toastDuration);
  }

  private syncHash(popover: HTMLElement, event: ToggleEvent) {
    const hash = `#${popover.id}`;

    if (event.newState === "open") {
      history.replaceState(null, "", hash);
    } else if (location.hash === hash) {
      history.replaceState(null, "", location.pathname + location.search);
    }
  }

  private openFromHash() {
    if (location.hash.length <= 1) {
      return;
    }

    const target = this.document.getElementById(decodeURIComponent(location.hash.slice(1)));

    if (target?.hasAttribute("data-item-popover")) {
      target.showPopover();
    }
  }
}
