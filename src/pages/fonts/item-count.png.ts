import type { APIRoute } from "astro";
import { ItemCountFont } from "../../textures/ItemCountFont";

export const GET: APIRoute = () =>
  new Response(new Uint8Array(ItemCountFont.fromEnvironment().sprite().encode()), {
    headers: { "Content-Type": "image/png" },
  });
