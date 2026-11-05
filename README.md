# mcsr-roadmap

A learning roadmap for MCSR Ranked, the Minecraft 1.16.1 ranked speedrun mod. Every skill is an
advancement on one canvas, placed under the Break the Barrier time goal it unlocks and linked to the
skill it builds on. Each one opens a page of resources for learning it, and its status (not learned,
practicing, mastered) is saved in the browser.

## Development

The icons are the game's own textures and models, rendered at build time from a Minecraft 1.16.1
client jar.
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

category zero-cycle title="Zero Cycle" theme=end icon="item/end_crystal"
```

- A goal's `rank` colours its bracket.
- `theme` is one of fundamentals, overworld, desert, ocean, nether, fortress, bastion, stronghold,
  end or fun.
- `icon` takes the same values as an item's `icon`, shown beside the category's title.

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
- `icon` is `item/<id>`, drawn from the item's model the way the game's inventory draws it (flat
  for items like `item/iron_ingot`, a 3D block for `item/obsidian`; a name with no model is drawn as
  that item texture), `block/<texture>` for a single flat block face, or one of the composite icons
  built from several textures: `composite/bed`, `chest`, `shield`, `hunger`, `hunger_effect`, `heart_empty`,
  `heart_half`, `heart_full`, `splash_potion_fire_resistance`, `water`, `water_breathing` and
  `silverfish`, each written as `composite/<name>`. Items the game draws in code rather than from a
  model are drawn by the composite of the same name, so `item/chest`, `item/shield` and every
  coloured bed, such as `item/white_bed`, work anywhere an item does.
- `index` orders the item within its category; leave gaps so new items fit between.
- `label` is optional, shown under the icon when the icon alone is ambiguous.
- `ranked` is optional: how the skill differs or applies in Ranked.

The body holds the item's links and videos, with written content fitted to the item. The build fails
on unknown fields, ids used twice, unknown categories or goals, a parent in another category or a
later goal, parent cycles, an index used twice in a category, and icons missing from the jar.

Pages can also use the widgets in `src/widgets/`:

- `<BarChart title="…" categories={[{ label, icon? }]} series={[{ name, values, color?, stack? }]} unit="…" layout="…" />`,
  a horizontal bar chart, with a legend once there are two series or more. Series sharing a `stack`
  name draw as one stacked bar labelled with its total; a series without one is a bar of its own.
  `layout="grouped"` (the default) draws every bar on one shared scale, so the series must share a
  unit; `layout="panels"` gives each stack its own column and scale, for measures in different
  units. `color` is `blue`, `orange`, `aqua`, `yellow`, `red` or `gray`, picked to match what the
  series measures; series without one take the first four in that order.
- `<Tabs>` holding `<Tab label="…">` panels, one shown at a time.
- `<InventoryDemo title="…" container="chest" slots={{ "chest 4": "item/obsidian 7" }} inputs={["hold shift", "click chest 4", "release shift"]} pace={2} />`,
  an inventory screen that plays the player's physical inputs. `container` is `hotbar`, `chest`,
  `inventory` or `crafting-table`, and each screen uses the game's slot positions. `hotbar` is the
  in-game hotbar and offhand with no screen open: there is no pointer, so only keys apply (1–9
  select a slot, F swaps the selected stack with the offhand, Q drops one item or, with Ctrl, the
  stack), and `selected` (1–9, 1 by default) is the slot selected at the start. Slots are
  `inventory 1–27` (row by row from the top left), `hotbar 1–9` and `offhand` on every screen,
  plus the screen's own: `chest 1–27` in a chest; `crafting 1–4`, `armor 1–4` (top to bottom)
  and `result` in the inventory; `crafting 1–9` and `result` at a crafting table. Items are an
  icon and an optional count. `result` is never filled by hand: it shows what the grid crafts,
  matched against the shaped and shapeless recipes in the client jar's data pack (the special
  recipes, such as fireworks and armour dyeing, are not modelled). `book="open"` starts the
  inventory or crafting table with the recipe book open, which moves the screen right as in game.
  `align` is `leading` (the default) or `center`. Under the screen, the same set of keys and both
  mouse buttons light up as they are pressed. Inputs are:
  - `hover <slot|book>`: moves the pointer to a slot or to the recipe book button; with a mouse
    button held, this drags across every slot on the straight line to it, previewing each one as
    the pointer enters it.
  - `click [<slot|book>]` and `right-click [<slot|book>]`: press and release, after hovering the
    target if one is given. A left click on `book` opens or closes the recipe book.
  - `hold <shift|ctrl|left|right>` and `release <…>`: hold or let go of a modifier or mouse button.
  - `key <1–9|f|q|tab|space>`: press a key. 1–9, F and Q act on the hovered slot; Tab moves
    keyboard focus to the recipe book button and Space presses it, as in game. Opening or closing
    the book moves the screen under a pointer that stays where it is.

  A nested list is a burst, such as `["click", "key 9", "click"]`: its inputs are 100 ms apart and
  play as a single step, while every other input is its own step, 300 ms after the one before. The
  demo behaves like the 1.16.1 inventory screen, so two clicks on the same slot count as a
  double-click only within the game's 250 ms window: in practice, inside one burst. Shift-double-clicks, drags and
  hotkey swaps behave as they do in game. In the playback each click ripples once, blue for the
  left button and orange for the right, with a thicker ring where the game registered a
  double-click. Playback is separate: `pace` is the replay rate in steps per second, 2 by default, and viewers replay at
  0.1×, 0.5×, 1× or 2× of it. Playback loops, resting `endPause` seconds (1.5 by default) on the result.

Pages can start a blockquote with an alert marker to render it as a callout:

- `> [!NOTE]`, a side fact that qualifies the point without changing it.
- `> [!UNVERIFIED]`, a claim about the game's behaviour that has not been tested in game.
- `> [!WARNING]`, something that can go wrong and cost the run.

Research notes behind the roadmap live in `research/`.
