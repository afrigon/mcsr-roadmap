export class TabsController {
  private readonly panels: HTMLElement[];
  private readonly buttons: HTMLButtonElement[] = [];

  constructor(private readonly tabs: HTMLElement) {
    this.panels = [...tabs.querySelectorAll<HTMLElement>(":scope > [data-tab-label]")];
  }

  start() {
    const list = this.tabs.querySelector<HTMLElement>("[data-tabs-list]")!;

    for (const [index, panel] of this.panels.entries()) {
      const button = document.createElement("button");
      button.type = "button";
      button.role = "tab";
      button.textContent = panel.dataset.tabLabel!;
      button.addEventListener("click", () => this.select(index));
      list.append(button);
      this.buttons.push(button);
    }

    this.select(0);
  }

  private select(selected: number) {
    for (const [index, panel] of this.panels.entries()) {
      panel.hidden = index !== selected;
      this.buttons[index]!.setAttribute("aria-selected", String(index === selected));
    }
  }
}
