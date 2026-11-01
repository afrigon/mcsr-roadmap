import type { Input } from "./Input";
import type { InventoryScreen } from "./InventoryScreen";
import type { Slot } from "./Slot";

export class Hover implements Input {
  readonly ripple = null;

  constructor(readonly pointer: Slot) {}

  perform(screen: InventoryScreen) {
    screen.hover(this.pointer);
  }
}
