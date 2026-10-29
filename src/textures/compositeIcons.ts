import { CompositeIcon } from "./CompositeIcon";
import { Texture } from "./Texture";

const bedFaceSize = 16;
const bedHeadTop = { x: 6, y: 6 };
const bedFootTop = { x: 6, y: 28 };
const iconSize = 32;
const hungerSize = 9;
const hungerOutline = { x: 16, y: 27 };
const hungerFill = { x: 52, y: 27 };
const hungerScale = 3;

export const compositeIcons = [
  new CompositeIcon("bed", ["entity/bed/red"], ([bed]) => {
    const top = Texture.blank(bedFaceSize, bedFaceSize * 2);
    top.paste(bed!.crop(bedHeadTop.x, bedHeadTop.y, bedFaceSize, bedFaceSize), 0, 0);
    top.paste(bed!.crop(bedFootTop.x, bedFootTop.y, bedFaceSize, bedFaceSize), 0, bedFaceSize);
    const icon = Texture.blank(iconSize, iconSize);
    icon.paste(top.rotatedCounterClockwise(), 0, (iconSize - bedFaceSize) / 2);

    return icon;
  }),
  new CompositeIcon("hunger", ["gui/icons"], ([icons]) => {
    const hunger = icons!.crop(hungerOutline.x, hungerOutline.y, hungerSize, hungerSize);
    hunger.overlay(icons!.crop(hungerFill.x, hungerFill.y, hungerSize, hungerSize), 0, 0);
    const icon = Texture.blank(iconSize, iconSize);
    const offset = (iconSize - hungerSize * hungerScale) / 2;
    icon.overlay(hunger.scaled(hungerScale), Math.floor(offset), Math.floor(offset));

    return icon;
  }),
];
