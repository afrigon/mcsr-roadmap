import { readFileSync } from "node:fs";
import { getLocation, parse, type Node } from "@bgotink/kdl";
import { Category } from "./Category";
import { Goal } from "./Goal";
import { IconReference } from "./IconReference";
import { Item } from "./Item";
import { Rank } from "./Rank";
import { Roadmap } from "./Roadmap";
import { RoadmapError } from "./RoadmapError";
import { Scope } from "./Scope";
import { Theme } from "./Theme";

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
        case "category": {
          const category = this.parseCategory(node);

          if (category !== null) {
            categories.push(category);
          }

          break;
        }
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
      this.expectShape(child, 1, ["title", "short", "rank"]);
      const id = this.argument(child);

      if (this.goals.has(id)) {
        this.report(child, `goal "${id}" is defined more than once`);
      }

      const goal = new Goal(
        id,
        this.requiredProperty(child, "title"),
        this.requiredProperty(child, "short"),
        this.enumProperty(child, "rank", Object.values(Rank)),
        this.goals.size,
      );
      this.goals.set(id, goal);
    }
  }

  private parseCategory(node: Node): Category | null {
    this.expectShape(node, 1, ["title", "theme"]);
    const id = this.argument(node);
    const themeValue = this.requiredProperty(node, "theme");
    const theme = this.enumProperty(node, "theme", Object.values(Theme));
    const items = this.children(node, ["item"]).flatMap((child) => this.parseItem(child) ?? []);

    if (themeValue === "" || theme === null) {
      return null;
    }

    return new Category(id, this.requiredProperty(node, "title"), theme, items);
  }

  private parseItem(node: Node): Item | null {
    this.expectShape(node, 1, ["title", "goal", "parent", "icon", "label", "scope"]);
    const id = this.argument(node);
    const goalId = this.requiredProperty(node, "goal");
    const goal = this.goals.get(goalId);
    const iconValue = this.requiredProperty(node, "icon");
    const icon = IconReference.parse(iconValue);
    const descriptions = this.children(node, ["description"]);

    if (goal === undefined) {
      this.report(node, `item "${id}" has unknown goal "${goalId}"`);
    }

    if (icon === null) {
      this.report(node, `item "${id}" has invalid icon "${iconValue}", expected item/<name>, block/<name> or composite/<name>`);
    }

    if (descriptions.length !== 1) {
      this.report(node, `item "${id}" needs exactly one "description" child`);
    }

    for (const description of descriptions) {
      this.expectShape(description, 1, []);
    }

    if (goal === undefined || icon === null || descriptions.length !== 1) {
      return null;
    }

    return new Item(
      id,
      this.requiredProperty(node, "title"),
      goal,
      this.enumProperty(node, "scope", Object.values(Scope)) ?? Scope.Any,
      this.optionalProperty(node, "parent"),
      icon,
      this.optionalProperty(node, "label"),
      this.argument(descriptions[0]!),
    );
  }

  private enumProperty<Value extends string>(node: Node, name: string, values: Value[]): Value | null {
    const value = this.optionalProperty(node, name);

    if (value === null) {
      return null;
    }

    const match = values.find((candidate) => candidate === value);

    if (match === undefined) {
      this.report(node, `unknown ${name} "${value}", expected one of ${values.join(", ")}`);
      return null;
    }

    return match;
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
