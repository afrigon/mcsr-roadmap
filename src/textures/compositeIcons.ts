import { CompositeIcon } from "./CompositeIcon";
import { Texture } from "./Texture";

const bedFaceSize = 16;
const bedHeadTop = { x: 6, y: 6 };
const bedFootTop = { x: 6, y: 28 };
const iconSize = 32;

export const compositeIcons = [
  new CompositeIcon("bed", ["entity/bed/red"], ([bed]) => {
    const top = Texture.blank(bedFaceSize, bedFaceSize * 2);
    top.paste(bed!.crop(bedHeadTop.x, bedHeadTop.y, bedFaceSize, bedFaceSize), 0, 0);
    top.paste(bed!.crop(bedFootTop.x, bedFootTop.y, bedFaceSize, bedFaceSize), 0, bedFaceSize);
    const icon = Texture.blank(iconSize, iconSize);
    icon.paste(top.rotatedCounterClockwise(), 0, (iconSize - bedFaceSize) / 2);

    return icon;
  }),
];
