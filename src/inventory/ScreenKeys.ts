const slotKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "F", "Q"];
const keys = [...slotKeys, "Tab", "Space"];
// Keys the game reads through a key binding, so a player can rebind them; the rest are fixed in inventory screens.
const boundActions: Readonly<Record<string, string>> = {
  ...Object.fromEntries(["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((slot) => [slot, `key.hotbar.${slot}`])),
  F: "key.swapOffhand",
  Q: "key.drop",
};

export class ScreenKeys {
  static readonly all: readonly string[] = keys;

  static action(key: string): string | null {
    return boundActions[key] ?? null;
  }

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
