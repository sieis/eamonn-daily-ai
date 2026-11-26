---
title: "PrismML's Free Bonsai 2.5 Squeezes a Near-Top Open AI Model Into 5.9 GB, Small Enough for a Laptop"
date: 2026-11-26
summary: "Startup PrismML released Ternary Bonsai 2.5 27B, a heavily compressed version of Alibaba's Qwen3.8 27B model that fits in 5.9 GB and runs on Macs, iPhones, iPads and gaming PCs. PrismML says it nearly matches the full-size original on everyday agent and tool-use tests, and it's free under the Apache 2.0 license for business use."
source: 'https://prismml.com/news/bonsai-2-5-27b'
sourceName: 'PrismML'
company: 'Open Source'
audience: 'SMB'
formatFit: 'Short-form'
priority: 'Medium'
keyDetails:
  - "What it is: a 27-billion-parameter AI model squeezed down using 'ternary' compression, where each of the model's internal numbers is stored as just -1, 0 or 1. The whole model takes up 5.9 GB, roughly the size of a long HD movie"
  - "Where it runs: Macs, iPhones and iPads through Apple's MLX software, and Nvidia or Intel graphics cards through the popular llama.cpp tool. PrismML reports about 204 tokens (word pieces) per second on a consumer RTX 4090 graphics card, faster than most people can read"
  - "How good it is: on PrismML's own tests it scores 90.5 on AppWorld (an everyday app-task benchmark) versus 93.2 for the full-size Qwen3.8 27B, and 73.9 versus 72.8 on a customer-service-style agent test. It is weaker at the hardest coding work, scoring 75.6 versus 80.6 on SWE-bench Verified"
  - "Big jump from the last version: Bonsai 2 scored 51.2 on AppWorld at the same 5.9 GB size, so this release is far more useful for multi-step tasks"
  - "License: Apache 2.0, which allows free commercial use. Weights are on Hugging Face, with documentation at docs.prismml.com"
  - "Keep in mind: benchmark numbers come from PrismML, not independent testers, and setting it up still takes some technical comfort"
whyItMatters: "Most capable AI models need a data center, which means your questions and documents travel to someone else's servers. Models like this one are getting good enough, and small enough, to run on a normal laptop or even a phone. That means private AI that works offline and costs nothing per question."
consultingAngle: "If you handle sensitive client information, like a law office, clinic, accountant or HR team, this is the kind of model to watch for a private 'in-house' assistant that summarizes documents or drafts replies without anything leaving your machine. For a first test, have someone technical load it on a recent Mac with 16 GB or more of memory, or on a PC with a gaming graphics card, and try it on a real, non-sensitive task you'd normally give ChatGPT. Compare the answers side by side before trusting it with anything that matters."
suggestedTitles:
  - "A Near-Top AI Model That Fits on Your Laptop, for Free"
  - "Private AI Just Got a Lot Smaller"
---
