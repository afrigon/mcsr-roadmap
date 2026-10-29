import type { Goal } from "./Goal";
import type { IconReference } from "./IconReference";
import type { Scope } from "./Scope";

export class Item {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly goal: Goal,
    readonly scope: Scope,
    readonly parent: string | null,
    readonly icon: IconReference,
    readonly label: string | null,
    readonly description: string,
  ) {}
}
