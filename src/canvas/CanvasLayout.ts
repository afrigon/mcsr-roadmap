import type { Item } from "../roadmap/Item";
import type { Roadmap } from "../roadmap/Roadmap";
import { CanvasBand } from "./CanvasBand";
import {
  bandPadding,
  columnGap,
  columnWidth,
  endPadding,
  frameSize,
  gutter,
  labelStrip,
  rowGap,
} from "./CanvasGeometry";
import { CanvasLink } from "./CanvasLink";
import { CanvasNode } from "./CanvasNode";
import { GoalBracket } from "./GoalBracket";

export class CanvasLayout {
  readonly bands: CanvasBand[] = [];
  readonly links: CanvasLink[] = [];
  readonly brackets: GoalBracket[] = [];
  readonly width: number;
  readonly height: number;

  private readonly columns = new Map<Item, number>();
  private readonly rows = new Map<Item, number>();

  constructor(private readonly roadmap: Roadmap) {
    const columnCount = this.assignColumns();
    const nodesByItem = new Map<Item, CanvasNode>();
    let top = 0;

    for (const category of roadmap.categories) {
      const items = roadmap.itemsIn(category);
      const rowCount = this.assignRows(items);
      const height = labelStrip + rowCount * (frameSize + rowGap) - rowGap + bandPadding * 2;
      const nodes = items.map((item) => {
        const node = new CanvasNode(
          item,
          this.columnX(this.columns.get(item)!),
          top + labelStrip + bandPadding + this.rows.get(item)! * (frameSize + rowGap),
        );
        nodesByItem.set(item, node);

        return node;
      });
      this.bands.push(new CanvasBand(category, top, height, nodes));
      top += height;
    }

    for (const [item, node] of nodesByItem) {
      const parent = roadmap.parentOf(item);

      if (parent !== null) {
        this.links.push(new CanvasLink(nodesByItem.get(parent)!, node));
      }
    }

    this.width = this.columnX(columnCount) - columnGap + endPadding;
    this.height = top;
  }

  private assignColumns(): number {
    let nextColumn = 0;

    for (const goal of this.roadmap.goals) {
      const goalItems = this.roadmap.items.filter((item) => item.goal === goal);

      if (goalItems.length === 0) {
        continue;
      }

      const start = nextColumn;
      const resolve = (item: Item): number => {
        const known = this.columns.get(item);

        if (known !== undefined) {
          return known;
        }

        const parent = this.roadmap.parentOf(item);
        const column = Math.max(start, parent === null ? 0 : resolve(parent) + 1);
        this.columns.set(item, column);

        return column;
      };
      const end = Math.max(...goalItems.map(resolve));
      this.brackets.push(new GoalBracket(goal, this.columnX(start) - columnGap / 2, this.columnX(end + 1) - columnGap / 2));
      nextColumn = end + 1;
    }

    return nextColumn;
  }

  private assignRows(items: readonly Item[]): number {
    let nextRow = 0;

    const place = (item: Item) => {
      const children = this.roadmap.childrenOf(item);

      if (children.length === 0) {
        this.rows.set(item, nextRow++);
        return;
      }

      children.forEach(place);
      this.rows.set(item, this.rows.get(children[0]!)!);
    };

    items.filter((item) => item.parent === null).forEach(place);

    return nextRow;
  }

  private columnX(column: number): number {
    return gutter + column * columnWidth;
  }
}
