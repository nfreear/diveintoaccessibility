---
layout: page
title: "Day 22: Using real lists (or faking them properly)"
---

## Day 22: Using real lists (or faking them properly)

Suppose you have a blogroll of three links: Slashdot, The Register, and dive into mark. Instead of a boring black bullet, you want a fancy-looking image next to each one. How do you do it? The most common solution is to use `<img>` tags next to each link. This works, and can easily be made more accessible with the addition of proper `alt` text on each image.

However, you can also go further and use real list markup (<ul> and <li> tags), then use CSS to change the boring black bullet into an image. Besides being "the right way to do it" in some academic sense that you may or may not care about, this technique has additional accessibility benefits.

I'll give examples of both techniques in a minute.

### Who benefits?

1. [Marcus][] benefits. [As we saw yesterday][day 21], [Lynx][] displays the filename of any image without an `alt` attribute.

2. Michael benefits. [Links][] never displays images, but by default it does _not_ display anything for images with no `alt` text. This was acceptable yesterday when we wanted to [ignore spacer images][day 21], but today we want to make sure that there is some indication that this is a list, so we need that `alt` text.

    Also, when Michael browses with images turned off, [Opera][] will display the `alt` text instead of a "missing image" block. And if you use the advanced technique, Opera will do even better; it reverts to displaying the normal black bullet instead of the "missing image" block.

3. Jackie benefits. [As we saw yesterday][day 21], [JAWS][] reads the filename of any image without an `alt` attribute. The links end up getting lost in a sea of irrelevant filenames. This is what Jackie hears:

    >fancy dot dot gif link slashdot, fancy dot dot gif link the register, fancy dot dot gif link dive into mark

    Providing an asterisk as the `alt` text helps enormously. JAWS will see that the image is being used as a bullet, and not announce it. However, [Home Page Reader][] will still announce the asterisk explicitly, so users will hear this:

    >asterisk link slashdot, asterisk link the register, asterisk link dive into mark

    Using real list markup is best. Since all the visual presentation is in the CSS declarations, none of it clutters up the page, so both JAWS and Home Page Reader simply read your list for what it is: a list. Now this is what it sounds like:

    >link slashdot, link the register, link dive into mark

### How to do it

If you have a blogroll that looks like this:

```html
<img src="/images/fancydot.gif" width="8" height="8"> <a href="http://www.slashdot.org/">Slashdot</a> <br>
<img src="/images/fancydot.gif" width="8" height="8"> <a href="http://www.theregister.co.uk/">The Register</a> <br>
<img src="/images/fancydot.gif" width="8" height="8"> <a href="http://diveintomark.org/">dive into mark</a> <br>
```

You should provide `alt` attributes for all your bullet images. Use an asterisk as the `alt` text, to simulate what the list would look like if you were using real list markup. (To prevent this from displaying as a tooltip in visual browsers, you should also provide an empty title attribute.)

```html
<img alt="*" title="" src="/images/fancydot.gif" width="8" height="8"> <a href="http://www.slashdot.org/">Slashdot</a> <br>
<img alt="*" title="" src="/images/fancydot.gif" width="8" height="8"> <a href="http://www.theregister.co.uk/">The Register</a> <br>
<img alt="*" title="" src="/images/fancydot.gif" width="8" height="8"> <a href="http://diveintomark.org/">dive into mark</a> <br>
```

### How to do it: advanced

The advanced (and preferred) technique uses CSS to define the image to use as a list bullet.

```html
<style type="text/css">
ul.blogroll {
  list-style: url(/images/fancydot.gif) disc;
}
</style>
```

Then in your template, you can write your list using real list markup:

```html
<ul class="blogroll">
<li><a href="http://www.slashdot.org/">Slashdot</a></li>
<li><a href="http://www.theregister.co.uk/">The Register</a></li>
<li><a href="http://diveintomark.org/">dive into mark</a></li>
</ul>
```

Results:

* Modern browsers will display the image as the list bullet.
* Browsers with images turned off with display the boring black bullet.
* Netscape 4 will always display the boring black bullet.
* Text-only browsers always ignore CSS, so they will display the list however they normally display lists (usually rendering the list bullet as an asterisk).

### Postscript: un-bulleted lists

Another common way to create a list of links is with no images whatsoever, just a heap of links, possibly right-aligned, like this:

```
<div align="right">
<a href="http://www.slashdot.org/">Slashdot</a><br>
<a href="http://www.theregister.co.uk/">The Register</a><br>
<a href="http://diveintomark.org/">dive into mark</a><br>
</div>
```

This can also be accomplished with CSS and real list markup:

```html
<style type="text/css">
ul.blogroll {
  list-style: none;
  text-align: right;
}
</style>
```

Or, if you want left-aligned links, you can do this instead:

```html
<style type="text/css">
ul.blogroll {
  list-style: none;
  margin-left: 0;
  padding-left: 0;
}
</style>
```

Either way, the list markup hasn't changed from the previous example:

```html
<ul class="blogroll">
<li><a href="http://www.slashdot.org/">Slashdot</a></li>
<li><a href="http://www.theregister.co.uk/">The Register</a></li>
<li><a href="http://diveintomark.org/">dive into mark</a></li>
</ul>
```

The "`list-style: none`" line suppresses the usual black bullet in visual browsers. This works in all browsers, even Netscape 4. Thanks to [Tobias Schmidt][] for reminding me of this technique.

### Further reading

* Tobias Schmidt: [Styling lists with CSS](http://www.royal-ts.de/mtarchives/000805.php).
* W3Schools: [CSS List Properties](http://www.w3schools.com/css/css_list.asp).
* Eric Meyer: [Lists and Indentation](http://www.meyerweb.com/eric/css/list-indent.html).
* Eric B. Bednarz: [Manipulating Margin and Padding of Lists With CSS](http://devnull.tagsoup.com/list/).

[Tobias Schmidt]: http://www.royal-ts.de/
