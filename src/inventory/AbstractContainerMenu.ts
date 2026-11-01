import { ClickType } from "./ClickType";
import type { InventoryState } from "./InventoryState";
import type { ItemStack } from "./ItemStack";
import type { MenuSlot } from "./MenuSlot";
import { Slot } from "./Slot";
import { SlotSection } from "./SlotSection";

const offhandSwapButton = 40;

enum QuickCraftStatus {
  Idle = 0,
  Collecting = 1,
  Ending = 2,
}

export abstract class AbstractContainerMenu {
  abstract readonly slots: readonly MenuSlot[];
  abstract readonly imageWidth: number;
  abstract readonly imageHeight: number;

  private quickCraftStatus = QuickCraftStatus.Idle;
  private quickCraftType = 0;
  private readonly quickCraftSlots: MenuSlot[] = [];

  constructor(private current: InventoryState) {}

  get state(): InventoryState {
    return this.current;
  }

  get carried(): ItemStack | null {
    return this.current.cursor;
  }

  static canItemQuickReplace(item: ItemStack | null, stack: ItemStack, allowOverflow: boolean): boolean {
    if (item === null) {
      return true;
    }

    return item.stacksWith(stack) && item.count + (allowOverflow ? 0 : stack.count) <= stack.maxCount;
  }

  static quickCraftButton(status: number, type: number): number {
    return (status & 3) | ((type & 3) << 2);
  }

  slot(slot: Slot): MenuSlot | undefined {
    return this.slots.find((candidate) => candidate.key === slot.key);
  }

  require(slot: Slot): MenuSlot {
    const menuSlot = this.slot(slot);

    if (menuSlot === undefined) {
      throw new Error(`Slot "${slot.key}" is not part of this screen`);
    }

    return menuSlot;
  }

  item(slot: MenuSlot): ItemStack | null {
    return this.current.get(slot.slot);
  }

  canTakeItemForPickAll(_slot: MenuSlot): boolean {
    return true;
  }

  canDragTo(_slot: MenuSlot): boolean {
    return true;
  }

  click(slot: MenuSlot | null, button: number, type: ClickType) {
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

  protected abstract quickMoveStack(index: number): ItemStack | null;

  protected slotChanged(_slot: MenuSlot) {}

  protected onTake(_slot: MenuSlot) {}

  protected set(slot: MenuSlot, stack: ItemStack | null) {
    this.current = this.current.with(slot.slot, stack);
    this.slotChanged(slot);
  }

  protected setState(slot: Slot, stack: ItemStack | null) {
    this.current = this.current.with(slot, stack);
  }

  protected moveItemStackTo(stack: ItemStack, start: number, end: number, reverse: boolean): number {
    const targets = this.slots.slice(start, end);
    const ordered = reverse ? targets.reverse() : targets;
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

    const empty =
      remaining === 0 ? undefined : ordered.find((target) => this.item(target) === null && target.mayPlace(stack));

    if (empty !== undefined) {
      const placed = Math.min(remaining, empty.maxStackSize);
      this.set(empty, stack.withCount(placed));
      remaining -= placed;
    }

    return remaining;
  }

  protected finishQuickMove(slot: MenuSlot, item: ItemStack, remaining: number): ItemStack | null {
    if (remaining === item.count) {
      return null;
    }

    this.set(slot, item.withCount(remaining));
    this.onTake(slot);

    return item;
  }

  private setCarried(stack: ItemStack | null) {
    this.current = this.current.withCursor(stack);
  }

  private setPlayerItem(slot: Slot, stack: ItemStack | null) {
    const menuSlot = this.slot(slot);

    if (menuSlot === undefined) {
      this.setState(slot, stack);
    } else {
      this.set(menuSlot, stack);
    }
  }

  private remove(slot: MenuSlot, amount: number): ItemStack {
    const item = this.item(slot)!;
    const taken = slot.takesWholeStack ? item.count : Math.min(amount, item.count);
    this.set(slot, item.withCount(item.count - taken));

    return item.withCount(taken)!;
  }

  private pickup(slot: MenuSlot, button: number) {
    const item = this.item(slot);
    const carried = this.carried;

    if (item === null) {
      if (carried !== null && slot.mayPlace(carried)) {
        const placed = Math.min(button === 0 ? carried.count : 1, slot.maxStackSizeFor(carried));
        this.set(slot, carried.withCount(placed));
        this.setCarried(carried.withCount(carried.count - placed));
      }

      return;
    }

    if (carried === null) {
      this.setCarried(this.remove(slot, button === 0 ? item.count : Math.floor((item.count + 1) / 2)));
      this.onTake(slot);

      return;
    }

    if (slot.mayPlace(carried)) {
      if (item.stacksWith(carried)) {
        const added = Math.min(
          button === 0 ? carried.count : 1,
          slot.maxStackSizeFor(carried) - item.count,
          carried.maxCount - item.count,
        );
        this.set(slot, item.withCount(item.count + added));
        this.setCarried(carried.withCount(carried.count - added));
      } else if (carried.count <= slot.maxStackSizeFor(carried)) {
        this.set(slot, carried);
        this.setCarried(item);
      }

      return;
    }

    if (carried.maxCount > 1 && item.stacksWith(carried) && item.count + carried.count <= carried.maxCount) {
      const taken = this.remove(slot, item.count);
      this.setCarried(carried.withCount(carried.count + taken.count));
      this.onTake(slot);
    }
  }

  private quickMove(slot: MenuSlot) {
    const index = this.slots.indexOf(slot);
    let moved = this.quickMoveStack(index);

    while (moved !== null && this.item(slot)?.stacksWith(moved)) {
      moved = this.quickMoveStack(index);
    }
  }

  private swap(slot: MenuSlot, button: number) {
    const playerSlot =
      button === offhandSwapButton ? Slot.of(SlotSection.Offhand, 1) : Slot.of(SlotSection.Hotbar, button + 1);
    const held = this.current.get(playerSlot);
    const item = this.item(slot);

    if (held === null && item === null) {
      return;
    }

    if (held === null) {
      this.setPlayerItem(playerSlot, item);
      this.set(slot, null);
      this.onTake(slot);

      return;
    }

    if (item === null) {
      if (slot.mayPlace(held)) {
        const placed = Math.min(held.count, slot.maxStackSizeFor(held));
        this.set(slot, held.withCount(placed));
        this.setPlayerItem(playerSlot, held.withCount(held.count - placed));
      }

      return;
    }

    if (!slot.mayPlace(held)) {
      return;
    }

    if (held.count > slot.maxStackSizeFor(held)) {
      throw new Error(`Swapping ${held.count} items into "${slot.key}" would overflow into the inventory, which the demo does not model`);
    }

    this.set(slot, held);
    this.setPlayerItem(playerSlot, item);
    this.onTake(slot);
  }

  private throw(slot: MenuSlot, button: number) {
    const item = this.item(slot);

    if (this.carried !== null || item === null) {
      return;
    }

    this.remove(slot, button === 0 ? 1 : item.count);
    this.onTake(slot);
  }

  private pickupAll(slot: MenuSlot, button: number) {
    const carried = this.carried;

    if (carried === null || this.item(slot) !== null) {
      return;
    }

    const order = button === 0 ? this.slots : [...this.slots].reverse();
    let gathered = carried;

    for (const takeFullStacks of [false, true]) {
      for (const source of order) {
        const item = this.item(source);

        if (gathered.count >= gathered.maxCount) {
          break;
        }

        if (
          item === null ||
          !AbstractContainerMenu.canItemQuickReplace(item, gathered, true) ||
          !this.canTakeItemForPickAll(source)
        ) {
          continue;
        }

        if (!takeFullStacks && item.count === item.maxCount) {
          continue;
        }

        const taken = this.remove(source, Math.min(gathered.maxCount - gathered.count, item.count));
        gathered = gathered.withCount(gathered.count + taken.count)!;
        this.onTake(source);
      }
    }

    this.setCarried(gathered);
  }

  private quickCraft(slot: MenuSlot | null, button: number) {
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

  private canDragInto(slot: MenuSlot, carried: ItemStack): boolean {
    return (
      !this.quickCraftSlots.includes(slot) &&
      AbstractContainerMenu.canItemQuickReplace(this.item(slot), carried, true) &&
      slot.mayPlace(carried) &&
      this.canDragTo(slot)
    );
  }

  private spreadQuickCraft(carried: ItemStack) {
    let remaining = carried.count;

    for (const slot of this.quickCraftSlots) {
      const existing = this.item(slot);

      if (
        !AbstractContainerMenu.canItemQuickReplace(existing, carried, true) ||
        !slot.mayPlace(carried) ||
        carried.count < this.quickCraftSlots.length ||
        !this.canDragTo(slot)
      ) {
        continue;
      }

      const before = existing?.count ?? 0;
      const share = this.quickCraftType === 0 ? Math.floor(carried.count / this.quickCraftSlots.length) : 1;
      const count = Math.min(share + before, slot.maxStackSizeFor(carried));
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
