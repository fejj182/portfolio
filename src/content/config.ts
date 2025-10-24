import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		image: z.string().optional(),
		url: z.string().optional(),
		github: z.string().optional(),
		tech: z.array(z.string()).optional(),
		featured: z.boolean().optional(),
	}),
});

const prompts = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
	}),
});

export const collections = {
	projects,
	prompts,
};
