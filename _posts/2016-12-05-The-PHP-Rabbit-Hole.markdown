---
layout: post
title:  "The PHP Rabbit Hole"
date:   2016-12-05 00:00:00
categories: PHP Laravel Vue
---

As I continue to become better at my two primary languages, Ruby and JavaScript, I wanted to branch out and learn a language of a different paradigm.  With a handful of jobs having PHP either as a major or minor requirement, I decided to dive in.  In the process, not only did I learn PHP, but I learned how to set up a LAMP stack, how to use Laravel, and how to use Vue.js.  Coming from a "build a Rails app and just slap it on Heroku" background, quite a bit of this was outside of my comfort zone.  But I once read somewhere that web developers ought to be courageous in their learning, and I certainly feel like I've battle-tested that saying.  If you're also from a Ruby background, a Python background, or are simply looking to get started with LAMP or PHP as a server-side language, here are some of my thoughts from my experience.

First off, I made the choice not to experience PHP in a bubble.  Though it's possible to do command-line stuff with PHP now that the language is more mature, the context in which I might ever find myself wanting to use PHP is strictly to interface with a back-end.  Since I had a lot of experience in Ubuntu and MySQL, it seemed prudent to use the PHP learning experience as a chance bring it all together and configure a LAMP stack myself.  I won't bore you with all the particulars, but I will say that I used Digital Ocean because the price and size fit my needs and the docs for <a target="_blank" href="https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-16-04">configuring your own LAMP stack</a> are outstanding.

The challenges you can expect are a great learning experience.  Setting up Ubuntu is a breeze (you can run the damn thing off a USB drive in a matter of minutes if you want), and Apache is just... Apache.  If you have database knowledge, MySQL ain't so bad either.  The trickiest part is getting your app environment to interface with your technology stack.  I spent more time messing around with environment variables in Laravel than I spent doing pretty much anything else.  I'd say the only other major challenge was learning exactly *where* Apache serves your files from and tinkering with those routes.  Those with Heroku experience or Webpack experience with single-page apps likely think a good deal of this stuff is magic.  It doesn't feel so magic when you're fiddling around in Vim in a deeply nested folder you've never heard of.  

Still, even in the frustrating uncharted territory of configuration, web development intuitions and programming intuitions more generally play a big role in helping you power through.  Google is your friend.

Enter Laravel.  Once I had my stack set up, I realized I wanted to set up a rudimentary MVC setup for my PHP files.  After hours of looking through PHP docs, it occurred to me that I should take the opportunity to find a pre-fab framework and lean on some of its wisdom in order to pick up some best practices instead of bad habits (though everyone knows those two things ultimately go together with any framework).  Laravel seemed like a prime candidate, and I couldn't be happier with my choice.  Why?

The <a target="_blank" href="https://laravel.com/docs/5.3">docs</a> are *absolutely outstanding*.  The Laravel docs blow pretty much any other docs I've ever read clear out of the water.  If you are coming from a Rails background and want to pick up some PHP, I highly recommend that you try Laravel because of the doc support.  PHP has some weird syntax and some limitations that Ruby does not have (not to mention the semi-colons are an absolute nightmare).  But here's the thing: you're probably going to start learning with a simple CRUD app.  And if that's the case, then you'll quickly find that the amount of work you're doing in your controllers and your router is almost nothing.

Far and away the most verbose part of Laravel is the process of making your models, and guess what?  The ORM for Laravel, Eloquent, is arguably identical in structure to Ruby's preferred ORM, ActiveRecord.  The only difference is the PHP syntax, something you can easily look up.  But database migrations, models, the naming conventions, and defining relationships are all done in a very similar fashion.  It was easy to bootstrap my todo app specifically because I didn't have to get bogged down in these kind of details.

~~~~
// Look familiar, Rubyists?
class TodoList extends Model
{
  public function tasks()
  {
      return $this->hasMany('App\Task');
  }
  public function user()
  {
      return $this->belongsTo('App\User');
  }
}

Schema::create('todo_lists', function (Blueprint $table) {
    $table->increments('id');
    $table->string('title');
    $table->integer('user_id');
    $table->timestamps();
});

~~~~

The trickiest part of Laravel is probably its opinions about how to handle authorization and dependency injection.  I don't know that I have immediate problems with either, but having to negotiate the framework's opinions about how to move data around while also learning PHP in general proved to be one of the biggest challenges of the project.  I'm not a big believer in scaffolding, especially when I'm trying to learn something new, but I'm also learning with experience that sometimes you need to know when to let a framework do something for you.  Laravel is so opinionated about authorizing users, for instance, that I found it to be easier to scaffold the auth than to spend countless hours trying to re-invent the wheel.  Laravel's dependency injection in the controllers is great, but it's hardly transparent; eventually, you'll figure out that var_dump is your friend and that, seriously, semi-colons are the enemy.

I'd be remiss not to mention the <a target="_blank" href="https://laracasts.com/">Laracasts community</a>: their forums are much of the reason I was able to understand how best to handle data in the Laravel controllers.  Moreover, those forums and some of the free videos on the site are the only reason I was able to pick up any of Vue.js, the front-end framework that ships with Laravel.  Those with Rails experience can think of Vue's role inside the Laravel ecosystem as being nearly identical to the way that Rails handles the React-Rails gem: a folder of components each with a dedicated file are all included in a single JavaScript file that gets included in your main layout.

This post is getting long, and the jury's still out on how exacty I feel about Vue, but I'll say a few things.  First and foremost, the docs are atrocious.  The biggest hangup in the entire project-- that is, in my time learning LAMP from scratch, learning PHP from scratch, learning Laravel from scratch, and learning Vue.js -- the BIGGEST issue I had was removing an item from the DOM with Vue.js.  Seriously!  Because there's all this stuff out there about a $remove function and a .delete function, I kept trying to use them.  Eventually, my better JavaScript instincts kicked in and I just filtered out the removed item, but the closest the docs got to handling a similar case *specifically* involved invocations of the aforementioned functions, at least one of which is deprecated.  If your docs show a way to deal with something, I will take them at face value.

All of that said, Vue's ability to be as sleek and inline as Angular with all of the two-way data-binding benefits and a much smaller build size is very tempting.  The thing is, because of how it ships with Laravel, it's much easier to treat Vue like it's more verbose cousin, React.  I'm not sure if this leverages the power and appeal of Vue properly, but judging by the state of the docs and the fact that the best source of info about Vue is a Laravel developer forum... I'm not sure that the folks making Vue are so sure about Vue either.

Bottom, bottom line: if you're fresh out of a coding bootcamp or have been learning web development on your own for a decent amount of time and you want to learn a new language or framework, just dive in.  The intuitions I developed at Dev Bootcamp were a constant driving force in this project: I was constantly asking the right questions and getting back answers that allowed me to build stuff in an unfamiliar framework at every level of the process.  

Be courageous in your learning.

<a target="_blank" href="https://github.com/foggy1/php-todo">Project Repo</a>
