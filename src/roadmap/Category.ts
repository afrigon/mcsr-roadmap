import type { Row } from "./Row";

export class Category {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly rows: readonly Row[],
  ) {}

  get items() {
    return this.rows.flatMap((row) => row.items);
  }
}
