export enum Status {
  NotLearned = "notLearned",
  Practicing = "practicing",
  Mastered = "mastered",
}

export const statusLabels: Record<Status, string> = {
  [Status.NotLearned]: "Not learned",
  [Status.Practicing]: "Practicing",
  [Status.Mastered]: "Mastered",
};
