import type { ScreenRectangle } from "./ScreenRectangle";

export interface ScreenLayout {
  readonly leftPos: number;
  readonly topPos: number;
  readonly bookPanel: ScreenRectangle | null;
  readonly bookButton: ScreenRectangle | null;
}
