export enum Status {
  NotLearned = "notLearned",
  Practicing = "practicing",
  Mastered = "mastered",
  Ignored = "ignored",
}

export const statusLabels: Record<Status, string> = {
  [Status.NotLearned]: "Not learned",
  [Status.Practicing]: "Practicing",
  [Status.Mastered]: "Mastered",
  [Status.Ignored]: "Ignored",
};
