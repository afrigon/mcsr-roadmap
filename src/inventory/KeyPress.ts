import type { Input } from "./Input";
import type { ContainerScreen } from "./ContainerScreen";
import type { Ripple } from "./Ripple";

export class KeyPress implements Input {
  readonly ripple: Ripple;

  constructor(private readonly key: string) {
    this.ripple = { target: "key", key };
  }

  perform(screen: ContainerScreen) {
    screen.press(this.key);
  }
}
