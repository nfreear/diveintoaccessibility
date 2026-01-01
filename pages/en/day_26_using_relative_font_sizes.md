---
layout: page
title: "Day 26: Using relative font sizes"
eleventyComputed:
  status: amber
  note: CSS hacks no longer needed!
---

## Day 26: Using relative font sizes

Web sites, with few exceptions, center around words. News, opinions, thoughts, ideas, stories, original writing, e-commerce: all words. Visual design and images are important, to be sure, but if people can't read your words, what's the point?

In the fall of 2000, Jeffrey Zeldman famously said that [relative font sizing was impossible][ala:fear4] ("pixels, baby... or nothing") because of an overwhelming variety of browser bugs, starting with Netscape 4 and ending in the most modern browsers. Since then, Netscape 4 still hasn't gotten any better, and it still hasn't gone away, but at least we've all learned a thing or two about taming the browsers and making relative font sizing a reality. (Zeldman too; his recently reincarnated [Web Standards Project][] uses the technique described below.)

Use relative font sizes in browsers that can handle them, and absolute font sizes in Netscape 4, which does not reliably support relative font sizes. You can do this even if you don't use multiple stylesheets. In a minute, I'll give copy-and-paste solutions for the default Movable Type template and all default Radio themes. And a lengthy explanation of the technique itself to help you implement it in other templates.

### Who benefits?

1. [Lillian][] benefits. Lillian has difficulty seeing web pages clearly, due to nothing more than old age. Like 80% of the Internet population, she uses Internet Explorer for Windows, which does not support resizing text unless the web designer exclusively specifies relative font sizes. Lillian has changed the default text size in her browser (under the "View" menu, "Text Size"), but it doesn't do any good on sites that use absolute font sizes. This includes virtually every weblog template in existence. For example, this is what the default Movable Type template looks like to Lillian:

    [![Screenshot of Movable Type default template as seen through Lillian's eyes; text is completely blurred and impossible to read][img:abs_sizing]][ex:abs_sizing]

    If the template used relative font sizes, it would look exactly the same to the majority of readers who don't need (or care) to change their text size. But this is what it would look like to Lillian:

    [![Screenshot of same template using relative font sizing; text is still blurred but large enough to be readable][img:rel_sizing]][ex:rel_sizing]

    Again: if people can't read your words, _what's the point_?

### How to do it: Radio

In your Home Page Template, look in your `<style>` section near the top for a CSS rule that looks like this:

```css
body, td, th, p {
  font-family: verdana, sans-serif;
  font-size: 12px;
}
```

Keep that just the way it is, but add this immediately after it:

```css
/*/*/a{}
body,
body td,
body th,
body p {
  font-size: x-small;
  voice-family: "\"}\"";
  voice-family: inherit;
  font-size: small;
}
html>body,
html>body td,
html>body th
html>body p {
  font-size: small;
}  
/* */
```

Make sure to include the comments at the beginning and the end. They're the key to the whole thing, as explained below.

### How to do it: Movable Type

The default Movable Type template is more complex than the Radio templates, but we're going to do the same thing, just more of it. In your Stylesheet template (`styles-site.css`), add this at the end:

```css
/*/*/a{}
body,
body a,
body .calendar,
body .calendarhead,
body .title,
body .sidetitle,
body .syndicate,
body .powered,
body .comments-post,
body .posted {
  font-size: xx-small;
  voice-family: "\"}\"";
  voice-family: inherit;
  font-size: x-small;
}
html>body,
html>body a,
html>body .calendar,
html>body .calendarhead,
html>body .title,
html>body .sidetitle,
html>body .syndicate,
html>body .powered,
html>body .comments-post,
html>body .posted {
  font-size: x-small;
}

body .date {
  font-size: x-small;
  voice-family: "\"}\"";
  voice-family: inherit;
  font-size: small;
}
html>body .date {
  font-size: small;
}

body #banner {
  font-size: 200%;
}

body .description {
  font-size: 60%;
}

body .blogbody {
  font-size: 110%;
}

body .blogbody,
body .calendar,
body .calendarhead,
body .side,
body .title,
body .sidetitle,
body .syndicate,
body .powered,
body .comments-body {
  line-height: 128%;
}
/* */
```

Again, make sure to include the comments at the beginning and the end.

### How to do it: detailed explanation

The general idea is that we're going to use font-size keywords. These are little-used (due to bugs in older browsers), but they have three interesting properties:

1. They don't compound. If you have a "main" section sized at `90%`, and within that you have a "post" section sized as 90%, some browsers will display the post at 81% (90% x 90%), but some will display it at 90%. With more than one level of nesting (common in templates that use tables for layout), text quickly becomes unreadably small as the percentages compound. However, if your "main" section is sized as `small`, and the "post" section within it is sized as `small`, all browsers will display the "post" section as `small`.
2. They resize properly in Internet Explorer for Windows. This is odd, since small sounds like an absolute size (especially in light of the fact that small nested within small is still small, see above), but it works. What can I tell you? IE/Win resizes text sized with font size keywords. I swear.
3. They never get too small. That "Text Size" setting that Lillian uses in Internet Explorer can be used to make text smaller as well as larger. Many people with good eyesight prefer everything one, even two, sizes smaller than normal. Text sized with percentages tends to become microscopic and fuzzy when combined with the smallest default text size setting. However, text sized with font size keywords always stays at least 9px, which is readable in any font (assuming good eyesight).

So we're going to use font size keywords to specify our basic sizes. And if we need finer control than that, we're going to use percentages, but only on leaf classes that contain text (so on "post", but not "main") to avoid compounding percentages, and not too small, to avoid becoming microscopic when combined with users' smaller default text sizes.

Here's the general idea of font size keywords:

```css
p {
  font-size: 12px;
}

/*/*/a{}
body p {
  font-size: x-small;
  voice-family: "\"}\"";
  voice-family: inherit;
  font-size: small;
}
html>body p {
  font-size: small;
}
/* */
```

There's a lot going on here, and it's all important, so pay attention.

1. First, we're defining an absolute size (12px) for every `<p>`. All browsers apply this style, including Netscape 4.
2. Then we include the odd-looking comment "`/*/*/`". Due to bugs in Netscape 4, everything between this comment and the following one will be ignored. That's right, all the following styles will only be applied in non-Netscape-4 browsers.
3. Immediately after the odd-looking comment, we include an empty rule "`a {}`". Opera 5 for Mac is buggy and ignores this rule (and only this rule). It applies everything else.
4. We have now carved out a realm where we can define rules that are applied in all browsers except Netscape 4. Now we can start defining relative font sizes (which Netscape 4 can't handle). The first thing we do is use a "body p" selector to redefine the behavior of the p tag. Due to the way CSS works, this will override our previous p selector. (In technical terms, "body p" is a more specific selector than "p".)
5. We redefine the font size of all `<p>` tags to be `x-small`. This is a font size keyword which, at default settings, Internet Explorer 5 for Windows will translate into 12px. However, if the user changes their "Text Size" (under the View menu), this text will scale larger or smaller, depending on the user's setting. This is what we want. (Note: we've now defined font-size twice for IE5/Win, but that's okay, because the more specific selector always wins, and the previous selector is simply ignored.)
6. Unfortunately, IE5/Win an off-by-1 bug with its font size keywords; every other browser in the world (IE5/Mac, Netscape 6, Mozilla, IE6/Win) will translate `x-small` to 10px, not 12px. Luckily for us, IE5/Win has its own parsing bug that we can exploit: it looks at that odd-looking voice-family and mistakenly thinks that this entire "body p" selector is over, so it ignores all the lines until the "`}`".
7. Now we have carved out a smaller realm where we can define rules that are applied in all browsers except IE5/Win (and Netscape 4, which is still blissfully ignoring all of this). So we redefine font-size to small, which modern non-IE5/Win browsers (the only ones still listening) correctly interpret as 12px (at default settings). Again, if the user sets their "text size" to larger, this text will scale larger, which is what we want.
8. But wait! Opera 5 has the same parsing bug that IE5/Win has, so it was also confused by the voice-family hack, but it correctly interprets font size keywords, so now our text will look too small in Opera 5. Luckily, Opera 5 supports a third type of selector, "html>body p". (Again, this is "more specific" than "body p", so it takes precedence over the previous selector.) IE5/Win does not support this type of selector, so it will just ignore it, which is what we want (since we've already compensated for it's off-by-1 bug and don't want to go mucking that up now). IE6/Win also does not support it, but that's OK, because we caught it with the "font-size: small" after the "voice-family: inherit" hack in the "body p" selector. All other browsers support "html>body" selectors, so for them we end up defining font-size four times. Again, that's not a problem, because the most specific selector always wins, and the rest are simply ignored.
9. Finally, we have a set of empty comments: `/* */`. This triggers Netscape 4's parser to start listening again. If we defined any further rules after these empty comments, all browsers (including Netscape 4) would apply them.

To recap:

1. Netscape 4 displays `<p>` text at 12px, regardless of user setting.
2. Internet Explorer 5 for Windows displays `<p>` text at `x-small`, which works out to be 12px at the default setting, but would scale larger if the user set their "Text Size" setting larger in the View menu.
3. Internet Explorer 6 for Windows displays `<p>` text at small, because of the "font-size: small" rule in the "body p" selector. This works out to 12px at the default setting, but would scale larger if the user set their "Text Size" setting larger.
Internet Explorer 5 for Mac, Opera, Netscape 6, Mozilla, and (hopefully) all future browsers will display `<p>` text at small, because of the "font-size: small" rule in the "html>body p" selector. This works out to 12px at the default setting, but would scale larger if the user used the "Text Zoom" feature.

### Further reading

* Mark Pilgrim: [Relative Font Sizing HOWTO][ex:fontsize]. Gives essentially this same explanation, but the page itself is an example of the technique, so you can see it in action.
* Todd Fahrner: [Size Matters: Making Font Size Keywords Work][ala:sizematters].
* Caio Chassot: [Hiding CSS from Netscape 4][v2s:hide] without using multiple stylesheets.
* Tantek Çelik: [Box Model Hack][tantek:boxmodel]. How to hide CSS from Internet Explorer 5 for Windows.
* [The Web Standards Project][wsp] also uses font size keywords with the IE5/Win hack, although they use a Javascript-based solution (instead of the inline comment hack) to deal with Netscape 4.
* Owen Briggs: [Text Sizing][briggs:font]. Screenshots of various relative font sizing techniques across browsers, platforms, and default text size settings.

[web standards project]: http://www.webstandards.org/
[wsp]: http://www.webstandards.org/
[ala:fear4]: http://www.alistapart.com/stories/fear4/
[ala:sizematters]: http://www.alistapart.com/stories/sizematters/
[v2s:hide]: http://www.v2studio.com/k/css/n4hide/
[tantek:boxmodel]: http://tantek.com/CSS/Examples/boxmodelhack.html
[briggs:font]: http://www.thenoodleincident.com/tutorials/box_lesson/font/index.html
