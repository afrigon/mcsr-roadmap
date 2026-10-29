import type { Item } from "../roadmap/Item";

export class TimelineNode {
  constructor(
    readonly item: Item,
    readonly x: number,
    readonly y: number,
    readonly external: boolean,
  ) {}
}
