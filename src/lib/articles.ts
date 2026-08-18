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

/** "2026-08-17" — the UTC day key used for grouping and for day-page URLs. */
export function dayKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

/**
 * Articles bucketed into one entry per day, newest day first. Each day keeps the
 * order it came in with, which is already newest-first from getPublishedArticles.
 */
export function groupByDay<T extends { data: { date: Date } }>(articles: T[]) {
  const byDay = new Map<string, T[]>();

  for (const article of articles) {
    const key = dayKey(article.data.date);
    if (!byDay.has(key)) byDay.set(key, []);
    byDay.get(key)!.push(article);
  }

  return [...byDay.entries()]
    .sort((a, b) => b[0].localeCompare(a[0]))
    .map(([key, items]) => ({ key, date: items[0].data.date, articles: items }));
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

/** "August 17" — no year, used in the hero's compact stats line. */
export function formatMonthDay(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
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
