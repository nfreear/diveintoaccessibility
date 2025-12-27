---
layout: page
title: "Day 18: Giving your calendar a real caption"
---

## Day 18: Giving your calendar a real caption

"But," I hear you cry, "my calendar already _has_ a caption. Look right there, it has the month and year right at the top. In bold, even."

But if you dig into your HTML source, you'll see that your calendar does not have a real caption. It most likely has a single `<td>` table cell defined to span the entire first row, with a CSS rule to make it look bold. This is so much easier with a real `<caption>` tag. It's easier to read in your template, saves a few bytes in your page, looks exactly the same in visual browsers, and is more accessible.

### Who benefits?

1. [Marcus][] benefits. [Lynx][] displays the caption with the word "CAPTION:" in front of it, making it perfectly clear that this line is the caption and not the column headers or table data.
2. [Jackie][] benefits indirectly. Using a real `<caption>` tag clears the way for using real table headers, which benefits Jackie in ways we'll discuss tomorrow.

### How to do it

You can only do this in publishing tools that support a calendar (which rules out Blogger) and that allow you to customize the HTML generated for calendars (which rules out Manila).

In Movable Type, you probably have a table for your calendar in your Main Index template that starts like this (searching for "calendarhead" is likely to find it):

```html
<table border="0" cellspacing="4" cellpadding="0">
<tr>
<td colspan="7" align="center"><span class="calendarhead"><$MTDate format="%B %Y"$></span></td>
</tr>
<tr>
<td align="center"><span class="calendar">Sun</span></td>
...
```

Leave the table tag alone, but replace that entire first `<tr>` table row with a real `<caption>` tag, like this:

```html
<table border="0" cellspacing="4" cellpadding="0">
<caption class="calendarhead"><$MTDate format="%B %Y"$></caption>
<tr>
<td align="center"><span class="calendar">Sun</span></td>
...
```

Leave the rest of it alone; we'll fix it tomorrow.

The `class` attribute on the `<caption>` is optional; I left it in there so this could be a drop-in replacement in the default Movable Type template, which uses a <abbr title="cascading style sheets">CSS</abbr> rule to make the month and year bold. Using the `<caption>` tag as shown, your page should look exactly the same as it did before.

In Greymatter, the concept is the same but the template tags are different:

```html
<caption>{\{monthword}} {\{yearyear}}</caption>
```

Again, you could change the visual style of the caption using cascading style sheets, if you're into that sort of thing.

In Radio, the process is somewhat more difficult, but not impossible. (I am indebted to [Tony Bowden][] for these instructions.)

1. In Radio, open the actual Radio application. On Windows, right-click on the little Radio icon in your system tray and select "Open Radio".
2. Under the "Tools" menu, select "Developers", then "Jump..." (<kbd>Control+J</kbd>). Jump to "system.verbs.builtins.radio.weblog.drawCalendar" (no quotes).
3. Now go to "Edit" menu, "Find and Replace", "Find..." (<kbd>Control+F</kbd>) and find "hCalendarTable". This should reveal the block of code that draws the initial `<table>` tag and the fake calendar caption.
4. Change the last line of that block (that writes out the _monthYearString_ in a `<tr>` tag) to this:
    ```js
    add ("<caption>" + monthYearString + "</caption>")
    ```
5. Close the window. It will ask you if you want to compile the changes, say yes.
6. If you like, you can style the caption. Go to your Home Page Template (on the Prefs page) and add styles for `caption`. This is what I use. Where my `<style>` section used to contain this:
    ```css
    body, td, p {
      font-family: verdana, sans-serif;
      font-size: 12px;
    }
    ```
    It now contains this:
    ```css
      body, td, p, caption {
      font-family: verdana, sans-serif;
      font-size: 12px;
    }

    caption {
      text-align: center;
      font-weight: bold;
    }
    ```

### Further reading

* Tony Bowden: [Changing the Calendar in Radio][bowden 2002].

[Tony Bowden]: http://www.tmtm.com/insanity/
[Bowden 2002]: http://www.tmtm.com/insanity/2002/07/03.html#a180
