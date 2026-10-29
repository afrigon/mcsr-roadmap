export class Goal {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly equivalent: string | null,
    readonly order: number,
  ) {}

  isAfter(other: Goal): boolean {
    return this.order > other.order;
  }
}
