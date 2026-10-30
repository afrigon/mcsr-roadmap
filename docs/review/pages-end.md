# Notes: end

## Decisions

### End Fight and Zero Cycle
- Research files use old tower names (s76, c79, m88, t94, t103); every page uses Small Boy, Small Cage, Tall Cage, M-85 … T-100, Tall Boy.
- perchKill: states the MCSR wiki fact that critical hits add no extra damage to the dragon and recommends full-charge (axe) hits, although the item description says "Melee crits". See proposed change.
- oneCycleEastWest: built on k4yfour's description ("Standing north or south is to avoid slow dragon movement and for easier bed timing"), read as: east–west = slower dragon, more time, less regular timing. That matches the item description; no source calls east–west the beginner version outright.
- oneCycleAnchors: anchors before beds (MCSR wiki One cycle), matching the owner's rule; anchors page for zeros says after beds.
- Setup tables: when sources disagree on a standing block, the page lists the variants and says all work (t97BackY99, t100FrontY104, tallBoyFrontY104) instead of picking one.
- t97: front offset given as 27 −28 (doogile + kohout update), with Couriway's 26 −27 as an alternative.
- tallBoySide / t100Side / universalSide: use the pinned-comment corrections (heights 90/94; 29 −29; multiblock stand 28 −30 / −29 29).
- allTowersY95 table includes back M-85/M-88 at y95 from the catalogue (back M-91 excluded, it breaks the crystal).
- dragonChaseDown and savingFailingZero embed the AutomattPL "End Fight" video at its "Backup strategies" chapter (5:20); its content was not verified (subtitles unavailable in research).
- noCrystalZero: no technique for continuing a zero through a strafe was found, so the page explains the mechanic and the standard bail, and embeds FrizzClips' "End crystal break" chapter.

### For Fun
- beefSaladSafe = Kue's "BeefSalad Safety Blocks" (p58DE9RS6Cg), not the classic gap blocks that guides call "safer".
- onePlusThree: says the bow shot starts the invulnerability timer, as on the bow +1 page; tower named "front M-88 y95, front diagonal clockwise" from the quyxotic/Email23 clips. "2+2 is the top practical target" kept from followup-end.md.
- oldBridgeNames: maps the old names to current routes through rampart layout. The MCSR wiki bastion-routing page uses Double Single / Left Triple / Right Triple as bridge headings; Double Triple sits under Stables there. Cracksmoker is listed for Right Triple and Double Triple because nether.md says "right-only triple, both or none".
- classicBartering: read as "trading with piglins outside a bastion route, around the portal". The page only states general bartering facts and Ranked barter standardization.
- seedQueue: wall keybinds and memory figure taken from the SeedQueue GitHub wiki Config page.
- shiftClutch: links the Ranked rules page, mc.sr/rules and Mojira. No tutorial video embedded, so the page does not teach a banned technique.
- lavaBoat: covers the fire boat and lava boat clutch as legal relatives.
- treasureMap and bucketlessPortal point to the skills that replace them in Ranked (mapless pie-chart scan, woodlight portal).

## Unconfirmed

### End Fight and Zero Cycle
- lostBlockRecovery and knockbackRecovery: no dedicated source; the pages hold only inferred, conservative advice (indestructible block under the top position, staircase ledge, clutch and pearl back). Treat as provisional.
- fallRecovery: "on a 1/8 the fall is short enough to rebuild where you land" is inferred from the thecamo6 1/8 recovery clips' existence, not stated.
- midZeroEating: "eat between rotations" and "food in the offhand" are inferred; only the Metafy quote is sourced.
- tripleStack: no source describes the triple-stack build or its backups in text; the page defers to thecamo6's T-97 y99 triple-stack clips. Which setups top runners triple-stack is unconfirmed.
- portalRoomDeathReset: how the death itself is done (fall, lava, etc.) is not in the research, so the page doesn't say. JOURONA's video coverage of the portal-room case is unverified.
- arrowRotationFlip: only the one-line rule (early keeps, late flips) is sourced; no clip found.
- exoticExplosives: no detail beyond "5+1 universal back" and kohout's catalogue; timestamp in kohout's video not known.
- crossbow: no dedicated crossbow-zero tutorial; lvckyruns' standing blocks are from his pinned comment.
- pearlClipNormal O57: the normal clip is "build up 1"; whether you also mine 4 first is unclear in the table, so the page says only "Build up 1, then clip".
- half bow "done slowly it is slower than waiting" paraphrases k4yfour's description.
- Back 1/8: −23 0 vs −24 0 still unresolved (stated as probably the same block).
- m88 back offset (−29 27 vs −28 26) not used on any page.

### For Fun
- Jungle temple: whether it is in normal matchmaking or only an event mode; the iron and lava-pool guarantees (Awesome, "I believe") are left out. The lever order is given only as "first, next twice, break the far one", with a pointer to the videos.
- Classic bartering: no source defines "classic bartering at the portal". The page stays general.
- Old bridge name "Buried": no source maps it to a current route, so the page says so.
- Pearl boost: no speedrun source, legality not ruled on. The page says so.
- Sprint-bridging: the exact input technique (how sprint survives the crouches) is described only as "sprint state carries through"; k4yfour's "about 30%" is his estimate.
- Ground zero video R9OH8phaMGw: author not identified, titled without an author.
- Lava boat: the 1.16 mechanic that lets a boat float on lava is unconfirmed, and so is any Ranked use.
- Toe Tickler / Boat TNT treasure: mechanics not described in the research beyond "unrealistic" and "sometimes misses a block"; pages defer to the videos.

## Proposed roadmap.kdl changes

### End Fight and Zero Cycle
- perchKill description "Melee crits and beds on the perched dragon." → "Full-charge melee hits and beds on the perched dragon." The MCSR wiki One cycle page says critical hits add no extra damage to the dragon.
- buriedSpawnEscape (O54–O56, End Fight) and pearlClipNormal (O56/O57, Zero Cycle) overlap at O56; consider O54–O55 for buriedSpawnEscape, or making pearlClipNormal its child.
- pearlClipNormal, pearlClipShift and buriedHighClips all have title "Pearl Clip"; buriedHighClips's description "Clips from O58 and deeper" could name both clip kinds ("Shift and normal clips from O58 and deeper").
- t97 description "front offset y99 on 27 −28": fine; could note Couriway's 26 −27 alternative.
- noCrystalZero: no source shows a zero continued through the strafe; consider recasting it as "recognise the strafe and bail" or moving it to a lower-confidence goal.
- safetyPillar: no source gives a pillar height beyond "pillar 2 beside the fountain"; description is fine.

### For Fun
- beefSaladSafe is the parent (sub15) of beefSaladHole (sub13), but the safe variant is the classic BeefSalad hole plus three blocks. Suggest swapping: Classic first, Safe as the child; or keep them as siblings. Also, the sub15/sub13 goals are early compared with Calisthenicuber's "high Gold / Emerald+" and HiTrippy's "super experienced".
- jungleTemple: add a `ranked` note or label "Event" saying it is an event-mode seed type (from 2026-07-30).
- classicBartering description "Bartering at the portal." could say what it is compared with: "Trading with piglins outside a bastion route."
- seedQueue description "Wall resetting, RSG only." is fine; "RSG" could be spelled out as random seed.
- shiftClutch description says "banned in Ranked and on speedrun.com". speedrun.com rules v8 do not name it; it is banned there only through the general "every glitch not listed is banned" clause. Wording still holds.

## Thin pages

### End Fight and Zero Cycle
- towerPearl, overhangSpawns, arrowRotationFlip, exoticExplosives, lostBlockRecovery, knockbackRecovery, noCrystalZero, eighthTwoPlusTwo, tripleStack, preCraftBeds, avoidEndermen: short for lack of detailed sources.

### For Fun
- bucketlessPortal, classicBartering, toeTickler, boatTntTreasure, pearlBoost, neo, treasureMap: opening plus "How it works" only (plus a video where one exists).

