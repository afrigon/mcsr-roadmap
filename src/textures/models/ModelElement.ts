import { FaceDirection } from "./FaceDirection";
import { type FaceJson, ModelFace } from "./ModelFace";
import { Vector3 } from "./Vector3";

export interface ElementJson {
  from: readonly number[];
  to: readonly number[];
  rotation?: { origin: readonly number[]; axis: "x" | "y" | "z"; angle: number; rescale?: boolean };
  shade?: boolean;
  faces: Partial<Record<FaceDirection, FaceJson>>;
}

export interface FaceQuad {
  origin: Vector3;
  across: Vector3;
  down: Vector3;
  normal: Vector3;
}

const faceShading: Record<FaceDirection, number> = {
  [FaceDirection.Up]: 1,
  [FaceDirection.Down]: 0.5,
  [FaceDirection.North]: 0.8,
  [FaceDirection.South]: 0.8,
  [FaceDirection.West]: 0.6,
  [FaceDirection.East]: 0.6,
};

export class ModelElement {
  private constructor(
    private readonly from: Vector3,
    private readonly to: Vector3,
    readonly faces: readonly ModelFace[],
    private readonly rotation: ElementJson["rotation"] | undefined,
    private readonly shade: boolean,
  ) {}

  static parse(json: ElementJson, resolveTexture: (reference: string) => string): ModelElement {
    const from = Vector3.of(json.from);
    const to = Vector3.of(json.to);
    const faces = Object.entries(json.faces).map(([direction, face]) =>
      ModelFace.parse(direction as FaceDirection, face, resolveTexture(face.texture), from, to),
    );

    return new ModelElement(from, to, faces, json.rotation, json.shade ?? true);
  }

  shading(face: ModelFace): number {
    return this.shade ? faceShading[face.direction] : 1;
  }

  quad(direction: FaceDirection): FaceQuad {
    const { from, to } = this;
    const size = to.minus(from);
    const quads: Record<FaceDirection, FaceQuad> = {
      [FaceDirection.Up]: {
        origin: new Vector3(from.x, to.y, from.z),
        across: new Vector3(size.x, 0, 0),
        down: new Vector3(0, 0, size.z),
        normal: new Vector3(0, 1, 0),
      },
      [FaceDirection.Down]: {
        origin: new Vector3(from.x, from.y, to.z),
        across: new Vector3(size.x, 0, 0),
        down: new Vector3(0, 0, -size.z),
        normal: new Vector3(0, -1, 0),
      },
      [FaceDirection.North]: {
        origin: new Vector3(to.x, to.y, from.z),
        across: new Vector3(-size.x, 0, 0),
        down: new Vector3(0, -size.y, 0),
        normal: new Vector3(0, 0, -1),
      },
      [FaceDirection.South]: {
        origin: new Vector3(from.x, to.y, to.z),
        across: new Vector3(size.x, 0, 0),
        down: new Vector3(0, -size.y, 0),
        normal: new Vector3(0, 0, 1),
      },
      [FaceDirection.West]: {
        origin: new Vector3(from.x, to.y, from.z),
        across: new Vector3(0, 0, size.z),
        down: new Vector3(0, -size.y, 0),
        normal: new Vector3(-1, 0, 0),
      },
      [FaceDirection.East]: {
        origin: new Vector3(to.x, to.y, to.z),
        across: new Vector3(0, 0, -size.z),
        down: new Vector3(0, -size.y, 0),
        normal: new Vector3(1, 0, 0),
      },
    };
    const quad = quads[direction];
    const corner = quad.origin;
    const acrossEnd = this.rotated(corner.plus(quad.across));
    const downEnd = this.rotated(corner.plus(quad.down));
    const origin = this.rotated(corner);

    return {
      origin,
      across: acrossEnd.minus(origin),
      down: downEnd.minus(origin),
      normal: this.rotatedDirection(quad.normal),
    };
  }

  private rotated(point: Vector3): Vector3 {
    if (this.rotation === undefined) {
      return point;
    }

    const origin = Vector3.of(this.rotation.origin);

    return this.rotatedDirection(point.minus(origin), this.rotation.rescale ?? false).plus(origin);
  }

  private rotatedDirection(vector: Vector3, rescale = false): Vector3 {
    if (this.rotation === undefined) {
      return vector;
    }

    const { axis, angle } = this.rotation;
    const stretch = rescale ? 1 / Math.cos((angle * Math.PI) / 180) : 1;

    switch (axis) {
      case "x":
        return vector.rotatedX(angle).times(new Vector3(1, stretch, stretch));
      case "y":
        return vector.rotatedY(angle).times(new Vector3(stretch, 1, stretch));
      case "z":
        return vector.rotatedZ(angle).times(new Vector3(stretch, stretch, 1));
    }
  }
}
