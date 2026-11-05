import { InputKey } from "./InputKey";
import { KeyAction } from "./KeyAction";

const bindingPrefix = "key_";

export class OptionsFile {
  static bindings(text: string): Map<KeyAction, InputKey> {
    const bindings = new Map<KeyAction, InputKey>();

    for (const line of text.split(/\r?\n/)) {
      const separator = line.indexOf(":");

      if (!line.startsWith(bindingPrefix) || separator < 0) {
        continue;
      }

      const action = KeyAction.find(line.slice(bindingPrefix.length, separator));
      const key = InputKey.parse(line.slice(separator + 1).trim());

      if (action !== undefined && key !== null) {
        bindings.set(action, key);
      }
    }

    return bindings;
  }
}
