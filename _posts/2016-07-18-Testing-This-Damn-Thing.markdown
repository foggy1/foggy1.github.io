---
layout: post
title:  "Troubleshooting Jekyll"
date:   2016-07-18 01:10:00
categories: Jekyll Coding
---

After hours upon *hours* of struggling with Jekyll, it looks like I've finally got the site working.  Initially, I had it working locally on my machine; unfortunately, getting something working **locally** and getting something working in a way that, you know, actually funting *matters* are apparently two completely different things!  I guess that's a big lesson in programming learned.

When I had that issue and no apparent issue in my code, I went straight to GitHub support since I had no idea where to even start troubleshooting a Jekyll build, particularly when the hard part, the code, was working.  Turns out I was having a simple relative path problem.  Originally, when I uploaded my code, links looked like this:

{% highlight html %}

<link rel="stylesheet" type="text/css" href="assets/css/main.css" />

{% endhighlight %}

Except this is the *exact* kind of thing that will work well locally, but not remotely.  When you give your link an "href" you're giving it a place to look for a file.  But, even if you don't know much about coding, it's obvious that the path this href has isn't an **absolute** path: it's just the end of a file path, obviously the location doesn't *start* with "assets".  This is a **relative** path; the question is, is it the *right* relative path?  And the answer is, yes locally, no remotely.

Locally, to test your site on Jekyll, you have to set up a Jekyll environment so you can run a Jekyll server.  That server runs out of the local directory, so when I tell it, "hey computer, go look for assets", it does that from the server's directory.  Incidentally, installing a local Jekyll environment can be fraught with a lot of nonsense: I'd suggest using [github's own guide](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/).  Other guides that people have on their blogs are missing key dependencies and are otherwise woefully out of date.  Bundler is your friend.

Anyway, pushing that code to GitHub led to one major problem: the directory structure is *different*. If you run a normal GitHub user site, the site is located at [username].github.io and runs right out of a directory with an identical name.  In that case, calls to "assets/css/main.css" would totally work.  But **Project Pages** are located at [username].github.io**/[Project's Directory Name]**.  Since I'm running Jekyll on GitHub out of a "blog" directory, my site is located at "foggy1.github.io/blog".  That's all well and good, but because of how GitHub pages works, calls to "assets/css/main.css" will go right to the root: it was looking for "foggy1.github.io/assets/css/main.css".  Not uh... not the right result.  There needs to be a "/blog" in there, lest I move all my files to the root directory which is really not the right way to do things in this case.   Repositories will cross over, things will be a nightmare to test, etc. etc.

Without going bonkers explaining all the particular problems that might arise from how I might decide to deal with the relative path problem, I went with this:

{% highlight html %}

 <link rel="stylesheet" type="text/css" href="
 { { site.baseurl } }/assets/css/main.css" />
  {% endhighlight %}

 [*Note: no spaces between the same-facing brackets in the real code*]. Jekyll keeps its most important info in a config file, including but not limited to things like your site's name, a description of the site, the markdown interpreter of your choice, and something known as a **baseurl**.  When I stumbled upon [this succinct and helpful explanation](https://byparker.com/blog/2014/clearing-up-confusion-around-baseurl/) I realized I could help myself to the baseurl attribute of my site to prepend the calls to CSS assets, javascript er... scripts, and ..... well, frigging *links*.  

Yes, it took longer than I'd like to admit to come to the simple realization that "foggy1.github.io/blog" (the homepage) should link to "foggy1.github.io/blog/[a post or a page]" and vice versa.  Even a single dropped "/blog" prepended to a single HTML link or page permalink would mean the whole site wasn't really working right.  Helping myself to the baseurl attribute allowed me to keep things consistent as well as normalize how things fit together locally as well as remotely.