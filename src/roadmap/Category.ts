import type { Theme } from "./Theme";

export class Category {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly theme: Theme,
  ) {}
}
