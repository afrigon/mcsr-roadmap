import type { Action } from "./Action";
import type { InventoryState } from "./InventoryState";
import type { Press } from "./Press";
import { Slot } from "./Slot";
import { SlotSection } from "./SlotSection";

export class HotkeySwap implements Action {
  readonly modifier = null;
  readonly press: Press;
  private readonly hotbarSlot: Slot;

  constructor(
    hotbarIndex: number,
    readonly slot: Slot,
  ) {
    this.hotbarSlot = Slot.of(SlotSection.Hotbar, hotbarIndex);
    this.press = { device: "keyboard", key: String(hotbarIndex) };
  }

  apply(state: InventoryState): InventoryState {
    const hovered = state.get(this.slot);
    const held = state.get(this.hotbarSlot);

    if (hovered === null && held === null) {
      throw new Error(`Hotkey ${this.hotbarSlot.index} on "${this.slot.key}" swaps two empty slots`);
    }

    return state.with(this.slot, held).with(this.hotbarSlot, hovered);
  }
}
