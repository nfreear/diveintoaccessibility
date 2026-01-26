---
layout: page
title: "Caution! - Day 15: Defining keyboard shortcuts"
eleventyComputed:
  status: amber
---

## Caution!

### [Day 15: Defining keyboard shortcuts][day 15]

Defining `accesskey` attributes for links and other controls on your webpages can be problematic. Why?

The `accesskey` attribute was introduced in [HTML 4][html4:accesskey] in 1998, with the best of intentions. It provides a means for a site publisher to “...define keyboard shortcuts for frequently-used links or form fields.”

However, a number of problems soon became apparent:

1. There was no common standard, for which shortcut keys should perform which function.
2. There was no standard for how to alert users to what access keys were defined.
3. And most significantly, the danger of an `accesskey` conflicting with a pre-defined shortcut in the browser or in assistive technologies such as screen readers. Desktop screen readers such as [JAWS][] rely on many keyboard shortcuts.

The last point is why in 2018 [WCAG 2.1][] introduced a [Character Key Shortcuts][wcag2:shortcut] success criteria — a site can't define keyboard shortcuts, unless they can be [modified or switched off by the user][tech:g217].

On point 1, its worth noting that the [UK Government][govuk:accesskey] and [SAK2014][] attempted to standardise which access keys would do what, with the UK Government standard settling on numeric shortcuts.

As [WebAIM][] memorably says, [“A Good Idea Implemented Poorly”][webaim:accesskey].

So the best advise probably is, don't use `accesskey` on your website (unless you're prepared to work on functionality to disable or re-map the keys).

[html4:accesskey]: https://www.w3.org/TR/1998/REC-html40-19980424/interact/forms.html#adef-accesskey
[wcag 2.1]: https://www.w3.org/TR/WCAG21/
[wcag2:shortcut]: https://www.w3.org/WAI/WCAG22/quickref/#character-key-shortcuts
  "2.1.4 Character Key Shortcuts - Level A (Added in 2.1)"
[tech:g217]: https://www.w3.org/WAI/WCAG22/Techniques/general/G217
[wcag21:history]: https://www.w3.org/standards/history/WCAG21/
[webaim:accesskey]: https://webaim.org/techniques/keyboard/accesskey
[wats:accesskey]: https://web.archive.org/web/20120204224705/http://www.wats.ca/show.php?contentid=32
[wp:accesskey]: https://en.wikipedia.org/wiki/Access_key
[govuk:accesskey]: https://webarchive.nationalarchives.gov.uk/ukgwa/20100703000205/http://archive.cabinetoffice.gov.uk/e-government/resources/handbook/html/2-4.asp#2.4.4
[sak2014]: https://web.archive.org/web/20230322053553/https://www.standardaccesskeys.com/SAK2014/
  "“Standard Access Keys 2014”, archived 2023."
