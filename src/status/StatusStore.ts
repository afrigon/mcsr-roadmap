import { Status } from "./Status";

const storageKey = "mcsr-roadmap:status";

export class StatusStore {
  private readonly statuses: Map<string, Status>;

  constructor(private readonly storage: Storage | null) {
    this.statuses = this.load();
  }

  static fromWindow(): StatusStore {
    try {
      return new StatusStore(window.localStorage);
    } catch {
      return new StatusStore(null);
    }
  }

  get(id: string): Status {
    return this.statuses.get(id) ?? Status.NotLearned;
  }

  set(id: string, status: Status) {
    if (status === Status.NotLearned) {
      this.statuses.delete(id);
    } else {
      this.statuses.set(id, status);
    }

    this.save();
  }

  private load(): Map<string, Status> {
    const statuses = new Map<string, Status>();

    try {
      const stored: unknown = JSON.parse(this.storage?.getItem(storageKey) ?? "{}");

      for (const [id, value] of Object.entries(stored ?? {})) {
        const status = Object.values(Status).find((candidate) => candidate === value);

        if (status !== undefined) {
          statuses.set(id, status);
        }
      }
    } catch {
      return statuses;
    }

    return statuses;
  }

  private save() {
    try {
      this.storage?.setItem(storageKey, JSON.stringify(Object.fromEntries(this.statuses)));
    } catch {
      return;
    }
  }
}
