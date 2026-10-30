# Decisions to review

Choices made while expanding the roadmap and writing item pages, where the recommended option was
taken without a review. Each entry names what was decided and what to look at if it is wrong.

## Roadmap structure

- **Goal columns**: First Completion, Sub 45, Sub 30, Sub 25, then the Break the Barrier goals down
  to Sub 6. Sub 45 and Sub 25 are not Break the Barrier milestones.
- **Rank colours**: each goal takes the rank whose median win time falls inside its column, and a
  column with no median takes the previous column's rank. First Completion, Sub 45 and Sub 30 are
  unranked, Coal is Sub 25, Iron Sub 20, Gold Sub 15, Emerald Sub 13–12, Diamond Sub 11–10,
  Netherite Sub 9–6.
- **Rebalancing**: after the explicit moves, 16 items moved one column toward the easier side to
  even out Sub 20 and Sub 15. Moved to Sub 25: Ghost Bucket Avoidance, Pearl Travel Angles,
  Inventory on the Move, Sand Fall Break, Air Bubble, Loot Value Calls, Single Single, Hidden Rooms.
  Moved to Sub 13: Tall Macro, Underwater TNT, Island Shears, Loot Without Entering, No-Iron Entry,
  Measurement Desync, Daisy, Pearl to the Triple. Resulting counts per column: 26, 27, 42, 37, 47,
  47, 39, 34, 21, 27, 9, 9, 7, 6.
- **Zero Cycle shifted with the rebalance**: Back Low Towers y90 and Go or No-Go are Sub 13; All Low
  Towers y95 and M-91 are Sub 12; most tower setups moved one column later so the row starts at
  Sub 15 with the basics.
- **Short goal titles** (`short="1st"`, `"45"`) are a required property of each goal, used for the
  compact brackets.
- **Ranked notes** replace `scope=ranked`: a `ranked "…"` child states exactly what Ranked
  guarantees. The popover shows it labelled "Ranked"; the tooltip shows a small R chip.

## Items added or changed without a source

- **Soul Sand Pillar** (Movement, Sub 13): added as requested; no source explains why alternating
  soul sand and a solid block helps, so the description only says what it is.
- **Fisherman Bucket** (Village, Sub 20, child of Village Checklist): the bucket trade is a
  fisherman's bucket of cod; the goal is a guess.
- **Ruined portal axe chest**: folded into Ruined Portal Loot ("if it holds an axe, take it and break
  the chest with it"); the source video could not be re-checked.
- **Dragon Chase-Down** (End Fight, Sub 13): description written from the zero-cycle notes, no
  dedicated guide.
- **Zero recovery items** (Fall Recovery Sub 12, Lost Block Recovery Sub 11, Knockback Recovery
  Sub 10) and **Zero Without the Crystal** (Sub 9): placements and descriptions are judgement calls.
- **Safety Pillar** (End Fight, Sub 20), **Home Portal Blind** (Sub 25), **Early Blind Reset**
  (Sub 12), **Boat During Portal** (Sub 13): placements are judgement calls.
- **Fortress setups**: 4-TNT Donut and Double Blaze Bed at Sub 20, single blaze beds at Sub 15 (as
  asked); 2 TNT Sub 15, 3 TNT Sub 13, 4 TNT Sub 11, Choosing a Setup Sub 12, Rare Setups Sub 10.
- **Wither line**: Wither Skeletons (pillar) Sub 45, Ledge Trick Sub 20, Block a Hallway Sub 15,
  Block an Open Hallway Sub 13, Trap Sub 12, Fire Pathing Sub 11.
- **Crafting While Travelling** (Inventory, Sub 12) holds the "explosives and bow while running to
  coordinates" case, since those crafts need a table; Crafting While Pearling (Sub 13) covers eyes
  and blaze powder.
- **Gravity block digging** (Movement, Sub 11): source is 7rowl's "Underrated Plays" segment
  (https://www.youtube.com/watch?v=-BPzoA2m3Ng); its other tricks were not reviewed because YouTube
  rate-limited subtitle downloads.
- **For Fun goals**: chosen per item; Jungle Temple Sub 20, Shift Clutch Sub 11 (labelled
  "Not legal"), Neo Sub 9, Sprint-Bridging Sub 10, Explosion Pearl Boost Sub 8, 1+3 Zero Sub 6, Lava
  Boat Sub 20.
- **Exit Early** (Movement, Sub 20, child of Boat Drop): confirmed by Calisthenicuber's movement guide
  ("they'll get out of the boat right before they hit the ground"). Boat Re-Entry (Sub 15) comes from
  the same guide; "boat velocity reset" is the ruleset's name for the glitch, not a runner name.
- **Pages written from the owner's description, with no speedrun source**: Wall Bridging, Gap Block,
  Boat Gap Jump, Eye Pearl Recovery. Knockback Displacement comes from PvP guides and the knockback
  mechanic; Keeping Blazes on the Platform's positioning advice is inferred from that mechanic.
- **Goals for the added items** are first guesses: Optimized Java Sub 30, Wall Bridging Sub 15, Gap
  Block Sub 12, Boat Gap Jump Sub 15, Keeping Blazes on the Platform Sub 20, Knockback Displacement
  Sub 12, Eye Pearl Recovery Sub 15, Listen for the Portal Room Sub 20, Gold Pickaxe Buried Spawn
  Sub 12, Slab Cycle Sub 12.
- **Zero saves**: Saving a Failing Zero is split into Lower Bed Save (Sub 12), Crystal Save (Sub 11),
  Fire Place (Sub 9) and Air Place (Sub 6, child of Fire Place); full bow and mining back anchors are
  dropped. Fire Place's goal is a guess. No source describes Air Place or Fire Place; their pages
  follow the owner's description, and Air Place's "the placement uses the block that is about to
  disappear" is an inference about how the same-tick placement works.
- **Movement quirks** (owner's descriptions, no speedrun source): Soul Sand Beside Lava, Soul Sand
  Edge Fall and Floating Gravel at Sub 25, Boat Lava Clip at Sub 20 under Boat Travel. The goals and
  the "where it bites" examples are guesses.
- **Seed Filter Guarantees** ranked note is a summary; the exact guarantees are per seed type and
  live on each category's items.

## Item pages

Every roadmap item has a page in `content/items/`. The per-group notes in `docs/review/` list, for
each page, the decisions taken, facts left out or stated cautiously, and pages that stayed short for
lack of sources:
[fundamentals](review/pages-fundamentals.md), [overworld](review/pages-overworld.md),
[nether](review/pages-nether.md), [fortress and stronghold](review/pages-fortress-stronghold.md),
[end](review/pages-end.md).

Things worth checking first:

- **E-ray pages teach the thin macro** with no spike numbers; every source measures E-ray at FOV 30,
  so the numbers don't carry over.
- **Ruined portal crying obsidian**: mining crying obsidian with an iron pickaxe takes about 42 s,
  so the old "mine it out and recast" advice looks wrong; the page points to the completion video.
- **Sneak Alignment** (Desert Temple) has no source describing the trick; the page only covers the
  closest documented clip. Keep, rename or drop.
- **Boat During Portal**: getting in and out of the boat for boat eye during the portal animation
  (owner's description). Where the boat is placed is inferred.
- **Low-confidence pages**: Lost Block Recovery, Knockback Recovery, Zero Without the Crystal,
  Triple Stack, Boat Climb, Piglin Pit Escape (gravel), Early Blind Reset, Both Spawners Active.

### roadmap.kdl changes proposed by the page notes

Applied:

- Descriptions: Debug Keys, Craft While Travelling, Crying Obsidian Completions, Iron Golem (crits),
  Perch Kill (full-charge hits, since crits add no damage to the dragon), Buried Spawn Escape
  (O54–O55, no overlap with Pearl Clip), Pearl Clip O58+, Classic Bartering,
  SeedQueue, Wither Skeletons, Block a Hallway (2.4 blocks tall, not 3), Home Portal Blind,
  Navigation Laws, Hitbox Scan, Gravel Trades, Bastion Pre-Craft, Half-Down, TNT Housing, Donkey Kong
  (optimal), Lower-Side Entry, Manhunt Hole Variants, Lodesteal, Bank Heist, Chest Priorities, Triple
  to Gap (middle), Rampart Types.
- Tab Crafting is titled **Section Crafting** (k4yfour's name for it; the id stays `tabCrafting`).
- Buried treasure's TNT item is titled **Treasure TNT** so it doesn't share a title with TNT for
  Trees.
- **Ocean Travel** moved to Sub 45: a shipwreck seed can't be finished without it.
- **Pearl Crawl**'s parent is Ender Pearl Basics (it doesn't build on the pearl hang).
- **Walter Extension** moved to Sub 10: frontcage calls it standard for lower-bridge routes.
- **Rampart Types** moved from Stables to the general Bastion category.
- **Jungle Temple** is labelled "Event".
- New ranked notes on Find a Bastion, Find a Fortress, Piglin Rules and Fire Resistance Timing, from
  `research/ranked-context.md`.

Not applied, because they contradict what the owner specified:

- Pick Block keeps the nether brick and obsidian examples (seen from top runners).
- Dig Under Gravity Blocks stays (source video supplied by the owner).
- The 4-TNT donut stays first in the TNT line; the notes call it superseded by 3 TNT and Fyroah TNT.
- Good Side vs Bad Side stays Sub 30 and its rules Sub 20; the notes rate both as beginner skills.
- Boat During Portal and Zero Without the Crystal stay as requested items.
- Temple Basement and Cracksmoker stay at Sub 45 (First Completion is a village seed's minimum).
- Fire Resistance Timing keeps the owner's rule as its description.
