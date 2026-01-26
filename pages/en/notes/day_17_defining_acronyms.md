---
layout: page
title: "Deprecated - Day 17: Defining acronyms"
eleventyComputed:
  status: amber
---

## Deprecated!

### [Day 17: Defining acronyms][day 17]

The `<acronym>` element is [deprecated][mdn:acronym-el] in HTML5.

To quote section [3.5 Obsolete Elements][arch:obsolete-el] of "Differences from HTML4", published by the [WHATWG][],,
> `acronym` is not included because it has created a lot of confusion…

Abbreviations of all kinds, including initialisms and acronyms should be explained in text, and can benefit from the use of the [`<abbr>`][mdn:abbr-el] element.

```html
<p>
  This site is run by the World Wide Web
  (<abbr title="World Wide Web">W3C</abbr>).
</p>
```

Note, the `<abbr>` element has long been supported by [evergreen][] browsers, including [Firefox][], [Chrome][], [Edge][] and [Safari][].

### Further reading

* WCAG 2 quick reference: [Abbreviations][wcag:abbreviations].
* WCAG 2 techniques: [Technique H28: … using the abbr element][wcag:tech-abbr].

[arch:obsolete-el]: https://web.archive.org/web/20180624205318/https://html-differences.whatwg.org/#obsolete-elements
[so:acronym]: https://stackoverflow.com/questions/74719324/why-centre-and-acronym-tags-are-removed-in-html5-since-both-tags-are-working-fin
[whatwg]: https://whatwg.org/
[mdn:acronym-el]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/acronym
[mdn:abbr-el]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/abbr
[wcag:abbreviations]: https://www.w3.org/WAI/WCAG22/quickref/#abbreviations
[wcag:tech-abbr]: https://www.w3.org/WAI/WCAG22/Techniques/html/H28

[evergreen]: https://www.w3.org/2001/tag/doc/evergreen-web/#updates
[chrome]: https://www.google.com/chrome/
[edge]: https://microsoft.com/edge
[firefox]: https://www.firefox.com/
[safari]: https://www.apple.com/safari/
