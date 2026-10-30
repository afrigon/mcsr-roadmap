import type { Category } from "./Category";
import type { Goal } from "./Goal";

export class RoadmapStructure {
  constructor(
    readonly goals: readonly Goal[],
    readonly categories: readonly Category[],
  ) {}

  goal(id: string): Goal | undefined {
    return this.goals.find((goal) => goal.id === id);
  }

  category(id: string): Category | undefined {
    return this.categories.find((category) => category.id === id);
  }
}
