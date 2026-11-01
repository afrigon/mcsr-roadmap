import { IconReference } from "../roadmap/IconReference";
import { IconSource } from "../roadmap/IconSource";
import { ClientJar } from "./ClientJar";
import type { CompositeIcon } from "./CompositeIcon";
import { compositeIcons, missingIconName } from "./compositeIcons";
import { itemTints } from "./models/itemTints";
import type { ItemModel } from "./models/ItemModel";
import { ModelLibrary } from "./models/ModelLibrary";
import { ModelRasterizer } from "./models/ModelRasterizer";
import { Texture } from "./Texture";
import { TextureLibrary } from "./TextureLibrary";

const iconSize = 64;

export class IconRenderer {
  static readonly missing = new IconReference(IconSource.Composite, missingIconName);

  private readonly rasterizer: ModelRasterizer;

  constructor(
    private readonly library: TextureLibrary,
    private readonly models: ModelLibrary,
  ) {
    this.rasterizer = new ModelRasterizer(library, iconSize);
  }

  static fromEnvironment(): IconRenderer {
    const jar = ClientJar.fromEnvironment();

    return new IconRenderer(new TextureLibrary(jar), new ModelLibrary(jar, iconSize));
  }

  all(): IconReference[] {
    const itemIds = new Set(this.models.itemIds());
    const drawable = new Set(["layers", "elements"]);
    const items = [...itemIds].filter((id) => drawable.has(this.models.item(id)!.kind));
    const itemTextures = this.library
      .sources(IconSource.Item)
      .map((source) => source.slice(`${IconSource.Item}/`.length))
      .filter((name) => !itemIds.has(name));
    const blocks = this.library.sources(IconSource.Block).map((source) => IconReference.parse(source)!);
    const composites = compositeIcons.map((composite) => new IconReference(IconSource.Composite, composite.name));

    return [
      ...[...items, ...itemTextures].map((name) => new IconReference(IconSource.Item, name)),
      ...blocks,
      ...composites,
    ];
  }

  resolve(value: string): IconReference {
    const icon = IconReference.parse(value);
    const problems = icon === null ? [`invalid icon "${value}"`] : this.problemsWith(icon);

    if (problems.length > 0) {
      console.warn(problems.join("; "));

      return IconRenderer.missing;
    }

    return icon!;
  }

  problemsWith(icon: IconReference): string[] {
    const missingTextures = (sources: readonly string[]) => {
      const missing = sources.filter((source) => !this.library.has(source));

      return missing.length === 0
        ? []
        : [`icon "${icon.key}" not found in ${this.library.jarPath} (looked for ${missing.join(", ")})`];
    };

    switch (icon.source) {
      case IconSource.Composite: {
        const composite = this.composite(icon);

        return composite === undefined ? [`unknown composite icon "${icon.name}"`] : missingTextures(composite.sources);
      }
      case IconSource.Block:
        return missingTextures([icon.key]);
      case IconSource.Item:
        return this.itemProblems(icon, this.models.item(icon.name), missingTextures);
    }
  }

  render(icon: IconReference): Texture {
    if (this.problemsWith(icon).length > 0) {
      return this.render(IconRenderer.missing);
    }

    switch (icon.source) {
      case IconSource.Composite: {
        const composite = this.composite(icon)!;

        return this.fitted(composite.render(composite.sources.map((source) => this.library.texture(source))));
      }
      case IconSource.Block:
        return this.flat([icon.key]);
      case IconSource.Item:
        return this.renderItem(icon, this.models.item(icon.name));
    }
  }

  private itemProblems(
    icon: IconReference,
    model: ItemModel | null,
    missingTextures: (sources: readonly string[]) => string[],
  ): string[] {
    if (model === null) {
      return missingTextures([icon.key]);
    }

    switch (model.kind) {
      case "code":
        return [`item "${icon.name}" is drawn in code rather than from a model; use a composite icon`];
      case "empty":
        return [`item model "${icon.name}" draws nothing; it is a template other models build on`];
      case "layers":
        return missingTextures(model.layers);
      case "elements": {
        const faces = model.elements.flatMap((element) => element.faces);
        const untinted = faces.some((face) => face.tinted) && itemTints[icon.name] === undefined ? [`item "${icon.name}" has tinted faces but no inventory tint colour`] : [];

        return [...missingTextures(faces.map((face) => face.texture)), ...untinted];
      }
    }
  }

  private renderItem(icon: IconReference, model: ItemModel | null): Texture {
    if (model === null) {
      return this.flat([icon.key]);
    }

    switch (model.kind) {
      case "code":
      case "empty":
        return this.render(IconRenderer.missing);
      case "layers":
        return this.flat(model.layers);
      case "elements":
        return this.rasterizer.render(model, itemTints[icon.name]?.(this.library) ?? null);
    }
  }

  private flat(layers: readonly string[]): Texture {
    const [first, ...rest] = layers.map((source) => this.library.texture(source).firstFrame());
    const result = Texture.blank(first!.width, first!.height);
    result.paste(first!, 0, 0);

    for (const layer of rest) {
      result.overlay(layer, 0, 0);
    }

    return this.fitted(result);
  }

  private fitted(texture: Texture): Texture {
    const scaled = texture.scaled(Math.floor(iconSize / Math.max(texture.width, texture.height)));
    const icon = Texture.blank(iconSize, iconSize);
    icon.paste(scaled, Math.floor((iconSize - scaled.width) / 2), Math.floor((iconSize - scaled.height) / 2));

    return icon;
  }

  private composite(icon: IconReference): CompositeIcon | undefined {
    return compositeIcons.find((candidate) => candidate.name === icon.name);
  }
}
