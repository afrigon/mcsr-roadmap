import type { Input } from "./Input";
import type { ContainerScreen } from "./ContainerScreen";
import type { MouseButton } from "./MouseButton";
import type { Ripple } from "./Ripple";
import type { PointerTarget } from "./PointerTarget";

export class Click implements Input {
  readonly ripple: Ripple;

  constructor(
    private readonly button: MouseButton,
    private readonly target: PointerTarget | null,
  ) {
    this.ripple = { target: "pointer", button };
  }

  perform(screen: ContainerScreen) {
    if (this.target !== null) {
      screen.hover(this.target);
    }

    screen.hold(this.button);
    screen.release(this.button);
  }
}
