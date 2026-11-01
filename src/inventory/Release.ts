import type { Control } from "./Control";
import type { Input } from "./Input";
import type { InventoryScreen } from "./InventoryScreen";

export class Release implements Input {
  readonly ripple = null;

  constructor(private readonly control: Control) {}

  perform(screen: InventoryScreen) {
    screen.release(this.control);
  }
}
