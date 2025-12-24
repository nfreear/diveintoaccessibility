---
layout: page
title: "Day 14: Adding titles to links"
eleventyComputed:
  status: red
  notes: en/notes/day_14_adding_titles_to_links.html
---

## Day 14: Adding titles to links</h2>

What with the web being all about links, you would think more people would know about the `title` attribute, but I rarely see it.  For those who don't know, all links can have a title, specified by the `title` attribute of the `<a>` tag.  This is in addition to whatever link text you specify.  The title of a link generally shows up as a tooltip in visual browsers, but it can be presented in non-visual browsers as well.

Not all links should have titles.  If the link text is the name of an article, don't add a title; the link text itself is descriptive enough.  But if you read the link text by itself, out of context, and can't figure out what it points to, add a title.

### Who benefits?</h3>

1. [Jackie][] benefits.  [JAWS][] has an option to read the title of a link along with the link text.  (This option is not on by default.  To activate it, Jackie pressed <kbd>INSERT+V</kbd> to bring up the JAWS verbosity options window, then changed "Text links verbosity" to "Alt tag or title".)
2. [Michael][] benefits.  When he moves his cursor over a link in [Opera][], it displays the title of the link in the status bar and as a tooltip.  This lets him decide whether he wants to spend precious bandwidth following the link.
3. [Lillian][] benefits.  When she moves her cursor over the link in Internet Explorer, it displays the title of the link as a tooltip.
4. [Marcus][] benefits.  When Marcus presses "<kbd>l</kbd>", [Lynx][] displays a list of links on the current page.  The list includes the title of each link, if present.</li>

### How to do it

On each link where the link text itself might not be sufficient for the reader to decide whether to click the link, add a `title` attribute.  Examples:

1. On my navigation bar, I have a link to my statistics page.  The link text is simply [Statistics][], but the `title` attribute gives some further information:
    ```html
    <a title="referrers and other visitor statistics" href="/stats/">Statistics</a>
    ```

2. On my navigation bar, I have a link to my book, [Dive Into Python][], which looks like this:
    ````html
    <a title="Free Python book for experienced programmers" href="http://diveintopython.org/">Dive Into Python</a>
    ````

3. When I link to an article using a phrase within a sentence, I try to use a `title` attribute to give identifying information about the link, such as the article title or a citation.  For instance, [yesterday's tip][day 13] included this sentence:
    ```html
    Why is this a problem?  Because <a title="TheCounter.com statistics on Javascript usage in browsers, April 2002" href="http://www.thecounter.com/stats/2002/April/javas.php">11% of Internet users don't use Javascript</a> for one reason or another, including many disabled users whose browsers simply don't support it.
    ```

    Which renders like this:
    >>Why is this a problem?  Because [11% of Internet users don't use Javascript][js-stats] for one reason or another, including many disabled users whose browsers simply don't support it.

[Do not go overboard][britney] with the `title` attribute.  All things in moderation.

### Further reading

* <cite>Jakob Nielsen</cite>: [Using Link Titles to Help Users Predict Where They Are Going][useit].

[useit]: http://www.useit.com/alertbox/980111.html
[useit redirect]: https://www.nngroup.com/articles/title-attribute/

[statistics]: http://diveintomark.org/stats/
  "referrers and other visitor statistics"
[dive into python]: http://diveintopython.org/
  "Free Python book for experienced programmers"
[js-stats]: http://www.thecounter.com/stats/2002/April/javas.php
  "TheCounter.com statistics on Javascript usage in browsers, April 2002"
[britney]: http://diveintomark.org/archives/2002/02/20.html#britney_britney_britney
  "dive into mark February 20, 2002: Britney, Britney, Britney"
