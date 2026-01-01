---
layout: page
title: "Day 29: Making everything searchable"
---

## Day 29: Making everything searchable

Every web site needs a site search. Period.

Rules for a good site search:

1. Put the search box on every page, preferably "above the fold" (visible without scrolling).
2. Search everything by default. If you have an option to search entries, comments, or both, make "both" the default.
3. Don't clutter your search box with advanced options, like boolean logic, case sensitivity, or regular expressions. Choose defaults that mimic Google's behavior (match all words, don't match partial words, don't match case, don't use regular expressions) and make all the options visible on a separate "advanced search" page.
4. Give your search box [a proper label][day 28] and [an access key][day 15]. I recommend `accesskey="4"`. (Note: [On day 15][day 15], I gave an example of how to assign an accesskey to your search form, and I got it wrong. For maximum cross-browser compatibility, you need to define the accesskey on the `<label>`, not on the `<input>`. See the examples below for the correct syntax.)

### Who benefits?

[Jackie][], [Michael][], [Bill][], [Lillian][], [Marcus][], and pretty much everyone else in the world benefit from a well-implemented site search. Especially on a weblog or news-oriented site, where content is primarily organized chronologically, it's very frustrating to try to find a specific post that's scrolled off the main page. Very few people know about the "site:domainname.com" syntax on Google (to restrict search results to a particular domain), and Google only reindexes once a month anyway. Provide your own site search.

### How to do it

Greymatter has built-in search functionality, but you will need to customize the template slightly to provide an accesskey for the search box. Go to "Edit Templates", "Miscellaneous Templates", "Search Form Template", and find a form like this:

```html
<FORM ACTION="{{cgiwebpath}}/gm-comments.cgi" METHOD=POST>
<INPUT TYPE=TEXT NAME="gmsearch" SIZE=20>
<INPUT TYPE=SUBMIT VALUE="Search">
</FORM>
```

And change it to this:

```html
<FORM ACTION="{{cgiwebpath}}/gm-comments.cgi" METHOD=POST>
<label for="gmsearch" accesskey="4">Search for:</label>
<INPUT TYPE=TEXT id="gmsearch" NAME="gmsearch" SIZE=20>
<INPUT TYPE=SUBMIT VALUE="Search">
</FORM>
```

Movable Type users can try the [MT-Search][] plug-in. I am using this on an upcoming <abbr title="Movable Type">MT</abbr>-powered site. I tried it on my main weblog (900+ entries) and it was fairly slow, but it seems to work well with smaller sites. It is no longer being actively developed, but it works well, even with the latest version of Movable Type. (Note: if you're using the MySQL version of Movable Type 2.2, [you need to tweak mt-search.cgi slightly][ringnalda:tweak].)

If you have your weblog on your own domain name, you can use a third-party search service that indexes your content and provides search results on demand. Popular alternatives on this front include [Atomz Express Search][atomz], which Blogger.com recommends, and [Google Free Web Search][goog:serv], which I use on my own weblog. Both are customizable to some degree, and quite fast, although their indexes of your content are not up-to-the-minute fresh. Both allow you to customize the look of your search box; my Google-powered search form looks like this (note the use of `<label>` and accesskey):

```html
<form id="searchform" method="get" action="http://www.google.com/custom">
<p id="searchlabel"><label for="q" accesskey="4">Search this site:</label></p>
<p id="searchinput"><input type="text" id="q" name="q" size="18" maxlength="255" value=" " /></p>
<p id="searchsubmit"><input type="submit" value="Search" />
<input type="hidden" name="cof" value="LW:116;L:http://diveintomark.org/images/eyes.jpg;LH:68;AH:left;GL:0;S:http://diveintomark.org/;AWFID:0d8ffcebe359c844;" />
<input type="hidden" name="domains" value="diveintomark.org" />
<input type="hidden" name="sitesearch" value="diveintomark.org" />
</p>
</form>
```

Note: you can't cut and paste this onto your own weblog. If you want to use Google Free Web Search, you'll need to sign up and get your own code that goes into that hidden cof field.

### Further reading

* Jay Allen: [MT-Search][], a search plug-in for Movable Type.
* Phil Ringnalda: [mt-search.cgi and MySQL][ringnalda:tweak]. Important information getting MT-Search to work with Movable Type 2.2 and MySQL.
* [Atomz Express Search][atomz].
* [Google Free Web Search][goog:serv].
* Blogger.com: [How do I add a search engine to my blog?][blogger:search] Recommends Atomz, but links to others not listed here.
* Jukka Korpela: [Improving accessibility with `accesskey` in HTML forms and links][korpela:accesskey]. Near the end, it explains why to use "4" as the `accesskey` for your site search.
* Jakob Nielsen: [Is Navigation Useful?][nielson:nav] Users often rely on search as their main hunting strategy.
Jakob Nielsen: Search Usability. Five years old and still incredibly relevant.
* PHP.net: [URL HOWTO][php:url]. PHP.net has the most amazing site search I've ever seen. Beyond the standard search box, they use custom 404 ErrorDocuments (which would usually just throw a "page not found" error) to intelligently search the site based on the URL. So you can type an address like [php.net/phpinfo][php:info] into your browser's location bar, and php.net will redirect you to [the reference page on the phpinfo function][php:man-phpinfo].

[mt-search]: http://www.jayallen.org/mt-search/
[ringnalda:tweak]: http://philringnalda.com/archives/002257.php
[goog:serv]: http://www.google.com/services/free.html
[atomz]: http://www.atomz.com/search/trial_account.htm
[blogger:search]: http://publicmind.blogger.com/enduser/group.jsp?node=185
[korpela:accesskey]: http://www.cs.tut.fi/~jkorpela/forms/accesskey.html
[nielson:nav]: http://www.useit.com/alertbox/9707b.html
[php:url]: http://www.php.net/urlhowto.php
[php:info]: http://php.net/phpinfo
[php:man-phpinfo]: http://www.php.net/manual/en/function.phpinfo.php
