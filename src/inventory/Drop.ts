import type { Action } from "./Action";
import type { InventoryState } from "./InventoryState";
import type { Slot } from "./Slot";

export class Drop implements Action {
  readonly modifier = null;
  readonly press = { device: "keyboard", key: "Q" } as const;

  constructor(readonly slot: Slot) {}

  apply(state: InventoryState): InventoryState {
    const stack = state.require(this.slot);

    return state.with(this.slot, stack.withCount(stack.count - 1));
  }
}
