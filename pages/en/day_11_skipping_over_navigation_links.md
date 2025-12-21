---
layout: page
title: "Day 11: Skipping over navigation links"
---

## Day 11: Skipping over navigation links

If you didn't manage to hack your templates to present your main content first, here's a compromise: provide an link to skip over your navigation links. It's not a perfect solution (presenting your main content first is better), but it's an accepted compromise that many sites use.

This "skip link" is just a regular `<a>` tag, like any other link, but we'll use <abbr title="cascading style sheets">CSS</abbr> to hide it from visual browsers like Internet Explorer and Netscape. It won't affect your page layout at all; it will be completely invisible.

### Who benefits?

1. [Marcus][] benefits. When he visits your page, [Lynx][] will display the link and allow him to skip over your navigation bar and go straight to your main content. See [Day 10: Presenting your main content first][day 10] for an example of why this is so important.
2. [Jackie][] benefits. When she visits your page, [JAWS][] will read the skip link and allow her to skip over your navigation bar and go straight to your main content.

### How to do it

First, use [Lynx Viewer][] on your own home page to determine whether your navigation bar is presented before your main content. If your main content comes first, this tip does not apply to you; enjoy your day off.

Now define a <abbr title="cascading style sheets">CSS</abbr> rule for the skip links, to make them invisible to visual browsers. If you have an external stylesheet, put this rule at the end of it. (If you have multiple external stylesheets, put this rule in the Netscape 4-friendly one.) If you just have a `<style>` section at the top of your template, add this rule immediately after the `<style>` tag.

```css
.skiplink {display:none}
```

Next, insert the actual skip link immediately after your site name and site description. Can't find them? Search for the appropriate template variables.

* Movable Type: search for `<$MTBlogTitle$>` and `<$MTBlogDescription$>`.
* Greymatter: there is no specific template variable; search for the name and tagline of your web site.
* Radio: search for `<%siteName%>` and `<%description%>`.
* Manila: search for `{homePageLink (siteName)}` and `{tagLine}`.
* Blogger: search for `<$BlogTitle$>`.

Found them? Immediately after your site name and site description, insert the skip link:

```html
<a class="skiplink" href="#startcontent">Skip over navigation</a>
```

OK, now you need an anchor tag where the skip link should point to; this should be at the start of your main content. Can't find your main content? Don't panic. Template variables save the day again.

* Movable Type: search for `<MTEntries>`.
* Greymatter: on your Main Index Template, search for `{{logbody}}`. On your Entry Page Templates, search for `{{entrymainbody}}`.
* Radio: search for `<%bodytext%>`.
* Manila: search for `{bodytext}`.
* Blogger: search for `<Blogger>`.

Now, the format of your anchor tag depends on what kind of <abbr title="hypetext markup language">HTML</abbr> you're using. [Look at your DOCTYPE][day 6], then do one of the following:

1. If you're using any variant of `HTML 4`, add this just before your main content:
    ```html
    <a name="startcontent"></a>
    ```

2. If you're using any variant of `XHTML 1.0`, add this just before your main content:
    ```html
    <a name="startcontent" id="startcontent"></a>
    ```

3. If you're using `XHTML 1.1`, add this just before your main content:
    ```html
    <a id="startcontent"></a>
    ```

You should include this kind of skip link on every page of your web site, so add it to all your templates.

[lynx]: http://www.fdisk.com/doslynx/lynxport.htm
[jaws]: http://www.freedomscientific.com/fs_products/software_jaws.asp
[lynx viewer]: http://www.delorie.com/web/lynxview.html

[day 10]: day_10_presenting_your_main_content_first.html
[day 6]: day_6_choosing_a_doctype.html

[jackie]: day_1_jackie.html
[michael]: day_2_michael.html
[bill]: day_3_bill.html
[lillian]: day_4_lillian.html
[marcus]: day_5_marcus.html
