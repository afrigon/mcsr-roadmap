import type { Goal } from "../roadmap/Goal";

export class TimelineColumn {
  constructor(
    readonly goal: Goal,
    readonly x: number,
    readonly width: number,
  ) {}
}
