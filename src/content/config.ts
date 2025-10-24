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
		description: z.string(),
		date: z.coerce.date(),
		prompt: z.string(),
		outputs: z.array(z.string()),
		reflection: z.string().optional(),
		followUpPrompts: z.array(z.string()).optional(),
	}),
});

export const collections = {
	projects,
	prompts,
};
