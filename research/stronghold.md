# Finding the stronghold and the stronghold

Covers leaving the nether (blind), measuring eyes, travelling, navigating to the portal room and
preparing for the End.

## Placement in the roadmap

Finding the stronghold sits under End, alongside the stronghold and the end fight, matching the
Ranked wiki's `endgame/{locate_stronghold, stronghold, end}` tree. The blind portal is built in the
nether, but its coordinates are chosen for the stronghold, so it belongs with finding the stronghold.

## Terms

- **Blind portal**: the first portal back to the overworld once you have rods, built toward the first
  stronghold ring before any eye is thrown.
- **Double travel**: measure at the blind, go back into the nether, build a second portal at the
  Ninjabrain Bot nether coordinates.
- **SD**: the standard deviation Ninjabrain Bot assumes per measurement.
- **Chunk 4,4**: the starter staircase always sits at block 4,4 of its chunk.

## Blind travel

- First ring: 1408–2688 overworld blocks from 0,0. Ninjabrain Bot's optimal blind distance is about
  226 nether blocks (about 1808 overworld) in the right direction. Use straight-line distance, not
  x+z.
- F3+C in the nether with no eye entered gives a blind rating (excellent, good for highroll, okay
  for highroll, bad but in ring, bad, not in any ring), a "% chance of <400 block blind", and "head X°
  for better coords".
- Easy: build once the rating is good or excellent. Optimal: follow "head X°" while travelling until
  excellent, and build at nether Y48+ so the Ranked surface guarantee applies.
- Build the blind portal at the end of a spawner cycle so measuring overlaps the next blaze wave.
- Fast builds use jump-stacking (2 obsidian plus a block, quadruple stacks with 11+ obsidian).
  Thannus: https://www.youtube.com/watch?v=OmTNpYQMWKk
- Portal linking: if the stronghold is very close, the second nether portal links back to the first.
  Ninjabrain Bot warns about it; travel in the overworld instead.
- Ocean blind: exiting onto water. Boat-measure on the spot and use the ocean blind hunger reset
  (crossroads198x): https://www.youtube.com/watch?v=NJzspga_AA4
- Educated, calculated, axis and perfect travel are historical names absorbed by the Ninjabrain Bot
  workflow.
- Divine travel does not work in Ranked: overworld and nether use independent seeds.

Sources: Ninjabrain Bot README https://github.com/Ninjabrain1/Ninjabrain-Bot; Mikeyboie Part 3
(2025-09) https://www.youtube.com/watch?v=JsFcAeBXVpk; MCSR wiki
https://mcsr.miraheze.org/wiki/Stronghold_travel

## Measuring

| Method                               | Notes |
| ------------------------------------ | ----- |
| Two-eye triangulation                | Throw, crosshair on the eye, F3+C; move sideways as the bot advises, throw again. In Ranked the 2nd throw never breaks. |
| FOV 30 measuring                     | Lower field of view for more precision; SD around 0.02–0.04. |
| Tall resolution + zoom + pixel adjustment | A legal resize macro stretches the window up to 16384 px tall; a magnified overlay shows the eye; each correction hotkey press adjusts one pixel. Replaces the older 0.01 subpixel adjustment. |
| SD calibration                       | Ninjabrain Bot's calibrator; a wrong SD makes the certainty lie. |
| Boat eye                             | Entering a boat snaps yaw to a known value so the bot gets more decimals than F3+C shows. Hotkey, enter boat, F3+C, the boat icon must turn green, then measure. Usually one eye is enough. |
| Eye wiggle                           | The eye flips between two pixel offsets: measure both; trust the result only if both agree at 99.9–100%. |
| Neighbouring offsets                 | When the top two chunks are adjacent, one portal between them covers both. |

Sources: k4yfour, "How to Find the Stronghold with Ninjabrain Bot" (2026-01):
https://www.youtube.com/watch?v=XmikooWmIAM; Ninjabrain Bot boat wiki:
https://github.com/Ninjabrain1/Ninjabrain-Bot/wiki/Boat-measurements; mysticsheep boat eye guide
(2025-07): https://www.youtube.com/watch?v=xg_2U7paSXI; Toolscreen sensitivity calculator:
https://qmaxxen.github.io/Toolscreen-sens-calc/; eye wiggle:
https://frontcage.com/t/what-to-do-about-eye-wiggle/14

## Travel and digging in

- Double travel: re-enter the blind portal, go to the bot's nether coordinates using the F3 "Block"
  line, build standing on that exact block, low (Y40–45), with fire resistance if lava is around.
  Needs 20 obsidian in total.
- Close strongholds: walk or boat, updating direction with F3+C.
- Dig in at block 3,3 to 5,5 of the stronghold chunk to land on the starter staircase. The "Eye Spy"
  advancement confirms entry.

## Navigation

- **Room knowledge**: identify the starter staircase; all staircases lead toward the starter, which
  enables backwards navigation; libraries are dead ends; silverfish hisses locate the spawner.
  k4yfour, stronghold video (includes "forsen's law" and "Fyroah's law"):
  https://www.youtube.com/watch?v=sUK23ws2ceY; MCSR Wiki channel (2024-10):
  https://www.youtube.com/watch?v=9dZWe7dNNMg
- **Hidden rooms**: only off 5-way crossings, only on the −x/−z side relative to the entrance; look for
  wall indentations. Ninjabrain: https://www.youtube.com/watch?v=vztJNmUdyBY
- **Preemptive navigation**: locate the portal room's silverfish spawner from the staircase (or from
  inside the second portal) by reading the pie chart, then route straight at it.
  - Setup: pie path `root.gameRenderer.level.entities`, render distance 8, entity distance 50%,
    FOV 30, chunk borders off, entity culling off.
  - Reading: sum the left-column % of `blockentities` (orange) and `unspecified` (green). A pure
    spawner reading is about 45–62%; "big orange" (a chest behind the spawner) about 54–60%.
  - Mobs lower the reading; a blockentities:unspecified ratio of about 2–4 still points to the spawner.
  - Hover/hitbox scan: keep hitboxes on while spinning in the portal. Hitbox wiggle distinguishes a
    spawner from a library.
  - Failure cases (about 15%): mineshafts, cave spider spawners, dungeons, an unloaded portal-room
    chunk, out of range.
  - Sources: Mimi and Meebie, "A Deeper Look Into Preemptive Navigation" (2024-10):
    https://docs.google.com/document/d/1Xnmki5jOwuiwVnyv1b3VJLpiDWfNixgKW3zQowmpsYo/edit; addlama setup
    doc: https://docs.google.com/document/d/1NEJ_BaQOqyDlt-h2GiUg4zXlqBHv8YfMVdGpQhDLD8U/edit; addlama
    video: https://www.youtube.com/watch?v=2dWq2wXy43M; Mikeyboie Part 4 (2025-12):
    https://www.youtube.com/watch?v=4It26dOki7g
- **Practice**: StrongholdTrainer https://github.com/mjtb49/StrongholdTrainer/releases; hard navs
  spreadsheet (needs an RSG instance, since Ranked replaces zombie spawners):
  https://frontcage.com/t/hard-navs-spreadsheet/134

"Piedar" sometimes refers loosely to preemptive navigation; in this roadmap piedar means the fortress
pie-ray (see [nether.md](nether.md)).

## Hunger resets

Set spawn, die on purpose, respawn with full health, hunger and saturation instead of eating.

- Methods: pearls into a corner (about 5–6 damage per second), lava or fire (remove before death so
  items survive), gravel suffocation (about 2 per second), fall damage (an n+2 block drop for n
  damage).
- Keep items by dying in a 2-block hole beside the respawn point.
- **At blind**: bed, 2×1 hole.
- **At ocean blind**: see crossroads198x above.
- **In the stronghold**: do preemptive first; dropped items and mobs ruin pie readings. A death reset
  in the portal room before a zero cycle is common.
- **In the nether**: respawn anchor.
- **Respawn invulnerability**: about 3 s of damage immunity after respawning; pearls thrown inside it
  cost no health. crossroads198x: https://www.youtube.com/watch?v=gW6lGeYtjm4

Sources: MCSR wiki https://mcsr.miraheze.org/wiki/Hunger_resetting; JOURONA, "Every Useful Death
Reset" (2025-12): https://www.youtube.com/watch?v=rhHjI8Ri84k

## End preparation

- Ranked gives every stronghold the same number of pre-filled frames, so the eye count is known per seed.
- Break the spawner on entering the portal room, place a block in the lava.
- Set spawn with a bed near the portal room as insurance.
- Arrange the hotbar before the last eye: filling it teleports instantly. Food in the offhand before
  the last eye skips the eating animation.
