---
title: About Minseok Song
description: Microsoft AI MVP, founder of Localizeflow, and maintainer of Co-op Translator, building production LLM systems and GitHub-native developer infrastructure.
---

# Minseok Song

I build production AI systems where language models meet developer infrastructure.

The thread through my work is simple: AI becomes valuable when it can survive real workflows. Not just a clean demo, but long-running jobs, changing source content, multilingual edge cases, pull requests, retries, observability, and the small operational details that decide whether a system keeps working after the first launch.

That is the lens behind this site. It is where I write about document-grounded AI, localization automation, open-source engineering, and the practical work of turning LLM capabilities into reliable developer tools.

## The Story

I started building software through games. Before AI systems and cloud infrastructure, I was an indie Flash game developer, publishing browser games, watching player behavior, and learning the feedback loop between a system and the people using it.

That early product sense later turned into a different kind of builder instinct: make systems that respond to real usage, not imaginary usage.

At Inha University, while studying Artificial Intelligence and Industrial Engineering, I moved deeper into Azure AI, RAG systems, and open-source developer education. My Microsoft Tech Community writing on Azure AI Search, Azure OpenAI, Phi fine-tuning, Responsible AI evaluation, and production LLM workflows has reached 120K+ public views.

The work eventually converged around a recurring problem: developer documentation changes constantly, and multilingual content usually falls behind. I began building and maintaining **Co-op Translator**, a Microsoft open-source localization system that now operates across 16 Microsoft OSS repositories and 55 languages, generating 835+ automated pull requests.

Scaling that system exposed a deeper infrastructure problem. CI pipelines were not the right home for long-running, fault-prone AI localization workloads. That led me to found **Localizeflow**, a GitHub-native orchestration platform for large-scale AI localization workflows. It has processed 44M+ words and 378M+ tokens across thousands of distributed jobs using Azure Container Apps Jobs, containerized workers, batch orchestration, watchdog recovery, and bounded retries.

Alongside that work, I contribute to Microsoft OSS projects such as PhiCookBook and Apache projects including Apache Iceberg and Apache Fesod. The common theme is reliability: test modernization, documentation correctness, workflow design, and tooling that helps maintainers move faster without losing control.

## What I Build

### Production LLM systems

I work on AI systems that need to behave consistently across messy inputs, multilingual content, content safety filters, provider differences, and operational failures. That includes RAG pipelines, structured outputs, model fallback logic, document analysis, and evaluation-minded workflow design.

### GitHub-native automation

Much of my work lives where developers already collaborate: issues, pull requests, repositories, and CI/CD systems. I design automation that makes work visible instead of hiding it, especially for documentation, localization, and open-source maintenance workflows.

### AI localization infrastructure

Co-op Translator and Localizeflow are the clearest examples of my current direction: treating translations as versioned software assets, preserving Markdown structure, synchronizing multilingual documentation through pull requests, and scaling AI-assisted localization beyond one-off scripts.

### Developer education

I write and speak because technical systems become more useful when their tradeoffs are visible. I have presented at Microsoft Learn Live, Open at Microsoft, Microsoft Reactor, DDD Seoul, and Microsoft MVP Showcase, and I write practical guides for engineers building with Azure AI and LLM systems.

## Selected Signals

- Microsoft Most Valuable Professional (AI), 2025.
- Founder of Localizeflow, a GitHub-native orchestration platform for production-scale AI localization workloads.
- Maintainer of Azure/co-op-translator, a Microsoft OSS localization engine with 600+ GitHub stars and 76K+ PyPI downloads.
- Scaled AI localization across 16 Microsoft OSS repositories, 55 languages, and 835+ automated pull requests.
- Processed 44M+ words and 378M+ tokens through distributed localization workflows.
- Authored 180+ closed PRs across Azure/co-op-translator and Microsoft PhiCookBook.
- Contributed 30+ merged pull requests to Apache Iceberg and Apache Fesod.
- Published Microsoft Tech Community articles reaching 120K+ public views.
- Built multilingual LLM workflow features at Cuckoo, a YC W25 startup, including structured summaries and multi-provider fallback across Azure OpenAI, OpenAI, and Claude.

## Projects

### Localizeflow

Localizeflow is my attempt to turn AI localization from a fragile CI task into production infrastructure.

It orchestrates long-running translation jobs outside CI, tracks batch and PR-level progress, isolates failures at the job level, and uses containerized execution on Azure Container Apps Jobs. The goal is not simply to translate content, but to make multilingual documentation workflows observable, retryable, and maintainable.

### Co-op Translator

Co-op Translator began as an AI translation tool and became a Microsoft OSS system for keeping developer documentation synchronized across languages.

The interesting engineering work is in the details: preserving anchors, links, code blocks, frontmatter, indentation, line breaks, notebooks, image text, CJK formatting, and the review model that lets maintainers trust generated changes.

### Microsoft PhiCookBook

I contributed tutorials and workflow improvements around Phi models, fine-tuning, Prompt Flow, Responsible AI evaluation, Azure AI Studio, Azure AI Foundry, and multilingual documentation.

### RAG and document QA

My RAG work started with Azure AI Search and Azure OpenAI tutorials, then expanded into a broader question: when is retrieval the right architecture, when does a managed Azure stack make sense, when are open-source retrieval systems a better fit, and when is fine-tuning the wrong answer?

### Apache OSS

My Apache contributions are quieter but important to how I think about engineering: small, reviewable changes that improve tests, regression coverage, documentation correctness, release quality, and project compliance.

## Links

- [LinkedIn](https://www.linkedin.com/in/ms-song/)
- [GitHub](https://github.com/skytin1004)
