import type { ProfileStore } from "../profile/ProfileStore";
import { Status } from "./Status";

export class StatusStore {
  constructor(private readonly profile: ProfileStore) {}

  get(id: string): Status {
    const stored = this.profile.read().statuses[id];

    return Object.values(Status).find((candidate) => candidate === stored) ?? Status.NotLearned;
  }

  set(id: string, status: Status) {
    this.profile.update((profile) => {
      if (status === Status.NotLearned) {
        delete profile.statuses[id];
      } else {
        profile.statuses[id] = status;
      }
    });
  }
}
