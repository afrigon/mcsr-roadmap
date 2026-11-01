import { ContainerScreen } from "./ContainerScreen";
import { ContainerType } from "./ContainerType";
import type { DemoScreen } from "./DemoScreen";
import { HudScreen } from "./HudScreen";
import type { InventoryState } from "./InventoryState";
import { RecipeBookState } from "./RecipeBookState";

const defaultSelection = 1;

export class DemoScreenFactory {
  static create(
    type: ContainerType,
    state: InventoryState,
    book: RecipeBookState,
    selected: number | undefined,
  ): DemoScreen {
    if (type !== ContainerType.Hotbar) {
      if (selected !== undefined) {
        throw new Error(`"selected" applies only to the hotbar; the ${type} screen has no selected slot`);
      }

      return new ContainerScreen(type, state, book);
    }

    if (book === RecipeBookState.Open) {
      throw new Error("The hotbar has no recipe book to open");
    }

    return new HudScreen(state, selected ?? defaultSelection);
  }
}
