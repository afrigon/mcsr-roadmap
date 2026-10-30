import { Status } from "./Status";
import type { StatusStore } from "./StatusStore";

export class GoalProgress {
  private readonly itemsByGoal = new Map<string, string[]>();

  constructor(
    private readonly document: Document,
    private readonly store: StatusStore,
  ) {
    for (const frame of document.querySelectorAll<HTMLElement>("[data-frame][data-goal-id]")) {
      const items = this.itemsByGoal.get(frame.dataset.goalId!) ?? [];
      items.push(frame.dataset.statusOf!);
      this.itemsByGoal.set(frame.dataset.goalId!, items);
    }
  }

  update() {
    for (const element of this.document.querySelectorAll<HTMLElement>("[data-goal-progress]")) {
      const statuses = (this.itemsByGoal.get(element.dataset.goalProgress!) ?? []).map((id) => this.store.get(id));
      const mastered = statuses.filter((status) => status === Status.Mastered).length;
      const counted = statuses.filter((status) => status !== Status.Ignored).length;
      element.textContent = `${mastered} / ${counted}`;
    }
  }
}
