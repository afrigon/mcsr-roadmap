import { ReviewStore } from "./ReviewStore";

export class ReviewController {
  private readonly store = ReviewStore.fromWindow();

  constructor(private readonly document: Document) {}

  start() {
    for (const button of this.document.querySelectorAll<HTMLButtonElement>("[data-review-toggle]")) {
      button.addEventListener("click", () => {
        this.store.toggle(button.dataset.reviewToggle!);
        this.apply();
      });
    }

    this.apply();
  }

  private apply() {
    for (const frame of this.document.querySelectorAll<HTMLElement>("[data-frame]")) {
      frame.toggleAttribute("data-reviewed", this.store.isReviewed(frame.dataset.statusOf!));
    }

    for (const button of this.document.querySelectorAll<HTMLButtonElement>("[data-review-toggle]")) {
      const reviewed = this.store.isReviewed(button.dataset.reviewToggle!);
      button.setAttribute("aria-pressed", String(reviewed));
      button.textContent = reviewed ? "✓ Reviewed" : "Review";
    }
  }
}
