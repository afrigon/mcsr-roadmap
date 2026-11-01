import { SlotSection } from "./SlotSection";

const sectionSizes: Record<SlotSection, number> = {
  [SlotSection.Chest]: 27,
  [SlotSection.Crafting]: 9,
  [SlotSection.Result]: 1,
  [SlotSection.Armor]: 4,
  [SlotSection.Inventory]: 27,
  [SlotSection.Hotbar]: 9,
  [SlotSection.Offhand]: 1,
};

export class Slot {
  private constructor(
    readonly section: SlotSection,
    readonly index: number,
  ) {}

  static parse(value: string): Slot {
    const [sectionName, indexText, ...rest] = value.trim().split(/\s+/);
    const section = Object.values(SlotSection).find((candidate) => candidate === sectionName);

    if (section === undefined || rest.length > 0) {
      throw new Error(`Unknown slot "${value}"`);
    }

    if (sectionSizes[section] === 1) {
      if (indexText !== undefined) {
        throw new Error(`Slot "${value}" takes no number: there is one ${section} slot`);
      }

      return Slot.of(section, 1);
    }

    return Slot.of(section, Number(indexText));
  }

  static of(section: SlotSection, index: number): Slot {
    const size = sectionSizes[section];

    if (!Number.isInteger(index) || index < 1 || index > size) {
      throw new Error(`Slot "${section} ${index}" is outside ${section} 1–${size}`);
    }

    return new Slot(section, index);
  }

  static range(section: SlotSection, count: number): Slot[] {
    return Array.from({ length: count }, (_, index) => Slot.of(section, index + 1));
  }

  static all(section: SlotSection): Slot[] {
    return Slot.range(section, sectionSizes[section]);
  }

  get key(): string {
    return sectionSizes[this.section] === 1 ? this.section : `${this.section} ${this.index}`;
  }
}
