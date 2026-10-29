# Overworld research: follow-up items

Sources were read on 2026-10-29. Ranked filter and RNG facts come from the Ranked wiki source repo:
[seed.md](https://github.com/MCSR-Ranked/Wiki/blob/main/docs/gameplay/seed.md) and
[rng.md](https://github.com/MCSR-Ranked/Wiki/blob/main/docs/gameplay/rng.md) (rendered at
https://wiki.mcsrranked.com). Video timestamps are `m:ss`. Downloads (transcripts, frames) are in
`downloads/` next to this file.

Gaps in coverage: YouTube rate-limited subtitle downloads partway through. The Calisthenicuber Ruined
Portal guide (WVG146IN9M0), the MCSR Ranked "Portals (ft. Oxidiot)" explainer and Calisthenicuber's
Movement Guide Part 2 could not be transcribed. Points that depend on them are marked.

---

## 1. Village iron golem and village guarantees

**Golem drop.** In vanilla 1.16 an iron golem drops 3–5 iron ingots. Ranked's RNG standardization
makes it always drop exactly 4 ("never 3 or 5"). This confirms your belief.

**What Ranked guarantees on village seeds** (seed.md):
- The village is within 7 chunks.
- It contains a blacksmith. This is usually a weaponsmith, but can be a toolsmith in desert and taiga
  villages or an armorer in snowy villages.
- At least 7 iron, or 4 iron + 3 diamonds, counting the golem's 4. Food is in chests or hay bales.
- If the village has 10+ obsidian, the golem is the only guaranteed iron.
- A river biome lies within 6 chunks of the village centre.
- There are either 3 lava pools near the village, or 8+ obsidian in the blacksmith for an enter using
  the blacksmith's lava.
- Taiga villages always have a 10+ obsidian enter (lava pools still exist).
- Snowy and taiga villages appear only at 900+ Elo.
- Villager trade offers are standardized (rng.md): both players get the same trades.

**How runners kill the golem** (Calisthenicuber, "The complete Village guide for Ranked", 2026-02):
https://www.youtube.com/watch?v=N3EME1E431U
- 1:52 F3+B hitboxes help find it: it has the only 3-block-tall square hitbox and stays near the
  village centre and bell.
- 2:12 "Golem is always going to drop four iron in ranked. In RSG, he drops anywhere from 3 to 5."
- 2:15 Easy method: hit it, move where it cannot climb up to you, tower 3 blocks and crit it with an
  axe, waiting for the attack cooldown between crits.
- 2:45 Faster: with an iron sword from the blacksmith chest, crit on every jump. The sword has more
  damage per second and a shorter cooldown.
- 1:13 His checklist: count your iron first (blacksmith + 4 from the golem), then plan the crafts.

**Skill level:** the tower-and-crit kill is beginner-level. The sword crit-jump is the optimization.

## 2. Trading for a bucket on village seeds

**Unconfirmed as a runner technique.** No Ranked or RSG guide in the sources mentions trading for a
bucket. Treat it as niche at most.

- **Vanilla mechanics:** no villager sells an empty bucket. A fisherman's novice tier can offer
  *Bucket of Cod* for 3 emeralds. Empty the fish out (or keep the cod bucket as water) and you have a
  bucket without spending 3 iron. Fishermen get 2 random trades from their novice pool, so the offer
  is not always present. Sources: https://minecraft.wiki/w/Fisherman and the Sportskeeda article
  https://www.sportskeeda.com/minecraft/3-best-villager-trades-minecraft-speedrunners (low-authority
  source).
- **Cost:** you need 3 emeralds from chests, or from selling 20 string or 10 coal per emerald. You
  also need a fisherman (fishing barrel workstation).
- **Ranked:** trades are standardized between players, so both players see the same offers. Nothing
  says a fisherman or the cod-bucket trade is guaranteed. With 7 iron (including the golem) always
  guaranteed, a trade rarely beats killing the golem.
- **The free-bucket source runners do mention** is loot, not trades. Calisthenicuber at 6:10 in the
  village guide: savanna (acacia) village houses can contain a bucket. "Not saying you should play for
  getting a bucket in these houses every single time", but it can save killing the golem when the
  house is on your route. The Minecraft Wiki gives the savanna house chest an 11.3% chance of a bucket
  (https://minecraft.wiki/w/Bucket).

**Suggestion for the roadmap:** replace "trade for a bucket" with "savanna house buckets", or drop it.

## 3. Killing animals with a lava bucket

Your belief is half right. **Both** concerns are real, and Calisthenicuber names milking explicitly as
the main danger.

**Method** (Calisthenicuber, "The COMPLETE Desert Temple Guide for Ranked", 2026-03, chapter "Animal
killing with lava" 12:51–14:03): https://www.youtube.com/watch?v=NEneSUPIh4M
1. Clear blocks around you so the lava cannot flow onto you.
2. Place lava inside the animal's hitbox.
3. Pick the lava back up after a short, animal-dependent time ("it's kind of a feel"). The animal
   keeps burning and dies on dry ground, dropping cooked meat. If it survives, punch it.
4. **Cows:** if you right-click with the empty bucket while aiming at the cow, you **milk it**
   instead of scooping up the lava. Quote: "Many a speedrunner has died to trying to kill cows with
   lava because they milk them by accident … you not only lose the food, but sometimes the lava flows
   unexpectedly and gets you as well." The fix: place the lava inside the cow's hitbox, then aim at the
   lava **outside** the hitbox to pick it up. F3+B hitboxes help.
5. Pigs and sheep cannot be milked, so only the timing matters.

Why the lava must come back up: drops that land in lava are destroyed, and you also want the lava
back for the portal. So "don't burn the drops" is the reason to remove the lava, and "don't milk the
cow" is the reason to aim outside the hitbox.

**When:** when you have no flint and steel (woodlight seeds, ruined portal seeds where the light is a
fire charge, and so on). With flint and steel, the standard kill is one full axe hit, wait for the
animal to stop running, then one tick of fire, so it never runs to water (same video 2:58 and 8:10).

**Skill level:** beginner-to-intermediate; the timing is learned by feel.

## 4. The 1x1 water hole trick for animals

**Partly confirmed.** The only source is one sentence and a few seconds of footage: Calisthenicuber,
Desert Temple guide, 2:39–2:52 (https://www.youtube.com/watch?v=NEneSUPIh4M).

- Problem: a burning animal pathfinds to the nearest water, so a cow lit near a lake runs in, puts
  the fire out, and you lose the cooked food.
- Quote: "with cows, what you can do is you can dig a hole, light them on fire, and they'll path to
  the water, but they can't get in it. That's a really good way of doing it."
- The footage (frames at about 3:30–3:37 of that match) shows him digging a small hole next to the
  cow and emptying a water bucket into it, then lighting the cow. The burning cow heads for that
  nearby water instead of the distant pond, so it stays in reach and he finishes it with an axe crit.
- **Unconfirmed:** the exact geometry (whether the hole must be 1x1, and whether the cow can enter or
  only path to it). The subtitles show "Fire extinguished" during the clip, so the cow may still be
  partly extinguished. Cal gives it as a cow trick. Pigs are not mentioned.
- **When:** cows near water, when you have a water bucket.

## 5. Woodlight portal

**What it is:** the obsidian frame is cast normally (lava onto water), but instead of lighting it with
flint and steel you place wooden planks or logs next to the frame's interior and lava next to the
wood. Fire spreads from the lava to the wood and into the air inside the frame, which lights the
portal. It saves the 1 iron for flint and steel (or the gravel trip). That lets you spend the iron
elsewhere (shovel, shears) or skip the golem: Calisthenicuber's desert-village example at 7:47–8:07
in https://www.youtube.com/watch?v=N3EME1E431U.

**How** (Calisthenicuber Desert Temple guide, chapter "Wood light techniques" 10:24–11:18, then to
about 12:56, https://www.youtube.com/watch?v=NEneSUPIh4M):
- Grab a few extra logs.
- When building, place two extra blocks at the front where the water normally goes, then remove the
  water.
- Place lava on both sides and wood above and below: "Lava on both sides. These blocks on top, these
  blocks here, this in the middle. It's like a sandwich."
- **Switch to Hard difficulty while waiting.** Fire spreads faster on Hard (also in greenFishy's
  jungle temple guide, 0:43). As soon as the portal lights, switch back so you don't enter the nether
  on Hard.
- Use the wait to clear your inventory or kill animals.
- Cal: "If you know your woodlighting, you can use up all your iron. It's not necessarily something
  that you can recommend … it's a playstyle preference." The wait is random.

**Basic vs modern:**
- *Basic / older:* wood blocks placed outside the frame next to lava. The fire has to spread several
  times to reach the air inside the frame, so the wait is longer and less predictable.
- *Modern:* planks placed **inside** the portal interior, with lava directly beside them, so fire forms
  inside the frame on the first spreads. Sources:
  - FnaFedja, "Tutorial on modern woodlight (not mine) MCSR", 2025-06, 51 s, no narration:
    https://www.youtube.com/watch?v=aVTHie9fqeE. Frames show plank layers inside the frame and lava on
    the sides; the portal lit about 40 s after setup.
  - pncakespoon, "New Fastest Woodlight Design (afaik)", 2022-03, credited to Ninjabrain's fire-spread
    simulation: https://www.youtube.com/watch?v=QFNvgd32TYY
  - pncakespoon, "Best Blacksmith Woodlight", 2022-12: https://www.youtube.com/watch?v=BEzhJQxvHRQ
  - Calisthenicuber's "sandwich" (2026) is the same interior-wood idea.
- **Unconfirmed:** exact block-by-block layouts and the "basic/modern" boundary; none of these sources
  name the versions formally.

**Skill level:** an intermediate playstyle option (Calisthenicuber treats it as optional).
Ranked-specific: nothing beyond the guaranteed lava pools on village and desert temple seeds.

## 6. TNT cannon for trees

**Legitimate but niche, not common.** Calisthenicuber, Desert Temple guide, chapter "Using TNT
cannons" 6:12–7:28 (https://www.youtube.com/watch?v=NEneSUPIh4M):
- 6:11: "what if there are no trees that are close together, but you want to get some wood? So, I'm
  going to show you how to TNT cannon just because it's kind of fun. It's not necessary really, but
  like this is a situation where it'd be good to do."
- Setup (6:30): place two pillars. The first TNT can reach the nearer tree; the second TNT is placed
  so the first one's explosion pushes it to the farther tree. Light them with a gap between them; at
  6:50 he lit them too close together. Usually there is no flint and steel yet, so the desert temple's
  pressure plate is the trigger (7:15).
- Result: lots of logs plus dirt, "slightly faster than going over there" (7:26). The target is about
  14 logs; 10 is fine.
- The common technique is the plain one: one TNT between two trees that are close together (6:02, 14
  logs).
- **Ranked-specific:** only in that desert temple seeds always give TNT. No top-runner source was found
  using cannons routinely; jeyme's clip "when tnt cannon meets speedrunning"
  (https://www.youtube.com/watch?v=GR-qBKL4ecg) is a one-off.
- **Skill level:** advanced and optional; the roadmap could list it as "optional / fun".

## 7. Ruined portals

Ranked guarantees on ruined portal seeds (seed.md):
- The portal is within 3 chunks.
- At least 18 iron nuggets beyond what the bucket or flint and steel needs. An iron pickaxe is not
  guaranteed.
- A light is guaranteed (flint and steel, fire charge, or flint plus extra nuggets).
- Food in the chest, or animals within 5 chunks together with flint and steel or a Fire Aspect sword.
- The seed is enterable with obsidian or with a bucket (80/20 split).
- Unlocked at 600+ Elo.

### Type names and completions

Two naming schemes exist:
- **MCSR Wiki (Dibedy), "How to Complete RUINED PORTALS", 2024-11** (reviewed by top runners, no
  narration): https://www.youtube.com/watch?v=FkLYnUw39zU. This is the modern reference.
- **Dav1E, "A Minecraft Speedrunner's Guide to Ruined Portals", 2020-12** (RSG-era; good for shapes,
  gold and chest positions): https://www.youtube.com/watch?v=V2KzS4Fo5-Q

General facts (Dav1E 0:56–1:46):
- There are 10 small and 3 large variants; 95% of ruined portals are small.
- Each gold block has a 30% chance to be air.
- Each obsidian has a 15% chance to be crying obsidian (which breaks the frame).
- Cold biomes swap lava for netherrack; swamp and ocean biomes turn lava into magma; 20% of lava
  becomes magma in any case.

MCSR Wiki video advice (0:05–0:17):
- "Ruined portals can spawn with crying obsidian in them. I'll show completions for portals with and
  without crying obsidian, for most types."
- "Always look if you can complete the existing portal before making a lava portal. There are many
  cases in which you can complete the portal, regardless of crying obsidian."
- The general method in every completion: place a placeholder block (planks) where obsidian is
  missing, pour water against it and cast the missing obsidian with lava. Use the portal's own lava
  pools when present; scoop them first. Crying obsidian is mined out with the iron pickaxe and the gap
  is recast.

On-screen completion timers are shown below as seconds. Reading the overlay `6:85` as 6.85 s is an
assumption.

| Name (MCSR Wiki) | Dav1E name | Shape and identification (Dav1E) | Gold / chest / lava (Dav1E) | Obsidian to finish (Dav1E) | Completion (MCSR Wiki video) |
| --- | --- | --- | --- | --- | --- |
| **C-Dot** (0:18) | C Dot / "C L" (11:47) | A "C" of lava on the floor plus a single "dot" of obsidian; a pillar of iron bars is unique to it | 2 gold: one 7 blocks from the base, one in the corner lava under it; 1 chest beside the small structure | 7 if done fully | Completed with water and lava from its own pools. About 6.9 s without crying obsidian; a longer recast with crying obsidian. |
| **Half Portal** (0:43) | Submerged / half portal (9:59) | Half the frame sunk in a lava pool; two slabs on top identify it | 2 gold, both exposed; 1 chest; plenty of lava | 1 (2 obsidian under the lava) | Fastest completion in the video: about 3.6 s without crying obsidian, about 16.3 s with it. |
| **Hanging Portal** (1:08) | Bars / hanging (7:06) | The only small portal hanging from iron bars; slab overhang at the front | 1 gold at the top, 1 in the lava; 1 chest on the back side; lots of lava | 4 | Lava cast from its own pool: about 6.6 s without crying obsidian, about 15 s with it. |
| **Small U** (1:36) | Small U (8:07) | A small U; one pillar taller than the other | 1 gold; 3 lava; 1 chest on the tall-pillar side | 3 (fails if a lava source turned to magma) | About 9.6 s without crying obsidian; the video shows only that case. |
| **Big U** (1:54) | Big U / walls (10:36) | A large U; the only small portal with stone-brick walls | 3 gold: two 6 blocks out and down, one beside the chest 3 down; lots of lava | 3 | About 5.4 s without crying obsidian, about 11.7 s with it. Credits a crying-obsidian completion to crossroads198x. |
| **Big Portal 1** (2:17) | "Normie" big portal 1 (12:52) | Large; an obsidian "L" along the top | 2 gold; 1 chest | — | **Not completable.** "Use existing obsidian in the portal or build an external portal if not completable. Get creative." |
| **Big Portal 2** (2:33) | "Normie" big portal 2 | Large; two obsidian under the two gold blocks; about 10 lava | 2 gold; 1 chest | — | Completable: about 8.1 s without crying obsidian, about 13.5 s with it. |
| **Big Bertha** (3:00) | Likely Dav1E's "Pog U" (13:52), the 6-gold big portal with one obsidian at the top. Name match unconfirmed. | Large; stone-brick pillar | Up to 6 gold: top, two at the edge, one under stone bricks, two in the lava | — | About 9.4 s without crying obsidian; with crying obsidian it is completed using the lava pools. Dav1E (31:39): in a race, take only the exposed gold. |
| *(not in MCSR Wiki video)* | Netherback (6:44) | Netherrack along the back | 2 gold at the top; no lava; 1 chest | 2 | No completion shown. Presumably bring obsidian or build a separate portal (inference). |
| *(not in MCSR Wiki video)* | C (7:33) | A backwards C from the front | No gold; 2 lava; 1 chest | 4 | Dav1E: "probably the worst one". |
| *(not in MCSR Wiki video)* | Double L (8:35) | An upright L plus a fallen L | 3 gold; 1 under the lava; 1 chest | 5 | Not shown. |
| *(not in MCSR Wiki video)* | O (9:22) | Donut shape; netherrack back | 1 gold; no lava; 1 chest | 1, if no crying obsidian in the key spots | Not shown. |
| *(not in MCSR Wiki video)* | GJ (11:25) | J from one side, G from the other; two-obsidian lip | 2 gold; no lava; 1 chest | 2 | Not shown. |

The wiki video's choice of eight portals presumably reflects the ones with useful completions; that
is an inference. The existing roadmap note lists the same eight names.

### Buried ruined portals: finding the chest

Dav1E 15:48–19:00, with worked examples 19:00–36:50:
- Portals are randomly mirrored and rotated. When buried (typically in desert sand) you see only the
  top half, so read the asymmetric features you can see (slab overhangs, a taller pillar, iron bars,
  stone-brick walls) to work out where the chest is.
- Slabs in the original structure stay slabs. In deserts stairs can turn into slabs, but slabs never
  turn into stairs.
- Rules of thumb by type:
  - Netherback: the chest is on the slab side and the stone-brick pillar side.
  - Small U: the chest is on the tall-pillar side.
  - Bars/Hanging: the chest and gold are on the side opposite the slab overhang and the pillar.
  - C-Dot: the chest is on the side of the small structure.
  - Big U: the chest is on the smaller pillar's side.
  - GJ: the chest is in line with where the "hook" points, 4 blocks out.
- When only one axis is asymmetric, there are two candidate spots: check both.
- A sunken patch of sand often marks a lava source or a gold block that generated as air.
- For big portals, Dav1E advises skipping the chest unless you have memorized it.
- **Ranked relevance:** the 20% bucket-enter split and desert placement make buried portals common.
  The memorization itself is not Ranked-specific.
- A newer alternative not reviewed here: Leonn, "Ruined Portal Chest and Gold Block Location Guide":
  https://www.youtube.com/watch?v=vOQJe4kfdzQ (date not checked).

### Chest with an axe

From the existing roadmap note, sourced to Calisthenicuber's Ruined Portal guide
https://www.youtube.com/watch?v=WVG146IN9M0. Its transcript could not be re-fetched here, so this is
unconfirmed in this pass.
- If the chest holds a (gold) axe, take only the axe and break the chest with it. A broken chest
  spills everything, and walking over the items is about 1 s faster than fast-looting each slot.
- Otherwise use normal fast looting (shift-click spam, or shift + hotkey).

## 8. Jungle temple

**In Ranked, it is a new seed type** that appeared on 2026-07-30. It is not in the wiki's seed filter
page (last updated 2026-09-30), and greenFishy calls it "the new edition of the jungle temple seed type
for **event mode**". Whether it is in normal ranked matchmaking is unconfirmed; it looks like an event
or limited mode.

- Sources, all from 2026-07/08 and by mid-level or lesser-known runners:
  - Grummit, "NEW Jungle Temple Seed Type in MCSR Ranked" (20 min):
    https://www.youtube.com/watch?v=YNyT-EqEmNk
  - Awesome, "Jungle Temple Seed Type Initial Looks": https://www.youtube.com/watch?v=ajOTaols7Y4
  - greenFishy, "Jungle Temple Guide (MCSR Ranked)": https://www.youtube.com/watch?v=TqLZCj6Z37o
  - Literal, "Optimal jungle temple looting": https://www.youtube.com/watch?v=1v31wke8E1E
  - mac, looting with no blocks and no pickaxe: https://www.youtube.com/watch?v=EzqTPJ7b2e4
  - unknwonc, 8:06 first world record on the type: https://www.youtube.com/watch?v=8ilbGp2SDKs
- **Guarantees (unconfirmed, from Awesome 1:55 and 3:51):** "seven iron guaranteed or four iron and
  three diamonds", and "I believe three" lava pools near the temple.
- **Looting** (greenFishy 0:08–0:40; Awesome 0:58–3:20):
  - Go down the stairs. The lever room and the trapped hallway can be on either side.
  - Walk the hallway hugging the outer wall to dodge the arrow traps, then loot the chest.
  - Lever puzzle: open the lever shown in the videos, flick the next one twice, break the far one.
    That opens the hidden chest by the stairs.
  - Mine 2 logs before entering so you can craft a pickaxe inside, or with 3 diamonds craft a diamond
    pickaxe right away.
  - Mining cobblestone for stone tools also opens shortcuts.
  - Extra arrows come from the dispensers; melons are backup food.
  - Switch to Hard to make lava-pool fires easier to spot.
- **RSG:** jungle temples give the same kind of loot without guarantees. Couriway's "The BEST Jungle
  Temple Speedrun." (2025-04) is an example of a strong RSG jungle temple seed in his 100k-runs
  journey: https://www.youtube.com/watch?v=5ojJ3B2LKcM (chapters 0:00 start and temple, 1:04 loot).
- **Roadmap advice:** mark it as event or optional. It is not part of the standard Elo seed pool in
  the wiki.

## 9. Head hitters

- **Mechanic:** a sprint-jump gives a forward speed boost on each takeoff. With a block above your
  head, the jump is cut short ("bonk") and you land sooner. So you jump, and get that boost, more often
  than in open air: a 2-block-tall tunnel or a low ceiling makes sprint-jumping noticeably faster than
  open ground. Exact speed figures and the optimal ceiling height were not found in the sources
  (unconfirmed).
- **Calisthenicuber, "Movement Guide for MCSR Ranked! (Part 1)", 2026-07:**
  https://www.youtube.com/watch?v=BvNihmsvKWQ
  - 1:24: "Time your jumps and maybe pair in some head hitters."
  - 1:51: "you can make yourself head hitters on trees and whatnot. And this is good especially in the
    nether. I wouldn't recommend doing this just for like looking around … more so if you know where
    you're going and you know you can get there faster if you make head hitters."
  - So self-made head hitters (running under leaves, or placing or using a block above your path) are
    for known, committed routes.
  - Related at 0:41–1:37: when sprint-jumping uphill, time or space your jumps (walk a bit between
    jumps, wiggle the mouse) so you don't clip your foot on a block edge and lose momentum.
- Awesome's jungle temple video (1:01) mentions "head hitters all around" the temple roof edge.
- **Unconfirmed:** "self-placed on the floor or ceiling" as a named technique. No source describes
  placing blocks above yourself mid-run as a standard Ranked technique; Cal's quote is the closest. The
  parkour-community videos (for example pdl, "How To Do HEAD HITTERS 100% of the time",
  https://www.youtube.com/watch?v=hhQyzBsMG8U) are not speedrun-specific.
- **Skill level:** intermediate movement polish.

## 10. Speed bridging, staircasing, diagonal bridging

All from Calisthenicuber, Movement Guide Part 1 (https://www.youtube.com/watch?v=BvNihmsvKWQ),
chapters "Speed bridging techniques" 2:04, "One stacking and staircasing" 5:06 and "Advanced bridging
methods" 6:12.

| Technique | Names | How it works | Notes |
| --- | --- | --- | --- |
| Speed bridging | "speed bridging", also "ninja bridging" (2:05) | Walk backwards holding S + D at about 45° yaw (44.3–46°). Crouch at the block edge, place, release crouch immediately so you move at walking speed, crouch again before the edge. Place by holding right-click (slower), tapping (his choice) or spam-clicking (less consistent). | Re-crouching too early only costs speed; too late, you fall. He compares it to sneak-bridging: "you bridge three times faster than them" (4:52). "Not necessarily 100% necessary for Minecraft ranked, but very helpful" (5:00). |
| Speed bridge with steps | (2:15) | Speed bridging with an occasional jump to go up a block. | Leads into one-stacking. |
| Staircasing / one-stacking | "one stack" / "one stacking" (2:26, 5:06) | Staircase upward continuously: hold S + D, tap jump, place (he butterfly-clicks), and alternate crouch just like speed bridging. "Far quicker than if you just stay shifting the whole time." | Pure muscle memory. Learning it helps the inclined diagonal bridge. |
| Diagonal speed bridging | (6:06) | Line up just right of the block's corner and go corner to corner, placing two blocks at once (butterfly or double click) and then un-crouching. Crouch timing is slightly slower than straight bridging. Don't alternate A and D. | Faster than bridging one axis and then the other. Useful when heading to coordinates. |
| Inclined diagonal speed bridging | (6:12, 8:16) | Diagonal speed bridging plus a step up. | His example: going diagonally up to a bastion over a lava lake, where the alternative is straight bridge, turn and pillar. |

- The existing note's "Sprint-bridging, sprint-sneak about 30% faster"
  (https://www.youtube.com/watch?v=icogESJ8KQY) is the same family. "Sprint while sneaking" is listed
  as an allowed glitch in the Ranked context note.
- Bedwars-community references: "How to ONE STACK" (Blown Away Strats,
  https://www.youtube.com/watch?v=JnEDuMmPtU0) and "FASTEST way to STAIRCASE" (Adoedoe,
  https://www.youtube.com/watch?v=LXBlN3748xs). They are not speedrun sources.
- **Ranked-specific:** none.
- **Skill level:** Calisthenicuber treats these as useful but optional. A reasonable placement is
  intermediate (speed bridging) and advanced (diagonal or inclined).

## 11. BeefSalad hole (stables) and its "safe" variant

**Context:** stables bastion, triple-to-gap (TTG) routes. You loot a triple-chest rampart, then go
down to the "good gap" with its gold blocks and trade with piglins there. Ranked guarantees stables
have 2 good gaps, or 1 good gap plus at least one triple-chest rampart (seed.md).

**BeefSalad hole** (named after the runner BeefSalad), also called the **auto-funnel**:
- In the classic gap finish, you block yourself in, mine blocks to let the piglins reach a trading
  hole and throw gold, then mine the gap gold.
- In the BeefSalad version you break one block and place specific blocks so the piglins **funnel
  into a trading hole by themselves** while you mine the gap gold. Your mining and their trading
  overlap, and you never mine blocks to let them in.
- Calisthenicuber, "ADVANCED Stables Bastion guide for Ranked", 2026-06, chapter "Beef salad hole
  optimization" 12:05–15:05: https://www.youtube.com/watch?v=P-SnpsZjtas
  - 12:11: "you run down, you place those two blocks … you do this block, you toss your gold in."
  - 12:45: "some people think beef salad hole isn't actually better than just the normal three blocks.
    It is. It is significantly better … you don't actually have to mine any blocks to let the pigs in
    at all … the pigs funnel in automatically while you mine gold."
  - 14:36: hold D while pressing W to bounce out of the hole without jumping.
  - 14:47: "very tricky, probably worth doing if you're like emerald or up or like high gold."
  - It can be combined with TNT on the gap gold (12:29).
- meebie, "Stables Triple to Gap Updated Guide (all variants)", 2026-01:
  https://www.youtube.com/watch?v=D4Ulw7VepJc
  - Chapters 17:46 "Classic Gap Blocks (safer)" and 18:54 "BeefSalad Gap Blocks (riskier but faster)".
  - 18:56: "the beef salad version is a bit scarier, but it's just like a lot more linear and fast … you
    have to block these two off or else the pigs will path pretty bad … hold a movement key and like
    clip through here."
  - Late piglins coming up from below are "really really rare in actual runs, but it can happen", so
    keep an eye out.
- HiTrippy, "Stables Bastion Guide (All Useful Routes)", 2026-04, chapter 10:17 "Auto Funnel (Beef
  Salad Hole)": https://www.youtube.com/watch?v=D8Mt1bNNWtg
  - "Break this block and walk backwards to clip through the floor and place that block before any
    pigs can make it out of the hole."
  - "This variation is very dangerous and only saves about a few seconds … I wouldn't even bother
    learning it until you're super experienced."
  - His safe alternative is chapter 9:21 "Good Gap Classic (Safe)".
- Short demos: FlanALT https://www.youtube.com/watch?v=qUEVGRMUGzw (with TNT:
  https://www.youtube.com/watch?v=Edvn7hi7jQ0); migrained, "beef hole vs block off" (2026-01),
  https://www.youtube.com/watch?v=uqPL1pQrYhY

**"Safe" variant — two meanings in the sources; which one you meant is unconfirmed:**
1. **BeefSalad with safety blocks** (most likely). The same auto-funnel, plus three extra blocks that
   seal off the paths late piglins use from below, so you no longer have to watch for them while
   mining the gap gold.
   - Kue, "BeefSalad Safety Blocks", 2026-02: https://www.youtube.com/watch?v=p58DE9RS6Cg. Description:
     "only meant to eliminate the need to check for the bottom pigs with the BeefSalad Hole, which leads
     to hesitations and lots of damage."
   - Transcript 0:03: "These three blocks keep you safe from any late piglins … This first block is to
     stop any pigs from down here from picking up the gold in the trading hole. This next one stops any
     pigs from down here. And this last one stops the ones from down here." He thinks it is worth it
     over checking for pigs, though "the flow is a little awkward".
   - k4yfour vods, "safe/paused beefsalad routes", 2026-03 (19 s, no narration):
     https://www.youtube.com/watch?v=2zCJobaUfcc. This shows top-runner use, but the details could not
     be read from the footage.
2. **The classic gap blocks**, which guides label "safer" or "Safe" as the alternative to BeefSalad
   (meebie 17:46; HiTrippy 9:21).

**Lucento (@OoLucentoO):**
- None of the channel's video titles mention a "safe BeefSalad"; the variant name could not be
  confirmed there.
- The channel works on alternatives to the BeefSalad hole:
  - "Crispy/CrispyTNT Route Showcase": https://www.youtube.com/watch?v=ECIPK7FnSIQ. It is built on the
    CrispLake hole, another stables gap auto-funnel (https://www.youtube.com/watch?v=3cRpXgMCUg0), and
    has "Hole Variation 1 (HARD)" at 0:25 and "Hole Variation 2 (EASY)" at 0:32.
  - "Tripleless L-gap vs Beefsalad", 2026-09: https://www.youtube.com/watch?v=3RoAfzjf2dM. "L-gap is
    slightly better but … I would stick to beef or crispy … L-gap is still really useful to know as a
    backup for if you badly mess up crispy/Beefsalad and cant complete the hole in time."
- zmd_i, "crispy hole vs beefsalad hole, 2.3s time save", 2026-08:
  https://www.youtube.com/watch?v=-JHEiHARskk. "beef salad hole has worse pathfinding … crispy hole is
  faster because pigs are in the hole faster."

**Skill level:**
- Classic gap: Gold.
- BeefSalad: high Gold to Emerald+ (Calisthenicuber), or "super experienced" (HiTrippy).
- Crispy: newer and harder; top-end.
- Ranked-specific: yes, in that stables gap routes rely on the filter's good-gap guarantee, and the
  RNG standardization keeps non-built-in monsters out of bastions.
