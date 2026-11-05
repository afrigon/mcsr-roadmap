import type { InputKey } from "./InputKey";

const mouseButtonText = "key.mouse";
const mouseButtonPlaceholder = "%1$s";

interface LayoutSource {
  keyboard?: { getLayoutMap(): Promise<ReadonlyMap<string, string>> };
}

export class KeyLabels {
  private constructor(
    private readonly texts: Readonly<Record<string, string>>,
    private readonly layout: ReadonlyMap<string, string> | null,
  ) {}

  static async fromDocument(document: Document, navigator: Navigator): Promise<KeyLabels> {
    const texts = JSON.parse(document.getElementById("key-labels")?.textContent ?? "{}") as Record<string, string>;

    try {
      return new KeyLabels(texts, (await (navigator as LayoutSource).keyboard?.getLayoutMap()) ?? null);
    } catch {
      return new KeyLabels(texts, null);
    }
  }

  label(key: InputKey): string {
    const code = key.code;
    const printed = code === null ? undefined : this.layout?.get(code);

    if (printed !== undefined) {
      return printed.toUpperCase();
    }

    const text = this.texts[key.name];

    if (text !== undefined) {
      return text;
    }

    if (key.isMouse) {
      return (this.texts[mouseButtonText] ?? `Button ${mouseButtonPlaceholder}`).replace(mouseButtonPlaceholder, key.suffix);
    }

    return key.suffix.toUpperCase();
  }
}
