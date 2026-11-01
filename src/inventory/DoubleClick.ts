import type { Input } from "./Input";
import type { InventoryScreen } from "./InventoryScreen";
import { MouseButton } from "./MouseButton";
import type { Slot } from "./Slot";

const clickInterval = 80;

export class DoubleClick implements Input {
  readonly ripple = { target: "pointer", clicks: 2 } as const;

  constructor(readonly pointer: Slot | null) {}

  perform(screen: InventoryScreen) {
    if (this.pointer !== null) {
      screen.hover(this.pointer);
    }

    screen.hold(MouseButton.Left);
    screen.release(MouseButton.Left);
    screen.advance(clickInterval);
    screen.hold(MouseButton.Left);
    screen.release(MouseButton.Left);
  }
}
