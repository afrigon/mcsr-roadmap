import type { InventoryState } from "./InventoryState";
import type { ItemStack } from "./ItemStack";
import type { MenuSlot } from "./MenuSlot";
import { PlayerSlots } from "./PlayerSlots";
import type { RecipeLibrary } from "./recipes/RecipeLibrary";
import { RecipeBookMenu } from "./RecipeBookMenu";

const resultIndex = 0;
const gridStart = 1;
const inventoryStart = 10;
const hotbarStart = 37;
const slotCount = 46;

export class CraftingMenu extends RecipeBookMenu {
  readonly imageWidth = 176;
  readonly imageHeight = 166;
  readonly gridWidth = 3;
  readonly gridHeight = 3;
  readonly bookButton = { x: 5, y: 34 };
  readonly slots: readonly MenuSlot[] = [
    RecipeBookMenu.resultSlot(124, 35),
    ...RecipeBookMenu.gridSlots(3, 3, 30, 17),
    ...PlayerSlots.inventory(8, 84),
    ...PlayerSlots.hotbar(8, 142),
  ];

  constructor(state: InventoryState, recipes: RecipeLibrary) {
    super(state, recipes);
    this.updateResult();
  }

  protected quickMoveStack(index: number): ItemStack | null {
    const slot = this.slots[index]!;
    const item = this.item(slot);

    if (item === null) {
      return null;
    }

    let remaining: number;

    if (index === resultIndex) {
      remaining = this.moveItemStackTo(item, inventoryStart, slotCount, true);
    } else if (index >= inventoryStart && index < slotCount) {
      remaining = this.moveItemStackTo(item, gridStart, inventoryStart, false);

      if (remaining === item.count) {
        remaining =
          index < hotbarStart
            ? this.moveItemStackTo(item, hotbarStart, slotCount, false)
            : this.moveItemStackTo(item, inventoryStart, hotbarStart, false);
      }
    } else {
      remaining = this.moveItemStackTo(item, inventoryStart, slotCount, false);
    }

    return this.finishQuickMove(slot, item, remaining);
  }
}
