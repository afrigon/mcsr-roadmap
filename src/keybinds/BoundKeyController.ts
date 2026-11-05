import { ProfileStore } from "../profile/ProfileStore";
import { KeyAction } from "./KeyAction";
import { KeybindStore } from "./KeybindStore";
import { KeyLabels } from "./KeyLabels";

export class BoundKeyController {
  private readonly store = new KeybindStore(ProfileStore.fromWindow());

  constructor(private readonly document: Document) {}

  async start() {
    const labels = await KeyLabels.fromDocument(this.document, navigator);
    const update = () => {
      for (const element of this.document.querySelectorAll<HTMLElement>("[data-bound-action]")) {
        const action = KeyAction.find(element.dataset.boundAction!);

        if (action !== undefined) {
          element.textContent = labels.label(this.store.get(action));
        }
      }
    };

    update();
    this.store.subscribe(update);
  }
}
