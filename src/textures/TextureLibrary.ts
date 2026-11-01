import { readFileSync } from "node:fs";
import { unzipSync } from "fflate";
import { RoadmapError } from "../roadmap/RoadmapError";
import { Texture } from "./Texture";

const jarVariable = "MINECRAFT_CLIENT_JAR";
const texturesRoot = "assets/minecraft/textures";

export class TextureLibrary {
  private static shared: TextureLibrary | null = null;
  private entries: Record<string, Uint8Array> | null = null;

  private constructor(readonly jarPath: string) {}

  static fromEnvironment(): TextureLibrary {
    const jarPath = process.env[jarVariable];

    if (jarPath === undefined || jarPath === "") {
      throw new RoadmapError([`${jarVariable} must point at a Minecraft 1.16.1 client jar (set it in mise.local.toml)`]);
    }

    if (TextureLibrary.shared?.jarPath !== jarPath) {
      TextureLibrary.shared = new TextureLibrary(jarPath);
    }

    return TextureLibrary.shared;
  }

  sources(directory: string): string[] {
    const prefix = `${texturesRoot}/${directory}/`;

    return Object.keys(this.load())
      .filter((name) => name.startsWith(prefix) && !name.slice(prefix.length).includes("/"))
      .map((name) => name.slice(`${texturesRoot}/`.length, -".png".length));
  }

  has(source: string): boolean {
    return this.load()[this.entryName(source)] !== undefined;
  }

  texture(source: string): Texture {
    return Texture.decode(this.load()[this.entryName(source)]!);
  }

  private load(): Record<string, Uint8Array> {
    this.entries ??= unzipSync(readFileSync(this.jarPath), {
      filter: (file) => file.name.startsWith(`${texturesRoot}/`) && file.name.endsWith(".png"),
    });

    return this.entries;
  }

  private entryName(source: string): string {
    return `${texturesRoot}/${source}.png`;
  }
}
