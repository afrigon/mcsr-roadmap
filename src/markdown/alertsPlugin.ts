import { type Custom, defineMdastPlugin } from "satteri";
import { AlertKind } from "./AlertKind";

const markerPattern = /^\[!(\w+)\]\s*/;

function titleOf(kind: AlertKind): Custom {
  return {
    type: "alertTitle",
    data: { hName: "p", hProperties: { className: ["alert-title"] } },
    children: [
      { type: "image", url: kind.icon.path, alt: "" },
      { type: "text", value: kind.title },
    ],
  };
}

export const alertsPlugin = defineMdastPlugin({
  name: "alerts",
  blockquote(node, context) {
    const [paragraph, ...blocks] = node.children;

    if (paragraph?.type !== "paragraph") {
      return;
    }

    const [text, ...inline] = paragraph.children;

    if (text?.type !== "text") {
      return;
    }

    const match = markerPattern.exec(text.value);
    const kind = match === null ? undefined : AlertKind.find(match[1]!);

    if (match === null || kind === undefined) {
      return;
    }

    const remainder = text.value.slice(match[0].length);
    const phrasing = remainder === "" ? inline : [{ type: "text" as const, value: remainder }, ...inline];
    const body = phrasing.length === 0 ? blocks : [{ type: "paragraph" as const, children: phrasing }, ...blocks];

    context.replaceNode(node, {
      type: "alert",
      data: { hName: "aside", hProperties: { className: ["alert"], dataAlert: kind.name } },
      children: [titleOf(kind), ...body],
    });
  },
});
