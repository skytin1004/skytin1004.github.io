---
author: minseok
date: 2024-07-03
updatedAt: 2024-07-03
readingTimeMinutes: 1
category: AI Engineering
tags:
  - phi-3
  - fine-tuning
  - azure-ml
  - prompt-flow
draft: false
title: Fine-Tuning Phi-3 and Integrating It with Prompt Flow
description: A code-first guide connecting dataset preparation, Azure ML, deployment, and Prompt Flow.
---

This guide pushed me to connect the entire fine-tuning path.

It was not enough to show a training command. Developers needed the surrounding workflow: prepare the Azure Machine Learning workspace, request GPU quota, set up the project, prepare the dataset, train, deploy, and then integrate the custom model with Prompt Flow.

Writing it made the complexity visible to me too. Fine-tuning is often described as a model task, but in practice it is also a cloud workflow, a deployment workflow, and an integration workflow.

That is why I still think about custom model work as systems engineering. The model is only one piece of the chain.

Read the original article:

[Fine-Tune and Integrate Custom Phi-3 Models with Prompt Flow: Step-by-Step Guide](https://techcommunity.microsoft.com/blog/educatordeveloperblog/fine-tune-and-integrate-custom-phi-3-models-with-prompt-flow-step-by-step-guide/4178612)
