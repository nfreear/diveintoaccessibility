---
layout: page
title: "Day 8: Constructing meaningful page titles"
---

## Day 8: Constructing meaningful page titles

Every page of your web site should have a unique and meaningful page title.

* The home page title can simply be the name of your web site.
Date-based archive pages should include the name of your web site, followed by the date (or date range) for the page. For example, on my weblog I have daily archives whose titles look like "[dive into mark/June 19, 2002](http://diveintomark.org/archives/2002/06/19.html)", and monthly archives like "[dive into mark/June 2002](http://diveintomark.org/archives/2002/06/)".
* Category pages should include the name of your web site, followed by the name of the category. For example, all of my <abbr title="cascading stylesheets">CSS</abbr>-related posts are archived on a page entitled "[dive into mark/CSS][css]".
* Individual entry archive pages should include the name of your web site, followed by the entry title. I don't have separate pages for individual entries, but [Jonathon Delacour][] does, and he gets this right. For example, his post of June 17, 2002, [Accessibility matters][], is archived on its own page with the title "Jonathon Delacour: Accessibility matters".

* The exact punctuation is not relevant, although some screen readers will read every punctuation character out loud by default. As a general rule, excessive punctuation sounds as dumb as it looks.

### Who benefits?

1. [Jackie][] benefits. [JAWS][] has a special keyboard shortcut (INSERT + F10) which displays (and reads) a list of the currently open windows, by window title. In the case of web pages, this would be your page title. It also reads the window title while ALT-TABbing through open windows. Other screen readers, like [Home Page Reader][hpr], read the page title out load as soon as you visit the page.
2. [Marcus][] benefits. [Lynx][] displays the page title in the first line of output, so it's always the first thing that Marcus reads in Braille.
3. [Bill][] benefits. Because of his stroke, he sometimes gets confused and momentarily loses track of what he's reading. The page title in the window titlebar acts as a visual anchor; it stays in the same place, even as he scrolls the page. He can always glance back to it to jog his memory.
4. [Google][] benefits. Google displays the page title in its search results, and [it ranks keywords higher when they appear in the page title][rank]. This is a Good Thing for you, especially for those individual entry pages. (Choosing good entry titles doesn't hurt either.)

### How to do it

Movable Type has separate templates for the various types of index and archive pages. The default templates are quite accessible already; if you are using the default template, you don't need to make any changes.

1. Main Index: `<title><$MTBlogName$></title>`
2. Archive Index: `<title><$MTBlogName$> Archives</title>`
3. Category Archive: `<title><$MTBlogName$>: <$MTArchiveTitle$></title>`
4. Date-Based Archive: `<title><$MTBlogName$>: <$MTArchiveTitle$></title>`
5. Individual Entry Archive: `<title><$MTBlogName$>: <$MTEntryTitle$></title>`

Greymatter has a similar set of templates, but a different templating language. Greymatter does not have a separate template variable for the name of the weblog, so insert your own weblog title in each case.

1. Main Index Template: `<title>My Weblog</title>`
2. Archive Master Index Template: `<title>My Weblog Archives</title>`
3. Archive Log Index Template: `<title>My Weblog: {{month}} {{year}}</title>`
4. Entry Page Template: `<title>My Weblog: {{entrysubject}}</title>`

Manila (at least in the default configuration) lets you specify a title for each day, so you should use that in the page title instead of the date, since it is more likely to be relevant to the content.

1. Home Page Template: `<title>{siteName}</title>`
2. Template: `<title>{siteName}: {title}</title>`

Radio is a little trickier, you can still add the date to your date-based archives by using Radio's macro language. Be careful copying and pasting this macro; there should be no line breaks anywhere, and Radio cares. (Thanks to Jake Savin for these instructions.)

1. Home Page Template: `<title><%title%></title>`
2. Main Template: `<title><%title%><%local (d); if radio.weblog.file.getArchiveFileDate (radioResponder.fileBeingRendered, @d) {": " + string.dateString (d)} else {""}%></title>`

Unfortunately, I do not know how to customize page titles satisfactorily in Blogger. [Suggestions welcome][email].

Keep in mind these are only suggestions. You can include the word "Archives" in the daily and monthly archive pages, or not. The exact punctuation really doesn't matter, as long as it's not excessive. You can put the site name at the end rather than at the beginning. It's a good idea to include your site name somewhere in your page titles, though; it's an important contextual clue, especially when people are switching between multiple open windows.

### Further reading

* Jake Savin: [Adding a date to your Radio archive pages][radio]

[css]: http://diveintomark.org/archives/rooms/css/
[Jonathon Delacour]: http://weblog.delacour.net/
[accessibility matters]: http://weblog.delacour.net/archives/000535.html

[rank]: http://www.searchengineworld.com/design/title.htm
[radio]: http://radio.weblogs.com/0001000/2002/06/19.html#a630

[email]: mailto:f8dy@diveintoaccessibility.org
