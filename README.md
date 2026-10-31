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

`roadmap.kdl` defines the goals and the categories, each a tinted band on the canvas, in the order
they appear:

```kdl
goals {
    goal sub10 title="Sub 10" short="10" rank=diamond
}

category zero-cycle title="Zero Cycle" theme=end
```

- A goal's `rank` colours its bracket.
- `theme` is one of fundamentals, overworld, desert, ocean, nether, fortress, bastion, stronghold,
  end or fun.

Every item is a file under `content/items/`, named after its id. Subfolders are only for
organising the files; the site ignores them.

```mdx
---
title: Bow +1
label: M-88 y95
category: zero-cycle
goal: sub10
parent: bed-timing
icon: item/bow
index: 120
description: An arrow before the first bed lets two beds land on one rotation.
---

- [A link](https://example.com)

<YouTube id="…" start={seconds} title="…" />
```

- `category` and `goal` are ids from `roadmap.kdl`.
- `parent` is optional: the item this one builds on, in the same category.
- `icon` is `item/<texture>` or `block/<texture>` from the game, or `composite/bed`, `composite/hunger`,
  `composite/shield`, `composite/heart_empty`, `composite/heart_half`, `composite/heart_full`,
  `composite/splash_potion_fire_resistance` or `composite/water`.
- `index` orders the item within its category; leave gaps so new items fit between.
- `label` is optional, shown under the icon when the icon alone is ambiguous.
- `ranked` is optional: how the skill differs or applies in Ranked.

The body holds the item's links and videos, with written content fitted to the item. The build fails
on unknown fields, ids used twice, unknown categories or goals, a parent in another category or a
later goal, parent cycles, an index used twice in a category, and icons missing from the jar.

Research notes behind the roadmap live in `research/`.
