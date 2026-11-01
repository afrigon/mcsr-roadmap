import { IconSource } from "../../roadmap/IconSource";
import type { ItemStack } from "../ItemStack";

export class Ingredient {
  static readonly empty = new Ingredient(new Set());

  constructor(private readonly items: ReadonlySet<string>) {}

  get isEmpty(): boolean {
    return this.items.size === 0;
  }

  test(stack: ItemStack | null): boolean {
    if (this.isEmpty) {
      return stack === null;
    }

    return stack !== null && stack.icon.source === IconSource.Item && this.items.has(stack.icon.name);
  }
}
