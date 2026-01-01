---
layout: page
title: "Day 26: Using relative font sizes"
eleventyComputed:
  status: green/amber
  note: "Using real headings"
---

## Day 27: Using real headers

Think of your web site as an outline. The top level is labeled by your site name. On your home page, you list entries from several days. So the second level is labeled by your date descriptions: "Tuesday, July 16, 2002", or something similar. On each day, you make multiple posts, which may each have their own title. If so, then you have a third level, labeled by your individual post titles.

Now mark up your web site as an outline, using real `<h1>`, `<h2>`, `<h3>` tags. Screen readers rely on these tags to interpret the structure of your pages. Your pages _do have_ a structure, but without proper header tags, screen readers can't find it. In a minute, I'll show you how to use CSS to make your headers look the same in visual browsers as whatever `<font>`-based monstrosity you're currently using.

### Who benefits?

1. [Jackie][] benefits. As soon as Jackie hits your page, [JAWS][] announces that the page has a certain number of links and a certain number of headers. Jackie can type <kbd>INSERT+F6</kbd> to hear all the headers on your page, or <kbd>CTRL+INSERT+ENTER</kbd> to quickly navigate through your page by skipping to the next header.
2. [Michael][] benefits. In [Opera][], he can type <kbd>S</kbd> to skip to the next header, or <kbd>W</kbd> to skip to the previous one.
3. [Google][] benefits. Google appreciates a well-structured page, and ranks keywords higher when they appear in real header tags. (Yet another reason to write well-crafted post titles.)

### How to do it: Movable Type

Define the styles for your site logo. In your Stylesheet template (`styles-sites.css`), add the following lines:

```css
h1, h2, h3 {
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 20px;
  font-weight: normal;
}

/*/*/a{}
h1 {font-size: 100%}
/* */
```

Define your site logo using an `<h1>` tag. In your 4 major templates (Main Index, Category Archive, Date-Based Archive, Individual Entry Archive), search for this:

```html
<div id="banner">
<$MTBlogName$><br />
```

And replace it with this:
```html
<div id="banner">
<h1><$MTBlogName$></h1>
```

Define your date headers using `<h2>` tags. We already have a class defined for these, so we shouldn't need to make any stylesheet changes; we're just changing the tag. In your 4 major templates, search for this:

```html
<div class="date">
<$MTEntryDate format="%B %d, %Y"$>
</div>
```

And replace it with this:

```html
<h2 class="date">
<$MTEntryDate format="%B %d, %Y"$>
</h2>
```

Define your post titles using `<h3>` tags. Again, this only involves changing the tag, not the stylesheet. In your 4 major templates, search for this:

```html
<span class="title"><$MTEntryTitle$></span>
```

And replace it with this:

```html
<h3 class="title"><$MTEntryTitle$></h3>
```

### How to do it: Radio

Define your header styles. The default Radio themes don't use any real header tags, so we'll need to define these styles ourselves. (Tailor to suit, but these examples should make your page look the same as it used to in visual browsers.)

Actually, before we start, search your Home Page Template for "h2 {". If you find a rule like this, remove it; it's not actually used anywhere, and it'll get in our way:
```css
h2 {
font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 24px; font-weight: bold
}
```

OK, now add these styles, anywhere in the `<style>` section of your Home Page Template:
```css
h1, h2 {
  margin: 0;
  padding: 0;
}

h1 {font-size: 24px}
h2 {font-size: 13px}

/*/*/a{}
h1 {
  font-size: large;
  voice-family: "\"}\"";
  voice-family: inherit;
  font-size: x-large;
}
html>body h1 {
  font-size: x-large;
}
h2 {
  font-size: x-small;
  voice-family: "\"}\"";
  voice-family: inherit;
  font-size: small;
}
html>body h2 {
  font-size: small;
}
/* */
```

Note that we're using relative font sizes for our headers in browsers that can support relative font sizes, and absolute font sizes in Netscape 4. This technique should look familiar; we did the same thing yesterday.

Define the header for your site name. In your Home Page Template, search for "<%siteName%>" and find a line that looks like this:

```html
<font size="+2"><b><a href="<%radio.macros.weblogUrl ()%>" style="color:Black; text-decoration:none"><%siteName%></a></b></font>
```

And change it to this:

```html
<h1><a href="<%radio.macros.weblogUrl ()%>" style="color:Black; text-decoration:none"><%siteName%></a></h1>
```

Define the header for your date headers. In your Day Template, search for "`<%longDate%>`" and find a line like this:

```html
<b><%longDate%></b>
```

And change it to this:

```html
<h2><%longDate%></h2>
```

### Further reading

* Shirley Kaiser: [Don't Fake Your Markup][kaiser:fake]: Accessibility Issues for CSS.

[kaiser:fake]: http://www.brainstormsandraves.com/2002_05_12_archive.shtml#76539537
