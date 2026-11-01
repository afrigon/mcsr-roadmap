import type { ClientJar } from "../ClientJar";
import { GuiProjection, type TransformJson } from "./GuiProjection";
import type { ItemModel } from "./ItemModel";
import { type ElementJson, ModelElement } from "./ModelElement";

interface ModelJson {
  parent?: string;
  textures?: Record<string, string>;
  elements?: ElementJson[];
  display?: { gui?: TransformJson };
}

const builtinPrefix = "builtin/";
const generatedModel = "builtin/generated";
const namespacePrefix = "minecraft:";
const layerPattern = /^layer(\d+)$/;

export class ModelLibrary {
  private readonly parsed = new Map<string, ModelJson>();

  constructor(
    private readonly jar: ClientJar,
    private readonly iconSize: number,
  ) {}

  itemIds(): string[] {
    return this.jar.list("models/item", ".json");
  }

  item(id: string): ItemModel | null {
    if (!this.jar.has(`models/item/${id}.json`)) {
      return null;
    }

    const chain = this.chain(`item/${id}`);
    const root = chain.at(-1)!.parent?.replace(namespacePrefix, "");
    const textures = Object.assign({}, ...chain.map((model) => model.textures ?? {}).reverse()) as Record<string, string>;
    const elements = chain.find((model) => model.elements !== undefined)?.elements;

    if (elements !== undefined) {
      const gui = chain.find((model) => model.display?.gui !== undefined)?.display?.gui ?? {};
      const resolve = (reference: string) => ModelLibrary.resolveTexture(reference, textures, id);

      return {
        kind: "elements",
        elements: elements.map((element) => ModelElement.parse(element, resolve)),
        projection: new GuiProjection(gui, this.iconSize),
      };
    }

    if (root === generatedModel) {
      const layers = Object.keys(textures)
        .filter((key) => layerPattern.test(key))
        .sort((first, second) => Number(layerPattern.exec(first)![1]) - Number(layerPattern.exec(second)![1]))
        .map((key) => ModelLibrary.resolveTexture(textures[key]!, textures, id));

      return layers.length === 0 ? { kind: "empty" } : { kind: "layers", layers };
    }

    return { kind: "code" };
  }

  private chain(name: string): ModelJson[] {
    const models: ModelJson[] = [];
    let next: string | undefined = name;

    while (next !== undefined && !next.startsWith(builtinPrefix)) {
      const model = this.model(next);
      models.push(model);
      next = model.parent?.replace(namespacePrefix, "");
    }

    return models;
  }

  private model(name: string): ModelJson {
    let model = this.parsed.get(name);

    if (model === undefined) {
      model = JSON.parse(new TextDecoder().decode(this.jar.read(`models/${name}.json`))) as ModelJson;
      this.parsed.set(name, model);
    }

    return model;
  }

  private static resolveTexture(reference: string, textures: Record<string, string>, id: string): string {
    let resolved: string | undefined = reference;

    while (resolved?.startsWith("#")) {
      resolved = textures[resolved.slice(1)];
    }

    if (resolved === undefined) {
      throw new Error(`Item model "${id}" leaves texture "${reference}" unresolved`);
    }

    return resolved.replace(namespacePrefix, "");
  }
}
