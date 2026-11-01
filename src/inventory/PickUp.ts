import type { Action } from "./Action";
import type { InventoryState } from "./InventoryState";
import type { Slot } from "./Slot";

export class PickUp implements Action {
  readonly inputs = ["Click"];

  constructor(readonly slot: Slot) {}

  apply(state: InventoryState): InventoryState {
    if (state.cursor !== null) {
      throw new Error(`Cannot pick up "${this.slot.key}": the cursor already holds an item, use place`);
    }

    return state.with(this.slot, null).withCursor(state.require(this.slot));
  }
}
