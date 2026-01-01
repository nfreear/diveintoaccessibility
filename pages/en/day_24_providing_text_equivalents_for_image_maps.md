---
layout: page
title: "Day 24: Providing text equivalents for image maps"
---

## Day 24: Providing text equivalents for image maps

I was surprised to find how many high-profile web sites use client-side image maps. I don't use them myself, and I don't think they're included in any default weblog templates, but apparently lots of people have figured them out. If you don't know what an image map is, [Leslie Harpold][harpold] uses one for the navigation links at the bottom of her home page. That's all one image, but clicking on the word "archives" takes you to one page, "by category" to another, and so forth.

Image maps sound like an accessibility nightmare, but they're not. In the same way that [every image needs a text equivalent][day 23], every image map and every clickable area of the image map needs a text equivalent. You can provide `alt` text for the image itself (in the `<img>` tag), and for each clickable area in the image map (in the `<area>` tags of the associated `<map>`, that defines where the clickable areas are and what they link to).

### Who benefits?

1. [Marcus][] benefits. [Lynx][] displays the `alt` text of the image as a link. When Marcus hits <kbd>ENTER</kbd>,  Lynx displays a separate page listing the links in the image map. Each link is labeled by `alt` text of the area in the image map. Without `alt` text, Lynx displays the link address of each `area`, which may be incomprehensible.

    If [Leslie][harpold] didn't have `alt` text on her image map, this is the link Marcus would see at the bottom of her home page:
    ```
    [USEMAP:hpfooter.gif]
    ```
    Following this link would take Marcus to a page that lists all the links in the image map. Without `alt` texts, Lynx could only display each URL, which would look like this:
    ```
    [USEMAP:hpfooter.gif]

    MAP: http://leslie.harpold.com/#Map

      1. http://leslie.harpold.com/archives.html
      2. http://leslie.harpold.com/category/
      3. http://leslie.harpold.com/links.html
      4. http://leslie.harpold.com/leslie.html
      5. http://www.moveabletype.org
    ```
    However, in reality, Leslie _does_ have proper `alt` text for her image and every area of her image map. So this is the link Marcus _really_ sees at the bottom of her home page:
    ```
    Site navigation links
    ```
    Following this link takes Marcus to a page that looks like this:
    ```
    Site navigation links

    MAP: http://leslie.harpold.com/#Map

      1. previously...
      2. by category
      3. about the site
      4. about leslie
      5. Powered by Movable Type
    ```
2. [Michael][] benefits. [Links][] displays the `alt` text of image as a link. When Michael hits <kbd>ENTER</kbd>,  Links pops up a menu of all the links defined in the map. Each link is labeled by the `alt` text of the `area`. Without the `alt` text, Links displays the link address of each `area`, which may be incomprehensible.
3. [Jackie][] benefits. [JAWS][] will read the `alt` text of each `area` of the image map, in the order in which they are defined in your <abbr title="hypertext markup language">HTML</abbr> source. Jackie can hit <kbd>ENTER</kbd>  to follow the link. Without the `alt` text, JAWS reads the link address of each `area`, which is almost certainly incomprehensible. (Have you ever tried reading a long web address to someone over the phone?)
4. [Lillian][] benefits. Internet Explorer displays a tooltip when hovering over each linked `area` in the image map.
5. [Google][] benefits. The Googlebot indexes the `alt` text of the main image and each `area` within the image map. The `alt` text is a factor in determining both your page's relevance to keywords, and also each link's relevance to keywords contained in the `alt` text of that area.

### How to do it

If you have an image map like this:
```html
<img src="footer.gif" width="500" height="212" usemap="#Map">

<map name="Map">
<area shape="rect" coords="203,114,258,129" href="/archives.html">
<area shape="rect" coords="277,113,348,129" href="/category/">
<area shape="rect" coords="364,113,401,128" href="links.html">
<area shape="rect" coords="418,114,488,130" href="leslie.html">
<area shape="rect" coords="-4,190,131,210" href="http://www.moveabletype.org">
</map>
```

Add `alt` text to both the main image, and to each linked `area` within the image map, like this:
```html
<img alt="Site navigation links" src="footer.gif" width="500" height="212" usemap="#Map">

<map name="Map">
<area alt="previously..." shape="rect" coords="203,114,258,129" href="/archives.html">
<area alt="by category" shape="rect" coords="277,113,348,129" href="/category/">
<area alt="about the site" shape="rect" coords="364,113,401,128" href="links.html">
<area alt="about leslie" shape="rect" coords="418,114,488,130" href="leslie.html">
<area alt="Powered by Movable Type" shape="rect" coords="-4,190,131,210" href="http://www.moveabletype.org">
</map>
```

All the rules about [writing good `alt` text for images][day 23] also apply to image maps. You could also add title="" to the main `<img>` and each `<area>` to suppress the tooltip in visual browsers.

### Things not to do

Don't create server-side image maps, images that pass your exact click coordinates back to the server for further processing. These are _completely inaccessible_ to JAWS users like Jackie, users of text-only browsers like Michael and Marcus, keyboard-only users like Bill, and search engines like Google. If you must use server-side image maps, add a text-only navigation bar below it that includes [real text links][day 13] to every page you could get to by clicking on the image map.

### Further reading

* Leslie Harpold: [The Historical Present][harpold]. Leslie kindly allowed me to use her weblog as the basis of today's example.

[harpold]: http://leslie.harpold.com/
