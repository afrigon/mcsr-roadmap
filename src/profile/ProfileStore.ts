import type { Profile } from "./Profile";

const storageKey = "mcsr-roadmap:profile";
const changeEvent = "mcsr-roadmap:profile-change";

export class ProfileStore {
  private cached: Profile | null = null;

  constructor(
    private readonly storage: Storage | null,
    private readonly events: EventTarget,
  ) {
    this.subscribe(() => (this.cached = null));
  }

  static fromWindow(): ProfileStore {
    try {
      return new ProfileStore(window.localStorage, window);
    } catch {
      return new ProfileStore(null, window);
    }
  }

  read(): Profile {
    this.cached ??= this.load();

    return this.cached;
  }

  update(change: (profile: Profile) => void) {
    const profile = this.load();
    change(profile);

    try {
      this.storage?.setItem(storageKey, JSON.stringify(profile));
    } catch {
      return;
    }

    this.events.dispatchEvent(new Event(changeEvent));
  }

  subscribe(listener: () => void) {
    this.events.addEventListener(changeEvent, listener);
    this.events.addEventListener("storage", (event) => {
      if ((event as StorageEvent).key === storageKey) {
        listener();
      }
    });
  }

  private load(): Profile {
    const empty: Profile = { version: 1, statuses: {}, keybinds: {} };

    try {
      const stored: unknown = JSON.parse(this.storage?.getItem(storageKey) ?? "null");

      if (typeof stored !== "object" || stored === null || (stored as Profile).version !== 1) {
        return empty;
      }

      const { statuses, keybinds } = stored as Profile;

      return { version: 1, statuses: ProfileStore.strings(statuses), keybinds: ProfileStore.strings(keybinds) };
    } catch {
      return empty;
    }
  }

  private static strings(value: unknown): Record<string, string> {
    if (typeof value !== "object" || value === null) {
      return {};
    }

    return Object.fromEntries(Object.entries(value).filter((entry): entry is [string, string] => typeof entry[1] === "string"));
  }
}
