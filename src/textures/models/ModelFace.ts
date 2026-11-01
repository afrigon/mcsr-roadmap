import { FaceDirection } from "./FaceDirection";
import type { Vector3 } from "./Vector3";

export interface FaceJson {
  uv?: readonly number[];
  texture: string;
  rotation?: number;
  tintindex?: number;
}

const textureSpan = 16;

export class ModelFace {
  private constructor(
    readonly direction: FaceDirection,
    readonly texture: string,
    private readonly uv: readonly number[],
    private readonly rotation: number,
    readonly tinted: boolean,
  ) {}

  static parse(direction: FaceDirection, json: FaceJson, texture: string, from: Vector3, to: Vector3): ModelFace {
    return new ModelFace(
      direction,
      texture,
      json.uv ?? ModelFace.defaultUv(direction, from, to),
      json.rotation ?? 0,
      json.tintindex !== undefined,
    );
  }

  private static defaultUv(direction: FaceDirection, from: Vector3, to: Vector3): number[] {
    switch (direction) {
      case FaceDirection.Down:
        return [from.x, textureSpan - to.z, to.x, textureSpan - from.z];
      case FaceDirection.Up:
        return [from.x, from.z, to.x, to.z];
      case FaceDirection.North:
        return [textureSpan - to.x, textureSpan - to.y, textureSpan - from.x, textureSpan - from.y];
      case FaceDirection.South:
        return [from.x, textureSpan - to.y, to.x, textureSpan - from.y];
      case FaceDirection.West:
        return [from.z, textureSpan - to.y, to.z, textureSpan - from.y];
      case FaceDirection.East:
        return [textureSpan - to.z, textureSpan - to.y, textureSpan - from.z, textureSpan - from.y];
    }
  }

  textureFraction(s: number, t: number): [number, number] {
    const [rotatedS, rotatedT] = this.rotated(s, t);
    const [u1, v1, u2, v2] = this.uv as [number, number, number, number];

    return [(u1 + rotatedS * (u2 - u1)) / textureSpan, (v1 + rotatedT * (v2 - v1)) / textureSpan];
  }

  private rotated(s: number, t: number): [number, number] {
    switch (this.rotation) {
      case 90:
        return [t, 1 - s];
      case 180:
        return [1 - s, 1 - t];
      case 270:
        return [1 - t, s];
      default:
        return [s, t];
    }
  }
}
