import type { Input } from "./Input";
import type { ContainerScreen } from "./ContainerScreen";
import type { PointerTarget } from "./PointerTarget";

export class Hover implements Input {
  readonly ripple = null;

  constructor(private readonly target: PointerTarget) {}

  perform(screen: ContainerScreen) {
    screen.hover(this.target);
  }
}
