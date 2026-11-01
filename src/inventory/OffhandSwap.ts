import type { Action } from "./Action";
import type { InventoryState } from "./InventoryState";
import { Slot } from "./Slot";

export class OffhandSwap implements Action {
  readonly modifier = null;
  readonly press = { device: "keyboard", key: "F" } as const;

  constructor(readonly slot: Slot) {}

  apply(state: InventoryState): InventoryState {
    const hovered = state.get(this.slot);
    const offhand = state.get(Slot.offhand);

    if (hovered === null && offhand === null) {
      throw new Error(`Offhand swap on "${this.slot.key}" swaps two empty slots`);
    }

    return state.with(this.slot, offhand).with(Slot.offhand, hovered);
  }
}
