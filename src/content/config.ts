import { defineCollection, z } from "astro:content";
const simple = defineCollection({
  schema: z.object({
    page: z.string(),
  }),
});
const work = defineCollection({
  schema: z.object({
    projectName: z.string().optional(),
    description: z.string().optional(),
    pubDate: z.date().optional(),
    website: z
      .array(
        z.object({
          name: z.string(),
          url: z.string().optional(),
        })
      )
      .optional(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
  }),
});
const vscode = defineCollection({
  schema: z.object({
    themeName: z.string().optional(),
    description: z.string().optional(),
    marketPlace: z.string().optional(),
    github: z
      .array(
        z.object({
          name: z.string(),
          url: z.string(),
        })
      )
      .optional(),
    previews: z
      .array(
        z.object({
          title: z.string(),
          link: z.string(),
        })
      )
      .optional(),
  }),
});
export const collections = {
  simple: simple,
  work: work,
  vscode: vscode,
};
