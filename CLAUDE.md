# mcsr-roadmap

A learning roadmap for MCSR Ranked (Minecraft 1.16.1 ranked speedrun), built with Astro, plain
TypeScript and Tailwind v4. See README.md for the data format.

## Workflow

- Work directly on `main` in this checkout. The usual worktree and session rules do not apply to
  this project: no herdr worktree, no branch, no pull request.
- Commit at natural checkpoints.

## Building

- Commands need the mise environment (`MINECRAFT_CLIENT_JAR` comes from the git-ignored
  `mise.local.toml`): `mise x -- aubr build`, `mise x -- aubr check`.

## Roadmap data

- `roadmap.kdl` is KDL v2. A parent sits in the same category with a goal no later than the child's.
- Labels only where the title or icon alone would be ambiguous.

## Item pages

- `content/items/<id>.mdx` holds only links and video references (`<YouTube id start title />`).
  Written content is added one item at a time, with sections fitted to that item rather than a
  shared template.
- Zero-cycle pages give no coordinates: they name the setup type and point to a video timestamp or
  pion's coordinate sheet.

## Notes

- `roadmap.md`, `research/` and `docs/review-decisions.md` stay until the roadmap is settled.
