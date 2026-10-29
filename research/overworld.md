# Fundamentals and overworld

Covers setup, controls, crafting, movement and everything from spawn to entering the nether.
Ranked filter details live in [ranked-context.md](ranked-context.md).

## End-to-end series

- Mikeyboie, "Minecraft 2025 Speedrunning Guide for Ranked/RSG", Part 1: setup and all overworlds
  (2025-06): https://www.youtube.com/watch?v=egyiA_8FztM
- Calisthenicuber, "Complete ... Guide for Ranked" series (2025-09 to 2026-03), one video per seed type,
  linked in the sections below.
- Fulham, "how to route overworlds in mcsr ranked" (aimed at Gold players, 2025-09):
  https://www.youtube.com/watch?v=PSIZcalS-iM
- Spaceman, "How to Speedrun Minecraft: Overworld" (2026-01): https://www.youtube.com/watch?v=sJS4ozrQZew
- Couriway, "Ultimate Minecraft Speedrun Guide" on Metafy (login required; chapters by silverrruns,
  doogile, draconix, Mari, thecamo6): https://metafy.gg/guides/view/ultimate-minecraft-speedrun-guide-cIzfjeTmwOm

## Setup and controls

- **Setup guides**: draconix full setup (2026-04, the one the Ranked wiki links):
  https://www.youtube.com/watch?v=l-q-_4R8_6M; HiTrippy setup: https://www.youtube.com/watch?v=Uvy0LzZuCxU;
  Haroon Shah Ranked setup: https://www.youtube.com/watch?v=WMzUM5iINOk.
- **StandardSettings** restores settings on every world. Set the pie-chart directory and F3 pause on load.
- **Video settings top runners converge on**: brightness 500%, GUI scale max, view bobbing off,
  particles minimal, VSync off, unlimited FPS, fullscreen, auto-jump off, music off, subtitles on
  (lava is audible and subtitles show its direction), FOV personal (100 to Quake Pro).
- **Render and entity distance**: around 10–20 render and 500% entity distance in general; render 8
  and entity 50% for buried-treasure pie scans, raised after the chest is found. Entity culling off for
  pie-chart work.
- **Pie chart** (Shift+F3): `root.gameRenderer.level.entities` for chest/structure scans,
  `root.tick.level.entities.blockEntities` for spawners. Preset it in StandardSettings.
- **F3 combos**: F3+G chunk borders, F3+B hitboxes, F5 third-person scouting, F3+C for Ninjabrain Bot.
- **Keybinds**: no universal standard. Common: hotbar 6–9 on reachable keys, offhand on a thumb key,
  perspective and F3 on mouse side buttons, a render-distance key that does not crouch. With Toolscreen
  or Waywall: split-rebind strafing so you can strafe while holding F3, tuned key repeat. HiTrippy
  keybinds (2026-06): https://www.youtube.com/watch?v=UsdEzcsCafo
- **Consistent hotbar**: same item, same slot, every run. No authoritative standard layout was found.
  The MiniPracticeKit hotbar is the usual way to drill it: https://www.youtube.com/watch?v=qjKK3SY4oAg
- **Resolution macros**: thin (pie-chart pinpointing), wide/planar (nether terrain at the screen edge),
  tall/eye zoom (eye measuring). Tools: Toolscreen (Windows only) https://github.com/jojoe77777/Toolscreen,
  Waywall (Linux) https://tesselslate.github.io/waywall, Jingle https://github.com/DuncanRuns/Jingle.
- **Ghost bucket**: flicking the crosshair while using a bucket desyncs it. Keep the mouse still.
  https://www.youtube.com/watch?v=Xm_eupwkt-A
- **Practice tools**: MCSR Practice Map (Dibedy), the all-in-one map:
  https://github.com/Dibedy/The-MCSR-Practice-Map/releases/latest; MiniPracticeKit:
  https://github.com/Knawk/mc-MiniPracticeKit; Semperzz Portal Practice:
  https://github.com/Semperzz/Portal-Practice/releases; 7rowl OWPractice:
  https://github.com/7rowl/OWPractice/releases; map index:
  https://www.minecraftspeedrunning.com/public-resources/maps

## Crafting and inventory

- **Hotkey crafting**: drag-craft, shift-click outputs, hotkey outputs to keep slots, avoid
  over-shift-clicking planks into buttons. HiTrippy and GASLEFORT (2026-07):
  https://www.youtube.com/watch?v=HJObsmCxEoU
- **Section / tab crafting**: recipe-book tabs, faster than pages, slower than search. k4yfour (2026-01):
  https://www.youtube.com/watch?v=GM6Dui8m9Zc
- **Search crafting**: short recipe-book queries ("be" beds, "aw" anchor, "xe" axe/pick); Tab then
  Space jumps between search and grid. Optimal play switches the game language to one with shorter
  unique prefixes (Danish, Norwegian). Optimizer: https://searchcrafting.bezz.dev/; Danish doc:
  https://www.youtube.com/watch?v=iHOgCXalNvo
- **Crafting by iron count**:
  - 7 iron: pickaxe (3), bucket (3), flint and steel (1).
  - 8: add an iron shovel. 9: add shears. 10–12: shears and shovel. 13+: add an iron axe.
  - 6 iron (pickaxe from diamonds or an obsidian enter): bucket, shears, flint and steel.
  - Diamonds: 3 for a pickaxe, 2 for a sword, 1 for a shovel. 4 iron + 3 diamonds: diamond pick,
    bucket, flint and steel.
  - Skip shears when you have TNT. Convert nuggets before deciding.
  - FrizzClips: https://www.youtube.com/watch?v=uV7gd4F6-w0
- **Gold tools**: gold axe for a fast wood grab, gold pickaxe for netherrack and blackstone. Gold blocks
  need an iron pickaxe.
- **Fast looting** (allowed glitch): shift-click spam (easy); shift + hotkey/offhand click, 4 inputs
  (standard); 3-input version with an empty hotbar; hotkeyless variant by osh.
  https://www.youtube.com/watch?v=jsyYCQ8W7IE (8:00), https://www.youtube.com/watch?v=ebd3q3HNnQA,
  https://www.youtube.com/watch?v=kjbi2TxAF5Y
- **Recipe-book extra slot**: with the recipe book open, the top-left inventory slot is one keypress
  away. Good for fire charges or flint and steel.
- **Mining-swap gotcha**: swapping between two items resets mining progress.

## Seed types

General target inventory: bucket, pickaxe, flint and steel, 10–15 logs, food, blocks; boat and doors on
ocean seeds; beds from villages. Enter with a lava bucket and eat during the portal animation. F5-scout
at spawn for lava, trees, animals and gravel.

Unverified claim from two runners (Fulham, Calisthenicuber): shipwrecks and buried treasures are always
in the +X/+Z direction from spawn. The filter documentation does not say this.

### Village

Calisthenicuber (2026-02): https://www.youtube.com/watch?v=N3EME1E431U; house map:
https://mcsr.tools/villages

- The blacksmith is the only building with smooth-stone slabs. Loot without entering by mining the
  logs or window next to the chest.
- Checklist: bucket, pickaxe, at least 10 logs, 2 beds, about 7 hay bales (1 bale = 3 bread).
- Golem: easy is to tower 3 blocks and crit; optimal is an axe crit every other jump, or a sword
  crit every jump. F3+B finds it.
- Desert villages without trees: dead bushes give sticks; wood may come from the nether.
- Taiga always has a 10+ obsidian enter.

### Desert temple

Calisthenicuber (2026-03): https://www.youtube.com/watch?v=NEneSUPIh4M; GASLEFORT:
https://www.youtube.com/watch?v=QCV8hesUUcs

- Mine a side block of the center, fall in, mine the block under the pressure plate.
- Easy: TNT above your head and hide. Optimal: pressure plate on the floor so the TNT blows lower and
  leaves more cobble.
- Collect the remaining TNT, pillar out while dropping junk. A sand block placed mid-fall splits fall
  damage.

### Shipwreck

Calisthenicuber (2026-03): https://www.youtube.com/watch?v=fwbi65U7N-Y

- Iron chest at the stern, food under trapdoors at the bow. The map chest is not worth it in Ranked.
- Entry holes exist for sideways and upside-down wrecks.
- Easy: swim back to shore for wood. Optimal: take wood from the ship; iron pressure plate for an air
  bubble.
- Take rotten flesh, carrots and leather armor. With shears, a stack of leaves and 8–9 logs covers
  boat, doors and beds.

### Ruined portal

Calisthenicuber (2026-02): https://www.youtube.com/watch?v=WVG146IN9M0; completions:
https://www.youtube.com/watch?v=FkLYnUw39zU, https://www.youtube.com/watch?v=V2KzS4Fo5-Q

- With a gold axe in the chest, take it and break the chest (about 1 s faster).
- Gold armor (never Thorns), about 15 logs, animals killed with flint and steel.
- Obsidian or bucket enter (80/20). Gold blocks only with an iron pickaxe.
- Watch for Fire Aspect / Looting gold swords, enchanted golden apples (enable fortress-first) and
  golden carrots.
- Completion patterns: C-Dot, Half Portal, Hanging Portal, Small U, Big U, Big Portal 1/2, Big Bertha.

### Buried treasure

k4yfour (2026-01): https://www.youtube.com/watch?v=e-wTSITfJFo; meebie:
https://www.youtube.com/watch?v=o0LDg3fe2iI; Calisthenicuber: https://www.youtube.com/watch?v=jsyYCQ8W7IE

- Mapless: pie-chart blockEntities scan, find the chunk, dig at chunk-relative 9,9.
- Easy: scan the four cardinal directions; the right chunk spikes in all four. Optimal: thin resolution
  and watching the spike change across a chunk border.
- Learn your machine's spike value on a practice seed (example: 4946542200205253057).
- Loot: iron, diamonds, gold, fish, TNT. Gold pressure plate or button for the air pocket. TNT can
  replace shears for wood.
- Treasure maps are irrelevant in Ranked: the filter keeps buried treasure away from shipwreck seeds.

## Nether portals

Overview: HiTrippy, "All Speedrunning Nether Portals" (2026-06): https://www.youtube.com/watch?v=QG7idor1_eM;
magma portals: Calisthenicuber (2025-09): https://www.youtube.com/watch?v=FD798osoq0o

| Portal                    | Notes                                                                                             |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| Lava pool, 2-deep         | Easy: finish the frame, then remove the water. Optimal: drain while placing the last blocks.      |
| Lava pool, 1-deep         | Replace the stone under the frame with lava, or move the water down a layer.                      |
| Cave / dig-down lava      | Find lava by sound, dig out the fewest blocks to recreate an L setup.                             |
| Obsidian only             | 10 obsidian (taiga, blacksmith). Optimal: 4-tall speed pillar in one jump.                        |
| Blacksmith lava           | 8+ blacksmith obsidian plus lava for the rest.                                                    |
| Magma small-L, 2-deep     | Doors and a block on magma, scoop lava, double-click drain. Beginner magma portal.                |
| Magma L, 1-deep           | Grab extra side lava to replace the stone.                                                        |
| Magma 2×1, 2-deep         | Needs only 2 adjacent magma blocks; the standard ravine portal.                                   |
| Magma 2×1, 1-deep         | Same plus the 1-deep fix.                                                                         |
| "LeBron" 2×1              | Lava placed before the block, no door needed, works on leaves. Sub-5 s possible.                  |
| Woodlight                 | Wooden frame blocks lit by lava fire spread; frees the flint and steel iron.                      |
| Ruined portal completions | Fill with the fewest blocks plus existing lava/water.                                             |
| Bucketless                | Not applicable in Ranked: bucket iron is always guaranteed.                                       |

Magma ravines are marked by floating kelp. Find them with hitboxes on and F5 tilted under the water
surface (allowed). Search near the structure first.

## TNT in the overworld

- Desert temple basement (see above).
- Trees: pick two trees close together, stand behind one, raise the TNT one block for more logs.
- Underwater: TNT with a pressure plate or sand above it for gravel, clay or sand.
- TNT cannon for distant trees (niche).

## Animals and food

- Priority: pigs, then cows, then sheep.
- Flint and steel plus axe; optimal is one full axe hit then one fire tick, so the animal never
  reaches water.
- A cow in a dug hole can't path to water while burning.
- Without flint and steel: pour lava inside the hitbox and pick it back up while looking outside the
  hitbox (avoids milking).
- Eat rotten flesh in the overworld and keep good food for the nether. Eat in the portal animation.
- Shear island sheep for free beds.

## Movement and recovery

| Technique                | Notes                                                                                          |
| ------------------------ | ---------------------------------------------------------------------------------------------- |
| Water bucket MLG         | Look straight down, click when the block outline appears.                                      |
| Pearl clutch             | Throw the pearl down: about 2.5 hearts instead of the fall.                                    |
| Block clutch             | Pearl onto a wall, jump just before landing, place immediately.                                |
| Boat clutch              | 2×2 flat area. Easy: butterfly click. Optimal: drag click. Sticky boat clutch allowed; shift clutch disallowed. |
| Sprint-bridging          | Sprint-sneak bridging, about 30% faster: https://www.youtube.com/watch?v=icogESJ8KQY            |
| Sprint-crawl boat        | https://www.youtube.com/watch?v=G2AeBEDznUw                                                     |
| Air pockets              | Door or bed underwater gives a breathing space.                                                |

Clutch reference: HiTrippy https://www.youtube.com/watch?v=2E6Lqwe1yTU; FrizzClips
https://www.youtube.com/watch?v=Cfiq-VG49Gs

## Open questions

- No standard hotbar layout found; the roadmap treats "consistent hotbar" as a personal layout.
- The +X/+Z direction claim for shipwrecks and buried treasure is unverified.
- Trapdoor crawl and drowned handling were not found as distinct Ranked techniques.
