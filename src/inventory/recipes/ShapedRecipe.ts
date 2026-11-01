import type { ItemStack } from "../ItemStack";
import type { CraftingGrid } from "./CraftingGrid";
import type { CraftingRecipe } from "./CraftingRecipe";
import { Ingredient } from "./Ingredient";

export class ShapedRecipe implements CraftingRecipe {
  constructor(
    readonly id: string,
    readonly result: ItemStack,
    private readonly width: number,
    private readonly height: number,
    private readonly pattern: readonly Ingredient[],
  ) {}

  matches(grid: CraftingGrid): boolean {
    for (let x = 0; x <= grid.width - this.width; x++) {
      for (let y = 0; y <= grid.height - this.height; y++) {
        if (this.matchesAt(grid, x, y, true) || this.matchesAt(grid, x, y, false)) {
          return true;
        }
      }
    }

    return false;
  }

  private matchesAt(grid: CraftingGrid, offsetX: number, offsetY: number, mirrored: boolean): boolean {
    for (let x = 0; x < grid.width; x++) {
      for (let y = 0; y < grid.height; y++) {
        const patternX = x - offsetX;
        const patternY = y - offsetY;
        const inside = patternX >= 0 && patternY >= 0 && patternX < this.width && patternY < this.height;
        const column = mirrored ? this.width - patternX - 1 : patternX;
        const ingredient = inside ? this.pattern[column + patternY * this.width]! : Ingredient.empty;

        if (!ingredient.test(grid.at(x, y))) {
          return false;
        }
      }
    }

    return true;
  }
}
