# MCSR Ranked context

MCSR Ranked is a Minecraft 1.16.1 mod for head-to-head speedrun matches on filtered seeds.
Where it differs from RSG (random seed glitchless, the classic leaderboard category), the
differences change what is worth learning.

Sources: the [Ranked wiki](https://wiki.mcsrranked.com/) (source repo
[MCSR-Ranked/Wiki](https://github.com/MCSR-Ranked/Wiki)) and the
[Ranked guidelines](https://mcsrranked.com/guidelines). The wiki's tutorial pages
(`docs/gameplay/tutorial/**`) exist only as empty stubs, but their tree mirrors this roadmap:
`overworld/{village,desert_temple,shipwreck,ruined_portal,buried_treasure}`,
`nether/{bastion/{housing,bridge,treasure,stables},fortress}`,
`endgame/{locate_stronghold,stronghold,end/{ground_zero,one_cycle,oneshot,zero_cycle}}`.

## Rules

- Runs follow the speedrun.com Minecraft Any% Glitchless rules ([mc.sr/rules](https://mc.sr/rules), Ruleset D for glitches).
- Allowed glitches relevant to routing: pearl clipping, seeing under water or lava in third person,
  oneshot, sticky boat clutch, boat velocity reset, boat breaking, soul skating, doors placed inside
  the player, sprinting while crawling or sneaking, fast looting and altered fast looting, planar fog
  abuse, ghost bucket.
- Disallowed: x-ray, shift clutch, ghost scaffolding, ghost blocks, attribute swapping.
- Rebinds: one key per game input, one input per key, buttons only (no scroll wheel), no
  autoclicker-style rebinding of attack or use.
- Macros: window resizing (any size inside monitor bounds, plus one size outside them up to 16384 px)
  and toggle sprint. Nothing else.
- Legal tools: Ninjabrain Bot, Toolscreen (Windows only), Jingle, Waywall (Linux), SlackowWall, Resetti.
- The guidelines themselves are conduct rules (smurfing, alting, match fixing, stream sniping) and
  defer gameplay legality to the speedrun.com rules.

## Elo, ranks and seed pool

| Elo        | Rank      | Seed pool unlock                     |
| ---------- | --------- | ------------------------------------ |
| 0–599      | Coal      | Village, Shipwreck, Desert Temple    |
| 600–899    | Iron      | Ruined Portal                        |
| 900–1199   | Gold      | Snowy and Taiga villages             |
| 1200–1499  | Emerald   | Buried Treasure                      |
| 1500–1999  | Diamond   | roughly the top 5%                   |
| 2000+      | Netherite | roughly the top 0.5%                 |

Seed type distribution, keyed to the lowest Elo in the match:

| Elo        | Village | Shipwreck | Desert Temple | Ruined Portal | Buried Treasure |
| ---------- | ------- | --------- | ------------- | ------------- | --------------- |
| 0–599      | 55%     | 15%       | 30%           | 0%            | 0%              |
| 600–1199   | 30%     | 25%       | 25%           | 20%           | 0%              |
| 1200+      | 20%     | 20%       | 20%           | 20%           | 20%             |

Private rooms use the 1200+ distribution.

## Time milestones

The in-game "Break the Barrier" achievement levels are completion under: any, 30, 20, 15, 13, 12,
11, 10, 9, 8, 7 and 6 minutes. The roadmap's time axis uses these same milestones.

Winning completion times from 4,000 consecutive ranked matches on 2026-10-28 (Season 12,
`api.mcsrranked.com/matches?type=2`, bucketed by the winner's pre-match Elo; winners only, so faster
than an average run):

| Rank      | p25   | Median | p75   | Nether | Bastion | Fortress | First eye | End   |
| --------- | ----- | ------ | ----- | ------ | ------- | -------- | --------- | ----- |
| Coal      | 24:17 | 29:35  | 36:13 | 4:29   | 5:35    | 13:46    | 22:26     | 26:27 |
| Iron      | 20:09 | 24:27  | 29:35 | 3:43   | 5:01    | 11:03    | 19:34     | 21:36 |
| Gold      | 15:18 | 17:23  | 20:12 | 2:48   | 3:40    | 8:05     | 13:30     | 15:05 |
| Emerald   | 12:20 | 14:00  | 15:57 | 2:39   | 3:36    | 6:41     | 11:22     | 12:36 |
| Diamond   | 10:02 | 11:21  | 12:41 | 2:02   | 2:41    | 5:36     | 9:10      | 10:27 |
| Netherite | 8:37  | 9:27   | 10:37 | 1:43   | 2:16    | 4:59     | 7:30      | 8:14  |

Split columns are medians of the winner's timeline events from 35 matches per rank. The official
ranked record in mid-2026 was 5:45 (waluyoshi).

## Seed filter guarantees

Overworld and nether are filtered through independent seeds, so nether-inferring tricks such as
divine travel do not work.

**Village**: within 7 chunks; guaranteed blacksmith (usually a weaponsmith; toolsmith possible in
desert and taiga, armorer in snowy); at least 7 iron or 4 iron + 3 diamonds, golem included; food in
chests or hay bales; river within 6 chunks. Either 3 artificial lava pools nearby or 8+ obsidian in
the blacksmith. With 10+ obsidian the golem is the only guaranteed iron. Taiga villages always have
10+ obsidian.

**Shipwreck**: within 4 chunks; at least 7 iron or 4 iron + 3 diamonds and some food; suspicious stew
never gives poison; no other wrecks, buried treasures or irrelevant block entities near spawn; chests
mostly not buried; 2 magma ravines within 10 chunks (never in frozen ocean).

**Desert Temple**: within 5 chunks; at least 7 iron or 4 iron + 3 diamonds; some food; wood nearby
(mostly); river within 6 chunks; 3 artificial lava pools nearby.

**Ruined Portal**: within 3 chunks; at least 18 iron nuggets beyond what the bucket or flint and steel
needs (an iron pickaxe is not guaranteed); food in the chest or animals within 5 chunks along with
flint and steel or a Fire Aspect sword; a light source guaranteed; enterable with obsidian or a bucket
(80/20).

**Buried Treasure**: within 5 chunks; at least 7 iron or 4 iron + 3 diamonds; no other buried
treasures, wrecks or irrelevant block entities near spawn; 2 magma ravines within 10 chunks.

**Bastion**: the intended bastion is the closest to 0,0 by at least 10 chunks and within 14 chunks of
0,0; open terrain from the approximate nether entry; ramparts hold 3+ iron and 5+ obsidian (any chest
for Housing, the lodestone chest may hold the iron for Bridge); Stables has 2 good gaps, or 1 good gap
and at least one triple-chest rampart.

**Fortress**: origin within 16 chunks of the intended bastion, open terrain from the bastion.

**The End**: not filtered.

## RNG standardization

Both players in a match get the same random outcomes in the same order.

- **Barters**: obsidian chance raised by about 35%; at least 6 obsidian and exactly 3 pearl trades
  every 72 barters (8 gold blocks).
- **Drops**: animal and hoglin food, blaze rods, ender pearls, sticks from dead bushes, apples, flint,
  gilded blackstone, glowstone. Iron golems always drop 4 iron.
- **Items**: rotten flesh hunger chance, suspicious stew effects (never poison), sheep wool, endermite
  spawns per dimension, eye of ender breaks (the 2nd throw never breaks).
- **Mobs**: villager trades fixed; drowned never hold tridents; elder guardians never give mining
  fatigue; no monsters or bats in desert temples; no non-built-in monsters in bastions; zombified
  piglins avoid pathing into bastions; magma cube splitting fixed; no ghasts within 5 chunks of the
  player.
- **Spawners**: magma cube positions and sizes fixed; blaze spawn timing and positions fixed (up to 4
  vanilla-style attempts per wave, the same for both players; a spot blocked by fire, a block, an
  entity or the player loses that blaze); zombie spawners replaced by skeleton or spider spawners.
- **Portals**: player spawn fixed; initial nether entry fixed, with portals treated as if built at
  overworld Y64; the first blind portal goes to the surface when built at nether Y48 or above; every
  stronghold has the same number of pre-filled end portal frames.
- **Ender dragon**: target height offset sequence fixed per phase, with the zero-cycle offset range
  0–15 blocks instead of vanilla 0–20; direction changes, strafe rolls and perch rolls fixed. A
  standardized random number in 0–1 is drawn at spawn and after each strafe; the dragon strafes once
  the probability of not having strafed falls below it. Perches work the same way, and the dragon
  also perches once that probability falls below 0.1.

## Consequences for the roadmap

- Bucketless portals, food-only shipwrecks, treasure-map buried treasure and structureless
  overworlds do not occur or are not worth learning for Ranked.
- Buried Treasure skills are only needed from Emerald, Ruined Portal from Iron.
- Because perch rolls are standardized but still depend on crystal count, destroying some crystals
  (half bow) is a controllable way to shorten the perch wait.
- The second eye never breaks, which makes a confirming second throw cheap.
- Blind portals built at Y48+ never leave you underground.
