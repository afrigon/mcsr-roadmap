import type { Goal } from "../roadmap/Goal";

export class GoalBracket {
  constructor(
    readonly goal: Goal,
    readonly start: number,
    readonly end: number,
  ) {}
}
