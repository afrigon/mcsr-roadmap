import { CompositeIcon } from "./CompositeIcon";
import { Texture } from "./Texture";

interface Point {
  x: number;
  y: number;
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
const missingSize = 16;
const missingCellSize = 8;
const missingMagenta = [0xf8, 0x00, 0xf8, 0xff];
const missingBlack = [0x00, 0x00, 0x00, 0xff];

export const missingIconName = "missing";

function hudIcon(sheet: Texture, outline: Point, fill: Point | null): Texture {
  const sprite = sheet.crop(outline.x, outline.y, hudSpriteSize, hudSpriteSize);

  if (fill !== null) {
    sprite.overlay(sheet.crop(fill.x, fill.y, hudSpriteSize, hudSpriteSize), 0, 0);
  }

  const icon = Texture.blank(iconSize, iconSize);
  const offset = Math.floor((iconSize - hudSpriteSize * hudScale) / 2);
  icon.overlay(sprite.scaled(hudScale), offset, offset);

  return icon;
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
  new CompositeIcon("hunger", ["gui/icons"], ([icons]) => hudIcon(icons!, hungerOutline, hungerFill)),
  new CompositeIcon("heart_empty", ["gui/icons"], ([icons]) => hudIcon(icons!, heartOutline, null)),
  new CompositeIcon("heart_half", ["gui/icons"], ([icons]) => hudIcon(icons!, heartOutline, heartHalf)),
  new CompositeIcon("heart_full", ["gui/icons"], ([icons]) => hudIcon(icons!, heartOutline, heartFull)),
];
