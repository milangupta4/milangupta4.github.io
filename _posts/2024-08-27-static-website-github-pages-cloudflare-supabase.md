---
layout: post
title:  "Building a Static Website with GitHub Pages, Cloudflare & Supabase"
date:   2025-02-12 9:31:07 +0530
published_date:   2024-08-27 12:31:07 +0530
categories: [product]
custom_excerpt: "GitHub Pages & Cloudflare pages are great tools for building static websites"
subtitle: "GitHub Pages & Cloudflare pages are great tools for building static websites"
post_id: 24
featured: true
featured_image: "/assets/images/milan-gupta-io-tech-stack/Website-marketing-tool.webp"
---

Building a personal or your personal business website does not have to be more expensive than a Netflix subscription. 


## A Business's website normally contains static content

For starters, most websites do not need a backend. This actually also applies for Marketing websites for companies. 

Why is that?

A marketing website broadly has the following features:
1. **Home Page** to showcase the product, build trust with customers, and to position that your product is solving the customer's problems
2. **Landing pages** dedicated to specific problem statements further help with positioning
3. **Pages** such as About Us, Contact, Customer-Stories in addition help build trust by telling your brand story
4. **Blogs** help you with SEO ranking, by continuing a feed of good quality content that encourages Search Engines to index your website, and to capture multiple Top-of-the-Funnel, Middle-of-the-Funnel, and Bottom-of-the-Funnel traffic
5. **CTAs & Login/ Dashboard** are where User Interactions happen - for SaaS businesses, optimizing for these is critical
6. **Chat** is a standard feature across SaaS websites - Intercom's chatbot is the most trusted chatbot for SaaS companies

In all of the above features, CTAs & Dashboard require a backend - server APIs to receive data, and a database to collect user data.

The standard practice across SaaS companies is to use a CMS (Content Management System) - such as WordPress to build their website. 

## In 2025, WordPress continues to be the most trusted CMS

WordPress is indeed a great tool, more for users who want to build a website that has strong backend functionalities such as login, and integrations with third-party services

While I at VdoCipher, we were seeing a lot of customers who were using WordPress for their websites.

### So, why did I migrate away from WordPress

I would get a monthly bill of about $10 for hosting my WordPress instance on AWS. I could have had a much cheaper solution going with a managed hosting provider, for sure.

In addition, if I was making any changes, you risk crashing the WordPress loop. I felt I didn't have control over my website.

Another major factor was the possibility of plugin bloat on WordPress. There is so much PHP code there, templates, plugins, functions.php.


The biggest issue however was that I was getting an error that my database was full - I simply could not even login to my website because of that.

### Setting up on GitHub pages

Mid 2021 I rebuilt my website using Jekyll and GitHub pages. The promise of unlimited customizability, and zero server costs were good enough for me.

### Setting up a Form - using Cloudflare workers and Supabase

At one point or the other, I would need some kind of user inputs. To add some kinds of user interactions to this blog. The first thing to do would be to build a Contact form to the website. 

![image](/assets/images/milan-gupta-io-tech-stack/milangupta-tech-stack.webp)

### An Example of a Full-stack website - WordPress

However, by design, static files do not contain dynamic content - for example I can’t login to the page and see a super-personalized page. That’s because there’s no server-side logic. Let’s take the example of a wordpress page.

Every time a user loads a category page, wordpress will query its database, which will return all those posts that fall in that category. Once it retrieves their ID, a database query pulls the title, post description or images (whichever you have configured in your website frontend).

![image](/assets/images/milan-gupta-io-tech-stack/wordpress-loop.webp)

Jekyll on the other hand builds the entire website at once. All pages are existing as HTML files on your website.

This eliminates server computation costs - so if you’re setting up a personal portfolio website that doesn’t get much traffic, or if you just need to showcase but are not expecting any user inputs, this is a cheap stack to use. 

However where you need interactivity you come up short. 

You either use a Forms-as-a-service SaaS provider (such as Formspree), or build your own.