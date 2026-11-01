import { Equipment } from "./Equipment";
import { EquipmentSlot } from "./EquipmentSlot";
import type { InventoryState } from "./InventoryState";
import type { ItemStack } from "./ItemStack";
import { MenuSlot } from "./MenuSlot";
import { PlayerSlots } from "./PlayerSlots";
import type { RecipeLibrary } from "./recipes/RecipeLibrary";
import { RecipeBookMenu } from "./RecipeBookMenu";
import { Slot } from "./Slot";
import { SlotContainer } from "./SlotContainer";
import { SlotSection } from "./SlotSection";

const resultIndex = 0;
const gridStart = 1;
const armorStart = 5;
const inventoryStart = 9;
const hotbarStart = 36;
const offhandIndex = 45;
const armorPieces = [EquipmentSlot.Head, EquipmentSlot.Chest, EquipmentSlot.Legs, EquipmentSlot.Feet];

export class InventoryMenu extends RecipeBookMenu {
  readonly imageWidth = 176;
  readonly imageHeight = 166;
  readonly gridWidth = 2;
  readonly gridHeight = 2;
  readonly bookButton = { x: 104, y: 61 };
  readonly slots: readonly MenuSlot[] = [
    RecipeBookMenu.resultSlot(154, 28),
    ...RecipeBookMenu.gridSlots(2, 2, 98, 18),
    ...Slot.all(SlotSection.Armor).map((slot, index) => new MenuSlot(slot, SlotContainer.Player, 8, 8 + index * 18)),
    ...PlayerSlots.inventory(8, 84),
    ...PlayerSlots.hotbar(8, 142),
    new MenuSlot(Slot.of(SlotSection.Offhand, 1), SlotContainer.Player, 77, 62),
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

    const equipment = Equipment.slotFor(item.icon);
    const armorTarget = armorStart + armorPieces.indexOf(equipment);
    let remaining: number;

    if (index === resultIndex) {
      remaining = this.moveItemStackTo(item, inventoryStart, offhandIndex, true);
    } else if (index >= gridStart && index < inventoryStart) {
      remaining = this.moveItemStackTo(item, inventoryStart, offhandIndex, false);
    } else if (armorPieces.includes(equipment) && this.item(this.slots[armorTarget]!) === null) {
      remaining = this.moveItemStackTo(item, armorTarget, armorTarget + 1, false);
    } else if (equipment === EquipmentSlot.Offhand && this.item(this.slots[offhandIndex]!) === null) {
      remaining = this.moveItemStackTo(item, offhandIndex, offhandIndex + 1, false);
    } else if (index >= inventoryStart && index < hotbarStart) {
      remaining = this.moveItemStackTo(item, hotbarStart, offhandIndex, false);
    } else if (index >= hotbarStart && index < offhandIndex) {
      remaining = this.moveItemStackTo(item, inventoryStart, hotbarStart, false);
    } else {
      remaining = this.moveItemStackTo(item, inventoryStart, offhandIndex, false);
    }

    return this.finishQuickMove(slot, item, remaining);
  }
}
