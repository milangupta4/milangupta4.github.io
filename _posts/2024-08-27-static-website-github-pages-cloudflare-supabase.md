---
layout: post
title:  "Building a Static Website with GitHub Pages, Cloudflare & Supabase!"
date:   2024-08-27 12:31:07 +0530
categories: tech
post_id: 24
---

Building a personal website does not have to be more expensive than a Netflix subscription.

When I first built my portfolio website, it was on WordPress. 

### Why I migrated from WordPress

I would get a monthly bill of about $10 for hosting my WordPress instance on AWS. I could have had a much cheaper solution going with a managed hosting provider, for sure.

Another major factor was the possibility of plugin bloat on WordPress. There is so much PHP code there, templates, plugins, functions.php.

At one point or the other, I would need some kind of user inputs. To add some kinds of user interactions to this blog. The first thing to do would be to build a Contact form to the website. 

### Setting up on GitHub pages

Mid 2021 was when I rebuilt my website using Jekyll and GitHub pages.

### Setting up a Form - using Cloudflare workers and Supabase

I have hosted a static website at www.milangupta.io, and the website uses Jekyll. Jekyll is a static website generator - you write a bunch of html, css and javascript to define the overall style and layout. And markdown to add content pages.

![image](/assets/images/milan-gupta-io-tech-stack/milangupta-tech-stack.png)

### An Example of a Full-stack website - WordPress

However, by design, static files do not contain dynamic content - for example I can’t login to the page and see a super-personalized page. That’s because there’s no server-side logic. Let’s take the example of a wordpress page.

Every time a user loads a category page, wordpress will query its database, which will return all those posts that fall in that category. Once it retrieves their ID, a database query pulls the title, post description or images (whichever you have configured in your website frontend).

![image](/assets/images/milan-gupta-io-tech-stack/wordpress-loop.png)

Jekyll on the other hand builds the entire website at once. All pages are existing as HTML files on your website.

This eliminates server computation costs - so if you’re setting up a personal portfolio website that doesn’t get much traffic, or if you just need to showcase but are not expecting any user inputs, this is a cheap stack to use. 

However where you need interactivity you come up short. 

You either use a Forms-as-a-service SaaS provider (such as Formspree), or build your own.