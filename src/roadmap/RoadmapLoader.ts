import { getCollection, type CollectionEntry } from "astro:content";
import roadmapSource from "../../roadmap.kdl?raw";
import { IconRenderer } from "../textures/IconRenderer";
import { IconReference } from "./IconReference";
import { Item } from "./Item";
import { Roadmap } from "./Roadmap";
import { RoadmapError } from "./RoadmapError";
import { RoadmapParser } from "./RoadmapParser";
import type { RoadmapStructure } from "./RoadmapStructure";

export class RoadmapLoader {
  private readonly problems: string[] = [];
  private readonly icons = IconRenderer.fromEnvironment();

  private constructor(private readonly structure: RoadmapStructure) {}

  static async load(): Promise<Roadmap> {
    const loader = new RoadmapLoader(new RoadmapParser().parse(roadmapSource));

    return loader.build(await getCollection("items"));
  }

  private build(entries: readonly CollectionEntry<"items">[]): Roadmap {
    const items = entries.flatMap((entry) => this.item(entry) ?? []);

    if (this.problems.length > 0) {
      throw new RoadmapError(this.problems);
    }

    return new Roadmap(this.structure.goals, this.structure.categories, items);
  }

  private item(entry: CollectionEntry<"items">): Item | null {
    const { data } = entry;
    const category = this.structure.category(data.category);
    const goal = this.structure.goal(data.goal);
    const icon = IconReference.parse(data.icon);
    const report = (message: string) => this.problems.push(`${entry.filePath}: ${message}`);

    if (category === undefined) {
      report(`unknown category "${data.category}"`);
    }

    if (goal === undefined) {
      report(`unknown goal "${data.goal}"`);
    }

    if (icon === null) {
      report(`invalid icon "${data.icon}", expected item/<name>, block/<name> or composite/<name>`);
    } else {
      this.icons.problemsWith(icon).forEach(report);
    }

    if (category === undefined || goal === undefined || icon === null) {
      return null;
    }

    return new Item(
      entry.id,
      data.title,
      category,
      goal,
      data.parent ?? null,
      icon,
      data.index,
      data.label ?? null,
      data.description,
      data.ranked ?? null,
    );
  }
}
