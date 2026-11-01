import { SlotSection } from "./SlotSection";

const sectionSizes: Record<SlotSection, number> = {
  [SlotSection.Chest]: 27,
  [SlotSection.Inventory]: 27,
  [SlotSection.Hotbar]: 9,
  [SlotSection.Offhand]: 1,
};

export class Slot {
  static readonly offhand = new Slot(SlotSection.Offhand, 1);

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

    if (section === SlotSection.Offhand) {
      if (indexText !== undefined) {
        throw new Error(`Slot "${value}" takes no number: there is one offhand`);
      }

      return Slot.offhand;
    }

    return Slot.of(section, Number(indexText));
  }

  static of(section: SlotSection, index: number): Slot {
    const size = sectionSizes[section];

    if (!Number.isInteger(index) || index < 1 || index > size) {
      throw new Error(`Slot "${section} ${index}" is outside ${section} 1–${size}`);
    }

    return section === SlotSection.Offhand ? Slot.offhand : new Slot(section, index);
  }

  static all(section: SlotSection): Slot[] {
    return Array.from({ length: sectionSizes[section] }, (_, index) => Slot.of(section, index + 1));
  }

  get key(): string {
    return this.section === SlotSection.Offhand ? this.section : `${this.section} ${this.index}`;
  }
}
