import type { Action } from "./Action";
import type { InventoryState } from "./InventoryState";
import type { Slot } from "./Slot";

export class DropStack implements Action {
  readonly inputs = ["Ctrl", "Q"];

  constructor(readonly slot: Slot) {}

  apply(state: InventoryState): InventoryState {
    state.require(this.slot);

    return state.with(this.slot, null);
  }
}
