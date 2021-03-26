---
title: Home
layout: page
permalink: /
---
<html>
    <h1>Welcome!</h1>
    <img src="assets/img/mugshot_square.jpg" class="rounded mx-auto d-block pfp">
    <p>This is my website! This website is hosted using <a href="https://pages.github.com/">Github Pages</a>. I
        am
        pretty proud of myself for setting up this website. This website is a <span
            class="infohighlight">static</span> website, which means that this website is all client-side HTML,
        CSS and JS. Take a look around, you might like what you see!</p>
    <div class="text-center">
        <h3>Is it my birthday?</h3>
        <p id="isbday">It's not my birthday yet :(</p>
    </div class="text-center">
    <script>
        var d = new Date()
        var isBday = document.getElementById("isbday");
        if (d.getMonth() == 11 && d.getDate() == 7) {
            isBday.innerHTML = "🎉 It's my birthday! 🎉"
        }
    </script>
</html>