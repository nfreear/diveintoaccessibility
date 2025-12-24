---
layout: page
title: "Day 13: Using real links"
---

## Day 13: Using real links

The scourge of web design is the "`javascript:`" link, a pseudo-link that executes a piece of Javascript code when you click on it. The most common place this problem occurs in weblogs is in the link to display comments in a separate window. Why is it a problem? Because [11% of Internet users don't use Javascript][javascript] for one reason or another, including many disabled users whose browsers simply don't support it. These pseudo-links won't work for them; use real links instead.

Although it's easy to describe and simple to fix, I can't stress enough how important this tip is. Some problems, like [not having a "skip link" past your navigation bar][day 11], reduce usability to varying degrees, but at least your page can be read eventually. On the other hand, this problem actually makes entire chunks of important content completely inaccessible. If your comments are hidden behind a "`javascript:`" link, they may as well not exist.

### Who benefits?

* [Marcus][] benefits. [Lynx][] does not support Javascript.
* [Michael][] benefits. [Links][] does not support Javascript.
* [Lillian][] benefits. Although she uses Internet Explorer, her IT department has implemented a corporate-wide policy to disable Javascript on all but a small list of approved sites. Your web site is not on the list.
* [Google][] benefits. Google wants to follow links to find and index more content, but it can't follow "`javascript:`" links, because it doesn't execute Javascript code as it indexes the web.

### How to do it

__The default templates in Movable Type and Radio now get this right__, so you may not need to do anything. View source on your home page and search for "`javascript:`". If you don't find it, this tip does not apply to you.

However, if your Movable Type template contains a link like this:

```html
<a href="javascript:OpenComments(<$MTEntryID$>)">Comments (<$MTEntryCommentCount$>)</a>
```

Then change it to this:

```html
<a href="<$MTCGIPath$>mt-comments.cgi?entry_id=<$MTEntryID$>" onclick="OpenComments(<$MTEntryID$>); return false">Comments (<$MTEntryCommentCount$>)</a>
```

In Javascript-enabled browsers, it will still work the same way, because the onclick attribute takes precedence over the href attribute. So the new version still calls the OpenComments function, which pops up a new window. However, non-Javascript-enabled browsers (and Google) will ignore the `onclick` attribute entirely and follow the link specified in the `href`, which will display the comments in the same window.

If you're using `javascript:` pseudo-links for any other reason, stop. Just stop. Do not pass go, do not collect $200, etc. Apply the above technique to your own code so that non-Javascript-enabled browsers always have a chance to follow a real link.

### Further reading

* Jeff Howden: [Links & JavaScript Living Together in Harmony][evolt].

### Postscript

Don't even get me started on those [dynamic Javascript-based menu systems][dynamic]. They make you look cool like smoking makes you look cool. Use real links.

[javascript]: http://www.thecounter.com/stats/2002/April/javas.php
[evolt]: http://www.evolt.org/article/Links_and_JavaScript_Living_Together_in_Harmony/17/20938/
[dynamic]: http://www.dynamicdrive.com/dynamicindex1/index.html
