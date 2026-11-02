import type { InventoryState } from "./InventoryState";
import type { MenuSlot } from "./MenuSlot";

export interface DragStage {
  readonly slot: MenuSlot;
  readonly state: InventoryState;
  readonly dragged: readonly MenuSlot[];
}
