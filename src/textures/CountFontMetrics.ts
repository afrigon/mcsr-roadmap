export interface CountFontMetrics {
  readonly characters: string;
  readonly cellWidth: number;
  readonly cellHeight: number;
  readonly advances: readonly number[];
}
