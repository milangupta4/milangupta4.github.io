---
layout: post
title:  "Email marketing concepts - deliverability & spam filters"
date:   2025-01-12 10:08:07 +0530
categories: [marketing]
post_id: 35
custom_excerpt: "Achieve high open rates & clicks by mastering Email deliverability fundamentals"
subtitle: "Achieve high open rates & clicks by mastering Email deliverability fundamentals"
---
Gmail's spam filtering algorithms block nearly 15 billion emails every day.
That is good news for users, as it protects them from phishing, malware and spam.
However the filters that are blocking spam mails also can potentially block your account.
With email providers tightening their grip on inbox placement, understanding deliverability is just survival for email marketers.

### What happens when you send an email

First, you need to understand that there are three entities involved in sending an email:
1. Your domain name - DNS - if you are sending from your personal gmail, then it is gmail. If you’re worrying about email deliverability, you are looking to send emails from your professional email.
2. SMTP server - the server which actually sends the email - if you are sending from gmail, SMTP server is the same as the domain name - gmail
3. Recipient inbox

Here we go through step-by-step what inboxes such as Gmail do when they receive an email.

Consider that admin@milangupta.io is sending an email to milan.gupta.noreply@gmail.com.
What are the things that Gmail will be doing to verify if the email is correct.

1. Sender authentication checks - Sender policy framework
Here, the recipient inbox verifies the DNS of the sender DNS records. 
In addition, it checks if the IP sending the email is allowed by milangupta.io’s SPF records. 
Now, when recipient inbox receives the email from info@milangupta.io, it does 2 checks on the email
Looks up the sender - if the sender is gmail.com, then it will see the SPF policy for if gmail is included
Authenticates that the email has come from the legitimate SMTP server 

2. DKIM check - This leverages public-private key cryptography logic. The SMTP server does the following:
   1. Encrypt email header with a private key
   2. In the SMTP DNS config, share the public key
Recipient inbox tries to decrypt the email header with the public key. If successful, it validates that the right SMTP server in fact sent the email. 
Without this, a fake SMTP server can give the signature of the genuine SMTP server.

3. DMARC - How to handle different cases, such as authentication successful and failing. It suggests whether to allow, quarantine or reject an email in this scenario.
