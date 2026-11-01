import type { Control } from "./Control";
import type { Input } from "./Input";
import type { ContainerScreen } from "./ContainerScreen";
import { MouseButton } from "./MouseButton";
import type { Ripple } from "./Ripple";

export class Hold implements Input {
  readonly ripple: Ripple | null;

  constructor(private readonly control: Control) {
    this.ripple = Object.values(MouseButton).includes(control as MouseButton)
      ? { target: "pointer", button: control as MouseButton }
      : null;
  }

  perform(screen: ContainerScreen) {
    screen.hold(this.control);
  }
}
