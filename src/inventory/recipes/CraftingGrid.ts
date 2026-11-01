import type { ItemStack } from "../ItemStack";

export class CraftingGrid {
  constructor(
    readonly width: number,
    readonly height: number,
    private readonly cells: readonly (ItemStack | null)[],
  ) {}

  get size(): number {
    return this.cells.length;
  }

  at(x: number, y: number): ItemStack | null {
    return this.cells[x + y * this.width] ?? null;
  }

  item(index: number): ItemStack | null {
    return this.cells[index] ?? null;
  }

  filled(): ItemStack[] {
    return this.cells.filter((cell) => cell !== null);
  }
}
