import { Dependency } from "./Dependency";
import { DependencyKind } from "./DependencyKind";
import type { Goal } from "./Goal";
import type { Scope } from "./Scope";

export class Item {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly goal: Goal,
    readonly scope: Scope,
    readonly requires: readonly string[],
    readonly upgrades: string | null,
  ) {}

  get dependencies(): Dependency[] {
    const required = this.requires.map((id) => new Dependency(id, DependencyKind.Requires));

    if (this.upgrades === null) {
      return required;
    }

    return [new Dependency(this.upgrades, DependencyKind.Upgrades), ...required];
  }

  get prerequisiteIds(): string[] {
    return this.dependencies.map((dependency) => dependency.id);
  }
}
