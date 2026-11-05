import { KeyCategory } from "./KeyCategory";

const hotbarSlots = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export class KeyAction {
  static readonly all: readonly KeyAction[] = [
    new KeyAction("key.jump", KeyCategory.Movement, "key.keyboard.space"),
    new KeyAction("key.sneak", KeyCategory.Movement, "key.keyboard.left.shift"),
    new KeyAction("key.sprint", KeyCategory.Movement, "key.keyboard.left.control"),
    new KeyAction("key.left", KeyCategory.Movement, "key.keyboard.a"),
    new KeyAction("key.right", KeyCategory.Movement, "key.keyboard.d"),
    new KeyAction("key.back", KeyCategory.Movement, "key.keyboard.s"),
    new KeyAction("key.forward", KeyCategory.Movement, "key.keyboard.w"),
    new KeyAction("key.attack", KeyCategory.Gameplay, "key.mouse.left"),
    new KeyAction("key.pickItem", KeyCategory.Gameplay, "key.mouse.middle"),
    new KeyAction("key.use", KeyCategory.Gameplay, "key.mouse.right"),
    new KeyAction("key.drop", KeyCategory.Inventory, "key.keyboard.q"),
    ...hotbarSlots.map((slot) => new KeyAction(`key.hotbar.${slot}`, KeyCategory.Inventory, `key.keyboard.${slot}`)),
    new KeyAction("key.inventory", KeyCategory.Inventory, "key.keyboard.e"),
    new KeyAction("key.swapOffhand", KeyCategory.Inventory, "key.keyboard.f"),
    new KeyAction("key.togglePerspective", KeyCategory.Miscellaneous, "key.keyboard.f5"),
  ];

  private constructor(
    readonly id: string,
    readonly category: KeyCategory,
    readonly defaultKey: string,
  ) {}

  static withDefault(key: string): KeyAction | undefined {
    return KeyAction.all.find((action) => action.defaultKey === key);
  }

  static find(id: string): KeyAction | undefined {
    return KeyAction.all.find((action) => action.id === id);
  }
}
