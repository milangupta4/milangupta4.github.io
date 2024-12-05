---
layout: post
title:  "B2B SaaS Startup Metrics - decoding & explaining ARR, ACV and all those fancy terms "
date:   2024-12-04 12:31:07 +0530
categories: product
byline: "We use examples of top SaaS companies to simplify key metrics related to valuation, revenue, profitability and growth"
---
In this post, I explain the key metrics that give a picture of the business scenario of a startup.

I will be using examples from B2B businesses, taking up examples of Atlassian, Mailchimp (Intuit). I will also be looking at major SaaS companies and their metrics.

# Top-line metrics

1. **Valuation** - this reflects the enterprise value of the business. For startups going through different series of funding - seed to Series D and further, this valuation is expected to grow as the startup generates more revenue and margins. For public companies, this is the market capitalization of all outstanding shares.
2. **ARR - Annual Recurring revenue** - This number reflects the annual revenue that a startup is expected to generate in the current financial year. It is calculated by summing the total deal value across all customers. Startups can use either/ both of Contracted ARR and Execution ARR to reflect their value.
1. Contracted ARR - this reflects the sum of contracted value across all customers.
2. Execution ARR - this reflects the realized value across all customers.
To highlight the difference across the two, let's take the (fictional) example of Atlassian selling their productivity software to Reliance Industries. The IT team at Reliance has committed to onboarding 50,000 employees to Atlassian's tools. Let's say Atlassian is charging $100 per customer onboarded, the contract value of the deal becomes:
$100 * 50,000 = $ 5 million
However, the payment terms make clear that the per user seat is payable only when the teams are actually onboarded.
So, let's say only teams comprising of 10,000 employees are actually onboarded to Atlassian. What does that mean - the execution ARR is
$100 * 10,000 = $ 1 million

Because execution ARR reflects the actual usage, it is the metric that VCs would use when valuing a startup. Startups celebrating revenue milestones will be likelier to be using Contract ARR, as this is a bigger number!

# **Valuation Ratios**

1. **Valuation to ARR ratio** - This ratio is more relevant for fast-growth companies. Market capture is the most important objective.
2. **Valuation to Operating Margin (non-GAAP) ratio;** In principle this is similar to Price to Earnings ratio that public markets refer to. For early stage startups where revenue growth is more important, the valuation to ARR is more relevant.

# Profitability

1. **Gross Margin** - For every incremental $ that the business earns, what percentage is left after costs to serve are deducted - this metric captures the unit economics of the business. Let’s say you are Mailchimp.
    1. **Mailchimp** has signed a contract of $1,000 Annual value with a business for their email automation requirements.
    2. **Technical delivery costs** - Mailchimp has their infra setup on AWS. Let’s assume the new client requires $60 worth of infrastructure costs to Mailchimp, and $20 from other SaaS vendors used by Mailchimp. Total $80 for technical delivery costs.
    3. **Support** - Onboarding & technical support. Mailchimp also offers onboarding & professional services so that the teams can get started. Total cost is $70
        1. Onboarding team conducts an all-hands-on-deck webinar - $30
        2. Mailchimp has used a DAP platform like Whatfix for customers to become familiar with their tool. - $10
        3. Support engineers are helping out customers with their technical email setup - DMARC, DKIM, SMPT details - $30
    4. After accounting for technical delivery and support costs, MailChimp makes 85% ($1,000 - ($80 + $70)) of the revenue as operating margins.
    5. Operating margin, + Total addressable market, is what captures the scalability of the business
2. **Operating Margin** - this metric captures every cost that the business incurs. To start with, this metric is likely negative. The startup is setting out to build a product that customers are going to be needing, without having any customer pay for it yet. The major headers for operating margin would be:
    1. Full team expenses - including Product, Engineering, Marketing & Sales expenses
    2. Technical operating costs
    3. Subscription costs for running business

### Revenue Metrics

1. **Net Recurring Revenue** - of revenue from existing customers, what percentage can you project to grow year-on-year. Is the customer’s usage increasing/ are they buying upsold services
2. **Annual customer value (ACV)**

<aside>

I’ll use the words Valuation & Capitalization interchangeably here.

**Valuation** is used in the context of a set of individuals valuing a company; **Capitalization** is determined by the general shareholding public