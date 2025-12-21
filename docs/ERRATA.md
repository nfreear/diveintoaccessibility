← [Readme][]

# Errata #

Also see the [proposal][].

Below is a list of some significant errors and caveats.

Note, this is not meant as a criticism of the original author, Mark Pilgrim — that would be particularly unfair at the distance of more than 20 years! Instead, the '_Errata_' are listed below to help prevent readers making mistakes and potentially learning bad accessibility techniques.

The status of each page is also documented in a [spreadsheet on Google Docs][spreadsheet].

## [Day 6: Choosing a DOCTYPE][day 6]

The concept is correct, but perhaps unsurprisingly after 20+ years, the specifics have changed. For [HTML5][], use the following, short `doctype`:

```html
<!doctype html>
```

* [Semantics - Dive into HTML5, by Mark Pilgrim][doctype]

## [Day 10: Presenting your main content first][day 10]

The concept of "presenting your main content first" is somewhat flawed. What is important?

1. A logical [reading order][] and [focus order][].
2. [Consistent navigation][]
3. The ability to [bypass or skip repeated blocks, such as site navigation][skip links]
4. [Don't surprise your users][surprise] (make your site behave like other websites, unless you have an extremely good reason!)

Fortunately, on the modern [mobile-oriented][mobile] Web, layout-tables are rare. There main relevance is when designing [email templates][].

A modern implementation of layout tables should use [`role="presentation"`][presentation]:

```html
<table role="presentation"> My layout table … </table>
```

## [Day 11: Skipping over navigation links][day 11]

[Skip links][] are as relevant now as they were in 2002.

Unfortunately, the original implementation appears to have never been correct or keyboard accessible. Styling a link with the CSS `display:none` removes it from the keyboard focus order.

Given the following HTML:
```html
<a class="skiplink" href="#startcontent">Skip to main content</a>
```

An appropriate CSS implementation would be (_needs testing!_):
```css
.skiplink {
  position: absolute;
  height: 0;
  width: 0;
  overflow: hidden;
  /* … */
}

.skiplink:focus {
  height: auto;
  width: auto;
  background-color: white;
  color: blue;
  /* … */
}
```

However you implement your skip links, you should [test with a keyboard](https://webaim.org/techniques/keyboard/#testing).

* [WebAIM: skip navigation](https://webaim.org/techniques/skipnav/)
* [How to Create a “Skip to Content” Link, by Paul Ryan, CSS Tricks (2021)](https://css-tricks.com/how-to-create-a-skip-to-content-link/)

## [Day 14: Adding titles to links][day 14]

Adding a `title` attribute to links is a technique that should be discouraged. It can be termed an [anti-pattern][], as it actively excludes multiple groups of users, including keyboard users, mobile/ touch users, screen reader users (mostly) and so on.

Useful links:

* [Accessibility concerns - title - Mozilla Developer Network][title-mdn]
* [Using the HTML title attribute – updated March 2020, by Steve Faulkner, TPGi][title-tpgi]
* [Tooltips & Toggletips, by Heydon Pickering, Inclusive Components (2017)][title-inc]
* [The Trials and Tribulations of the Title Attribute, by Scott O'Hara (2017)][title-24]

## [Day 17: Defining acronyms][day 17]

The `<acronym>` element is [deprecated](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/acronym) in HTML5.

Abbreviations of all kinds, including initialisms and acronyms should be explained in text, and can benefit from the use of the [`<abbr>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/abbr) element.

## [Day 20: Providing a summary for tables][day 20]

The `summary` attribute on the `<table>` element is [deprecated](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table#attributes) in HTML5.

Instead, use the [`<caption>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/caption) element, which is covered on [day 18][]. This ensures that the description of a data table is available to visual and non-visual users.

## [Day 21: Ignoring spacer images][day 21]

Transparent [spacer images][] are (almost) never used on the modern Web. However, the discussion on this page is very relevant to [decorative images][].

---

← [Readme][]

[readme]: https://github.com/nfreear/diveintoaccessibility#readme
[proposal]: ./PROPOSAL.md
[spreadsheet]: https://docs.google.com/spreadsheets/d/1HsVv_wrJu-U94OjIu4LGLMMYWNJMBS9LkFlkFILXSvk/edit?gid=536522970#gid=536522970

[day 6]: https://nfreear.github.io/diveintoaccessibility/day_6_choosing_a_doctype.html
[day 10]: https://nfreear.github.io/diveintoaccessibility/day_10_presenting_your_main_content_first.html
[day 11]: https://nfreear.github.io/diveintoaccessibility/day_11_skipping_over_navigation_links.html
[day 14]: https://nfreear.github.io/diveintoaccessibility/day_14_adding_titles_to_links.html
[day 14 src]: https://github.com/nfreear/diveintoaccessibility/blob/master/day_14_adding_titles_to_links.html
[day 17]: https://nfreear.github.io/diveintoaccessibility/day_17_defining_acronyms.html
[day 18]: https://nfreear.github.io/diveintoaccessibility/day_18_giving_your_calendar_a_real_caption.html
[day 20]: https://nfreear.github.io/diveintoaccessibility/day_20_providing_a_summary_for_tables.html
[day 21]: https://nfreear.github.io/diveintoaccessibility/day_21_ignoring_spacer_images.html

[reading order]: https://www.w3.org/WAI/WCAG22/quickref/#meaningful-sequence
[focus order]: https://www.w3.org/WAI/WCAG22/quickref/#focus-order
[consistent navigation]: https://www.w3.org/WAI/WCAG22/quickref/#consistent-navigation
[skip navigation]: https://www.w3.org/WAI/WCAG22/quickref/#bypass-blocks
[skip links]: https://www.w3.org/WAI/WCAG22/quickref/#bypass-blocks
[surprise]: https://en.wikipedia.org/wiki/Principle_of_least_astonishment
[mobile]: https://en.wikipedia.org/wiki/Responsive_web_design
[email templates]: https://designmodo.com/html-css-emails/
[presentation]: https://www.w3.org/TR/wai-aria/#presentation

[title-mdn]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/title#accessibility_concerns
[title-spec]: https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute
[title-tpgi]: https://www.tpgi.com/using-the-html-title-attribute-updated/
[title-inc]: https://inclusive-components.design/tooltips-toggletips/
[title-24]: https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/

[html5]: https://html.spec.whatwg.org/
[doctype]: https://mislav.github.io/diveintohtml5/semantics.html#the-doctype
[doctype]: http://diveintohtml5.it/semantics.html#the-doctype
[anti-pattern]: https://en.wikipedia.org/wiki/Anti-pattern
[spacer images]: https://en.wikipedia.org/wiki/Spacer_GIF
[decorative images]: https://www.w3.org/WAI/tutorials/images/decision-tree/
