# Zero cycle setups: types and videos per roadmap item

Companion to [zero-cycle.md](zero-cycle.md). It supports restructuring the zero-cycle tower pages so
they stop listing exact standing coordinates. Instead, each page names the setup types available
for its tower and height, says what each type is for, and links a video at a timestamp. Research
date: 2026-10-29.

Tags: **[C: source]** confirmed by that source; **[U]** unconfirmed. Coordinates still appear here
(block X Z), but only so each type can be identified. They are not meant for the pages.

## Sources used

| Short name | Source |
| ---------- | ------ |
| catalogue | pion, "A Guide to Every Zero Cycle Setup in 5 Explosives", 2025-08-12, https://www.youtube.com/watch?v=aQ7GxWUXvaY (72 chapters, read from yt-dlp metadata) |
| pion sheet | pion's coordinate sheet, https://docs.google.com/spreadsheets/d/12OGxoqYkRIDipQ61tRJRSY2iBT-sTLveSN4X4qho0sM/edit (28 setup tabs plus a format tab, read 2026-10-29) |
| lenience sheet | ClearColdWater, https://docs.google.com/spreadsheets/d/1DvZwc3_MHJt9WP0Vf-xmezcTlprTc3y36kEg7-QYyy0/edit, with the thread https://frontcage.com/t/all-zero-cycle-tower-setup-end-spawn-combination-time-lenience-sheet/42 (2025-10-18) |
| blaze-bed thread | ClearColdWater, "Blaze Bed or Zero Cycle", https://frontcage.com/t/blaze-bed-or-zero-cycle/46 (2025-10-20) |
| 2+2 hybrid | pion, "2+2 all hybrid setups :3", 2026-04-25, https://www.youtube.com/watch?v=LXFJ2Zs85gc (24 chapters) |
| queer arrow | pion, "Queer Arrow Cases", 2026-08-09, https://www.youtube.com/watch?v=4QbgcdfoTyU (23 chapters) |
| kohout | kohout135, "All Useful Zero Cycle Setups (2026)", uploaded 2025-07-24, https://www.youtube.com/watch?v=2Nw7Y5QxYFg (chapters, pinned corrections) |
| hasbi | hasbiWalks, "NEW zero setups for almost every tower (compilation)", 2025-12-12, https://www.youtube.com/watch?v=eoy8Uj1l-Ps |
| doogile | doogile / Dibedy, "How to ZERO CYCLE", 2026-02-16, https://www.youtube.com/watch?v=CSdkCmZ69RI |

YouTube answered every request: no HTTP 429 and no login prompt. Chapters and descriptions come from
`yt-dlp --dump-json`. Comments were read for aQ7GxWUXvaY, LXFJ2Zs85gc, QDVxexICti4, B5rXPSKlJA4,
NuRW1ReIeyA, U-SZAhaLg1A, hXMzyVtGPjg, 4S4Gt05oQr4, 4QbgcdfoTyU, eoy8Uj1l-Ps and 2Nw7Y5QxYFg. On-screen
overlays were **not** checked. A clip whose tower or stand appears only on screen is marked [U].

### Setup-type vocabulary (pion sheet, format tab)

- **Hybrid**: the bed faces north–south. pion: a "hybrid" of T_Wagz's standing coordinates and
  orientation with Astra's build method, giving "super fast setups and good damage". It is the
  standard setup "where you're high enough up to have your bed directly over the node w/o breaking
  the crystal" [C: pion comments on aQ7GxWUXvaY].
- **Modern**: the bed faces east–west [C: pion sheet].
- **Hybrid offset / modern offset**: the same orientations, moved horizontally away from the crystal
  because the standing height is too low to be non-offset (rule of thumb: non-offset needs a standing
  height of at least tower + 5) [C: pion comments on aQ7GxWUXvaY].
- **Multiblock**: three obsidian give bed positions on both axes. The "multiblock adjusted" standing
  block is diagonal to both bed positions, and you pick the bed per rotation. Where a sheet setup is
  multiblock, the hybrid/modern label (with "leftside/rightside obby when multiblockless") says which
  bed to use if you build a plain two-obsidian setup instead [C: pion sheet; pion comment on
  aQ7GxWUXvaY].
- **Hybrid multiblock**: a multiblock whose main bed is the hybrid (north–south) one. The pion sheet
  lists it on T-97 y99 and Tall Boy y104 [C: pion sheet].
- **Side / universal side**: a stand below the top of a tall tower. The universal side is one
  multiblock-adjusted stand used on several towers at one height [C: pion sheet].
- **Anchor-friendly / anchor square**: stands chosen so respawn anchors can be placed without
  breaking the crystal [C: pion titles, see allTowersY95 and universalSide].
- **1/8**: the straight node [C: pion sheet].

### What a "built for" claim means here

An "optimized for" claim is confirmed only when a title, description or pion reply states it.
The catalogue's premise is "a 5 explosive zero on every tower on every rotation of every (standard or
difficult) standing height", so every catalogue chapter shows a **5-explosive** zero [C: pion
pinned comment]. Whether a given chapter is a 5+0, 4+1 or 3+2, and whether it uses a bow, shows only
on screen [U]. General rules that apply to several items [C: pion comments on aQ7GxWUXvaY]:

- Every non-offset front and back setup can be five-bedded **without a bow**. Every front offset can
  too (shown in "5 Explo All Front Offset Zeroes (no multiblock, no bed extensions, no bow)",
  2025-07-09, https://www.youtube.com/watch?v=QDVxexICti4, no chapters). "back offset setups aren't
  5-beddable consistently without a bow".
- On the hybrid stands, 2+2 is possible on fast and slow CW and CCW alike: "you will need double arrow
  on y90 and y99 mainly for the 1st rotation, and then queer arrow is useful on y95 ccw" [C: pion
  reply on LXFJ2Zs85gc].
- 28 −27 front / −30 25 back are "the optimal cw coords", and 27 −28 front / −29 26 back "the optimal
  ccw coords", in a y95 2+2 context. "usually people do rotation-based setups for y95 ccw 2+2 on
  hybrid (27 −28 and −29 26 i think)" [C: pion titles and description, 2026-04-11 and 2026-05-25].
- kohout: "going to 28 −27 on front towers makes a 2+2 way easier"; "28 −27 is way better for 2+2 on
  one of the rotations, other than that it doesnt really matter" [C: kohout pinned comment and
  reply].
- The catalogue covers only "the more difficult heights 'cause the easy heights are obviously doable
  if the harder ones are" [C: pion pinned comment]. That is why the low non-offset heights below have
  no catalogue chapter.

---

## frontLowY90

**Setup types**
- **Hybrid** (non-offset): one stand family for Small Boy, Small Cage, Tall Cage and M-85 at y90
  (pion sheet: 28 −26 or 28 −27) [C: pion sheet].
  - Built for: 5+0 without a bow [C: pion comment, all non-offset setups]. 2+2 on every case, with
    a double arrow on rotation 1 at y90 [C: pion reply on LXFJ2Zs85gc]. The CW-optimal stand
    (28 −27) makes 2+2 easier on one rotation [C: kohout]. A CCW-optimal stand at y90 is not stated
    (pion names one only for y95) [U].
- pion's sheet also gives Small Boy y81 and y99, and Small Cage y99 [C: pion sheet]. pion would steer
  a y86 player to y90 [C: pion comment].

**Videos**
- pion has no 5-explosive y90 chapter (catalogue rule above). Best pion clips, 2+2 on the hybrid
  stand, tower only on screen [U]:
  - Front y90 CW: https://www.youtube.com/watch?v=LXFJ2Zs85gc&t=184s
  - Front y90 CCW: https://www.youtube.com/watch?v=LXFJ2Zs85gc&t=225s
- 5+0 by tower (kohout, height only on screen [U]): Small Boy https://www.youtube.com/watch?v=2Nw7Y5QxYFg&t=20s,
  Small Cage &t=95s, Tall Cage &t=166s, M-85 &t=235s.
- Bow example, front y90 3+2 CW: https://www.youtube.com/watch?v=2Nw7Y5QxYFg&t=1231s; 2+2 CCW &t=1265s;
  2+2 CW &t=1297s [C: kohout chapters].
- pion's "A Collection of 5 Bed Zero Cycles (FRONT)" (2025-02-06, https://www.youtube.com/watch?v=cH17YY4UjiM)
  has no chapters; its contents are on screen only [U].

## frontLowY95

**Setup types**
- **Hybrid, CW-optimal stand** (28 −27) [C: pion title 2026-04-11]. Built for: 5+0 without a bow
  [C]. On CCW, 2+2 works by the "first arrow during the turn" technique: "if you shoot the dragon
  while it's turning around with your first arrow, the dragon does a tighter turn and is better
  positioned for a double bed on the 2nd rotation" [C: pion description, boGlBUhAsKk].
- **Hybrid, CCW-optimal stand** (27 −28) [C: pion]. Built for: CCW 2+2 by bed position instead of
  arrow technique ("rotation-based setups for y95 ccw 2+2") [C: pion description, boGlBUhAsKk].
- **Anchor square** (front 28 −28): built for 2+2 with heavy anchor use ("so that doog won't choke
  another 1b4a situation"), and pion's 2+1 [C: pion titles 2026-05-11, 2026-05-18]. Which towers
  and heights it covers beyond "works for front m91 y95" is on screen only [U].
- **2+2 Aura** y95 setups (2026-08-01): built for 2+2; tower and stand on screen only [U].

**Videos**
- Front Small Boy y95 (catalogue, 5 explosives): https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=69s
- 2+2 on the hybrid stand: CW https://www.youtube.com/watch?v=LXFJ2Zs85gc&t=267s, CCW (twice)
  https://www.youtube.com/watch?v=LXFJ2Zs85gc&t=304s
- CCW 2+2 with the first-arrow technique on the CW-optimal stand: https://www.youtube.com/watch?v=boGlBUhAsKk&t=0s
- Fast and slow cases on the CW-optimal stand (queer arrow): fast CCW https://www.youtube.com/watch?v=4QbgcdfoTyU&t=40s,
  slow CCW &t=131s, CCW bed break &t=215s
- On the CCW-optimal stand: fast CW https://www.youtube.com/watch?v=4QbgcdfoTyU&t=272s, slow CW &t=363s,
  CW bed break &t=451s
- Anchor square 2+2: https://www.youtube.com/watch?v=Cdc2d4kC1Tc&t=0s
- 2+2 Aura y95: CW https://www.youtube.com/watch?v=IjAPUt_MEng&t=7s, CCW &t=43s

## backLowY90

**Setup types**
- **Hybrid** (non-offset): back stand −30 25 for Small Boy to M-85 at y90 [C: pion sheet]. Built
  for: 5+0 without a bow [C], and 2+2 on every case with a rotation-1 double arrow [C: pion reply on
  LXFJ2Zs85gc].
- pion's sheet lists back Small Boy y81, 86, 90, 95 and Small Cage up to y99 [C: pion sheet].

**Videos**
- No 5-explosive pion chapter at back y90 (catalogue rule). 2+2 on the back hybrid stand [U for the
  tower]: CW https://www.youtube.com/watch?v=LXFJ2Zs85gc&t=697s, CCW https://www.youtube.com/watch?v=LXFJ2Zs85gc&t=738s
- kohout back tops: Small Boy https://www.youtube.com/watch?v=2Nw7Y5QxYFg&t=54s, Small Cage &t=129s,
  Tall Cage &t=201s, M-85 &t=270s; back y90 3+2 CCW &t=1330s
- doogile back tops: https://www.youtube.com/watch?v=CSdkCmZ69RI&t=585s

## allTowersY95

**Setup types**
- **Hybrid, CW-optimal** (−30 25 back, 28 −27 front) and **hybrid, CCW-optimal** (−29 26 back,
  27 −28 front), as in frontLowY95 [C: pion].
- **Anchor square** (front 28 −28, back −30 26): 2+2 with anchors. The back stand "does not work for
  back m91 y95" [C: pion description, Cdc2d4kC1Tc].
- y99 on front M-85 and M-88: hybrid [C: pion sheet]. 2+2 at y99 needs a rotation-1 double arrow
  [C: pion reply on LXFJ2Zs85gc].

**Videos**
- Back Small Boy y95 (catalogue): https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=2671s
- Front M-85 y99: https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=336s; front M-88 y99: &t=479s
- Back 2+2 y95: CW https://www.youtube.com/watch?v=LXFJ2Zs85gc&t=779s, CCW (twice) &t=815s
- Front 2+2 y99: CW https://www.youtube.com/watch?v=LXFJ2Zs85gc&t=376s, CCW &t=410s
- Anchor square 2+2: https://www.youtube.com/watch?v=Cdc2d4kC1Tc&t=0s; 2+1 on anchor square:
  https://www.youtube.com/watch?v=paWm8YqGqwc&t=0s

## m91

**Setup types** [C: pion sheet]
- **Hybrid, front y99 and y104** (non-offset). Back y99 hybrid; back y104 is an "other" height.
- **Hybrid offset, front y95**: built for 5+0 without a bow. pion's no-bow front-offset video skips
  it "because everyone knows those" [C: QDVxexICti4 description]. The front anchor square stand also
  works here [C: Cdc2d4kC1Tc].
- **Front y91**: modern offset (multiblock adjusted) or hybrid offset. y91 carries about a 10%
  bed-break chance [C: pion sheet and comment].
- **y90**: universal side, multiblock [C: pion sheet; lenience sheet "m91 90(u)", multiblock,
  5.40 s setup front].
- Back y95 is the separate item m91BackOffset.

**Videos** (catalogue)
- Front y99 https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=808s; front y104 &t=848s; front y95 offset
  &t=889s; front y91 &t=978s; front y90 &t=1076s
- Back y99 https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=3374s; back y90 &t=3505s

## m91BackOffset

**Setup types**
- **Hybrid offset** (−29 26, leftside obsidian; it doubles as the back CCW-optimal stand) [C: pion
  sheet and titles].
  - Built for: CW 2+2 with the "turning arrow": "if you shoot the dragon with an arrow while it's
    turning, it'll shorten the dragon's path ... so you can consistently double bow on 95 and 2+2"
    [C: pion description, YC4ytuoP5X0, 2026-05-25]. Without the technique it still works, but "it's
    still definitely easier and safer to use to arrow techy ... it eliminates the bed break chance"
    [C: pion description, HH2DxQK9pgw, 2026-05-26].
  - Not built for bowless 5+0: back offsets "aren't 5-beddable consistently without a bow" [C: pion
    comment].
- Anchor square does **not** work here [C: pion description, Cdc2d4kC1Tc].

**Videos**
- Catalogue, both rotations: https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=3415s
- CW 2+2 with turning arrow: https://www.youtube.com/watch?v=YC4ytuoP5X0&t=0s
- CW 2+2 without: https://www.youtube.com/watch?v=HH2DxQK9pgw&t=0s
- kohout, side chapter "m91 y95": https://www.youtube.com/watch?v=2Nw7Y5QxYFg&t=776s; back y95 2+2
  CCW on −29 26: &t=1455s

## t94

**Setup types** [C: pion sheet]
- **Hybrid, y99** front and back (front y104 too; back y104 and y100 are "other" heights).
- **Front y104**: timed as a multiblock in the lenience sheet (2.50 s) [C: lenience sheet].
- **y95 modern offset** (two bed positions, multiblock in the lenience sheet) and **y95 hybrid
  offset**, front and back. pion: at y95 "you can do the t94 y95 or the y95 universal setup
  depending on the tower height which you can see as you build" [C: pion comment].
- **y86 / y90**: universal side [C: pion sheet].
- Back y104 3+2 exists [C: pion chapter, Jb0DTz7MD8c].
- "Built for" per type is not stated by pion [U].

**Videos**
- Back y99 (catalogue): https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=3600s
- Front y104: https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=1180s
- y95 offset: front https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=1218s, back &t=3638s
- Back y104 3+2: https://www.youtube.com/watch?v=Jb0DTz7MD8c&t=36s
- Front y99 has no pion chapter. kohout: front https://www.youtube.com/watch?v=2Nw7Y5QxYFg&t=435s,
  back &t=468s, T-94 y95 side &t=848s

## t97

**Setup types** [C: pion sheet]
- **y104 hybrid** (non-offset) front and back.
- **y100 hybrid offset** front and back. y100 has a small bed-break chance that depends on fast or
  slow dragons: "if you see a slow dragon you can play it safe and go for y99" [C: pion comment].
  kohout: a rotation-1 double is not consistent at y91 or y100 [C: kohout reply].
- **Front y99**: three types: **modern offset** (multiblock adjusted), **hybrid offset**, and
  **hybrid multiblock**. The lenience sheet times the modern (`m`) one [C: lenience sheet]. kohout's
  update stand is different again; kohout calls the front "2+2able" [C: DgPBb4AZ2CA description].
  pion does not state which type is built for what [U].
- **y86 / y90 / y95**: universal side; y86 also takes the Tall Boy side stand [C: pion sheet,
  catalogue chapter "T97/T100/T103 y86"].

**Videos**
- Front y104 https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=1407s; front y100 &t=1445s; front y99
  &t=1523s (which of the three y99 types is on screen only [U])
- Back y104 https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=3825s; back y100 &t=3864s
- Back y100 bed-break recoveries: double https://www.youtube.com/watch?v=4QbgcdfoTyU&t=1039s, single &t=1085s
- kohout T-97 y99 update: https://www.youtube.com/watch?v=DgPBb4AZ2CA&t=0s

## t97BackY99

**Setup types** [C: pion sheet]
- **Modern offset** (multiblock adjusted, −30 28).
- **Hybrid offset** (−27 26, same stand as Couriway's guide).
- **Hybrid multiblock** (−29 27, the lenience sheet's stand; the sheet note describes a modern-style
  build, see zero-cycle.md Unconfirmed).
- Built for: the catalogue's back T-97 y99 **hybrid CCW** uses a planned double arrow on rotation 2
  "to make it flip rotations on the 3rd for better damage" [C: pion comment]. kohout's back stand is
  "tricky but the other rotation i dont show is much easier to 3+2" [C: DgPBb4AZ2CA description].
  hasbi: his back 97 is "easily the biggest improvement" of his set [C: hasbi reply].
- ClearColdWater's 5-explosive model leaves back T-97 y99 out as not consistently hittable with five
  explosives [C: blaze-bed thread].

**Videos**
- Hybrid, both rotations: https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=3945s (the planned flip is
  around &t=4011s, the timestamp a viewer asked about)
- Modern, both rotations: https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=4030s
- Fast and slow CW: https://www.youtube.com/watch?v=4QbgcdfoTyU&t=935s, &t=987s
- hasbi node-aligned back T-97 y99: CW https://www.youtube.com/watch?v=eoy8Uj1l-Ps&t=506s, CCW &t=526s
- pion "back 97 zero cycles but they get progressively more aura" (2025-06-29,
  https://www.youtube.com/watch?v=OBRJpC6IvcQ) has no chapters [U]

## t100FrontY104

**Setup types**
- **Hybrid offset** at y104, one block off the plain hybrid, "because if you went to 28 104 −26 for
  T100, the bed breaks the crystal" [C: pion sheet and comment]. pion builds y104 as "normal
  staircase → diagonal staircase → triple stack ... for some extra speed since y104 can be tough"
  [C: pion comment].
- Built for: a 5-explosive zero [C: catalogue]. The 2+2 on y104 hybrid is in the 2+2 hybrid video
  (tower on screen [U]). pion's 2+2 Aura y104 stand allows sub-40 s End fights with a 2+3, "like the
  normal 27 −27 hybrid setup for y104" [C: pion pinned comment, IjAPUt_MEng].

**Videos**
- Catalogue, both rotations: https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=1696s
- 2+2 y104: CW https://www.youtube.com/watch?v=LXFJ2Zs85gc&t=448s, CCW &t=481s
- 2+2 Aura y104 CCW: https://www.youtube.com/watch?v=IjAPUt_MEng&t=148s
- kohout front T-100 (corrected stand 31 −30): https://www.youtube.com/watch?v=2Nw7Y5QxYFg&t=629s

## t100Y100

**Setup types** [C: pion sheet]
- **Modern offset** (multiblock adjusted), front and back.
- **Hybrid offset**: plain on front. On back it is multiblock adjusted (leftside obsidian when built
  without multiblock).
- Built for: back y100 **3+2**. pion's back clip uses "camo setup but multiblock for most
  consistency on first double bed"; CW is the case thecamo6 already 3+2'd, and on CCW "idk if
  anyone's ever 3+2'd" [C: B5rXPSKlJA4 description, 2025-06-30]. Multiblock "helps a lot with getting
  kb because the dragon always has variance on that first rotation" [C: pion reply on B5rXPSKlJA4].
- The catalogue shows front y100 both with and without multiblock, so both exist as 5-explosive
  setups [C: chapter titles].

**Videos**
- Front multiblock https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=1774s; front no multiblock &t=1855s
- Back, both rotations: https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=4277s
- Back 3+2 (bad rotation): https://www.youtube.com/watch?v=B5rXPSKlJA4&t=0s
- Back fast and slow CW: https://www.youtube.com/watch?v=4QbgcdfoTyU&t=1130s, &t=1179s

## t100Side

**Setup types** [C: pion sheet; catalogue chapters]
- **Tall Boy side stand** (modern offset, two bed positions) at y90 on T-100 (catalogue chapter
  "T100/T103 y90") and at y86 on T-97 to Tall Boy.
- **Universal side** (modern offset, multiblock adjusted) at y90 on M-91 to T-100.
- The lenience sheet times T-100 y90 as the multiblock 29 −29 type (`m`) [C: lenience sheet].
- Built for: back y90 universal **3+2 on every case** (bed order per fast, slow and centerline case)
  [C: 5gf9xZ7PzJI description, 2026-07-30]. What the Tall Boy side stand at y90 is built for is not
  stated [U].

**Videos**
- Tall Boy side stand at y90: front https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=2396s, back &t=4780s
- y86 (T-97/T-100/Tall Boy): front https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=2492s, back &t=4878s
- Universal y90: front https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=1308s, back &t=3730s
- Back y90 universal 3+2, all cases: https://www.youtube.com/watch?v=5gf9xZ7PzJI&t=0s (fast CW &t=25s,
  slow CW &t=59s, fast CCW &t=205s, slow CCW &t=240s)
- kohout T-100 y90: https://www.youtube.com/watch?v=2Nw7Y5QxYFg&t=999s

## tallBoySide

**Setup types** [C: pion sheet]
- **y94 side, modern offset** (two bed positions; multiblock in the lenience sheet) at y86, 90 and 94.
- **y99 side, universal** (modern offset, multiblock adjusted) on T-100 and Tall Boy.
- **y99 side, hybrid offset** (multiblock adjusted) on T-100 and Tall Boy. pion's back −27 27 version
  is "similar idea to camo setup, but you don't have to shoot the dragon once to adjust its rotation"
  [C: NuRW1ReIeyA description].
- Built for: y99's "only major advantage ... over y94 for t103 ... is that it can save a rotation if
  you get the 3+2" [C: pion reply on NuRW1ReIeyA]. On y94 3+2 the slow cases dominate on the T-103
  side setup [C: pion reply on 4S4Gt05oQr4]. ClearColdWater counts back Tall Boy side setups as
  consistently hittable with five explosives, the one exception among offset multiblock setups
  [C: blaze-bed thread].
- hasbi's node-aligned front y94 is "isn't really that great for back, i recommend just doing the old
  setup" [C: hasbi reply].

**Videos**
- y94: front https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=2305s, back &t=4690s
- y99: front https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=2224s, back &t=4604s
- Back y94 fast and slow CW: https://www.youtube.com/watch?v=4QbgcdfoTyU&t=816s, &t=873s
- kohout y94 side: https://www.youtube.com/watch?v=2Nw7Y5QxYFg&t=1149s; 3+2 CW front &t=1590s; 3+2
  CCW back &t=1622s

## tallBoyFrontY104

**Setup types** [C: pion sheet]
- Front Tall Boy y104: **modern offset** (two bed positions), **hybrid offset**, **hybrid
  multiblock**. The catalogue shows a multiblock and a no-multiblock version [C: chapter titles].
- Front Tall Boy **y108** hybrid (front only; back "NOPE") [C: pion sheet].
- Back T-100 y104: **hybrid offset** (two equivalent stands) [C: pion sheet].
- Built for: front Tall Boy y108 3+2 [C: Jb0DTz7MD8c chapter]. "hybrid top t103" gives 2+2 on both
  rotations and a slow-CW 2+3 with a 39.65 s End fight; front or back is on screen only [C: chapter
  titles, F2K2exQXYHU; U for the node].
- Related, not in the item: back Tall Boy y104 top gets 4+1 on fast CW, fast CCW, slow CCW and slow CW
  [C: BbMA_ghiwiY series, 2025-04]; 3+2 on both rotations, CW "super easy ... if your first bed isn't
  late" [C: 551IH9vqQRg description]; and "secretly a free zero" [C: OuxlkZEqgj4].

**Videos**
- Front Tall Boy y104 multiblock https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=2023s; no multiblock &t=2093s;
  y108 &t=2174s
- Front Tall Boy y104 slow CW: https://www.youtube.com/watch?v=4QbgcdfoTyU&t=1338s
- Back T-100 y104: https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=4203s; pion "back t100 top setup":
  https://www.youtube.com/watch?v=dz1mXlFRX8s&t=64s
- Front Tall Boy top: https://www.youtube.com/watch?v=dz1mXlFRX8s&t=0s; y108 3+2 https://www.youtube.com/watch?v=Jb0DTz7MD8c&t=73s
- Back Tall Boy y104 multiblock https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=4450s; no multiblock &t=4530s

## universalSide

**Setup types**
- **Universal side, modern offset, multiblock adjusted** at y86 (M-88 to T-100), y90 (M-91 to T-100),
  y95 (T-97, T-100) and y99 (T-100, Tall Boy). "the universal side setup works on any tower" [C: pion
  sheet and comment].
- **Back y95 anchor-friendly** (−28 29, multiblock). Built for anchor-heavy kills ("consistent 4b2a
  3b3a and 2b4a", linked frontcage thread) with 3+2: "ccw should be fairly easy to 3+2 nearly every
  single time"; on CW a bad flip still leaves an easy 4+2. An upper-right anchor breaks the crystal
  on T-100 [C: U-SZAhaLg1A description].
- **Back y99 hybrid offset** (−27 27, multiblock): built for 3+2 on both rotations without the
  rotation-adjusting first arrow, "mainly useful for t103 or t100"; CW easier, CCW "entirely up to
  rotation rng" [C: NuRW1ReIeyA description]. thecamo6's y99 version: one bed order for every case,
  with an early first arrow on slow and a late one on fast [C: m1NP1SiIJPk description].
- Anchors and y99 don't mix: "anchors make 3 rotation impossible probly, and y99's big advantage is
  saving time via a 3 rotation" [C: pion reply on NuRW1ReIeyA].
- **hasbi universal** (front 27 −29): node-aligned. The back version is "slightly worse because the
  node is closer to the crystal, but it's still more consistent than the old setup" [C: hasbi
  description].
- Built for, per height: 3+2 with per-case bed orders at back y90, y95 and y99 [C: pion descriptions];
  5+1 back y95 [C: kohout chapters]; a trans-arrow 2+2 on back y95, "inconsistent, but can be very
  very powerful" [C: bweFWbpUWQo].

**Videos**
- Explainer of back y95 cases (voiced): CW https://www.youtube.com/watch?v=hXMzyVtGPjg&t=37s, CCW &t=459s,
  CCW without a rotation-1 double &t=904s
- Catalogue: front y86 https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=707s, y90 &t=1308s, y95 &t=1607s,
  y99 &t=1940s; back y86 &t=3271s, y90 &t=3730s, y95 &t=4114s, y99 &t=4360s
- 3+2 every case: back y95 https://www.youtube.com/watch?v=4S4Gt05oQr4&t=0s; back y99 (thecamo6
  setup) https://www.youtube.com/watch?v=m1NP1SiIJPk&t=0s; back y90 https://www.youtube.com/watch?v=5gf9xZ7PzJI&t=0s
- Back y95 CCW 3+2 without a rotation-1 double: https://www.youtube.com/watch?v=uOeBflC0w-Y&t=0s
- Anchor-friendly back y95: CW https://www.youtube.com/watch?v=U-SZAhaLg1A&t=0s, CCW &t=41s
- Back y99 hybrid offset 3+2: https://www.youtube.com/watch?v=NuRW1ReIeyA&t=0s
- Front y95 fast and slow CW: https://www.youtube.com/watch?v=4QbgcdfoTyU&t=646s, &t=702s; bed break &t=761s.
  Front y99: &t=1236s, &t=1287s. Back y90: &t=504s, &t=575s
- hasbi universal: CCW https://www.youtube.com/watch?v=eoy8Uj1l-Ps&t=205s, CW &t=230s

## eighthLow

**Setup types**
- **1/8** (straight node): one stand per node, any tower, left- or right-side obsidian both fine
  [C: pion sheet]. pion's heights are triple-staircase heights (78, 83, 87, 92, 96, 101); the
  double-staircase equivalents are one higher (84, 88, 92/93, 97, 102) [C: pion sheet and comment].
- **hasbi 1/8 multiblock**: "the optimal heights for these 1/8 setups are 88 and 93, 97 is still okay
  but significantly worse than the normal setup" [C: hasbi description].
- Built for: 3+2 at y88/y93 front and y92/y93 back [C: kohout chapters]. pion has no 1/8 chapter at
  the low heights.

**Videos**
- kohout 1/8: back CW (y92 or y93) https://www.youtube.com/watch?v=2Nw7Y5QxYFg&t=1881s; back CCW &t=1921s;
  front y88 3+2 CCW &t=1960s; front y93 3+2 CCW &t=1995s; back y92 3+2 CW &t=2027s; back y93 3+2 CCW &t=2060s
- doogile: front https://www.youtube.com/watch?v=CSdkCmZ69RI&t=853s, back &t=890s
- hasbi multiblock y93: front CW https://www.youtube.com/watch?v=eoy8Uj1l-Ps&t=290s, front CCW &t=318s,
  back CW &t=549s, back CCW &t=574s

## eighthHigh

**Setup types**
- **1/8** at the high heights: pion's y96 and y101 (triple staircase), which are y97 and y102 double
  staircase [C: pion sheet]. Built for: a 5-explosive zero [C: catalogue].
- The item's "with a 3+2" claim: no chapter in pion's or kohout's videos shows a y97 3+2. kohout's
  y97 clips are 2+2 [C: kohout chapters]. The claim is [U].

**Videos**
- Catalogue: front y96 https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=2594s, front y101 &t=2635s;
  back y96 &t=4982s, back y101 &t=5022s
- kohout 1/8 y97 2+2: CW https://www.youtube.com/watch?v=2Nw7Y5QxYFg&t=2097s, CCW &t=2124s

## eighthTwoPlusTwo

**Setup types**
- **1/8 hybrid 2+2 stand** (kohout): "correct standing hybrid coords for 2+2 on 1/8 setups are 22 0
  for front and −23 −1 for back (y92)" [C: kohout pinned comment].
- **Conflict**: kohout's only 1/8 2+2 chapters are titled "1/8 y97 2+2 CW (front)" and "... CCW
  (front)", not y92. Which height the 22 0 stand is for is [U].
- pion has no 1/8 2+2 video. His 2025-02-06 front 1/8 clip was built one block off at 22 96 0 by
  mistake, with 23 96 0 given as correct for the 5-bed setup [C: cH17YY4UjiM description].

**Videos**
- kohout 1/8 2+2: CW https://www.youtube.com/watch?v=2Nw7Y5QxYFg&t=2097s, CCW &t=2124s
- No pion video found.

## multiblock

See the verdict section below.

**Setup types**: multiblock adjusted (diagonal to two beds) and hybrid multiblock [C: pion sheet].
Multiblock is part of most modern-offset and side setups: universal side, M-88 y90 modern, M-91 y91
modern, T-97 y99 modern and hybrid multiblock, T-100 y100, Tall Boy y104, back M-85 y86 [C: pion
sheet].

**Videos** (multiblock and plain versions of the same setup, side by side)
- Front T-100 y100: multiblock https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=1774s, plain &t=1855s
- Front Tall Boy y104: multiblock https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=2023s, plain &t=2093s
- Back Tall Boy y104: multiblock https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=4450s, plain &t=4530s
- Multiblock tutorial for all setups: silverr, https://www.twitch.tv/videos/2282969415 [C: pion points to
  it; the VOD itself was not checked]

## nodeAlignedMultiblock

**Setup types**
- **hasbi node-aligned multiblock**: "all of these setups have to be multiblock to be optimal".
  Claimed benefit: lining up with the actual node, so "you get more consistent damage but it's a bit
  more of a learning curve since you need to know which sides to place beds on". "in my opinion these
  ones are better, not by a crazy amount ... the back 97 setup is easily the biggest improvement"
  [C: hasbi description and replies].
- The front T-97 setup in the video is not hasbi's own [C: description].

**Videos** (hasbi chapters): front Small Boy y95 CW https://www.youtube.com/watch?v=eoy8Uj1l-Ps&t=9s,
Small Cage &t=34s, Tall Cage y90 &t=57s, M-85 &t=86s, M-88 &t=111s, M-91 y99 &t=138s, T-94 y99 &t=162s,
T-97 y99 &t=184s, universal y95 &t=205s / &t=230s, Tall Boy y94 &t=254s / &t=280s, 1/8 y93 &t=290s /
&t=318s; back Small Boy &t=346s, Small Cage &t=372s, Tall Cage &t=400s, M-88 &t=420s, M-91 &t=464s,
T-94 &t=485s, T-97 &t=506s / &t=526s, 1/8 &t=549s / &t=574s. (Chapters say "m94", "m97" and "m103"
for T-94, T-97 and Tall Boy.)

## buriedLowHeights

**Setup types** [C: pion sheet; catalogue chapters]
- **Hybrid** at y86 and y90 on the low towers (and y81 as a 5%-stay curiosity [C: pion reply]).
- **Hybrid offset y86** on Tall Cage and M-85 (back M-85 y86 is multiblock adjusted).
- **M-88 y91 hybrid offset**; **M-88 y90 modern offset** (multiblock adjusted) or **hybrid offset**.
  y91 has about a 10% bed-break chance; "some people prefer y90 ... but then you'd have to be one
  block more offset, so your damage will be slightly worse" [C: pion comment].
- **M-91 y91** modern or hybrid offset; **y86/y90 universal side**; **T-94 y95** offsets.
- What they are for: "the variants exist because of buried spawns ... lower heights with offsets are
  made so that you can still zero even on the buried ends" [C: pion comment]. Front offsets are
  5-beddable without a bow; back offsets need a bow [C: pion comment].

**Videos** (catalogue)
- Tall Cage y86: front https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=240s, back &t=2797s
- M-85 y86: front https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=377s, back &t=2940s
- M-88 y91: front https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=519s, back &t=3081s
- M-88 y90: front https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=613s, back &t=3173s
- Universal y86: front https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=707s, back &t=3271s
- 2+2 at y81/y86: front y86 CW https://www.youtube.com/watch?v=LXFJ2Zs85gc&t=94s, CCW &t=138s;
  back y86 CW &t=609s, CCW &t=653s; y81 front &t=0s, back &t=514s
- Front offsets bowless 5+0 (no chapters): https://www.youtube.com/watch?v=QDVxexICti4&t=0s

## buriedHighSetups

**Setup types**
- No setup type is specific to deep spawns. The lenience sheet decides which setups still fit: the
  highest remaining lenience on deep spawns comes from side setups (Tall Boy y94) and the M-91 y95
  offset [C: lenience sheet]. Lenience at O58 (seconds, gold pickaxe): front Tall Boy y94 side 5.90,
  back 5.00, back M-91 y95 offset 3.40 [C: lenience sheet].
- Built for: no source ties a setup type to O59+ spawns [U].

**Videos**
- No video shows a high setup taken from an O59+ spawn [U]. The setups themselves: Tall Boy y94
  https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=2305s / &t=4690s; back M-91 y95
  https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=3415s; front M-91 y95 &t=889s.

## standardSetup

**Setup types**
- **Hybrid** is the standard: T_Wagz's coordinates and orientation with Astra's build [C: pion
  comment]. "you can do the builds however you want as long as the standing block and bed positions
  are the same" [C: pion comment].
- Build styles: double staircase and pillar (doogile, hax) or triple stack: "its purely preference
  ... the triple stack just has a higher skill ceiling (its a little faster)" [C: kohout reply].

**Videos**
- doogile, setup: https://www.youtube.com/watch?v=CSdkCmZ69RI&t=107s; standing height &t=142s
- pion's overlay guide (how his clips are labelled): https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=28s

## tripleStack

**Setup types**
- pion: "the reason why i do 2 diagonals up and a triple stack is either for multiblock setups, or
  for speed". On hybrid y104 he does "one out and up one diagonal and triple stack" [C: pion reply].
  A normal staircase into a diagonal staircase is the fast triple-stack build finished as a normal
  two-obsidian setup [C: pion reply].
- Practice: "practicing side setups with triple stack helped me a lot with consistency" [C: pion
  reply on hXMzyVtGPjg].
- **Misplace backups**: no source describes them [U]. The item text "with backups for misplaced
  blocks" has no source.

**Videos**
- Fast y104 build (normal → diagonal → triple stack): https://www.youtube.com/watch?v=aQ7GxWUXvaY&t=1696s [U that
  this chapter uses that exact build; pion says he "usually" does it on y104]
- No-pearl back y81 3+2, "i just hit it everytime if i get the triple stack off":
  https://www.youtube.com/watch?v=pMicLv3f3xc&t=0s
- No video that teaches the triple stack itself was found.

---

## Multiblock versus hybrid

The claim heard: multiblock setups are slower and worse than hybrid setups.

### Evidence

- **Setup time**: "a normal setup ... is 2.05s from start to bed placed, and a multiblock setup is
  2.50s", so multiblock costs **0.45 s more** [C: lenience thread, 2025-10-18]. Multiblock uses three
  obsidian instead of two [C: pion sheet].
- **pion on top setups** (reply on "Queer Arrow Cases", 2026-08-09): "i generally agree with chloe's
  sentiment on multiblock top setups, that being that i could 2+2 both hybrid and multiblock many
  times in a row, but multiblock would trend towards being less consistent as it is a slower setup,
  making pushing heights more difficult, and it's a more complicated setup, meaning that it's way
  easier to mess up. so yes, you don't need queer arrow for multiblock, but imo multiblock is just
  worse on top setups and shouldn't be used there." [C: https://www.youtube.com/watch?v=4QbgcdfoTyU,
  pion reply; "chloe" is presumably NyaChloe [U]].
- **pion, earlier**: "multiblock for normal setups is not really necessary, with just the usual hybrid
  setups you can 2+2 consistently by shooting the dragon multiple times to adjust height" [C: pion
  reply on aQ7GxWUXvaY].
- **Memory load**: multiblock means memorising "a specific order of which obby to place the bed on
  for each dragon rotation" [C: pion reply on aQ7GxWUXvaY]. hasbi: "a bit more of a learning curve"
  [C: hasbi reply].
- **Damage**: where you can't stand over the node, "you use more obby and multiple bed positions to
  make your damage more consistent despite the fact that you're bedding from further away of where
  the node the dragon circles is" [C: pion reply on aQ7GxWUXvaY]. On back T-100 y100, multiblock is
  "for most consistency on first double bed" and "helps a lot with getting kb because the dragon
  always has variance on that first rotation" [C: B5rXPSKlJA4]. On top setups, hasbi claims more
  consistent damage, "not by a crazy amount" [C: hasbi]. Viewer opinions go both ways ("multiblock is
  better in almost every way than hybrid"; "30 −28 sucks for 2+2s") [C: viewer comments; no
  expertise stated].
- **Five-explosive consistency**: ClearColdWater's zero-value model counts only setups he finds
  "consistently hittable with 5 explosives" and draws the line at "all the offset multiblock setup,
  including the universal side setups and stuff like back t97 y99, with one exception of back t103
  side setups" [C: blaze-bed thread]. So multiblock offsets tend to need more than five explosives or
  a bow. This matches pion: back offsets aren't consistently 5-beddable without a bow.
- **Where multiblock is the only option**: most modern-offset and side stands in pion's sheet are
  multiblock adjusted, including every universal side height, T-97 y99 modern, T-100 y100 and Tall
  Boy y104. Their plain alternative is the same stand built with two obsidian on the listed main side
  [C: pion sheet].

### Verdict

- **On top (non-offset) setups, multiblock is niche.** pion, the anchor source, says it is slower,
  easier to mess up, unnecessary for 2+2 and "shouldn't be used there". The 0.45 s cost is
  measured. hasbi's node-aligned set (nodeAlignedMultiblock) is exactly this case. It belongs in an
  optional or for-fun slot, not the main progression. The claim the owner heard is confirmed for top
  setups.
- **On offset and side setups, multiblock is not an optional upgrade.** It is how the universal
  side, T-97 y99 modern, T-100 y100, Tall Boy y104 and several buried offsets are built, and pion's
  own 3+2 setups there use it. Calling it "slower and worse" there is unconfirmed: no source compares
  the plain two-obsidian build to the multiblock build on an offset setup by time or damage.
- The "multiblock" item (sub7, "for consistent damage") therefore mixes two things. A late item
  presents multiblock as a consistency upgrade, but learners already meet multiblock stands earlier
  in universalSide, tallBoySide and t100Side. Whether to split, move or fold the item is a roadmap
  design decision and is left open.

## Items with no video found

- **eighthTwoPlusTwo**: no pion video. kohout's 2+2 chapters exist but are labelled y97, which
  conflicts with his y92 stand comment.
- **buriedHighSetups**: no video of a high setup taken from an O59+ spawn.
- **tripleStack**: no video teaching the build or misplace backups (example clips only).
- **frontLowY90, backLowY90, t94 front y99**: no pion 5-explosive chapter (the catalogue skips easy
  heights). pion's 2+2 hybrid clips and kohout's chapters cover them; their towers show only on screen.
- **eighthHigh**: no video shows the y97 3+2 the item describes.
