import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { itemPageExtension, itemPagesDirectory } from "./roadmap/RoadmapFiles";

export const collections = {
  items: defineCollection({
    loader: glob({
      pattern: `**/*${itemPageExtension}`,
      base: itemPagesDirectory,
      generateId: ({ entry }) => entry.slice(entry.lastIndexOf("/") + 1, -itemPageExtension.length),
    }),
    schema: z.strictObject({
      title: z.string(),
      label: z.string().optional(),
      category: z.string(),
      goal: z.string(),
      parent: z.string().optional(),
      icon: z.string(),
      index: z.number().int(),
      description: z.string(),
      ranked: z.string().optional(),
    }),
  }),
};
