import type { Control } from "./Control";
import type { Input } from "./Input";
import type { DemoScreen } from "./DemoScreen";

export class Release implements Input {
  readonly ripple = null;

  constructor(private readonly control: Control) {}

  perform(screen: DemoScreen) {
    screen.release(this.control);
  }
}
