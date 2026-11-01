import { Click } from "./Click";
import type { Control } from "./Control";
import { Hold } from "./Hold";
import { Hover } from "./Hover";
import type { Input } from "./Input";
import { KeyPress } from "./KeyPress";
import { Modifier } from "./Modifier";
import { MouseButton } from "./MouseButton";
import { Release } from "./Release";
import { Slot } from "./Slot";

export interface TimedInput {
  readonly text: string;
  readonly input: Input;
  readonly delay: number;
}

const defaultGap = 100;
const controls: Record<string, Control> = {
  shift: Modifier.Shift,
  ctrl: Modifier.Ctrl,
  left: MouseButton.Left,
  right: MouseButton.Right,
};
const verbs = ["hover", "click", "right-click", "hold", "release", "key", "wait"];

export class InputSequence {
  static parse(lines: readonly string[]): TimedInput[] {
    const inputs: TimedInput[] = [];
    let pause = 0;

    for (const line of lines) {
      const [verb = "", ...rest] = line.trim().split(/\s+/);
      const argument = rest.join(" ");

      if (verb === "wait") {
        const milliseconds = Number(argument);

        if (!Number.isFinite(milliseconds) || milliseconds < 0) {
          throw new Error(`"${line}" needs a number of milliseconds`);
        }

        pause += milliseconds;
        continue;
      }

      inputs.push({ text: line, input: InputSequence.input(verb, argument, line), delay: defaultGap + pause });
      pause = 0;
    }

    return inputs;
  }

  private static input(verb: string, argument: string, line: string): Input {
    switch (verb) {
      case "hover":
        return new Hover(Slot.parse(argument));
      case "click":
        return new Click(MouseButton.Left, argument === "" ? null : Slot.parse(argument));
      case "right-click":
        return new Click(MouseButton.Right, argument === "" ? null : Slot.parse(argument));
      case "hold":
        return new Hold(InputSequence.control(argument, line));
      case "release":
        return new Release(InputSequence.control(argument, line));
      case "key":
        return new KeyPress(argument.toUpperCase());
      default:
        throw new Error(`Unknown input "${line}": expected ${verbs.join(", ")}`);
    }
  }

  private static control(name: string, line: string): Control {
    const control = controls[name];

    if (control === undefined) {
      throw new Error(`"${line}" names no control: expected ${Object.keys(controls).join(", ")}`);
    }

    return control;
  }
}
