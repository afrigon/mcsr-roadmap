import type { Input } from "./Input";
import type { InventoryScreen } from "./InventoryScreen";
import type { MouseButton } from "./MouseButton";
import type { Slot } from "./Slot";

export class Click implements Input {
  readonly ripple = { target: "pointer" } as const;

  constructor(
    private readonly button: MouseButton,
    readonly pointer: Slot | null,
  ) {}

  perform(screen: InventoryScreen) {
    if (this.pointer !== null) {
      screen.hover(this.pointer);
    }

    screen.hold(this.button);
    screen.release(this.button);
  }
}
