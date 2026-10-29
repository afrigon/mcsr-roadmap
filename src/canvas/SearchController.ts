export class SearchController {
  private matches: HTMLElement[] = [];
  private current = -1;

  constructor(
    private readonly box: HTMLElement,
    private readonly input: HTMLInputElement,
    private readonly count: HTMLElement,
    private readonly frames: HTMLElement[],
  ) {}

  start() {
    document.addEventListener("keydown", (event) => this.handleShortcut(event));
    this.box.querySelector("[data-search-open]")!.addEventListener("click", () => this.open());
    this.input.addEventListener("input", () => this.search());
    this.input.addEventListener("keydown", (event) => this.handleKey(event));
  }

  private handleShortcut(event: KeyboardEvent) {
    const isFind = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "f";

    if (!isFind || document.activeElement === this.input) {
      return;
    }

    event.preventDefault();
    this.open();
  }

  private handleKey(event: KeyboardEvent) {
    switch (event.key) {
      case "Enter":
        event.preventDefault();
        this.step(event.shiftKey ? -1 : 1);
        break;
      case "Escape":
        this.close();
        break;
    }
  }

  private open() {
    this.box.toggleAttribute("data-open", true);
    this.input.focus();
    this.input.select();
  }

  private close() {
    this.box.toggleAttribute("data-open", false);
    this.input.value = "";
    this.search();
    this.input.blur();
  }

  private search() {
    const query = this.input.value.trim().toLowerCase();
    this.matches = query === "" ? [] : this.frames.filter((frame) => frame.dataset.searchText!.includes(query));
    this.current = -1;

    for (const frame of this.frames) {
      frame.toggleAttribute("data-search-miss", query !== "" && !this.matches.includes(frame));
      frame.toggleAttribute("data-search-current", false);
    }

    this.count.textContent = query === "" ? "" : `${this.matches.length} found`;

    if (this.matches.length > 0) {
      this.step(1);
    }
  }

  private step(direction: number) {
    if (this.matches.length === 0) {
      return;
    }

    this.matches[this.current]?.toggleAttribute("data-search-current", false);
    this.current = (this.current + direction + this.matches.length) % this.matches.length;
    const match = this.matches[this.current]!;
    match.toggleAttribute("data-search-current", true);
    match.scrollIntoView({ block: "center", inline: "center", behavior: "smooth" });
    this.count.textContent = `${this.current + 1} / ${this.matches.length}`;
  }
}
