import type { ItemStack } from "../ItemStack";
import type { CraftingGrid } from "./CraftingGrid";
import type { CraftingRecipe } from "./CraftingRecipe";
import type { Ingredient } from "./Ingredient";

export class ShapelessRecipe implements CraftingRecipe {
  constructor(
    readonly id: string,
    readonly result: ItemStack,
    private readonly ingredients: readonly Ingredient[],
  ) {}

  matches(grid: CraftingGrid): boolean {
    const items = grid.filled();

    return items.length === this.ingredients.length && this.assign(items, 0, new Set());
  }

  private assign(items: readonly ItemStack[], index: number, used: Set<number>): boolean {
    if (index === items.length) {
      return true;
    }

    for (const [ingredientIndex, ingredient] of this.ingredients.entries()) {
      if (used.has(ingredientIndex) || !ingredient.test(items[index]!)) {
        continue;
      }

      used.add(ingredientIndex);

      if (this.assign(items, index + 1, used)) {
        return true;
      }

      used.delete(ingredientIndex);
    }

    return false;
  }
}
