import { join } from "node:path";
import { fileURLToPath } from "node:url";
import type { AstroIntegration } from "astro";
import { ItemPageCheck } from "./ItemPageCheck";
import { roadmapFile } from "./RoadmapFiles";
import { RoadmapParser } from "./RoadmapParser";

export function roadmapIntegration(): AstroIntegration {
  return {
    name: "roadmap",
    hooks: {
      "astro:config:setup": ({ addWatchFile, config, logger }) => {
        const root = fileURLToPath(config.root);
        const roadmapPath = join(root, roadmapFile);
        addWatchFile(roadmapPath);
        new ItemPageCheck(RoadmapParser.readFile(roadmapPath), root).run(logger);
      },
    },
  };
}
