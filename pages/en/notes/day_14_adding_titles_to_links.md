---
layout: page
# layout: notes_page
# layout: commentary
title: "Don't do this! - Day 14: Adding titles to links"
eleventyComputed:
  status: red
---

## Don't do this!

### Day 14: Adding titles to links

Adding a `title` attribute to links is a technique that should be discouraged. It could be termed an [anti-pattern][], as it excludes multiple groups.

The excluded user groups include:

* Keyboard only users.
* Mobile and touch users.
* Screen reader users.
* Those who struggle with fine motor control.
* Those with cognitive impairments.

### Further reading

* Mozilla Developer Network: [title - accessibility concerns][mdn:title-at]
* Steve Faulkner, TPGi: [Using the HTML title attribute – updated March 2020][tpgi:title-at]
* Heydon Pickering, Inclusive Components: [Tooltips & Toggletips (2017)][inc:title-at]
* Scott O'Hara: [The Trials and Tribulations of the Title Attribute (2017)][24a11y:title-at]

[mdn:title-at]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/title#accessibility_concerns
[html5:title-at]: https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute
[tpgi:title-at]: https://www.tpgi.com/using-the-html-title-attribute-updated/
[inc:title-at]: https://inclusive-components.design/tooltips-toggletips/
[24a11y:title-at]: https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/
[anti-pattern]: https://en.wikipedia.org/wiki/Anti-pattern
