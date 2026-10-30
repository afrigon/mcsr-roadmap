# Notes: overworld group

All 69 pages written in `content/items/`. Main sources: `research/overworld.md`,
`research/followup-overworld.md`, `research/ranked-context.md`, and auto-subtitles plus chapter lists
for ten guide videos (Calisthenicuber village/temple/shipwreck/magma/BT, HiTrippy portals, Mikeyboie
Part 1, Fulham routing, k4yfour and meebie BT), fetched with yt-dlp on 2026-10-29. YouTube returned
HTTP 429 on the eleventh fetch (Calisthenicuber Ruined Portal guide, WVG146IN9M0), so I stopped
using YouTube from that point.

## Decisions

- Video `start` values come from the videos' own chapter markers where one fits, otherwise from the
  15-second subtitle buckets. They can be a few seconds early or late.
- I linked practice maps (Semperzz Portal Practice, Dibedy MCSR Practice Map) only on portal pages.
  Calisthenicuber's loot/crafting practice map ("Overworld Practice V2") isn't linked, because I
  couldn't confirm which repository it is (probably 7rowl OWPractice).
- `woodlightOptimal` opens with "interior woodlights" instead of "modern" (durable writing); the item
  label "Modern" stays as is in roadmap.kdl.
- `golemOptimal`: the sources say to wait for the cooldown between axe crits and to crit on every
  jump with an iron sword. I didn't repeat "every other jump" for the axe, because no source states it.
- `wreckBubble`: Mikeyboie names an *iron* pressure plate for the air bubble on a tilted wreck; I kept
  it to that and didn't explain the mechanics.
- `underwaterTnt`: I describe the setup (plate on the floor, TNT on top, swim through) without saying
  how it triggers, because the sources don't explain it.
- `spawnPieScan`: the +X/+Z claim is stated as something runners report (Fulham 19:30,
  Calisthenicuber BT guide 4:30), not as a rule, as the item description says.
- `buriedChest`: I used a small table for the chest rules of four types and left out the Netherback
  and GJ rules, because those types aren't roadmap items.
- `hayAndBeds`: I say beds explode in the nether and the End (vanilla fact), and are useful as an
  underwater air pocket (Fulham). Fulham's "blaze bed" use comes from the source; I didn't go into
  detail on it.

## Unconfirmed

- `templeSneak`: no source describes a sneak-alignment trick. One Calisthenicuber clip (0:15, mine the
  middle side block and stand on it) is the closest. Web search found nothing. The page covers only
  that and doesn't mention sneaking.
- `cryingObsidian`: the roadmap description says "mine out crying obsidian and recast the gap".
  Vanilla mining makes that very slow without a diamond pickaxe (hardness 50: about 42 s with an iron
  pickaxe, about 9.4 s with diamond), and the reference completions with crying obsidian take
  11–16 s. So mining it out with iron looks wrong. The page leaves out the method and points to the
  MCSR Wiki completion video instead. `research/followup-overworld.md` repeats the "mined out with the
  iron pickaxe" claim, which deserves a check against the video.
- `ruinedPortalLoot`: "break the chest with the gold axe" is confirmed by Fulham (4:35); the
  Calisthenicuber Ruined Portal guide could not be transcribed.
- `waterHole`: the hole size and whether the cow can enter the water are unconfirmed (as in the
  research notes); the page says to finish the cow quickly.
- `blacksmithObsidian`: "the weaponsmith has two lava blocks built in" comes from HiTrippy ("it comes
  with two lava"). It is presumably the weaponsmith specifically; not checked for other blacksmith
  variants.
- `snowyTaigaVillages`: I couldn't confirm the blacksmith designs or whether snowy villages have
  enough trees, so the page doesn't describe them.
- `fireAspectKills`: no runner source covers Fire Aspect kills in detail. The page states the vanilla
  mechanic (Fire Aspect hits ignite and cook drops).
- `houseLayouts`: only bed houses, a desert crafting-table house and acacia buckets are sourced.
  Specific layouts are left to mcsr.tools.
- Ruined portal completion times are read from the MCSR Wiki video's on-screen timers (overlay `6:85`
  read as 6.85 s), as in the research notes.

## Proposed roadmap.kdl changes

- `cryingObsidian` description: "Mine out crying obsidian and recast the gap." looks wrong (see
  above). Proposal: "Complete portals that generated with crying obsidian in the frame."
- `golemOptimal` description: "Axe crit every other jump, sword crit every jump." No source says
  "every other jump". Proposal: "Crit with the axe on cooldown, or with an iron sword on every jump."
- `templeSneak`: the technique is unsourced. Consider moving it to For Fun or removing it until a source
  turns up; at least mark it ⚠ as in roadmap.md.
- `templeBasement` is sub45, but roadmap.md placed basement entry at First completion. Every desert
  temple seed (30% of Coal-rank seeds) needs it, so consider `firstCompletion`.
- `wreckLoot` is sub45 and `oceanTravel` sub30, while a shipwreck seed can't be finished without a boat
  or doors. Consider moving `oceanTravel` to sub45 or firstCompletion.
- `treasureTnt` title "TNT for Trees" duplicates `tntTrees`'s title; consider "Treasure TNT" so they
  differ in search.
- `magmaRoute` description could name the filter guarantee in the description too; the ranked
  note already covers it. No change needed.

## Thin pages

- `templeSneak` (no source for the actual trick).
- `cryingObsidian` (method not confirmed; times only).
- `bigPortal1`, `bigPortal2`, `bigBertha`, `sandFall`, `lootWithoutEntering`: short because the
  technique is short; sourced.
- `wreckBubble`, `houseLayouts`, `fireAspectKills`: few sources.
