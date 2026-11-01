import type { Control } from "./Control";
import type { InventoryState } from "./InventoryState";
import type { MenuSlot } from "./MenuSlot";
import type { Point } from "./Point";
import type { PointerTarget } from "./PointerTarget";
import type { RecipeBookState } from "./RecipeBookState";
import type { ScreenLayout } from "./ScreenLayout";
import type { Slot } from "./Slot";

export interface DemoScreen {
  readonly slots: readonly MenuSlot[];
  readonly windowWidth: number;
  readonly windowHeight: number;
  readonly displayedState: InventoryState;
  readonly heldControls: Control[];
  readonly doubleClickPresses: readonly boolean[];
  readonly pointer: Point | null;
  readonly hoveredSlot: MenuSlot | null;
  readonly selectedSlot: MenuSlot | null;
  readonly book: RecipeBookState;
  readonly bookButtonHighlighted: boolean;
  layoutFor(book: RecipeBookState): ScreenLayout;
  checkStartingSlot(slot: Slot): void;
  advance(milliseconds: number): void;
  hover(target: PointerTarget): void;
  hold(control: Control): void;
  release(control: Control): void;
  press(key: string): void;
}
