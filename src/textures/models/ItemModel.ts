import type { GuiProjection } from "./GuiProjection";
import type { ModelElement } from "./ModelElement";

export type ItemModel =
  | { readonly kind: "layers"; readonly layers: readonly string[] }
  | { readonly kind: "elements"; readonly elements: readonly ModelElement[]; readonly projection: GuiProjection }
  | { readonly kind: "code" }
  | { readonly kind: "empty" };
