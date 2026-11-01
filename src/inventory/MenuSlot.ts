import { Equipment } from "./Equipment";
import { EquipmentSlot } from "./EquipmentSlot";
import type { ItemStack } from "./ItemStack";
import type { Slot } from "./Slot";
import { SlotContainer } from "./SlotContainer";
import { SlotSection } from "./SlotSection";

const containerStackLimit = 64;
const armorStackLimit = 1;
const armorSlots = [EquipmentSlot.Head, EquipmentSlot.Chest, EquipmentSlot.Legs, EquipmentSlot.Feet];

export class MenuSlot {
  constructor(
    readonly slot: Slot,
    readonly container: SlotContainer,
    readonly x: number,
    readonly y: number,
  ) {}

  get key(): string {
    return this.slot.key;
  }

  get maxStackSize(): number {
    return this.slot.section === SlotSection.Armor ? armorStackLimit : containerStackLimit;
  }

  get takesWholeStack(): boolean {
    return this.container === SlotContainer.Result;
  }

  maxStackSizeFor(stack: ItemStack): number {
    return Math.min(this.maxStackSize, stack.maxCount);
  }

  mayPlace(stack: ItemStack): boolean {
    if (this.container === SlotContainer.Result) {
      return false;
    }

    if (this.slot.section === SlotSection.Armor) {
      return Equipment.slotFor(stack.icon) === armorSlots[this.slot.index - 1];
    }

    return true;
  }
}
