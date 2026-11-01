import type { InventoryScreen } from "./InventoryScreen";
import type { Ripple } from "./Ripple";
import type { Slot } from "./Slot";

export interface Input {
  readonly pointer: Slot | null;
  readonly ripple: Ripple | null;
  perform(screen: InventoryScreen): void;
}
