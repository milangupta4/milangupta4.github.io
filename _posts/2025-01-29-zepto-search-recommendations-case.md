---
layout: post
title:  "Building Search & Recommendations in Zepto - Product Case Study"
date:   2025-01-29 10:31:07 +0530
categories: product
post_id: 41
custom_excerpt: "Zepto is blitzscaling Quick Commerce across India with their 10min delivery value proposition"
subtitle: "Zepto is blitzscaling Quick Commerce across India with their 10min delivery value proposition"
featured_image: "/assets/images/2025/01/zepto-case/Search-journey-ecommerce-Zepto.webp"
featured_image_alt: "Zepto strives to make the online purchase journey ever more frictionless" 
---

Zepto has revolutionized Quick Commerce sector in India. Powered by an outstanding Product, Tech and on-ground logistics operations, Zepto has achieved $3 billion in Annualized Gross Order value.

For context on its growth - Zepto hit $1 bn Annualized GOV only 9 months earlier in April 2024.

Zepto is marching towards a target of opening 1000 dark stores across the country. The instant delivery app currently serves over 10 Lakh (1 million) orders per day.

In addition, Zepto has launched Zepto Cafe - a quick food delivery service - and has achieved 50,000+ daily orders within the first month of launch.

## Value Proposition

Zepto seeks to make online purchase from their app the default user behavior. 

New users join in largely to order high frequency consumer goods & food items. However, through their catalog and promotions, Zepto seeks to increase ARPU by pushing higher-value products. Selling high-value products makes more sense, as profits are more likely in those categories.

## Importance of Search

Search (alongside Recommendations) is one of the most important features in new product discovery for ecommerce apps.

The customer seeks to see options that are relevant to what they are looking for. They also need some criteria by which to judge a good product.

In that context, pain points related to Search are:

### Search Intelligence ###
- Inaccurate capture of user intent
- Poor handling of misspellings and variants

### Results Page ###
- Irrelevant or poorly ranked results
- Even the results
- Missed opportunities for upselling and cross-selling
- Limited product discovery

## So, what comprises Search as a feature

### 1. Search Input
Features such as Auto-suggest and Popular searches are most common in search experiences. For Zepto, Auto-suggest becomes more important.

### 2. Search Intelligence
Search Intelligence describes whether the intent of the user is accurately captured by the search algorithm. Search tools & libraries such as Algolia, ElasticSearch & Typesense offer NLP packages that make it easier to synthesize what the user is looking for.

### 3. Search Results
Showcasing Product cards with relevant details and easy actionables becomes more critical.

### 4. Enhancements to Search Results
Ranking algorithms, in addition to promotion of complementary products and suggesting bundle packages. Enhancements in particular has very strong potential for upselling.

## Discovery Opportunities - Recommendation Lists

We can create personalized experiences.

Zepto has two unique types of data:

1. Wide-ranging Catalog - standing at 6,000 SKUs, Zepto has a stated goal to onboard 14,000+ SKUs
2. Deep behavioural data of customer purchases on Zepto - Zepto gets over 1 million click events per day! [1](https://blog.zeptonow.com/how-zepto-connects-advertisers-with-the-right-brands-in-real-time-at-massive-scale-bf9290233f90)

With the overall objective to increase purchases, we can leverage both to create Recommendation Lists.

### Recommendation Lists the feature

Create automated lists of most common user purchase journeys.

These purchase journeys may be spread out over a period of a single day (think a houseparty), or they may be spread out over an year (think a household with young children purchasing various items throughout the school year)

### User Journey 1 - New Mothers

Let’s consider that have a very unique journey - new mothers. 

Nursing mothers need different items for their young ones throughout the early few months.

The first week they would need all sorts of new clothes - mittens, socks & caps, diapers

The second week onwards they would need new items - supplementary medicines, bigger sized diapers, dry sheets

1 month later they would need solutions for colic

3 months later, they would need a newer set of clothes as their young one grows. 

6months later, or with changing seasons, they’ll need more layers.

A new mother’s list could easily have a healthy amount of standardization.

<div class="highlight" markdown="1">
By building lists natively in Zepto interface, customers come into the app to discover new products, and not just to purchase. Zepto owns the Discovery stage of the funnel, and not just the Solution stage.
</div>

### How to create this

Let’s say of all young mothers using Zepto, 5% of them have completed all their major purchases on Zepto. 

By running analytics on this, and vetting through customer interviews, a custom list of a nursing mother’s 1 year journey can be created.

### User story

1. A mother has delivered her baby
2. She discovers “Recommendation Lists”, tailored for women with babies
3. It starts as a basic canvas, of what the new mother will be needing in the first week of delivery. And if she wants to zoom out and view this over a period of an year, she can look for herself what she’ll need over the next 6 months.
4. In addition, she can consent to having recommendations show up on her home screen periodically. In a “Your Space” section of the home page.

### Success Metrics

1. **Feature adoption** - User has used at least one List/ has gone into 1 List and ordered specific items from that
2. **Feature visibility** - User has starred at least one list
3. **Overall business** - ARPU for segment that has adopted the feature

![Recommendation Lists](/assets/images/2025/01/zepto-case/recommendation-lists-wireframe.webp)