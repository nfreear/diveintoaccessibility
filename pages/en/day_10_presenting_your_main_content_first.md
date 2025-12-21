---
layout: page
title: "Day 10: Presenting your main content first"
---

## Day 10: Presenting your main content first

One of the main advantages of using a purely <abbr title="cascading stylesheets">CSS</abbr>-based layout is that it is easy to rearrange elements within your <abbr title="hypetext markup language">HTML</abbr> source without affecting the visual layout, so that your main content displays while the rest of the page is still loading. However, I am aware that most web sites still use table-based layouts, so this tip is for you.

If you have a table-based layout with a navigation bar along the left, your navigation bar is being presented to blind users like [Marcus][] and [Jackie][] before your main content. There is no way to describe how much of a problem this is; you have to see it for yourself:

1. [Sample table-based layout][notabletrick].
2. [Modified layout, with content first][tabletrick]. These two layouts should look essentially the same in visual browsers, but in Lynx, the difference is obvious.
3. [The original layout, rendered by Lynx][notabletrick-2].
4. [The modified layout, rendered by Lynx][tabletrick-2]. The main content is displayed first, then the navigation bar.

You do not need to redesign your entire template from scratch to avoid this problem. There is a (relatively) simple technique, affectionately called the "table trick", that can present your main content first, while still keeping your navigation bar on the left side.

### Who benefits?

1. [Marcus][] benefits. As demonstrated by the examples above, Lynx displays content in the order in which it appears in the <abbr title="hypetext markup language">HTML</abbr> source. This means Marcus must scroll through your entire navigation bar every time he visits your page. Scrolling sucks.
2. [Jackie][] benefits. [JAWS][], like Lynx, presents content in the order in it appears in the <abbr title="hypetext markup language">HTML</abbr> source code, not the order they appear on screen. With JAWS, the problem is even worse, because Jackie must sit through JAWS _reading your entire navigation bar_ before hearing any real content, and there is no sure-fire way to jump straight to the main content. (We'll talk more about this problem on Monday.)
3. [Google][] benefits. Google gives more weight to content closer to the top of the page. That's the top of your <abbr title="hypetext markup language">HTML</abbr> source, not the visual top of the page. In fact, most people who know about this technique are in the search engine optimization industry; to them, the accessibility benefits are secondary.

### How to do it

View your own site in the [Lynx Viewer][] and see if your daily posts are displayed first, before your navigation bar. The Movable Type default template gets it right; if you use the default template or something based on it, you probably do not need to do anything. But view your site in the Lynx Viewer anyway, because it will give you a deeper understanding of the issues involved.

If you are using one of the default Radio templates, you may need to adjust your tables to put your main content first. There is no specific copy-and-paste way to do this; you will have to dig into your own template and look at the table structure. The sample layout and modified sample layout show the basic technique.

Instead of the obvious table layout:

```html
<table>
<tr>
  <td valign="top" align="left" width="25%">
    ... navigation bar ...
  </td>
  <td valign="top" align="left">
    ... main content ...
  </td>
</tr>
</table>
```

We do this instead:

```html
<table>
<tr>
  <!-- [spacer GIF][] in upper-left cell -->
  <td><img src="/images/1.gif" width="1" height="1" alt=""></td>
  <!-- main content cell first, with rowspan=2 -->
  <td valign="top" align="left" rowspan="2">
    ... main content ...
  </td>
</tr>
<tr>
  <td valign="top" align="left" width="25%">
    ... navigation bar ...
  </td>
</tr>
</table>
```

### Further reading

* [Lynx Viewer][].
* A Promotion Guide: [The Table Trick][trick].

[jaws]: http://www.freedomscientific.com/fs_products/software_jaws.asp
[lynx viewer]: http://www.delorie.com/web/lynxview.html
[google]: http://www.google.com/
[trick]: http://www.apromotionguide.com/tabletrick.html
[trick archive]: https://web.archive.org/web/20140523092901/http://www.apromotionguide.com/tabletrick.html

[jackie]: day_1_jackie.html
[michael]: day_2_michael.html
[bill]: day_3_bill.html
[lillian]: day_4_lillian.html
[marcus]: day_5_marcus.html

[notabletrick]: ./examples/notabletrick.html
[tabletrick]: ./examples/tabletrick.html
[notabletrick-2]: ./examples/notabletrick-2.html
[tabletrick-2]: ./examples/tabletrick-2.html
[spacer GIF]: ./images/1.html
