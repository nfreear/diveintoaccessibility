---
layout: page
title: "Day 19: Using real table headers"
---

## Day 19: Using real table headers

If you have a calendar on your web site, it should be rendered as an HTML table. There have been a few attempts to create pure-CSS calendars. This is misguided; calendars are data tables, and should be marked up as such.

The most important thing about a data table is marking up the headers properly. In the case of a calendar, this means the days of the week along the top. You should definitely include headers for the days of the week; if you don't want them actually visible, you can make them invisible with CSS. (I do this on my own weblog.) But the headers need to be there nonetheless, because screen readers rely on them to help blind users navigate through the table without getting lost.

The thing about a calendar (and any data table, really, but we're mostly talking about calendars today) is that it's very easy to use if you can see it all at once, but very difficult to use if you can only see one day at a time. Imagine that you have a day-by-day calendar on your desk, but each page lists only the day of the month, not the day of the week. Page after page: 1, 2, 3, 4, 5, 6, 7... Today is 4, which I happen to know is a Thursday. Now skip ahead to 11, 12, 13. Quick: which day of the week is 13? The page doesn't tell you; you have to keep track of it yourself.

This is what it's like for a blind user to navigate a calendar without proper headers. You get a bunch of numbers, but no context to keep track of them. Adding proper headers to the calendar allows screen reader software to associate the table header (day of the week) with the table data (day of the month), and it reads them together. "Thursday 4, Thursday 11, Friday 12, Saturday 13." Oh, it's a Saturday.

Note I said proper headers. Putting the days of the week in `<td>` tags in the first row is not enough. They need to be `<th>` tags instead. Most weblog templates get this wrong, but it's simple enough to fix, and your calendar will look exactly the same in visual browsers once you're done.

### Who benefits?

1. [Jackie][] benefits. When she encounters your calendar, [JAWS][] first [reads the caption][day 18], then announces the headers, then Jackie can hold down <kbd>Control + ALT</kbd> and move through the table with the arrow keys. As she moves, JAWS announces the header (day of the week) and the cell data (day of the month).

    All major screen readers allow this kind of table navigation. [Home Page Reader][] allows users to switch to "Table Navigation" mode (<kbd>ALT+T</kbd>), then move through the calendar without holding down additional modifier keys. Home Page Reader actually goes one step beyond JAWS. As we'll see in a minute, you can define a shorter (or longer) title for each table header (sort of like [adding a title to a link][day 14]), and Home Page Reader will read that instead of the original table header text. This means you can visually display your days of the week as "Sun", "Mon", "Tue", but you can tell Home Page Reader to read them as "Sunday", "Monday", "Tuesday". Cool.

### How to do it

If you didn't do it already, make sure your calendar has a real caption. The <caption> tag must be the first thing after the `<table>` tag, and the row of `<th>` tags should be the first thing after that.

In Movable Type, find the calendar in your Main Index Template. (Again, searching for "calendarhead" will probably find it.) Immediately after the `<caption>`, you'll see the days of the week defined like this:
```html
<tr>
<td align="center"><span class="calendar">Sun</span></td>
<td align="center"><span class="calendar">Mon</span></td>
<td align="center"><span class="calendar">Tue</span></td>
<td align="center"><span class="calendar">Wed</span></td>
<td align="center"><span class="calendar">Thu</span></td>
<td align="center"><span class="calendar">Fri</span></td>
<td align="center"><span class="calendar">Sat</span></td>
</tr>
```

Change it to this:
```html
<tr>
<th abbr="Sunday" align="center"><span class="calendar">Sun</span></th>
<th abbr="Monday" align="center"><span class="calendar">Mon</span></th>
<th abbr="Tuesday" align="center"><span class="calendar">Tue</span></th>
<th abbr="Wednesday" align="center"><span class="calendar">Wed</span></th>
<th abbr="Thursday" align="center"><span class="calendar">Thu</span></th>
<th abbr="Friday" align="center"><span class="calendar">Fri</span></th>
<th abbr="Saturday" align="center"><span class="calendar">Sat</span></th>
</tr>
```

Two things going on here: all the `<td>` tags change to `<th>`, and they each get an `"abbr"` attribute to specify the full name of the day of the week. (The `"abbr"` attribute can serve a dual purpose. For very long table headers, it serves as an abbreviation; hence the name. But for very short table headers, it serves as a longer version, which is what we're doing here.)

In Radio, the procedure is similar to what you did yesterday, giving the table a real caption.

1. In Radio, open the actual Radio application. On Windows, right-click on the little Radio icon in your system tray and select "Open Radio".
2. Under the "Tools" menu, select "Developers", then "Jump..." (<kbd>Control+J</kbd>). Jump to "system.verbs.builtins.radio.weblog.drawCalendar" (no quotes).
3. Now go to "Edit" menu, "Find and Replace", "Find..." (<kbd>Control+F</kbd>) and find "addDayName". This should reveal and highlight the addDayName function. Double-click the triangle to reveal the actual function code, which should look like this:
    ```js
    on addDayName (name)
      add ("<td width=\"19\" height=\"10\" align=\"center\" style=\"font-size:9px\">" + name + "</td>")
    ```

4. Change it to this:
    ```js
    on addDayName (name, fullname)
      add ("<th abbr=\"" + fullname + "\" width=\"19\" height=\"10\" align=\"center\" style=\"font-size:9px\">" + name + "</th>")
    ```

5. Now double-click on the "for i = 1 to 7" line just below it to see this:
    ```js
    for i = 1 to 7
      addDayName (radio.string.getLocalizedString ("dayOfWeekShort." + i))
    ```

6. And change it to this:
    ```js
    for i = 1 to 7
      addDayName (radio.string.getLocalizedString ("dayOfWeekShort." + i), radio.string.getLocalizedString ("dayOfWeek." + i))
    ```

### Very important note about layout tables

Tables used exclusively for visual layout have a completely different set of rules. Do not use `<th>` tags on layout tables. Aside from tweaking your tables to [present your main content first][day 10], there's very little you need to do to make layout tables accessible. We'll discuss one small thing tomorrow.

### Further reading

If you need to mark up data tables more complex than a calendar (like tables with multiple levels of headers and subheaders), you're on your own. Here are some starting points:

* Jim Byrne: [Table Manners][].
* WebAIM: [Create tables that transform gracefully][webaim table].
* Kynn Bartlett: [Understanding Accessible Table Markup][bartlett table].

[table manners]: http://www.mcu.org.uk/articles/tables.html
[webaim table]: http://www.webaim.org/tutorials/tables
[bartlett table]: http://access.idyllmtn.com/tables/
