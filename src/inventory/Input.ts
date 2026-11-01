import type { InventoryScreen } from "./InventoryScreen";
import type { Ripple } from "./Ripple";

export interface Input {
  readonly ripple: Ripple | null;
  perform(screen: InventoryScreen): void;
}
