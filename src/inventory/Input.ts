import type { DemoScreen } from "./DemoScreen";
import type { Ripple } from "./Ripple";

export interface Input {
  readonly ripple: Ripple | null;
  perform(screen: DemoScreen): void;
}
