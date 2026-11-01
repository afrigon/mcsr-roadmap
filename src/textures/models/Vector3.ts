export class Vector3 {
  constructor(
    readonly x: number,
    readonly y: number,
    readonly z: number,
  ) {}

  static of([x, y, z]: readonly number[]): Vector3 {
    return new Vector3(x!, y!, z!);
  }

  plus(other: Vector3): Vector3 {
    return new Vector3(this.x + other.x, this.y + other.y, this.z + other.z);
  }

  minus(other: Vector3): Vector3 {
    return new Vector3(this.x - other.x, this.y - other.y, this.z - other.z);
  }

  times(factor: Vector3): Vector3 {
    return new Vector3(this.x * factor.x, this.y * factor.y, this.z * factor.z);
  }

  rotatedX(degrees: number): Vector3 {
    const [cos, sin] = Vector3.trigonometry(degrees);

    return new Vector3(this.x, this.y * cos - this.z * sin, this.y * sin + this.z * cos);
  }

  rotatedY(degrees: number): Vector3 {
    const [cos, sin] = Vector3.trigonometry(degrees);

    return new Vector3(this.x * cos + this.z * sin, this.y, -this.x * sin + this.z * cos);
  }

  rotatedZ(degrees: number): Vector3 {
    const [cos, sin] = Vector3.trigonometry(degrees);

    return new Vector3(this.x * cos - this.y * sin, this.x * sin + this.y * cos, this.z);
  }

  private static trigonometry(degrees: number): [number, number] {
    const radians = (degrees * Math.PI) / 180;

    return [Math.cos(radians), Math.sin(radians)];
  }
}
