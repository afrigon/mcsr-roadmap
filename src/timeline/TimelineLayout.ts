import type { Goal } from "../roadmap/Goal";
import type { Item } from "../roadmap/Item";
import type { Roadmap } from "../roadmap/Roadmap";
import type { Row } from "../roadmap/Row";
import { TimelineColumn } from "./TimelineColumn";
import { TimelineEdge } from "./TimelineEdge";
import {
  columnGap,
  frameHeight,
  frameWidth,
  headerHeight,
  padding,
  stackGap,
  subColumnGap,
} from "./TimelineGeometry";
import { TimelineNode } from "./TimelineNode";

export class TimelineLayout {
  readonly columns: TimelineColumn[] = [];
  readonly nodes: TimelineNode[] = [];
  readonly edges: TimelineEdge[] = [];
  readonly width: number;
  readonly height: number;

  private readonly items: Item[];
  private readonly depths = new Map<Item, number>();
  private readonly nodesByItem = new Map<Item, TimelineNode>();

  constructor(
    private readonly roadmap: Roadmap,
    row: Row,
  ) {
    this.items = roadmap.timelineItemsFor(row);
    const rowItems = new Set(row.items);
    let x = padding;
    let tallestStack = 0;

    for (const goal of this.goalsInUse()) {
      const goalItems = this.items.filter((item) => item.goal === goal);
      const depthCount = Math.max(...goalItems.map((item) => this.depth(item))) + 1;
      const width = depthCount * frameWidth + (depthCount - 1) * subColumnGap;
      this.columns.push(new TimelineColumn(goal, x, width));

      for (let depth = 0; depth < depthCount; depth++) {
        const cell = this.orderedCell(goalItems.filter((item) => this.depth(item) === depth));
        const cellX = x + depth * (frameWidth + subColumnGap);
        tallestStack = Math.max(tallestStack, cell.length);

        cell.forEach((item, index) => {
          const y = headerHeight + index * (frameHeight + stackGap);
          const node = new TimelineNode(item, cellX, y, !rowItems.has(item));
          this.nodes.push(node);
          this.nodesByItem.set(item, node);
        });
      }

      x += width + columnGap;
    }

    for (const node of this.nodes) {
      for (const dependency of node.item.dependencies) {
        const from = this.nodesByItem.get(roadmap.item(dependency.id));

        if (from !== undefined) {
          this.edges.push(new TimelineEdge(from, node, dependency.kind));
        }
      }
    }

    this.width = x - columnGap + padding;
    this.height = headerHeight + tallestStack * (frameHeight + stackGap) - stackGap + padding;
  }

  private goalsInUse(): Goal[] {
    return this.roadmap.goals.filter((goal) => this.items.some((item) => item.goal === goal));
  }

  private depth(item: Item): number {
    const known = this.depths.get(item);

    if (known !== undefined) {
      return known;
    }

    const sameGoalPrerequisites = this.roadmap
      .prerequisitesOf(item)
      .filter((prerequisite) => prerequisite.goal === item.goal);
    const depth = Math.max(-1, ...sameGoalPrerequisites.map((prerequisite) => this.depth(prerequisite))) + 1;
    this.depths.set(item, depth);

    return depth;
  }

  private orderedCell(cell: Item[]): Item[] {
    const barycenters = new Map(cell.map((item, index) => [item, this.barycenter(item) ?? index]));

    return [...cell].sort((first, second) => barycenters.get(first)! - barycenters.get(second)!);
  }

  private barycenter(item: Item): number | null {
    const placed = this.roadmap
      .prerequisitesOf(item)
      .flatMap((prerequisite) => this.nodesByItem.get(prerequisite) ?? []);

    if (placed.length === 0) {
      return null;
    }

    const averageY = placed.reduce((sum, node) => sum + node.y, 0) / placed.length;

    return (averageY - headerHeight) / (frameHeight + stackGap);
  }
}
