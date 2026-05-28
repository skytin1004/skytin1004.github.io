---
author: minseok
date: 2024-09-02
updatedAt: 2024-09-02
readingTimeMinutes: 1
category: AI Engineering
tags:
  - phi-3
  - responsible-ai
  - azure-ai-studio
  - evaluation
draft: false
title: Evaluating Fine-Tuned Phi Models with Responsible AI in Mind
description: Fine-tuning is not complete until the model has been evaluated for safety and quality.
---

This article came after the fine-tuning guides because I wanted to close the loop.

Training and deploying a custom model can feel like the finish line, but it is not. Once a model is adapted to a task, developers still need to understand how it behaves, where it can fail, and whether its responses are safe enough for the intended use.

That is why I wrote about evaluating fine-tuned Phi-3 and Phi-3.5 models in Azure AI Studio with Responsible AI in mind.

The lesson for me was that model work has three parts: build, integrate, and evaluate. If the third part is missing, the first two are not ready for production.

Read the original article:

[Evaluate Fine-tuned Phi-3 / 3.5 Models in Azure AI Studio Focusing on Microsoft's Responsible AI](https://techcommunity.microsoft.com/blog/educatordeveloperblog/evaluate-fine-tuned-phi-3--3-5-models-in-azure-ai-studio-focusing-on-microsofts-/4227850)
