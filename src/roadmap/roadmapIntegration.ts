import { join } from "node:path";
import { fileURLToPath } from "node:url";
import type { AstroIntegration } from "astro";
import { goalIcon } from "../canvas/goalIcons";
import { TextureExtractor } from "../textures/TextureExtractor";
import { ItemPageCheck } from "./ItemPageCheck";
import { RoadmapError } from "./RoadmapError";
import { roadmapFile, texturesDirectory } from "./RoadmapFiles";
import { RoadmapParser } from "./RoadmapParser";

const jarVariable = "MINECRAFT_CLIENT_JAR";

export function roadmapIntegration(): AstroIntegration {
  return {
    name: "roadmap",
    hooks: {
      "astro:config:setup": ({ addWatchFile, config, logger }) => {
        const root = fileURLToPath(config.root);
        const roadmapPath = join(root, roadmapFile);
        const jarPath = process.env[jarVariable];
        addWatchFile(roadmapPath);
        const roadmap = RoadmapParser.readFile(roadmapPath);
        new ItemPageCheck(roadmap, root).run(logger);

        if (jarPath === undefined || jarPath === "") {
          throw new RoadmapError([`${jarVariable} must point at a Minecraft 1.16.1 client jar (set it in mise.local.toml)`]);
        }

        new TextureExtractor(jarPath, join(root, texturesDirectory)).extract([
          ...roadmap.items.map((item) => item.icon),
          ...roadmap.goals.map((goal) => goalIcon(goal)),
        ]);
      },
    },
  };
}
