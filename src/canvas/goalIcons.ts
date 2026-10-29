import type { Goal } from "../roadmap/Goal";
import { IconReference } from "../roadmap/IconReference";
import { IconSource } from "../roadmap/IconSource";
import { Rank } from "../roadmap/Rank";

const unrankedIcon = new IconReference(IconSource.Item, "clock_00");

const rankIcons: Record<Rank, IconReference> = {
  [Rank.Coal]: new IconReference(IconSource.Item, "coal"),
  [Rank.Iron]: new IconReference(IconSource.Item, "iron_ingot"),
  [Rank.Gold]: new IconReference(IconSource.Item, "gold_ingot"),
  [Rank.Emerald]: new IconReference(IconSource.Item, "emerald"),
  [Rank.Diamond]: new IconReference(IconSource.Item, "diamond"),
  [Rank.Netherite]: new IconReference(IconSource.Item, "netherite_ingot"),
};

export function goalIcon(goal: Goal): IconReference {
  return goal.rank === null ? unrankedIcon : rankIcons[goal.rank];
}
