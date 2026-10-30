# mcsr-roadmap

A learning roadmap for MCSR Ranked, the Minecraft 1.16.1 ranked speedrun mod. Every skill is an
advancement on one canvas, placed under the Break the Barrier time goal it unlocks and linked to the
skill it builds on. Each one opens a page of resources for learning it, and its status (not learned,
practicing, mastered) is saved in the browser.

## Development

The icons are the game's own textures, extracted at build time from a Minecraft 1.16.1 client jar.
Point `MINECRAFT_CLIENT_JAR` at yours in a git-ignored `mise.local.toml`:

```toml
[env]
MINECRAFT_CLIENT_JAR = "/home/you/.local/share/PrismLauncher/libraries/com/mojang/minecraft/1.16.1/minecraft-1.16.1-client.jar"
```

Then:

```sh
mise install
aubr dev
```

| Command        | Does                                  |
| -------------- | ------------------------------------- |
| `aubr dev`     | Serve the site with live reload       |
| `aubr build`   | Build the static site into `dist/`    |
| `aubr preview` | Serve the built site                  |
| `aubr check`   | Type-check TypeScript and Astro files |

## Content

`roadmap.kdl` defines the goals and a flat list of categories, each a tinted band of items:

```kdl
category zero-cycle title="Zero Cycle" theme=end {
    item bow-plus-one title="Bow +1" goal=sub10 parent=bed-timing icon="item/bow" label="M-88 y95" {
        description "An arrow before the first bed lets two beds land on one rotation."
    }
}
```

- `goal` is one of the ids in the `goals` node; goals carry the `rank` that colours their bracket.
- `theme` is one of fundamentals, overworld, desert, ocean, nether, fortress, bastion, stronghold,
  end or fun.
- `parent` is the item this one builds on, in the same category.
- `icon` is `item/<texture>` or `block/<texture>` from the game, or `composite/bed`.
- `label` is optional, shown under the icon when the icon alone is ambiguous.
- An optional `ranked "…"` child notes how the skill differs or applies in Ranked.

The build fails on unknown nodes or properties, unknown ids, a parent in another category or a later
goal, parent cycles, and icons missing from the jar.

An item's page is `content/items/<id>.mdx`: its links and videos, with written content fitted to
the item. Embed videos with `<YouTube id="…" start={seconds} title="…" />`. Pages are optional: the
build lists items without one, and fails on a page with no matching item.

Research notes behind the roadmap live in `research/`.
