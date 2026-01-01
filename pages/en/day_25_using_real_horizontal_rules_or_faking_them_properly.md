---
layout: page
title: "Day 25: Using real horizontal rules (or faking them properly)"
---

## Day 25: Using real horizontal rules (or faking them properly)

Suppose you want a divider between your posts. Regular horizontal rules (`<hr>` tags) are boring, so you use an image instead. This works, and can easily be made more accessible with the addition of proper `alt` text.

However, you can also go further and use a real horizontal rule, then use a little <abbr title="cascading style sheets">CSS</abbr> trick to display it as an image in modern browsers. Older browsers and text-only browsers will ignore the CSS and just render a horizontal rule in their native style. (Text-only browsers generally use a row of underscores or dashes, expanded to fit the current screen width.)

I'll give examples of both techniques in a minute.

### Who benefits?

1. [Jackie][] benefits. [As we've already seen][day 21], [JAWS][] reads the filename of any image without an `alt` attribute.
2. [Marcus][] benefits. [Lynx][] displays the filename of any image without an `alt` attribute. If you use a real horizontal rule, Lynx will render it as a series of underscores as wide as the current screen.
3. [Michael][] benefits. [Links][] does not display anything for images without `alt` text, so Michael does not have any indication that there is a divider. We need that `alt` text, or better yet, a real `<hr>` tag, which Links will render as a series of dashes as wide as the current screen.

### How to do it

If you use images as horizontal rules, the easiest way to make them accessible is add an `alt` attribute to your `<img>` tag. You should add an empty `title` attribute too, to suppress the tooltip in visual browsers. So if you have this:

```html
<img src="/images/fancyrule.gif" width="442" height="25">
```

Change it to this:

```html
<img alt="--" title="" src="/images/fancyrule.gif" width="442" height="25">
```

Do not go crazy and specify 80 dashes for the `alt` text. Two or three will suffice.

### How to do it: advanced

The advanced (and preferred) technique uses an actual `<hr>` tag. However, since browser support for styling `<hr>` tags directly is flaky at best, we'll use a dummy `<div>` tag to display the image. Put the following CSS in your `<style>` section at the top of your template. (If you're using an external stylesheet like `style-sites.css`, put it anywhere in there. If you're using multiple stylesheets, put it in the Netscape 4-friendly one.)

```css
div.hr {display: none}
/*/*/a{}
div.hr {
  display: block;
  height: 25px;
  background-image: url(/images/fancyrule.gif);
  background-repeat: no-repeat;
  background-position: center center;
  margin: 1em 0 1em 0;
}
hr {display:none}
/* */
```

(For the height, substitute the height of your image. For the background-image, substitute the address of your image.)

Then in your template, where you want your decorative rule, do this:

```html
<div class="hr"></div><hr />
```

Results:
* All modern browsers will display the image instead of the normal plain horizontal rule.
* Netscape 4 will display a plain horizontal rule.
* Text-only browsers always ignore CSS, so they will display a plain horizontal rule (usually rendered as a series of underscores or dashes).

### Further reading

* [Hiding CSS From Netscape 4][v2s:hide] without using additional stylesheets. This is the technique we used above, in the advanced example.
* [CSS1 and the Decorative HR][flavell:hrstyle], if you're feeling particularly brave and want to style decorative horizontal rules with CSS in Netscape 4. Lots of luck with that.

[v2s:hide]: http://www.v2studio.com/k/css/n4hide/
[flavell:hrstyle]: http://ppewww.ph.gla.ac.uk/~flavell/www/hrstyle.html
