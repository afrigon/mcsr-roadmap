import type { Category } from "./Category";
import type { Goal } from "./Goal";
import type { Item } from "./Item";
import { RoadmapError } from "./RoadmapError";

export class Roadmap {
  private readonly itemsById = new Map<string, Item>();
  private readonly categoriesByItem = new Map<Item, Category>();

  constructor(
    readonly goals: readonly Goal[],
    readonly categories: readonly Category[],
  ) {
    const problems: string[] = [];

    for (const category of categories) {
      for (const item of category.items) {
        if (this.itemsById.has(item.id)) {
          problems.push(`item id "${item.id}" is used more than once`);
        }

        this.itemsById.set(item.id, item);
        this.categoriesByItem.set(item, category);
      }
    }

    for (const item of this.items) {
      problems.push(...this.parentProblems(item));
    }

    if (problems.length > 0) {
      throw new RoadmapError(problems);
    }
  }

  get items(): Item[] {
    return this.categories.flatMap((category) => category.items);
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
    return this.categoryOf(item).items.filter((candidate) => candidate.parent === item.id);
  }

  categoryOf(item: Item): Category {
    return this.categoriesByItem.get(item)!;
  }

  pathTo(item: Item): Item[] {
    const path = [item];

    for (let parent = this.parentOf(item); parent !== null; parent = this.parentOf(parent)) {
      path.unshift(parent);
    }

    return path;
  }

  private parentProblems(item: Item): string[] {
    if (item.parent === null) {
      return [];
    }

    const parent = this.itemsById.get(item.parent);

    if (parent === undefined) {
      return [`"${item.id}" has unknown parent "${item.parent}"`];
    }

    if (this.categoriesByItem.get(parent) !== this.categoriesByItem.get(item)) {
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
