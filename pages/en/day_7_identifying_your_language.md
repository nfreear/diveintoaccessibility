---
layout: page
title: "Day 7: Identifying your language"
---

## Day 7: Identifying your language

You know what language you're writing in, so tell your readers... and their software.

### Who benefits?

1. [Jackie][] benefits. Her screen reader software (JAWS) needs to know what language your pages are written in, so it can pronounce your words properly when it reads them aloud. If you don't identify your language, JAWS will try to guess what language you're using, and it can guess incorrectly, especially if you quote source code or include other non-language content in your pages.
2. [Google][] benefits, even if you are writing in English, but especially if you are writing in some other language. According to the [Google Zeitgeist][], 50% of Google users search in languages other than English, and many of these users specify in their [Google preferences][] to only search for pages in specific languages. Google's language auto-detection algorithms are better than most, but why make Google's job more difficult?

### How to do it

First, get the right two-character language code. The code for English is "`en`"; the code for French is "`fr`"; German is "`de`". If you're writing in another language, [look up your language code here][iso]. Language codes are not case-sensitive.

Now put your language code in your `<html>` tag. Exactly how you do this depends on what version of HTML you're using. [Look at your `DOCTYPE`][day 6], then do one of the following:

1. If you're using any variant of HTML 4, change your `<html>` tag to this (use your own language code if not English):
    ```html
    <html lang="en">
    ```
2. If you're using any variant of XHTML 1.0, change your `<html>` tag to this (use your language code in both places):
    ```html
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
    ```
3. If you're using XHTML 1.1, change your `<html>` tag to this (again, insert your own language code):
    ```html
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
    ```

Like the `DOCTYPE`, you should identify your language on every page of your web site.

One additional note: if you have more than one language on a page, you can identify the language on any enclosing element. For instance, if your web site uses HTML 4 and is primarily in German, but you quote an article in English, you could mark it up like this:
```html
<html lang="de">
  ...
  <blockquote lang="en">
    ...
  </blockquote>
```

### Further reading

* [List of language codes][iso]
* [The `lang` attribute in the HTML specification][lang]
* [Jim Thatcher on `lang` attribute support in screen readers][thatcher]. He describes their language auto-detection algorithms as "flaky", and he would know, since he designed the algorithm for [Home Page Reader][]. Other screen readers have added support for the lang attribute since his comments were written, but their auto-detection algorithms are still flaky, making it even more important and useful to identify your language.
