import type { Action } from "./Action";
import type { InventoryState } from "./InventoryState";
import type { Slot } from "./Slot";

export class Place implements Action {
  readonly modifier = null;
  readonly press = { device: "mouse" } as const;

  constructor(readonly slot: Slot) {}

  apply(state: InventoryState): InventoryState {
    const held = state.cursor;

    if (held === null) {
      throw new Error(`Cannot place into "${this.slot.key}": the cursor holds nothing, use pick-up first`);
    }

    const existing = state.get(this.slot);

    if (existing === null) {
      return state.with(this.slot, held).withCursor(null);
    }

    if (!existing.stacksWith(held)) {
      return state.with(this.slot, held).withCursor(existing);
    }

    const moved = Math.min(held.count, existing.maxCount - existing.count);

    return state.with(this.slot, existing.withCount(existing.count + moved)).withCursor(held.withCount(held.count - moved));
  }
}
