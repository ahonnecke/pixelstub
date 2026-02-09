import { defineCollection, z } from "astro:content";

const work = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		image: z.string().optional(),
		tags: z.array(z.string()),
		link: z.string().url().optional(),
		order: z.number().default(0),
	}),
});

export const collections = { work };
