import { readdirSync } from "node:fs";
import { join } from "node:path";
import type { AstroIntegrationLogger } from "astro";
import type { Roadmap } from "./Roadmap";
import { RoadmapError } from "./RoadmapError";
import { itemPageExtension, itemPagesDirectory } from "./RoadmapFiles";

export class ItemPageCheck {
  constructor(
    private readonly roadmap: Roadmap,
    private readonly root: string,
  ) {}

  run(logger: AstroIntegrationLogger) {
    const pageIds = this.pageIds();
    const itemIds = new Set(this.roadmap.items.map((item) => item.id));
    const orphans = [...pageIds].filter((id) => !itemIds.has(id));
    const missing = [...itemIds].filter((id) => !pageIds.has(id));

    if (orphans.length > 0) {
      throw new RoadmapError(
        orphans.map((id) => `${itemPagesDirectory}/${id}${itemPageExtension} has no matching item`),
      );
    }

    if (missing.length > 0) {
      logger.warn(`${missing.length} item(s) have no page yet: ${missing.join(", ")}`);
    }
  }

  private pageIds(): Set<string> {
    const files = readdirSync(join(this.root, itemPagesDirectory));

    return new Set(
      files
        .filter((file) => file.endsWith(itemPageExtension))
        .map((file) => file.slice(0, -itemPageExtension.length)),
    );
  }
}
