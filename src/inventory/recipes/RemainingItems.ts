import { IconReference } from "../../roadmap/IconReference";
import { IconSource } from "../../roadmap/IconSource";
import { ItemStack } from "../ItemStack";

const remainders: Record<string, string> = {
  lava_bucket: "bucket",
  water_bucket: "bucket",
  milk_bucket: "bucket",
  honey_bottle: "glass_bottle",
  dragon_breath: "glass_bottle",
};

export class RemainingItems {
  static of(stack: ItemStack): ItemStack | null {
    const remainder = stack.icon.source === IconSource.Item ? remainders[stack.icon.name] : undefined;

    return remainder === undefined ? null : ItemStack.of(new IconReference(IconSource.Item, remainder), 1);
  }
}
