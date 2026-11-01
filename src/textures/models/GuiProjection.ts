import { Vector3 } from "./Vector3";

export interface TransformJson {
  rotation?: readonly number[];
  translation?: readonly number[];
  scale?: readonly number[];
}

const modelCenter = new Vector3(8, 8, 8);
const modelSpan = 16;

export class GuiProjection {
  private readonly rotation: Vector3;
  private readonly translation: Vector3;
  private readonly scale: Vector3;

  constructor(
    transform: TransformJson,
    private readonly size: number,
  ) {
    this.rotation = Vector3.of(transform.rotation ?? [0, 0, 0]);
    this.translation = Vector3.of(transform.translation ?? [0, 0, 0]);
    this.scale = Vector3.of(transform.scale ?? [1, 1, 1]);
  }

  point(point: Vector3): Vector3 {
    const transformed = this.direction(point.minus(modelCenter)).times(this.scale).plus(this.translation);
    const pixelsPerUnit = this.size / modelSpan;

    return new Vector3(
      this.size / 2 + transformed.x * pixelsPerUnit,
      this.size / 2 - transformed.y * pixelsPerUnit,
      transformed.z,
    );
  }

  direction(vector: Vector3): Vector3 {
    return vector.rotatedZ(this.rotation.z).rotatedY(this.rotation.y).rotatedX(this.rotation.x);
  }
}
