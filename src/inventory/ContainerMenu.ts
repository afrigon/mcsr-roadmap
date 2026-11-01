import { ClickType } from "./ClickType";
import type { InventoryState } from "./InventoryState";
import type { ItemStack } from "./ItemStack";
import { Slot } from "./Slot";
import { SlotSection } from "./SlotSection";

const containerSlotLimit = 64;
const offhandSwapButton = 40;
const chestSlots = Slot.all(SlotSection.Chest);
const playerSlots = [...Slot.all(SlotSection.Inventory), ...Slot.all(SlotSection.Hotbar)];

enum QuickCraftStatus {
  Idle = 0,
  Collecting = 1,
  Ending = 2,
}

export class ContainerMenu {
  static readonly slots: readonly Slot[] = [...chestSlots, ...playerSlots];

  private quickCraftStatus = QuickCraftStatus.Idle;
  private quickCraftType = 0;
  private readonly quickCraftSlots: Slot[] = [];

  constructor(private current: InventoryState) {}

  get state(): InventoryState {
    return this.current;
  }

  get carried(): ItemStack | null {
    return this.current.cursor;
  }

  item(slot: Slot): ItemStack | null {
    return this.current.get(slot);
  }

  static canItemQuickReplace(item: ItemStack | null, stack: ItemStack, allowOverflow: boolean): boolean {
    if (item === null) {
      return true;
    }

    return item.stacksWith(stack) && item.count + (allowOverflow ? 0 : stack.count) <= stack.maxCount;
  }

  static sameContainer(first: Slot, second: Slot): boolean {
    return (first.section === SlotSection.Chest) === (second.section === SlotSection.Chest);
  }

  static quickCraftButton(status: number, type: number): number {
    return (status & 3) | ((type & 3) << 2);
  }

  click(slot: Slot | null, button: number, type: ClickType) {
    if (type === ClickType.QuickCraft) {
      this.quickCraft(slot, button);

      return;
    }

    if (this.quickCraftStatus !== QuickCraftStatus.Idle) {
      this.resetQuickCraft();

      return;
    }

    if (slot === null) {
      return;
    }

    switch (type) {
      case ClickType.Pickup:
        this.pickup(slot, button);
        break;
      case ClickType.QuickMove:
        this.quickMove(slot);
        break;
      case ClickType.Swap:
        this.swap(slot, button);
        break;
      case ClickType.Throw:
        this.throw(slot, button);
        break;
      case ClickType.PickupAll:
        this.pickupAll(slot, button);
        break;
    }
  }

  private set(slot: Slot, stack: ItemStack | null) {
    this.current = this.current.with(slot, stack);
  }

  private setCarried(stack: ItemStack | null) {
    this.current = this.current.withCursor(stack);
  }

  private static slotLimit(stack: ItemStack): number {
    return Math.min(containerSlotLimit, stack.maxCount);
  }

  private pickup(slot: Slot, button: number) {
    const item = this.item(slot);
    const carried = this.carried;

    if (item === null) {
      if (carried !== null) {
        const placed = Math.min(button === 0 ? carried.count : 1, ContainerMenu.slotLimit(carried));
        this.set(slot, carried.withCount(placed));
        this.setCarried(carried.withCount(carried.count - placed));
      }

      return;
    }

    if (carried === null) {
      const taken = button === 0 ? item.count : Math.floor((item.count + 1) / 2);
      this.setCarried(item.withCount(taken));
      this.set(slot, item.withCount(item.count - taken));

      return;
    }

    if (item.stacksWith(carried)) {
      const added = Math.min(
        button === 0 ? carried.count : 1,
        ContainerMenu.slotLimit(carried) - item.count,
        carried.maxCount - item.count,
      );
      this.set(slot, item.withCount(item.count + added));
      this.setCarried(carried.withCount(carried.count - added));

      return;
    }

    if (carried.count <= ContainerMenu.slotLimit(carried)) {
      this.set(slot, carried);
      this.setCarried(item);
    }
  }

  private quickMove(slot: Slot) {
    let moved = this.quickMoveStack(slot);

    while (moved !== null && this.item(slot)?.stacksWith(moved)) {
      moved = this.quickMoveStack(slot);
    }
  }

  private quickMoveStack(slot: Slot): ItemStack | null {
    const item = this.item(slot);

    if (item === null) {
      return null;
    }

    const fromChest = slot.section === SlotSection.Chest;
    const remaining = this.moveItemStackTo(item, fromChest ? playerSlots : chestSlots, fromChest);

    if (remaining === item.count) {
      return null;
    }

    this.set(slot, item.withCount(remaining));

    return item;
  }

  private moveItemStackTo(stack: ItemStack, targets: readonly Slot[], reverse: boolean): number {
    const ordered = reverse ? [...targets].reverse() : targets;
    let remaining = stack.count;

    if (stack.maxCount > 1) {
      for (const target of ordered) {
        const existing = this.item(target);

        if (remaining === 0) {
          break;
        }

        if (existing === null || !existing.stacksWith(stack)) {
          continue;
        }

        const added = Math.min(remaining, Math.max(stack.maxCount - existing.count, 0));
        this.set(target, existing.withCount(existing.count + added));
        remaining -= added;
      }
    }

    const empty = remaining === 0 ? undefined : ordered.find((target) => this.item(target) === null);

    if (empty !== undefined) {
      const placed = Math.min(remaining, containerSlotLimit);
      this.set(empty, stack.withCount(placed));
      remaining -= placed;
    }

    return remaining;
  }

  private swap(slot: Slot, button: number) {
    const playerSlot = button === offhandSwapButton ? Slot.offhand : Slot.of(SlotSection.Hotbar, button + 1);
    const held = this.item(playerSlot);
    const item = this.item(slot);

    if (held === null && item === null) {
      return;
    }

    if (held === null) {
      this.set(playerSlot, item);
      this.set(slot, null);

      return;
    }

    const limit = ContainerMenu.slotLimit(held);

    if (item === null) {
      this.set(slot, held.withCount(Math.min(held.count, limit)));
      this.set(playerSlot, held.withCount(held.count - Math.min(held.count, limit)));

      return;
    }

    if (held.count <= limit) {
      this.set(slot, held);
      this.set(playerSlot, item);
    }
  }

  private throw(slot: Slot, button: number) {
    const item = this.item(slot);

    if (this.carried !== null || item === null) {
      return;
    }

    this.set(slot, item.withCount(button === 0 ? item.count - 1 : 0));
  }

  private pickupAll(slot: Slot, button: number) {
    const carried = this.carried;

    if (carried === null || this.item(slot) !== null) {
      return;
    }

    const order = button === 0 ? ContainerMenu.slots : [...ContainerMenu.slots].reverse();
    let gathered = carried;

    for (const takeFullStacks of [false, true]) {
      for (const source of order) {
        const item = this.item(source);

        if (gathered.count >= gathered.maxCount) {
          break;
        }

        if (item === null || !ContainerMenu.canItemQuickReplace(item, gathered, true)) {
          continue;
        }

        if (!takeFullStacks && item.count === item.maxCount) {
          continue;
        }

        const taken = Math.min(gathered.maxCount - gathered.count, item.count);
        this.set(source, item.withCount(item.count - taken));
        gathered = gathered.withCount(gathered.count + taken)!;
      }
    }

    this.setCarried(gathered);
  }

  private quickCraft(slot: Slot | null, button: number) {
    const previous = this.quickCraftStatus;
    const status = button & 3;
    this.quickCraftStatus = status;
    const carried = this.carried;

    if ((previous !== QuickCraftStatus.Collecting || status !== QuickCraftStatus.Ending) && previous !== status) {
      this.resetQuickCraft();
    } else if (carried === null) {
      this.resetQuickCraft();
    } else if (status === QuickCraftStatus.Idle) {
      this.quickCraftType = (button >> 2) & 3;
      this.quickCraftSlots.length = 0;
      this.quickCraftStatus = QuickCraftStatus.Collecting;
    } else if (status === QuickCraftStatus.Collecting) {
      if (slot !== null && this.canDragInto(slot, carried) && carried.count > this.quickCraftSlots.length) {
        this.quickCraftSlots.push(slot);
      }
    } else if (status === QuickCraftStatus.Ending) {
      this.spreadQuickCraft(carried);
      this.resetQuickCraft();
    } else {
      this.resetQuickCraft();
    }
  }

  private canDragInto(slot: Slot, carried: ItemStack): boolean {
    return (
      !this.quickCraftSlots.some((existing) => existing.key === slot.key) &&
      ContainerMenu.canItemQuickReplace(this.item(slot), carried, true)
    );
  }

  private spreadQuickCraft(carried: ItemStack) {
    let remaining = carried.count;

    for (const slot of this.quickCraftSlots) {
      const existing = this.item(slot);

      if (!ContainerMenu.canItemQuickReplace(existing, carried, true) || carried.count < this.quickCraftSlots.length) {
        continue;
      }

      const before = existing?.count ?? 0;
      const share = this.quickCraftType === 0 ? Math.floor(carried.count / this.quickCraftSlots.length) : 1;
      const count = Math.min(share + before, ContainerMenu.slotLimit(carried));
      remaining -= count - before;
      this.set(slot, carried.withCount(count));
    }

    this.setCarried(carried.withCount(remaining));
  }

  private resetQuickCraft() {
    this.quickCraftStatus = QuickCraftStatus.Idle;
    this.quickCraftSlots.length = 0;
  }
}
