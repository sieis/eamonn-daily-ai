---
title: "Anthropic Lets Claude Run Whole Teams of AI Agents in the Background for Big Jobs"
date: 2026-10-11
summary: "On October 9, Anthropic added 'dynamic workflows' to Claude Managed Agents in beta. A lead agent plans a large job, hands pieces to many helper agents, and combines the results while running on Anthropic's servers. There is no separate fee beyond normal usage plus a small hourly session charge."
source: 'https://platform.claude.com/docs/en/release-notes/overview'
sourceName: 'Claude Platform release notes'
company: 'Anthropic'
audience: 'Enterprise'
formatFit: 'Both'
priority: 'Medium'
keyDetails:
  - "Dynamic workflows in Claude Managed Agents launched in beta on October 9. The agent writes a plan that runs many agents in phases, and Anthropic's servers carry it out in the background, so it does not depend on your laptop staying open"
  - "Third-party write-ups of the docs list limits of 64 agents running at once, 1,000 agents over a run's lifetime and 24 hours by default. Cost is standard usage rates plus $0.08 per session-hour, and you set a budget when the session starts. Check Anthropic's docs for current numbers"
  - "Anthropic reportedly tested it on a 116,000-line codebase with 70 planted bugs: the workflow found 66 in each of three runs versus 14 to 27 for a single agent. That is Anthropic's own test, and a commentator noted it lacks a cost-matched comparison"
  - "Caveats from early coverage: a run marked 'completed' can still contain failed pieces of work, and a run can occasionally duplicate a task, so results need a human check"
whyItMatters: "Most people use AI one question at a time. This is the next step: you give it a big job, such as reviewing hundreds of contracts or checking a large pile of documents, and it divides the work among many AI helpers and reports back. It is still a developer-level beta, but it shows where AI at work is heading: less chatting, more handing off a project and checking the result."
consultingAngle: "You do not need this today, but it is useful for spotting which of your tasks are 'big pile, same steps' jobs: reconciling a year of invoices, auditing policy documents, reviewing every customer complaint from a quarter. Those are the jobs that suit this kind of tool. If you have a developer or an automation consultant, ask them to pilot one such job with a firm spending cap and a human reviewer, and compare the time and cost against how you do it now. Be skeptical of 'completed' status and spot-check the output."
suggestedTitles:
  - "Claude Can Now Run a Team of AI Agents for You: What That Means"
  - "From Chatbot to Project Manager: Anthropic's Dynamic Workflows Explained"
---
