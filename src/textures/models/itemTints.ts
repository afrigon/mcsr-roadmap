import type { TextureLibrary } from "../TextureLibrary";

const defaultFoliage = [0x48, 0xb5, 0x18];
const spruceFoliage = [0x61, 0x99, 0x61];
const birchFoliage = [0x80, 0xa7, 0x55];
const grassColormap = "colormap/grass";
const inventoryGrassPixel = { x: 127, y: 127 };

export const itemTints: Readonly<Record<string, (textures: TextureLibrary) => readonly number[]>> = {
  grass_block: (textures) =>
    textures.texture(grassColormap).pixel(inventoryGrassPixel.x, inventoryGrassPixel.y).slice(0, 3),
  oak_leaves: () => defaultFoliage,
  jungle_leaves: () => defaultFoliage,
  acacia_leaves: () => defaultFoliage,
  dark_oak_leaves: () => defaultFoliage,
  spruce_leaves: () => spruceFoliage,
  birch_leaves: () => birchFoliage,
};
