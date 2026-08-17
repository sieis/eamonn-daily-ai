# Adding an article

Every article is **one markdown file** in `src/content/articles/`. Add files, open a PR,
Netlify builds the site. Nothing else needs to change — the homepage, the archive, and
the article page all pick it up automatically.

## File naming

```
src/content/articles/YYYY-MM-DD-short-slug.md
```

The file name becomes the URL:

```
2026-08-17-ibm-retraining-consultants-openai.md
  ->  /articles/2026-08-17-ibm-retraining-consultants-openai/
```

Keep slugs lowercase, hyphenated, and unique. Leading with the date keeps the folder
sorted and guarantees no collisions.

## Frontmatter

Everything lives in the frontmatter — a markdown body is optional (the Notion pages are
frontmatter-only today). If you do add body text below the `---`, it renders as an extra
section on the article page.

```markdown
---
title: 'Headline in title case'
date: 2026-08-17
summary: 'One or two sentences. Shows on the card and as the lead on the article page.'
source: 'https://example.com/the-original-story'
sourceName: 'TechCrunch'
company: 'Industry/Other'
audience: 'Enterprise'
formatFit: 'Both'
priority: 'High'
keyDetails:
  - 'First bullet'
  - 'Second bullet'
whyItMatters: 'The video angle for the Got Sheet audience.'
consultingAngle: 'The specific pitch/service angle this story supports.'
suggestedTitles:
  - 'Title option one'
  - 'Title option two'
---
```

### Fields

| Field              | Required | Notes                                                                             |
| ------------------ | -------- | --------------------------------------------------------------------------------- |
| `title`            | yes      | The headline.                                                                      |
| `date`             | yes      | `YYYY-MM-DD`. Drives sort order everywhere.                                        |
| `summary`          | yes      | Card text + article lead. Cards clamp to ~4 lines, so keep it tight.               |
| `source`           | yes      | Full URL to the original story. Must be a valid URL or the build fails.            |
| `sourceName`       | no       | Display name, e.g. `TechCrunch`. Falls back to the domain.                         |
| `company`          | no       | `Anthropic` · `OpenAI` · `Google` · `Open Source` · `Industry/Other` (default).     |
| `audience`         | no       | `Solo/Creator` · `SMB` · `Enterprise` · `All` (default).                            |
| `formatFit`        | no       | `Short-form` · `Long-form` · `Both`.                                               |
| `priority`         | no       | `High` · `Medium` (default) · `Low`. `High` shows a 🔥 chip.                        |
| `keyDetails`       | no       | List of strings. Renders as the bulleted "Key details" block.                      |
| `whyItMatters`     | no       | Renders as the "Why it matters" callout.                                           |
| `consultingAngle`  | no       | Renders as the accented "The business angle" callout.                              |
| `suggestedTitles`  | no       | List of strings. Stored but not displayed — kept for your own use.                 |
| `draft`            | no       | `true` hides it from production builds. Defaults to `false`.                       |

## Mapping from the Notion AI News Tracker

| Notion property    | Frontmatter field   |
| ------------------ | ------------------- |
| Name               | `title`             |
| Date Added         | `date`              |
| Summary            | `summary`           |
| Source             | `source`            |
| Company            | `company`           |
| Audience           | `audience`          |
| Format Fit         | `formatFit`         |
| Priority           | `priority`          |
| Key Details        | `keyDetails`        |
| Why It Matters     | `whyItMatters`      |
| Consulting Angle   | `consultingAngle`   |
| Suggested Titles   | `suggestedTitles`   |

Two conversions to be aware of:

- **Priority** drops the emoji: `🔥 High` → `High`, `🟡 Medium` → `Medium`, `⚪ Low` → `Low`.
- **Key Details** and **Suggested Titles** are single text fields in Notion (newline- and
  `|`-separated respectively). Split them into YAML lists here.

## YAML gotcha

Most of these strings contain apostrophes and quotes. Wrap every value in quotes, and if
the string contains the same quote character you wrapped it with, switch to the other one:

```yaml
title: "Meta's Free 30B Model"          # has an apostrophe -> use double quotes
summary: 'IBM said "tens of thousands"' # has double quotes  -> use single quotes
```

If a string needs both, double the inner single quote: `'It''s "big"'`.

## Checking your work

```bash
npm install
npm run build     # schema errors fail the build with the offending file named
npm run dev       # http://localhost:4321
```
