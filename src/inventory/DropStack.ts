import type { Action } from "./Action";
import type { InventoryState } from "./InventoryState";
import { Modifier } from "./Modifier";
import type { Slot } from "./Slot";

export class DropStack implements Action {
  readonly modifier = Modifier.Ctrl;
  readonly press = { device: "keyboard", key: "Q" } as const;

  constructor(readonly slot: Slot) {}

  apply(state: InventoryState): InventoryState {
    state.require(this.slot);

    return state.with(this.slot, null);
  }
}
