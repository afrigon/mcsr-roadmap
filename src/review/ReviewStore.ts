const storageKey = "mcsr-roadmap:review";

export class ReviewStore {
  constructor(private readonly storage: Storage | null) {}

  static fromWindow(): ReviewStore {
    try {
      return new ReviewStore(window.localStorage);
    } catch {
      return new ReviewStore(null);
    }
  }

  isReviewed(id: string): boolean {
    return this.load().has(id);
  }

  toggle(id: string) {
    const reviewed = this.load();

    if (!reviewed.delete(id)) {
      reviewed.add(id);
    }

    try {
      this.storage?.setItem(storageKey, JSON.stringify([...reviewed]));
    } catch {
      return;
    }
  }

  private load(): Set<string> {
    try {
      const stored: unknown = JSON.parse(this.storage?.getItem(storageKey) ?? "[]");

      return new Set(Array.isArray(stored) ? stored.filter((id): id is string => typeof id === "string") : []);
    } catch {
      return new Set();
    }
  }
}
