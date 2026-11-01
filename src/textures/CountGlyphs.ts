import type { CountFontMetrics } from "./CountFontMetrics";

export interface CountGlyph {
  readonly offset: number;
  readonly advance: number;
}

export class CountGlyphs {
  constructor(private readonly metrics: CountFontMetrics) {}

  layout(count: number): CountGlyph[] {
    return [...String(count)].map((character) => {
      const index = this.metrics.characters.indexOf(character);

      return { offset: index * this.metrics.cellWidth, advance: this.metrics.advances[index]! };
    });
  }
}
