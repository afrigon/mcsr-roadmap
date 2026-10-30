import type { Category } from "./Category";
import type { Goal } from "./Goal";
import type { IconReference } from "./IconReference";

export class Item {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly category: Category,
    readonly goal: Goal,
    readonly parent: string | null,
    readonly icon: IconReference,
    readonly index: number,
    readonly label: string | null,
    readonly description: string,
    readonly rankedNote: string | null,
  ) {}
}
