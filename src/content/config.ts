import { defineCollection, z } from 'astro:content';

const fundedProjectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.number(),
    institution: z.string(),
    country: z.string(),
    grantType: z.string(),
    datePublished: z.string(),
    description: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const partnershipsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    partnerName: z.string(),
    value: z.string(),
    type: z.string(),
    datePublished: z.string(),
    description: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    datePublished: z.string(),
    category: z.string(),
    author: z.string().default('UKABCS Secretariat'),
    description: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  'funded-projects': fundedProjectsCollection,
  'partnerships': partnershipsCollection,
  'news': newsCollection,
};
