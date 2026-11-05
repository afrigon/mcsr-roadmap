# mcsr-roadmap

A learning roadmap for MCSR Ranked (Minecraft 1.16.1 ranked speedrun), built with Astro, plain
TypeScript and Tailwind v4. See README.md for the data format.

## Minecraft Version

Minecraft Java Edition 1.16.1 is the only version this project covers. Always make sure the information found is accurate for this version specifically.

## Terms

- **Roadmap**: the canvas holding every item.
- **Node**: one item on the roadmap.
- **Category**: a roadmap category from `roadmap.kdl`, such as nether or bastion.
- **Grouping**: items inside a category that relate to each other, such as clutches, portals or
  lava. A grouping exists only through the items' parent links, not as a feature of its own.

## Workflow

- Work directly on `main` in this checkout. The usual worktree and session rules do not apply to
  this project: no herdr worktree, no branch, no pull request.
- Commit at natural checkpoints.

## Building

- Commands need the mise environment (`MINECRAFT_CLIENT_JAR` comes from the git-ignored
  `mise.local.toml`): `mise x -- aubr build`, `mise x -- aubr check`.

## Roadmap data

- `roadmap.kdl` (KDL v2) holds only goals and categories. Each item is `content/items/**/<id>.mdx`,
  with its data in the frontmatter; subfolders are free organisation, never read by the site.
- A parent sits in the same category with a goal no later than the child's.
- Labels only where the title or icon alone would be ambiguous.
- Goal, category and item ids, and so the item filenames, are kebab-case (`m91-back-offset`). Digits
  stay attached to the word before them (`sub45`, `t97`).

## Item pages

- An item's body holds only links and video references (`<YouTube id start title />`). Written
  content is added one item at a time, with sections fitted to that item rather than a shared
  template.
- Zero-cycle pages give no coordinates: they name the setup type and point to a video timestamp or
  pion's coordinate sheet.

## Notes

- `research/` holds the sourced notes behind the roadmap and stays until the roadmap is settled.
