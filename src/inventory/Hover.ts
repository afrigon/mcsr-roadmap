import type { Input } from "./Input";
import type { ContainerScreen } from "./ContainerScreen";
import type { Slot } from "./Slot";

export class Hover implements Input {
  readonly ripple = null;

  constructor(private readonly slot: Slot) {}

  perform(screen: ContainerScreen) {
    screen.hover(this.slot);
  }
}
