import { IconReference } from "../roadmap/IconReference";
import { IconSource } from "../roadmap/IconSource";
import type { CompositeIcon } from "./CompositeIcon";
import { compositeIcons, missingIconName } from "./compositeIcons";
import type { Texture } from "./Texture";
import { TextureLibrary } from "./TextureLibrary";

export class IconRenderer {
  static readonly missing = new IconReference(IconSource.Composite, missingIconName);

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
    if (this.problemsWith(icon).length > 0) {
      return this.render(IconRenderer.missing);
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
