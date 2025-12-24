---
layout: page
title: "Day 30: Creating an accessibility statement"
---

## Day 30: Creating an accessibility statement

If you've implemented any of the tips in this series, create an accessibility statement that lists the accessibility features of your site.

### Who benefits?

* [Bill][] benefits. He makes extensive use of the keyboard for navigation, and he would use your [`accesskey` keyboard shortcuts][day 15] if he knew what they were. Unfortunately, Mozilla does not announce them or make them visible in any way, so you'll need to list them yourself.
* Many other users benefit, by learning how to use their own software better. For instance, [Lillian][] did not know that she could set her default text size in her browser until someone told her how to do it; now she can more easily read your site (that is, if you use [relative font sizes][day 26]). Netscape and Mozilla users may not know that they can turn on the Site Navigation Bar to take advantage of your [LINK-based navigation aids][day 9]. ("View" menu, "Show/hide", "Site Navigation Bar", "Show Only AS Needed". Unfortunately, this feature was pulled from Mozilla 1.0 final at the last minute, but it's back in 1.1.)
* Fellow web designers benefit, by learning more about accessibility and seeing that you've taken the time to implement these tips.

### How to do it

In Radio or Manila, you can create your accessibility statement as a story ("Stories" in the Radio or Manila toolbar) so it has its own URL. Otherwise, just create a new post. Make a note of the URL after saving; you'll need it later.

The first thing you should do is list the [`accesskey` keyboard shortcuts][day 15] you've defined, since most browsers do not announce them or make them visible in any way. Also list the `accesskey` for your accessibility statement itself (which will be `accesskey="0"`, as we'll see in a minute).

After that, you should list all of the accessibility features that you've implemented throughout this series. If you implemented some tips but not others, just mention the ones you actually implemented. This will likely be an enlightening experience, like updating your résumé for the first time since taking a new job and realizing just how much stuff you've actually done. You've done a lot.

If you like, you can also mention briefly why you implemented each feature ("easier to use with screen readers", "for users of text-only browsers", "for users who can not distinguish colors", and so forth). Remember, an accessibility statement will be read by more than disabled users; it should be both informative (for users who directly benefit) and educative (for fellow web designers who choose to follow your example). Or, instead of explaining them yourself, you can link to individual days in this book, or just [link to the book's home page][home].

Finally, link to your accessibility statement from every page of your site, either in your site-wide navigation bar or in your page footer. Give the link a title and an `accesskey="0"`, like this:

```html
<a href="/accessibility_statement.html" title="accessibility features of this site" accesskey="0">Accessibility statement</a>
```

### Further reading

* [Accessibility statement for diveintomark.org][diveintomark].
* [Accessibility statement for diveintoaccessibility.org][accessibility statement]. Feel free to use either of these as a template, including structure, wording, and links to further reading.

[diveintomark]: http://diveintomark.org/accessibility_statement.html
