# Notes: fundamentals

## Decisions

### Setup

- installRanked: described Prism + the Ranked wiki mod pack as the default path (draconix 2026-04, HiTrippy 2026-05); other legal launchers only implied. Included the "Ranked-modded runs can't go to speedrun.com, copy the instance" note from draconix.
- coreSettings: table of the values top runners converge on (research/overworld.md plus HiTrippy setup video). GUI scale written "3 or 4 (largest your screen allows)" to merge draconix ("max") and HiTrippy ("3 or 4"). Included Ranked's FOV effects slider (HiTrippy uses 25%).
- pieChartPreset: presented both directories; recommended the fortress (blockEntities) one while learning, gameRenderer once scanning buried treasure or doing preemptive, following HiTrippy's reasoning (no buried treasure seeds below 1200 Elo).
- advancedKeybinds vs macroRebinds split: F3 / perspective / right-Shift rebinds and toggle sprint on advancedKeybinds; split rebind of A/D, the "block key from game" alternative and key repeat on macroRebinds.
- macroRebinds: quoted HiTrippy's 140 ms start delay / 60 ms repeat delay as his values, framed as a starting point, not a standard.
- thinMacro: listed mapless buried treasure, E-ray and preemptive as uses, per the roadmap's rule that E-ray uses the thin macro. Did not mention FOV-specific E-ray settings (PudgyPenguin's video uses FOV 30; not cited for this).
- tallMacro: kept to the window/eye-zoom/pixel-adjustment workflow (draconix). Did not cover boat eye, sensitivity values or any mod-360 hotkey; only stated that in-game sensitivity must stay fixed and mouse feel goes through Toolscreen's slider.
- debugKeys: added F3+C, Shift+F3 and F3+F/Shift+F3+F rows beyond the description's three, since they are used throughout the run.
- runOverview: seven-step route; mentioned the Ranked match timeline splits (nether, bastion, fortress, first eye, End).
- seedFilter: table of every seed type's guarantees with Elo unlocks, from research/ranked-context.md (Ranked wiki seed.md).
- practiceMap: section list and credits from the repo README (read 2026-10-29).

### Crafting and inventory

- `tabCrafting` is written as k4yfour's "section crafting" (clicking the recipe-book category tabs), because the item's linked video and roadmap.md entry ("Tab / section crafting · k4yfour") are about that. The page notes that "tab crafting" also names the Tab+Space search-bar trick, which lives on the Search Crafting page.
- `ironCountOptimal`: table follows research/overworld.md (8 shovel, 9 shears, 10–12 shears+shovel, 13+ axe, 6 = bucket/shears/F&S). The "obsidian enter" clause for 6 iron was dropped as ambiguous; the page says 6 iron applies when diamonds cover the pickaxe.
- `fastLootingOptimal` covers both the three-input method (Calisthenicuber, empty hotbar only) and osh's hotkeyless method, matching the label "3-input" and the description "Three-input, hotkeyless looting".
- `fastLootingEasy` describes Sendoff's method 3 (shift-click, release, shift-click). `fastLootingStandard` describes the 4-input offhand method (Calisthenicuber 8:05, Sendoff method 2).
- `consistentHotbarOptimal` uses doogile's zero-cycle hotbar advice (CSdkCmZ69RI at 1508 s) and the Semperzz sorting map; no full-run layout is prescribed because no standard exists.
- `craftWhileTravelling`: the stronghold half is written as "craft at a table overlapped with blaze waves", not "while running", because table recipes can't be crafted in motion.
- Search-crafting English queries taken from GASLEFORT's segment of the HiTrippy guide (HJObsmCxEoU, 6:02–8:35).

### Movement

- boatCrawl = plain crawl (get in boat at a one-tall gap, break or exit it). sprintCrawlBoat = Mikeyboie's
  sprint-in-boat, sneak-out-holding-sprint method, plus k4yfour's "get in and break at the same time"
  as the fastest version (described from Calisthenicuber 19:36, since the k4yfour video has no
  transcript or description of the steps).
- Moved the sprint-sneak "sprint bridging" (k4yfour icogESJ8KQY) into speedBridging's resources as a
  faster variant, since the roadmap has no sprintBridging item.
- pearlHang and pearlClutch pages state the pearl preserves facing direction (HiTrippy demonstrates it);
  repeated on blockClutch because it is the key to wall landings.
- HiTrippy's "hold shift as the pearl lands so you stick to the block" tip (block clutch, 6:32) left out:
  he calls it unreliable, and it sits close to the illegal shift clutch, so I didn't teach it.
- HiTrippy's "click clutch" (one click + jump bounce) left out of boatClutchEasy: he says it wastes time
  in speedrunning.
- boatClutchEasy/Optimal both state: sticky boat clutch allowed, shift clutch not legal (rules list in
  ranked-context.md; HiTrippy's video description also says shift clutching is not legal).
- Calisthenicuber's "soul sand acceleration before a pearl" tip (21:20) left out: the mechanism is unclear
  from the transcript alone.
- Bed (50%) and hay bale (80%) fall-damage reduction from HiTrippy 13:44 not used; no item for it.
  Could be a small "Hay and Bed Landing" item if wanted.

## Unconfirmed

### Setup

- wideMacro: the explanation that Minecraft's fog is planar (distance along the view direction, so screen edges see farther) is from general knowledge of the "planar fog abuse" glitch, not a source that states the mechanism. Waywall's docs intro page didn't show resize config; "handles resizing through its config" is stated without a cited example.
- thinMacro: the mechanism "only what's in the narrow view is rendered, so entity counts and pie slices react to where you look" is general knowledge (frustum culling), not quoted from a source.
- Toolscreen default hotkeys and exact Thin/Wide/EyeZoom dimensions: not in the README; left out (draconix mentions Z for thin and Alt for wide as defaults in 2026-04, not used on the page).
- Jingle's wide macro: Jingle's README doesn't list resizing; the claim rests on PudgyPenguinMCSR (2026-03) and research/overworld.md.
- Waywall key repeat tuning: not confirmed; the macroRebinds page only says Waywall rebinds keys.
- installRanked: Java "17 or newer" combines draconix (17–22) and the Toolscreen installer requirement (17+); the Ranked wiki install page doesn't state a Java version.
- Toggle sprint in 1.16.1 vanilla controls ("Sprint: Toggle"): from game knowledge.

### Crafting and inventory

- The exact mechanism of shift-click-spam fast looting (why the second click moves everything) is not explained; the page only describes the inputs.
- Pick block for nether brick while clearing the spawner and for obsidian after the blind (both in the item description) have no source; the page uses the sourced cases instead (blaze-bed reselect, block restock, meebie's portal fire-res fix-up).
- "Explosives and a bow while running to the stronghold coordinates" has no source and is mechanically impossible without standing at a table; left out.
- Nether bricks, glowstone and wool crafted specifically "on the way to the fortress" while moving: inferred from them being 2×2 recipes; no source names doing it mid-travel.
- Danish vs Norwegian: only HiTrippy's character counts (English 15, Norwegian 14, max two letters) are stated; VicDoesGaming's Danish argument was not transcribed.
- Tool progression page is general Minecraft knowledge plus research notes on gold tools; no speedrun source for the wood→stone→iron order itself.

### Movement

- knockbackCancel: the source says "light yourself on fire" but not with what; I wrote "flint and steel at
  your feet". The page doesn't explain why fire cancels knockback. My understanding from game code (a hit
  during the damage immunity after a fire tick deals only extra damage and no knockback) is not in any
  source, so I left it out.
- headHitters: no speed figures or best ceiling height found (as in followup-overworld.md).
- soulSandPillar: "about a tick every other block" is Calisthenicuber's own estimate ("I believe").
- swimming: the pressure plate/button air pocket comes from the shipwreck/treasure notes in overworld.md;
  I didn't check which exact blocks leave air in 1.16.1 beyond doors, beds, pressure plates and buttons.
- gravityBlockDig: no speedrun source found at all; the page only gives the general mechanic (mine the
  bottom, the column falls, don't stand where it lands).
- pearlCrawl: Mikeyboie's gap height wording ("mine one up. So mine two up from the floor") is unclear;
  the page only says "a one-tall gap".

## Proposed roadmap.kdl changes

### Setup

- debugKeys description: consider "F3+G chunk borders, F3+B hitboxes, F5 third person, F3+C, Shift+F3 pie chart" since the page covers those too (optional).
- wideMacro description mentions "Waywall, Toolscreen or Jingle"; fine. No change needed.
- pieChartPreset (sub25): the gameRenderer directory matters mostly from buried treasure (1200 Elo, around sub15–sub20 pace); the item still fits sub25 if read as "preset any directory". No change proposed.

### Crafting and inventory

- `tabCrafting`: rename title to "Section Crafting" and description to "Craft from the recipe book's category tabs instead of paging." k4yfour's video says it is deliberately not called tab crafting, and the current description ("Jump between recipe-book sections with Tab") describes neither technique accurately.
- `craftWhileTravelling`: description to "Nether brick, glowstone and wool on the way to the fortress; explosives and a bow at a table, overlapped with waiting." The current wording implies table crafts while running.
- `pickBlock`: description to "Middle-click to grab a block again: the hard block between blaze beds, restocking blocks, the obsidian slot after the portal." The current spawner-clearing and post-blind examples are unsourced.
- `ironCountEasy` sits at sub45 while roadmap.md listed it under First completion; fine either way, no change proposed.

### Movement

- `gravityBlockDig` (sub11): no source supports it as a Ranked technique or its placement; consider
  moving it to "For fun" or dropping it unless the owner has a source.
- `sneakBridging` goal sub30 vs `speedBridging` sub15: Calisthenicuber calls speed bridging "not 100%
  necessary for Ranked, but very helpful"; placement looks fine.
- `pearlCrawl` parent `pearlHang`: pearl crawl doesn't build on the hang; it builds on `pearlBasics` and
  pairs with `boatCrawl`. Suggest parent `pearlBasics` (or `boatCrawl`).
- `blockClutch` description "Pearl onto a wall and place a block on landing." is fine; `pearlClutch`
  description fine.
- `roadmap.md` lists sprint-bridging (sub10, k4yfour icogESJ8KQY) but `roadmap.kdl` has no item for it;
  consider `sprintBridging` under `speedBridging`.

## Thin pages

### Setup

- None stayed thin. runOverview has only one embedded video (no dedicated Ranked route-overview video found beyond Mikeyboie Part 1).
- seedFilter has links only, no video.

### Crafting and inventory

- `chestLooting`, `miningSwap`, `inventoryOnTheMove`: short by nature; inventoryOnTheMove has only Mikeyboie's general advice as a source (no source for "offhand as a buffer" beyond k4yfour's offhanding to reduce recipe-book junk).
- `toolProgression`, `recipeBook`, `eyesAndBeds`: no resource videos.

### Movement

- gravityBlockDig (no sources, no resources section).
- selfPlacedHeadHitters (one source quote).
- pillarDropping (one source passage).
