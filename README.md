# mcsr-roadmap

A learning roadmap for MCSR Ranked, the Minecraft 1.16.1 ranked speedrun mod. Skills are placed in the
Break the Barrier time goal they unlock and linked by their prerequisites, shown as an advancement-style
timeline per topic. Each skill opens a page explaining how to learn it, and its status (not learned,
practicing, mastered) is saved in the browser.

## Development

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

`roadmap.kdl` defines the goals, categories, rows and items:

```kdl
category end title="End" {
    row zeroCycle title="Zero cycle" {
        item bowPlusOne title="Bow +1 on F m88 y95" goal=sub10 {
            requires bedTiming
        }
        item doubleShot title="Double shot, 2+2 at y95 and y99" goal=sub8 {
            upgrades threePlusTwo
        }
    }
}
```

- `goal` is one of the ids in the `goals` node.
- `scope=ranked` marks a skill that only applies to Ranked.
- `requires` lists prerequisites; `upgrades` names the easier version this item replaces.

The build fails on unknown nodes or properties, unknown ids, a prerequisite in a later goal, and
dependency cycles.

An item's page is `content/items/<id>.mdx`, with the sections *How it works*, *How to practice* and
*Resources*. Embed videos with `<YouTube id="…" start={seconds} title="…" />`. Pages are optional: the
build lists items without one, and fails on a page with no matching item.

Research notes behind the roadmap live in `research/`.
