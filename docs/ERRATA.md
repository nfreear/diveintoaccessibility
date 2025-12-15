# Errata #

Below is a list of some significant errors and caveats.

Note, this is not meant as a criticism of the original author — that would be particularly unfair at the distance of more than 20 years! Instead, the '_Errata_' are listed below to help prevent readers making mistakes and potentially learning bad accessibility techniques.

## [Day 14: Adding titles to links][day 14]

Adding a `title` attribute to links is a technique that should be discouraged. It could be termed an '_anti-pattern_', as it actively excludes multiple groups of users, including keyboard users, mobile/ touch users, screen reader users (mostly) and so on.

Useful links:
* [Accessibility concerns - Mozilla Developer Network][title-mdn]
* [Using the HTML title attribute – updated March 2020, by Steve Faulkner, TPGi][title-tgpi]
* [Tooltips & Toggletips, by Heydon Pickering, Inclusive Components (2017)][title-inc]
* [The Trials and Tribulations of the Title Attribute, by Scott O'Hara (2017)][title-24]

[spreadsheet]: https://docs.google.com/spreadsheets/d/1HsVv_wrJu-U94OjIu4LGLMMYWNJMBS9LkFlkFILXSvk/edit?gid=536522970#gid=536522970

[day 14]: https://nfreear.github.io/diveintoaccessibility/day_14_adding_titles_to_links.html
[day 14 src]: https://github.com/nfreear/diveintoaccessibility/blob/master/day_14_adding_titles_to_links.html

[title-mdn]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/title#accessibility_concerns
[title-spec]: https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute
[title-tpgi]: https://www.tpgi.com/using-the-html-title-attribute-updated/
[title-inc]: https://inclusive-components.design/tooltips-toggletips/
[title-24]: https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/
