# Zero cycle

A zero cycle kills the dragon on its initial flight: pearl to the obsidian tower under the first node,
build a setup, and explode beds and anchors each time the dragon passes, before it ever perches.

## Sources

| Source | Date | Notes |
| ------ | ---- | ----- |
| doogile / MCSR Wiki, "How to ZERO CYCLE" https://www.youtube.com/watch?v=CSdkCmZ69RI | 2026-02 | Canonical video. Pinned comment corrects three overlays. |
| Couriway, Ultimate Guide Chapter 6 (zero section by thecamo6), Metafy, login required | 2026-04-02 | Most complete text source; embeds per-height clips. |
| kohout135, "All Useful Zero Cycle Setups" https://www.youtube.com/watch?v=2Nw7Y5QxYFg | 2025-07 | Pinned comment corrects several overlays; t97 y99 update: https://www.youtube.com/watch?v=DgPBb4AZ2CA (2026-01) |
| pion, "Every Zero Cycle Setup in 5 Explosives" https://www.youtube.com/watch?v=aQ7GxWUXvaY | 2025-08 | Completeness over beginner-friendliness. Coordinate sheet: https://docs.google.com/spreadsheets/d/12OGxoqYkRIDipQ61tRJRSY2iBT-sTLveSN4X4qho0sM/edit |
| hasbiWalks, "NEW zero setups for almost every tower" https://www.youtube.com/watch?v=eoy8Uj1l-Ps | 2025-12 | Node-aligned multiblock set; optional. |
| ClearColdWater lenience sheet https://docs.google.com/spreadsheets/d/1DvZwc3_MHJt9WP0Vf-xmezcTlprTc3y36kEg7-QYyy0/edit | 2025-10 to 2026-03 | Seconds of spare time per tower × height × spawn. Thread: https://frontcage.com/t/all-zero-cycle-tower-setup-end-spawn-combination-time-lenience-sheet/42 |
| Mescht Zero Practice https://github.com/Mescht/Zero-Practice | v1.2.2, 2025-08 | Practice map: node and tower control, +1 timing assistant, one-cycle mode. |

## Notation

- Coordinates are **block coordinates, X then Z** — the integer `Block:` line in F3, never the
  decimal XYZ line.
- Setups are named by the **standing block** and its **y level**, because the bed's position relative
  to the player is fixed and your own position is easier to read. `m88 F y95 at 28 −27` means: tower
  m88, front node, standing at y95 on block 28, −27.
- **F / B**: front or back node.
- **N+M**: N dragon rotations used, M rotations with two explosives (a skipped damage cooldown).
  5+0 is five single explosives; 3+2 and 2+2 need a bow or crossbow.
- **Hybrid**: bed facing north–south. **Modern**: bed facing east–west (pion's terms).
- **Offset**: stays on top of the tower but further from the crystal. **Side**: on the side of a
  tall tower, below the crystal. **Universal side**: far enough from the crystal to work on several
  tall towers. **Multiblock**: two bed positions with a standing block diagonal to both, for
  consistent damage when the dragon is off-centre.
- **O level**: on a buried spawn, the y of the highest block above you.

## Mechanics

- **Front or back** is decided by the taller of the two middle pillars and is fixed per seed. Then the
  node is **diagonal** (7/8) or **straight** ("1/8", between the fountain and a middle pillar); that
  roll is not fixed per seed.
- Node positions (practice-map particles): front diagonal 28 −29, back diagonal −29 28, front straight
  20 0, back straight −20 0.
- The dragon targets a point a random number of blocks above the node's base and descends at constant
  speed. Reaching the target means a flyaway; destroying the tower's crystal means a strafe.
- Ranked limits the zero-cycle target offset to 0–15 blocks (vanilla 0–20) and fixes its sequence per
  seed, so the dragon descends further before leaving. Low heights are relatively more viable in Ranked
  than in RSG; no source changes any coordinates for Ranked.
- A bed explodes at its pillow, which should sit on the node. An anchor explodes from its own block, so
  time anchors slightly earlier.
- Rotation (clockwise or counter-clockwise) is 50/50, read from the approach direction. It does not
  change bed placement on normal setups; it does on offset, side and multiblock setups.
- Shooting the dragon early in a rotation keeps the rotation; shooting late (over the bed) flips it.

### Towers

| Name | Top y | Note |
| ---- | ----- | ---- |
| Small Boy (s76) | 76 | Never the 1/8 tower in a real game. |
| Small Cage (c79) | 79 | Iron bars to about 83. |
| Tall Cage (c82) | 82 | Bars to about 86. |
| m85, m88, m91 | 85, 88, 91 | |
| t94, t97, t100 | 94, 97, 100 | |
| Tall Boy (t103) | 103 | |

### Standing heights

- **Diagonal: y86, y90, y95, y99, y104** (some setups also y81, y108). The dragon descends at a
  constant speed, so it crosses the node at fixed heights.
- Other heights risk breaking the first bed: y82 about 10%, **y87 about 25%**, y91 about 10%,
  y100 under 5% (pion). Older guides used y87/y88; current guides use y86.
- **Straight (1/8)**: y84, 88, 92/93, 97, 102. Metafy suggests remembering them as one less (87/91/96):
  bridge at that height, then staircase up. Height labels depend on how you build.
- Rule of thumb: a non-offset setup needs a standing height of at least tower height + 5; below that the
  bed breaks the crystal and you offset.
- Front is more forgiving than back: the front node is further from its tower.

## Setup catalogue

Status: **C** current (doogile 2026-02 and Metafy 2026-04 agree), **Alt** valid alternative,
**D** several valid variants in use. Explosive counts are 5+0 unless noted.

### Front diagonal

| Tower | Standing | Heights | Status and notes |
| ----- | -------- | ------- | ---------------- |
| s76 | 28 −27 | 86, 90, 95, (99) | C. Metafy recommends y95. Older 28 −26 and y87/88 superseded. |
| c79 | 28 −27 | 86, 90, 95, 99 | C |
| c82 | 28 −27 | 90, 95, 99 | C. pion adds a y86 offset at 28 −27 or 27 −26. |
| m85 | 28 −27 | 90, 95, 99 | C. pion y86 offset at 27 −29. |
| m88 | 28 −27 | 95, 99 | C. Metafy's tutorial tower (y95). |
| m88 offset | 27 −27 | 91 | C |
| m91 | 28 −27 | 95, 99 | C. y95 works only because 28 −27 is already one block out. |
| t94 | 28 −27 | 99, 104 | C |
| t97 | 27 −27 (t100 coordinates) | 104 | Alt. kohout's older y103 at 28 −26. |
| t97 offset | 27 −28 | 99 | D. doogile and kohout's update agree on 27 −28; Metafy 26 −27; pion lists modern, hybrid and multiblock variants. |
| t97 | 27 −27 | 100 | C |
| t100 | 27 −26 | 104 | D by one block: Metafy 27 −27; kohout's 31 −30 is a different modern-style offset. All work. |
| t100 | 25 −27 | 100 | C, hard |
| Tall Boy | 29 −31 | 104 | D: Metafy 26 −28, pion modern 29 −30 / hybrid 25 −26. Very hard. y108 at 28 −26 front only. |

### Back diagonal

| Tower | Standing | Heights | Status and notes |
| ----- | -------- | ------- | ---------------- |
| s76 | −30 25 | 86, 90, 95 | C. Metafy recommends y90. |
| c79 | −30 25 | 86, 90, 95, (99) | C |
| c82 | −30 25 | 90, 95, 99 | C |
| m85 | −30 25 | 90, 95, 99 | C. pion y86 multiblock −29 28. |
| m88 | −30 25 | 95, 99 | C |
| m88 offset | −29 27 | 91 | D: pion −28 26. |
| m88 side | −30 28 | 90 | Corrected value in two data sources; kohout −30 29. |
| m91 | −30 25 | 99 | C. y95 normal breaks the crystal. |
| m91 offset | −29 26 | 95 | C, unanimous. Anchors cannot go in the normal spot. |
| t94 | −30 25 | 99 | C. Anchors only as the obsidian. |
| t97 | −30 29 | 99 | D: Metafy −27 26, sheet −29 27, pion variants. |
| t97 | −28 26 | 100 | C, unanimous. Small bed-break chance. |
| t100 | −28 25 | 104 | Few runners are consistent here; usually y100 or a side setup instead. |
| t100 | −26 26 | 100 | C. Needs a bow on back (Metafy). |
| Tall Boy | −26 25 | 104 | Practically never attempted. |

### Side and universal

| Setup | Front | Back | Heights | Notes |
| ----- | ----- | ---- | ------- | ----- |
| Tall Boy side | 29 −29 | −30 28 | 90, 94 (86) | The standard way to play t103. Bed order depends on rotation. |
| t100 side | 29 −29 | −30 28 | 90 | Same standing block as the Tall Boy side. Also t97 at y86. |
| Universal side (t94, t97, t100) | 28 −30 | −29 29 | 86, 90, 95, 99 | Multiblock-adjusted stand. doogile shows 28 −31 / −29 30, the non-multiblock stand. |
| hasbi universal | 27 −29 | −28 28 (unrecorded) | 95 | Claims better node alignment; back is worse. |
| t94 y95 | 26 −28 | −27 27 | 95 | Mainly for buried spawns. |

### Straight (1/8)

| Source | Front | Back | Heights |
| ------ | ----- | ---- | ------- |
| Metafy, pion | 23 0 | −23 0 | 84, 88, 92, 97, (102) |
| doogile, kohout | 23 0 | −24 0 | 88, 92/93, 97 |
| kohout, 2+2 hybrid | 22 0 | −23 −1 | 92 |
| hasbi multiblock | 21 1 | −22 −2 | 88, 93 |

The −23 0 vs −24 0 difference is probably the same block approached differently (untested). Back 1/8 is
precise above y92. hasbi rates his 1/8 y97 worse than the normal setup.

### Lenience (seconds of spare time, top-runner execution)

Open spawn / O56 / O58, gold pickaxe assumed, about ±0.3 s per setup. Negative values are not
necessarily impossible.

| Setup | Open | O56 | O58 |
| ----- | ---- | --- | --- |
| F m88 y95 | 11.05 | 7.20 | 4.75 |
| F m88 y99 | 5.85 | 2.00 | −0.45 |
| F t94 y99 | 8.20 | 4.35 | 1.90 |
| F t97 y104 | 3.85 | 0 | −2.45 |
| F t97 y99 multiblock | 8.00 | 4.15 | 1.70 |
| F t100 y104 | 4.95 | 1.10 | −1.35 |
| F t103 y94 side | 12.20 | 8.35 | 5.90 |
| B s76 y95 | 3.55 | −0.30 | — |
| B m91 y95 offset | 9.70 | 5.85 | 3.40 |
| B t97 y99 | 5.85 | 2.00 | −0.45 |
| B t100 y104 | 2.60 | −1.25 | — |
| B t103 y94 side | 11.30 | 7.45 | 5.00 |
| 1/8 y92/93 | 9.85 F / 8.55 B | | |
| 1/8 y97 | 6.15 F / 4.85 B | | |

### hasbiWalks multiblock set

Every setup is multiblock and claims better alignment with the actual node. The later doogile and Metafy
guides still use the standard coordinates, so it is an optional optimization. It requires memorizing the
bed side per rotation for every tower.

## Building the setup

- Standard: staircase up twice, bridge out one block, place two blocks with an indestructible block on
  top, step back, place a second indestructible block; the bed goes between them.
- Indestructible blocks: obsidian, crying obsidian or respawn anchors.
- Optimal: triple-stack build, with backups for misplaced blocks.
- Pearl onto the tower with a standstill jump pearl that does not hit the crystal; hitting it almost
  always causes a flyaway.

## Damage variants

- **5+0**: five singles, the baseline. Every non-offset setup can be five-bedded without a bow. Aim
  for 5 even with spare explosives.
- **Anchors**: explode after the beds, since a mistimed anchor absorbs damage. They can replace the
  setup's obsidian; cover the facing side with a hard block (cobble, nether brick, not soul sand or
  netherrack). On tall towers the bottom anchor breaks the crystal, so it goes last. On t94 back and all
  offset and side setups, anchors work only as the obsidian. For a bed + anchor double, place the anchor
  first.
- **Bow +1**: the arrow starts the dragon's 10-tick invulnerability timer and later hits don't reset
  it. Explode bed 1 just before the timer expires and bed 2 just after, for two near-full hits in one
  rotation. An arrow also removes the dragon's horizontal speed while it keeps descending, so shooting a
  low dragon breaks the bed. Bow only when the bed would have done good damage anyway.
- **Crossbow**: can be pre-loaded, but charges slower than a bow; the bow makes doubles easier.
- **3+2**: the realistic target for most players. Nearly as fast as 2+2, much easier.
- **2+2**: the top level, made consistent with **double shot** (extra arrows correct the dragon onto
  the node and shed excess height). For y95 counter-clockwise, use 27 −28 F / −29 26 B.
- **More than two explosives per rotation** (for example 5+1 universal back): exotic.

## Spawn conditions

- **Open**: the reference case.
- **Overhang**: run to the back and pearl, or build up first; staircase out about 3 blocks for severe
  overhangs. Treat an overhang that encloses the platform as buried.
- **Buried**: mine at the back of the platform aiming backwards, turn around once the sky shows.

| O | Clip |
| - | ---- |
| ≤53 | No clip: mine and stack out, then pearl. |
| 54 | Mine 2. |
| 55 | Mine 3. |
| 56 | Mine 3, standstill pearl, hold jump (pitch about −82.5). |
| 57 | Mine 4, sneak, pearl, jump (shift clip); or build up 1 (normal clip). |
| 58+ | Shift clip: mine 5 and build 1 under, +1 per O level. Normal clip: build 2. |

Each O level costs about 1.1 s, which pushes you toward lower heights and offset or universal setups.
After a clip you can see whether it is a back dragon. A gold pickaxe reduces the time lost.

## Inventory and preparation

- **Pre-crafted explosives**: craft before the End, overlapped with blazes.
- **Pre-sorted hotbar** (easy) vs **sorting between pearls** (optimal, "prepless"): only the pearls are
  guaranteed in the hotbar and everything else is sorted mid-pearl.
- Don't rebuild the hotbar for the zero; swap only what's needed so muscle memory holds.
- Tips: glowstone or crying obsidian in the obsidian slot, the bed in the offhand for doubles, a block
  under the top anchor to avoid being knocked off.
- **Health**: enter with full health and food, or hunger-reset with saturation. A death reset in the
  portal room is common and often the safest. Food in the offhand before the last eye skips the eating
  animation.
- **Eating mid-zero** keeps a low-health back-dragon zero alive (Metafy: survivable "if you eat food,
  use bow, or have good armor").
- Raise entity and render distance on entry; pause and unpause a desynced dragon.
- After the kill: boat down, or pillar 2 beside the fountain. Pearl or boat out of cages.

## Go / no-go

- Read the node and rotation during the first pearl.
- Go when the tower × height has positive lenience for your speed and spawn, and you have enough
  explosives: 5 singles, about 4 with a bow, more for side setups without a bow.
- Bail when the pearl breaks the crystal, it's too late for the lowest safe height, health is low on
  back, or you have only 3 pearls on back (take only the easy setups).
- In real runs, take a one cycle on setups you can't hit yet.

### Saving a failing zero (Metafy)

- Dragon too low: bed 1–2 blocks lower beside the obsidian, or drop down and bed where you stood.
- Bed early or late to correct the previous bed; wait a rotation after an extremely late bed.
- On tall towers, use the crystal as a last explosive; shoot nearby crystals for 10 damage.
- Chase-down: shoot the dragon and the crystals healing it.
- Full bow and wait for a perch; mine back anchors with a diamond pickaxe.
- Clutch and pearl back up; loop to a side setup after a bad pearl.

### Fallbacks

One cycle, half bow, ground zero, or the damageless oneshot. See [end.md](end.md).

## Errata

**doogile** (uploader's pinned comment and replies):
- Go to y86 instead of y87 on applicable towers; the overlays show 87.
- m91 F heights are 95 and 99 (overlay: 99).
- Tall Boy side heights are 90 and 94 (overlay: 90, 95, 99).
- Coordinates can read one off at block edges; trust the on-screen text.
- 28 −27 is better than 28 −26 and most top runners use it.
- The side-setup coordinates shown (28 −31 / −29 30) are the non-multiblock stand; the multiblock stand
  is 28 −30 / −29 29.

**kohout135** (pinned comment):
- s76 y88 → y87, itself superseded by y86.
- 9:15 t97 → 27 −27 (overlay 26 −28).
- 17:41 t100 y90 F → 29 −29 (overlay 29 −30).
- 10:30 t100 F y104 → 31 −30 (overlay 30 −30).
- 28 −27 beats 28 −26 for 2+2.
- t97 y99 standing blocks are in the update video DgPBb4AZ2CA: 27 −28 F, −30 29 B.
- Ignore the fan summary comment (all front towers at 28 −26, back at −29 25, and an "m91 back −29 −26"
  typo).

**hasbiWalks** (description and replies):
- 3:20 is clockwise, not counter-clockwise.
- Front universal is 27 −29, not 28 −29.
- 0:57 Tall Cage is y90.
- The m88 back clip appears twice, both mislabelled "85".
- The back universal was never recorded although an overlay shows −28 28.
- The back t97 overlay "(29, −27)" has the wrong sign for a back setup; the true value is unverified.
- His t103 side is weak on back.

**Lenience sheet** (change log): m88 y90 coordinates fixed (2025-10-19); O61 block count fixed
(2025-12-16); s76 removed from 1/8 (2026-03-05).

**Metafy**: no errors found; it differs by one block on t100 F and t103 F, which are separate valid
setups.

## Resources by skill

- Nodes and fundamentals: https://www.youtube.com/watch?v=CSdkCmZ69RI&t=57s
- Standing height: https://www.youtube.com/watch?v=CSdkCmZ69RI&t=142s
- Bed timing: https://www.youtube.com/watch?v=CSdkCmZ69RI&t=162s
- Side vs offset: https://www.youtube.com/watch?v=CSdkCmZ69RI&t=214s
- Front top setups: https://www.youtube.com/watch?v=CSdkCmZ69RI&t=279s
- Back top setups: https://www.youtube.com/watch?v=CSdkCmZ69RI&t=585s
- 1/8: https://www.youtube.com/watch?v=CSdkCmZ69RI&t=853s; https://www.youtube.com/watch?v=2Nw7Y5QxYFg&t=1881s
- Offset and side: https://www.youtube.com/watch?v=CSdkCmZ69RI&t=933s; https://www.youtube.com/watch?v=2Nw7Y5QxYFg&t=690s
- Tall Boy side y94: https://www.youtube.com/watch?v=CSdkCmZ69RI&t=1149s
- +1 mechanic: https://www.youtube.com/watch?v=CSdkCmZ69RI&t=1262s
- Bow examples: https://www.youtube.com/watch?v=2Nw7Y5QxYFg&t=1231s
- Pearl clips: https://www.youtube.com/watch?v=CSdkCmZ69RI&t=1379s; pion's clip videos
  https://www.youtube.com/watch?v=Ivd54Ihvnnw (O55–O58+), https://www.youtube.com/watch?v=LjN-65sc4ns
  (O53), https://www.youtube.com/watch?v=yK6zJ48hn-U (O54)
- Hotbar and prep: https://www.youtube.com/watch?v=CSdkCmZ69RI&t=1508s
- Bed timing per height (thecamo6, from Metafy): y86 https://www.youtube.com/watch?v=pkeRuCzaDTA,
  y90 https://www.youtube.com/watch?v=4sByndN_cRc, y95 https://www.youtube.com/watch?v=5hXgj1oDVoA,
  y99 https://www.youtube.com/watch?v=ZW9z1vLlr1w
- +1 mistakes (thecamo6): late shot https://www.youtube.com/watch?v=RGP9sjueyhU, early shot
  https://www.youtube.com/watch?v=BLNopc_ZfiE
- Double shot 2+2 (thecamo6): y95 https://www.youtube.com/watch?v=a2OYYX1E1-4, y99
  https://www.youtube.com/watch?v=0qjpSiaAckY
- t97 y99 update: https://www.youtube.com/watch?v=DgPBb4AZ2CA
- Full catalogue: https://www.youtube.com/watch?v=aQ7GxWUXvaY (universal y86 &t=707s, front 1/8
  &t=2594s, back t97 y99 hybrid &t=3945s)
- Node-aligned multiblock: https://www.youtube.com/watch?v=eoy8Uj1l-Ps
- Practice: https://github.com/Mescht/Zero-Practice; hotbar sorting:
  https://github.com/Semperzz/Zero-Sorting-Practice

## Per-setup clips

Example clips by thecamo6, indexed in Couriway's Ultimate Guide Chapter 6 (2026-04-02). Coordinates in
the guide match the catalogue above unless noted there.

**Top setups** (front / back):
- s76: https://youtu.be/UUQQrvFmPgQ / https://youtu.be/nHPdMcoGVoY
- Small Cage: https://youtu.be/NQLBQpx3HMY / https://youtu.be/dIvnNKmhT-o
- m85: https://youtu.be/15Gv0T15m_I / https://youtu.be/SAbzbz9w16Y
- m91: https://youtu.be/MCvudUW_RXg / https://youtu.be/dh9Z5_Vi1Rs
- t94: https://youtu.be/EsX5ZBueljU / https://youtu.be/Xip4M5Bzf0M; anchor placement incorrect
  https://youtu.be/YjZI67ILCh8 vs correct https://youtu.be/DiUOm9V86UQ

**Rotations**: clockwise https://youtu.be/yyMYLr5jwGA, counter-clockwise https://youtu.be/VnEkfz6Jd_Y

**Bed timing per height** (clockwise / counter-clockwise):
- y86: https://youtu.be/pkeRuCzaDTA / https://youtu.be/6LWIvXIWQfo
- y90: https://youtu.be/4sByndN_cRc / https://youtu.be/znlDNCSObLY
- y95: https://youtu.be/5hXgj1oDVoA / https://youtu.be/CYpF-vyNhgA
- y99: https://youtu.be/ZW9z1vLlr1w / https://youtu.be/qudJMcRSUyM

**Offset and high setups** (clockwise / counter-clockwise):
- B m91 y95: https://youtu.be/LjnyjeFmAEQ / https://youtu.be/pfBS08COjxc
- t97 y99 triple stack, F: https://youtu.be/a2xD_w5Dd88 / https://youtu.be/UQVr-luIy1Y;
  B: https://youtu.be/Vzw3LJDZtMw / https://youtu.be/sbeU8-d4fGs
- B t97 y100: https://youtu.be/zUFHMn74k_c / https://youtu.be/3ECC0J60EvY
- t100 y104, F: https://youtu.be/7mTErvm1dMc / https://youtu.be/3CKfFW4ZwmE;
  B: https://youtu.be/T8ldTTayTss / https://youtu.be/m-T6_iZ2r5Q; F t97 y104: https://youtu.be/PJzSR16yIpU
- B t100 y103: https://youtu.be/15ZvgBzhb5M / https://youtu.be/Dj265TJhAGg
- F t100 y100: https://youtu.be/2py-cxmKMVM / https://youtu.be/kCokCrvyR7A
- t94 y95, F: https://youtu.be/vCxmMMXvOKk / https://youtu.be/bONWnYrJgdA;
  B: https://youtu.be/-BSsught6dc / https://youtu.be/iGEaJAf1oM8
- Tall Boy y104, F: https://youtu.be/nfypGi0KcIs / https://youtu.be/VdbtT_RBf8s;
  B: https://youtu.be/IbYpk_2LjOU / https://youtu.be/pjy5K9aTwWY

**1/8**: front 3 pearls https://youtu.be/bla1j64iSAQ; front 2 pearls https://youtu.be/KDqXZvdjODU; front
m88 y97 https://youtu.be/9gCMBE9w48E; back Small Cage y92 https://youtu.be/KUBlt9xdB7w; front 1 pearl y88
https://youtu.be/Hl2-1b8m5Jk; front fall recovery https://youtu.be/AOEkxRZf6E4; back 2 pearls y92
https://youtu.be/b48Q6HWPIdw; back fall recovery https://youtu.be/quofJoHQNHA

**Pearl clip fails**: bad aim https://youtu.be/3D22rLzJe3I; early shift https://youtu.be/03GtPEqxZV0;
early jump https://youtu.be/fiXkIMNEm-Y

**Bow +1 mistakes**: late shot https://youtu.be/RGP9sjueyhU; early shot https://youtu.be/BLNopc_ZfiE;
second bed delayed (too much knockback) https://youtu.be/QR-chVOtsZQ; beds too quick
https://youtu.be/Pq0YjYBhm9Q; beds too slow https://youtu.be/Q-FnuFBVUus; further examples
https://youtu.be/xTYyMd9-UcQ, https://youtu.be/SbxS7NKoqmM, https://youtu.be/HTf5hTgXv2g (anchor first in
a bed + anchor double), https://youtu.be/drvkdxE4HPQ

**Side and universal** (clockwise / counter-clockwise):
- B t103 y94, no bow: https://youtu.be/jm4CPYrbNmk / https://youtu.be/GXE9KUibsWs;
  bow: https://youtu.be/JZ_EFtJ2fjg / https://youtu.be/vEvn9XUZ-y4
- F t100 y90 build https://youtu.be/cAGwG2lqPKA; no bow: https://youtu.be/MwE0jWcTy2g /
  https://youtu.be/IBLcOj_Ht04; bow: https://youtu.be/tpJkCQZtTDQ / https://youtu.be/STWnqqk_C4Y
- B t100 y90, no bow: https://youtu.be/3bh3UIBU8_4 / https://youtu.be/-J4sk5K_jTU;
  bow: https://youtu.be/C-cavqaplx0 / https://youtu.be/vjCc06lXHKs
- F universal y95, no bow: https://youtu.be/6_vBHNCPXyw / https://youtu.be/8DP5aS09JSA;
  bow: https://youtu.be/iKk0eIWtx_I / https://youtu.be/P4x84jfe47k
- B universal y95, bow: https://youtu.be/PDPmtVFscmY / https://youtu.be/nswa2CbhCA4
- F universal y90, no bow: https://youtu.be/zp5qSjJGuYE / https://youtu.be/bvhNvWYUE28;
  bow: https://youtu.be/X9PwsmxLuiE / https://youtu.be/zsg46CDH97c
- B universal y90, bow: https://youtu.be/0bYzkDnZl-c / https://youtu.be/-wMXI9kw4dE

**Double bedding (+1) per setup** (clockwise / counter-clockwise):
- y90: https://youtu.be/pq5-3EH18BU / https://youtu.be/76TvbEULNU4
- y95: https://youtu.be/l7DEux4D_II / https://youtu.be/wEhymbT9Xc4
- y99: https://youtu.be/VfSpxLnUl-E / https://youtu.be/IlOW-kxNsZM
- y104: https://youtu.be/onOnhQEN0w8 / https://youtu.be/CCcfYzRdy4c
- B m91 y95: https://youtu.be/RQrB3DFxc2g / https://youtu.be/g7xnApRZ48E
- t94 y95, F: https://youtu.be/ZlFXpfbinOo / https://youtu.be/kHFtGQj2EW8;
  B: https://youtu.be/W4bO0NouOxU / https://youtu.be/Cgzw8ryFAlA
- t97 F y99/y100: https://youtu.be/jMKzyD5TRSY / https://youtu.be/bfh5NHWFZh4; B y99:
  https://youtu.be/-nMatrDhRtw / https://youtu.be/VjmHfc5Q82U; B y100: https://youtu.be/pQSQv4jn1p0 /
  https://youtu.be/1zYh5GUjd9A
- t100 y100, F: https://youtu.be/761HwmN-N2Y / https://youtu.be/Wn6OVimUkxg;
  B: https://youtu.be/PJcAiyV-50c / https://youtu.be/v9uOmkScb-0
- t103 y104, F: https://youtu.be/-BCrLKkdCAk / https://youtu.be/1HI0W98wrnQ;
  B: https://youtu.be/n0HZkbHs39w / https://youtu.be/bVnNg1QGbw0

**Double shot 2+2** (clockwise / counter-clockwise; y95 uses 27 −28 F / −29 26 B):
- y90: https://youtu.be/MMWPu9yNL2Y / https://youtu.be/99GRUPmOwSE
- y95: https://youtu.be/a2OYYX1E1-4 / https://youtu.be/-IUmvcOa2pA
- y99: https://youtu.be/0qjpSiaAckY / https://youtu.be/CHifdLM3OZA
- y104: https://youtu.be/_OxRFAjx7MY / https://youtu.be/dtnpJygVJEk

## Credits

From Couriway's guide: T_Wagz and Matthew Bolan (zero cycle); Matthew Bolan and Geosquare (one cycle);
Starchomper (ground zero); luvvlyjude (iron bars for ground zero); Tell52 (bow in zero cycles, modern
double pearl clip); NyaChloe (back t103 y104); KarateBaby (first multiblock side setup); k4yfour and
Tell52 (pearl clip).

## Open questions

- m88 back offset: −29 27 vs −28 26 unresolved.
- Back 1/8: −23 0 vs −24 0, probably the same block.
- hasbi's back t97 coordinates are unverified.
