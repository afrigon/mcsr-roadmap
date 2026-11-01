import { AbstractContainerMenu } from "./AbstractContainerMenu";
import type { InventoryState } from "./InventoryState";
import { MenuSlot } from "./MenuSlot";
import { CraftingGrid } from "./recipes/CraftingGrid";
import type { RecipeLibrary } from "./recipes/RecipeLibrary";
import { RemainingItems } from "./recipes/RemainingItems";
import { Slot } from "./Slot";
import { SlotContainer } from "./SlotContainer";
import { SlotSection } from "./SlotSection";

export interface BookButton {
  readonly x: number;
  readonly y: number;
}

export abstract class RecipeBookMenu extends AbstractContainerMenu {
  abstract readonly gridWidth: number;
  abstract readonly gridHeight: number;
  abstract readonly bookButton: BookButton;

  constructor(
    state: InventoryState,
    private readonly recipes: RecipeLibrary,
  ) {
    if (state.get(Slot.of(SlotSection.Result, 1)) !== null) {
      throw new Error('The "result" slot is crafted from the grid, so it cannot be filled directly');
    }

    super(state);
  }

  protected static resultSlot(x: number, y: number): MenuSlot {
    return new MenuSlot(Slot.of(SlotSection.Result, 1), SlotContainer.Result, x, y);
  }

  protected static gridSlots(width: number, height: number, x: number, y: number): MenuSlot[] {
    return Slot.range(SlotSection.Crafting, width * height).map(
      (slot, index) =>
        new MenuSlot(slot, SlotContainer.CraftingGrid, x + (index % width) * 18, y + Math.floor(index / width) * 18),
    );
  }

  override canTakeItemForPickAll(slot: MenuSlot): boolean {
    return slot.container !== SlotContainer.Result;
  }

  override canDragTo(slot: MenuSlot): boolean {
    return slot.container !== SlotContainer.Result;
  }

  protected override slotChanged(slot: MenuSlot) {
    if (slot.container === SlotContainer.CraftingGrid) {
      this.updateResult();
    }
  }

  protected override onTake(slot: MenuSlot) {
    if (slot.container !== SlotContainer.Result) {
      return;
    }

    for (const gridSlot of this.craftingSlots) {
      const item = this.item(gridSlot);

      if (item === null) {
        continue;
      }

      const remainder = RemainingItems.of(item);
      const left = item.withCount(item.count - 1);
      this.set(gridSlot, left);

      if (remainder === null) {
        continue;
      }

      if (left === null) {
        this.set(gridSlot, remainder);
      } else if (left.stacksWith(remainder)) {
        this.set(gridSlot, left.withCount(left.count + remainder.count));
      } else {
        throw new Error(`Crafting leaves a ${remainder.icon.name} that would go into the inventory, which the demo does not model`);
      }
    }
  }

  protected updateResult() {
    const recipe = this.recipes.find(this.grid());
    this.setState(Slot.of(SlotSection.Result, 1), recipe?.result ?? null);
  }

  private get craftingSlots(): MenuSlot[] {
    return this.slots.filter((slot) => slot.container === SlotContainer.CraftingGrid);
  }

  private grid(): CraftingGrid {
    return new CraftingGrid(
      this.gridWidth,
      this.gridHeight,
      this.craftingSlots.map((slot) => this.item(slot)),
    );
  }
}
