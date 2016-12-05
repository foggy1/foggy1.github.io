---
layout: page
title: Projects
---
<nav class="sub-nav clearfix">
    <a class="active" href="#">State Matters</a>
    <a class="" href="#">Eve Postmaster</a>
    <a class="" href="#"> PHP Todo</a>
</nav>

***

{::options parse_block_html="true" /}
<div class="stateMatters">

# State Matters

![state-matters](/assets/images/state-matters.png){:class="img-responsive"}

State Matters is a single-page React.js application built in Node.js and hosted via Github Pages.  I led a team of three other developers in designing this application, utilizing the Open Legislation API maintained by NY Senate developers.  

I noticed that there were great existing resources for inspecting the status of any given piece of legislation in NY state, but that there was no simple way to view that same data in terms of a given senator.  If you wanted to know how a given senator was voting on contentious bills, or what kind of bills that senator had been sponsoring, you would have to do a lot of digging.

You're busy and the data is all out there.  So nobody should have to jump through hoops to obtain political information about their representatives in any political climate (let alone this one).

## Biggest Challenges
* Converting our back-end from Rails to Node.js with no prior Node experience under a strict deadline.
* Fully grasping doing things the "React" way and navigating dom manipulation during the React lifecycle.
* Maintaining the site through API server upgrades.


</div>

<div class="evePost">

# Eve Postmaster

![eve-postmaster](/assets/images/eve-postmaster.png){:class="img-responsive"}

Eve Postmaster is a lightweight message drafting application that extends the in-game mail functionality of Eve Online.  Utilizing the remoteUI scope of Eve's CREST API, Eve subscribers can authorize Eve Postmaster to draft messages which will then automatically populate an in-game mail form.  The application is built with a Rails back-end and a React.js front-end.

I know what you're thinking: "Why write a message in one application just to have to send it from another application *anyway*?"  There are a few reasons.  

First of all, the majority of CCP's focus on UI and UX is devoted to the gameplay experience (probably as it should be!) so the in-game mail application is about as easy to use as you would guess.  Eve Postmaster's UI is intentionally squeaky-clean by comparison.

Secondly, you'll notice the prominence of the contact list and the available filters for it.  In the in-game mail client, the only way to address mail to multiple contacts that aren't part of a pre-fab mailing list is to begin typing each of their names, and then click; rinse and repeat.  With this application, users can simply click contacts to their heart's content with no need to ever remember the spelling of a contact.  This is *much* smoother.

Thirdly, with Eve Postmaster, for the very first time on a third-party service, you can populate a mail from *anywhere* using your cell phone.  For those who know how prevalent away-from-keyboard gameplay is (or just, you know, literally being logged in all day), being able to draft a mail on the fly from anywhere is a serious boon.  Important mails can be drafted remotely throughout the day for conducting serious spaceship business.

My goal is to make the mail sending experience as streamlined as possible before converting this into a full-fledged mail client.  But the capability is there given the API, and I'm hoping over time that feedback from the Eve Online community will allow me to really flesh out the usefulness of this app.

</div>

<div class="phpTodo">

# PHP Todo

![php-todo](/assets/images/php-todo.png){:class="img-responsive"}

Ok, so not my best title.

PHP Todo is a standard little CRUD app built on a LAMP stack using Laravel and Vue.js.  From start to finish this has been a major exercise in learning.

When I started, I had a year's experience with Ubuntu (it's been my preferred operating system for exactly that long) and had worked with MySQL pretty extensively.  But configuring Apache, writing PHP (*any* PHP), using Laravel, and building a Vue.js front-end were all **completely** new experiences.

Folks talk a lot of trash about PHP, but if I learned anything from building this app, it's that 

The jury's still out on whether or not I prefer Vue.js to React.js; based on documentation at the moment, React certainly takes the cake.  Despite being more flexible than React in some cool ways, with the ability to be as terse as Angular.js if the user so desires, and with an even slimmer build, I'm not so sure that Vue.js knows what kind of framework it wants to be yet.



</div>
