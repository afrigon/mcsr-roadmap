import type { Control } from "./Control";
import type { Input } from "./Input";
import type { ContainerScreen } from "./ContainerScreen";

export class Release implements Input {
  readonly ripple = null;

  constructor(private readonly control: Control) {}

  perform(screen: ContainerScreen) {
    screen.release(this.control);
  }
}
