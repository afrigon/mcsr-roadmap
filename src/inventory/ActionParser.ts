import type { Action } from "./Action";
import { Drop } from "./Drop";
import { DropStack } from "./DropStack";
import { HotkeySwap } from "./HotkeySwap";
import { OffhandSwap } from "./OffhandSwap";
import { PickUp } from "./PickUp";
import { Place } from "./Place";
import { ShiftClick } from "./ShiftClick";
import { Slot } from "./Slot";

const slotActions: Record<string, (slot: Slot) => Action> = {
  "shift-click": (slot) => new ShiftClick(slot),
  offhand: (slot) => new OffhandSwap(slot),
  drop: (slot) => new Drop(slot),
  "drop-stack": (slot) => new DropStack(slot),
  "pick-up": (slot) => new PickUp(slot),
  place: (slot) => new Place(slot),
};

export class ActionParser {
  static parse(value: string): Action {
    const [verb = "", ...rest] = value.trim().split(/\s+/);

    if (verb === "hotkey") {
      const [hotbarIndex = "", ...slotWords] = rest;

      return new HotkeySwap(Number(hotbarIndex), Slot.parse(slotWords.join(" ")));
    }

    const create = slotActions[verb];

    if (create === undefined) {
      throw new Error(`Unknown action "${value}": expected ${["hotkey", ...Object.keys(slotActions)].join(", ")}`);
    }

    return create(Slot.parse(rest.join(" ")));
  }
}
