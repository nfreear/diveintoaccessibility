---
layout: page
title: "Incorrect implementation - Day 11: Skipping over navigation links"
eleventyComputed:
  status: amber
---

## Incorrect implementation

### [Day 11: Skipping over navigation links][day 11]

[Skip links][] are as relevant now as they were in 2002, but there are problems…

Unfortunately, the original implementation appears to have never been correct or keyboard accessible. Styling a link with the CSS `display:none` removes it from the keyboard focus order.

Given the following HTML:
```html
<a class="skiplink" href="#startcontent">Skip to main content</a>
```

An appropriate CSS implementation would be _(needs more testing!)_:
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

However you implement your skip links, you should [test with a keyboard][].

### Further reading

* WebAIM: [skip navigation][webaim-skip]
* CSS Tricks: [How to Create a “Skip to Content” Link][csstricks-skip], by Paul Ryan (2021)

[skip links]: https://www.w3.org/WAI/WCAG22/quickref/#bypass-blocks
[test with a keyboard]: https://webaim.org/techniques/keyboard/#testing
[webaim-skip]: https://webaim.org/techniques/skipnav/
[test with a keyboard]: https://webaim.org/techniques/keyboard/#testing
[csstricks-skip]: https://css-tricks.com/how-to-create-a-skip-to-content-link/
