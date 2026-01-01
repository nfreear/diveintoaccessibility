---
layout: page
title: "Day 28: Labeling form elements"
eleventyComputed:
  status: green/amber
---

## Day 28: Labeling form elements

Has it ever bothered you that web forms are so hard to use? For instance, in regular GUI applications, you can click anywhere on a checkbox label to check or uncheck the box, but in web-based applications, you can only click on the little checkbox square itself. This is annoying but not fatal. But for blind users, the situation is even worse. Even simple forms, like comment posting forms, can be difficult to use if you can't see them all at once. (We noted a similar problem with tables; a weblog calendar is easy to use if you can see it all at once, but difficult if you can only see it one day at a time.)

There are HTML tags which can help make forms easier to use. I'll talk about one, the `<label>` tag; you can read about the others in the "Further reading" section.

The `<label>` tag allows you to associate a form label with any kind of form input element: text box, multi-line text area, checkbox, radio button, whatever. This allows screen readers to intelligently announce what a particular input element is, by reading the label. Furthermore, if you use a `<label>` tag to associate a checkbox (`<input type="checkbox">`) with the text next to it, your web-based form will work like a GUI application: clicking anywhere on the text label will toggle the checkbox.

### Who benefits?

1. [Jackie][] benefits. When Jackie tabs through a form, [JAWS][] announces the name of each element (by its `name` property), which may or may not be intelligible. But if the form element is associated with a label, JAWS will read the label text instead. "Text: name." (<kbd>TAB</kbd>) "Text: email address." (<kbd>TAB</kbd>) "Text: URL." (<kbd>TAB</kbd>) "Text area: comments." And so forth.
2. [Lillian][] benefits. Once form elements are associated with labels, Lillian can click anywhere on the text next to a checkbox, and it will toggle the checkbox. This gives a much wider margin of error for toggling the checkbox with a mouse, and with her limited vision, the wider the better.
3. [Bill][] should benefit, but he doesn't yet. He navigates mostly with the keyboard, which mostly means the <kbd>TAB</kbd> key. When he tabs to a checkbox in a form, Mozilla should set a focus rectangle around the entire label, but it doesn't; it just puts a focus rectangle around the checkbox itself. (Internet Explorer gets this right, though. Even Netscape 4 gets this right. Bad Mozilla.)

### How to do it: Movable Type

In Movable Type, edit your Comment Listing Template. Near the bottom, you should see a form that contains elements like this:
```html
Name:<br />
<input name="author" /><br /><br />

Email Address:<br />
<input name="email" /><br /><br />

URL:<br />
<input name="url" /><br /><br />

Comments:<br />
<textarea name="text" rows="10" cols="50"></textarea><br /><br />

<input type="checkbox" name="bakecookie" />Remember info?<br /><br />
```

Each of those naked labels needs to be wrapped in a `<label>` tag. Also, since the `<label>` tag points to a form element by ID (not name), each `<input>` tag will need an ID attribute. All in all, it will end up looking to this:

```html
<label for="author">Name:</label><br />
<input id="author" name="author" /><br /><br />

<label for="email">Email Address:</label><br />
<input id="email" name="email" /><br /><br />

<label for="url">URL:</label><br />
<input id="url" name="url" /><br /><br />

<label for="text">Comments:</label><br />
<textarea id="text" name="text" rows="10" cols="50"></textarea><br /><br />

<input type="checkbox" id="bakecookie" name="bakecookie" /><label for="bakecookie">Remember info?</label><br /><br />
```

Be sure to make the same changes to your Comment Preview template, your Comment Error template, and your Individual Entry Archive.

### How to do it: Greymatter

Under "Edit Karma & Comments-Related Templates", you should see a template called "{{entrycommentsform}} Posting form" that includes this:

```html
Name
<BR>
<INPUT TYPE=TEXT NAME="newcommentauthor" SIZE=40>
<P>
E-Mail (optional)
<BR>
<INPUT TYPE=TEXT NAME="newcommentemail" SIZE=40>
<P>
Homepage (optional)
<BR>
<INPUT TYPE=TEXT NAME="newcommenthomepage" SIZE=40>
<P>
Comments
<BR>
<TEXTAREA NAME="newcommentbody" COLS=35 ROWS=10 WRAP=VIRTUAL></TEXTAREA>
```

Change it to this:

```html
<label for="newcommentauthor">Name</label>
<BR>
<INPUT TYPE=TEXT id="newcommentauthor" NAME="newcommentauthor" SIZE=40>
<P>
<label for="newcommentemail">E-Mail (optional)</label>
<BR>
<INPUT TYPE=TEXT id="newcommentemail" NAME="newcommentemail" SIZE=40>
<P>
<label for="newcommenthomepage">Homepage (optional)</label>
<BR>
<INPUT TYPE=TEXT id="newcommenthomepage" NAME="newcommenthomepage" SIZE=40>
<P>
<label for="newcommentbody">Comments</label>
<BR>
<TEXTAREA id="newcommentbody" NAME="newcommentbody" COLS=35 ROWS=10 WRAP=VIRTUAL></TEXTAREA>
```

### Further reading

* WebAIM: [How to Create Accessible Forms][webaim:forms]. For more complex forms, additional accessibility-related tags like `<legend>` and `<fieldset>` may be required. This tutorial shows you what they are and how to use them.
* W3C: [Forms in HTML Documents: The LABEL element][html4:forms].

[webaim:forms]: http://www.webaim.org/howto/forms
[html4:forms]: http://www.w3.org/TR/REC-html40/interact/forms.html#h-17.9.1
