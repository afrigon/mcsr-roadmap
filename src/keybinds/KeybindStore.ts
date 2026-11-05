import type { ProfileStore } from "../profile/ProfileStore";
import { InputKey } from "./InputKey";
import type { KeyAction } from "./KeyAction";

export class KeybindStore {
  constructor(private readonly profile: ProfileStore) {}

  get(action: KeyAction): InputKey {
    return InputKey.parse(this.profile.read().keybinds[action.id] ?? "") ?? new InputKey(action.defaultKey);
  }

  set(action: KeyAction, key: InputKey) {
    this.replace(new Map([[action, key]]));
  }

  replace(bindings: ReadonlyMap<KeyAction, InputKey>) {
    this.profile.update((profile) => {
      for (const [action, key] of bindings) {
        if (key.name === action.defaultKey) {
          delete profile.keybinds[action.id];
        } else {
          profile.keybinds[action.id] = key.name;
        }
      }
    });
  }

  resetAll() {
    this.profile.update((profile) => {
      profile.keybinds = {};
    });
  }

  subscribe(listener: () => void) {
    this.profile.subscribe(listener);
  }
}
