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
    for (const category of this.structure.categories) {
      this.icons
        .problemsWith(category.icon)
        .forEach((problem) => console.warn(`roadmap.kdl: category "${category.id}": ${problem}`));
    }

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
    const parsedIcon = IconReference.parse(data.icon);
    const report = (message: string) => this.problems.push(`${entry.filePath}: ${message}`);
    const warn = (message: string) => console.warn(`${entry.filePath}: ${message}, showing the missing-texture icon`);

    if (category === undefined) {
      report(`unknown category "${data.category}"`);
    }

    if (goal === undefined) {
      report(`unknown goal "${data.goal}"`);
    }

    if (parsedIcon === null) {
      warn(`invalid icon "${data.icon}", expected item/<name>, block/<name> or composite/<name>`);
    } else {
      this.icons.problemsWith(parsedIcon).forEach(warn);
    }

    if (category === undefined || goal === undefined) {
      return null;
    }

    return new Item(
      entry.id,
      data.title,
      category,
      goal,
      data.parent ?? null,
      parsedIcon ?? IconRenderer.missing,
      data.index,
      data.label ?? null,
      data.description,
      data.ranked ?? null,
    );
  }
}
