import type { Category } from "../roadmap/Category";
import type { CanvasNode } from "./CanvasNode";

export class CanvasBand {
  constructor(
    readonly category: Category,
    readonly top: number,
    readonly height: number,
    readonly nodes: readonly CanvasNode[],
  ) {}
}
