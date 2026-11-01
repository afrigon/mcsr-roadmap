import { IconReference } from "../roadmap/IconReference";
import { StackSize } from "./StackSize";

export class ItemStack {
  private constructor(
    readonly icon: IconReference,
    readonly count: number,
  ) {}

  static parse(value: string): ItemStack {
    const [iconText, countText, ...rest] = value.trim().split(/\s+/);
    const icon = IconReference.parse(iconText ?? "");

    if (icon === null || rest.length > 0) {
      throw new Error(`Unknown item "${value}": expected an icon such as "item/obsidian" and an optional count`);
    }

    const count = countText === undefined ? 1 : Number(countText);
    const maxCount = StackSize.of(icon);

    if (!Number.isInteger(count) || count < 1 || count > maxCount) {
      throw new Error(`Item "${value}" has a count outside 1–${maxCount}`);
    }

    return new ItemStack(icon, count);
  }

  get maxCount(): number {
    return StackSize.of(this.icon);
  }

  stacksWith(other: ItemStack): boolean {
    return this.icon.key === other.icon.key;
  }

  withCount(count: number): ItemStack | null {
    return count === 0 ? null : new ItemStack(this.icon, count);
  }
}
