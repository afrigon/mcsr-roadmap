import type { IconReference } from "../roadmap/IconReference";
import { EquipmentSlot } from "./EquipmentSlot";

const armorMaterials = ["leather", "chainmail", "iron", "golden", "diamond", "netherite"];
const armorPieces: Record<string, EquipmentSlot> = {
  helmet: EquipmentSlot.Head,
  chestplate: EquipmentSlot.Chest,
  leggings: EquipmentSlot.Legs,
  boots: EquipmentSlot.Feet,
};
const headItems = [
  "carved_pumpkin",
  "turtle_helmet",
  "skeleton_skull",
  "wither_skeleton_skull",
  "zombie_head",
  "player_head",
  "creeper_head",
  "dragon_head",
];

export class Equipment {
  static slotFor(icon: IconReference): EquipmentSlot {
    const { name } = icon;

    if (headItems.includes(name)) {
      return EquipmentSlot.Head;
    }

    const [material, piece, ...rest] = name.split("_");

    if (rest.length === 0 && material !== undefined && armorMaterials.includes(material) && piece !== undefined) {
      const slot = armorPieces[piece];

      if (slot !== undefined) {
        return slot;
      }
    }

    if (name === "elytra") {
      return EquipmentSlot.Chest;
    }

    return name === "shield" ? EquipmentSlot.Offhand : EquipmentSlot.Mainhand;
  }
}
