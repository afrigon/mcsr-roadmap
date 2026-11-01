import { AbstractContainerMenu } from "./AbstractContainerMenu";
import type { ItemStack } from "./ItemStack";
import { MenuSlot } from "./MenuSlot";
import { PlayerSlots } from "./PlayerSlots";
import { Slot } from "./Slot";
import { SlotContainer } from "./SlotContainer";
import { SlotSection } from "./SlotSection";

const rows = 3;
const chestSize = rows * 9;
const rowOffset = (rows - 4) * 18;

export class ChestMenu extends AbstractContainerMenu {
  readonly imageWidth = 176;
  readonly imageHeight = 114 + rows * 18;
  readonly slots: readonly MenuSlot[] = [
    ...Slot.all(SlotSection.Chest).map(
      (slot, index) => new MenuSlot(slot, SlotContainer.Chest, 8 + (index % 9) * 18, 18 + Math.floor(index / 9) * 18),
    ),
    ...PlayerSlots.inventory(8, 103 + rowOffset),
    ...PlayerSlots.hotbar(8, 161 + rowOffset),
  ];

  protected quickMoveStack(index: number): ItemStack | null {
    const slot = this.slots[index]!;
    const item = this.item(slot);

    if (item === null) {
      return null;
    }

    const remaining =
      index < chestSize
        ? this.moveItemStackTo(item, chestSize, this.slots.length, true)
        : this.moveItemStackTo(item, 0, chestSize, false);

    return this.finishQuickMove(slot, item, remaining);
  }
}
