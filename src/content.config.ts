import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { itemPageExtension, itemPagesDirectory } from "./roadmap/RoadmapFiles";

export const collections = {
  items: defineCollection({
    loader: glob({
      pattern: `*${itemPageExtension}`,
      base: itemPagesDirectory,
      generateId: ({ entry }) => entry.slice(0, -itemPageExtension.length),
    }),
  }),
};
