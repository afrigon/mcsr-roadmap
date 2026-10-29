# Research: stronghold travel, End fight, exotic techniques

Scope: 18 items requested for the MCSR Ranked roadmap (1.16.1, Any% Glitchless). The existing notes
(`research/stronghold.md`, `end.md`, `zero-cycle.md`, `ranked-context.md`) were read first. Where they
already cover an item, this file only adds to them or corrects them.


Limitation: YouTube returned HTTP 429 for most subtitle requests after the first few. Several videos
were checked from their description, chapters, pinned and top comments only, or from frames. These
are marked. Couriway's Metafy guide needs a login and was not opened.

Legend: **[confirmed]** stated by the source cited; **[inferred]** my reasoning from confirmed
mechanics; **[unconfirmed]** no source found.

---

## Stronghold / travel

### 1. Educated, calculated, perfect and divine travel

**Blind travel** (baseline): build a portal toward the first ring before throwing any eye. Covered in
stronghold.md.

**Educated travel** [confirmed, T_Wagz 2020]: you are close to your home portal. Throw an eye in the
overworld beside it and note the F3 angle, then re-enter the nether facing that angle and travel about
120–200 nether blocks along it before building. One eye gives a direction but no distance; you rely on
the ring's distance band. T_Wagz's simulations show it beats blind travel when you are already near
the home portal. A top comment adds that you can rotate the angle by 120° to target another
first-ring stronghold if the nether terrain is bad.
- T_Wagz, "Speedrunners Guide to Nether Travel" (2020-11-23): https://www.youtube.com/watch?v=12efBB7SW9c&t=504s (educated travel at 8:24; scenario comparison 10:02–18:13)

**Calculated travel** [confirmed]: two-eye triangulation fed into a calculator rather than done by hand
or with a tan table. Ninjabrain's 2020 proof of concept became Ninjabrain Bot. Calculators were
briefly banned on speedrun.com and later unbanned (Ninjabrain's own comment on the video).
- Ninjabrain, "Calculated travel proof of concept" (2020-12-13): https://www.youtube.com/watch?v=VYFCnhKWmps

**Perfect travel** [confirmed]: measure one eye precisely enough (subpixel adjustments) to go straight to
the second portal without a second eye. The MCSR wiki describes it as one-eye double travel: it saves
time, but a miss usually means a reset unless you have obsidian for a third portal. Ninjabrain Bot's
README still links the "perfect travel document" for the ±0.01 subpixel method. Boat eye (item 3) is
its modern successor.
- MCSR wiki, Stronghold travel (last edited 2023-09-25): https://mcsr.miraheze.org/wiki/Stronghold_travel
- Ninjabrain Bot README FAQ "Can I use subpixel adjustment, like in perfect travel?": https://github.com/Ninjabrain1/Ninjabrain-Bot#readme

**Divine travel** [confirmed]: certain features in chunk 0,0 (nether fossils, overworld trees, animals)
are generated with RNG correlated with the stronghold ring's angle. Reading them tells you which third
of the first ring holds the strongholds before throwing an eye. It only works at exactly chunk 0,0,
which is why nether fossils were the common source: entering the nether puts you near 0,0.
- k4yfour, "How to Divine Travel" (2021-05-12): https://www.youtube.com/watch?v=SXem01c44-I&t=59s ; charts are in the description
- Matthew Bolan, the mechanism: https://youtu.be/IKo-jrZSgWU

**Ranked**: the Ranked wiki says overworld and nether come from independent seeds, so "strategies that
can infer some RNG in the Nether, such as the Divine Travel strategy, will not work"
(https://wiki.mcsrranked.com/gameplay/seed ; source `docs/gameplay/seed.md` in
https://github.com/MCSR-Ranked/Wiki). **Correction to stronghold.md**: it says divine travel does not
work in Ranked at all. The wiki only rules out the nether-based kind (fossils, striders). Whether
overworld-based divine (trees and animals at overworld chunk 0,0) still works in Ranked is
**unconfirmed**. Ranked filters the overworld and fixes the spawn, and 0,0 is rarely on route anyway.

Skill level: all four are historical context. None is a Ranked learning target, since the Ninjabrain
Bot and boat eye workflow replaces them.

### 2. Ocean blind and "ocean exposed"

**Ocean blind** [confirmed]: the blind portal comes out onto ocean. You measure there, usually with a
boat, then either double travel or boat to the stronghold. The hunger reset there is awkward because
items fall into the water. crossroads198x's method: you respawn in the hole every time, whatever side
the bed or portal is on, and you apply fire resistance at the end. JOURONA's pinned comment links a
more optimized ocean blind death reset.
- crossroads198x, "Ocean Blind Hunger Reset" (2023-02-16): https://www.youtube.com/watch?v=NJzspga_AA4
- JOURONA, "Every Useful Death Reset" (2025-12-18), pinned comment: https://www.youtube.com/watch?v=rhHjI8Ri84k ; optimized ocean blind reset: https://www.youtube.com/watch?v=zcaWZh74TQw

**Ocean-exposed stronghold** [confirmed]: a stronghold under an ocean can be cut open by the seabed, so
corridors or even the portal room are visible in the water. The MCSR wiki says two eyes are normal
"unless the stronghold is very close or ocean-exposed", meaning you can skip triangulation and swim to
the visible structure. k4yfour's stronghold video names the signs of an ocean stronghold: ocean biome
in F3, water dripping from the ceiling, and water behind hidden-room indentations.
- MCSR wiki Stronghold travel: https://mcsr.miraheze.org/wiki/Stronghold_travel
- k4yfour, stronghold video (2023-06-05), "Ocean strongholds" chapter: https://www.youtube.com/watch?v=sUK23ws2ceY&t=672s
- Example runs: Couriway "BACK TO BACK EXPOSED STRONGHOLDS" https://www.youtube.com/watch?v=eQwF372IoVI ; AdamVonBadam https://www.youtube.com/watch?v=pYAq3jd223A

**Going outside to look** [inferred]: "seeing under water or lava using third person" (F5) is an
allowed glitch in both the SRC rules (D.1.1.g) and the Ranked wiki, so looking around underwater in F5
for exposed stronghold blocks is legal. X-ray rules are stricter in strongholds (D.1.2.c.ii), so do not
clip the camera into blocks.

**Unconfirmed**: no source uses the exact phrase "ocean blind travel" for a separate travel method.
**Ranked**: nothing specific. Ranked's surface guarantee for blind portals built at nether Y48+ does not
prevent water exits.

### 3. Boat eye: standard workflow, minimal-input (green boat, nether boat angle, mod 360), god sensitivity

**Why it works** [confirmed, Ninjabrain Bot wiki]: entering a boat snaps your yaw to a known value.
Mouse turning then moves yaw in fixed increments set by your sensitivity. Knowing the start angle and
the increment, the bot recovers more decimals than F3+C prints. Combined with the 16384 px tall window
and per-pixel correction, one eye is usually enough.

**Standard workflow** (blue → green boat) [confirmed]:
1. Ninjabrain Bot settings: enable boat measurements, enter your `options.txt` sensitivity exactly,
   resolution height 16384, boat standard deviation about 0.0007 (2026 guides; the wiki's older value
   is 0.001), allowable boat error 0.03, and bind ±1 pixel adjustment hotkeys.
2. Press "Indicate boat angle reset on next F3+C" (the icon turns blue), place a boat, enter and exit,
   then F3+C without moving the mouse in between (green = valid, red = you moved).
3. Throw an eye, FOV 30, eye-zoom or resize macro, line the crosshair up with the pupil edge, F3+C,
   then press the + or − hotkey once per pixel shown on the overlay.
- Ninjabrain Bot wiki, Boat measurements: https://github.com/Ninjabrain1/Ninjabrain-Bot/wiki/Boat-measurements
- mysticsheep (2025-07-25): https://www.youtube.com/watch?v=xg_2U7paSXI&t=220s
- draconix, Couriway's Ultimate Guide setup video (2026-04-02), linked from the Ranked wiki rules page as *the* Ninjabrain Bot tutorial: https://www.youtube.com/watch?v=l-q-_4R8_6M&t=713s (measuring at 16:17)

**Minimal-input boat eye** [confirmed, Ninjabrain Bot 1.5.0, 2024-09-29, PR #91 by ExeRSolver]:
- **Green boat by default (boat angle 0)**: for a few special sensitivities, entering a boat lands you
  on a valid angle with no F3+C at all. Set "Default boat mode" to Green boat. The workflow becomes
  "enter and exit a boat, throw, measure".
- **Nether boat angle**: 1.5.0 "Allow[s] getting boat angle in the nether". Code check: the boat-angle
  F3+C is accepted before the overworld-only check in `PlayerPositionInputHandler`. You can set or
  refresh the boat angle in the nether, for example in a boat while waiting at the blind spot, then
  measure in the overworld.
- **Mod 360 hotkey** ("Indicate angle reduction mod 360 on next F3+C"): Minecraft wraps your yaw into
  [−180, 180] when you go through a nether portal or teleport with an ender pearl. That would throw
  off the bot's stored boat angle. Press the hotkey, F3+C immediately *before* the portal or pearl,
  and the bot shifts the stored boat angle by the right multiple of 360. ExeRSolver explains in the PR
  why it must be read just before: the bot cannot tell how many turns you were off. This is what lets
  a nether-side boat angle survive the trip through the portal.
- Sources: release notes https://github.com/Ninjabrain1/Ninjabrain-Bot/releases (1.5.0/1.5.1);
  PR https://github.com/Ninjabrain1/Ninjabrain-Bot/pull/91 ; code
  `src/main/java/ninjabrainbot/model/actions/boat/ReduceBoatAngleMod360Action.java`

**God sensitivity** [confirmed]: yes, it is the same concept. ExeRSolver's list
"Divides 1.40625 boat eye sensitivities" (https://gist.github.com/ExeRSolver/c4e852bb2527069e08c1a5e0a9c47613,
updated 2026-03-09) gives sensitivities whose minimum angle increment divides the boat snap step. For
those, the boat angle survives a mod-360 operation, and entering a boat re-validates it with no F3+C,
assuming boat angle 0. Some entries also "divide 360/2560" (you can re-enter during the boat's initial
rotation) or "divide 105" (turning past 105° in a boat does not break it). Commonly quoted:
0.02291165, 0.058765005, 0.07446537.
- Rules for god sens [confirmed, HorizonMC description and a top comment]: if you turn the *boat*
  (A/D) during the run, get in and out once more without pressing A/D. With the 0.07446537 sensitivity
  you also cannot turn the mouse more than 105° inside the boat.
  https://www.youtube.com/watch?v=OQ_m-cVBOn4 (2025-05-08)
- Setup: Sen7i (2026-02-22) https://www.youtube.com/watch?v=m-E6zDdfS9g&t=771s ("you don't have to
  press F3+C when you get in and out of a boat. That's the benefit of godsens", 18:28); god-sens
  calculator https://god-sens.torbaz.dev/ ; DPI sheet referenced by r0hkx
  https://frontcage.com/t/how-minecraft-sensitivity-works/13 . A god sensitivity changes how the
  mouse feels, so players compensate with DPI and Windows cursor speed, or with Toolscreen's global
  sensitivity (Sen7i pinned comment).
- Alternative without a tall window: bees, "Resizeless Boat Eye" (2026-03-16), FOV slider instead of
  resizing, slower in real time: https://frontcage.com/t/resizeless-boat-eye/86

**Ranked**: Ninjabrain Bot (1.5.2), Toolscreen, Jingle and Waywall are legal, and so is one resize
outside the monitor bounds up to 16384 px. Ranked guarantees the 2nd eye never breaks, a fallback when
the first measurement is unsure. Skill level: draconix calls boat eye something "you should pretty much
always be able to do" in a real run. It is beginner-to-intermediate setup work, not an advanced
technique. Minimal-input green boat is a convenience upgrade.

### 4. Measurement desync vs eye wiggle

**Desync** [confirmed, Char 2024-01-20]: the player has a client position (what F3 shows) and a server
position, and eyes of ender spawn at the *server* position. When you move less than 0.03 blocks since
the last update, the client does not report it until up to 1 s later. Throwing in that window launches
the eye from your old position, so the measurement is wrong. Fixes, any one of them:
- exit a boat and don't move (on dismount the server sets your position);
- jump in place once fully stopped (jumping exceeds the threshold and forces an update; the eye also
  starts higher). Jumping with leftover momentum keeps that momentum in the air;
- stand still for more than 1 s;
- also resynced by a pearl, leaving a bed, or respawning.
Walking into a corner only stops you quickly; you still have to jump or wait 1 s.
- Char, "A guide to Eye Desync in Minecraft Speedruns": https://www.youtube.com/watch?v=uBqAeZMlEFQ (fixes 0:09–0:57, technical explanation 1:00–2:44, solutions 2:44–3:40); visualising mod https://github.com/char3210/desyncview/releases/tag/1.0
- Ninjabrain Bot README FAQ ("100% certain but still missed"): "client-server desynchronization", wait or push into a corner.
- draconix (2026): "place a boat, then enter and exit it. If you don't have a boat … stand completely still for one second before throwing": https://www.youtube.com/watch?v=l-q-_4R8_6M&t=987s

**Eye wiggle** [confirmed, r0hkx on frontcage, 2025-09-29] is unrelated to your position. It is a render
effect: the flying eye flips between two pixel offsets while you hold still. Remedy: measure as late as
possible. If it still alternates evenly, F3+C and try both offsets. If both give the same top
stronghold (at least one at 99.9–100%), trust it; otherwise throw another eye from elsewhere. If it
only flickers to the other offset briefly, use the main one.
https://frontcage.com/t/what-to-do-about-eye-wiggle/14 . draconix: "generally nothing to worry about"
with standard settings (17:56).

Difference in one line: desync puts the eye's *origin* in the wrong place (fix before throwing);
wiggle makes you *read* the eye ambiguously (fix while measuring).

### 5. Starter room and backward navigation via doors

[confirmed] The starter staircase is the spiral staircase where the stronghold begins. Its middle is at
block 4 of the chunk on X or Z, which is why Ninjabrain Bot's (4,4) display digs you straight onto it
(Sen7i 16:10). Pieces generate outward from the starter, so some features point back toward it:
- **Doors**: a door recessed into the wall leads *toward* the starter; a door flush with the wall leads
  *away*.
- The main opening of a five-way always leads back toward the start.
- Stairs and spiral stairs always go *down* when heading away from the starter, so go up to go back.
- Iron bars flush with a wall lead back (confusing in irregular rooms).
- At the starter you can see the five-way at block 4 of its chunk from a distance; the top of the spiral
  has a flat wall.
Use: you entered off-target, lost the path, or hit a dead end. Head back to the starter (or a known
five-way) and take the unexplored branches. forsen's law: the portal room is most often exactly 6
rooms from the starter (k4yfour 1:34). A popular comment on the MCSR Ranked/doogile video adds: turn
back at 8–9 rooms deep if no light is visible, since the portal room always emits light.
- k4yfour (2023-06-05): https://www.youtube.com/watch?v=sUK23ws2ceY&t=545s (backwards navigation), &t=599s (identifying starter)
- MCSR Ranked Explanations, The Stronghold ft. Doogile (2025-05-14): https://www.youtube.com/watch?v=iI8bntMXJzE ; the door rule appears only in the top comment (BlueCyann, 140 likes), not in the video (subtitles not retrieved, so **unconfirmed** whether the video mentions it)
- MCSR Wiki channel (2024-10-30), "Navigating" chapter: https://www.youtube.com/watch?v=9dZWe7dNNMg&t=10s
- Newer research: ClearColdWater's nav simulator https://frontcage.com/t/wip-stronghold-nav-simulator/60 and https://frontcage.com/t/new-insight-for-nav-from-the-new-stronghold-generator/95
Ranked: no stronghold guarantee besides the fixed number of pre-filled frames. Zombie spawners are
replaced, which affects old nav practice sets. Skill: starter and door reading is beginner-level;
backwards navigation is intermediate.

### 6. Early blind portal for a hunger reset

**Partly unconfirmed.** The death-reset principle is confirmed (stronghold.md, JOURONA). Beds explode
in the nether, so the overworld blind is the first chance to set spawn with a bed and death-reset to
full hunger and saturation. Doing the blind early means building it right after the last blaze rods
instead of continuing nether routing, and resetting there before measuring. **[inferred]** It pays when
hunger or health is low and you lack food; it also restores health before the End. The alternative in
the nether is a respawn anchor (needs glowstone). No source names an "early blind" variant
specifically. JOURONA's video, credited to Beefsalad, doogile and silverrruns among others, covers the
blind death reset, but its subtitles hit 429.
- JOURONA (2025-12-18): https://www.youtube.com/watch?v=rhHjI8Ri84k ; MCSR Wiki repost https://www.youtube.com/watch?v=YEYCcjeZAx8 ; more optimized reset by lesternnn/fruitberries (pinned): https://www.twitch.tv/fruitberries/clip/SwissEntertainingPuddingTheTarFu-UB9McXEpm5MNG8D5
- Pinned corrections: soul sand works if you jump while setting spawn, but items tend to spill; pearl
  down properly if items fall into the ocean.

---

## End

### 7. One-cycle setup orientation (north–south vs east–west)

[confirmed]
- **k4yfour (2025-12-26)**: place one obsidian on the north or south side of the bedrock and wait around
  z70. From the description: "Standing north or south is to avoid slow dragon movement and for easier
  bed timing. Standing on the correct side lets beds do more damage."
  https://www.youtube.com/watch?v=u9UVwwWxN_k (setup 0:00, perch spotting 0:24, side 0:29, timing 0:58)
- **Marcus Fireworks (2023-05-27)**: the player spawns on the east side, and the perch you want comes
  from north or south, so the setup goes on that line. The dragon perches "by snapping between these
  two obsidian towers opposite of you".
  https://www.youtube.com/watch?v=JaVyuTyDxxs&t=28s
- **BoomerPlayz (2021-04-24)** explicitly covers "the difference between an east/west and north/south
  one-cycle" (chapter at 2:52); subtitles not retrieved.
  https://www.youtube.com/watch?v=1daiTbj1OiE&t=172s ; follow-up https://www.youtube.com/watch?v=uBp8uVbW1us

**Unconfirmed**: neither requested video describes an easier east–west variant that gives more time to
get into position. Viewer comments ask why their dragon perches east or west, and one says "in mcsr
ranked i have to place obsidian either on the east or west side". That hints at an east–west perch
being common, but it is anecdote. The MCSR wiki One cycle page mentions only north/south, plus
southwest for a diagonal instaperch. Ask a top runner, or check Couriway's Metafy chapter 6.

Ranked: perch and strafe rolls are standardized, so both players get the same perch timing if they
stand similarly (r2hkx, RedLime comment on https://www.youtube.com/watch?v=15zK6zejNAk). Average Ranked
one cycle is about 1:46 (end.md).

### 8. One cycle with 1–2 pre-placed respawn anchors

[confirmed]
- Marcus: put one or more anchors on top of your obsidian and charge them with glowstone. They must sit
  on obsidian, since the blast alone can kill you
  (https://www.youtube.com/watch?v=JaVyuTyDxxs&t=58s).
- MCSR wiki One cycle: each anchor needs an explosion-proof block under it; **pre-placed anchors are
  triggered before any beds**. Killing before the dragon lands needs at least 4 explosives, for
  example a 3+1 with one pre-placed anchor. https://mcsr.miraheze.org/wiki/One_cycle
- k4yfour: anchors work in place of beds "however are more difficult to use".
Why: anchors come from crying obsidian and glowstone, so they stretch a low bed count. Pre-placing them
saves an action during the perch.
Note: zero-cycle.md says anchors go *after* beds in zero cycles, because a mistimed anchor absorbs
damage. The one-cycle advice (anchors first) is the opposite. Each comes from its own source and was
not reconciled; **unconfirmed** which order current top runners use on one cycles.

### 9. Zero-cycle recovery: falling off, losing the block under you, knockback

Partly covered in zero-cycle.md ("Saving a failing zero", Metafy). Additions and status:
- **Fall recovery on 1/8 setups** [confirmed, clips indexed in Couriway's guide]: front
  https://youtu.be/AOEkxRZf6E4 , back https://youtu.be/quofJoHQNHA
- **Pearl back up / loop to a side setup** after a bad pearl or a fall [confirmed, Metafy via
  zero-cycle.md].
- **Block under you destroyed** [inferred]: the bed blast or the dragon breaks your standing block.
  Keep an indestructible block, an anchor or obsidian, below or beside the top position. zero-cycle.md
  tip: a block under the top anchor avoids being knocked off. Staircase builds leave a lower ledge to
  catch you.
- **Dragon knockback** [inferred]: the dragon pushes you when it passes through your space. Stay on the
  side away from its path, which is the point of front/back and rotation-dependent stands.
- **Shift clutch is banned** (item 15), so a fall has to be survived legally: boat or water bucket
  (sticky boat clutch is allowed), or fall damage taken.
**Unconfirmed**: no dedicated 2025–2026 guide on recovery technique was found. The Metafy chapter is
the likely source (login required).

### 10. Zeroing after the tower's crystal is destroyed

[confirmed mechanism] Destroying the crystal on your tower means the dragon strafes instead of
descending to the node (zero-cycle.md, Ranked wiki: "destroying the tower's crystal means a strafe").
Strafing shoots dragon-breath fireballs, and the purple breath cloud cuts visibility and deals
damage. Ranked standardizes strafe rolls.
[confirmed, Metafy via zero-cycle.md] "Bail when the pearl breaks the crystal": the usual advice is to
abandon the zero (one cycle, half bow, oneshot, ground zero).
**Unconfirmed**: no source for a technique to *continue* a zero through a strafe. FrizzClips' video
(2026-04-25) has an "End Crystal Break" chapter (0:38–3:08) on timing crystal explosions to avoid
death; subtitles not retrieved: https://www.youtube.com/watch?v=Cfiq-VG49Gs&t=38s . BoomerPlayz's
follow-up covers "using a single block to avoid dragon's breath" during a one cycle:
https://www.youtube.com/watch?v=uBp8uVbW1us

### 11. Safety pillar after the dragon dies

[confirmed context, partly inferred] The dragon's death animation lasts about 10 s before the exit
portal opens (end.md), and endermen keep wandering the island. zero-cycle.md: after the kill, boat down
or pillar 2 beside the fountain. end.md: avoid fall damage for 3 s after an oneshot kill. A pillar keeps
you out of enderman reach while you wait to jump into the portal. Looking at an enderman during that
window can lose a finished run.
- Example: skycrab's 6:17 choke (2025-06-03), lost to an enderman near the end; top comment "you
  looked at that Enderman first": https://www.youtube.com/watch?v=grCoQjLdLb4 (death around 6:32)
- Hidey-holes chapter in FrizzClips: https://www.youtube.com/watch?v=Cfiq-VG49Gs&t=427s (**unconfirmed** content)
**Unconfirmed**: an exact recommended pillar height. Endermen need two free blocks of height to reach
you, so 2 blocks beside the bedrock plus a blocked approach is plausible but unsourced.

### 12. Dragon chase-down

[confirmed, Metafy via zero-cycle.md] When a zero leaves the dragon on low health and it flies away,
chase it: shoot it with the bow and shoot the end crystals that heal it, instead of waiting for a perch.
**Unconfirmed**: no dedicated video found. YouTube searches return only manhunt content. The MCSR
Ranked "The End Fight ft. AutomattPL" video (2025-05-14) has "Advanced techniques and risks"
(4:16) and "Backup strategies" (5:20) chapters, but its subtitles hit 429:
https://www.youtube.com/watch?v=_d6_XF6SFBk&t=320s

### 13. Zeros with a crossbow

[confirmed] zero-cycle.md: a crossbow can be pre-loaded but charges slower than a bow; a bow makes
doubles easier. lvckyruns (2025-04-04, updated 2026) shows consistent 2+2 on y95 "assum[ing] you know
the basics of crossbow/bow zero cycling". Coordinates (pinned): Front cw 28 −27, Back cw −30 25, Front
ccw 27 −28, Back ccw −29 26 (https://www.youtube.com/watch?v=iDrpGjZ17yQ). Frame check of the 1+3
clips (item 17): a crossbow is in the hotbar and used for the +1s. Mescht's practice map tracks
crossbow damage separately, so a crossbow hit does not count as an explosive or a +1
(`health_display_damaged.mcfunction`).
[inferred] Comfort: load the crossbow before the End or during the pearl, keep it in a fixed hotbar
slot, and fire as the dragon approaches the node to start the 10-tick invulnerability timer. A
pre-loaded shot needs no draw, which avoids the bow's draw-time risk. The cost is one shot per load.
**Unconfirmed**: a dedicated crossbow-zero tutorial.

---

## Fun / exotic

### 14. Boosting ender pearls with explosives

**Unconfirmed.** No speedrun source found. [inferred] Explosions push nearby entities, thrown pearls
included, so a bed or anchor going off near a flying pearl could add velocity. It is not on the SRC
allowed-glitch list. As intended physics rather than a glitch it would probably be legal, but no
ruling was found. Not a known Ranked technique. Related known tech: minecart boosting (allowed glitch,
D.1.1.d) and pearl clipping.

### 15. Sneak fall-damage cancel (shift clutch)

[confirmed] Timing sneak just before landing can cancel fall damage. Called the "shift (stall) clutch"
or "crouch/air MLG": the speed change from sneaking alters your path, so the collision check returns a
false positive and the landing deals no damage (Oasis, quoted in alrey's pinned comment;
https://www.youtube.com/watch?v=Jl4e0s9Feas , 2022-10-09). An "edge stall clutch" works the same way
without sneaking.
**Why illegal**: the Ranked wiki lists "Shift clutch" under *Disallowed Glitches*
(https://wiki.mcsrranked.com/gameplay/rules). SRC rules v8 (PDF dated 2026-10-17, https://mc.sr/rules)
do not name it. D.1.2 bans every glitch not listed in D.1.1, and the shift clutch is a physics/collision
glitch not on the minor-glitch list. D.1.note's test: minor glitches are ones that "can reasonably be
done unintentionally". Allowed relatives: sticky boat clutch (D.1.1.q), boat velocity reset (D.1.1.r).
Banned relatives: offhand clutch (D.1.2.j), ghost block jump (D.1.2.i).
Real-run example of the temptation: "Zero choke with shift clutch" (2025-05-04)
https://www.youtube.com/watch?v=zHMBpq-cS6U . Mojira report "Avoiding fall damage with sneaking"
(MC-260332, resolved, disputed): https://mojira.dev/MC-260332

### 16. Parkour tricks relevant to speedrunning

[confirmed] General parkour: a **neo** is a jump around the edge of a wall, from one side of a
one-block-wide wall to the other, using air strafing (double and triple neos exist). Other
fundamentals: tick timings, momentum, head-hitters, ladders. Zeltrix's guide, pinned corrections
included: https://www.youtube.com/watch?v=KLH5FNiJ0Po&t=678s (Axes and neos 11:18)
Speedrun-relevant movement, mostly allowed glitches:
- **Sprint continuation while crawling or sneaking** (allowed, D.1.1.ad) and **sprintbridging**: k4yfour
  claims "probably 30% faster" speedbridging (2023-10-07). Legal because it "happens on accident all
  the time": https://www.youtube.com/watch?v=icogESJ8KQY ; eliotex original https://youtu.be/NiOMVtrkV-M
- **Sprintcrawl boat method** (k4yfour 2023-08-31): https://www.youtube.com/watch?v=G2AeBEDznUw
- Soul skating (D.1.1.y), block effects ignored on block edges (D.1.1.u), synced lava blip (allowed)
  vs desynced lava blip (banned).
Neos and similar parkour have no real use in Ranked routes **[inferred]**. Bridging and sprint-crawl
tech do.

### 17. "1+1+1+1": four explosives in one rotation

[confirmed via practice-map code and frames] In Mescht's Zero Practice map the kill summary reads
`Explosives: X+Y`. Y counts explosive hits landing within 30 timer units of the previous hit, which
the map treats as a "+1"; crossbow and crystal hits are excluded (`health_display_damaged.mcfunction`,
`dragon_killed.mcfunction`, https://github.com/Mescht/Zero-Practice). A **1+3** kill is one explosion
plus three chained "+1" explosions: four explosives (beds and charged anchors, crossbow for the
i-frame timing) in a single dragon pass. This matches "1+1+1+1".
- quyxotic, "one rotation zero" (2025-05-30): m88, front diagonal cw, y95, `Explosives: 1+3`, about 22.8 s: https://www.youtube.com/watch?v=LzC_iu4zRmI
- Email23, "1+3 Bow MCSR zero cycle" (2025-05-17): same tower and height, about 22.9 s: https://www.youtube.com/watch?v=6nBfRaYIT00
- Related joke clip: chloe, "The real meta way to 4 explosive zero cycle" (2025-07-19): https://www.youtube.com/watch?v=q8qEwS8eFGg
Notation conflict: zero-cycle.md defines N+M as "N rotations, M rotations with two explosives". In the
practice map, M is the count of chained follow-up explosives. Both readings exist; the roadmap should
pick one. 30 timer units is probably ticks (1.5 s); **unconfirmed**. Treat it as a party trick: a
real-run 2+2 is the top practical target.

### 18. Walking/boating on lava with boats in 1.16

[confirmed, as manhunt-era tricks rather than Ranked tech]
- **Lava boat running/jumping**: place a boat on lava, hop onto it, place the next one ahead before the
  boat burns, and repeat. Popularised by Dream's 2020 manhunts. Baablu did it with only two boats by
  recycling them (comments call it much harder than it looks).
  https://www.youtube.com/watch?v=jVZfYHRVbsg (2020-09-21), https://www.youtube.com/watch?v=BTvzetk5aJk ,
  Baablu https://www.youtube.com/watch?v=1-XOCqHtcEc
- **Fire boat** (allowed glitch, SRC D.1.1.aw): light a boat for exactly one tick (flint and steel,
  right-click then left-click immediately). It takes fire damage 8 times without breaking and falls
  slower, giving up to about 20 extra horizontal blocks from drops of 70+ blocks. Use: crossing nether
  lava lakes from a height. Trade-off: 2–5 s slower than a normal boat drop.
  Howwyl with DuncanRuns (2021-01-14): https://www.youtube.com/watch?v=XhyoWkTtJv8 (the rules PDF's
  example link)
- **Lava boat clutch**: landing in a boat on lava cancels fall damage (sticky boat clutch, allowed).
**Unconfirmed**: the exact 1.16 mechanic that lets a boat float on lava before burning, and whether any
current Ranked runner uses lava boat running.

---

## Corrections and notes for the existing research files

- stronghold.md "Divine travel does not work in Ranked": narrow it to nether-based divine. The wiki's
  wording does not cover overworld chunk 0,0 features (unconfirmed either way).
- stronghold.md boat eye row: add green boat / god sensitivity (no F3+C), nether boat angle, the mod
  360 hotkey (Ninjabrain Bot 1.5.0+), and desync prevention (boat exit, jump, or 1 s still). Desync and
  eye wiggle are different problems.
- zero-cycle.md N+M notation conflicts with Mescht's practice-map notation (item 17).
- end.md / one cycle: anchor order (before beds on one cycles per the MCSR wiki, after beds on zeros
  per Metafy) needs a decision.
