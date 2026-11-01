import type { APIRoute, GetStaticPaths } from "astro";
import type { IconReference } from "../../roadmap/IconReference";
import { IconRenderer } from "../../textures/IconRenderer";

interface Props {
  icon: IconReference;
}

export const getStaticPaths = (() =>
  IconRenderer.fromEnvironment()
    .all()
    .map((icon) => ({ params: { icon: icon.key }, props: { icon } }))) satisfies GetStaticPaths;

export const GET: APIRoute<Props> = ({ props }) =>
  new Response(new Uint8Array(IconRenderer.fromEnvironment().render(props.icon).encode()), {
    headers: { "Content-Type": "image/png" },
  });
