import { Status } from "./Status";
import type { StatusStore } from "./StatusStore";

const toastDuration = 4000;

export class StatusController {
  private toastTimer: number | undefined;

  constructor(
    private readonly document: Document,
    private readonly store: StatusStore,
  ) {}

  start() {
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
      this.showToast(button.dataset.itemTitle ?? id);
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

    for (const element of this.document.querySelectorAll<HTMLElement>("[data-prerequisites]")) {
      element.toggleAttribute("data-prerequisite-warning", this.hasMissingPrerequisite(element));
    }
  }

  private hasMissingPrerequisite(element: HTMLElement): boolean {
    if (this.store.get(element.dataset.statusOf!) === Status.NotLearned) {
      return false;
    }

    const prerequisites = element.dataset.prerequisites!.split(" ").filter((id) => id !== "");

    return prerequisites.some((id) => this.store.get(id) === Status.NotLearned);
  }

  private showToast(title: string) {
    const toast = this.document.getElementById("advancement-toast");

    if (toast === null) {
      return;
    }

    toast.querySelector("[data-toast-title]")!.textContent = title;
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
