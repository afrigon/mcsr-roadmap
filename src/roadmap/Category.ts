import type { Item } from "./Item";
import type { Theme } from "./Theme";

export class Category {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly theme: Theme,
    readonly items: readonly Item[],
  ) {}
}
