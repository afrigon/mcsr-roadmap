import { BracketSize } from "./BracketSize";

const sizesByPreference = [BracketSize.Full, BracketSize.Compact, BracketSize.Tiny];

export class BracketLabelController {
  constructor(private readonly brackets: HTMLElement[]) {}

  start() {
    this.fitAll();
    document.fonts.ready.then(() => this.fitAll());
  }

  private fitAll() {
    for (const bracket of this.brackets) {
      this.fit(bracket);
    }
  }

  private fit(bracket: HTMLElement) {
    const label = bracket.querySelector<HTMLElement>("span")!;

    for (const size of sizesByPreference) {
      bracket.dataset.size = size;

      if (label.offsetWidth <= bracket.clientWidth) {
        return;
      }
    }
  }
}
