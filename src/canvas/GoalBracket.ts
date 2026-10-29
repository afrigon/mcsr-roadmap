import type { Goal } from "../roadmap/Goal";
import { BracketSize } from "./BracketSize";
import { compactBracketWidth, tinyBracketWidth } from "./CanvasGeometry";

export class GoalBracket {
  constructor(
    readonly goal: Goal,
    readonly start: number,
    readonly end: number,
  ) {}

  get width(): number {
    return this.end - this.start;
  }

  get size(): BracketSize {
    if (this.width < tinyBracketWidth) {
      return BracketSize.Tiny;
    }

    if (this.width < compactBracketWidth) {
      return BracketSize.Compact;
    }

    return BracketSize.Full;
  }
}
