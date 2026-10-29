import type { DependencyKind } from "./DependencyKind";

export class Dependency {
  constructor(
    readonly id: string,
    readonly kind: DependencyKind,
  ) {}
}
