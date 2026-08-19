---
name: brand-style-guide
description: The Daily AI site's visual brand system — color palette, typography, spacing/radius/shadow tokens, component patterns, and motion rules, all sourced from src/styles/global.css. Use this whenever building or styling anything for this project — new pages, components, emails, artifacts, or mockups — or whenever the user asks about brand colors, the style guide, design tokens, or "make it look on-brand." Read this before writing any CSS or inline styles for the site so new work matches the existing system instead of introducing new colors or type scales.
---

# Daily AI — Brand Style Guide

Deep muted green into a secondary green carrying every accent, on a warm
off-white canvas with near-black ink. A warm orange appears sparingly. Inter
with tight tracking on the headlines, rounded cards that lift on hover.
Content fades up as it scrolls into view. Inspired by
[jitter.video](https://jitter.video).

**Source of truth:** the five hex values at the top of the `:root` block in
`src/styles/global.css` (`--accent`, `--accent-2`, `--bg-alt`, `--ink`,
`--warm`). Every gradient, chip, border, button glow, and focus ring on the
site is mixed off those five via `color-mix()`, so recoloring the whole site
means editing that one block and nothing else. `public/favicon.svg` carries
the same gradient by hand and needs a manual update if the palette changes.

When writing CSS for this project, reference the custom properties
(`var(--accent)`, etc.) rather than hardcoding hex values — new components
should recolor automatically if the palette ever shifts.

## Palette

| Token            | Hex / value                                     | Use                                                    |
| ---------------- | ------------------------------------------------ | ------------------------------------------------------- |
| `--ink`           | `#151a18`                                        | Primary text                                            |
| `--ink-2`         | `#454e4a`                                        | Body copy, meta text                                    |
| `--ink-3`         | `#666e69`                                        | Muted text, eyebrow labels                               |
| `--bg`            | `#ffffff`                                        | Card / surface background                                |
| `--bg-alt`        | `#f6f5f0`                                        | Warm off-white page canvas                                |
| `--line`          | `#e4e2d9`                                        | Default hairline border                                   |
| `--line-strong`   | `#d3d0c5`                                        | Emphasized border (ghost button, etc.)                     |
| `--accent`        | `#173f35`                                        | Primary brand green                                        |
| `--accent-2`      | `#2f6657`                                        | Secondary green                                             |
| `--warm`          | `#d97941`                                        | Warm orange — **sparing**, high-priority signal only         |
| `--warm-ink`      | `#a2551f`                                        | Text on warm-tinted surfaces                                  |

Two derived pieces built from `--accent`/`--accent-2`:

- **Brand gradient:** `linear-gradient(102deg, var(--accent) 0%, var(--accent-2) 100%)` — used on primary buttons, the eyebrow's pulsing dot, and `.gradient-text`.
- **Soft gradient:** the same two colors at 10% opacity via `color-mix()` — used as chip/callout fill (`--grad-soft`).

Tints, all via `color-mix(in srgb, <color> <percent>, transparent)`:

| Token            | Mix                          | Use                              |
| ---------------- | ----------------------------- | ---------------------------------- |
| `--accent-line`   | accent @ 24%                  | Accent chip/callout border          |
| `--accent-glow`   | accent @ 28%                  | Primary button shadow                |
| `--accent-ring`   | accent @ 18%                  | Focus ring                            |
| `--warm-soft`     | warm @ 14%                    | High-priority chip fill                |
| `--warm-line`     | warm @ 36%                    | High-priority chip border               |

**The warm orange is reserved for one signal — high priority.** Don't reach
for it as a general accent color; it loses its meaning if it shows up
everywhere. If something new needs emphasis, use the green gradient or a
darker/lighter mix of the two greens instead.

## Typography

Inter Variable, falling back to system sans:

```css
font-family: 'Inter Variable', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;
```

Body text: 16px base, 1.6 line-height, `--ink`.

Headings (`h1`–`h3`): weight 620, tight negative letter-spacing, `text-wrap: balance` so lines break evenly.

| Element  | Size                              | Letter-spacing | Line-height |
| -------- | ---------------------------------- | -------------- | ----------- |
| `h1`      | `clamp(2.5rem, 6vw, 4.25rem)`       | -0.035em        | 1.08         |
| `h2`      | `clamp(1.75rem, 3.4vw, 2.5rem)`      | -0.035em (inherited) | 1.08    |
| `h3`      | `clamp(1.15rem, 2vw, 1.4rem)`         | -0.02em          | 1.25          |
| `.lede`   | `clamp(1.05rem, 1.6vw, 1.25rem)`       | —                | 1.55, color `--ink-2`, max-width `60ch` |

`.lede` is the intro/standfirst paragraph style — larger, softer-colored, and line-length constrained for readability.

## Spacing, radius, shadow

| Token          | Value                                  |
| -------------- | ---------------------------------------- |
| `--radius-sm`   | `10px` (small elements)                   |
| `--radius`      | `16px` (cards, default)                    |
| `--radius-lg`   | `24px` (large surfaces)                     |
| `--shadow-sm`   | `0 1px 2px rgba(21,26,24,.04)`                |
| `--shadow`      | `0 4px 24px rgba(21,26,24,.07)`                |
| `--shadow-lg`   | `0 18px 48px rgba(21,26,24,.13)`                |
| `--max`         | `1120px` max content width                       |
| `--ease`        | `cubic-bezier(0.2, 0.7, 0.2, 1)` — all transitions/animations |

Pill radius (`999px`) is used separately for chips and buttons — not one of the tokens above, but consistent across both.

## Components

- **`.eyebrow`** — small uppercase label (12px, weight 600, `--ink-3`) with a gradient dot that pulses (`animation: pulse 2.4s`). Used above section headings.
- **`.gradient-text`** — brand gradient clipped to text, for a single emphasized word or short phrase. Don't overuse — it's most effective as a one-off accent, not a paragraph style.
- **`.chip`** — pill badge, `999px` radius, 11.5px/600 weight text. Three variants:
  - default: `--bg-alt` fill, `--line` border, `--ink-2` text
  - `.chip--accent`: soft gradient fill, `--accent-line` border, `--accent` text
  - `.chip--high`: `--warm-soft` fill, `--warm-line` border, `--warm-ink` text (high-priority signal only)
- **`.btn`** — pill button, 14.5px/600 weight, transitions on transform/shadow/background.
  - `.btn--primary`: gradient fill, white text, `--accent-glow` shadow that grows and lifts (`translateY(-2px)`) on hover.
  - `.btn--ghost`: white background, `--line-strong` border, `--shadow-sm` → `--shadow` on hover, same lift.
  - An optional `.arrow` child nudges right (`translateX(3px)`) on hover.
- **Cards** generally: rounded (`--radius`), `--shadow` at rest, lift + deepen shadow on hover — this pattern (translateY + bigger shadow) is the standard hover treatment across the site, not just buttons.

## Motion

- Everything eases with `var(--ease)` — a soft overshoot-free curve, not a linear or bounce easing.
- Content reveals once as it scrolls into view: start `opacity: 0; transform: translateY(14–18px)`, animate to `opacity: 1; transform: none` (classes `.rise` for immediate/on-load, `.reveal`/`.is-visible` for scroll-triggered).
- Always respect `prefers-reduced-motion: reduce` — collapse animation/transition durations to near-zero and snap `.reveal` straight to its visible state. Any new animated element needs this same guard.

## Do / Don't

- **Do** drive color, radius, shadow, and easing off the existing CSS custom properties — don't hardcode new hex values or one-off easing curves.
- **Do** keep the warm orange rare and meaningful (high priority / urgency only).
- **Do** use the gradient sparingly — primary buttons, the eyebrow dot, and `.gradient-text` accents, not as a general-purpose fill.
- **Don't** introduce a new accent color for a new feature — mix off `--accent`/`--accent-2` (lighter/darker, or a new `color-mix` tint) before reaching for something outside the palette.
- **Don't** skip the `prefers-reduced-motion` guard on new animated/transitioning elements.
- **Don't** treat this file as exhaustive CSS — for exact selectors and values, read `src/styles/global.css` directly; this is the reference for staying consistent, not a copy of the stylesheet.
