---
layout: page
title: "Deprecated - Day 20: Providing a summary for tables"
eleventyComputed:
  status: amber
---

## Deprecated!

### [Day 20: Providing a summary for tables][day 20]

The summary attribute on the `<table>` element is [deprecated][mdn:table-at] in HTML5.

Instead, use the [`<caption>`][mdn:caption-el] element, which is covered on [day 18][]. This ensures that the description of a data table is available to visual and non-visual users.

```html
<table>
  <caption>Concerts</caption>
  <tr>
    <th>Date</th>
    <th>Event</th>
    …
  </tr>
  …
</table>
```

### Further reading

* W3C: [Tables tutorial – captions & summary][w3c:table-tut]

[mdn:table-at]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table#attributes
[mdn:caption-el]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/caption
[w3c:table-tut]: https://www.w3.org/WAI/tutorials/tables/caption-summary/
