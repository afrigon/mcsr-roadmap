import { IconSource } from "../roadmap/IconSource";
import type { IconReference } from "../roadmap/IconReference";
import { RoadmapError } from "../roadmap/RoadmapError";
import type { CompositeIcon } from "./CompositeIcon";
import { compositeIcons } from "./compositeIcons";
import type { Texture } from "./Texture";
import { TextureLibrary } from "./TextureLibrary";

export class IconRenderer {
  constructor(private readonly library: TextureLibrary) {}

  static fromEnvironment(): IconRenderer {
    return new IconRenderer(TextureLibrary.fromEnvironment());
  }

  problemsWith(icon: IconReference): string[] {
    if (icon.source === IconSource.Composite && this.composite(icon) === undefined) {
      return [`unknown composite icon "${icon.name}"`];
    }

    const missing = this.sourcesOf(icon).filter((source) => !this.library.has(source));

    if (missing.length > 0) {
      return [`icon "${icon.key}" not found in ${this.library.jarPath} (looked for ${missing.join(", ")})`];
    }

    return [];
  }

  render(icon: IconReference): Texture {
    const problems = this.problemsWith(icon);

    if (problems.length > 0) {
      throw new RoadmapError(problems);
    }

    const textures = this.sourcesOf(icon).map((source) => this.library.texture(source));

    if (icon.source === IconSource.Composite) {
      return this.composite(icon)!.render(textures);
    }

    return textures[0]!.firstFrame();
  }

  private sourcesOf(icon: IconReference): readonly string[] {
    if (icon.source === IconSource.Composite) {
      return this.composite(icon)?.sources ?? [];
    }

    return [icon.key];
  }

  private composite(icon: IconReference): CompositeIcon | undefined {
    return compositeIcons.find((candidate) => candidate.name === icon.name);
  }
}
