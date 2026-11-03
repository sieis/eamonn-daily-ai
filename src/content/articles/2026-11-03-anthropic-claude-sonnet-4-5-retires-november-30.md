---
title: "Claude Sonnet 4.5 Shuts Off November 30: What Businesses Using It Through Apps Should Check"
date: 2026-11-03
summary: "Anthropic is retiring the older Claude Sonnet 4.5 model on its own platforms on November 30, and points users to Sonnet 5.5. Anyone with a workflow, plug-in or automation that names the old model needs to switch before requests start failing."
source: 'https://platform.claude.com/docs/ja/models/sonnet-4-5/overview'
sourceName: 'Anthropic documentation'
company: 'Anthropic'
audience: 'SMB'
formatFit: 'Both'
priority: 'Medium'
keyDetails:
  - "Anthropic deprecated Sonnet 4.5 on September 30, 2026. Its docs list November 30, 2026 as the retirement date and Sonnet 5.5 as the recommended replacement"
  - "After retirement, requests that name the old model will fail on Anthropic's own platforms (its API, Claude Platform on AWS, and Microsoft Foundry)"
  - "Amazon Bedrock and Google-managed Claude on Google Cloud set their own schedules"
  - "Some third-party write-ups say the date is marked tentative on the deprecations page. Check the page directly"
  - "Sonnet 5.5 is reported to behave differently in places, including a new tokenizer, so test before switching a live workflow"
whyItMatters: "AI models get retired like old software versions. If a tool you rely on is pinned to one, it can stop working on a set date, without any change on your side."
consultingAngle: "Make a short list of every tool, automation and custom GPT-style assistant that runs on Claude: scheduling bots, customer-reply drafts, document tools. Ask each vendor or whoever built it which model it uses and whether it has been moved to Sonnet 5.5. Run a few real examples through the new version before the deadline and compare the outputs. Putting 'model retirement dates' on your quarterly tech checklist saves a rushed weekend later."
suggestedTitles:
  - "Your Claude Automations May Stop Working on November 30"
  - "AI Models Have Expiration Dates. Here's Your Checklist"
---
