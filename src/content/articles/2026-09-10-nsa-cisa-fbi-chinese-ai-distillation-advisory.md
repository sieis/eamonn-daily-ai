---
title: "The US Government Just Said Six Chinese AI Companies Built Their Models by Siphoning Yours"
date: 2026-09-10
summary: "In a joint advisory, the NSA, CISA, and FBI accused DeepSeek, Alibaba, Moonshot AI, MiniMax, StepFun, and Z.AI of running industrial-scale campaigns since 2024 to extract billions of tokens from Claude, GPT, Gemini, and Grok through fake accounts and proxy 'transfer stations' — then using that data as the backbone, not just a shortcut, for their own models."
source: 'https://www.cisa.gov/news-events/cybersecurity-advisories/aa26-251a'
sourceName: 'CISA'
company: 'Open Source'
audience: 'Enterprise'
formatFit: 'Both'
priority: 'High'
keyDetails:
  - "On September 8, the NSA, CISA, and FBI jointly named six China-based AI companies — DeepSeek, Alibaba, Moonshot AI, MiniMax, StepFun, and Z.AI — as running 'aggressive, malicious, and targeted' campaigns to extract billions of tokens across millions of exchanges from US frontier models since late 2024"
  - "The advisory says the companies routed requests through a gray market of API proxies nicknamed 'transfer stations' to get around regional restrictions and disguise where the traffic was really coming from, and describes this activity as the core of their AI strategy, 'not merely a supplement' to their own research"
  - "DeepSeek specifically is accused of systematically extracting from Claude 3.7, Sonnet 4 and 4.5, Opus 4.1, Gemini 2.5 Pro and Flash, GPT-4 and its variants, GPT-5, and Grok 4 to help build its R1 and V3 models; Alibaba is accused of using the same tactics to improve its Qwen model family"
  - "The advisory gives US AI providers a concrete checklist for spotting this behavior in their own accounts: nonstop usage with no idle periods or human-like variation, new subscriptions that immediately hit maximum usage instead of ramping up gradually, one account logging in from many different IPs and devices, and usage volume that doesn't match the subscription tier purchased"
  - "This follows Anthropic's own February disclosure of what it called industrial-scale distillation attacks — over 24,000 fraudulent accounts and 16 million exchanges — meaning the government advisory is now formally validating a pattern the industry had already flagged, not introducing a brand-new allegation"
whyItMatters: "A lot of the appeal of cheap or free open-weight AI models is that they seem to offer frontier-level capability without the frontier-level price tag. This advisory is the US government's formal position that at least some of that capability may have been obtained by systematically siphoning it from the paid models companies and their AI vendors already rely on — which matters for anyone deciding which AI tools to trust with their data or build their product on."
consultingAngle: "Before recommending or embedding a cheap open-weight model in a client's product, it's now reasonable to ask where its training data actually came from and whether the vendor has any exposure under this advisory — this is a legitimate new line item for AI vendor due diligence, alongside uptime and support. It's also worth checking your own AI provider accounts for the exact red flags CISA lists — nonstop usage, shared logins from many IPs — since the advisory notes some of these access patterns exploit ordinary business accounts, not just obviously suspicious ones."
suggestedTitles:
  - "The US Government Just Said Six Chinese AI Companies Built Their Models by Siphoning Yours"
  - "NSA, CISA, and FBI Accuse DeepSeek, Alibaba, and Four Others of Stealing From US AI Models at Scale"
  - "What the New Government Warning on Chinese AI 'Distillation' Actually Means for the Tools You Use"
---
