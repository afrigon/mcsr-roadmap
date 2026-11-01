import type { IconReference } from "../roadmap/IconReference";

const unstackableNames = new Set([
  "bed",
  "bow",
  "cake",
  "carrot_on_a_stick",
  "crossbow",
  "elytra",
  "enchanted_book",
  "fishing_rod",
  "flint_and_steel",
  "lingering_potion",
  "minecart",
  "potion",
  "saddle",
  "shears",
  "shield",
  "splash_potion",
  "totem_of_undying",
  "trident",
  "warped_fungus_on_a_stick",
  "writable_book",
  "written_book",
]);

const unstackableSuffixes = [
  "_axe",
  "_bed",
  "_boat",
  "_boots",
  "_bucket",
  "_chestplate",
  "_helmet",
  "_hoe",
  "_horse_armor",
  "_leggings",
  "_minecart",
  "_pickaxe",
  "_shovel",
  "_soup",
  "_stew",
  "_sword",
];

const sixteenNames = new Set(["armor_stand", "bucket", "egg", "ender_pearl", "honey_bottle", "snowball"]);

const sixteenSuffixes = ["_banner", "_sign"];

export class StackSize {
  static of(icon: IconReference): number {
    const { name } = icon;

    if (unstackableNames.has(name) || name.startsWith("music_disc_") || unstackableSuffixes.some((suffix) => name.endsWith(suffix))) {
      return 1;
    }

    if (sixteenNames.has(name) || sixteenSuffixes.some((suffix) => name.endsWith(suffix))) {
      return 16;
    }

    return 64;
  }
}
