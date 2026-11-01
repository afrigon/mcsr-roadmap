import { ClientJar } from "./ClientJar";
import { Texture } from "./Texture";

export class TextureLibrary {
  constructor(private readonly jar: ClientJar) {}

  static fromEnvironment(): TextureLibrary {
    return new TextureLibrary(ClientJar.fromEnvironment());
  }

  get jarPath(): string {
    return this.jar.path;
  }

  sources(directory: string): string[] {
    return this.jar.list(`textures/${directory}`, ".png").map((name) => `${directory}/${name}`);
  }

  has(source: string): boolean {
    return this.jar.has(`textures/${source}.png`);
  }

  texture(source: string): Texture {
    return Texture.decode(this.jar.read(`textures/${source}.png`));
  }
}
