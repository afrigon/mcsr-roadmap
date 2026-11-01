import type { Input } from "./Input";
import type { DemoScreen } from "./DemoScreen";
import type { Ripple } from "./Ripple";

export class KeyPress implements Input {
  readonly ripple: Ripple;

  constructor(private readonly key: string) {
    this.ripple = { target: "key", key };
  }

  perform(screen: DemoScreen) {
    screen.press(this.key);
  }
}
