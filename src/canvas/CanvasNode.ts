import type { Item } from "../roadmap/Item";

export class CanvasNode {
  constructor(
    readonly item: Item,
    readonly x: number,
    readonly y: number,
  ) {}
}
