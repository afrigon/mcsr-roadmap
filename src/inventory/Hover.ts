import type { Input } from "./Input";
import type { DemoScreen } from "./DemoScreen";
import type { PointerTarget } from "./PointerTarget";

export class Hover implements Input {
  readonly ripple = null;

  constructor(private readonly target: PointerTarget) {}

  perform(screen: DemoScreen) {
    screen.hover(this.target);
  }
}
