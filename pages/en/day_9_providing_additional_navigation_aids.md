---
layout: page
title: "Day 9: Providing additional navigation aids"
---

## Day 9: Providing additional navigation aids

You may be familiar with the `<link>` tag in relation to external stylesheets. But did you know you can also use a similar syntax to point to your home page, and to previous and next pages in a series? For instance, on daily archive pages, you could point to the previous day's posts, and the next day's (if any). If you have individual pages for each entry, you could point to the previous and next entry.

```html
<link rel="home" title="Home" href="http://url/of/home/page" />
<link rel="prev" title="Title of previous page" href="http://url/of/previous/page" />
<link rel="next" title="Title of next page" href="http://url/of/next/page" />
```

These links, normally invisible to visual browsers like Internet Explorer, can be displayed in alternate browsers and help users navigate through your web site. You probably already provide several ways to navigate: weekly or monthly archives, links to recent posts, a monthly calendar of daily posts. You may even already have visible links on your archive pages pointing to previous and next days or entries. Those are all great; keep them, and add these too.

### Who benefits?

1. [Marcus][] benefits. His text-only browser [Lynx][] displays the additional navigation aids at the top of the page, using the title that we specified in the title attribute. Reading the daily archive page of June 18, this is what Marcus sees:

    >#[Home](# "link to home page that we defined")
    >[June 17, 2002](# "link to previous page, with title that we defined")
    >[June 19, 2002](# "link to next page, with title that we defined")

    (The # character lets Marcus know that this is metadata, not page content. Lynx does the same thing on the line with your meaningful page title.)

2. [Michael][] benefits. Opera displays these navigation aids in a toolbar (select View/Navigation Bar to see it.) And his text-only browser [Links][] (not to be confused with Marcus's browser, [Lynx][]) also displays these additional navigation aids at the top of the page, like this:

    >Link: [home](# "link to home page that we defined")
    >Link: [prev](# "link to previous page that we defined")
    >Link: [next](# "link to next page that we defined")

3. [Bill][] benefits. Mozilla displays the additional navigation links in the Site Navigation toolbar. The type of the link ("home", "prev", "next") is displayed on the toolbar button, and the title of the link is displayed as a tooltip. Select the View menu, Show/Hide, Site Navigation Bar, Show Always.

4. [iCab][] users benefit. iCab displays the navigation links in a drop-down menu in the toolbar, using the title defined in each link.

5. [Firebird][] users can benefit, if they [install a link toolbar][] that displays these additional navigation aids.

### How to do it

In Movable Type, add these lines to your Date-Based Archive template, immediately after the `<head>` tag:

```html
<link rel="home" href="<$MTBlogURL$>" title="Home" />
<MTArchivePrevious>
<link rel="prev" href="<$MTArchiveLink$>" title="<$MTArchiveTitle$>" />
</MTArchivePrevious>
<MTArchiveNext>
<link rel="next" href="<$MTArchiveLink$>" title="<$MTArchiveTitle$>" />
</MTArchiveNext>
```

And add this to your Individual Entry Archive template, again immediately after the `<head>` tag:

```html
<link rel="home" href="<$MTBlogURL$>" title="Home" />
<MTEntryPrevious>
<link rel="prev" href="<$MTEntryLink$>" title="<$MTEntryTitle$>" />
</MTEntryPrevious>
<MTEntryNext>
<link rel="next" href="<$MTEntryLink$>" title="<$MTEntryTitle$>" />
</MTEntryNext>
```

In Greymatter, add this immediately after the `<head>` tag in your 4 Entry Page Templates:

```html
<link rel="home" title="Home" href="{{pageindexlink}}">
<link rel="prev" title="{{previousentrysubject}}" href="{{entrieswebpath}}/{{previousentrynumberpadded}}.html">
<link rel="next" title="{{nextentrysubject}}" href="{{entrieswebpath}}/{{nextentrynumberpadded}}.html">
```

In Radio, the entire matter is simplified by [Sjoerd Visscher][]'s Navigation Links For Radio, a set of macros to do exactly this.

1. [Download Navigation Links macros][macros].

2. Unzip the download and copy the 4 files (`navigationLinks.txt`,` nextDayLink.txt`, `prevDayLink.txt`, `permalinkUrl.txt`) into your Macros folder. In the standard installation on Windows, this would be `C:\Program Files\Radio UserLand\Macros`.

3. Insert this code in your Main Template, immediately after your `<head>` tag:
    ```xml
    <%navigationLinks()%>
    ```

Unfortunately, I do not know how to satisfactorily implement previous and next links in Manila or Blogger, but you can at least add the link to your home page, immediately after your `<head>` tag:

```html
<link rel="home" title="Home" href="http://url/of/your/home/page">
```

### Further reading

* Sjoerd Visscher: [Navigation links in your Radio Userland weblog][macros-about].

[icab]: http://www.icab.de/
[firebird]: http://www.mozilla.org/products/firebird/
[install a link toolbar]: http://cdn.mozdev.org/linkToolbar/

[Sjoerd Visscher]: http://w3future.com/weblog/
[macros]: http://w3future.com/weblog/gems/navigationLinks.zip
[macros-about]: http://w3future.com/weblog/2002/06/20.html#a110
