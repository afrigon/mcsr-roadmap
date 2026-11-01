import { IconReference } from "../roadmap/IconReference";
import { IconSource } from "../roadmap/IconSource";

export class AlertKind {
  static readonly all: readonly AlertKind[] = [
    new AlertKind("note", "Note", new IconReference(IconSource.Item, "writable_book")),
    new AlertKind("unverified", "Unverified", new IconReference(IconSource.Item, "suspicious_stew")),
  ];

  private constructor(
    readonly name: string,
    readonly title: string,
    readonly icon: IconReference,
  ) {}

  static find(marker: string): AlertKind | undefined {
    return AlertKind.all.find((kind) => kind.name === marker.toLowerCase());
  }
}
