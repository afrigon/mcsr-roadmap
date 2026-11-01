import type { CountFontMetrics } from "./CountFontMetrics";
import { Texture } from "./Texture";
import { TextureLibrary } from "./TextureLibrary";

const fontSheet = "font/ascii";
const glyphCell = 8;
const sheetColumns = 16;
const characters = "0123456789";
const characterSpacing = 1;
const shadowOffset = 1;
const textColor = [0xff, 0xff, 0xff];
const shadowColor = [0x3f, 0x3f, 0x3f];

export class ItemCountFont {
  readonly metrics: CountFontMetrics;
  private readonly glyphs: Texture[];

  constructor(library: TextureLibrary) {
    const sheet = library.texture(fontSheet);
    this.glyphs = [...characters].map((character) => {
      const code = character.charCodeAt(0);

      return sheet.crop((code % sheetColumns) * glyphCell, Math.floor(code / sheetColumns) * glyphCell, glyphCell, glyphCell);
    });
    this.metrics = {
      characters,
      cellWidth: glyphCell + shadowOffset,
      cellHeight: glyphCell + shadowOffset,
      advances: this.glyphs.map((glyph) => glyph.opaqueWidth() + characterSpacing),
    };
  }

  static fromEnvironment(): ItemCountFont {
    return new ItemCountFont(TextureLibrary.fromEnvironment());
  }

  sprite(): Texture {
    const { cellWidth, cellHeight } = this.metrics;
    const sprite = Texture.blank(cellWidth * this.glyphs.length, cellHeight);

    for (const [index, glyph] of this.glyphs.entries()) {
      sprite.overlay(glyph.tinted(shadowColor), index * cellWidth + shadowOffset, shadowOffset);
      sprite.overlay(glyph.tinted(textColor), index * cellWidth, 0);
    }

    return sprite;
  }
}
