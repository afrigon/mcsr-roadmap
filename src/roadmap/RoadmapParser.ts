import { readFileSync } from "node:fs";
import { getLocation, parse, type Node } from "@bgotink/kdl";
import { Category } from "./Category";
import { Goal } from "./Goal";
import { Item } from "./Item";
import { Roadmap } from "./Roadmap";
import { RoadmapError } from "./RoadmapError";
import { Row } from "./Row";
import { Scope } from "./Scope";

export class RoadmapParser {
  private readonly problems: string[] = [];
  private readonly goals = new Map<string, Goal>();

  static readFile(path: string): Roadmap {
    return new RoadmapParser().parse(readFileSync(path, "utf8"));
  }

  parse(text: string): Roadmap {
    const document = parse(text, { storeLocations: true });
    const categories: Category[] = [];

    for (const node of document.findNodesByName("goals")) {
      this.parseGoals(node);
    }

    for (const node of document.nodes) {
      switch (node.getName()) {
        case "goals":
          break;
        case "category":
          categories.push(this.parseCategory(node));
          break;
        default:
          this.report(node, `unexpected top-level node "${node.getName()}"`);
      }
    }

    if (this.problems.length > 0) {
      throw new RoadmapError(this.problems);
    }

    return new Roadmap([...this.goals.values()], categories);
  }

  private parseGoals(node: Node) {
    this.expectShape(node, 0, []);

    for (const child of this.children(node, ["goal"])) {
      this.expectShape(child, 1, ["title", "equivalent"]);
      const id = this.argument(child);

      if (this.goals.has(id)) {
        this.report(child, `goal "${id}" is defined more than once`);
      }

      const goal = new Goal(
        id,
        this.requiredProperty(child, "title"),
        this.optionalProperty(child, "equivalent"),
        this.goals.size,
      );
      this.goals.set(id, goal);
    }
  }

  private parseCategory(node: Node): Category {
    this.expectShape(node, 1, ["title"]);
    const rows = this.children(node, ["row"]).map((child) => this.parseRow(child));

    return new Category(this.argument(node), this.requiredProperty(node, "title"), rows);
  }

  private parseRow(node: Node): Row {
    this.expectShape(node, 1, ["title"]);
    const items = this.children(node, ["item"]).flatMap((child) => this.parseItem(child) ?? []);

    return new Row(this.argument(node), this.requiredProperty(node, "title"), items);
  }

  private parseItem(node: Node): Item | null {
    this.expectShape(node, 1, ["title", "goal", "scope"]);
    const id = this.argument(node);
    const goalId = this.requiredProperty(node, "goal");
    const goal = this.goals.get(goalId);
    const scope = this.parseScope(node);
    const requires: string[] = [];
    let upgrades: string | null = null;

    if (goal === undefined) {
      this.report(node, `item "${id}" has unknown goal "${goalId}"`);
    }

    for (const child of this.children(node, ["requires", "upgrades"])) {
      switch (child.getName()) {
        case "requires":
          requires.push(...this.arguments(child));
          break;
        case "upgrades":
          if (upgrades !== null) {
            this.report(child, `item "${id}" upgrades more than one item`);
          }

          this.expectShape(child, 1, []);
          upgrades = this.argument(child);
          break;
      }
    }

    if (goal === undefined || scope === null) {
      return null;
    }

    return new Item(id, this.requiredProperty(node, "title"), goal, scope, requires, upgrades);
  }

  private parseScope(node: Node): Scope | null {
    const value = this.optionalProperty(node, "scope") ?? Scope.Any;
    const scope = Object.values(Scope).find((candidate) => candidate === value);

    if (scope === undefined) {
      this.report(node, `unknown scope "${value}", expected one of ${Object.values(Scope).join(", ")}`);
      return null;
    }

    return scope;
  }

  private children(node: Node, allowedNames: string[]): Node[] {
    const children = node.children?.nodes ?? [];

    for (const child of children) {
      if (!allowedNames.includes(child.getName())) {
        this.report(child, `unexpected node "${child.getName()}" inside "${node.getName()}"`);
      }
    }

    return children.filter((child) => allowedNames.includes(child.getName()));
  }

  private expectShape(node: Node, argumentCount: number, allowedProperties: string[]) {
    const actualCount = node.getArguments().length;

    if (actualCount !== argumentCount) {
      this.report(node, `"${node.getName()}" takes ${argumentCount} argument(s), found ${actualCount}`);
    }

    for (const name of node.getProperties().keys()) {
      if (!allowedProperties.includes(name)) {
        this.report(node, `unexpected property "${name}" on "${node.getName()}"`);
      }
    }
  }

  private argument(node: Node): string {
    const value = node.getArgument(0);

    if (value !== undefined && typeof value !== "string") {
      this.report(node, `"${node.getName()}" argument must be a string, found ${String(value)}`);
      return "";
    }

    return value ?? "";
  }

  private arguments(node: Node): string[] {
    const values = node.getArguments();

    if (values.length === 0) {
      this.report(node, `"${node.getName()}" needs at least one argument`);
    }

    return values.flatMap((value) => {
      if (typeof value !== "string") {
        this.report(node, `"${node.getName()}" arguments must be strings, found ${String(value)}`);
        return [];
      }

      return [value];
    });
  }

  private requiredProperty(node: Node, name: string): string {
    const value = this.optionalProperty(node, name);

    if (value === null) {
      this.report(node, `"${node.getName()}" is missing the "${name}" property`);
      return "";
    }

    return value;
  }

  private optionalProperty(node: Node, name: string): string | null {
    const value = node.getProperty(name);

    if (value === undefined) {
      return null;
    }

    if (typeof value !== "string") {
      this.report(node, `property "${name}" on "${node.getName()}" must be a string`);
      return null;
    }

    return value;
  }

  private report(node: Node, message: string) {
    const line = getLocation(node)?.start.line;
    this.problems.push(line === undefined ? message : `line ${line}: ${message}`);
  }
}
