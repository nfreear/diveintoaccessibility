---
layout: page
title: "Day 6: Choosing a DOCTYPE"
---

## Day 6: Choosing a DOCTYPE

You start your sentences with a capital letter; start your HTML with a `DOCTYPE`. It's just basic grammar.

### Who benefits?

You benefit. Many of the tips in the rest of this series will require you to know what version of HTML you're using, because the instructions will be slightly different. So figure it out now, or add one if you don't have one.

### How to do it

You may already have a `DOCTYPE`. View source on your home page; your `DOCTYPE` (if you have one) will be at the very top, even before the `<html>` tag.

* If you're using the default template of Movable Type, your `DOCTYPE` will probably include the phrase `"XHTML 1.0 Transitional"`. This is fine.
* If you're using one of the default templates of Radio Userland, Manila, or Blogger, your `DOCTYPE` will probably include `"HTML 4.01 Transitional"`. This is also fine.
* Other valid DOCTYPEs include phrases like `"HTML 4.01 Strict"`, `"XHTML 1.0 Strict"`, `"XHTML 1.1"`, and a few others. These are all fine.

If you have a `DOCTYPE`, don't change it. However, if your source shows no `DOCTYPE` before your `<html>` tag, add this one:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

For technical reasons that I would rather not go into at the moment (see the "Further Reading" section below if you're interested), it is possible that you will see slight changes in your page layout after adding this DOCTYPE. If (and only if) this happens to you, you can compromise and use half a `DOCTYPE` instead, like this:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
```

Note that every page of your web site should include a `DOCTYPE`, so you should check all your templates.

* Movable Type users should check the "Main Index", "Master Archive Index", "Category Archive", "Date-Based Archive", and "Individual Entry Archive" templates, plus any other archive templates you have created manually.
* Radio Userland and Manila users should check both the "Main template" and the "Home page template".
* Greymatter users should check "Main Index-Related Templates", "Archive-Related Templates", and "Entry-Related Templates".
* Blogger users should put a `DOCTYPE` in your main template. If your "Archive template" is a separate page (that is, if it has an `<html>` tag at the top), it should also have a `DOCTYPE`.

The important thing to know for the rest of the series is whether you're using `HTML 4` (any variant), `XHTML 1.0` (any variant), or `XHTML 1.1`. You'll see why tomorrow.

### Further reading

* A List Apart: [Fixing Your Site With The Right DOCTYPE][doctype]
* <abbr title="Microsoft Developer Network">MSDN</abbr>: [Quirks mode in IE 6][ie6-quirk]. (Note: this site does not work in some versions of Netscape and Mozilla. This is Microsoft's fault, not mine.)
* [Quirks mode in Mozilla][moz-quirk].

[doctype]: http://www.alistapart.com/stories/doctype/
[ie6-quirk]: http://msdn.microsoft.com/workshop/author/css/overview/cssenhancements.asp
[moz-quirk]: http://www.mozilla.org/docs/web-developer/quirks/
