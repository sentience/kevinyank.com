---
status: publish
published: true
title: 'New Project: Pocket Pocket Query'
author: Kev
author_login: kyank
author_email: thatguy@kevinyank.com
author_url: https://kevinyank.com
excerpt: "<img align=\"right\" alt=\"PPQuery Alpha\" id=\"image152\" title=\"PPQuery
  Alpha\" src=\"/assets/wp-content/uploads/2007/04/ppq-alpha.png\"
  />As if I needed another project to occupy my spare time, I've launched a new open
  source project: <a href=\"http://sourceforge.net/projects/ppquery\">Pocket Pocket
  Query</a>.\r\n\r\nFrom the project page:\r\n<blockquote>A portable application for
  JavaME/MIDP-enabled devices (including most mobile phones) that enables you to browse
  an XML database of geocache information—in particular, the Pocket Query data generated
  by the geocaching.com web site—wherever you go.</blockquote>\r\nWeb site coming
  soon. In the meantime, marvel at this alpha screenshot, and read on for the full
  project description.\r\n\r\n"
wordpress_id: 151
wordpress_url: http://old.kevinyank.com/blog/archives/new-project-pocket-pocket-query
date: '2007-04-23T17:24:29+1000'
date_gmt: '2007-04-23 07:24:29 +1000'
tags:
- tech
- geocaching
comments:
- id: 51677
  author: Comment
  author_email: comment@nomailplease.com
  author_url: ''
  date: '2007-09-14T00:19:30+1000'
  date_gmt: '2007-09-13 14:19:30 +1000'
  content: |-
    I like the idea very much.
    I would prefer to have a tool on my computer that creates the jar files but the general functionality of the application looks great and it seems to be very fast. Even in this early beta version.
---
<p><img align="right" alt="PPQuery Alpha" id="image152" title="PPQuery Alpha" src="/assets/wp-content/uploads/2007/04/ppq-alpha.png" />As if I needed another project to occupy my spare time, I've launched a new open source project: <a href="http://sourceforge.net/projects/ppquery">Pocket Pocket Query</a>.</p>
<p>From the project page:</p>
<blockquote><p>A portable application for JavaME/MIDP-enabled devices (including most mobile phones) that enables you to browse an XML database of geocache information—in particular, the Pocket Query data generated by the geocaching.com web site—wherever you go.</p></blockquote>
<p>Web site coming soon. In the meantime, marvel at this alpha screenshot, and read on for the full project description.</p>
<p><a id="more"></a><a id="more-151"></a></p>
<blockquote><p>Geocaching is a sport/passtime where participants use a GPS receiver (GPSr) to locate caches of trinkets hidden throughout the world, the coordinates and accompanying clues for which are published primarily on the <a href="http://www.geocaching.com/">www.geocaching.com web site</a>.</p>
<p>Pocket Pocket Query (PPQuery) is a JavaME application for any mobile device supporting the Mobile Information Device Profile (MIDP) specification. This includes most mobile phones currently available, as well as many PDA-style devices (e.g. BlackBerry). The application is built upon the <a href="http://www.j2mepolish.org/">J2ME-Polish framework</a> (GPL Licensed) to provide a slick user experience and optimal device compatibility.</p>
<p>The primary function of PPQuery is to assist geocachers in the field by providing a useful interface to browse a database of geocache information on a portable device. This type of database is typically stored in an XML file known as a Pocket Query. The <a href="http://www.geocaching.com/">www.geocaching.com web site</a> generates Pocket Queries as a service to its paid members, and sends them to a user-designated email address.</p>
<p>Because many mobile phones do not allow JavaME applications to access files stored on the device (e.g. a Pocket Query XML file), and because over-the-air transfer of such data is generally expensive under current phone plans, the XML Pocket Query data will be bundled inside the PPQuery application JAR file that is installed to the user's device. If the user wishes to browse an updated Pocket Query database, he or she need only bundle and install an up-to-date PPQuery application JAR file to the device.</p>
<p>This project will also provide a web-based interface (initially, at least, written in PHP) where geocachers may upload a Pocket Query XML file, and download a JAR file (and accompanying JAD descriptor) containing a device-specific build of the application along with the pre-processed XML Pocket Query data, ready to be installed to their device.</p>
<p>The possibility exists to integrate with <a href="http://www.geocaching.com/">www.geocaching.com</a> so that Pocket Queries may be sent directly to the processing script, and the resulting JAR file emailed to the user; however, as this will likely involve significant use of server resources and bandwidth over time, this facility may be developed separately as a paid service (without the use of SourceForge resources, and in compliance with the GPL license of the J2ME Polish framework).</p>
<p>Initial test releases of PPQuery will be in English only; however, full support for localized releases will be built into the application from day 1, and assistance with developing translations will be solicited from the community prior to the first general release.</p>
<p>The most similar existing application is <a href="http://www.geocachenavigator.com/">Geocache Navigator</a>, a commercial product that downloads geocache data over-the-air and also integrates with in-device and Bluetooth GPS receivers. It is only available on a restricted set of devices through a subset of US cellular phone carriers. As mentioned above, PPQuery saves the user from paying wireless data fees by relying on a portable database of geocache data rather than downloading this data over-the-air. It will also be freely available for many more devices, regardless of the user's mobile phone carrier. At least in its initial release, PPQuery will not provide a UI for available GPS receivers; however, this may be added as an enhancement in a future release.</p></blockquote>
