import type { ItemStack } from "../ItemStack";
import type { CraftingGrid } from "./CraftingGrid";

export interface CraftingRecipe {
  readonly id: string;
  readonly result: ItemStack;
  matches(grid: CraftingGrid): boolean;
}
