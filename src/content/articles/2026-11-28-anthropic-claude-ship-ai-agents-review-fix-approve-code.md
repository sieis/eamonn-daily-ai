---
title: "Anthropic Launches Claude Ship, AI Agents That Review, Fix and Even Approve Code Changes Under Your Rules"
date: 2026-11-28
summary: "Claude Ship is a new set of AI agents for software teams on Claude Team and Enterprise plans. They review proposed code changes, fix failing tests and merge conflicts, and, in beta, approve routine changes automatically based on rules your team writes in plain English. It works with code stored on GitHub and comes with spending caps and an observe-only mode."
source: 'https://techcrunch.com/2026/11/23/anthropic-launches-claude-ship-letting-ai-agents-review-fix-and-approve-code-changes/'
sourceName: 'TechCrunch'
company: 'Anthropic'
audience: 'Enterprise'
formatFit: 'Long-form'
priority: 'Medium'
keyDetails:
  - "Three parts: Code Review (available now) checks proposed changes and flags problems. PR Steward (beta) fixes failing automated checks, resolves merge conflicts and responds to review feedback. Claude Approvals (beta) approves changes that meet your team's policy"
  - "Plain-English rules: teams write the approval policy as a file in their code repository, such as 'documentation fixes can be approved automatically, anything touching payments needs a person'"
  - "Transparency: after each change it pushes, PR Steward leaves a comment explaining what it changed and how to undo it"
  - "Who can use it: rolling out to Claude Team and Enterprise plans for code hosted on GitHub"
  - "Safeguards: approvals can run in observe-only mode first, so you can see what Claude would have approved before it actually approves anything. Teams can start with one repository, set monthly spending limits, pick a review depth (Quick, Standard or Deep) and choose which changes always go to a human"
  - "Pricing: not disclosed in the announcement beyond the monthly spending caps"
  - "Why now: Anthropic's reasoning is that requiring a person to approve every change worked when people wrote every line, but becomes a bottleneck once AI agents write much of the code"
whyItMatters: "AI can now write software much faster than people can check it, and the checking has become the slow step. Claude Ship tries to take routine reviews off people's plates while keeping humans in charge of anything risky. You don't need to be a developer to see the pattern: AI is moving from doing tasks to signing off on them, and the rules about what it's allowed to approve are becoming the important part."
consultingAngle: "If you have an in-house developer, an agency or a freelancer maintaining your website, store or internal tools, ask how they review AI-written code today. For businesses with a dev team, a sensible first step is to run Code Review on one repository and leave Approvals in observe-only mode for a few weeks. Compare what Claude would have approved with what your people approved, then allow automatic approval only for low-risk changes like text and documentation. Set a monthly spending cap from day one. Keep anything touching payments, customer data or logins on human approval, no matter how good the AI looks."
suggestedTitles:
  - "Claude Can Now Approve Its Own Code. Here's the Catch"
  - "AI Code Review for Small Dev Teams: Where to Start"
---
