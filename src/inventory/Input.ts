import type { ContainerScreen } from "./ContainerScreen";
import type { Ripple } from "./Ripple";

export interface Input {
  readonly ripple: Ripple | null;
  perform(screen: ContainerScreen): void;
}
