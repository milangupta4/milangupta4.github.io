---
layout: post
title: "Cursor: The Ultimate AI Pair Programmer"
date: 2025-02-20 11:32:01 +0530
published_date: 2025-02-20 11:32:01 +0530
categories: [ai-agents, product]
post_id: 52
custom_excerpt: "Cursor leverages RAG and multi-model orchestration to superpower the coding experience"
subtitle: "Cursor leverages RAG and multi-model orchestration to superpower the coding experience"
---

My path to discovering Cursor began with using ChatGPT for isolated coding tasks. While helpful for setting up basic JS and Python projects, this approach had clear limitations.

I found myself struggling to provide sufficient context across multiple files as projects became larger. 

Articulating dependencies across multiple files to the GPT was cumbersome.

I tested GitHub Copilot around the time it launched in mid-2023. 

Though definitely an improvement, I still encountered the fundamental challenge of cross-file context understanding. The assistant couldn't "see" the big picture of my codebase without extensive manual guidance.

## Enter Cursor: Redefining Context Understanding

Cursor addresses this limitation with a robust retrieval mechanism. Instead of requiring you to manually select relevant files, Cursor analyzes necessary context through advanced RAG (Retrieval-Augmented Generation) technology.

### Cursor's AI Stack: Sophisticated Model Orchestration

What sets Cursor apart is its approach to model selection, dynamically switching between:

- **Claude 3.5 Sonnet** (200k context window) for architectural understanding
- **GPT-4o** (128k context) for problem-solving
- **Cursor-small** (their proprietary model) optimized for quick edits

This model-switching strategy ensures that Cursor maintains a healthy balance of speed & accuracy for each coding task. This enables them to use powerful models for complex tasks, and cheaper models for quick edits.

### Context Handling: Orders of Magnitude Better

Cursor's context capabilities represent a healthy leap forward over GitHub Copilot:

- **10,000 tokens** for quick edits (compared to Copilot's 4,000)
- Up to **200,000 tokens** for architectural changes
- **Intelligent context slicing** that retrieves only what's needed rather than brute-forcing entire repositories

For me, the impact became most apparent when Cursor navigated my Next.js project containing over 50 files without requiring manual selection. 

Where Copilot frequently missed cross-file dependencies, Cursor understood the relationships between components, routes, and shared utilities.

## Pricing: A generous free tier & transparent pricing

At $20 per month for individual users, Cursor offers excellent value through:

- 500 "Fast" requests utilizing premium models (Claude 3.5 Sonnet & GPT-4o)
- GPT-4o-mini requests counted as just 1/3 of a Fast request (stretching your allocation)
- 10 daily uses of o1-mini included

The free tier provides enough functionality to experience Cursor's capabilities before committing, making it an easy decision to try.

## Cursor Composer: A True AI Pair Programmer

Cursor Composer demonstrates what a genuine AI copilot should be. To illustrate its capabilities, I'll share my experience creating a UML diagram generator for my website.

I provided this prompt to Cursor:

> Can you create a Tools section in my website. In that Tools section, I would like to add a page for Mermaid diagram creator. The interface would accept mermaid syntax sequence diagrams, and showcase it visually. Additionally, I would like to be able to export the created image as png, and this should be done completely on client-side.

Cursor then executed a comprehensive development process:

1. Analyzed my codebase to understand the Next.js project structure with app routing
2. Created appropriate directory structures for the new tools section
3. Generated a complete `page.tsx` file with functional Mermaid diagram creation capabilities
4. Provided necessary `npm install` commands for dependencies
5. Updated related files to integrate the new feature
6. Performed linting and error checking to ensure code quality

The result was a working prototype generated with minimal input from me - building a working production-grade app in minutes.

### Current Limitations and Future Potential

While incredibly powerful, Cursor still has areas for improvement. For example, when I later added a PlantUML diagram tool, Cursor didn't automatically recognize that the Tools section in my footer had a list of tools. And that the new tool should be added to that list.

This relatively small example just shows that human oversight is still essential. A more advanced agent would recognize such patterns and either implement them automatically or at least suggest the option.

## Development Stack: Why I Pair Cursor with Cloudflare

I have come to prefer Cloudflare for deploying the JS apps I build. Cloudflare offers:

- A generous free tier that supports most personal projects
- Transparent, predictable pricing for larger applications
- Security-first CDN architecture
- Streamlined DNS management

I initially used Cloudflare just for DNS management of my domain (milangupta.io), but quickly expanded to using their full deployment platform across Cloudflare Pages & Workers. As I increase my usage, I'll likely use more services such as KV for Durable Objects.

## The Competitive Landscape includes prompt-based prototyping tools that quickly deploy

Several alternatives exist in this rapidly evolving space:

- **Vercel v0**: Excels at UI-focused development, converting mockups to code with less support for complex backends
- **Bolt**: Targets non-developers with no-code web application development
- **Stackblitz**: Offers a cloud IDE with AI assistance, emphasizing collaboration


The common thread among these tools is eliminating the friction of project setup, configuration, and deployment - the aspects most developers find tedious and frustrating. Setting up Python virtual environments or navigating NPM dependency conflicts becomes a non-issue.

Vercel v0, Bolt & Stackblitz core value prop is that they protect “Non-devs” from having to go through this frustrating part.

### The Lock-in Consideration

However, most cloud IDE and prototyping tools come with what I consider a significant downside: platform lock-in. While they shield you from complexity, they also limit your flexibility.

My preference for the Cursor + Cloudflare combination provides both power and autonomy - I retain complete control over my codebase while benefiting from advanced AI assistance and simplified deployment.

## Preventing Skill Atrophy: Mental Models Matter

The greatest risk when working with AI coding assistants is becoming overly reliant on them. When your AI pair programmer outpaces your comprehension, it becomes tempting to stop trying to understand your codebase fully.

To counter this tendency, I've developed a specific approach:

1. **Focus on structure, not syntax**: Understanding the overall architecture is more important than memorizing language specifics
2. **Enforce modularity**: Clean separation of concerns makes both human and AI collaboration more effective
3. **Think in components**: Treat code like LEGO blocks - you don't need to understand internal implementation details (I still don't know exactly how React's `useState` works internally), but you must understand what each function does and how they interact

By maintaining a strong mental model of your system's components and their relationships, you create guardrails that prevent AI assistants from generating unmaintainable or incomprehensible code.

## You can code much-much faster now, the only limit is your creativity, grit & comprehension

Cursor's ability to understand entire codebases rather than isolated snippets fundamentally changes the developer experience.

While we're still in the early stages of this revolution, tools like Cursor are already dramatically increasing development velocity while reducing the cognitive load of routine coding tasks. 

This allows developers to focus on higher-level architecture and creative problem-solving - the aspects of programming that remain uniquely human.

In this future,  developers who thrive will be those who learn to collaborate effectively with AI assistants while maintaining strong mental models of their systems. The future belongs not to those who code the fastest, but to those who can direct AI tools most effectively toward elegant solutions.