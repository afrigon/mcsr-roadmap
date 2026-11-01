import { ItemStack } from "./ItemStack";
import { Slot } from "./Slot";

export class InventoryState {
  private constructor(
    private readonly stacks: ReadonlyMap<string, ItemStack>,
    readonly cursor: ItemStack | null,
  ) {}

  static parse(slots: Readonly<Record<string, string>>): InventoryState {
    const stacks = new Map<string, ItemStack>();

    for (const [slotName, stackText] of Object.entries(slots)) {
      stacks.set(Slot.parse(slotName).key, ItemStack.parse(stackText));
    }

    return new InventoryState(stacks, null);
  }

  get(slot: Slot): ItemStack | null {
    return this.stacks.get(slot.key) ?? null;
  }

  require(slot: Slot): ItemStack {
    const stack = this.get(slot);

    if (stack === null) {
      throw new Error(`Slot "${slot.key}" is empty`);
    }

    return stack;
  }

  with(slot: Slot, stack: ItemStack | null): InventoryState {
    const stacks = new Map(this.stacks);

    if (stack === null) {
      stacks.delete(slot.key);
    } else {
      stacks.set(slot.key, stack);
    }

    return new InventoryState(stacks, this.cursor);
  }

  withCursor(cursor: ItemStack | null): InventoryState {
    return new InventoryState(this.stacks, cursor);
  }
}
