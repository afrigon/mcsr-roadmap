import type { APIRoute, GetStaticPaths } from "astro";
import { goalIcon } from "../../canvas/goalIcons";
import { AlertKind } from "../../markdown/AlertKind";
import type { IconReference } from "../../roadmap/IconReference";
import { RoadmapLoader } from "../../roadmap/RoadmapLoader";
import { IconRenderer } from "../../textures/IconRenderer";

interface Props {
  icon: IconReference;
}

export const getStaticPaths = (async () => {
  const roadmap = await RoadmapLoader.load();
  const icons = [
    ...roadmap.items.map((item) => item.icon),
    ...roadmap.goals.map((goal) => goalIcon(goal)),
    ...AlertKind.all.map((kind) => kind.icon),
  ];
  const unique = new Map(icons.map((icon) => [icon.key, icon]));

  return [...unique.values()].map((icon) => ({ params: { icon: icon.key }, props: { icon } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute<Props> = ({ props }) =>
  new Response(new Uint8Array(IconRenderer.fromEnvironment().render(props.icon).encode()), {
    headers: { "Content-Type": "image/png" },
  });
