import type { InventoryState } from "./InventoryState";
import type { Modifier } from "./Modifier";
import type { Press } from "./Press";
import type { Slot } from "./Slot";

export interface Action {
  readonly slot: Slot;
  readonly modifier: Modifier | null;
  readonly press: Press;
  apply(state: InventoryState): InventoryState;
}
