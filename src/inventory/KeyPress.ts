import type { Input } from "./Input";
import type { InventoryScreen } from "./InventoryScreen";
import type { Ripple } from "./Ripple";

export class KeyPress implements Input {
  readonly ripple: Ripple;

  constructor(private readonly key: string) {
    this.ripple = { target: "key", key };
  }

  perform(screen: InventoryScreen) {
    screen.press(this.key);
  }
}
