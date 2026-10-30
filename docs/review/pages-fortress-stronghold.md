# Notes: fortress-stronghold

Notes grouped by category.

## Decisions

### Fortress

- Balcony rule written as "go the opposite direction from the balcony" (Hax, Calisthenicuber, MCSR wiki). k4yfour's 2025 video says "go straight at balconies"; treated as the same rule in other words and not mentioned.
- Spawner wave timing (10–15 s in nether.md vs 10–40 s vanilla from memory in followup-nether.md) left out of every page because the sources disagree.
- secondSpawner states the "first wave about 1 s after you come in range" and "6 blazes skip a wave" mechanics. The cap is from 7rowl; the 1 s initial delay is vanilla behaviour from memory (consistent with the roadmap description).
- structureRegions gives region size as "roughly 400 blocks" (Mikeyboie) without the 27-chunk figure from game code, which I did not verify.
- hyperNegativePieRay: the frontcage post names the result chunks by diagram colour. Without the image I wrote "first/second/third/fourth candidate chunk" and point readers to the diagram.
- pieRayEasy/pieRayOptimal: practice uses ClearColdWater's simulator map from the Hyper Enhanced post as the pie-ray practice map.
- fortressPreCraft mentions that the ClearColdWater 1.7 s figure is contested (Mikeyboie crafts during trades).
- witherSkeletons and witherBlockEnclosed say "too tall to fit through a 2-block gap" instead of "3 tall" (wither skeletons are about 2.4 blocks tall).
- setupChoice includes the frontcage "blaze bed or zero cycle" Ranked numbers (about 29–38 s vs 20–23 s).
- tnt4 teaches Fyroah TNT with Daniel_H212's Fix B as recommended and Fix A as an alternative; the auto-light variant is not taught (its source is in the Ranked Discord, not accessible).

### Finding the Stronghold

- boatEye teaches the god-sensitivity workflow (no F3+C on boat entry); the mod-360 hotkey and the
  blue-boat "indicate boat angle reset" workflow are not taught.
- godSensitivity says the boat angle survives the portal/pearl angle wrap (the fact behind the
  mod-360 hotkey) without mentioning the hotkey.
- homePortalBlind: the MCSR wiki's version measures at the home portal and then builds a new portal
  at the nether coordinates if obsidian allows; the page describes both that and overworld travel,
  since the roadmap description only says "travel in the overworld".
- blindOptimal is the only page stating the Y48 surface guarantee, matching its ranked note.
- followEyes and ninjabrainEasy state the Ranked "second throw never breaks" fact.
- Resource links reused from roadmap.md and research; draconix timestamps 713 s (setup), 977 s
  (measuring, 16:17), 987 s (desync).

### Stronghold

- Starter staircase position: wrote "center at block 4,4 of its chunk" (matches roadmap, stronghold.md,
  Ninjabrain Bot's 4,4 display and digIn.mdx; vanilla 1.16 places the start piece at chunk +2,+2 with
  a 5-wide spiral, so the center is 4,4). k4yfour's auto-subtitles say "4 on either the X or the Z";
  treated as a transcription slip. Digging "within about 3,3 to 5,5" kept as the practical tolerance,
  same wording as digIn.mdx.
- Fyroah's law defined as "the portal room is never cut by caves or ravines; a pristine big box is the
  portal room" from k4yfour's subtitles at the chapter "Fyroah's law" (7:47 → content 7:54–8:35).
- forsen's law: "most often exactly 6 rooms from the starter, less likely further, no maximum", plus
  k4yfour's "count from the first split if the starter has only one direction".
- The "turn back at 8–9 rooms with no light" rule of thumb (from a YouTube comment) was left out.
- setSpawn: stated that a bed sets spawn when used during the day without sleeping, that breaking the
  bed sends you to world spawn, and that respawning restores health/hunger/saturation (vanilla 1.16
  behaviour, not from a speedrun source).
- endPrep: did not repeat stronghold.md's "filling the last eye teleports instantly"; wrote "the portal
  opens the moment the last eye goes in" instead, since you still have to enter it.
- Linked Llama's preemptive practice map via the mediafire URL given in the MCSR Wiki video
  description (the only published link found).
- Preemptive page includes the Shift+F3 / number-key navigation, consistent with pieChartPreset.mdx.

## Unconfirmed

### Fortress

- Whether Ranked's blaze rod standardization interacts with Looting: left out of lootingSword.
- pieRayTrades: no source details how to cross chunk borders while holding piglins in a hole; the page only says to use borders near the trading spot. Mikeyboie says he does the scan while trading, without showing the details.
- Mar1n's negative pie-ray cases 6.1 and 6.2 are named as in his video description; their exact walking pattern is left to the video.
- bothSpawners: no guide on placing the blind portal to cover two spawners exists; the page is built from the 16-block rule, Calisthenicuber's portal placement and 7rowl's notes.
- tnt2: the exact geometry of "hard block, soft, soft, hard block, soft, soft" is quoted, not described; the page sends readers to the clips.
- dynamicRenderDistance: the basalt deltas claim comes from Hax only.

### Finding the Stronghold

- boatDuringPortal: no source found describing the exact technique (where the boat goes, whether
  you enter it on the nether side or the arrival side). Mojang bug reports suggest a player riding
  a boat inside a portal is not teleported, so the mechanics are unclear. The page only states the
  overlap idea and that god sensitivity keeps the angle through a portal; needs a source.
- portalLinking: the page avoids the 1.16 portal search radius (128 overworld blocks from memory of
  game code); added only "near the matching coordinates".
- neighbouringOffsets: only source is the one-line research note; "dig at the more likely chunk's
  4,4, the other is a short walk away" is inferred.
- earlyBlindReset: no source names this as a technique (followup-end item 6, followup-nether item
  15); page built from the blind reset plus Jacko's "blinding on 5 rods is completely fine".
- fov30Measuring: SD 0.02–0.04 at FOV 30 is from stronghold.md without a primary source cited.
- fastBlindBuild: jump-stacking details (obsidian counts, quadruple stacks) left out; only the
  general idea stated.
- oceanBlindReset: the exact block layout of crossroads198x's setup is not described beyond "pillow
  hangs off the obsidian"; the page sends readers to the videos.

### Stronghold

- portalFoodOverlap: the exact inputs could not be verified (YouTube returned HTTP 429 before the doogile
  clip could be checked). The page points to the clip for the inputs instead of describing them.
  stronghold.md says offhand food "skips the eating animation"; left out as unverified.
- hitboxScan: how hitbox wiggle distinguishes a spawner from a library is not described in any source
  read; the page defers to Mikeyboie Part 4's "Hitbox Toggle" chapter (10:41). "Spinning in the
  portal" taken from stronghold.md without further detail.
- portalRoomSafety: no source beyond stronghold.md ("break the spawner, place a block in the lava").
- endPrep: no standard End hotbar layout exists in the research; page says "your End strategy".
- Mikeyboie Part 4 "Before Entering The Stronghold" chapter (1:02) is embedded on endPrep by title only;
  its content was not checked (429).
- YouTube rate-limited (HTTP 429) partway through; no further YouTube metadata or subtitles fetched.

## Proposed roadmap.kdl changes

### Fortress

- `witherSkeletons` (sub45) has no parent while `blazeKills` is firstCompletion; fine. Its description says "Pillar three blocks beside the edge"; Mikeyboie's variant uses two. No change needed, but "Pillar beside the edge and punch them off" would cover both.
- `witherBlockEnclosed` description "They're 3 tall" is slightly wrong (about 2.4 blocks). Suggest: "They can't fit through a 2-high gap: block the top or bottom of a passage so they can't follow."
- `tntDonut` (sub20) is the parent of 2 TNT, 3 TNT and 4 TNT, but Daniel_H212 and Calisthenicuber treat the donut as superseded by 3 TNT and Fyroah TNT. Consider making `tnt2` the child of `spawnerClearing` and the donut a side item, or relabelling it as the historical form.
- `goodSide` sub30 with `goodSideRules` sub20: research rates both as beginner skills (Coal/Iron); consider sub45 / sub30.

### Finding the Stronghold

- homePortalBlind description: "Low on obsidian: go back through the home portal and travel in the
  overworld instead." The wiki method measures at the home portal and then usually nether-travels
  with a new portal. Suggest: "Low on obsidian: measure from the home portal instead of building a
  blind."
- boatDuringPortal: consider dropping or re-describing until a source confirms the technique.
- digIn goal sub45 but parent followEyes (firstCompletion): fine; no change.

### Stronghold

- `navigationLaws` description "forsen's law and Fyroah's law." names the laws without saying what they
  are. Suggest: "Portal rooms are usually 6 rooms from the starter, and are never cut by caves."
- `hitboxScan` description mentions "hover" scans; no source read explains a separate hover scan.
  Consider "Hitbox scan with hitbox wiggle" until confirmed.

## Thin pages

### Fortress

- secondSpawner and bothSpawners (game mechanics plus scattered notes; no dedicated guide).
- hyperNegativePieRay (no video; relies on the frontcage post's diagram).
- witherTrap (one source).
- pieRayTrades (one source showing it).

### Finding the Stronghold

- boatDuringPortal, neighbouringOffsets, earlyBlindReset, oceanBlindReset (no how-it-works detail
  beyond the videos), homePortalBlind (no video).

### Stronghold

- portalRoomSafety (opening + two short sections, no resources).
- portalFoodOverlap (inputs deferred to the video).
- hitboxScan (mechanism deferred to the video).
- setSpawn (one link).
