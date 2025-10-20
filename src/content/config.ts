import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

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

export const collections = {
	blog,
	projects,
};
