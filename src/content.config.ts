import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * One markdown file per article, in src/content/articles/.
 * File name becomes the URL: 2026-08-17-my-story.md -> /articles/2026-08-17-my-story/
 *
 * The frontmatter mirrors the 🗞️ AI News Tracker Notion database so the daily
 * scheduled task can map its fields straight across. See CONTENT.md.
 */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    source: z.string().url(),
    sourceName: z.string().optional(),
    company: z
      .enum(['Anthropic', 'OpenAI', 'Google', 'Open Source', 'Industry/Other'])
      .default('Industry/Other'),
    audience: z.enum(['Solo/Creator', 'SMB', 'Enterprise', 'All']).default('All'),
    formatFit: z.enum(['Short-form', 'Long-form', 'Both']).optional(),
    priority: z.enum(['High', 'Medium', 'Low']).default('Medium'),
    keyDetails: z.array(z.string()).default([]),
    whyItMatters: z.string().optional(),
    consultingAngle: z.string().optional(),
    suggestedTitles: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
