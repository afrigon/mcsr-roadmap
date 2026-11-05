import { keyboardCodes } from "./keyboardCodes";

const keyboardPrefix = "key.keyboard.";
const mousePrefix = "key.mouse.";
// Browser mouse buttons are numbered left, middle, right, back, forward; the game names them left, middle, right, 4, 5.
const mouseButtons = ["left", "middle", "right", "4", "5"];

export class InputKey {
  static readonly unbound = new InputKey(`${keyboardPrefix}unknown`);

  constructor(readonly name: string) {}

  static parse(name: string): InputKey | null {
    return name.startsWith(keyboardPrefix) || name.startsWith(mousePrefix) ? new InputKey(name) : null;
  }

  static fromKeyboard(code: string): InputKey | null {
    const name = keyboardCodes[code];

    return name === undefined ? null : new InputKey(`${keyboardPrefix}${name}`);
  }

  static fromMouse(button: number): InputKey | null {
    const name = mouseButtons[button];

    return name === undefined ? null : new InputKey(`${mousePrefix}${name}`);
  }

  get isMouse(): boolean {
    return this.name.startsWith(mousePrefix);
  }

  get isUnbound(): boolean {
    return this.name === InputKey.unbound.name;
  }

  get suffix(): string {
    return this.name.slice(this.isMouse ? mousePrefix.length : keyboardPrefix.length);
  }

  get code(): string | null {
    return Object.entries(keyboardCodes).find(([, name]) => `${keyboardPrefix}${name}` === this.name)?.[0] ?? null;
  }
}
