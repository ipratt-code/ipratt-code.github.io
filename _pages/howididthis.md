---
title: How I Did this
layout: page
permalink: /howididthis
---
# How I did this

This was a *complicated* project.

Requriements:

- A computer
- An email address

<!-- -->

Preferences:

- Frontend Web-Dev skills (HTML, CSS and JS)
- A [github](<https://github.com>) account
- A [Freenom](<https://freenom.com>) account
- A [Cloudflare](<https://cloudflare.com>) account

<!-- -->

# Part 1

###### Getting the domain

Go to [Freenom](<https://freenom.com>). The first thing	you should see is a bar that says Find a new FREE domain. Input what	you want your domain name to be. For example, ianpratt. Next, you	select one of the choices that pop up. Preferrably, the free option.	This is why I am assuming you are following my tutorial.

<br>

Once you have done this, go to checkout. Select period, and change it	for how long you want the registration period to last. Preferrably, choose	the longest time that is free for use. Don't worry, you can renew the	domain later. Once you have done that, it will ask you to either sign	in or make an account, or if you already logged in, it will redirect you	to your account and ask you to complete the purchase. Either way, follow	Freenom's steps. It might say that it can't confirm that you are a human.	If so, wait it out a while and try again. Once you have secured your domain,	go to part 2.

# Part 2

###### Setting up Github Pages

<iframe src="https://www.youtube.com/embed/2MsN8gpT6jY" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>

Create a repository called `&lt;<i>yourgithubusername</i>&gt;.github.io`. Once that is done,	create a file called `index.html` and inside that, put anything you like. Now,	if you go to the website `&lt;<i>yourgithubusername</i>&gt;.github.io`, you should see whatever	you put inside your `index.html` file. You are done with Github Pages!

# Part 3

###### Connecting Repl.it to your domain

Now, you need to sign up or log into [Cloudflare](<https://cloudflare.com>).	Click on the thing that says add site. It should show a window saying	"Enter your site (example.com)". Enter your domain you bought. (Ex. ianpratt.tk)	Follow the steps Cloudflare gives you. When it says to add the nameservers Cloudflare	gives you, go to Freenom and log in. Go to your domains, and click on Manage under	your domain you just bought. Go to DNS, and under DNS click on Nameservers.	Click on custom nameservers, and paste in the nameservers Cloudflare gave you.	Click on next, and it should check that the nameservers are there. Once this is done,	it will provide and verify a free SSL/TLS certificate. This can take up to a day to	finish the process, although it usually doesn't take that long.

Meanwhile, go to your github pages repository, go to settings, and scroll down to	the github pages section. Inside that section, go to custom domain, and in there,	put your website that you bought inside and click save.

In Cloudflare, Click on DNS, and under that click on add new record. Change the	record from "A" to "CNAME". Then, paste your link to your github pages page	(`&lt;<i>yourgithubusername</i>&gt;.github.io`) under the box that says "target",	and under "name" put in "@". Click on save, and now it's a waiting game. If	everything worked out well, a while later you should be able to go to your site in	your browser, and see "Hello world!" on your screen.

This site is hosted by github pages.