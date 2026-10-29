export class RoadmapError extends Error {
  constructor(readonly problems: readonly string[]) {
    super(`roadmap.kdl is invalid:\n${problems.map((problem) => `  - ${problem}`).join("\n")}`);
    this.name = "RoadmapError";
  }
}
