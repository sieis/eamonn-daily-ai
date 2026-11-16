---
title: "Study Finds Thousands of AI-Built Apps Left Customer Data Readable Without a Login"
date: 2026-11-16
summary: "A German security firm examined 159,041 websites built with Lovable, a popular tool that creates apps from plain-English prompts. It found 24,664 that sent database records to any visitor, and 7,403 of those included email addresses. Passport details, customer orders and private messages were among the exposed data."
source: 'https://www.crissyfield.de/research/lovable-en/'
sourceName: 'Crissy Field'
company: 'Industry/Other'
audience: 'SMB'
formatFit: 'Both'
priority: 'High'
keyDetails:
  - "Who did it: Crissy Field, a Hamburg application security firm, working with the German business newspaper Handelsblatt, which first reported the findings on November 2. The English write-up drew wide attention this weekend"
  - "The numbers: of 159,041 Lovable projects found in a public web archive, 34,545 used the Supabase database service. 24,664 sent database records when the page loaded, with no login. Records containing email addresses turned up on 7,403 of those sites, about 30%"
  - "What was visible: more than 80,000 profiles and 200,000 chat messages from one forum, ticket and food orders with phone numbers and addresses, a property manager's summaries of internal emails, over 1,000 records with passport details, and tens of thousands of contracts and invoices"
  - "Important caveat from the researchers: 30% is not a confirmed leak rate. Some of those emails are public contact details or test data, and the sample does not represent every Lovable app. They could not tell whether any data had been misused"
  - "The cause is a settings mistake, not a hack. The rules that decide who can read each database table were missing or too loose, and people without a technical background often do not know to check"
  - "Lovable's head of security told Handelsblatt it is a known, industry-wide configuration problem and that security is a shared responsibility, according to coverage of the report. Lovable's terms put responsibility for app data on the customer"
  - "What has changed: since October 30, new Supabase tables are no longer open by default. Since November 12, Lovable asks you to review critical security warnings before publishing, though you can still click 'publish anyway.' Neither change closes tables that are already exposed, per Privacy Affairs"
whyItMatters: "Tools like Lovable let anyone describe an app in plain English and have a working website minutes later. That is a real breakthrough for people who could never afford a developer. But the tool builds what you ask for, and most people do not think to ask for 'make sure strangers cannot read my customer list.' The app looks finished and works fine, while the data behind it sits unlocked."
consultingAngle: "If your business has built anything with an AI app builder, whether a booking form, a customer portal or an internal tool, check it this week. Run the built-in security scan (Lovable has one, and Supabase has a Security Advisor), and ask specifically whether 'Row Level Security' is turned on for every table. Then do a simple test: open your app in a private browser window without logging in and see what loads. If the app holds customer names, emails, payments or ID documents, pay a developer for an hour or two to review it before going further. That costs far less than notifying customers about a breach, and the legal responsibility sits with you, not the tool. Going forward, a sensible rule is that AI-built tools are fine for prototypes and internal use, and anything that stores customer data gets a human security check before launch and after every major change."
suggestedTitles:
  - "Built an App With AI? Check Who Can See Your Customer Data"
  - "The Hidden Risk in Vibe-Coded Apps"
---
