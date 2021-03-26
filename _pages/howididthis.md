---
title: How I Did this
layout: page
permalink: /howididthis
---
<html lang="en">
<h1>How I did this</h1>
<p>This was a <i>complicated</i> project.</p>
<p>Requriements:</p>
<ul type="disc">
	<li>A computer</li>
	<li>An email address</li>
</ul>
<p>Preferences:</p>
<ul>
	<li>Frontend Web-Dev skills (HTML, CSS and JS)</li>
	<li>A <a href="https://github.com">github</a> account</li>
	<li>A <a href="https://freenom.com">Freenom</a> account</li>
	<li>A <a href="https://cloudflare.com">Cloudflare</a> account</li>
</ul>
<h1>Part 1</h1>
<h6>Getting the domain</h6>
<p>
	Go to <a href="https://freenom.com">Freenom</a>. The first thing
	you should see is a bar that says Find a new FREE domain. Input what
	you want your domain name to be. For example, ianpratt. Next, you
	select one of the choices that pop up. Preferrably, the free option.
	This is why I am assuming you are following my tutorial.
</p><br>
<p>
	Once you have done this, go to checkout. Select period, and change it
	for how long you want the registration period to last. Preferrably, choose
	the longest time that is free for use. Don't worry, you can renew the
	domain later. Once you have done that, it will ask you to either sign
	in or make an account, or if you already logged in, it will redirect you
	to your account and ask you to complete the purchase. Either way, follow
	Freenom's steps. It might say that it can't confirm that you are a human.
	If so, wait it out a while and try again. Once you have secured your domain,
	go to part 2.
</p>
<h1>Part 2</h1>
<h6>Setting up Github Pages</h6>
<iframe width="560" height="315" src="https://www.youtube.com/embed/2MsN8gpT6jY" frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen></iframe>
<p>
	Create a repository called <code><<i>yourgithubusername</i>>.github.io</code>. Once that is done,
	create a file called <code>index.html</code> and inside that, put anything you like. Now,
	if you go to the website <code><<i>yourgithubusername</i>>.github.io</code>, you should see whatever
	you put inside your <code>index.html</code> file. You are done with Github Pages!
</p>
<h1>Part 3</h1>
<h6>Connecting Repl.it to your domain</h6>
<p>
	Now, you need to sign up or log into <a href="https://cloudflare.com">Cloudflare</a>.
	Click on the thing that says add site. It should show a window saying
	"Enter your site (example.com)". Enter your domain you bought. (Ex. ianpratt.tk)
	Follow the steps Cloudflare gives you. When it says to add the nameservers Cloudflare
	gives you, go to Freenom and log in. Go to your domains, and click on Manage under
	your domain you just bought. Go to DNS, and under DNS click on Nameservers.
	Click on custom nameservers, and paste in the nameservers Cloudflare gave you.
	Click on next, and it should check that the nameservers are there. Once this is done,
	it will provide and verify a free SSL/TLS certificate. This can take up to a day to
	finish the process, although it usually doesn't take that long.
</p>
<p>
	Meanwhile, go to your github pages repository, go to settings, and scroll down to
	the github pages section. Inside that section, go to custom domain, and in there,
	put your website that you bought inside and click save.
</p>
<p>
	In Cloudflare, Click on DNS, and under that click on add new record. Change the
	record from "A" to "CNAME". Then, paste your link to your github pages page
	(<code><<i>yourgithubusername</i>>.github.io</code>) under the box that says "target",
	and under "name" put in "@". Click on save, and now it's a waiting game. If
	everything worked out well, a while later you should be able to go to your site in
	your browser, and see "Hello world!" on your screen.
</p>
<p>This site is hosted by github pages.</p>

</html>