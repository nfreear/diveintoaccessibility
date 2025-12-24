---
layout: page
title: "Day 17: Defining acronyms"
---

## Day 17: Defining acronyms

<p class="firstparagraph">I used 50 acronyms and abbreviations on my own weblog last month: <acronym title="Americans With Disabilities Act">ADA</acronym>,
<acronym title="alternate">ALT</acronym>,
<acronym title="America Online">AOL</acronym>,
<acronym title="application interface">API</acronym>,
<acronym title="common gateway interface">CGI</acronym>,
<acronym title="content management system">CMS</acronym>,
<acronym title="cascading style sheet">CSS</acronym>,
<acronym title="control">CTRL</acronym>,
<acronym title="Department of Motor Vehicles">DMV</acronym>,
<acronym title="domain name system">DNS</acronym>,
<acronym title="document type definition">DTD</acronym>,
<acronym title="Electronic Frontier Foundation">EFF</acronym>,
<acronym title="Frequently Asked Questions list">FAQ</acronym>,
<acronym title="Free Software Foundation">FSF</acronym>,
<acronym title="GNU Free Documentation License">GFDL</acronym>,
<acronym title="Gemological Institute of America">GIA</acronym>,
<acronym title="GNU General Public License">GPL</acronym>,
<acronym title="hypertext markup language">HTML</acronym>,
<acronym title="Internet Explorer">IE</acronym>,
<acronym title="if I remember correctly">IIRC</acronym>,
<acronym title="Internet Infomation Server">IIS</acronym>,
<acronym title="Instant Outlining">IO</acronym>,
<acronym title="kilobytes">KB</acronym>,
<acronym title="K Desktop Environment">KDE</acronym>,
<acronym title="long description">LONGDESC</acronym>,
<acronym title="megabyte">MB</acronym>,
<acronym title="Microsoft Developer Network">MSDN</acronym>,
<acronym title="Microsoft Network">MSN</acronym>,
<acronym title="Movable Type">MT</acronym>,
<acronym title="Macintosh">Mac</acronym>,
<acronym title="North Carolina">NC</acronym>,
<acronym title="Outline Processor Markup Language">OPML</acronym>,
<acronym title="Peer To Peer">P2P</acronym>,
<acronym title="page down">PGDN</acronym>,
<acronym title="page up">PGUP</acronym>,
<acronym title="Public Broadcasting System">PBS</acronym>,
<acronym title="portable document format">PDF</acronym>,
<acronym title="Perceivable, Operable, Navigable, Understandable, Robust">PONUR</acronym>,
<acronym title="Rich Site Summary">RSS</acronym>,
<acronym title="Radio Userland">RU</acronym>,
<acronym title="Simple Object Access Protocol">SOAP</acronym>,
<acronym title="social security number">SSN</acronym>,
<acronym title="telecommunications device for the deaf">TDD</acronym>,
<acronym title="United States">US</acronym>,
<acronym title="Virtual Network Computing">VNC</acronym>,
<acronym title="World Wide Web Consortium">W3C</acronym>,
<acronym title="Web Content Accessibility Guidelines">WCAG</acronym>,
<acronym title="what you see is what you get">WYSIWYG</acronym>,
<acronym title="Windows">Win</acronym>,
<acronym title="extensible hypertext markup language">XHTML</acronym>, and
<acronym title="eXtensible Markup Language">XML</acronym>.
</p>

If you recognize all 50, congratulations; you have a long and prosperous future as a technical editor. If not, you'll appreciate the fact that I defined each of them with the `<acronym>` tag. Hover your cursor over each acronym to see what it stands for. This works in all modern browsers, and is harmless in Netscape 4.

You should define an acronym whenever you use it, or at least once per post.

### Who benefits?

* [Michael][] benefits. When Michael hovers his cursor over an acronym, [Opera][] displays the acronym title as a tooltip.
* [Bill][] benefits. [Mozilla][] goes even further, automatically rendering acronyms with a dotted underline. When Bill hovers his cursor over the acronym, Mozilla changes the cursor to a cursor + question mark, and then displays the acronym title as a tooltip. (You can override this default behavior with cascading style sheets, or use <acronym title="cascading style sheets">CSS</acronym> to get a similar effect in other browsers.)
* [Google][] benefits. Google indexes the acronym title as well as the acronym itself, so people can find your site whether they search for the acronym or the spelled-out description.
* I wish I could say that [Jackie][] benefits, but she doesn't. Neither [JAWS][] nor any of the other screen readers on the market currently support reading the titles of acronyms. I hope some day they will, and then you'll be ahead of the game.

### How to do it

The first time you use an acronym, mark it up with an `<acronym>` tag, like this:

```html
<acronym title="cascading style sheets">CSS</acronym>
```

Radio users can automate this markup by using shortcuts. From your Radio home page, click "Shortcuts" in the main navigation menu, then define the acronyms you use frequently. For example:

>Name: CSS
>
>Value: `<acronym title="cascading style sheets">CSS</acronym>`
>
>(Be sure to change the input type from "<acronym title="what you see is what you get">WYSIWYG</acronym>" to "Source" so you can type the <acronym title="hypertext markup language">HTML</acronym> directly.)

Then, in your post, simply type "CSS" (with the quotes), and Radio will render it with the acronym tag and the title, just as you defined it.

### How to do it: cascading style sheets

As an added bonus, you can change the look of all your acronyms using cascading style sheets. This works in all tools, not just Radio. Here is the rule I use to produce the dotted underline in all browsers (not just Mozilla):

```css
acronym {
  border-bottom: 1px dotted black;
}
```

And as an extra bonus, this is the rule I use in my print stylesheet to automatically spell out acronyms when printing my web pages. (This only works when printing from Mozilla and Opera, but it's harmless in other browsers.)

```css
acronym:after {
  content: " (" attr(title) ")";
}
```

### Further reading

Have you been using acronyms without knowing what they mean? Look them up.

* [Acronym Finder](http://www.acronymfinder.com/).
* [Acronym Database](http://www.ucc.ie/acronyms/).
* [Acronym Search](http://www.acronymsearch.com/).

### Postscript

Several fellow markup-obsessed gurus have correctly pointed out that there is an `<abbr>` tag for abbreviations. Unfortunately, no version of Internet Explorer for Windows supports it; no tooltips show up at all. Use `<acronym>`.
