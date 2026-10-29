import type { DependencyKind } from "../roadmap/DependencyKind";
import { frameHeight, frameWidth } from "./TimelineGeometry";
import type { TimelineNode } from "./TimelineNode";

export class TimelineEdge {
  constructor(
    readonly from: TimelineNode,
    readonly to: TimelineNode,
    readonly kind: DependencyKind,
  ) {}

  get path(): string {
    const startX = this.from.x + frameWidth;
    const startY = this.from.y + frameHeight / 2;
    const endX = this.to.x;
    const endY = this.to.y + frameHeight / 2;
    const bend = (endX - startX) / 2;

    return `M ${startX} ${startY} C ${startX + bend} ${startY}, ${endX - bend} ${endY}, ${endX} ${endY}`;
  }
}
