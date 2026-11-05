import { InputKey } from "../keybinds/InputKey";
import { KeyAction } from "../keybinds/KeyAction";
import { KeybindStore } from "../keybinds/KeybindStore";
import { KeyLabels } from "../keybinds/KeyLabels";
import { OptionsFile } from "../keybinds/OptionsFile";
import { ProfileStore } from "../profile/ProfileStore";

const unbindCode = "Escape";
const swallowedEvents = ["click", "auxclick", "contextmenu"];

interface KeybindRow {
  action: KeyAction;
  key: HTMLButtonElement;
  reset: HTMLButtonElement;
}

export class KeybindEditorController {
  private readonly store = new KeybindStore(ProfileStore.fromWindow());
  private readonly rows: KeybindRow[];
  private readonly message: HTMLElement;
  private labels: KeyLabels | null = null;
  private listening: KeybindRow | null = null;

  constructor(private readonly editor: HTMLElement) {
    this.rows = [...editor.querySelectorAll<HTMLElement>("[data-keybind-action]")].map((row) => ({
      action: KeyAction.find(row.dataset.keybindAction!)!,
      key: row.querySelector<HTMLButtonElement>("[data-keybind-key]")!,
      reset: row.querySelector<HTMLButtonElement>("[data-keybind-reset]")!,
    }));
    this.message = editor.querySelector<HTMLElement>("[data-keybind-message]")!;
  }

  async start() {
    this.labels = await KeyLabels.fromDocument(document, navigator);

    for (const row of this.rows) {
      row.key.addEventListener("click", () => this.listen(row));
      row.reset.addEventListener("click", () => this.store.set(row.action, new InputKey(row.action.defaultKey)));
    }

    const confirmation = this.editor.querySelector<HTMLDialogElement>("[data-keybind-confirm]")!;
    this.editor.querySelector("[data-keybind-reset-all]")!.addEventListener("click", () => confirmation.showModal());
    confirmation.addEventListener("close", () => {
      if (confirmation.returnValue === "reset") {
        this.store.resetAll();
      }

      confirmation.returnValue = "";
    });
    this.editor
      .querySelector<HTMLInputElement>("[data-keybind-import]")!
      .addEventListener("change", (event) => void this.import(event.target as HTMLInputElement));
    document.addEventListener("keydown", (event) => this.pressKey(event), { capture: true });
    document.addEventListener("mousedown", (event) => this.pressMouse(event), { capture: true });
    this.store.subscribe(() => this.render());
    this.render();
  }

  private listen(row: KeybindRow) {
    this.listening = row;
    this.render();
  }

  private pressKey(event: KeyboardEvent) {
    if (this.listening === null) {
      return;
    }

    const key = event.code === unbindCode ? InputKey.unbound : InputKey.fromKeyboard(event.code);

    event.preventDefault();
    event.stopPropagation();

    if (key !== null) {
      this.bind(key);
    }
  }

  private pressMouse(event: MouseEvent) {
    const key = InputKey.fromMouse(event.button);

    if (this.listening === null || key === null) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    this.swallowRestOfClick();
    this.bind(key);
  }

  // The press that sets a binding must not also click, open the context menu or, for the back and forward
  // buttons, navigate the page, which browsers do on release.
  private swallowRestOfClick() {
    const swallow = (event: Event) => {
      event.preventDefault();
      event.stopPropagation();
    };

    for (const type of swallowedEvents) {
      document.addEventListener(type, swallow, { capture: true });
    }

    document.addEventListener(
      "mouseup",
      (event) => {
        swallow(event);
        window.setTimeout(() => {
          for (const type of swallowedEvents) {
            document.removeEventListener(type, swallow, { capture: true });
          }
        });
      },
      { capture: true, once: true },
    );
  }

  private bind(key: InputKey) {
    const row = this.listening!;
    this.listening = null;
    this.store.set(row.action, key);
    this.render();
  }

  private async import(input: HTMLInputElement) {
    const file = input.files?.[0];
    input.value = "";

    if (file === undefined) {
      return;
    }

    const bindings = OptionsFile.bindings(await file.text());

    if (bindings.size === 0) {
      this.message.textContent = `No keybinds found in ${file.name}`;

      return;
    }

    this.store.replace(bindings);
    this.message.textContent = `Imported ${bindings.size} keybinds from ${file.name}`;
  }

  private render() {
    if (this.labels === null) {
      return;
    }

    const keys = new Map(this.rows.map((row) => [row, this.store.get(row.action)]));
    const uses = new Map<string, number>();

    for (const key of keys.values()) {
      if (!key.isUnbound) {
        uses.set(key.name, (uses.get(key.name) ?? 0) + 1);
      }
    }

    for (const [row, key] of keys) {
      const label = this.labels.label(key);
      row.key.textContent = row === this.listening ? `> ${label} <` : label;
      row.key.toggleAttribute("data-listening", row === this.listening);
      row.key.toggleAttribute("data-conflict", (uses.get(key.name) ?? 0) > 1);
      row.reset.hidden = key.name === row.action.defaultKey;
    }
  }
}
