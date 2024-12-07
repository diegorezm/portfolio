// 1. Import utilities from `astro:content`
import {defineCollection, z} from 'astro:content';

// 2. Import loader(s)
// import {glob} from 'astro/loaders';

// 3. Define your collection(s)
const blog = defineCollection({
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string().optional(),
    tags: z.array(z.string()),
  }),
});
// 4. Export a single `collections` object to register your collection(s)
export const collections = {blog};
