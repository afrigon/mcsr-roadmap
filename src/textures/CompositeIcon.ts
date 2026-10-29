import type { Texture } from "./Texture";

export class CompositeIcon {
  constructor(
    readonly name: string,
    readonly sources: readonly string[],
    private readonly compose: (sources: Texture[]) => Texture,
  ) {}

  render(sources: Texture[]): Texture {
    return this.compose(sources);
  }
}
