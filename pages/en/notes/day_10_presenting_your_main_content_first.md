---
layout: page
title: "Somewhat flawed - Day 10: Presenting your main content first"
eleventyComputed:
  status: amber
---

## Somewhat flawed

### [Day 10: Presenting your main content first][day 10]

The concept of <q>presenting your main content first</q> is somewhat flawed, particularly as it is not a widely followed practice. What is important?

<!-- excerpt -->

1. A logical [reading order][] and [focus order][].
2. [Consistent navigation][].
3. The ability to [bypass or skip repeated blocks][wcag:bypass], such as site navigation.
4. [Don't surprise your users][pola] (make your site behave like other websites, unless you have an _extremely_ good reason!)

Fortunately, on the modern [mobile-oriented][] Web, layout-tables are rare. There main relevance is when designing [email templates][].

A modern implementation of layout tables should use [`role="presentation"`][role:presentation]:

```html
<table role="presentation">
  My layout table …
</table>
```

[reading order]: https://www.w3.org/WAI/WCAG22/quickref/#meaningful-sequence
[focus order]: https://www.w3.org/WAI/WCAG22/quickref/#focus-order
[consistent navigation]: https://www.w3.org/WAI/WCAG22/quickref/#consistent-navigation
[wcag:bypass]: https://www.w3.org/WAI/WCAG22/quickref/#bypass-blocks
[pola]: https://en.wikipedia.org/wiki/Principle_of_least_astonishment
[mobile-oriented]: https://en.wikipedia.org/wiki/Responsive_web_design
[email templates]: https://designmodo.com/html-css-emails/
[role:presentation]: https://www.w3.org/TR/wai-aria/#presentation
