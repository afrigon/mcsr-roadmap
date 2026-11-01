import { Click } from "./Click";
import type { Control } from "./Control";
import { Hold } from "./Hold";
import { Hover } from "./Hover";
import type { Input } from "./Input";
import { KeyPress } from "./KeyPress";
import { Modifier } from "./Modifier";
import { MouseButton } from "./MouseButton";
import type { PointerTarget } from "./PointerTarget";
import { Release } from "./Release";
import { ScreenKeys } from "./ScreenKeys";
import { ScreenWidget } from "./ScreenWidget";
import { Slot } from "./Slot";

export type InputEntry = string | readonly string[];

export interface TimedInput {
  readonly text: string;
  readonly input: Input;
  readonly delay: number;
  readonly step: number;
}

const separateGap = 300;
const burstGap = 100;
const controls: Record<string, Control> = {
  shift: Modifier.Shift,
  ctrl: Modifier.Ctrl,
  left: MouseButton.Left,
  right: MouseButton.Right,
};
const verbs = ["hover", "click", "right-click", "hold", "release", "key"];

export class InputSequence {
  static parse(entries: readonly InputEntry[]): TimedInput[] {
    return entries.flatMap((entry, step) => {
      const burst = typeof entry === "string" ? [entry] : entry;

      return burst.map((text, index) => {
        if (typeof text !== "string") {
          throw new Error("A burst is a flat list of inputs; bursts cannot nest");
        }

        return { text, input: InputSequence.input(text), delay: index === 0 ? separateGap : burstGap, step };
      });
    });
  }

  private static input(line: string): Input {
    const [verb = "", ...rest] = line.trim().split(/\s+/);
    const argument = rest.join(" ");

    switch (verb) {
      case "hover":
        return new Hover(InputSequence.target(argument));
      case "click":
        return new Click(MouseButton.Left, argument === "" ? null : InputSequence.target(argument));
      case "right-click":
        return new Click(MouseButton.Right, argument === "" ? null : InputSequence.target(argument));
      case "hold":
        return new Hold(InputSequence.control(argument, line));
      case "release":
        return new Release(InputSequence.control(argument, line));
      case "key":
        return new KeyPress(ScreenKeys.parse(argument));
      default:
        throw new Error(`Unknown input "${line}": expected ${verbs.join(", ")}`);
    }
  }

  private static target(name: string): PointerTarget {
    return name === ScreenWidget.BookButton ? ScreenWidget.BookButton : Slot.parse(name);
  }

  private static control(name: string, line: string): Control {
    const control = controls[name];

    if (control === undefined) {
      throw new Error(`"${line}" names no control: expected ${Object.keys(controls).join(", ")}`);
    }

    return control;
  }
}
