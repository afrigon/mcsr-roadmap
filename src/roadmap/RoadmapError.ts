export class RoadmapError extends Error {
  constructor(readonly problems: readonly string[]) {
    super(`the roadmap is invalid:\n${problems.map((problem) => `  - ${problem}`).join("\n")}`);
    this.name = "RoadmapError";
  }
}
