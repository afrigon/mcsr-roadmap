import type { Rank } from "./Rank";

export class Goal {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly shortTitle: string,
    readonly rank: Rank | null,
    readonly order: number,
  ) {}

  isAfter(other: Goal): boolean {
    return this.order > other.order;
  }
}
