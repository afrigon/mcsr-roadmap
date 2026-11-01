import type { Input } from "./Input";
import type { ContainerScreen } from "./ContainerScreen";
import type { MouseButton } from "./MouseButton";
import type { Ripple } from "./Ripple";
import type { Slot } from "./Slot";

export class Click implements Input {
  readonly ripple: Ripple;

  constructor(
    private readonly button: MouseButton,
    private readonly slot: Slot | null,
  ) {
    this.ripple = { target: "pointer", button };
  }

  perform(screen: ContainerScreen) {
    if (this.slot !== null) {
      screen.hover(this.slot);
    }

    screen.hold(this.button);
    screen.release(this.button);
  }
}
