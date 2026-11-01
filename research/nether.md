# Nether

Covers nether entry to leaving for the stronghold: navigation, bastions, fortress.
Blind travel lives in [stronghold.md](stronghold.md).

## Sources

- MCSR Wiki channel: Housing 2026 https://www.youtube.com/watch?v=y7fG2L4FZLU, Bridge 2026
  https://www.youtube.com/watch?v=FoNy438g1GM, Treasure https://www.youtube.com/watch?v=u4-KxRhNsUc,
  Stables https://www.youtube.com/watch?v=fjkkLdWYRmY, Fortress https://www.youtube.com/watch?v=9LpyDBPC3u4
- Mikeyboie Part 2 Bastions (2025-07) https://www.youtube.com/watch?v=CRwiJcWWUlY, Part 3 Fortress
  (2025-09) https://www.youtube.com/watch?v=JsFcAeBXVpk
- Calisthenicuber advanced guides (2026): Housing https://www.youtube.com/watch?v=qiYjzjdsa4U, Bridge
  https://www.youtube.com/watch?v=jIf98VTLOs0, Treasure https://www.youtube.com/watch?v=rpxJ6EVRzbo,
  Stables https://www.youtube.com/watch?v=P-SnpsZjtas, Fortress https://www.youtube.com/watch?v=71ABl45UyAE
- HiTrippy: "You Only Need 4 Routes" https://www.youtube.com/watch?v=NKWnd0LJbbY, Bridge
  https://www.youtube.com/watch?v=ppPgLK6GnJ8, Treasure https://www.youtube.com/watch?v=grmlChvqxN8,
  Stables https://www.youtube.com/watch?v=D8Mt1bNNWtg
- MCSR wiki: https://mcsr.miraheze.org/wiki/Bastion_routing
- frontcage.com strategy forum: https://frontcage.com/c/strats-routing/6

## Terms

- **E-ray**: bastion finder from the F3 entity counter at FOV 30 (k4yfour and Hamazon).
- **Pie-ray / piedar**: fortress finder from the profiler pie chart
  (`root.tick.level.entities.blockEntities`, spawner slice) plus render-distance changes and chunk
  border crossings.
- **Negative pie-ray**: put the spawner chunk at the edge of render distance and walk until it unloads.
- **Glowdar**: pie-ray from inside a treasure bastion without breaking its magma cube spawner, using a
  client bug where each chunk reload adds a ghost spawner entry.
- **Trading hole**: a 1–2 deep pit that aggroed piglins fall into; ingots are thrown in.
- **Auto funnel**: a hole shape late piglins path into by themselves.
- **Hard toggle**: switching to Hard difficulty so piglins drop from greater heights to chase you,
  then back to Easy before they hit.
- **Rampart types**: triple, single, ruined, lantern/double, diagonal (by chest layout).
- **Good gap / bad gap**: Stables' lower side sections; a good gap holds gold, a bad gap one chest.
- **Pearl hang**: throw a pearl, drop render distance to 2 so it freezes, raise it later to land.
- **Strays**: blazes spawning around the fortress rather than from a spawner.

## Navigation

- Settings on entry: render distance 16–20, entity distance 500%, entity culling off, planar fog.
- Bastion check: add the F3 M and C values; if E is about 30 higher, a bastion is loaded.
- E-ray: spin at FOV 30, watch the left E value for spikes of 35–70, run toward the largest. Optimal:
  rescan at FOV 50 when close; the spike shows at the screen edge. k4yfour (2025-12):
  https://www.youtube.com/watch?v=M-sffdCnv-4; MCSR wiki: https://mcsr.miraheze.org/wiki/E-ray
- Wide resolution plus planar fog shows distant terrain at the screen edges:
  https://www.youtube.com/watch?v=yUeSm0C0t50
- Biomes: wastes are best, soul sand valley slow with skeletons, basalt deltas worst, crimson has
  hoglins (food), warped has endermen.
- Boat for lava lakes and large drops (nether wood cannot make boats).
- Caved: boat crawl (2-long 1-high slot, sprint in by boat, sneak out holding sprint) or pearl crawl.

## Bastion fundamentals

- **Aggro**: without gold armor, piglins attack on sight. Breaking chests, gold blocks, gilded blackstone
  or nether gold ore aggros piglins in a radius; opening a chest aggros those that see you. A piglin
  you hit ignores thrown gold.
- **Pig-punch rule**: always punch a piglin so it fully aggros; a piglin stuck at partial aggro stops
  chasing when it loses sight of you.
- **Route principle**: aggro as many piglins as possible, lead them into a hole, mine gold, throw
  ingots, loot chests while they barter. Good routes pull 11–12 piglins; top Ranked routes 15–23.
- **Leave with**: 12–16+ pearls, 20 obsidian, 48–60 string, 2–3 fire resistance, a stack of soul sand,
  gravel. Gold helmet rather than boots (soul speed boots come from trades).
- **Gravel collection**: drop gravel or soul sand on trading piglins to lift trade items within reach.
- **TNT**: light with a button; flint-lit TNT counts as player damage and aggros piglins.
- **Block elevator**: mine gold with a block in the offhand and spam-place beneath; drops ride up.
- **Hoglins**: lava from 4 blocks up for food. Fire just before a hoglin hit cancels its knockback.
- **No iron pickaxe**: loot the nearest chests for iron or nuggets, craft, then route.
- **Practice**: LlamaPag bastion map https://github.com/LlamaPag/bastion/releases
- **Identify the type**: Stables has 3 ramparts, the others 2; Bridge ramparts are separated and lower
  than the bridge; Housing never generates buried and its right rampart is always a triple. meebie:
  https://youtu.be/74Kyp-r5_-8

## Housing

Right rampart always triple; left is triple, single or ruined. Main gold is a 9-block buried line behind
the double-chest room, with backups.

| Route | Summary | Notes |
| ----- | ------- | ----- |
| Top-down | Loot the triple from the top, then the double, then the single; punch a piglin; run down; release the other rampart's piglins; hard toggle; trade in the gold room. | Beginner route. Optimal adds the 3 backup blocks via elevator. Itchmaninja: https://www.youtube.com/watch?v=BI4dytSAQt0 |
| Half-down | Enter from the top stairs without looting the top chests; elevate 2 gold blocks; dig the hole. | Calisthenicuber Housing |
| Manhunt | Enter from the bottom, break the center chest, block pathing, build into the gold room, dig an instant trading hole. | RSG version first; Ranked variation takes the upper backups with a hard toggle for 20–23 piglins. pncakespoon: https://www.youtube.com/watch?v=A2tiwLB3DlY; MCSR wiki: https://mcsr.miraheze.org/wiki/Manhunt_Housing |
| Wet manhunt | Manhunt across a lava floor using a gold-item distraction. | MCSR Wiki Housing 2026 |
| Lava manhunt / lava top-down | Variants for lava-flooded housing; lava top-down throws ingots up and elevates them. | Calisthenicuber https://www.youtube.com/watch?v=umTC6_ymazE |
| TNT housing | TNT on the buried gold line after the hole is set. | Calisthenicuber Housing; rarely used |
| Crossbow top-down | 24-piglin variant. | MCSR Wiki short `yf95cU0l02k` |
| Goose v1.1 | Manhunt variant by Reek, optimised by doogile, with chloe's −1 blackstone mining trick. Needs 3 blackstone. | 2026-03: https://youtu.be/aaBTDYtGoNk?t=158 |
| Quickhunt v1.1 | Manhunt adapted with the quicksand route and the crossroads hole (chloe). Needs 2 blackstone. Its guide author rates it faster and more intuitive than Goose. | 2026-08: https://youtu.be/83sJ8iVt5o0?t=53 |

Extras: pearl up to the triple from the back; door landing; housing exit pearl clip (MCSR Wiki short
`0wekuN9V5yc`).

## Bridge

Gold chalice in the middle holds all the gold needed. Ramparts are single or triple. Hoglins can be on the
upper bridge, never the lower one.

| Route | Summary | Notes |
| ----- | ------- | ----- |
| Cracksmoker | Right-only triple, both or none: block hoglins and pathing, break gold, throw, dig the hole. | Beginner; fallback when short on blocks |
| Donkey Kong | Left triple only: mine the chalice, staircase up, aggro, use the triple's floor hole for trading. | doogile. Beginner and advanced versions |
| Single Single / Mogul hole | Both ramparts single. | About 14 piglins |
| Soog / safe soog | Advanced right side from on top of the triple with an auto funnel. | doogile and silverrruns |
| TNT chalice | TNT on the chalice, fuse overlapped with crafting, fire knockback cancel. | crossroads: https://www.youtube.com/watch?v=XgJoXz8iqPc |
| Lodesteal | Left triple → chalice (Triple To Chalice). | Named by pavkin. kindred: https://www.youtube.com/watch?v=I9CJ7H4786g |
| Bank Heist | Right triple → chalice. | HiTrippy Bridge 9:38 |
| Walter extension | Lower-back extension for +2–4 piglins. | https://frontcage.com/t/bridge-lower-back-extension-walter-extension/84 |
| Daisy | Open right triple only, not with TNT; chalice-to-chalice route with a difficulty toggle. 21 piglins in the showcase; safe, useful when lava or terrain block soog. | Lucento concept, 2026-07: https://youtu.be/ZYChOq7px3Y?t=8 |
| Estrogen | Left side, a Hamazon variant; 3 pre-crafted stairs from the chalice stop piglins pushing each other off. Claims 1–2 more piglins than Donkey Kong and the hole filled 10–15 s earlier. | Laysar and chloe, 2025-06: https://youtu.be/rbmN-LJe_TM |
| Subway | Right triple → chalice: hide behind the pillar while lava drains, walk past the aggroed sword piglin. Competes with Bank Heist. | kindred, 2025-11: https://youtu.be/M9zpc4yeFB4 |
| Boatlice TTC hole | Triple-to-chalice hole in standard and TNT versions, each open or buried. Not yet compared against Lodesteal / Bank Heist. | Lucento, 2026-05: https://youtu.be/58FCjDhXxWg |

Lower-side entry and an E-ray left/right rampart check (higher count is likely the triple) complete the
set. The older names (Double Single, Left Triple, Right Triple, Double Triple, Buried) are superseded.

## Treasure

The only linear bastion. Its magma cube spawner breaks pie-ray.

| Route | Summary | Notes |
| ----- | ------- | ----- |
| Safe Boomer | Enter at the lava moat, mine the 2 bridge gold, path piglins up the stairs, bridge the towers, hole in the center stair, mine tower gold leaving bottom-right last. | Beginner route |
| Boomer | Same with aggressive gold placement and throws. | Few seconds faster. dolqhin: https://www.youtube.com/watch?v=Ux7N8_Xd6d0 |
| TNT treasure | TNT on a soft block in the second tower's gold wall. | 5–8 s saved |
| Lava-filled rampart | Use the other tower for the hole. | |
| Bottom treasure | Extra gold or spawner access; knock distracted piglins into lava. | Situational |
| Top treasure | Entry from the top ledge. | Unconfirmed details |

Spawner break by pearl hang: pearl back toward the trading tower, render distance 2, fire resistance,
boat down, break the spawner from the side, raise render distance to return. Glowdar avoids this.

Boat TNT treasure is a Lucento concept for improving TNT treasure; it sometimes misses a block:
https://youtu.be/D-7MtSzpv5I

## Stables

Ranked guarantees at least one good gap.

| Route | Summary | Notes |
| ----- | ------- | ----- |
| Good Gap | Gap check from the center staircase, pit, mine into the gold wall, open the hidden room, mine floor gold. | Beginner route; about 7 piglins alone. Silverr: https://www.youtube.com/watch?v=jc8156m-URU |
| Beef Salad hole | Auto-funnel gap variant; about 15 piglins trading before 1:30. Displaced by the Crispy hole; still a fallback. | Calisthenicuber Stables |
| Triple to Gap (TTG) | Loot a triple and its 4 gold, mine down into the good gap, hard toggle. 16–18+ piglins. | Default at high Elo. meebie: https://www.youtube.com/watch?v=D4Ulw7VepJc; safe "Suigi": https://www.youtube.com/watch?v=tORxck-C_Ng |
| Double Triple | Two adjacent triples, start at the rightmost. Only 8 gold blocks. | High-roll. Comparison: https://frontcage.com/t/double-triple-vs-ttg-comparison/126 |
| Hourglass | Left triple → left bad gap → right good gap. | chloe/pavkin: https://www.youtube.com/watch?v=CV3B9tLK8z0 |
| Triple Triple | Three triples. | Rare |
| Crispy | Good-gap autofunnel hole (either gap) replacing the Beef Salad hole: faster trade start and finish, better hole position for the pearl hang, compatible with TNT. Variation 2 (easy) is the default; Variation 1 (hard) saves about 0.75 s. | Hole by CrispLake, route by Lucento, help from Pavkin. 2026-06: https://youtu.be/ECIPK7FnSIQ?t=47; info dump: https://youtu.be/PIonv1IuYFI |
| CrispyTNT | Crispy with 2 TNT lit by 2 crafted buttons replacing gold-block mining; guarantees 4/4 gold blocks and protects the hole. Best on double-triple seeds or with 2+ TNT. Earlier versions of the video are marked outdated by the author. | Lucento, 2026-06: https://youtu.be/ECIPK7FnSIQ?t=106 |
| Eski | Right-side double triple with a different hole position and micro-optimisations; about 2 s faster trade finish in the author's save-state comparison. Usable on left-side DT with distraction gold, but slower there. Mechanically hard. | Lucento, 2026-09: https://youtu.be/oYBtZOxUT40?t=8; deep dive in Reek's DT/TT guide: https://youtu.be/DG4p2NOQhY8?t=1653 |
| DTGB (Double Triple Go Boom) | TNT double triple, left side only, uses a boat. | Lucento, 2026-06: https://youtu.be/uJDb7_uhf-A |
| L-gap | Tripleless stables route, slightly better than Beef Salad. The author recommends it as a backup for a botched Crispy or Beef Salad hole. | crossroads198x, optimised by Lucento, 2026-09: https://youtu.be/3RoAfzjf2dM |
| Toe Tickler | Theoretically fastest TNT gap route; its author calls it unrealistic. | Lucento concept: https://youtu.be/Yw1kgi1X23I |

Reek's ABS double triple / triple triple guide (2026-09) is the reference for DT and TT micro,
including the safe first part of triple triple: https://youtu.be/DG4p2NOQhY8. ABS is the
bastion-routing community where Lucento, Reek, CrispLake, Pavkin and chloe publish routes.

Gap check: the left gap is good if there is air behind the top-right block of the 2×2 at the top of
the stairs; the right-gap check is described inconsistently across sources (verify in the LlamaPag map).

## Fortress

| Technique | Notes |
| --------- | ----- |
| Good vs bad side | Open bridges hold spawners; roofed hallways hold chests. Hax: https://www.youtube.com/watch?v=Ts2cRIz-MOc |
| Hallway rules | Wart staircase room: go down and straight through. Balcony: opposite or perpendicular. Stairs: up. The lava-well room is the transition to the spawner side. MCSR wiki: https://mcsr.miraheze.org/wiki/Nether_Fortress |
| Pie-ray | Raise render distance until the spawner shows at N, lower to N−4, raise to N−1, cross chunk borders; the one that loads it is the direction. Optimal: two crossings cover four directions. k4yfour: https://www.youtube.com/watch?v=5LuoaGFCoBU |
| Negative pie-ray | For diagonal spikes. Mar1n: https://www.youtube.com/watch?v=fw0KzXyEFtY; Hyper Enhanced: https://frontcage.com/t/hyper-enhanced-negative-pie-ray-pie-ray-simulator-map-reposted/62 |
| Glowdar | From treasure without breaking the spawner: render distance 18, VSync off, unlimited FPS; reload the chunk until the `mob_spawner` row reads ≥0.01%. https://www.youtube.com/watch?v=wDKUpAsY9AQ; https://frontcage.com/t/glowdar-guide-tips-information-examples-etc/98 |
| Structure regions | Bastions and fortresses share regions, one structure each, so the fortress is never in the bastion's region. Ranked adds: within 16 chunks of the bastion. |
| Spawner clearing | Blazes spawn in waves of up to 4 every 10–15 s and need open space and low light; mine out the sides, put out all fire, soul sand platform at most 2 out. |
| Blaze bed | Hard block on the spawner, explosion at the pillow. 2 beds beat 1. About 20 s saved. JackoWacko62: https://www.youtube.com/watch?v=n11v-59LJnA |
| TNT setups | 1, 2, 3 TNT (order matters, about 95–97% clear), 4-TNT donut. Data: https://docs.google.com/spreadsheets/d/188jA4Hr5eNRcxT-i1ivdktbOSBNS_YaRs7a1gKUHAfk |
| Blaze bed vs zero | In Ranked, keeping the bed for the zero cycle saves more (about 29–38 s) than blaze bedding (about 20–23 s) for intermediate players and above. https://frontcage.com/t/blaze-bed-or-zero-cycle/46 |
| Spawner split | Each blaze is worth about 7 s; with 5+ rods, prioritize overlaps over finishing the platform. https://frontcage.com/t/a-deeper-look-into-the-spawner-split/65 |
| Killing blazes | Axe crit then sword crit; a looting sword gives extra rods (don't blaze bed with looting); boat catches knocked-off blazes. |
| Withers | Pillar beside the fence and punch them off; fire or lava on the bridge redirects them. |
| Dynamic render distance | Drop to about 5 to force stray spawns. |
| Fort first | Shield or enchanted golden apple instead of fire resistance; situational. |
| Rods | 6 rods make 12 eyes; 7 for margin. |
| Practice | Blaze practice: https://github.com/Semperzz/Blaze-Practice/releases, https://github.com/Mescht/Blaze-Practice/releases |

Crafting beds at the spawner instead of during trades nets about 1.7 s (ClearColdWater analysis);
Mikeyboie still crafts during trades, so this is contested.

## Open questions

- Nether region size in 1.16.1 (about 400 blocks per Mikeyboie) is unverified.
- Route chapters without captions (TwagZ, Safe No Armor, Item Elevator, Split Double Triple) are
  unconfirmed.
