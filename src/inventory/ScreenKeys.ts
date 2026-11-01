const slotKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "F", "Q"];
const keys = [...slotKeys, "Tab", "Space"];

export class ScreenKeys {
  static readonly all: readonly string[] = keys;

  static actsOnSlot(key: string): boolean {
    return slotKeys.includes(key);
  }

  static parse(name: string): string {
    const key = keys.find((candidate) => candidate.toLowerCase() === name.toLowerCase());

    if (key === undefined) {
      throw new Error(`Unknown key "${name}": expected ${keys.join(", ")}`);
    }

    return key;
  }
}
