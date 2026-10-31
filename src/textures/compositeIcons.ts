import { CompositeIcon } from "./CompositeIcon";
import { Texture } from "./Texture";

interface Point {
  x: number;
  y: number;
}

interface Region extends Point {
  width: number;
  height: number;
}

const bedFaceSize = 16;
const bedHeadTop = { x: 6, y: 6 };
const bedFootTop = { x: 6, y: 28 };
const iconSize = 32;
const hudSpriteSize = 9;
const hudScale = 3;
const hungerOutline = { x: 16, y: 27 };
const hungerFill = { x: 52, y: 27 };
const heartOutline = { x: 16, y: 0 };
const heartFull = { x: 52, y: 0 };
const heartHalf = { x: 61, y: 0 };
const shieldFace = { x: 1, y: 1 };
const shieldWidth = 12;
const shieldHeight = 22;
const fireResistanceColor = [0xe4, 0x9a, 0x3a];
const waterColor = [0x3f, 0x76, 0xe4];
const chestScale = 2;
const chestLid = { x: 14, y: 14, width: 14, height: 5 };
const chestBase = { x: 14, y: 33, width: 14, height: 10 };
const chestLatch = { x: 1, y: 1, width: 2, height: 4 };
const chestFront = { width: 14, height: 14, baseTop: 4, latchLeft: 6, latchTop: 2 };
const silverfishEggPrimary = [0x6e, 0x6e, 0x6e];
const silverfishEggSecondary = [0x30, 0x30, 0x30];
const missingSize = 16;
const missingCellSize = 8;
const missingMagenta = [0xf8, 0x00, 0xf8, 0xff];
const missingBlack = [0x00, 0x00, 0x00, 0xff];

export const missingIconName = "missing";

function centered(sprite: Texture, scale: number): Texture {
  const scaled = sprite.scaled(scale);
  const icon = Texture.blank(iconSize, iconSize);
  icon.overlay(scaled, Math.floor((iconSize - scaled.width) / 2), Math.floor((iconSize - scaled.height) / 2));

  return icon;
}

function part(texture: Texture, region: Region): Texture {
  return texture.crop(region.x, region.y, region.width, region.height);
}

function hudIcon(sheet: Texture, outline: Point, fill: Point | null): Texture {
  const sprite = sheet.crop(outline.x, outline.y, hudSpriteSize, hudSpriteSize);

  if (fill !== null) {
    sprite.overlay(sheet.crop(fill.x, fill.y, hudSpriteSize, hudSpriteSize), 0, 0);
  }

  return centered(sprite, hudScale);
}

export const compositeIcons = [
  new CompositeIcon(missingIconName, [], () =>
    Texture.checkerboard(missingSize, missingCellSize, missingMagenta, missingBlack),
  ),
  new CompositeIcon("bed", ["entity/bed/red"], ([bed]) => {
    const top = Texture.blank(bedFaceSize, bedFaceSize * 2);
    top.paste(bed!.crop(bedHeadTop.x, bedHeadTop.y, bedFaceSize, bedFaceSize), 0, 0);
    top.paste(bed!.crop(bedFootTop.x, bedFootTop.y, bedFaceSize, bedFaceSize), 0, bedFaceSize);
    const icon = Texture.blank(iconSize, iconSize);
    icon.paste(top.rotatedCounterClockwise(), 0, (iconSize - bedFaceSize) / 2);

    return icon;
  }),
  new CompositeIcon("shield", ["entity/shield_base_nopattern"], ([shield]) => {
    const icon = Texture.blank(iconSize, iconSize);
    icon.paste(
      shield!.crop(shieldFace.x, shieldFace.y, shieldWidth, shieldHeight),
      (iconSize - shieldWidth) / 2,
      (iconSize - shieldHeight) / 2,
    );

    return icon;
  }),
  new CompositeIcon("splash_potion_fire_resistance", ["item/potion_overlay", "item/splash_potion"], ([liquid, bottle]) => {
    const icon = liquid!.tinted(fireResistanceColor);
    icon.overlay(bottle!, 0, 0);

    return icon;
  }),
  new CompositeIcon("water_breathing", ["mob_effect/water_breathing"], ([effect]) => effect!),
  new CompositeIcon("water", ["block/water_still"], ([water]) => water!.firstFrame().tinted(waterColor)),
  new CompositeIcon("chest", ["entity/chest/normal"], ([chest]) => {
    const front = Texture.blank(chestFront.width, chestFront.height);
    front.overlay(part(chest!, chestBase), 0, chestFront.baseTop);
    front.overlay(part(chest!, chestLid), 0, 0);
    front.overlay(part(chest!, chestLatch), chestFront.latchLeft, chestFront.latchTop);

    return centered(front, chestScale);
  }),
  new CompositeIcon("silverfish", ["item/spawn_egg", "item/spawn_egg_overlay"], ([egg, spots]) => {
    const icon = egg!.tinted(silverfishEggPrimary);
    icon.overlay(spots!.tinted(silverfishEggSecondary), 0, 0);

    return icon;
  }),
  new CompositeIcon("hunger_effect", ["mob_effect/hunger"], ([effect]) => effect!),
  new CompositeIcon("hunger", ["gui/icons"], ([icons]) => hudIcon(icons!, hungerOutline, hungerFill)),
  new CompositeIcon("heart_empty", ["gui/icons"], ([icons]) => hudIcon(icons!, heartOutline, null)),
  new CompositeIcon("heart_half", ["gui/icons"], ([icons]) => hudIcon(icons!, heartOutline, heartHalf)),
  new CompositeIcon("heart_full", ["gui/icons"], ([icons]) => hudIcon(icons!, heartOutline, heartFull)),
];
