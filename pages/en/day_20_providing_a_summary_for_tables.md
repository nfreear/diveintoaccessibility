---
layout: page
title: "Day 20: Providing a summary for tables"
---

## Day 20: Providing a summary for tables

The final piece of marking up tables is providing a summary. The summary of a table is never displayed in visual browsers; it is exclusively designed for screen readers and speech browsers. It is exactly what it sounds like: a summary, a longer description than the caption. It is usually read immediately before the caption.

Every table should have a summary. If you have a calendar, the summary can be as simple as "Monthly calendar with links to each day's posts." If you use tables for layout, you should give each of those tables an empty summary, to indicate that the table is used exclusively for visual layout and not for presenting tabular data. (This is a similar concept to providing an empty <abbr title="alternative">ALT</abbr> attribute on images used exclusively for visual spacing. We'll discuss these "spacer images" on Monday.)

### Who benefits?

1. [Jackie][] benefits. When [JAWS][] encounters your calendar, Jackie hears "Summary: Monthly calendar with links to each day's posts." Then she hears the caption, then she hears the table headers, then she can navigate through the calendar.
2. [iCab][] users benefit. iCab can use the built-in text-to-speech capabilities of the Mac OS to read web pages, and it will read the summary of any table that defines one.

### How to do it: calendar

In Movable Type, find the calendar in your Main Index Template. (Again, searching for "calendarhead" will probably find it.) You'll see a `<table>` like this:

```html
<table border="0" cellspacing="4" cellpadding="0">
```

Change it to this:
```html
<table border="0" cellspacing="4" cellpadding="0" summary="Monthly calendar with links to each day's posts">
```

In Radio, the procedure is similar to what we've done the past few days.

1. In Radio, open the actual Radio application. On Windows, right-click on the little Radio icon in your system tray and select "Open Radio".
2. Under the "Tools" menu, select "Developers", then "Jump..." (Control+J). Jump to "system.verbs.builtins.radio.weblog.drawCalendar" (no quotes).
3. Now go to "Edit" menu, "Find and Replace", "Find..." (Control+F) and find "draw the month and year". This should reveal and highlight a line the simply says "bundle // draw the month and year". Double-click the triangle to reveal the actual code, which should look like this:
    ```js
    add ("<table cellspacing=\"0\" border=\"0\" class=\"hCalendarTable\">"); indentLevel++
    ```
4. Change it to this:
    ```js
    add ("<table summary=\"Monthly calendar with links to each day's posts\" cellspacing=\"0\" border=\"0\" class=\"hCalendarTable\">"); indentLevel++
    ```

### How to do it: layout tables

If you use tables for layout, add `summary=""` to each table. This is best accomplished with search-and-replace. Search for this:

```html
<table
```

And replace it with this:

```html
<table summary=""
```
