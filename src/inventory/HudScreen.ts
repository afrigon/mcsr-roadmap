import type { Control } from "./Control";
import type { DemoScreen } from "./DemoScreen";
import type { DragStage } from "./DragStage";
import type { InventoryState } from "./InventoryState";
import { MenuSlot } from "./MenuSlot";
import { Modifier } from "./Modifier";
import { MouseButton } from "./MouseButton";
import { RecipeBookState } from "./RecipeBookState";
import { ScreenKeys } from "./ScreenKeys";
import type { ScreenLayout } from "./ScreenLayout";
import { Slot } from "./Slot";
import { SlotContainer } from "./SlotContainer";
import { SlotSection } from "./SlotSection";

const padding = 2;
const hotbarWidth = 182 + padding * 2;
const hotbarHeight = 22 + padding * 2;
const slotPitch = 20;
const firstSlotX = 3 + padding;
const offhandX = -26 + padding;
const slotY = 3 + padding;
const hotbarKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const swapKey = "F";
const dropKey = "Q";
const offhand = Slot.of(SlotSection.Offhand, 1);

export class HudScreen implements DemoScreen {
  readonly slots: readonly MenuSlot[] = [
    ...Slot.all(SlotSection.Hotbar).map(
      (slot, index) => new MenuSlot(slot, SlotContainer.Player, firstSlotX + index * slotPitch, slotY),
    ),
    new MenuSlot(offhand, SlotContainer.Player, offhandX, slotY),
  ];
  readonly windowWidth = hotbarWidth;
  readonly windowHeight = hotbarHeight;
  readonly doubleClickPresses: readonly boolean[] = [];
  readonly draggedSlots: readonly MenuSlot[] = [];
  readonly dragStages: readonly DragStage[] = [];
  readonly pointer = null;
  readonly hoveredSlot = null;
  readonly book = RecipeBookState.Closed;
  readonly bookButtonHighlighted = false;

  private readonly held = new Set<Control>();

  constructor(
    private state: InventoryState,
    private selected: number,
  ) {
    if (!Number.isInteger(selected) || selected < 1 || selected > hotbarKeys.length) {
      throw new Error(`The selected hotbar slot ${selected} is outside 1–${hotbarKeys.length}`);
    }
  }

  get displayedState(): InventoryState {
    return this.state;
  }

  get heldControls(): Control[] {
    return [...this.held];
  }

  get selectedSlot(): MenuSlot {
    return this.slots[this.selected - 1]!;
  }

  layoutFor(): ScreenLayout {
    return { leftPos: 0, topPos: 0, bookPanel: null, bookButton: null };
  }

  checkStartingSlot(slot: Slot) {
    if (slot.section !== SlotSection.Hotbar && slot.section !== SlotSection.Offhand) {
      throw new Error(`The hotbar shows only hotbar 1–9 and the offhand, not "${slot.key}"`);
    }
  }

  advance() {}

  hover() {
    throw new Error("The hotbar has no pointer: the game hides the cursor outside of screens");
  }

  hold(control: Control) {
    HudScreen.rejectMouse(control);

    if (this.held.has(control)) {
      throw new Error(`${control} is already held`);
    }

    this.held.add(control);
  }

  release(control: Control) {
    HudScreen.rejectMouse(control);

    if (!this.held.delete(control)) {
      throw new Error(`${control} is not held`);
    }
  }

  press(key: string) {
    if (!ScreenKeys.all.includes(key)) {
      throw new Error(`Unknown key "${key}": expected ${ScreenKeys.all.join(", ")}`);
    }

    const hotbarIndex = hotbarKeys.indexOf(key);

    if (hotbarIndex >= 0) {
      this.selected = hotbarIndex + 1;
    } else if (key === swapKey) {
      const selected = this.state.get(this.selectedSlot.slot);
      this.state = this.state.with(this.selectedSlot.slot, this.state.get(offhand)).with(offhand, selected);
    } else if (key === dropKey) {
      const selected = this.state.get(this.selectedSlot.slot);

      if (selected !== null) {
        const remaining = this.held.has(Modifier.Ctrl) ? 0 : selected.count - 1;
        this.state = this.state.with(this.selectedSlot.slot, selected.withCount(remaining));
      }
    }
  }

  private static rejectMouse(control: Control) {
    if (control === MouseButton.Left || control === MouseButton.Right) {
      throw new Error("Mouse clicks are not modelled on the hotbar");
    }
  }
}
