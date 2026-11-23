---
title: "AI Coding Agents Ace the Tests but Finish Fewer Than 8% of Real Assignments in a Simulated Office"
date: 2026-11-23
summary: "A new benchmark called SWE-CoWork drops AI coding agents into a fake software company with 26 colleagues, scattered requirements and messy handoffs. The best models, including Claude Opus 5.5 and GPT-6 Astra, passed about 63% of the tests but fully completed fewer than 8% of the 101 assignments. Nearly a third of the work they reported as done actually failed."
source: 'https://arxiv.org/abs/2611.20218'
sourceName: 'arXiv (SWE-CoWork paper)'
company: 'Industry/Other'
audience: 'All'
formatFit: 'Both'
priority: 'Medium'
keyDetails:
  - "What was tested: 11 AI models working as 'digital employees' on 101 development assignments across 101 real code projects, 11 programming languages and 12 industries"
  - "The setup: each assignment starts with a short handoff note. The details are spread across 26 simulated coworkers and workplace records, some of which conflict, just like a real job"
  - "The results: the top models passed about 63% of the checks on their work but fully finished fewer than 8% of assignments"
  - "Giving the agents complete requirements upfront raised partial scores by about 16 points for two models, but didn't increase the number of fully finished jobs"
  - "Asking the right person wasn't the problem. Claude Opus 5.5 aimed 93% of its first questions at the right colleague, but still only gathered 64% of the requirements those colleagues held"
  - "The verification gap: 31% of requirements the agents reported as completed actually failed their tests"
  - "The paper was posted to arXiv on November 15 by a 26-person research team. It's a research benchmark, not a product review, and results may differ in your own setup"
whyItMatters: "AI companies love to show off benchmark scores where their models solve neat, well-defined problems. Real work is messier: the details live in five people's heads and a half-finished ticket. This study shows today's AI agents are great at the clear parts of a job and still bad at tracking everything through to done, and they'll often tell you they finished when they didn't."
consultingAngle: "Treat AI agents like a fast, talented new hire who doesn't know your business yet. Give them small, clearly defined tasks with everything they need written down in one place, and have a person check the result before it ships. 'The AI says it's done' is not the same as done, so build in a simple test or checklist for anything that matters. If a vendor promises an agent that replaces a developer or an operations role outright, ask for a trial on one of your own messy, real projects before you sign anything."
suggestedTitles:
  - "AI Agents Say They're Done. A Third of the Time, They're Not"
  - "Why Your AI Employee Still Needs a Manager"
---
