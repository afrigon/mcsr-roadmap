import { columnGap, elbowRadius, frameSize } from "./CanvasGeometry";
import type { CanvasNode } from "./CanvasNode";

export class CanvasLink {
  constructor(
    readonly from: CanvasNode,
    readonly to: CanvasNode,
  ) {}

  get path(): string {
    const startX = this.from.x + frameSize;
    const startY = this.from.y + frameSize / 2;
    const endX = this.to.x;
    const endY = this.to.y + frameSize / 2;

    if (startY === endY) {
      return `M ${startX} ${startY} H ${endX}`;
    }

    const bendX = startX + columnGap / 2;
    const radius = Math.min(elbowRadius, Math.abs(endY - startY) / 2);
    const direction = Math.sign(endY - startY);

    return [
      `M ${startX} ${startY}`,
      `H ${bendX - radius}`,
      `Q ${bendX} ${startY} ${bendX} ${startY + radius * direction}`,
      `V ${endY - radius * direction}`,
      `Q ${bendX} ${endY} ${bendX + radius} ${endY}`,
      `H ${endX}`,
    ].join(" ");
  }
}
