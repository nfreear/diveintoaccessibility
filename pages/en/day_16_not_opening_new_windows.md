---
layout: page
title: "Day 16: Not opening new windows"
---

## Day 16: Not opening new windows

The one thing every web user understands is the "Back" button. It's an integral part of browsing the web. Follow a link, go back. Explore a search engine result, go back. Even my father can do this, and he's still excited when he can double-click the "Internet" icon successfully on the first try.

In all dominant browsers, using the `<a target="_blank">` tag to force a link to open in a new window _breaks_ the Back button. The new window does not retain the browser history of the previous window, so the "Back" button is disabled. This is incredibly confusing, even for me, and I've been using the web for 10 years. In 2002, it's amazing that people still do this. Don't do this. Don't force links to open in new windows.

Please note that this tip is about you as a web designer, not you as a web user. If you want to open new windows while you browse, go right ahead. In Internet Explorer for Windows, hold down the <kbd>Shift</kbd> key while you click a link to open the link in a new window. In Netscape 6 and Mozilla, hold down <kbd>Control</kbd>. In Internet Explorer for Mac, hold down <kbd>Command</kbd>. (Some browsers such as Opera support advanced combinations like <kbd>Control</kbd> + <kbd>Shift</kbd>  + click to open a link in a new window in the background.) The point is that the choice of whether a link will open in a new window should be the end user's choice, not the web designer's choice.

### Who benefits?

* [Jackie][] benefits. Although [JAWS][] does announce "New browser window" when a link opens a new window, this is easy to miss, as it is spoken wedged between the reading of the link text and reading of the new page. [Home Page Reader][] has a better solution; it plays a distinctive sound every time a new window opens. And [Window Eyes][], another popular screen reader, gives no indication of new windows at all.

    And regardless, the "Back" button is still broken. If Jackie misses the "new browser window" announcement, she can not simply glance at her taskbar and see that two browser windows are open. She will need to read through her entire list of open windows, either using the JAWS-specific shortcut <kbd>INSERT+F10</kbd> to get a window list, or the standard <kbd>ALT+TAB</kbd>.

* [Lillian][] benefits. Her Internet Explorer window is always maximized (so she can see it), and new windows also open maximized by default. Furthermore, Windows XP groups multiple windows of the same application in the taskbar, so there is virtually no visible indication that a new window has even been opened. Suddenly, the "Back" button is disabled for no apparent reason, and Lillian has no idea why. If you were expecting her to read the rest of your web site after following that link, you can forget it.

* [Bill][] benefits. His sister has set Mozilla to use tabbed browsing, so that Bill can look at the tabs and quickly remind himself which windows he has open, and also so he can quickly switch between them (using <kbd><abbr title="control">CTRL</abbr>+<abbr title="page up">PAGEUP</abbr></kbd> and <kbd><abbr title="control">CTRL</abbr>+<abbr title="page down">PAGEDOWN</abbr></kbd> on his handy dandy keyboard extension). Links that are forced to open in a new window will open an entirely new Mozilla window. Not only will this bypass his tabbed browsing preferences, but it will make it appear that all his open windows have disappeared, since the new browser window will not show the tabs that were open in the previous window.

### How to do it

1. Don't use `<a target="_blank">` to force links to open in a new window.
2. If you absolutely must open a link in a new window, explicitly warn the reader. This is a non-optimal, compromise solution, usually brought about by business requirements of "not being associated" with external content. For example, [CNN's "related sites" page][cnn] does this.
3. If you have a "Links open new windows" checkbox, make sure it is _off_ by default.

### Further reading

* Jakob Nielsen: [The Top Ten _New_ Mistakes of Web Design][useit]. "#1: Breaking or Slowing Down the Back Button. #2: Opening New Browser Windows."
* W3C Web Accessibility Initiative: [Example for Checkpoint 10.1][wai] gives an example of how to warn users if you have a single link that you absolutely must open in a new window.
* W3C Validator mailing list: [Re: opening a link in a new window][val]. For those who care about this sort of thing, you should know that the target attribute of the `<a>` tag is deprecated, and will prevent your pages from validating in <abbr title="hypertext markup language">HTML</abbr> 4.01 Strict, <abbr title="extensible hypertext markup language">XHTML</abbr> 1.0 Strict, or any future version.
* <abbr title="Web Accessibility in Mind">WebAIM</abbr> mailing list: [`mailto:` links open new windows][mailto]. The consensus is that mailto: links are not an accessibility problem, even though they generally open your email client in a new window, because this behavior is completed determined on the client side. A web-based mail form (like Radio uses) may be a better overall solution, provided the form is accessible. A web-based form will work for visitors without integrated email clients (by misconfiguration or by circumstance, such as being in a public lab), and it protects your email address from spam harvesters without resorting to inaccessible Javascript tricks. On the other hand, some people really like their email clients due to familiarity, functionality (such as built-in spell checking), and the ability to archive outgoing messages. I am not recommending one method over another.

[cnn]: http://www.cnn.com/US/sites.html
[useit]: http://www.useit.com/alertbox/990530.html
[wai]: http://www.w3.org/WAI/wcag-curric/sam77-0.htm
[val]: http://lists.w3.org/Archives/Public/www-validator/2002Apr/0100.html
[mailto]: http://www.webaim.org/discussion/mail_thread.php?thread=432
