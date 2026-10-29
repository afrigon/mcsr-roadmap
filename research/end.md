# End fight

Everything in the End except zero cycling, which has its own file: [zero-cycle.md](zero-cycle.md).

## Sources

- Couriway, Ultimate Guide Chapter 6 "The End" (largely by thecamo6), Metafy, login required,
  last updated 2026-04-02.
- MCSR wiki: dragon mechanics https://mcsr.miraheze.org/wiki/Dragon_fight_mechanics, one cycle
  https://mcsr.miraheze.org/wiki/One_cycle, pearl clipping https://mcsr.miraheze.org/wiki/Pearl_clipping
- k4yfour, "How to One Cycle" (2025-12): https://www.youtube.com/watch?v=u9UVwwWxN_k
- emnerson with thecamo6, damageless oneshot (2026-07-20): https://www.youtube.com/watch?v=R3iebSGQPkU
- Practice: Mescht Zero Practice https://github.com/Mescht/Zero-Practice (includes one-cycle mode);
  ryguy2k4 End Practice https://github.com/ryguy2k4/ryguy2k4endpractice/releases

## Mechanics

- 24 path nodes: outer ring of 12 at radius 60 (used only while crystals remain), middle ring of 8 at
  radius 40, inner ring of 4 at radius 20.
- At the end of each path the dragon rolls to perch or strafe. Perch chance is 1/(crystals + 3);
  strafe chance rises as crystals are destroyed and falls the farther you stand from the fountain.
- Each path choice has a 1-in-8 chance to reverse direction.
- More than 50 damage taken while perched makes the dragon fly off.
- On death the dragon flies to the fountain, plays a 10 s death animation, then the exit portal opens.
- Ranked standardizes strafe and perch rolls with a per-seed random number, and forces a perch once
  P(no perch yet) falls below 0.1. See [ranked-context.md](ranked-context.md).

## Basics

- Avoid endermen by keeping your crosshair 20° above or below the horizon. If one aggros, trap it in a
  boat on a block.
- Bridge or pearl to the island; tower pearls are thrown low and fast. Jump just before a pearl lands to
  buy time for the first block.
- Explosives come from village beds or, more often, bastion string and glowstone. A bed or anchor used
  in the End explodes.
- Beginner kill: melee crits on the perched dragon over several perches, or beds on the perch in any
  number.

## One cycle

Kill the dragon with explosives during a single perch, before it settles and the 50-damage flyaway
applies.

1. Place one obsidian beside the bedrock pillar: for a back dragon on the left and run right, for a
   front dragon on the right and run left (Metafy); k4yfour frames it as the north or south side.
2. Craft beds while waiting if they aren't pre-crafted.
3. Wait behind the pillars around z70 to lower the strafe chance; hitboxes on.
4. Let fireballs explode, then jump. When the dragon snaps toward the perch, run or pearl in.
5. Stand on the side the head swings toward, close to the pillar, and explode one bed per head turn.
   Too low and it breaks the bed; too late and it flips, reducing damage.

Variants: 5 beds (easy, consistent) and 4 beds or 3+1 (optimal, where +1 is a second explosion on the
same head turn). Anchor and TNT substitutes exist. Marcus's one-cycle explanation, recommended by
Couriway's guide and the Ranked wiki FAQ: https://www.youtube.com/watch?v=JaVyuTyDxxs A Ranked one cycle averages about 1:46 (frontcage
sample of 20).

## Half bow

Shoot most but not all crystals so the dragon perches sooner on average. The current version is the
Automatt half bow: pillar next to your fountain obsidian and shoot from the middle. Example:
https://www.youtube.com/watch?v=WLopBQtv1Aw

Ranked compares the accumulated P(no perch yet) against a per-seed random number, so fewer crystals means
a deterministic, earlier perch on that seed. That makes the half bow a reliable lever rather than a
gamble (inference from the standardization rules and vanilla perch odds, not stated in a guide).

## Damageless oneshot

A perch kill without explosives: melee the dragon, then fire a weak arrow while moving fast. Arrow damage
scales with velocity, so one shot (sometimes a few) kills. Oneshot is an allowed glitch.

- **Requirements**: bow, one arrow, an axe or sword, blocks to reach the fountain top, a crosshair
  overlay image (Toolscreen image overlay with a toggle hotkey), and **OneShotLagFix** turned on in
  Ranked settings → Performance.
- **Steps for an X-facing dragon**:
  1. While waiting at the one-cycle spot, offhand the bow and enable the overlay.
  2. Run to the side the head turns to; land 5 full axe hits or 8 sword hits.
  3. Pillar 2 on the bedrock opposite where the dragon flew in, jump onto the fountain.
  4. Move to the dragon's centre (the L shape around two lighter pixels).
  5. Look straight forward and down, switch to third person, and stop all mouse movement (lift the
     mouse or use a DPI toggle; any movement means 0 damage).
  6. One more full hit.
  7. Line up from the tail direction: tail down-right means ½ pixel down and ¼ pixel right, mirrored
     for other directions, relative to the dragon.
  8. Draw the bow while holding shift and nudge with movement keys. Releasing deletes the arrow; with
     one arrow, switch hotbar slot instead of firing.
  9. Final shot: jump, left-click and right-click together, releasing the weak arrow at the apex.
     Repeat until it dies.
- 45° dragon: the second adjustment is ½ pixel. Z-facing dragon: aim ½ pixel toward the head.
- Avoid fall damage for 3 s after the kill; if launched, land with a boat or bucket, not a pearl.
- **When to use it**: after a failed zero or one cycle or a missed perch, and on low-explosive Ranked
  seeds, where it frees string and glowstone for blaze bedding. thecamo6 says it "can easily save 30
  seconds" for players not confident in zeros. Learnable in about 15 minutes.
- 100-example stream: https://youtu.be/GNBNAv7lrxg

## Ground zero

A setup at the fountain that kills from the dragon's strafe pattern on any End, about 15 s slower than a
zero. It needs 7–8+ explosives, iron bars and obsidian. Found by Starchomper (2023-08); the iron-bar
version is from luvvlyjude.

- Explanation (setup outdated): https://www.youtube.com/watch?v=R9OH8phaMGw
- Iron-bar setup: https://www.youtube.com/watch?v=jdXYoPX4ckY
- Couriway's guide starts it with a block and four obsidian on top of the fountain; its example clips:
  https://www.youtube.com/watch?v=illqt1megH8, https://www.youtube.com/watch?v=91czIzGgcl4,
  https://www.youtube.com/watch?v=3GNY8EVt_14, https://www.youtube.com/watch?v=SLj9yt7P1-Y,
  https://www.youtube.com/watch?v=tGRKCNHPF7I

## Buried spawn

You spawn on a fixed 5×5 obsidian platform; about half of spawns are open. On buried spawns, pearl-clip
out. The O-level table is in [zero-cycle.md](zero-cycle.md).
