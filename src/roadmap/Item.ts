import type { Goal } from "./Goal";
import type { IconReference } from "./IconReference";

export class Item {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly goal: Goal,
    readonly parent: string | null,
    readonly icon: IconReference,
    readonly label: string | null,
    readonly description: string,
    readonly rankedNote: string | null,
  ) {}
}
