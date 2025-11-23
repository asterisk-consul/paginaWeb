import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(), // ← acepta Date real
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog };
