import type { Action } from "./Action";
import type { InventoryState } from "./InventoryState";
import { Modifier } from "./Modifier";
import { Slot } from "./Slot";
import { SlotSection } from "./SlotSection";

const playerSlots = [...Slot.all(SlotSection.Hotbar).reverse(), ...Slot.all(SlotSection.Inventory).reverse()];

export class ShiftClick implements Action {
  readonly modifier = Modifier.Shift;
  readonly press = { device: "mouse" } as const;

  constructor(readonly slot: Slot) {}

  apply(state: InventoryState): InventoryState {
    const stack = state.require(this.slot);
    const targets = this.targets();
    let remaining = stack.count;
    let next = state;

    for (const target of targets) {
      const existing = next.get(target);

      if (existing === null || !existing.stacksWith(stack) || existing.count >= existing.maxCount) {
        continue;
      }

      const moved = Math.min(remaining, existing.maxCount - existing.count);
      next = next.with(target, existing.withCount(existing.count + moved));
      remaining -= moved;

      if (remaining === 0) {
        break;
      }
    }

    const empty = remaining === 0 ? undefined : targets.find((target) => next.get(target) === null);

    if (empty !== undefined) {
      next = next.with(empty, stack.withCount(remaining));
      remaining = 0;
    }

    return next.with(this.slot, stack.withCount(remaining));
  }

  private targets(): readonly Slot[] {
    switch (this.slot.section) {
      case SlotSection.Chest:
        return playerSlots;
      case SlotSection.Inventory:
      case SlotSection.Hotbar:
        return Slot.all(SlotSection.Chest);
      case SlotSection.Offhand:
        throw new Error("The offhand slot is not part of the chest screen, so it cannot be shift-clicked");
    }
  }
}
