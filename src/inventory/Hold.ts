import type { Control } from "./Control";
import type { Input } from "./Input";
import type { InventoryScreen } from "./InventoryScreen";
import { MouseButton } from "./MouseButton";
import type { Ripple } from "./Ripple";

export class Hold implements Input {
  readonly pointer = null;
  readonly ripple: Ripple | null;

  constructor(private readonly control: Control) {
    this.ripple = Object.values(MouseButton).includes(control as MouseButton) ? { target: "pointer" } : null;
  }

  perform(screen: InventoryScreen) {
    screen.hold(this.control);
  }
}
