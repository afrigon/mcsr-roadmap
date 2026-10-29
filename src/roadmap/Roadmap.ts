import type { Category } from "./Category";
import type { Goal } from "./Goal";
import type { Item } from "./Item";
import { RoadmapError } from "./RoadmapError";
import type { Row } from "./Row";

export class Roadmap {
  private readonly itemsById = new Map<string, Item>();

  constructor(
    readonly goals: readonly Goal[],
    readonly categories: readonly Category[],
  ) {
    const problems: string[] = [];

    for (const item of this.items) {
      if (this.itemsById.has(item.id)) {
        problems.push(`item id "${item.id}" is used more than once`);
      }

      this.itemsById.set(item.id, item);
    }

    for (const item of this.items) {
      problems.push(...this.prerequisiteProblems(item));
    }

    problems.push(...this.cycleProblems());

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

  prerequisitesOf(item: Item): Item[] {
    return item.prerequisiteIds.map((id) => this.item(id));
  }

  dependentsOf(item: Item): Item[] {
    return this.items.filter((candidate) => candidate.prerequisiteIds.includes(item.id));
  }

  categoryOf(item: Item): Category {
    return this.categories.find((category) => category.items.includes(item))!;
  }

  timelineItemsFor(row: Row): Item[] {
    const included = new Set<Item>();
    const pending = [...row.items];

    while (pending.length > 0) {
      const item = pending.pop()!;

      if (included.has(item)) {
        continue;
      }

      included.add(item);
      pending.push(...this.prerequisitesOf(item));
    }

    return this.items.filter((item) => included.has(item));
  }

  private prerequisiteProblems(item: Item): string[] {
    const problems: string[] = [];

    for (const id of item.prerequisiteIds) {
      const prerequisite = this.itemsById.get(id);

      if (prerequisite === undefined) {
        problems.push(`"${item.id}" depends on unknown item "${id}"`);
        continue;
      }

      if (prerequisite.goal.isAfter(item.goal)) {
        problems.push(
          `"${item.id}" (${item.goal.title}) depends on "${id}", which is in the later column ${prerequisite.goal.title}`,
        );
      }
    }

    return problems;
  }

  private cycleProblems(): string[] {
    const finished = new Set<string>();
    const visiting = new Set<string>();
    const problems: string[] = [];

    const visit = (item: Item, path: string[]) => {
      if (finished.has(item.id)) {
        return;
      }

      if (visiting.has(item.id)) {
        problems.push(`dependency cycle: ${[...path, item.id].join(" → ")}`);
        return;
      }

      visiting.add(item.id);

      for (const id of item.prerequisiteIds) {
        const prerequisite = this.itemsById.get(id);

        if (prerequisite !== undefined) {
          visit(prerequisite, [...path, item.id]);
        }
      }

      visiting.delete(item.id);
      finished.add(item.id);
    };

    for (const item of this.items) {
      visit(item, []);
    }

    return problems;
  }
}
