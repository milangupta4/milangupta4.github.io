---
layout: post
title:  "Email marketing concepts - deliverability & spam filters"
date:   2025-01-12 10:08:07 +0530
categories: [marketing]
post_id: 36
custom_excerpt: "Achieve high open rates & clicks by mastering Email deliverability fundamentals"
subtitle: "Achieve high open rates & clicks by mastering Email deliverability fundamentals"
featured_image: "/assets/images/2025/01/email-deliverability/Email-authentication-steps.webp"
---
Gmail's spam filtering algorithms block nearly 15 billion emails every day.

That is good news for users, as it protects them from phishing, malware and spam.

However the filters that are blocking spam mails also can potentially block your account.

For marketers, this is a very critical problem. But if you're flagging it to your engineering team, they would be just as clueless.

If you are a marketer solving for deliverability issues, or you are a developer trying to fix those issues, this guide attempts to explain the factors behind email deliverability.

## What happens when you send an email

There are three entities involved in sending an email:
1. **Your domain name - DNS** - if you are sending from your personal gmail, then it is gmail. If you’re worrying about email deliverability, you are looking to send emails from your professional email.
2. **SMTP server** - the server which actually sends the email - if you are sending from gmail, SMTP server is the same as the domain name - gmail
3. **Recipient inbox**

Here we go through step-by-step what inboxes such as Gmail do when they receive an email.

## SPF, DKIM & DMARC configurations verify the authenticity of the sender

Consider that admin@milangupta.io is sending an email to milan.gupta.noreply@gmail.com.
What are the things that Gmail will be doing to verify if the email is correct.

### 1. Sender authentication checks - Sender policy framework (SPF)

Here, the recipient inbox verifies the DNS of the sender DNS records. 

In addition, it checks if the IP sending the email is allowed by milangupta.io’s SPF records. 

Now, when recipient inbox receives the email from info@milangupta.io, it does 2 checks on the email
Looks up the sender - if the sender is gmail.com, then it will see the SPF policy for if gmail is included
Authenticates that the email has come from the legitimate SMTP server 

### 2. DKIM check
DKIM (DomainKeys Identified Mail) leverages public-private key cryptography logic. The SMTP server does the following:
   1. Encrypt email header with a private key
   2. In the SMTP DNS config, share the public key
Recipient inbox tries to decrypt the email header with the public key. If successful, it validates that the right SMTP server in fact sent the email. 
Without this, a fake SMTP server can give the signature of the genuine SMTP server.

### 3. DMARC (Domain-based Message Authentication, Reporting, and Conformance)
How to handle different cases, such as authentication successful and failing. It suggests whether to allow, quarantine or reject an email in this scenario.
