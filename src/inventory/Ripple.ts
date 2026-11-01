import type { MouseButton } from "./MouseButton";

export type Ripple =
  | { readonly target: "pointer"; readonly button: MouseButton }
  | { readonly target: "key"; readonly key: string };
