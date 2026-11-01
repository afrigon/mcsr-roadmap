import type { InventoryState } from "./InventoryState";
import type { Slot } from "./Slot";

export interface Action {
  readonly slot: Slot;
  readonly inputs: readonly string[];
  apply(state: InventoryState): InventoryState;
}
