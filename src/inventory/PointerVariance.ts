import type { Point } from "./Point";

const maximumOffset = 4;
const seed = 0x9e3779b9;

export class PointerVariance {
  private state = seed;

  offset(): Point {
    return { x: (this.next() * 2 - 1) * maximumOffset, y: (this.next() * 2 - 1) * maximumOffset };
  }

  // mulberry32: seeded, so every build draws the same pointer path.
  private next(): number {
    this.state = (this.state + 0x6d2b79f5) | 0;
    let value = Math.imul(this.state ^ (this.state >>> 15), 1 | this.state);
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value;

    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  }
}
