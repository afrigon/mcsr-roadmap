import { readFileSync } from "node:fs";
import { unzipSync } from "fflate";
import { RoadmapError } from "../roadmap/RoadmapError";

const jarVariable = "MINECRAFT_CLIENT_JAR";
const assetsRoot = "assets/minecraft";
const dataRoot = "data/minecraft";
const loadedPrefixes = [
  `${assetsRoot}/textures/`,
  `${assetsRoot}/models/`,
  `${dataRoot}/recipes/`,
  `${dataRoot}/tags/items/`,
];

export class ClientJar {
  private static shared: ClientJar | null = null;
  private entries: Record<string, Uint8Array> | null = null;

  private constructor(readonly path: string) {}

  static fromEnvironment(): ClientJar {
    const path = process.env[jarVariable];

    if (path === undefined || path === "") {
      throw new RoadmapError([`${jarVariable} must point at a Minecraft 1.16.1 client jar (set it in mise.local.toml)`]);
    }

    if (ClientJar.shared?.path !== path) {
      ClientJar.shared = new ClientJar(path);
    }

    return ClientJar.shared;
  }

  has(asset: string): boolean {
    return this.load()[`${assetsRoot}/${asset}`] !== undefined;
  }

  read(asset: string): Uint8Array {
    return this.load()[`${assetsRoot}/${asset}`]!;
  }

  list(directory: string, extension: string): string[] {
    return this.listUnder(`${assetsRoot}/${directory}/`, extension);
  }

  readData(path: string): Uint8Array | undefined {
    return this.load()[`${dataRoot}/${path}`];
  }

  listData(directory: string, extension: string): string[] {
    return this.listUnder(`${dataRoot}/${directory}/`, extension);
  }

  private listUnder(prefix: string, extension: string): string[] {
    return Object.keys(this.load())
      .filter((name) => name.startsWith(prefix) && name.endsWith(extension) && !name.slice(prefix.length).includes("/"))
      .map((name) => name.slice(prefix.length, -extension.length));
  }

  private load(): Record<string, Uint8Array> {
    this.entries ??= unzipSync(readFileSync(this.path), {
      filter: (file) => loadedPrefixes.some((prefix) => file.name.startsWith(prefix)),
    });

    return this.entries;
  }
}
