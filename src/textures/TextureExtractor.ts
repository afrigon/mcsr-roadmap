import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { unzipSync } from "fflate";
import { IconSource } from "../roadmap/IconSource";
import type { IconReference } from "../roadmap/IconReference";
import { RoadmapError } from "../roadmap/RoadmapError";
import { compositeIcons } from "./compositeIcons";
import { Texture } from "./Texture";

const texturesRoot = "assets/minecraft/textures";

export class TextureExtractor {
  constructor(
    private readonly jarPath: string,
    private readonly outputDirectory: string,
  ) {}

  extract(icons: readonly IconReference[]) {
    const unique = [...new Map(icons.map((icon) => [icon.key, icon])).values()];
    const problems: string[] = [];
    const sourcesByIcon = new Map(unique.map((icon) => [icon, this.sourcesOf(icon, problems)]));
    const wanted = new Set([...sourcesByIcon.values()].flat().map((source) => this.entryName(source)));
    const entries = unzipSync(readFileSync(this.jarPath), { filter: (file) => wanted.has(file.name) });
    rmSync(this.outputDirectory, { recursive: true, force: true });

    for (const [icon, sources] of sourcesByIcon) {
      if (sources.length === 0) {
        continue;
      }

      const missing = sources.filter((source) => entries[this.entryName(source)] === undefined);

      if (missing.length > 0) {
        problems.push(`icon "${icon.key}" not found in ${this.jarPath} (looked for ${missing.join(", ")})`);
        continue;
      }

      const textures = sources.map((source) => Texture.decode(entries[this.entryName(source)]!));
      this.write(icon, this.render(icon, textures));
    }

    if (problems.length > 0) {
      throw new RoadmapError(problems);
    }
  }

  private sourcesOf(icon: IconReference, problems: string[]): readonly string[] {
    if (icon.source !== IconSource.Composite) {
      return [icon.key];
    }

    const composite = compositeIcons.find((candidate) => candidate.name === icon.name);

    if (composite === undefined) {
      problems.push(`unknown composite icon "${icon.name}"`);
      return [];
    }

    return composite.sources;
  }

  private render(icon: IconReference, textures: Texture[]): Texture {
    if (icon.source === IconSource.Composite) {
      return compositeIcons.find((candidate) => candidate.name === icon.name)!.render(textures);
    }

    return textures[0]!.firstFrame();
  }

  private entryName(source: string): string {
    return `${texturesRoot}/${source}.png`;
  }

  private write(icon: IconReference, texture: Texture) {
    const path = join(this.outputDirectory, `${icon.key}.png`);
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, texture.encode());
  }
}
