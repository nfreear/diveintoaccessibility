---
layout: page
title: "Deprecated - Day 17: Defining acronyms"
eleventyComputed:
  status: amber
---

## Deprecated!

### Day 17: Defining acronyms

The `<acronym>` element is [deprecated][mdn:acronym-el] in HTML5.

Abbreviations of all kinds, including initialisms and acronyms should be explained in text, and can benefit from the use of the [`<abbr>`][mdn:abbr-el] element.

```html
<p>
  This site is run by the World Wide Web
  (<abbr title="World Wide Web">W3C</abbr>).
</p>
```

### Further reading

* WCAG quick reference: [Abbreviations][wcag:abbreviations].
* WCAG techniques: [Technique H28: … using the abbr element][wcag:tech-abbr].

[mdn:acronym-el]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/acronym
[mdn:abbr-el]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/abbr
[wcag:abbreviations]: https://www.w3.org/WAI/WCAG22/quickref/#abbreviations
[wcag:tech-abbr]: https://www.w3.org/WAI/WCAG22/Techniques/html/H28
