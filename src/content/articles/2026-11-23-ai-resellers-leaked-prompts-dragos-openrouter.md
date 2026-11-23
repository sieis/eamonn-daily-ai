---
title: "Researchers Caught Cheap AI Resellers Reading Customers' Prompts, Even Ones Marked 'Don't Store'"
date: 2026-11-23
summary: "Security firm Dragos and researcher HD Moore planted about 2 million booby-trapped prompts with AI hosting services between July and November. Three inference providers turned out to be breached, bargain sellers on an AI marketplace were quietly logging traffic, and some stolen prompts had 'zero data retention' turned on. OpenRouter dropped three providers, and OpenAI now requires resellers of its models to get approval."
source: 'https://thehackernews.com/2026/11/openrouter-drops-3-providers-after.html'
sourceName: 'The Hacker News'
company: 'Industry/Other'
audience: 'All'
formatFit: 'Both'
priority: 'High'
keyDetails:
  - "How the test worked: between July and November 2026, researchers sent about 2 million prompts containing unique fake passwords, cloud keys and secret links. Each one appeared in only one prompt, so any use of it proved someone had read that prompt"
  - "Three AI inference providers (companies that run AI models for other businesses) were breached, and none of them knew until the researchers told them. In one case, roughly 200 planted Amazon cloud keys were stolen and tested within hours"
  - "Some of the stolen requests were flagged 'Zero Data Retention,' the setting that's supposed to mean your prompt is never stored. The researchers warn that the flag usually only covers the first company your request reaches, not everyone it gets passed to"
  - "On one AI marketplace, sellers listed models at the lowest prices, switched on request logging and simply collected what customers sent. No hacking was needed. One seller secretly added about 1,000 hidden words to every prompt"
  - "OpenRouter, a popular service that connects one account to hundreds of AI models, removed three providers and pulled 'zero data retention' status from 125 endpoints. It says OpenRouter itself wasn't breached and it has notified affected customers"
  - "Providers that disclosed problems include Phala (an attacker could see requests to one DeepSeek model from October 21 to November 8), Together AI (stored prompt samples downloaded after an AI coding agent leaked a password to GitHub) and Novita (some requests forwarded to MiniMax's own servers)"
  - "Separately, OpenAI now requires gateways and routers that resell access to its models to get its review and approval, according to Semafor (reported November 20)"
whyItMatters: "Most people assume that when they type something into an AI tool, it goes to one company. Behind many apps and cheap AI services, your words can pass through several companies you've never heard of, and this research shows some of them were reading along. The lesson isn't to stop using AI. It's that the price and the privacy promise are only as good as the slowest, cheapest link in the chain."
consultingAngle: "Ask every AI tool your team uses one question in writing: which company actually runs the model, and does my data pass through anyone else? Prefer going direct to a major provider (OpenAI, Anthropic, Google, Microsoft) on a business plan with a signed data agreement over bargain resellers and 'all models for one price' services. Never paste passwords, API keys, customer card numbers or bank details into a prompt. If developers or automations send data to AI models, rotate any keys that may have been included, and consider planting a free Thinkst Canarytoken in your prompts so you're alerted if one ever gets used. For truly sensitive work, running a model on your own computer means no third party sees it at all."
suggestedTitles:
  - "The Cheap AI Service You're Using Might Be Reading Everything"
  - "'Zero Data Retention' Didn't Mean Zero. Here's What Happened"
---
