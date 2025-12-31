---
layout: page
title: "Day 21: Ignoring spacer images"
---

## Day 21: Ignoring spacer images

Many designers use transparent spacer images to control the layout of their web site in visual browsers. You may use as many as you like, but you need to explicitly specify an empty `alt` attribute on each spacer image so that non-visual browsers know to ignore them.

### Who benefits?

1. [Marcus][] benefits. By default, [Lynx][] displays the filename of any image that does not contain an `alt` attribute. Many popular weblog templates include several spacer images even before the site name. You don't notice them in your visual browser, of course, but this is what Marcus sees:
    ```
    [shim.gif] [shim.gif]
    [shim.gif]
    [shim.gif]
    Welcome To My Web Site
    [ciblueHeader2.gif]

    [ciblueCurve2.gif]
    ```
2. [Jackie][] benefits. By default, [JAWS][] _reads_ the filename of any image that does not contain an `alt` attribute. If you thought Marcus was annoyed, imagine how frustrating it is for Jackie to hear this:

    > graphic shim dot gif graphic shim dot gif graphic shim dot gif graphic shim dot gif welcome to my web site graphic ciblue header two dot gif graphic ciblue curve two dot gif

    If you introduced yourself like that in real life, nobody would talk to you.

### How to do it

Radio users can take the day off. As of last Monday, Radio automatically generates empty `alt` attributes for all spacer images. (Thanks, [Jake][].) If you view source on your home page and you're not seeing `alt=""` on any of your spacer images, update Radio.root and republish your site.

Users of other publishing tools should look through your template for `<img>` tags with filenames like "`spacer.gif`", "`shim.gif`", "`1.gif`", or any image that appears to be repeated several times within your template, possibly with different width and height attributes each time.

For example, for each spacer image that looks like this:

```html
<img src="spacer.gif" width="1" height="10">
```

Change it to this:

```html
<img src="spacer.gif" alt="" width="1" height="10">
```

If you re-use the same spacer image multiple times, it's probably easiest to do this with global search-and-replace.

### Things not to do

Don't define `alt=" "`. The `alt` attribute should be an empty string, not a space.

Don't specify an `alt` attribute on your `<body>` tag, even if it defines a background image. This background image is always ignored by non-visual browsers. It looks like this:

```html
<body background="http://url/to/image.gif">
```

Don't specify an `alt` attribute on `<td>` tags, even if they define background images. These background images are always ignored by non-visual browsers. They look like this:

```html
<td background="http://url/to/image.gif">
```

### Further reading

* <abbr title="Web Accessibility in Mind">WebAIM</abbr>: [How to Create Accessible Graphics][webaim-graphics].

[jake]: http://radio.weblogs.com/0001000/
[webaim-graphics]: http://www.webaim.org/howto/accessiblegraphics3
