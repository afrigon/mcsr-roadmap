import { ClickType } from "./ClickType";
import { ContainerMenu } from "./ContainerMenu";
import type { Control } from "./Control";
import type { InventoryState } from "./InventoryState";
import type { ItemStack } from "./ItemStack";
import { Modifier } from "./Modifier";
import { MouseButton } from "./MouseButton";
import type { Slot } from "./Slot";
import { SlotSection } from "./SlotSection";

const doubleClickWindow = 250;
const offhandSwapButton = 40;
const offhandKey = "F";
const dropKey = "Q";
const hotbarKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const buttonNumbers: Record<MouseButton, number> = {
  [MouseButton.Left]: 0,
  [MouseButton.Right]: 1,
};

enum QuickCraftType {
  Split = 0,
  Single = 1,
}

export class InventoryScreen {
  readonly keys: readonly string[] = [...hotbarKeys, offhandKey, dropKey];

  private readonly menu: ContainerMenu;
  private readonly held = new Set<Control>();
  private time = 0;
  private hovered: Slot | null = null;
  private lastClickSlot: Slot | null = null;
  private lastClickTime = 0;
  private lastClickButton = -1;
  private doubleClick = false;
  private skipNextRelease = false;
  private isQuickCrafting = false;
  private quickCraftingButton = 0;
  private quickCraftingType = QuickCraftType.Split;
  private readonly quickCraftSlots: Slot[] = [];
  private movedSincePress = false;
  private lastQuickMoved: ItemStack | null = null;
  private readonly presses: boolean[] = [];

  constructor(state: InventoryState) {
    this.menu = new ContainerMenu(state);
  }

  get state(): InventoryState {
    return this.menu.state;
  }

  get heldControls(): Control[] {
    return [...this.held];
  }

  get doubleClickPresses(): readonly boolean[] {
    return this.presses;
  }

  advance(milliseconds: number) {
    this.time += milliseconds;
  }

  hover(slot: Slot) {
    if (slot.section === SlotSection.Offhand) {
      throw new Error("The offhand slot is not part of the chest screen, so it cannot be hovered");
    }

    const pressed = [MouseButton.Left, MouseButton.Right].some((button) => this.held.has(button));

    if (pressed && !this.movedSincePress && this.hovered !== null) {
      this.dragOver(this.hovered);
    }

    this.hovered = slot;

    if (pressed) {
      this.movedSincePress = true;
      this.dragOver(slot);
    }
  }

  hold(control: Control) {
    if (this.held.has(control)) {
      throw new Error(`${control} is already held`);
    }

    this.held.add(control);

    if (control === MouseButton.Left || control === MouseButton.Right) {
      this.movedSincePress = false;
      this.mouseClicked(buttonNumbers[control]);
    }
  }

  release(control: Control) {
    if (!this.held.delete(control)) {
      throw new Error(`${control} is not held`);
    }

    if (control === MouseButton.Left || control === MouseButton.Right) {
      this.mouseReleased(buttonNumbers[control]);
    }
  }

  press(key: string) {
    if (!this.keys.includes(key)) {
      throw new Error(`Unknown key "${key}": expected ${this.keys.join(", ")}`);
    }

    const hovered = this.hovered;

    if (hovered === null) {
      return;
    }

    if (this.menu.carried === null) {
      if (key === offhandKey) {
        this.menu.click(hovered, offhandSwapButton, ClickType.Swap);

        return;
      }

      const hotbarIndex = hotbarKeys.indexOf(key);

      if (hotbarIndex >= 0) {
        this.menu.click(hovered, hotbarIndex, ClickType.Swap);
      }
    }

    if (key === dropKey && this.menu.item(hovered) !== null) {
      this.menu.click(hovered, this.held.has(Modifier.Ctrl) ? 1 : 0, ClickType.Throw);
    }
  }

  private get shiftDown(): boolean {
    return this.held.has(Modifier.Shift);
  }

  private mouseClicked(button: number) {
    const slot = this.hovered;
    this.doubleClick =
      slot !== null &&
      this.lastClickSlot?.key === slot.key &&
      this.time - this.lastClickTime < doubleClickWindow &&
      this.lastClickButton === button;
    this.presses.push(this.doubleClick);
    this.skipNextRelease = false;

    if (slot !== null && !this.isQuickCrafting) {
      if (this.menu.carried === null) {
        let type = ClickType.Pickup;

        if (this.shiftDown) {
          this.lastQuickMoved = this.menu.item(slot);
          type = ClickType.QuickMove;
        }

        this.menu.click(slot, button, type);
        this.skipNextRelease = true;
      } else {
        this.isQuickCrafting = true;
        this.quickCraftingButton = button;
        this.quickCraftSlots.length = 0;
        this.quickCraftingType = button === 0 ? QuickCraftType.Split : QuickCraftType.Single;
      }
    }

    this.lastClickSlot = slot;
    this.lastClickTime = this.time;
    this.lastClickButton = button;
  }

  private dragOver(slot: Slot) {
    const carried = this.menu.carried;

    if (
      this.isQuickCrafting &&
      carried !== null &&
      carried.count > this.quickCraftSlots.length &&
      !this.quickCraftSlots.some((existing) => existing.key === slot.key) &&
      ContainerMenu.canItemQuickReplace(this.menu.item(slot), carried, true)
    ) {
      this.quickCraftSlots.push(slot);
    }
  }

  private mouseReleased(button: number) {
    const slot = this.hovered;

    if (this.doubleClick && slot !== null && button === 0) {
      if (this.shiftDown) {
        this.quickMoveMatching(slot, button);
      } else {
        this.menu.click(slot, button, ClickType.PickupAll);
      }

      this.doubleClick = false;
      this.lastClickTime = 0;
      this.finishRelease();

      return;
    }

    if (this.isQuickCrafting && this.quickCraftingButton !== button) {
      this.isQuickCrafting = false;
      this.quickCraftSlots.length = 0;
      this.skipNextRelease = true;

      return;
    }

    if (this.skipNextRelease) {
      this.skipNextRelease = false;

      return;
    }

    if (this.isQuickCrafting && this.quickCraftSlots.length > 0) {
      this.menu.click(null, ContainerMenu.quickCraftButton(0, this.quickCraftingType), ClickType.QuickCraft);

      for (const dragged of this.quickCraftSlots) {
        this.menu.click(dragged, ContainerMenu.quickCraftButton(1, this.quickCraftingType), ClickType.QuickCraft);
      }

      this.menu.click(null, ContainerMenu.quickCraftButton(2, this.quickCraftingType), ClickType.QuickCraft);
    } else if (this.menu.carried !== null) {
      const quickMove = slot !== null && this.shiftDown;

      if (quickMove) {
        this.lastQuickMoved = this.menu.item(slot);
      }

      this.menu.click(slot, button, quickMove ? ClickType.QuickMove : ClickType.Pickup);
    }

    this.finishRelease();
  }

  private quickMoveMatching(slot: Slot, button: number) {
    const moved = this.lastQuickMoved;

    if (moved === null) {
      return;
    }

    for (const candidate of ContainerMenu.slots) {
      if (
        this.menu.item(candidate) !== null &&
        ContainerMenu.sameContainer(candidate, slot) &&
        ContainerMenu.canItemQuickReplace(this.menu.item(candidate), moved, true)
      ) {
        this.menu.click(candidate, button, ClickType.QuickMove);
      }
    }
  }

  private finishRelease() {
    if (this.menu.carried === null) {
      this.lastClickTime = 0;
    }

    this.isQuickCrafting = false;
  }
}
