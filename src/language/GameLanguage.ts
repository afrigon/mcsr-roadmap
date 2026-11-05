import { ClientJar } from "../textures/ClientJar";

const languageFile = "lang/en_us.json";

export class GameLanguage {
  private constructor(private readonly texts: Readonly<Record<string, string>>) {}

  static fromEnvironment(): GameLanguage {
    return new GameLanguage(JSON.parse(new TextDecoder().decode(ClientJar.fromEnvironment().read(languageFile))));
  }

  text(key: string): string {
    const text = this.texts[key];

    if (text === undefined) {
      throw new Error(`The game has no English text for "${key}"`);
    }

    return text;
  }

  textsStartingWith(prefixes: readonly string[]): Record<string, string> {
    return Object.fromEntries(Object.entries(this.texts).filter(([key]) => prefixes.some((prefix) => key.startsWith(prefix))));
  }
}
