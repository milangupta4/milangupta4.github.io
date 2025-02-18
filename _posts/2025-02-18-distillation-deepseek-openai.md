---
layout: post
title:  "How Model Distillation works"
date:   2025-02-18 11:32:01 +0530
published_date:   2025-02-18 11:32:01 +0530
categories: ai-agents
post_id: 51
custom_excerpt: "DeepSeek used distillation to learn from OpenAI's o1 reasoning models"
subtitle: "DeepSeek used distillation to learn from OpenAI's o1 reasoning models"
---

Distillation is a technique used to create smaller, more efficient models by distilling the knowledge from larger models.

Imagine you are in college. Your friend studiously prepares notes across all classes of all subjects. And just on the night before the exam, you study his notes and end up getting a better score than your friend.

That's distillation.

In this blog, I'll explain how distillation works with simple analogies. This is particularly in the context of DeepSeek learning from OpenAI's o1 reasoning models.

## The Teacher-Student Analogy
Imagine model distillation like a talented student learning from a master teacher:

- The Teacher (o1 model) is extremely knowledgeable but might be slow, expensive to maintain, or too large to deploy widely.
- The Student (DeepSeek) is smaller and more efficient, but needs to learn the teacher's wisdom.
- The Learning Process involves the student watching how the teacher solves many different problems and trying to mimic that process.

## How It Works - The Cookbook Analogy
Think of it like learning to cook without getting the actual recipe:

- The teacher (o1) has a secret cookbook (its parameters and reasoning process).
- Instead of giving DeepSeek the actual cookbook, o1 shows DeepSeek the results: "For this input, here's the output I produce."
- DeepSeek watches thousands of examples: various ingredients (prompts) going in, and delicious dishes (high-quality responses) coming out.
- DeepSeek then adjusts its own cooking technique (parameters) to match o1's results as closely as possible.

## The Technical Process
More specifically:

- DeepSeek's creators gathered a large collection of interesting prompts.
- They sent these prompts to OpenAI's o1 model and collected all the responses.
- DeepSeek was then trained to produce the same (or very similar) outputs when given those same inputs.
Through this process, DeepSeek "absorbed" some of o1's reasoning capabilities without ever seeing o1's actual code or parameters.

## The Practical Benefits - The Car Analogy
Imagine o1 is like a Formula 1 race car - extremely powerful but impractical for everyday use:

- It's expensive to run (high compute costs)
- It needs special fuel (specific hardware)
- It requires expert maintenance (OpenAI's specific infrastructure)

Through distillation, DeepSeek becomes like a consumer sports car:

- More affordable to operate
- Runs on regular fuel
- Can be maintained more easily
Still captures much of the race car's performance

This approach allows DeepSeek to benefit from OpenAI's research investment while creating a more accessible product that can be deployed more widely and run more efficiently.

## Reinforcement Learning & Chain of Thought are other major ideas that Deepseek leverages

Reinforcement Learning is a technique used to train models to make decisions by rewarding or punishing them for their actions.

Chain of Thought is a technique used to train models to think step-by-step, like a human, by breaking down complex problems into smaller, more manageable parts. This is the "Reasoning" part of the model.
