# Nether techniques: fortress, spawners, piglins, travel micro

Research for the MCSR Ranked learning roadmap (Minecraft 1.16.1, Any% Glitchless). Builds on
`research/nether.md` and `research/ranked-context.md` in the website-pilot worktree; facts already
there are not repeated unless needed.


Conventions:

- "Frames" means the claim comes from reading video frames of a video without subtitles; small
  block-placement details read from frames are approximate.
- "Game code (from memory)" means vanilla 1.16 behaviour I am confident of but did not verify
  against decompiled source in this session.
- **Unconfirmed** marks anything no source in this session states.

## Key sources

| Source | Date | Notes |
| ------ | ---- | ----- |
| JackoWacko62, "ALL Optimal Spawner Setups" https://www.youtube.com/watch?v=n11v-59LJnA | 2026-02-21 | No speech, no subtitles; read from frames. Pinned comment holds the decision rules. Jacko is a 2200-Elo Ranked player with a 6:57 Ranked PB. |
| Daniel_H212, "Fyroah TNT isn't safe 1 out of ~360 times" https://www.youtube.com/watch?v=CtKAhqXPAzc | 2026-07-04 | Subtitles. Fix for the 4-TNT setup. |
| crossroads198x spawner sheet https://docs.google.com/spreadsheets/d/188jA4Hr5eNRcxT-i1ivdktbOSBNS_YaRs7a1gKUHAfk | undated | Public, readable via CSV export. Tabs: notes, First to 95%, First to 90%, First to 80%, plus a hidden first tab with FT85 rows. |
| ClearColdWater, "A Deeper Look into the Spawner Split" https://frontcage.com/t/a-deeper-look-into-the-spawner-split/65 | 2025-12-27, follow-up 2026-01-11 | Simulation of single-spawner clearing vs overlaps. |
| Calisthenicuber, "The COMPLETE Fortress Guide for Ranked" https://www.youtube.com/watch?v=71ABl45UyAE | 2026-03-29 | Subtitles; most complete recent fortress guide. |
| Hax, "MCSR Ranked Explanations: The Fortress" https://www.youtube.com/watch?v=Ts2cRIz-MOc | 2025-05-14 | Official Ranked channel. |
| meebie, "10 Tips from a Minecraft Speedrunning PRO" https://www.youtube.com/watch?v=0-nB-3Z61wQ | 2026-02-16 | Wither and fire-res tips. |
| Mikeyboie, Guide Part 3: Fortress https://www.youtube.com/watch?v=JsFcAeBXVpk | 2025-09-18 | Pearl hang, withers, weapons, dynamic render distance. |
| Daniel_H212, "Beginner and Intermediate Bastion Micro and Tips" https://www.youtube.com/watch?v=eUydRTXQ6tQ | 2026-08-30 | Piglin aggro tiers in practice. |
| Rysel, "MCSR Ranked S11 Playoffs Bastion Info/Micro Dump" https://www.youtube.com/watch?v=P447D09M2b4 | 2026-09-22 | Commentary audio; the technique explanations are on-screen text (read from frames). |
| T_Wagz, "Experiment 6: Piglin Aggro" https://www.youtube.com/watch?v=UjddqZzfOh8 | 2021-03-13 | Old, but the only measured breakdown of aggro ranges; Rysel's 2026 video cites it. |
| ThugMCSR, "How to abuse piglin aggro + forgotten pearl lineup" https://www.youtube.com/watch?v=N52KYIJ8lZM | 2026-07-23 | |
| 7rowl, "Everything you should learn from MCSR Ranked Playoffs" https://www.youtube.com/watch?v=SaVQ1Etlfoc | 2026-05-12 | VOD review with silverrruns, doogile, BeefSalad. |
| 7rowl, "Everything You Missed In The MCSR Ranked Playoffs Grand Final" https://www.youtube.com/watch?v=MRCKrEIFzj0 | 2026-05-29 | |
| JackoWacko62, "MCSR Ranked Speedrun Analysis (7:45)" https://www.youtube.com/watch?v=PldGU-mE7sw | 2026-03-01 | |

The MCSR Miraheze wiki has no pages on spawner setups, withers, piglin aggro, pick block or pearl
hangs (49 pages in total; the Nether fortress page has empty "Clearing Spawner" and "Combat"
sections). The Ranked wiki tutorial pages are empty stubs (see ranked-context.md). frontcage.com has
no topics on double spawners, withers, piglin aggro, pick block or pearl hangs beyond the ones cited.

---

## 1. Blaze spawner clearing setups

### Why clear at all

Blazes spawn in a box around the spawner and need air plus a low block-light level; fire (but not
soul fire) blocks spawns. Clearing the spawner raises the share of valid spawn spaces. Mescht's
Blaze Practice map shows this as "Blocked / Too Bright / Available" percentages: an untouched spawner
sits at about 49–50% available; one fire can drop it to about 11%
(Calisthenicuber 14:32–15:02 https://youtu.be/71ABl45UyAE?t=872). Soul sand edges both stop blazes
drifting off and turn their fireballs into soul fire, which does not block spawns (Hax 1:46–2:20
https://youtu.be/Ts2cRIz-MOc?t=106).

Ranked-specific: blaze spawn timing and positions are standardized (same attempts for both players),
and a spot blocked by fire, a block, an entity or the player loses that blaze (ranked-context.md). So
clearing matters exactly as in vanilla, but both players face the same spawn attempts, making
clearing quality a direct head-to-head difference.

### Decision rules (JackoWacko62 pinned comment, 2026)

- Do the best setup you can **while still keeping enough explosives for your one cycle / zero
  cycle**.
- Exception: with **4+ TNT**, always do **3 TNT on an open spawner** and **4 TNT on a closed
  (buried) spawner**.
- Also weigh how many rods you already have and whether you still need to craft.
- A setup with no open/closed label works for both.
- Order matters for 4 TNT and for 3 TNT (back first, then front) or you risk destroying the spawner.
- Several counts have two options: a **faster** one that clears less (use when you already have some
  rods) and a **better** one with the most clearance.
- For the nether brick fence setups, hug the spawner when the TNT goes off to take the least damage.
- 2 TNT + 1 bed is listed closed-only because 1 TNT + 1 bed is already enough on an open spawner
  (Jacko reply in comments).

Source: pinned comment on https://www.youtube.com/watch?v=n11v-59LJnA. Credits in the description:
DanielH212 (original 2 TNT + 1 bed), Zuzurie (1 TNT + 1 bed crafting-table overlap), Fyroah (4 TNT),
crossroads198x (many setups including the fence ones), Aquacorde (review).

### Every setup in the Jacko video

Explosion behaviour shared by all: TNT creates no fire; beds do, so bed setups need fire cleanup
afterwards (Calisthenicuber 12:57 https://youtu.be/71ABl45UyAE?t=777). Beds explode only when used
in the Nether; a hard block on the spawner (nether brick) shields it.

| Chapter | Setup | What is shown (frames, plus matching descriptions in other guides) |
| ------- | ----- | ------------------------------------------------------------------ |
| 0:00 https://youtu.be/n11v-59LJnA?t=0 | **1 bed, open spawner** | Hard block on top of the spawner, soft blocks (soul sand) stacked, bed placed above, detonated from a step away; then put out all fire, mine two blocks out the back and one down the sides, soul sand platform. Calisthenicuber describes the same: "solid block on top of the spawner, two soft blocks, then a bed" (7:39 https://youtu.be/71ABl45UyAE?t=459). |
| 0:10 https://youtu.be/n11v-59LJnA?t=10 | **1 bed, closed spawner** | Spawner in a netherrack-roofed hallway: mine up into the roof above the spawner, hard block on the spawner, bed placed in the roof cavity, detonate; heavy fire to clear afterwards. Hax: "place a block on top of the spawner, break this block here, then blaze bed" (2:29 https://youtu.be/Ts2cRIz-MOc?t=149). |
| 0:20 https://youtu.be/n11v-59LJnA?t=20 | **2 beds, option 1** | Hard blocks on the spawner, two beds (Calisthenicuber: "hard block, hard block, bed, bed"; from the back: "block, bed, pick block, block, bed", 9:00–10:10 https://youtu.be/71ABl45UyAE?t=540). Jacko adds 3 blocks at the front so the cleared floor is level and you don't hop up and down; optional, placed while moving. |
| 0:31 https://youtu.be/n11v-59LJnA?t=31 | **2 beds, option 2** | Shown on a closed (netherrack) spawner: beds placed at the sides of the spawner. Calisthenicuber calls 2-bed on buried "immaculately" cleared (13:11). |
| 0:41 https://youtu.be/n11v-59LJnA?t=41 | **1 TNT + 1 bed, option 1** | Place TNT, light it, open the crafting table and craft during the fuse, then place the bed; TNT goes first, bed second. |
| 0:54 https://youtu.be/n11v-59LJnA?t=54 | **1 TNT + 1 bed, option 2** | Variant with gravel/soul sand and nether brick positioning the bed and TNT differently. |
| 1:06 https://youtu.be/n11v-59LJnA?t=66 | **1 TNT + 1 bed (bed uncrafted)** | Crafting table placed beside the TNT; light the TNT, then craft the bed from wool and planks during the fuse and place it (Zuzurie's overlap). |
| 1:20 https://youtu.be/n11v-59LJnA?t=80 | **2 TNT + 1 bed, closed only** | DanielH212's netherrack-enclosed setup: TNT on both sides, bed above. Original: https://www.youtube.com/watch?v=Z0zCbbjKhJ8 |
| 1:32 https://youtu.be/n11v-59LJnA?t=92 | **1 TNT, option 1** | The faster, lower-clearance one: TNT placed behind the spawner, then mine remaining blocks. Use when you already have rods. |
| 1:46 https://youtu.be/n11v-59LJnA?t=106 | **1 TNT, option 2, buried** | Uses a **nether brick fence** to hold the TNT at the right height; hug the spawner during the blast. |
| 2:04 https://youtu.be/n11v-59LJnA?t=124 | **1 TNT, option 2, open** | Fence-height trick on an open spawner, then soul sand platform. |
| 2:26 https://youtu.be/n11v-59LJnA?t=146 | **2 TNT** | TNT on soft blocks either side (Calisthenicuber: "hard block, soft soft, hard block, soft soft; light both", 10:24 https://youtu.be/71ABl45UyAE?t=624). |
| 2:40 https://youtu.be/n11v-59LJnA?t=160 | **3 TNT (order matters)** | Two TNT at the back, one at the front; **light the back two first, then the front**. Usually leaves 1–3 blocks. Overlap: set it up, light the back pair, then place the last TNT (Calisthenicuber 11:23–12:13). A commenter destroyed two spawners by putting the back TNT *behind* the soul sand instead of on top. Jacko crafts during the fuse (a boat in the frames). |
| 2:56 https://youtu.be/n11v-59LJnA?t=176 | **4 TNT (order matters)** | Fyroah TNT, a reduced "raised donut": light **both side TNTs first, then the rear, then the front**. Superseded in safety by Daniel's fix below. |

Older 4-TNT forms named by Daniel: **TNT donut** (four TNT around a buried spawner; fast but often
leaves hard blocks), then **raised donut** (more consistent, slower, still leaves hard blocks),
then Fyroah TNT (Daniel 0:02–0:34 https://youtu.be/CtKAhqXPAzc?t=2). Calisthenicuber still shows a
plain donut and rates 3 TNT about equal or better (11:06 https://youtu.be/71ABl45UyAE?t=666).

Practice map with clearance overlays: Mescht's Blaze Practice https://github.com/Mescht/Blaze-Practice

### The "complex 4 TNT" fix (Daniel_H212, 2026-07)

- Failure: TNT jumps a little in a random direction when lit. If both side TNTs jump toward the
  rear and the rear TNT jumps sideways, the explosions knock the rear TNT around until it has an
  angle past the rear nether brick and destroys the spawner. Command-block testing: 28 failures in
  10,000 attempts, about **1 in 360** (description;
  explanation 1:30–2:35 https://youtu.be/CtKAhqXPAzc?t=90).
- Fix A: soul sand on both sides of the rear TNT, so it cannot drift far enough to be knocked.
  No failures in about 4,000 tries; faster to build; Daniel was not fully confident it is impossible
  (2:39 https://youtu.be/CtKAhqXPAzc?t=159).
- Fix B (recommended): blocks that stop the side TNTs bouncing backward; clears as well as Fyroah,
  over 5,000 tests without a failure (3:16 https://youtu.be/CtKAhqXPAzc?t=196).
- Pinned-comment update: for Fix B, blocking **either** side is enough (failure needs both side TNTs
  to jump back), whichever side you light first. For Fix A, tested over 10,000 times, only one soul
  sand is needed, but only the one on the side of the **second** TNT can be omitted, not the first.
  A commenter (drakou111) reports 200,000 safe trials of the first setup.
- An "extra nether brick near the back TNT" seen in top runners' setups is another safe variant
  (Daniel, comment reply).
- Auto-light: an auto-lighting 4-TNT setup used by doogile, EDCR and pavkin is "more mechanically
  advanced and still safe"; posted in the Ranked Discord resource thread (not accessible here).
  Per pavkin (relayed by Daniel), auto-lighting is fine if both side TNTs are lit within 0.5 s of
  each other.
- Lighting: Daniel uses fire charges in the frames.

Related: Daniel's basalt-enclosed bed + 3/4 TNT https://www.youtube.com/watch?v=ojpxICM0jF4;
crossroads198x "bed TNT spawner setup idea" ("blazetent", universal open/buried, symmetric)
https://www.youtube.com/watch?v=PPqdVhPtSCs (2025-06); crossroads198x "Blaze Spawner TNT Setups"
https://www.youtube.com/watch?v=Gzlrx8vB8V8 (2023, older).

### crossroads198x spreadsheet ("Spawner First to % Trials")

Readable. Method: time from the first jump up the stairs until the practice map's available-space %
reaches the goal (FT80/FT85/FT90/FT95), blocks already in the hotbar, about 10 trials per setup,
crossroads198x's own mechanics; differences under 0.5 s are noise. Baseline 45.9% open, 45.1% closed.
A buried spawner with no nether brick left counts as 85% (89.4% with a back row of netherrack).
"Blazes are more likely to spawn closer to the spawner. This map does not capture this", so a donut
bed is worse in real runs than in the sheet. Lower goals (FT80) suit high rolls or arriving with
rods (early explosions, easy fire); higher goals (FT95) suit "a longer spawner split like ranked" or
arriving with no rods. Thanks to "soup" for newer setups.

Selected times (seconds):

| Setup | FT80 | FT90 | FT95 |
| ----- | ---- | ---- | ---- |
| 1 bed open, best | 6.4 (back bed 4.1) | 9.7–9.8 | 14.1–15.9 |
| 2 bed open, best | 5.3 (double side bed) | 5.3 | 5.3 |
| 1 TNT open | 11.1–11.4 | 14.0 (fence setup) | 18.1 (fence + soul sand) |
| 2 TNT open | 6.9 (front + back elevated) | 6.9 | 9.8 |
| 1 bed + 1 TNT open | | 4.7–4.8 (autolight setups) | 5.2 (soul sand back bed autolight) |
| 1 bed buried | 10.9 (protected meta) | 17.9 (protected meta) | |
| 2 bed buried | 10.0 (double side bed) | 10.7–11.0 | |
| 1 TNT buried | 13.6 (fence) | 18.7 (fence) | |
| 2 TNT buried | 7.0 | 10.4 | |
| 1 bed + 1 TNT buried | | 7.4 (soul sand back bed autolight) | |

The notes list 3 TNT and 4 TNT columns, but they are not present in the CSV export
(**unconfirmed** whether they exist in the sheet). CSVs:
`dl/sheet/g*.csv`.

### Faster vs cleaner, by rod count

ClearColdWater's simulator (frontcage /t/65) gives a table of how many more seconds to spend
clearing before switching to overlaps, by rods held, seconds of clearing done and seconds of
overlaps left. Headline results:

- With an open single blaze bed and **4 rods after the first wave**, still blaze bed but only build
  out the back (about 15 s of clearing) before moving to overlaps.
- At **5 rods**, the solved strategy for both blaze bed and iron-pick mining is "do overlaps first",
  then single blaze bed if overlaps are done (0.3 s gain).
- Each extra rod (stray blaze) before the spawner is worth about **7 s** with open single blaze
  bedding; the last two rods are worth more since you may skip the spawner.
- Blaze bed vs mining out with an iron pick: bed saves 20.5 s (open) / 19.5 s (closed) on average,
  but only 5.2 s / 4.9 s once you have 4 rods after the first wave.
- Lava above the spawner: 15 of 100 sampled spawners, 6 of them hard to block.
- Follow-up (2026-01-11): crafting beds at the spawner instead of at the bastion after trades are
  done saves about 1.73 s.

Skill level: Calisthenicuber pitches spawner setups as something few people practice, so practicing
them "gaps" opponents (9:38 https://youtu.be/71ABl45UyAE?t=578). Jacko's commenters frame learning
the Fyroah setup as an Emerald→Diamond step. No source gives an Elo threshold; treat 1-bed and 2-bed
as early (Gold/Emerald), 3/4 TNT order-dependent setups as Emerald+ (**unconfirmed** placement).

---

## 2. Double spawner play

Sources found are thin; most of this is game mechanics plus scattered pro observations.

- **Spawner mechanics (game code, from memory)**: a spawner only ticks while a player is within
  16 blocks; it spawns up to 4 mobs per wave in a box 4 blocks around it, waits 10–40 s between
  waves (200–799 ticks), and its very first wave after generation comes 20 ticks (1 s) after a
  player first gets in range. A wave is skipped if 6 blazes are already within the check volume.
  7rowl confirms the cap: "if there is six blazes within 9 by 9 by 9 volume centered on the
  spawner, it won't produce any spawns" (Grand Final 2:35 https://youtu.be/MRCKrEIFzj0?t=155).
- **Triggering the first wave of the second spawner**: because a fresh spawner fires about 1 s after
  you come within 16 blocks, walking into range of a second spawner gets you a free wave right away,
  independent of the first spawner's cooldown. That is the logic behind "triggering" it; the term
  appears in no source I found (**unconfirmed** as a named technique).
- **Ranked**: blaze spawn timing and positions are standardized per spawner, so both players get the
  same first wave if they trigger it.
- **Blind portal position**: the portal is built while waiting for waves, so building it where you
  stay within 16 blocks of both spawners keeps both ticking during crafting and the portal build.
  crossroads198x built a portal at a spawner ("Blaze Spawner Portal v1", 2022, "shouldn't affect
  blaze spawn rates; it's 4 blocks away" https://www.youtube.com/watch?v=k-IcaB0wKKM).
  Calisthenicuber builds the blind portal "across from my crafting table" at the spawner as an
  overlap (21:12 https://youtu.be/71ABl45UyAE?t=1272). 7rowl notes runners break the Nether portal
  near the spawner not for light but because blazes knocked into it teleport to the overworld
  (Grand Final 9:45 https://youtu.be/MRCKrEIFzj0?t=585). A guide on positioning a portal to cover
  two spawners: **unconfirmed**, none found.
- **Second spawner as backup**: 7rowl on a Ranked playoff seed: crafting a third bed in the bastion
  "can also help if the spawner is fully covered in lava after the blaze bed, since you can
  immediately blaze bed the second spawner" (Grand Final 5:05 https://youtu.be/MRCKrEIFzj0?t=305).
- **Spawner split post** (frontcage /t/65) covers a single spawner's clearing vs overlap trade-off
  (see section 1), not double spawners. Its usable rule for double spawner play is the value of a
  rod (about 7 s per extra rod) and that strays outside the spawn box don't block spawns: kill them
  while waiting for the next wave rather than delaying the clear (7rowl Grand Final 2:08–2:30,
  lowkey's clip).

Skill level: none stated. Mechanics are simple; positioning the portal is Diamond-level optimisation
(**unconfirmed**).

---

## 3. Good side vs bad side

- **Good side**: open bridges (or netherrack-roofed corridors) where blaze spawners generate.
  **Bad side**: roofed nether brick hallways with chests and no spawners.
- **Rules** (Hax, Calisthenicuber and the MCSR wiki agree):
  - Nether wart staircase room: go **down the stairs and straight through**; Hax phrases it as
    "go the opposite direction" of the wart room's staircase.
  - **Balconies**: go the **opposite** direction. (nether.md also has "or perpendicular".)
  - Plain **stairs**: always go **up**.
  - The **lava-well room** (single lava block) is always the transition: good side on one side, bad
    side on the other. The MCSR wiki: "This room is connected to an intersection around which
    spawners tend to generate."
- If the fortress is open you usually just see the good side and pearl to it.
- Chunk counting from the pie-ray gives the spawner's chunk line when the fort is buried
  (JackoWacko62 analysis 6:40 https://youtu.be/PldGU-mE7sw?t=400; Coach Side's chunk counting guide
  https://www.youtube.com/watch?v=4rgxlbTHixQ).

Sources: Hax 0:00–1:21 https://youtu.be/Ts2cRIz-MOc; Calisthenicuber 2:57–4:17
https://youtu.be/71ABl45UyAE?t=177; MCSR wiki https://mcsr.miraheze.org/wiki/Nether_fortress.
Not Ranked-specific (the Ranked filter only guarantees fortress origin within 16 chunks of the
bastion and open terrain from it). Beginner skill (Coal/Iron).

---

## 4. Wither skeleton handling

Wither skeletons are 3 blocks tall (they cannot pass a 2-high gap) and path toward you, which every
method exploits.

| Method | How | Source |
| ------ | --- | ------ |
| **Pillar and punch off (open side)** | Stack 3 blocks on the bridge (middle or beside the fence); withers gather on the two edges and you punch them off. With no ledge to stand on, go up 4 and place a block to the side; they path up and you push them off. | Calisthenicuber 4:17 https://youtu.be/71ABl45UyAE?t=257; Hax 5:01 https://youtu.be/Ts2cRIz-MOc?t=301; meebie 2:20 https://youtu.be/0-nB-3Z61wQ?t=140; Mikeyboie 83:28 (build up 2 beside the fence so they are 2 below you) https://youtu.be/JsFcAeBXVpk?t=5008 |
| **Place a block to trick them off a ledge ("L shape")** | On the bad side there is no edge: stack 3 at the very edge and place one block forming an L; withers jump onto it, push each other off, or get punched off. | meebie 3:10 https://youtu.be/0-nB-3Z61wQ?t=190; Hax 5:28 |
| **Block off a hallway (enclosed)** | Since they are 3 tall, block either the top or the bottom of a passage so they cannot pass but you can (hoglins and skeletons still can). Or build a small wall in the closed part. | meebie 2:47; Calisthenicuber 4:35 |
| **Block off in an open hallway / spawner area** | When AFK at a spawner and worried about late withers: dig up two on one side and build a line all the way across; withers cannot walk through. Calisthenicuber blocks the hallway entrances to the spawner pre-emptively. | meebie 3:00; Calisthenicuber 5:05 |
| **Trap in an enclosed hallway** | In a buried part: make a pathway (one block in front of you, a line, then capping it). They walk in and can't jump over; once they gather at the end, block any height on the other side and they are stuck forever. | meebie 3:27 https://youtu.be/0-nB-3Z61wQ?t=207 |
| **Pass them** | Calisthenicuber prefers building a pathway past them over killing ("make this pathway and pass them"). Mikeyboie: aggro them, then build a barrier blocking their path. | Calisthenicuber 4:43; Mikeyboie 84:23 |
| **Fire pathing** | Withers avoid fire: place fire (fire charge, flint and steel) on a bridge so they route onto the edge, then sprint-hit them off. | Mikeyboie 83:10; Hax 5:16; Vglz56 "Fire pathing kill" (2022) https://www.youtube.com/watch?v=ekFa74-Mc9M |
| **Lava on the side** | Lava placed beside a bridge where withers are stacked: they path into it and fall. | Mikeyboie 84:00 |
| **Others (2022 list)** | Edge tower, sideblock pathing (normal, stuck, multiple), block off (regular, kill, juke), PKFO, ledge to ledge, wither ghosting, edging + sprint jumping. Chapters only, no subtitles; not reviewed. | Vglz56 https://www.youtube.com/watch?v=ekFa74-Mc9M |

Context: soul sand valley fortresses and low (dynamic) render distance raise wither numbers
(Mikeyboie 82:50; Calisthenicuber 7:07). Not Ranked-specific: Ranked does not change wither
skeletons (they are built-in fortress spawns, unaffected by the bastion no-monster rule). Beginner
to intermediate skill; the trap/block-off variants are standard at all levels.

---

## 5. Looting sword

- **What**: a sword with Looting raises blaze rod drop chance and count. Mikeyboie got 9 rods from 3
  blazes in his demo (86:12–87:05 https://youtu.be/JsFcAeBXVpk?t=5172).
- **Kill pattern**: axe crit, weak (half) axe hit, then sword crit (Mikeyboie: "crit with your axe,
  hit them half with your axe, then crit them with the sword"); Calisthenicuber: full crit, small
  hit, weak axe swing; or full axe crit then two gold-sword crits (18:47–19:18
  https://youtu.be/71ABl45UyAE?t=1127). The final blow must be the looting sword.
- **Never blaze bed with a looting sword**: it is unnecessary (Calisthenicuber 18:51); explosion
  kills don't benefit from Looting (game code, from memory: Looting only applies to the killing
  weapon).
- **Where they come from**: ruined portal chests (golden swords can carry Looting; Mikeyboie Part 1),
  the bottom of treasure (enchanted diamond swords sometimes; Calisthenicuber 19:51), and bastion
  chests in general. Baudox's "Landing Pad Pearl Hang" treasure route is partly a way to "quickly
  high roll a looting sword" (2021 https://www.youtube.com/watch?v=NrsL_qKzuSE).
- **Elsewhere**: no source in this session cites using looting on other mobs (e.g. hoglins for food,
  endermen for pearls) in Ranked runs (**unconfirmed**).
- **Ranked**: blaze rod drops are RNG-standardized. Whether the standardization models Looting, or
  how, is **unconfirmed**. The ruined portal filter can satisfy its fire requirement with a Fire
  Aspect sword; Looting is never guaranteed.

Other weapon notes from the same sources: diamond sword kills a blaze in two crits with no cooldown
wait (fastest); iron axe crit + iron sword crit beats axe-only; stone sword works too.

---

## 6. Pre-crafting

### Bastion pre-craft (beds, iron axe or sword)

- While waiting on trades, runners "usually spend time pre-crafting a bed and iron axe" (7rowl on
  Efim's triple triple, where he skipped it because a temple seed already gave an iron axe; 0:55
  https://youtu.be/SaVQ1Etlfoc?t=55).
- Crafting 3 beds instead of 2 in the bastion when a second blind or a lava-covered spawner is
  possible; costs an inventory slot (7rowl Grand Final 5:00 https://youtu.be/MRCKrEIFzj0?t=300).
- Jacko crafts his gold helmet and gold pick (two, on a block-hungry bridge route) on entry, because
  without TNT to overlap there's no reason to wait (analysis 4:40 https://youtu.be/PldGU-mE7sw?t=280).
- Counterpoint: if trades are already done, crafting beds at the spawner saves about 1.73 s over
  crafting them at the bastion (ClearColdWater, frontcage /t/65 follow-up). So pre-craft only while
  you are waiting on piglins anyway.

### Fortress pre-craft (explosives and bow)

- Calisthenicuber crafts wool, bow sticks and glowstone in the inventory grid between blaze waves,
  then search-crafts the bow ("TB") and beds plus anchors ("TRE", which matches red bed and respawn
  anchor) before building the blind portal (17:20–21:09 https://youtu.be/71ABl45UyAE?t=1040).
- Some runners do not craft explosives before blinding (7rowl on one finalist, Grand Final 5:05).
- With few explosives, one finalist blinded as soon as he had a rod to check for sheep on the
  overworld side, so he could blaze bed on return and still keep enough for the zero cycle (7rowl
  Grand Final 2:50 https://youtu.be/MRCKrEIFzj0?t=170).

Not Ranked-specific. Intermediate skill.

---

## 7. Crafting and eating while pearling

- **Crafting during a pearl in flight / pearl hang**: one Ranked finalist crafted eyes while waiting
  for a second pearl; 7rowl criticises crafting blaze powder while landing a blind pearl hang near a
  ledge, because you should be ready to block- or boat-clutch instead (SaVQ1Etlfoc 3:40–4:28
  https://youtu.be/SaVQ1Etlfoc?t=220).
- **On the way to the fortress**: nether brick blocks, glowstone and wool are all inventory-grid
  (2×2) crafts, so they can be done mid-air. Calisthenicuber lists wool, bow sticks
  and glowstone as the crafts to do "in your little hotbar thing" (2×2 grid) during blaze fighting
  (17:36 https://youtu.be/71ABl45UyAE?t=1056). A source that names doing them specifically while
  pearling to the fortress: **unconfirmed**. Nether brick blocks need a 2×2 of brick items, so they
  can also be inventory-crafted; a source for doing it while pearling: **unconfirmed**.
- **On the way to the stronghold**: beds, anchors, TNT and bows need a crafting table, so they
  cannot be crafted mid-pearl. Eyes (blaze powder + pearl) and blaze powder are 2×2 crafts and are
  done mid-pearl (7rowl above). "Explosives + bow while pearling to the stronghold":
  **unconfirmed**, and mechanically only possible with a crafting table you are standing at.
- **Eating while pearling**: Jacko, on one and a half hearts entering the End: "I'm just going to eat
  in the middle of my pearl" (analysis 19:24 https://youtu.be/PldGU-mE7sw?t=1164); he also eats
  through the portal animation with a block over his head to jump. 7rowl: eating a golden apple
  through the portal animation (SaVQ1Etlfoc 1:40). Calisthenicuber: with food in the offhand you
  can eat between blaze swings (17:18).
- Head hitters to drain hunger faster do **not** speed up eating: with full hunger and zero
  saturation natural healing takes 4 s, and you'd need 8 head hitters in that window (7rowl Grand
  Final 1:40 https://youtu.be/MRCKrEIFzj0?t=100).

---

## 8. Pick block (middle click)

What it does in survival (game code, from memory): if the targeted block's item is in your
inventory, pick block moves it into the hotbar (or selects it if already there). It is a fast way to
refill a hotbar slot without opening the inventory.

| Use | Source |
| --- | ------ |
| Double blaze bed: "block, bed, pick block, block, bed" to re-select the hard block between beds. | Calisthenicuber 9:58 https://youtu.be/71ABl45UyAE?t=598 |
| Keep a fire res potion in the obsidian slot when building the nether portal; drink during the portal animation, then pick block the obsidian to fix the hotbar. | meebie 5:16 https://youtu.be/0-nB-3Z61wQ?t=316 |
| Restocking blocks: a finalist drops the soul sand stack in his hotbar and pick-blocks ("quick blocks") another full stack from the inventory. | 7rowl 3:22 https://youtu.be/SaVQ1Etlfoc?t=202 |
| Nether brick while clearing the spawner (pick the spawner's nether brick) | Plausible from the above; no source names it (**unconfirmed**). |
| Obsidian after the blind (pick obsidian from the portal to set up the next portal / zero cycle) | **Unconfirmed**; meebie's tip is the closest. |

Not Ranked-specific. Ranked rebind rules allow one key per input; pick block is a normal input.

---

## 9. Few fire resistance potions

Ranked: barter standardization guarantees obsidian and pearls, not fire resistance (see
ranked-context.md), so low-fire-res seeds happen to both players equally.

What sources say to do:

- **Spend potions only where fire matters**: blazes deal mostly fire damage; with fire res they are
  "basically free" (Mikeyboie 17:42 https://youtu.be/JsFcAeBXVpk?t=1062). Prioritise the fortress.
- **Fort without fire res ("fort first" techniques)**: shield in the offhand; blazes fire in
  predictable 3-shot bursts; consider not clearing the spawner since more blazes means more fire;
  an enchanted golden apple gives 5 min fire res (Calisthenicuber 5:16–6:33
  https://youtu.be/71ABl45UyAE?t=316). Clearing is "always the faster play but not the safer one".
- **Soul sand edges** make blaze fireballs create soul fire instead of fire (Hax 2:06).
- **Splash at your feet**: with plenty of fire res, throwing it at your feet is faster than in the
  air (crossroads198x hunger reset note https://www.youtube.com/watch?v=qwlvJ4PRscI). Splashing
  fire res while standing in the portal (Mikeyboie 59:46).
- **Hotbar habit**: always keep a fire res in the same slot when leaving the bastion (Jacko analysis
  9:05); keep it in the obsidian slot and drink during the portal animation (meebie 5:16).
- **Lava travel**: put fire res on before lava so you surface immediately and can crawl (7rowl Grand
  Final 1:18).
- **Avoid lava routes** (lava-flooded bastions, lava lakes) when low; use blocks or a boat.
  Death resets lose fire res, so after a hunger reset reapply it (MCSR wiki Hunger resetting).

A structured guide on "optimizing for seeds with few fire res" (e.g. how many to leave the bastion
with, when to drink vs splash): **unconfirmed**, not found.

---

## 10. Piglin aggro states

Three tiers, consistent across T_Wagz (2021, measured), Rysel (2026 playoffs dump), ThugMCSR (2026)
and Daniel_H212 (2026):

| Tier | Cause | What ends it | Notes |
| ---- | ----- | ------------ | ----- |
| **Tier 1 / light ("partial")** | A piglin sees you without gold armor. | Putting on gold armor, or losing line of sight; gold items distract. | Range about 15.5 blocks, line-of-sight based (the piglin must be able to see you, not be facing you). Sneaking reduces the range by about 3 blocks. |
| **Tier 2 / medium** | Opening a chest (line-of-sight, short range), breaking a chest or gold-type block (16 blocks from **your feet**, no line of sight needed). | Only a gold distraction (ingot or gold item within 8 blocks and directly in view). Gold armor does nothing. | |
| **Tier 3 / heavy ("full")** | Hitting a piglin. | Nothing; lasts about 20–30 s. The hit piglin won't barter during that time (about 10 s before a punched piglin starts trading per 7rowl). | Centered on the **damaged piglin**, so it can pull piglins far from you. |

Key interactions:

- **Piglins never upgrade between tiers**: a tier-1 piglin stays tier 1 when you open a chest or
  break gold. So you can open a chest (or break a gold block) in front of tier-1 piglins, put on
  gold armor, and they all de-aggro (T_Wagz 3:36 https://youtu.be/UjddqZzfOh8?t=216; ThugMCSR 1:21
  https://youtu.be/N52KYIJ8lZM?t=81; Rysel on-screen text around 2:12
  https://youtu.be/P447D09M2b4?t=132; Daniel 11:44 https://youtu.be/eUydRTXQ6tQ?t=704).
- **Distracted (admiring) piglins are not upgraded either**: "If they were previously not T2
  aggroed and are distracted/T1 aggroed, breaking a gold block does nothing" (Rysel).
- **Punching overrides every tier** (Rysel; T_Wagz "heavy tier always trumps").
- **The downside of tier 1 for routes**: piglins re-check about once a second; a tier-1 piglin that
  loses sight of you forgets you, gets stuck, and becomes a late pig. You want tier 2 so they follow
  you to the hole. To convert tier-1 to tier-2 you must first break line of sight so they lose tier
  1, then break the gold block (Daniel 0:48–2:42 https://youtu.be/eUydRTXQ6tQ?t=48, treasure start).
- **Why punching is situational**: punching guarantees chasing (tier 3) and alerts nearby piglins,
  but that piglin won't trade for a while. Mining a chest or gold block gives tier 2 to everyone in
  16 blocks of you while keeping them all able to trade immediately; Feinberg mined a chest for
  aggro when no piglin was near enough to punch (7rowl Grand Final 0:53
  https://youtu.be/MRCKrEIFzj0?t=53). Mining a chest with an iron axe is faster than a gold block
  with an iron pick.
- **Position matters**: aggro range is centered on you, so break the first gold blocks from far back
  to avoid aggroing piglins below that would drop on you (Daniel 0:00).
- **Game-code reading (from memory, unverified)**: tier 1 is attack-target selection
  (nearest visible player not wearing gold); tier 2 is the `angerNearbyPiglins` call, which only
  affects piglins that are idle (not fighting, not admiring) and, for chest opening, only those that
  can see you; tier 3 is the hurt reaction, which disables admiring for 400 ticks (20 s) and
  broadcasts anger to nearby adults. This explains the no-upgrade rule.

Related pathing: "acute piglins" get stuck against stairs or blocks because their path skips nodes
when the angle is acute; a placed stair can prevent it (Rysel 3:46
https://youtu.be/P447D09M2b4?t=226; pathfinding research credited to GravityShark, ABS community).

Not Ranked-specific; Ranked only removes non-built-in monsters from bastions. Intermediate
(Gold–Emerald) knowledge; ThugMCSR says Gold–Diamond players still make the armor mistake.

---

## 11. Pearl hang from the bastion toward the fortress

- **Mechanism**: throw a pearl, drop render distance to 2 (pause to make it instant); once the pearl
  is more than 2 chunks away it is in unloaded chunks and frozen. Do whatever you need, then raise
  render distance and it resumes and lands (Mikeyboie 69:18–70:58 https://youtu.be/JsFcAeBXVpk?t=4158).
- **Use**: throw toward the fortress while the last trades finish, then release. Jacko: "Something
  else I should have done here is pearl hang"; wait on the hole for the last trades with your spare
  gold in a corner, grab it and release (analysis 8:08 https://youtu.be/PldGU-mE7sw?t=488).
- **Keep your piglins trading**: lowering render distance also unloads your piglins. doogile's pearl
  hang unloaded his pigs when he crossed into the other rampart; with ramparts 4 chunks apart, use
  render distance 4 if you want them to keep trading (7rowl 6:57 https://youtu.be/SaVQ1Etlfoc?t=417).
- **Portal chunk loading**: a portal keeps a 3×3 chunk area loaded for 15 s after use, so you can't
  hang straight up next to it; pearl away horizontally so the pearl unloads (7rowl Grand Final 3:00
  https://youtu.be/MRCKrEIFzj0?t=180).
- **Other hangs**: toward the second (blind) portal from a buried fortress, toward the fort from the
  overworld when leaving on 11 eyes (7rowl clips), and the treasure spawner-break hang (nether.md).
  Rysel: the Crispy hole position is better for the pearl hang (nether.md, Crispy).
- **Allowed**: render-distance changes are normal settings, legal in Ranked.

Intermediate–advanced (Emerald+), **unconfirmed** placement.

---

## 12. Buried bastion knowledge and lineups

Found (Rysel on-screen text, 0:00–1:43 https://youtu.be/P447D09M2b4):

- Buried triple rampart (any bastion): dig on the **7th block out from the middle part** of the
  rampart.
- Stables buried with no info: check to the right; if there is terrain, you are guaranteed in the
  right rampart. A specific basalt formation seen from the left rampart means a middle single (only
  true from a side rampart).
- Lower treasure entry heights: Y59 can contain the basalt chest; Y63 is the top/middle wall
  transition (extra pigs can enter there); the bridge entrance is at Y68; Y73 is the last useful
  entrance, from above the top variation. Avoid digging into the middle of the wall unless buried or
  low on blocks.
- Treasure lower back: dig in at the squares of brick to reach internal spiral paths up (Daniel
  5:48 https://youtu.be/eUydRTXQ6tQ?t=348). Treasure with no iron pick: count 3 blocks along the
  lava and dig in to a chest that always lines up (Daniel 3:10).
- Bridge from the top: three ways to the front, between the "eyes" or through either "nostril"
  (Daniel 19:20).

Pearl lineups:

- Housing gold area to the top triple: crouch to the edge of the black zone, look straight up, jump
  and throw, hold W; "pretty sure 100% consistent" (ThugMCSR 3:45 https://youtu.be/N52KYIJ8lZM?t=225).
- crossroads198x: "Housing Pearl (Trading to Triple Chest)" https://www.youtube.com/watch?v=9QN2_gLhI4E,
  "Stables Pearl (Gap to Triple Chest)" https://www.youtube.com/watch?v=lm4ODE5G-GA, "how to enter the
  back of a stables triple" https://www.youtube.com/watch?v=jsQrJhxVea8 (not reviewed).
- Stables gap checks and housing monkey-chest patterns: Daniel 12:25 and 14:41.

A consolidated "buried bastion locations" reference: **unconfirmed**, not found. Ranked: the
bastion filter guarantees open terrain from the nether entry, which reduces but doesn't remove
buried bastions (ramparts can still be buried).

---

## 13. Boats in the piglin pit and for going up

- **Out of a pit or cage**: place a boat, get in, get out; dismounting puts you on the highest free
  spot, gaining height. 7rowl: a runner who fell into an End cage "uses a boat to get out ... when
  you're using a boat you gain four blocks of height" (2:06 https://youtu.be/SaVQ1Etlfoc?t=126;
  frames show Y82 → Y85 → Y87). Same mechanism applies to a piglin trading hole (**unconfirmed** in
  a bastion-specific source).
- **Gravel**: drop gravel or soul sand on yourself or the hole to rise (gravel collection lifting
  items is in nether.md). As an exit method from a pit: **unconfirmed**. A misplaced block letting a
  piglin reach you: instead of punching the gravel, place two blocks (Efim clip, 7rowl 1:20).
- **Boat to travel upwards** in bastions: boat down into buried treasure without head suffocation by
  sprint-punching the boat forward and then entering (Daniel 5:26 https://youtu.be/eUydRTXQ6tQ?t=326);
  boat down after blocking pigs on bridge (Daniel 19:52); bottom stables chest without a boat
  (7rowl Grand Final 7:13). Repeated boat dismounts to climb inside a bastion: **unconfirmed**.
- Catching knocked-off blazes: place a boat where a blaze fell; it often enters and you kill it
  (Calisthenicuber 17:59); enter the boat right after so the rod isn't pushed away (7rowl Grand
  Final 9:16).

---

## 14. Digging out the bottom of a gravity block

**Unconfirmed.** No source found describes mining the bottom of a sand/gravel column to walk through
it. Please supply the clip or runner name. (Related, but different: the gravel hunger reset, where
you stand crouched under falling gravel: crossroads198x https://www.youtube.com/watch?v=DCrOT3t7ciM.)

---

## 15. Early blind portal to hunger reset

Exists as a combination, not a named technique:

- **Ocean blind hunger reset**: at the overworld side of a blind (often an ocean), place a bed so
  its pillow hangs off the obsidian, die, respawn in the hole (crossroads198x 2023
  https://www.youtube.com/watch?v=NJzspga_AA4; thecamo6 2024 https://www.youtube.com/watch?v=zcaWZh74TQw;
  JOURONA's "Every Useful Death Reset" lists it as "Ocean Blind Death Reset (best way)" 2025-12
  https://www.youtube.com/watch?v=rhHjI8Ri84k, reposted by MCSR Wiki https://www.youtube.com/watch?v=YEYCcjeZAx8).
  Beds work in the overworld, anchors only in the Nether.
- **Blinding early**: a finalist "blinds as soon as he gets a rod" when low on explosives to check
  for sheep on the overworld side, then blaze beds on return (7rowl Grand Final 2:50). Another plans
  a hunger reset at a buried fortress, then sets up a pearl hang toward the second portal on return
  (7rowl 4:59 https://youtu.be/SaVQ1Etlfoc?t=299).
- Blinding before finishing rods specifically **to** hunger reset: **unconfirmed** as a documented
  strategy; the pieces above make it possible, and Jacko says blinding on 5 rods is "completely
  fine" (analysis 10:40).
- Hunger reset mechanics (pearl, lava/fire, gravel, fall damage, item containment): MCSR wiki
  https://mcsr.miraheze.org/wiki/Hunger_resetting.

---

## Open items

- Exact block placements of each Jacko setup are read from 1 fps frames; for diagrams, re-watch at
  full speed or use the practice map.
- 3/4 TNT columns in the crossroads sheet.
- Double spawner portal placement guide; pick block for nether brick and obsidian; gravity-block
  walk-through; boat climbing inside bastions; crafting explosives and bow while pearling.
- Whether Ranked's blaze rod standardization interacts with Looting.
- Game-code claims (spawner timing, piglin AI, pick block) are from memory.
