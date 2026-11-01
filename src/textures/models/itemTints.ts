import type { TextureLibrary } from "../TextureLibrary";

export type TintColors = Readonly<Record<number, readonly number[]>>;

const defaultFoliage = [0x48, 0xb5, 0x18];
const spruceFoliage = [0x61, 0x99, 0x61];
const birchFoliage = [0x80, 0xa7, 0x55];
const undyedLeather = [0xa0, 0x65, 0x40];
const grassColormap = "colormap/grass";
const inventoryGrassPixel = { x: 127, y: 127 };

export const itemTints: Readonly<Record<string, (textures: TextureLibrary) => TintColors>> = {
  grass_block: (textures) => ({
    0: textures.texture(grassColormap).pixel(inventoryGrassPixel.x, inventoryGrassPixel.y).slice(0, 3),
  }),
  oak_leaves: () => ({ 0: defaultFoliage }),
  jungle_leaves: () => ({ 0: defaultFoliage }),
  acacia_leaves: () => ({ 0: defaultFoliage }),
  dark_oak_leaves: () => ({ 0: defaultFoliage }),
  spruce_leaves: () => ({ 0: spruceFoliage }),
  birch_leaves: () => ({ 0: birchFoliage }),
  leather_helmet: () => ({ 0: undyedLeather }),
  leather_chestplate: () => ({ 0: undyedLeather }),
  leather_leggings: () => ({ 0: undyedLeather }),
  leather_boots: () => ({ 0: undyedLeather }),
  leather_horse_armor: () => ({ 0: undyedLeather }),
};
