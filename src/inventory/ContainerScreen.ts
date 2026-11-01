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
import type { PointerTarget } from "./PointerTarget";
import { RecipeBookMenu } from "./RecipeBookMenu";
import { RecipeBookState } from "./RecipeBookState";
import { RecipeLibrary } from "./recipes/RecipeLibrary";
import { ScreenKeys } from "./ScreenKeys";
import type { ScreenLayout } from "./ScreenLayout";
import { ScreenWidget } from "./ScreenWidget";
import { Slot } from "./Slot";
import { SlotSection } from "./SlotSection";

const doubleClickWindow = 250;
const offhandSwapButton = 40;
const offhandKey = "F";
const dropKey = "Q";
const focusKey = "Tab";
const pressKey = "Space";
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

export class ContainerScreen {
  readonly menu: AbstractContainerMenu;
  readonly topPos = 0;

  private bookState: RecipeBookState;
  private focused: ScreenWidget | null;
  private bookButtonFocused = false;
  private bookButtonClicked = false;
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
    readonly type: ContainerType,
    state: InventoryState,
    book: RecipeBookState,
  ) {
    this.menu = ContainerScreen.createMenu(type, state);
    this.bookState = book;
    this.focused = this.menu instanceof RecipeBookMenu ? ScreenWidget.RecipeBook : null;

    if (book === RecipeBookState.Open && !(this.menu instanceof RecipeBookMenu)) {
      throw new Error(`The ${type} screen has no recipe book to open`);
    }

    this.pointerPosition = this.centre(this.menu.require(restingSlot));
  }

  get book(): RecipeBookState {
    return this.bookState;
  }

  get bookButtonHighlighted(): boolean {
    return this.bookButtonFocused;
  }

  get state(): InventoryState {
    return this.menu.state;
  }

  get displayedState(): InventoryState {
    const carried = this.menu.carried;
    const state = this.menu.state;

    if (!this.isQuickCrafting || carried === null || this.quickCraftSlots.length === 0) {
      return state;
    }

    if (this.quickCraftSlots.length === 1) {
      return state.with(this.quickCraftSlots[0]!.slot, null);
    }

    let displayed = state;
    let remaining = carried.count;

    for (const slot of this.quickCraftSlots) {
      const existing = this.menu.item(slot)?.count ?? 0;
      const count = this.quickCraftCount(carried, slot, existing);
      displayed = displayed.with(slot.slot, carried.withCount(count));
      remaining -= count - existing;
    }

    return displayed.withCursor(carried.withCount(remaining));
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

  get layout(): ScreenLayout {
    return this.layoutFor(this.bookState);
  }

  layoutFor(book: RecipeBookState): ScreenLayout {
    const leftPos =
      book === RecipeBookState.Open
        ? 177 + Math.floor((screenWidth - this.menu.imageWidth - 200) / 2)
        : Math.floor((screenWidth - this.menu.imageWidth) / 2);
    const bookPanel =
      book === RecipeBookState.Open
        ? {
            x: Math.floor((screenWidth - bookWidth) / 2) - bookOffset,
            y: this.topPos + Math.floor((this.menu.imageHeight - bookHeight) / 2),
            width: bookWidth,
            height: bookHeight,
          }
        : null;
    const bookButton =
      this.menu instanceof RecipeBookMenu
        ? {
            x: leftPos + this.menu.bookButton.x,
            y: this.topPos + this.menu.bookButton.y,
            width: bookButtonWidth,
            height: bookButtonHeight,
          }
        : null;

    return { leftPos, topPos: this.topPos, bookPanel, bookButton };
  }

  get hoveredSlot(): MenuSlot | null {
    return this.menu.slots.find((slot) => this.isHovering(slot)) ?? null;
  }

  advance(milliseconds: number) {
    this.time += milliseconds;
  }

  hover(target: PointerTarget) {
    const pressed = [MouseButton.Left, MouseButton.Right].some((button) => this.held.has(button));
    const previous = this.hoveredSlot;

    if (pressed && !this.movedSincePress && previous !== null) {
      this.dragOver(previous);
    }

    this.pointerPosition = this.targetCentre(target);
    const hovered = this.hoveredSlot;

    if (pressed) {
      this.movedSincePress = true;

      if (hovered !== null) {
        this.dragOver(hovered);
      }
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
    if (!ScreenKeys.all.includes(key)) {
      throw new Error(`Unknown key "${key}": expected ${ScreenKeys.all.join(", ")}`);
    }

    if (key === focusKey) {
      const forward = !this.shiftDown;

      if (!this.changeFocus(forward)) {
        this.changeFocus(forward);
      }

      return;
    }

    if (key === pressKey && this.focused === ScreenWidget.BookButton) {
      this.toggleBook();

      return;
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

  private get children(): ScreenWidget[] {
    return this.menu instanceof RecipeBookMenu ? [ScreenWidget.RecipeBook, ScreenWidget.BookButton] : [];
  }

  private changeFocus(forward: boolean): boolean {
    const focused = this.focused;

    if (focused !== null && this.changeWidgetFocus(focused)) {
      return true;
    }

    const index = focused === null ? -1 : this.children.indexOf(focused);
    const candidates = forward
      ? this.children.slice(index + 1)
      : this.children.slice(0, index < 0 ? this.children.length : index).reverse();

    for (const child of candidates) {
      if (this.changeWidgetFocus(child)) {
        this.focused = child;

        return true;
      }
    }

    this.focused = null;

    return false;
  }

  private changeWidgetFocus(widget: ScreenWidget): boolean {
    if (widget === ScreenWidget.RecipeBook) {
      return false;
    }

    this.bookButtonFocused = !this.bookButtonFocused;

    return this.bookButtonFocused;
  }

  private toggleBook() {
    this.bookState = this.bookState === RecipeBookState.Open ? RecipeBookState.Closed : RecipeBookState.Open;
  }

  private targetCentre(target: PointerTarget): Point {
    if (target === ScreenWidget.BookButton) {
      const button = this.layout.bookButton;

      if (button === null) {
        throw new Error(`The ${this.type} screen has no recipe book button to hover`);
      }

      return { x: button.x + button.width / 2, y: button.y + button.height / 2 };
    }

    const slot = this.menu.slot(target);

    if (slot === undefined) {
      throw new Error(`The "${target.key}" slot is not part of this screen, so it cannot be hovered`);
    }

    return this.centre(slot);
  }

  private centre(slot: MenuSlot): Point {
    const { leftPos, topPos } = this.layout;

    return { x: leftPos + slot.x + slotSize / 2, y: topPos + slot.y + slotSize / 2 };
  }

  private isHovering(slot: MenuSlot): boolean {
    const x = this.pointerPosition.x - this.layout.leftPos;
    const y = this.pointerPosition.y - this.layout.topPos;

    return x >= slot.x - 1 && x < slot.x + slotSize + 1 && y >= slot.y - 1 && y < slot.y + slotSize + 1;
  }

  private bookButtonUnderPointer(): boolean {
    const button = this.layout.bookButton;
    const { x, y } = this.pointerPosition;

    return button !== null && x >= button.x && y >= button.y && x < button.x + button.width && y < button.y + button.height;
  }

  private quickCraftCount(carried: ItemStack, slot: MenuSlot, existing: number): number {
    const share =
      this.quickCraftingType === QuickCraftType.Split ? Math.floor(carried.count / this.quickCraftSlots.length) : 1;

    return Math.min(share + existing, carried.maxCount, slot.maxStackSizeFor(carried));
  }

  private mouseClicked(button: number) {
    if (button === 0 && this.bookButtonUnderPointer()) {
      this.presses.push(false);
      this.toggleBook();
      this.focused = ScreenWidget.BookButton;
      this.bookButtonClicked = this.type === ContainerType.Inventory;

      return;
    }

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
    if (this.bookButtonClicked) {
      this.bookButtonClicked = false;

      return;
    }

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
