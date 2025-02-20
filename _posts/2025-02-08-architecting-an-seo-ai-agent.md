---
layout: post
title:  "Architecting an SEO AI Agent"
date:   2025-02-19 11:32:01 +0530
published_date:   2025-02-08 11:32:01 +0530
categories: [ai-in-marketing, marketing, ai-agents]
post_id: 49
custom_excerpt: "We look at the standard SEO workflow, and how we can design an SEO Agent that performs all actions from keyword research to content generation"
subtitle: "We look at the standard SEO workflow, and how we can design an SEO Agent that performs all actions from keyword research to content generation"
---

You create good quality content. Good quality content attracts backlinks, and that helps you rank higher in Search Results.

Conceptually, SEO is as simple as that.

This is what the paradigm introduced by Domain's PageRank algorithm looks like.

## The SEO formula that SaaS businesses use

SaaS businesses however have to look at SEO as more of a performance marketing channel. You spend money on an SEO analyst, content writers, data analyst, and an SEO Lead. They churn out content. That content starts getting traffic, and a percentage of that is Leads.

This formula actually works.

1. Content analyst who would review top keywords, check out competition, and give content recommendations to content writers.
2. Content writers would write content for the blog, with the goal for it to rank well in search, capture high-intent traffic, and convert those to leads.
3. Data analyst who would prepare reports on content performance - for example how ranking for specific keywords has changed over time, and what pages have driven the most amount of traffic.
4. SEO Lead reviews the overall content and the metrics, and perform lead qualification on Hubspot CRM

## Tools that dominate the SEO workflow - Ahrefs, SEMrush, Google Sheets, Google Keyword Planner, Google Analytics

The modern day SEO analyst uses a lot of tools in their workflow

1. Ahrefs/ SEMrush gives a full visibility in your own and your competitor's SEO performance & backlinks
2. Google Sheets is used for custom data analysis - for example to combine reports across your Lead Acquisition to Lead Conversion funnel, giving a full picture of SEO performance from Acquisition to Conversion
3. Google Keyword Planner is used to discover new ideas & keywords to target
4. Google Analytics of course gives you full visibility into Website traffic, and the performance of your SEO efforts

###  AI Powered SEO tools for 2025


1. ContentShake AI (Semrush): Auto-generates SEO-optimized articles with SERP insights and multilingual support
2. GREMI: Combines keyword research + AI copywriting in a single workflow
3. Surfer SEO: Uses NLP to analyze top-ranking pages and generate content briefs
4. Frase.io: Automates content research, optimization, and technical SEO audits
5. Byword.ai: Uses AI to do deep content research, create articles, and publish them to the website

According to SEMrush, 87% SEO teams now use AI tools for content ideation and optimization 


## Conceptualizing an SEO Agent - keyword research to content generation

We are doing a _gedanken experiment_ here - a thought experiment. I am not including any tools / code here, mainly the workflows. I will update this post with tools/ code. 

### Step 1 - Keyword Research

Use an HTML parsing library to identify the most commonly used keywords in a website. You can use this across your own website, and across competitors and other industry knowledge specific websites.


> A version of this is available at [RocketLift Keyword Extractor](https://www.rocketlift.co/tools/keyword-extractor/)

**Tech to use for this Agent** - HTML parsing libraries

### Step 2 - Identify domain-specific keywords

Use TF-IDF (Term Frequency - Inverse Document Frequency) to identify domain specific keywords.

TF-IDF works on a simple premise.

1. Term Frequency - How often a word appears in a document
2. Inverse Document Frequency - How often a word appears in a set of documents. Now, domain-specific keywords by their nature are not going to be present in a lot of documents. So, the IDF is going to be high for those keywords.

**Tech to use here** - NLP libraries

### Step 3: Keyword Universe coverage

With this as your foundation, you can use Google Keyword Planner / Ahrefs APIs to identify the full-set of keywords. 
The goal here is to get keyword ideas - identify words that bring a large Average Monthly Search.

Adding an Intent classifier would be further helpful here - as it helps you distinguish between informational, transactional, and navigational keywords.

According to [Backlinko](https://backlinko.com/seo-strategy), aligning content structure with search intent is the best way to rank higher in search results.

**Tech to use here** - Google Keyword Planner / Ahrefs APIs for keyword volume, BERT-based Intent classifier.  

### Step 4: Prioritize keywords

At this stage, you prioritize keywords based on their search volume, intent, and whether they are relevant for your business.

**Tech to use here** - Google Sheets for custom data analysis

### Step 5: Content brief creation

At this stage, an SEO agent can deeply research the key information points that best explain the keyword. 

At a human level, there is a lot of research at this stage. You search for a keyword, and then read 10 different sources to understand the keyword.

And basis this you create a mental model, which you then use to create a content brief.

Architecting this agent to do the above seems to me a major challenge. 

> You are a content analyst. You have to do detailed research for {keyword}. You have to read through multiple high-authority sources that write about {keyword}. You have to distill the information into a content brief. The goal of the content brief is to furnish a content writer with the narrative for the content, and the relevant data points that should be included in the content. Be concise, and use minimal adjectives & adverbs.

**Tech to use here** - A reasoning agent, which can be given a fine-tuned prompt to do extensive research and distill it into a content brief. Reverse-engineer Google's "People Also Ask" & Featured Snippets for data points related to content structuring.


## Step 6: Content generation

Once the content brief is created, the content writer agent can create the content.

**Tech to use here** - A content writer agent, which can be given a fine-tuned prompt to create the content.

## Step 7: Content Optimization

Optimization Factor |	Tools/Methods |	SaaS Impact
Readability (8th-grade level) |	Hemingway Editor |	+32% engagement7
Semantic SEO |	Clearscope, MarketMuse |	45% higher CTR9
Technical SEO |	Screaming Frog, Botify |	2.1x faster indexing8
Mobile Experience |	Google PageSpeed Insights |	67% lower bounce rate


## Track Metrics

### 1. Google Search Console - what queries are getting the maximum impression, but not clicks

This highlights content that you need to improve to rank higher and get clicks

### 2. Traffic-to-Leads ratio - How many leads are coming through your content

This metric would inform if you need to create landing pages to better convert users. A blog normally brings a lead conversion rate of 1-2%, whereas a robust landing page would bring a conversion rate of 10-20%.

### 3. Bounce Rate - How many users are bouncing off your content

This metric would inform if you need to improve the content to better engage users.

## My Conclusion - Bring AI into the SEO workflow, but keep a focus on quality

Google by default does not penalize AI content. Google's mission is to serve high-quality information to users.

The content that you create through AI can be very high-quality. Or it can be drivel. If not Google, real-world users most certainly will be able to tell the difference.

Keep a high-standard of quality - provide rich useful information to users. And you will be rewarded.
