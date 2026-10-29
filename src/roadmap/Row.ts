import type { Item } from "./Item";

export class Row {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly items: readonly Item[],
  ) {}
}
