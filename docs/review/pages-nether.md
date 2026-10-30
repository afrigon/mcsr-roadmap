# Notes: nether group

## Decisions

### General

- autoFunnel.mdx: "Beef Salad" corrected to "BeefSalad" per the terminology rule.

### Nether

- eRay teaches the thin macro (the roadmap's rule) instead of the FOV 30 setting that every source
  (MCSR wiki, Mikeyboie, PudgyPenguin, k4yfour) uses. Explained mechanically: the thin window narrows
  the horizontal view, so the left E number counts a thin slice.
- eRayCorrection likewise drops the wiki's "raise FOV to 50 when close"; it keeps the
  macro-independent parts (rescan while running, wider spike when close, screen-edge spike, aim
  above/below the horizon at low/high spawns, near-instant E jump = Bridge facing you).
- piglinRules covers the three aggro levels in plain words (seen without gold / chest-or-gold break /
  hit) without the "tier" jargon, since it is a First Completion item.
- fireResistanceTiming: interpreted "drink the first one at the last second" as drinking only when
  the first blaze is about to shoot, so the whole duration covers the spawner fight; added the
  shield / enchanted golden apple fallback from Calisthenicuber.
- preNetherSettings includes planar fog as a fourth row (Mikeyboie lists it with the other three);
  the wide-macro page depends on it.
- terrainReading uses a biome table (Mikeyboie Part 3, 1:13:23).
- netherBoat includes the boat crawl steps (Mikeyboie Part 3) since terrainReading points to it and
  no other nether item covers it; the roadmap.md "Boat crawl" item may exist elsewhere, in which case
  it may be trimmed.
- netherHungerReset reuses the MCSR wiki damage table; respawnInvulnerability assumes items are in
  the respawn hole so the pearls are picked up instantly.
- Resources timestamps added from subtitles: Mikeyboie Part 2 (CRwiJcWWUlY) 53 settings, 146 E-ray,
  229 M and C, 596 boats, 630 wide macro, 742 piglin aggro, 920 bastion loot; Mikeyboie Part 3
  (JsFcAeBXVpk) 55 fortress/regions, 1000 blazes and fire res, 4403 biomes, 4649 boat crawl
  (approximate, transition to caved terrain); k4yfour M-sffdCnv-4 chapters 28/39/50; PudgyPenguin
  yUeSm0C0t50 chapters 25/88/154.

### Bastion

- Piglin aggression levels named 1/2/3 (light/medium/heavy) in a table, following research section 10.
- gravelTrades is written as the technique "drop gravel/soul sand on the hole to lift trades within
  reach" (roadmap.md: "Gravel trade collection"), not "collect gravel from trades".
- piglinPitEscape: "piglin pit" read as the trading hole or any pit full of angry piglins.
- exitLoot explains why each item matters (10 obsidian per blind portal, 12 string per bed) and
  uses Mikeyboie's minimums (12+ pearls, 2–3 fire res); targetInventory carries the full table.
- targetInventory: 20 obsidian explained as two 10-obsidian portals (blind + double travel, per
  stronghold.md); soul sand explained as spawner-platform blocks (nether.md). Derived "8 gold blocks
  = exactly 3 pearl trades = 12–24 pearls" from the Ranked barter rule plus 1.16.1's 4–8 pearls per
  trade (Mikeyboie).
- rampartChests/noIronEntry repeat ranked-context's nuance (Bridge iron may be in the lodestone
  chest), which is more specific than the kdl ranked note.
- hardToggle cites Daniel_H212's "more than five blocks" for Easy rather than game-code numbers.
- Practice map page notes it is 1.16.1-only and lists options seen in sources (type, terrain,
  spawn point, rampart variants, loadout); no version number on the page.
- Dropped Calisthenicuber's "stay up top when you break the boat" remark: its meaning was unclear.

### Housing and Bridge

- Easy/Optimal pairs: the Easy page carries the full base route; the Optimal page only covers what
  it adds and points back. Same for Manhunt RSG/Ranked.
- manhuntEasy (RSG) = no hard toggle, no upper backups; manhuntOptimal = hard toggle at the center
  chest + upper three backups (Calisthenicuber 23 piglins). The MCSR Wiki 2026 manhunt video
  already includes the hard toggle, so it is embedded on both.
- topDownEasy is written from HiTrippy's beginner top-down plus the MCSR Wiki version. The wiki
  version already contains a hard toggle; mentioned on topDownOptimal, not on the easy page.
- halfDown is described as the core of top-down (Calisthenicuber: "from here we're just doing half
  down"), which is why it sits under top-down in the tree.
- E-ray in rampartDetection is described without any FOV value (roadmap rule: thin macro, no FOV-specific
  settings); only Calisthenicuber's 11 vs about 20 entity example is given.
- soog page: Calisthenicuber's right-side route is labelled "safe soog" in his narration; I embed it
  as the safe version, and the MCSR Wiki / HiTrippy videos for the standard one.
- Walter extension video (vBuY4co4COs) is on the channel "euben"; frontcage credits the route to
  mobina. Page credits mobina in prose and labels the embed with the channel name.
- tntChalice: TNT lit with a button (from research/nether.md), not flint and steel.
- Estrogen: the BastionHelper Fabric mod linked in the video description was left out (legality in
  Ranked not checked).
- Lodesteal: kept kindred's own warning that it probably won't save time below Diamond.
- lavaManhunt: Calisthenicuber's claim that the Ranked filter does not exclude lava housing is
  attributed to him; consistent with ranked-context.md, which lists no such filter.

### Treasure and Stables

- Called rampart buildings "towers (ramparts)" on treasure pages, following HiTrippy's and
  Calisthenicuber's narration.
- rampartTypes: treated "diagonal" as an older name for the single rampart. A 2021 r/MinecraftSpeedrun
  guide by zolsticezolstice (whose images HiTrippy credits) describes the "diagonal chest rampart" as one
  chest with no gold, which is the single. Also stated meebie's note that lantern and double are the same
  rampart.
- doubleTriple: treated "split" (MCSR Wiki 2024 chapters: Split Double Triple (Lantern) or (Single)) and
  "divorced" (Calisthenicuber 2026-06: triples on opposite sides) as the same configuration: the two
  side triples with the middle rampart between them.
- hourglass: meebie credits video CV3B9tLK8z0 as "Chloe's (and Pavkin's) Hourglass Route", but the
  uploader is "kindred". Titled the embed after chloe and pavkin.
- tripleToGapEasy covers middle TTG and Suigi; tripleToGapOptimal covers the side variants with a table
  built from meebie's chapters. Each points to the other.
- crispyEasy and crispyHard point to each other; crispyHard stays short because the only source is a
  showcase without commentary.
- Gold collection order in safeBoomer (middle three, left two, bottom-right last) follows HiTrippy and
  Calisthenicuber, both of whom present it as common practice rather than a rule.
- Embedded Reek's "safe first part of triple triple" video (OzRnVa4jw7I), linked from his guide's
  description, and crossroads198x's original L-gap (S_oBPip5dsE), linked from Lucento's description.
  Neither was watched.
- glowdar: embedded wDKUpAsY9AQ titled "MCSR Ranked: Glowdar explained", from roadmap.md's label
  "Ranked Explanations: Glowdar". Its metadata couldn't be fetched because YouTube rate-limited the
  requests.
- YouTube returned HTTP 429 partway through; no YouTube requests after that.

## Unconfirmed

### Nether

- E-ray spike sizes (35–70) are measured at FOV 30; with the thin macro they will differ, so the
  page gives no number.
- Entity culling "off" rationale (culled entities behind walls would not count in the left E number)
  is inferred, not stated by a source.
- How a boat crosses a lava lake: Mikeyboie only says boats help "make it over vast lava lakes". The
  page attributes it to him and adds "keep fire resistance ready" without describing the mechanism.
  Whether a falling boat breaks on landing in 1.16.1 is also not stated.
- Respawn anchor details (recipe from crying obsidian and glowstone, one charge per respawn, setting
  spawn costs nothing) are vanilla knowledge, not from the research files.
- Fire resistance potion duration (3:00 from bartering) left out; not in the research files.
- No structured "low fire resistance seed" guide exists (followup-nether.md section 9); the
  fireResistanceTiming page is assembled from scattered tips.
- Biome visual descriptions (colours, shapes) are general game knowledge.

### Bastion

- goldPickaxe: "breaks netherrack instantly" and "fastest mining speed of any tool material" are
  vanilla game-code knowledge (gold speed 12, netherrack hardness 0.4), not from a cited source.
  Low durability likewise.
- goldTrading: "admires it for a few seconds" kept vague (vanilla is about 6 s, not cited).
- hardToggle: game-code reading (from memory) gives max chase drop of about 5 (Easy), 9 (Normal),
  13 (Hard) for a full-health piglin; only the Easy value is supported by Daniel_H212, so only that
  is stated.
- buttonTnt: "a button costs one plank" and "place it on the TNT or a block touching it" are vanilla
  facts, not from a speedrun source.
- boatClimb: repeated boat dismounts to climb inside a bastion are not documented anywhere found;
  the page only states the dismount-height mechanism (7rowl, End cage example) and boating down
  into Treasure (Daniel_H212).
- piglinPitEscape: gravel/soul sand pillaring as a pit exit is not shown in any source; it is plain
  pillaring, stated without a source clip.
- buriedLineups: no consolidated buried-bastion reference exists; page lists Rysel's dig spots,
  ThugMCSR's Housing pearl and crossroads198x's lineup videos (the latter not reviewed). Stables
  basalt-formation and right-gap details left out as too vague to teach in text.
- autoFunnel: Soog's auto funnel listed from nether.md only, not reviewed.
- bastionTypes: Treasure "towers" description from Mikeyboie/nether.md; Stables "terrain inside only
  here or Bridge" paraphrases Calisthenicuber.

### Housing and Bridge

- topDownOptimal: where the three backup gold blocks are, and exactly how the block elevator is
  applied to them. No transcript spells it out; the page stays general.
- crossbowTopDown: how the crossbow is used (what it shoots, when) is not described in the short's
  description and the short has no speech. Page only states 24 piglins and the extra-blocks note.
- tntHousing: Calisthenicuber mentions a roughly 1-in-4 chance for one particular gold block to also
  explode; left out as unclear.
- housingExitClip: the exact pearl lineup and landing spot; page points to the clip.
- goose: no subtitles with route steps (the v1.1 video is a montage); steps come only from
  Daniel_H212's comparison. "Needs 3 blackstone" is from roadmap.kdl/nether.md, not re-verified.
- quickhunt: "needs 2 blackstone" likewise from roadmap.kdl/nether.md.
- daisy, boatlice, subway, estrogen: videos are wordless showcases; pages use only the descriptions
  and nether.md. Daisy's "open" is read as "not buried".
- safe soog vs soog: the difference between them is not stated in any source read.
- Estrogen: what the parent "Hamazon" route is was not looked up.
- manhuntHoles: the wiki table's "pre-trade time" unit is presumably seconds; the page avoids the
  numbers except blocks mined (15 vs 19).
- pearlToTriple door landing: Calisthenicuber shows landing on a door to avoid fall damage while
  dropping in housing; whether it is part of the pearl lineup specifically is unclear. Stated as a
  general trick.
- HiTrippy's Lodesteal footage misses one block at 8:39 (his own pinned note); page embeds from
  8:00 and doesn't detail that block.

### Treasure and Stables

- Glowdar: how to read the fortress direction once the ghost spawner entries appear. The frontcage
  thread defers to a video and an explanation post that weren't readable. The page gives the settings
  and the 0.01% threshold from research/nether.md and points to the video.
- DTGB: the showcase has no commentary or description ("yeah"). The page states only TNT, left side and
  boat, from research/nether.md.
- crispyHard, crispyTnt, crispyEasy: Lucento's showcase (ECIPK7FnSIQ) has no usable speech, so the
  block-by-block steps of both variations aren't described. Facts come from research/nether.md and the
  info-dump chapter list.
- L-gap mechanics: not described; only Lucento's comparison verdict is stated.
- Eski: the micro on the page comes from Reek's deep dive (auto-captions transcribe the name as "SQ").
  The position of the hole isn't described.
- chestPriorities: the moat-wall chest's spawn chance is given by HiTrippy as 25%. The page says
  "only spawns sometimes" because no second source confirms the figure.
- Right-gap check: research/nether.md calls the sources inconsistent. The page uses HiTrippy's checks
  (cracked block, or air behind the corner block), which meebie's guide also describes.
- TNT treasure: Calisthenicuber pick-blocks the tower's brick before placing the TNT; the page keeps
  that step without explaining it. He names sandstone as the soft block and thinks dirt also works.
- Whether "split" and "divorced" double triple are the same thing (see Decisions).
- frontcage's "Double Triple vs TTG" comparison links a Google Doc whose numbers weren't read. The page
  links the thread without quoting figures.

## Proposed roadmap.kdl changes

### Nether

- eRayCorrection description "Rescan on the way and correct from the screen edge" is fine; consider
  noting it as the close-range part of E-ray. No change required.
- fireResistanceTiming: the description states a rule ("none on the way to the fortress, drink the
  first one at the last second") that no source in research/ states as such. Consider softening to
  "On low fire resistance seeds, save potions for the blaze spawner." or adding a source.
- netherBoat description "Boat across lava lakes and down big drops": the lava-lake part is
  under-sourced; consider "Boat down big drops and crawl through walls."
- None of the nether items carry a `ranked` note. Candidates:
  - findBastion: `ranked "The intended bastion is the closest to 0,0 by at least 10 chunks, within 14 chunks of 0,0, with open terrain from the nether entry."`
  - findFortress: `ranked "The fortress starts within 16 chunks of the intended bastion, with open terrain from the bastion."`
  - fireResistanceTiming: `ranked "Barters guarantee obsidian and pearls, not fire resistance."`
  - piglinRules: `ranked "No extra monsters spawn inside bastions; zombified piglins avoid pathing into them."`

### Bastion

- gravelTrades: title "Gravel Trade Collection" or description "Drop gravel on the trading hole to
  lift trades within reach." The current "Collect the gravel trades." reads as collecting gravel.
- bastionPreCraft description says "1–2 beds"; sources also support a third bed in some cases.
  Optional: "Craft beds and an iron axe while waiting on trades."
- boatClimb (sub12) and piglinPitEscape (sub25) overlap heavily and boatClimb has almost no
  source. Consider merging boatClimb into piglinPitEscape, or dropping it until a clip is found.
- Possible duplicates with other groups' item files seen in content/items: piglinRules vs
  piglinAggression, rampartTypes vs rampartChests, practiceMap vs bastionPracticeMap,
  preCraftBeds vs bastionPreCraft, pearlHang vs fortressPearlHang, classicBartering vs goldTrading.
  Worth checking for overlap in roadmap.kdl.
- buriedLineups ranked note could be added: "Open terrain from the nether entry; ramparts can still
  be buried."

### Housing and Bridge

- halfDown description "The half-down housing route." restates the title. Proposed: "Enter from the
  top stairs, skip the top chests, push two gold blocks to you and dig the hole."
- tntHousing description "Housing with TNT." Proposed: "Blow up the buried gold line with
  button-lit TNT once the piglins are trading."
- donkeyKongOptimal description "The advanced Donkey Kong." Proposed: "Donkey Kong with an auto
  funnel, so you loot while the piglins arrive."
- lowerSideEntry description "Enter from the lower side." Proposed: "Enter from the lower bridge,
  where hoglins never spawn, and staircase the piglins up."
- manhuntHoles description "Twice-elevated hole variants." Proposed: "Pick a manhunt trading hole by
  blocks mined, time to first trade and lava safety."
- lodesteal description "Left triple to chalice." Proposed: "Aggro the left (lodestone) triple and
  trade at the chalice with an auto funnel."
- bankHeist description "Right triple to chalice." Proposed: "Aggro the right triple and trade at
  the chalice with an auto funnel."
- cracksmoker goal: roadmap.md had it at First Completion; roadmap.kdl has sub45. Either is fine;
  noting the mismatch.
- walterExtension parent is lowerSideEntry, goal sub8; frontcage says it should be standard for
  lower-bridge routes with enough blocks, so a lower goal (sub10 or sub12) may fit better.
- crossbowTopDown goal sub8 vs roadmap.md Sub 8: consistent; no change.
- singleSingle: label could be "Mogul" since HiTrippy names the route "Mogul hole".

### Treasure and Stables

- rampartTypes description: "Identify triple, single, lantern and diagonal ramparts." Diagonal appears
  to be an older name for single (see Decisions). Proposed: "Identify single, lantern and triple
  ramparts."
- rampartTypes sits in the stables category, but Housing and Bridge also have rampart types. Consider
  whether it belongs with the general bastion items. The page leads with stables and adds one line on
  the other bastions.
- chestPriorities description "Take the wall chest by the moat first." The page also covers the
  no-iron-pickaxe chest order (Daniel_H212). Possible description: "Check the moat wall chest, and loot
  the counted lava-basin chest first without an iron pickaxe."
- tripleToGapEasy description "Middle TTG and the safe Suigi variant." Suigi is k4yfour's route
  (improved by maexxez) and works from any triple, not only the middle one. Consider "Middle TTG, and
  Suigi for any triple."
- hourglass description is accurate; the label could credit chloe and pavkin if labels carry credits
  elsewhere.

## Thin pages

### Nether

- fireResistanceTiming: assembled from tips; no dedicated source.
- respawnInvulnerability: one source (crossroads198x 2022 video description); the immunity length
  ("3 seconds") comes from it.
- netherBoat: lava-lake use unexplained (see Unconfirmed).

### Bastion

- boatClimb: mechanism only, no bastion-specific climbing source.
- piglinPitEscape: one source for the boat, none for gravel pillaring.
- buriedLineups: a list of known spots rather than a structured guide.
- hoglinFood, gravelTrades: short but sufficient.

### Housing and Bridge

- crossbowTopDown, housingExitClip, subway, boatlice, daisy, estrogen: only video descriptions and
  wordless showcases exist; pages are short (opening + How it works, some with a short practice
  list).
- goose: step-level detail missing (see Unconfirmed).

### Treasure and Stables

- dtgb (showcase with no commentary)
- crispyHard, crispyTnt (showcase timestamps only)
- lGap (comparison verdict only)
- glowdar (procedure for reading the direction missing)
- badGapChest (short by nature)
