---
status: publish
published: true
title: del.icio.us Max Notes Length Greasemonkey Script
author: Kev
author_login: kyank
author_email: thatguy@kevinyank.com
author_url: https://kevinyank.com
excerpt: "When using the <a href=\"http://del.icio.us/help/firefox/extension\">Firefox
  extension</a> to post a link to the <a href=\"http://del.icio.us/\">del.icio.us
  social bookmarking service</a>, I've often typed long, informative descriptions
  into the \"Notes\" field, only to see that text cut short when I submit the link.\r\n\r\n"
wordpress_id: 119
wordpress_url: http://old.kevinyank.com/blog/archives/delicious-max-notes-length-greasemonkey-script/
date: '2006-09-18T15:09:35+1000'
date_gmt: '2006-09-18 05:09:35 +1000'
tags:
- tech
comments:
- id: 6354
  author: drew
  author_email: drew@drewwells.com
  author_url: ''
  date: '2007-02-04T08:46:38+1100'
  date_gmt: '2007-02-03 22:46:38 +1100'
  content: Thanks, just starting using delicious for a link roll and didn't notice
    the description cut off until today. This script will be a big help.
---
<p>When using the <a href="http://del.icio.us/help/firefox/extension">Firefox extension</a> to post a link to the <a href="http://del.icio.us/">del.icio.us social bookmarking service</a>, I've often typed long, informative descriptions into the "Notes" field, only to see that text cut short when I submit the link.</p>
<p><a id="more"></a><a id="more-119"></a>It turns out this is a bit of lazy programming on the part of the fine folks at del.icio.us. The HTML multi-line text area element doesn't natively support limiting the amount of text you enter, so instead of writing some JavaScript to enforce the 255-character limit, they just quietly chop off any extra text without letting you know.</p>
<p>Since I use del.icio.us extensively to produce the <a href="http://www.sitepoint.com/blogs/category/daily-links/">SitePoint News Wire</a>, I can't afford to check every description I write for clipping, so I've produced a <a href="http://greasemonkey.mozdev.org/">Greasemonkey</a> script that, when installed in Firefox, stops you from typing more than 255 characters into the "Notes" field of the del.icio.us posting form.</p>
<p><a href="/assets/wp-content/uploads/2006/09/del.icio.us.user.js">Grab the script.</a></p>
<p><strong>Note:</strong> There is an <a href="http://userscripts.org/scripts/show/3057">old script</a> that purports to do the same thing in the repository at <a href="http://userscripts.org/">userscripts.org</a>. Sadly, it is out-of-date and does not work with the current del.icio.us posting form.</p>
