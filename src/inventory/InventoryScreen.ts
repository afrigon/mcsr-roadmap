import { AbstractContainerMenu } from "./AbstractContainerMenu";
import { ChestMenu } from "./ChestMenu";
import { ClickType } from "./ClickType";
import { ContainerType } from "./ContainerType";
import type { Control } from "./Control";
import { CraftingMenu } from "./CraftingMenu";
import { InventoryMenu } from "./InventoryMenu";
import type { InventoryState } from "./InventoryState";
import type { ItemStack } from "./ItemStack";
import type { MenuSlot } from "./MenuSlot";
import { Modifier } from "./Modifier";
import { MouseButton } from "./MouseButton";
import type { Point } from "./Point";
import { RecipeBookMenu } from "./RecipeBookMenu";
import { RecipeBookState } from "./RecipeBookState";
import { RecipeLibrary } from "./recipes/RecipeLibrary";
import type { ScreenRectangle } from "./ScreenRectangle";
import { Slot } from "./Slot";
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
const slotSize = 16;
const restingSlot = Slot.of(SlotSection.Inventory, 1);
// The narrowest screen that shows the recipe book beside the menu rather than over it.
const screenWidth = 379;
const bookWidth = 147;
const bookHeight = 166;
const bookOffset = 86;
const bookButtonWidth = 20;
const bookButtonHeight = 18;

enum QuickCraftType {
  Split = 0,
  Single = 1,
}

export class InventoryScreen {
  readonly keys: readonly string[] = [...hotbarKeys, offhandKey, dropKey];
  readonly menu: AbstractContainerMenu;
  readonly topPos = 0;

  private readonly held = new Set<Control>();
  private time = 0;
  private pointerPosition: Point;
  private lastClickSlot: MenuSlot | null = null;
  private lastClickTime = 0;
  private lastClickButton = -1;
  private doubleClick = false;
  private skipNextRelease = false;
  private isQuickCrafting = false;
  private quickCraftingButton = 0;
  private quickCraftingType = QuickCraftType.Split;
  private readonly quickCraftSlots: MenuSlot[] = [];
  private movedSincePress = false;
  private lastQuickMoved: ItemStack | null = null;
  private readonly presses: boolean[] = [];

  constructor(
    type: ContainerType,
    state: InventoryState,
    readonly book: RecipeBookState,
  ) {
    this.menu = InventoryScreen.createMenu(type, state);

    if (book === RecipeBookState.Open && !(this.menu instanceof RecipeBookMenu)) {
      throw new Error(`The ${type} screen has no recipe book to open`);
    }

    this.pointerPosition = this.centre(this.menu.require(restingSlot));
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

  get pointer(): Point {
    return this.pointerPosition;
  }

  get leftPos(): number {
    if (this.book === RecipeBookState.Open) {
      return 177 + Math.floor((screenWidth - this.menu.imageWidth - 200) / 2);
    }

    return Math.floor((screenWidth - this.menu.imageWidth) / 2);
  }

  get bookPanel(): ScreenRectangle | null {
    if (this.book === RecipeBookState.Closed) {
      return null;
    }

    return {
      x: Math.floor((screenWidth - bookWidth) / 2) - bookOffset,
      y: this.topPos + Math.floor((this.menu.imageHeight - bookHeight) / 2),
      width: bookWidth,
      height: bookHeight,
    };
  }

  get bookButton(): ScreenRectangle | null {
    if (!(this.menu instanceof RecipeBookMenu)) {
      return null;
    }

    return {
      x: this.leftPos + this.menu.bookButton.x,
      y: this.topPos + this.menu.bookButton.y,
      width: bookButtonWidth,
      height: bookButtonHeight,
    };
  }

  get hoveredSlot(): MenuSlot | null {
    return this.menu.slots.find((slot) => this.isHovering(slot)) ?? null;
  }

  advance(milliseconds: number) {
    this.time += milliseconds;
  }

  hover(slot: Slot) {
    const target = this.menu.slot(slot);

    if (target === undefined) {
      throw new Error(`The "${slot.key}" slot is not part of this screen, so it cannot be hovered`);
    }

    const pressed = [MouseButton.Left, MouseButton.Right].some((button) => this.held.has(button));
    const previous = this.hoveredSlot;

    if (pressed && !this.movedSincePress && previous !== null) {
      this.dragOver(previous);
    }

    this.pointerPosition = this.centre(target);

    if (pressed) {
      this.movedSincePress = true;
      this.dragOver(target);
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

    const hovered = this.hoveredSlot;

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

  private static createMenu(type: ContainerType, state: InventoryState): AbstractContainerMenu {
    switch (type) {
      case ContainerType.Chest:
        return new ChestMenu(state);
      case ContainerType.Inventory:
        return new InventoryMenu(state, RecipeLibrary.fromEnvironment());
      case ContainerType.CraftingTable:
        return new CraftingMenu(state, RecipeLibrary.fromEnvironment());
    }
  }

  private get shiftDown(): boolean {
    return this.held.has(Modifier.Shift);
  }

  private centre(slot: MenuSlot): Point {
    return { x: this.leftPos + slot.x + slotSize / 2, y: this.topPos + slot.y + slotSize / 2 };
  }

  private isHovering(slot: MenuSlot): boolean {
    const x = this.pointerPosition.x - this.leftPos;
    const y = this.pointerPosition.y - this.topPos;

    return x >= slot.x - 1 && x < slot.x + slotSize + 1 && y >= slot.y - 1 && y < slot.y + slotSize + 1;
  }

  private mouseClicked(button: number) {
    const slot = this.hoveredSlot;
    this.doubleClick =
      slot !== null &&
      this.lastClickSlot === slot &&
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

  private dragOver(slot: MenuSlot) {
    const carried = this.menu.carried;

    if (
      this.isQuickCrafting &&
      carried !== null &&
      carried.count > this.quickCraftSlots.length &&
      !this.quickCraftSlots.includes(slot) &&
      AbstractContainerMenu.canItemQuickReplace(this.menu.item(slot), carried, true) &&
      slot.mayPlace(carried) &&
      this.menu.canDragTo(slot)
    ) {
      this.quickCraftSlots.push(slot);
    }
  }

  private mouseReleased(button: number) {
    const slot = this.hoveredSlot;

    if (this.doubleClick && slot !== null && button === 0 && this.menu.canTakeItemForPickAll(slot)) {
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
      const type = this.quickCraftingType;
      this.menu.click(null, AbstractContainerMenu.quickCraftButton(0, type), ClickType.QuickCraft);

      for (const dragged of this.quickCraftSlots) {
        this.menu.click(dragged, AbstractContainerMenu.quickCraftButton(1, type), ClickType.QuickCraft);
      }

      this.menu.click(null, AbstractContainerMenu.quickCraftButton(2, type), ClickType.QuickCraft);
    } else if (this.menu.carried !== null) {
      const quickMove = slot !== null && this.shiftDown;

      if (quickMove) {
        this.lastQuickMoved = this.menu.item(slot);
      }

      this.menu.click(slot, button, quickMove ? ClickType.QuickMove : ClickType.Pickup);
    }

    this.finishRelease();
  }

  private quickMoveMatching(slot: MenuSlot, button: number) {
    const moved = this.lastQuickMoved;

    if (moved === null) {
      return;
    }

    for (const candidate of this.menu.slots) {
      if (
        this.menu.item(candidate) !== null &&
        candidate.container === slot.container &&
        AbstractContainerMenu.canItemQuickReplace(this.menu.item(candidate), moved, true)
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
