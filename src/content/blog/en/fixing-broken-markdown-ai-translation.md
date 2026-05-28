---
author: minseok
date: 2026-04-30
updatedAt: 2026-04-30
readingTimeMinutes: 1
category: Developer Tools
tags:
  - co-op-translator
  - markdown
  - localization
  - production-llms
draft: false
title: Fixing Broken Markdown in AI Translation
description: Hardening Co-op Translator after real Markdown failures in multilingual documentation.
---

This post came from a very practical kind of failure.

Community feedback around Japanese translations showed me that many AI translation problems were not semantic. The translation could sound reasonable, but the document could still be broken because anchors, code blocks, lists, links, frontmatter, or formatting structure had drifted.

That changed how I thought about Co-op Translator. I stopped treating the output as text and started treating it as a software artifact that needed structure, state, and recovery paths.

What stayed with me is that generated documentation only earns trust when the system around it protects reviewability. The model matters, but the pipeline around the model decides whether maintainers can actually use the result.

Read the original article:

[Fixing Broken Markdown in AI Translation: Hardening a Production Pipeline](https://techcommunity.microsoft.com/blog/azuredevcommunityblog/fixing-broken-markdown-in-ai-translation-hardening-a-production-pipeline/4511378)
