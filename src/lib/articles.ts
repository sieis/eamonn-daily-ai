import { getCollection } from 'astro:content';

/** All published articles, newest first. Drafts are dropped in production builds. */
export async function getPublishedArticles() {
  const articles = await getCollection('articles', ({ data }: { data: { draft: boolean } }) => {
    return import.meta.env.PROD ? data.draft === false : true;
  });

  return articles.sort(
    (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
      b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

/** "August 17, 2026" — formatted in UTC so the date never drifts a day. */
export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

/** "Aug 17" — the compact form used in the archive list. */
export function formatShortDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

/** "techcrunch.com" — falls back to the raw string if the URL will not parse. */
export function sourceHost(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}
