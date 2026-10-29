import { IconSource } from "./IconSource";

export class IconReference {
  constructor(
    readonly source: IconSource,
    readonly name: string,
  ) {}

  static parse(value: string): IconReference | null {
    const [sourceName, name, ...rest] = value.split("/");
    const source = Object.values(IconSource).find((candidate) => candidate === sourceName);

    if (source === undefined || name === undefined || name === "" || rest.length > 0) {
      return null;
    }

    return new IconReference(source, name);
  }

  get key(): string {
    return `${this.source}/${this.name}`;
  }

  get path(): string {
    return `/textures/${this.key}.png`;
  }
}
