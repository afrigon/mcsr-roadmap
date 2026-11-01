import type { Action } from "./Action";
import type { InventoryState } from "./InventoryState";
import { Slot } from "./Slot";
import { SlotSection } from "./SlotSection";

export class HotkeySwap implements Action {
  readonly inputs: readonly string[];
  private readonly hotbarSlot: Slot;

  constructor(
    hotbarIndex: number,
    readonly slot: Slot,
  ) {
    this.hotbarSlot = Slot.of(SlotSection.Hotbar, hotbarIndex);
    this.inputs = [String(hotbarIndex)];
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
