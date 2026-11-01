import { MenuSlot } from "./MenuSlot";
import { Slot } from "./Slot";
import { SlotContainer } from "./SlotContainer";
import { SlotSection } from "./SlotSection";

export class PlayerSlots {
  static inventory(x: number, y: number): MenuSlot[] {
    return Slot.all(SlotSection.Inventory).map(
      (slot, index) => new MenuSlot(slot, SlotContainer.Player, x + (index % 9) * 18, y + Math.floor(index / 9) * 18),
    );
  }

  static hotbar(x: number, y: number): MenuSlot[] {
    return Slot.all(SlotSection.Hotbar).map((slot, index) => new MenuSlot(slot, SlotContainer.Player, x + index * 18, y));
  }
}
