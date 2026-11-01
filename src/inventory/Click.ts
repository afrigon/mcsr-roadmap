import type { Input } from "./Input";
import type { InventoryScreen } from "./InventoryScreen";
import type { MouseButton } from "./MouseButton";
import type { Ripple } from "./Ripple";
import type { Slot } from "./Slot";

export class Click implements Input {
  readonly ripple: Ripple;

  constructor(
    private readonly button: MouseButton,
    readonly pointer: Slot | null,
  ) {
    this.ripple = { target: "pointer", button };
  }

  perform(screen: InventoryScreen) {
    if (this.pointer !== null) {
      screen.hover(this.pointer);
    }

    screen.hold(this.button);
    screen.release(this.button);
  }
}
