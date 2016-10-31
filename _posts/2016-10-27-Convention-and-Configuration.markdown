---
layout: post
title:  "Convention over Configuration... ish"
date:   2016-10-27 00:00:00
categories: Coding DBC Rails Node
---

"Should we just move our project to Node?"

What I thought would be famous last words turned out to be one of the most satisfying days I had as a programmer.  At Dev Bootcamp, we were taught a very... Ruby-ish stack.  Javascript permeated our projects (with an emphasis on jQuery in phase 2 and React in phase 3), but the foundation of our projects was always one stacked on conventions and not configurations.

Despite all of this, our app <a href="http://state-matters.com" target="_blank">State Matters</a> doesn't require a **single** trick out of Rails' very, very large hat.  So why were we using Rails?  "Let's timebox learning Node to two-and-a-half-hours", says my overly persuasive teammate.  Despite being project lead (or perhaps because of it) I felt inclined to take the risk and slim down our project while taking advantage of new technology.  Two-and-a-half hours seemed reasonable.  Mind you we had five days to build this app from scratch and this was prime-time, day two.

### Nine hours later.

Ok, ok, sorry.

### Nine irritating hours later.

There we go.

Despite some guidance from a friend from the Grace Hopper Academy, taking all of our React components out of Rails was proving to be a configuration nightmare.  What type of person knows the arcane wizardry required to include dependencies in the proper files **manually?**

I won't harp too much on the pitfalls of the 'convention over configuration' mindset, but we were, at a minimum, inconveniently hamstrung by our reliance on Rails.  Eventually, though, we did figure out the minutiae of configuring Webpack and Express in Node.js (and it wasn't all that hard) and were then able to copy over our react-rails components into vanilla React.js with literally no changes beyond exporting the components.

The fact is that learning things on Ruby's level of abstraction-- from built-in enumerable methods all the way up to Rails, the ultimate in "no, let me get that for you" --proved **really great** for us.  Sure, it gives you a slow start-up time on configuration-heavy technologies (read: *everything else*), but it gave all of us something much more important: a point of reference.

If you're going to learn in an accelerated environment, now having been through it myself, it strikes me as obviously true that getting bogged down in configuration is a waste of your time.  You could, instead, be growing your skills overall, constantly exposing your ignorance and rising to new challenges, all while obtaining frames of reference for all kinds of different scopes of technology.  Sure, you'll have to do a little more digging and memory refreshing when you have to set up that Express server or hear about how C allocates memory or something; but, and excuse the candidness, *you can **do** shit*.  You can still build whatever you want in the frameworks you're comfortable with while you dig deep and learn the new stuff.

The more I utilize the flexibility of Javascript and circle the skies eyeing all kinds of other frameworks, the more the 'convention over configuration' attitude bugs me.  But the whole entire reason my team and I were able to learn Node.js in a day and redeploy our project was specifically because conventions helped us build a solid core of learning skills quickly, and now nothing is stopping us except time.

Well, time and semi-colons.