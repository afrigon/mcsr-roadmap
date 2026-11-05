import type { Category } from "./Category";
import type { Goal } from "./Goal";
import type { Item } from "./Item";
import { RoadmapError } from "./RoadmapError";

export class Roadmap {
  private readonly itemsById = new Map<string, Item>();
  private readonly itemsByCategory = new Map<Category, Item[]>();

  constructor(
    readonly goals: readonly Goal[],
    readonly categories: readonly Category[],
    items: readonly Item[],
  ) {
    const problems: string[] = [];

    for (const category of categories) {
      this.itemsByCategory.set(category, []);
    }

    for (const item of items) {
      if (this.itemsById.has(item.id)) {
        problems.push(`item id "${item.id}" is used more than once`);
      }

      this.itemsById.set(item.id, item);
      this.itemsByCategory.get(item.category)!.push(item);
    }

    for (const [category, categoryItems] of this.itemsByCategory) {
      categoryItems.sort((first, second) => first.index - second.index);
      problems.push(...this.indexProblems(category, categoryItems));
    }

    for (const item of this.items) {
      problems.push(...this.parentProblems(item));
    }

    if (problems.length > 0) {
      throw new RoadmapError(problems);
    }
  }

  get items(): Item[] {
    return this.categories.flatMap((category) => this.itemsIn(category));
  }

  itemsIn(category: Category): readonly Item[] {
    return this.itemsByCategory.get(category)!;
  }

  item(id: string): Item {
    const item = this.itemsById.get(id);

    if (item === undefined) {
      throw new RoadmapError([`unknown item "${id}"`]);
    }

    return item;
  }

  parentOf(item: Item): Item | null {
    return item.parent === null ? null : this.item(item.parent);
  }

  childrenOf(item: Item): Item[] {
    return this.itemsIn(item.category).filter((candidate) => candidate.parent === item.id);
  }

  private indexProblems(category: Category, items: readonly Item[]): string[] {
    return items
      .filter((item, position) => position > 0 && items[position - 1]!.index === item.index)
      .map((item) => `"${item.id}" has index ${item.index}, already used in ${category.title}`);
  }

  private parentProblems(item: Item): string[] {
    if (item.parent === null) {
      return [];
    }

    const parent = this.itemsById.get(item.parent);

    if (parent === undefined) {
      return [`"${item.id}" has unknown parent "${item.parent}"`];
    }

    if (parent.category !== item.category) {
      return [`"${item.id}" has parent "${parent.id}" from another category`];
    }

    if (parent.goal.isAfter(item.goal)) {
      return [`"${item.id}" (${item.goal.title}) has parent "${parent.id}" in the later goal ${parent.goal.title}`];
    }

    const visited = new Set([item.id]);
    let ancestor: Item | undefined = parent;

    while (ancestor !== undefined) {
      if (visited.has(ancestor.id)) {
        return [`"${item.id}" is part of a parent cycle`];
      }

      visited.add(ancestor.id);
      ancestor = ancestor.parent === null ? undefined : this.itemsById.get(ancestor.parent);
    }

    return [];
  }
}
