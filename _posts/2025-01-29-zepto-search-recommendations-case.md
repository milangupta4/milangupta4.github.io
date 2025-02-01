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

Zepto has revolutionized Quick Commerce sector in India. Powered by an outstanding User experience, a Tech with near-zero latency, and superlative On-ground logistics, Zepto has achieved $3 billion in Annualized Gross Order value.

For context on its growth - Zepto hit $1 bn Annualized GOV only 9 months earlier in April 2024.

Zepto is marching towards a target of opening 1000 dark stores across the country. The instant delivery app currently serves over 10 Lakh (1 million) orders per day.

In addition, Zepto has launched Zepto Cafe - a quick food delivery service - and has achieved 50,000+ daily orders within the first month of launch.

## Zepto's value prop is frictionless shopping

Zepto seeks to make online purchase from their app the default user behavior. 

New users join in largely to order high frequency consumer goods & food items. 

Zepto's goal is to broaden the categories of products that customers purchase via the app.

This is done by leveraging recommendation engine to push broader catalog items, running special promotions during festivals, and continuous promotions. 

The broad goal is increase ARPU by pushing higher-value products. And Zepto is more likely to achieve profitable margins on high-value products - such as electronics, home decor and apparel.

## Search captures intent

Users get to discover new content on the app via 2 features:
1. Search
2. Recommendations

When using Search, the customer seeks to view options that are relevant to what they are looking for. In addition, when they view products, they need some criteria by which to judge a good product.

In that context, pain points related to Search are:

**Search Intelligence**
- Inaccurate capture of user intent
- Poor handling of misspellings and variants

**Results Page**
- Irrelevant or poorly ranked results
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

## Success Metrics for Search

### Primary Metrics

1. Search-to-Purchase Conversion Rate - This should be the North star. Zepto is a solution decision platform, and not a discovery platform. However, as usage adopts, there might be users who are mainly using to browse for products. In those cases, it becomes important to take those signals as separate. A customer who is using the search 10 times to look for a PS4 is probably fantasizing about the product, rather than facing issues. We can solve for this user behavior by excluding repeat searches of similar query from the same user, for example.
2. Average Order Value (AOV) from Search

### Secondary Metrics

1. Search Usage Rate - overall health & adoption of feature; a declining search usage rate indicates that users do not trust the Product's search feature
    - % of sessions with search
2. Search Refinement Rate - a high number suggests that the Search intelligence is unable to capture the meaning of the user's search query
    - % of searches modified/refined
3. Zero Results Rate - Another red flag metric, Zero Results reflects either a failure of search intelligence, or non-existing SKU/ category. Where relevant, this should be treated as a signal for either the Search engineering or the Category teams.
    - % of searches with no results
4. Time to Purchase - this metric informs the UI experience - items such as visual design, app latency and information hierarchy determine the time-to-purchase
    - Duration from search to checkout
5. Search Abandonment Rate - 
    - % of searches without subsequent interaction

## Discovery Opportunities - Recommendation Lists

We can create personalized experiences.

Zepto has two unique types of data:

1. Wide-ranging Catalog - standing at 6,000 SKUs, Zepto has a stated goal to onboard 14,000+ SKUs
2. Deep behavioural data of customer purchases on Zepto - Zepto gets over 1 million click events per day! [1](https://blog.zeptonow.com/how-zepto-connects-advertisers-with-the-right-brands-in-real-time-at-massive-scale-bf9290233f90)

With the overall objective to increase purchases, we can leverage both to create Recommendation Lists.

### Designing  Recommendation Lists

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

### Success Metrics for Recommendation Lists feature

1. **Feature adoption** - User has used at least one List/ has gone into 1 List and ordered specific items from that
2. **Feature visibility** - User has starred at least one list
3. **Overall business** - ARPU for segment that has adopted the feature