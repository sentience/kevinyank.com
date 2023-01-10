---
status: publish
published: true
title: Radioshift Subscriptions as iTunes Podcasts
author: Kev
author_login: kyank
author_email: thatguy@kevinyank.com
author_url: https://kevinyank.com
excerpt: |-
  <p>Like many displaced Canadians, I like to listen to <a href="http://radio3.cbc.ca/">CBC Radio 3</a> at work to keep me feeling culturally connected to my home country. But the shows I enjoy tend to be on at inconvenient times here in Australia. Thanks to Radioshift, that isn’t a problem!</p>

  <p><a href="http://rogueamoeba.com/radioshift/">Radioshift</a> from <a href="http://rogueamoeba.com/">Rogue Amoeba</a> is a Mac application for scheduled recording of web radio streams. Radioshift makes it easy to import your recordings into iTunes, but it would be nice, I thought, if those recordings showed up as a podcast, instead of normal music tracks in my iTunes library.
wordpress_id: 190
wordpress_url: http://old.kevinyank.com/blog/?p=190
date: '2009-06-23T21:47:14+1000'
date_gmt: '2009-06-23 11:47:14 +1000'
tags:
- tech
comments:
- id: 210677
  author: Mike
  author_email: mike@atlantapcrepairs.com
  author_url: http://www.atlantapcrepairs.com
  date: '2009-07-22T01:36:44+1000'
  date_gmt: '2009-07-21 15:36:44 +1000'
  content: "Wow!!! That's really cool. I liked the way you laid it all out.....\n\nMy
    only problem..... No Mac. \n\nBut, I'm a football fan from Jacksonville transplanted
    to Atlanta. I wonder if I could get the Jacksonville radio shows in podcast form,
    that might be really, really cool. \n\nI always see secondhand Macs on sale for
    $50-200, might be worth it just to keep my ear to the ground in Jacksonville.
    \n\nThanks again."
- id: 234613
  author: Mark
  author_email: Mark.home@markandcath.net
  author_url: ''
  date: '2009-09-16T09:25:43+1000'
  date_gmt: '2009-09-15 23:25:43 +1000'
  content: |-
    Hi Kev,

    Many thanks for the detailed instructions.  I had one problem on my clean Leopard   Snow Leopard installation - I kept getting "403 Forbidden" errors when trying to access the xml file through the browser (at the point where you try to access "http://localhost/~kyank/MyShow/").

    This is probably obvious to those who know their way round OS X / Apache / Unix etc, but it turns out my "~/Music/" folder (a parent of the location the symbolic link points to) only had 700 rights.  Not sure if this is the best way to fix it, but I got past the problem by doing "chmod 755 ~/Music" and all seems well.

    Cheers,

    Mark
- id: 236024
  author: Joe
  author_email: spamjoe@comcast.net
  author_url: ''
  date: '2009-09-19T05:28:42+1000'
  date_gmt: '2009-09-18 19:28:42 +1000'
  content: |-
    I think there may, now, be a slightly simpler way to do this (I've been looking for a way to do this as well).
    iTunes supports an 'automatically add to iTunes' feature that works almost the way you'd want it to. If you put a supported file (like an .mp3) to 'itunes-media-folder-location/Automatically Add to iTunes', iTunes will automatically add it to iTunes into 'unknown artist/unknown album'.
    Here's my plan:
    1) Use Radioshift to record the stream to a folder
    2) Run a script (either cron or, I like using iCal events, easier for me to manage and I'm not cron proficient) that
     a) moves files matching specific names to the iTunes 'auto' folder
     b) (waits maybe a minute, but iTunes added it instantly) runs modified Doug's Script 're-add as podcast' with embedded info
    I think that's it. I'm just about done with the modded re-add-as-podcast script.
- id: 273275
  author: Rick
  author_email: r_n_b@me.com
  author_url: ''
  date: '2010-01-25T14:48:41+1100'
  date_gmt: '2010-01-25 04:48:41 +1100'
  content: |-
    Hi Kev,
    Thanks so much for posting this.  Great solution!

    I am trying to use Hazel as you described but the image link in the blog post is broken so I can't see the rule settings that you are using.  Could you repost image?

    Thanks again!
    Rick
- id: 301351
  author: Donald Willms
  author_email: donaldwillms@me.com
  author_url: http://donaldwillms.posterous.com
  date: '2010-04-10T22:36:34+1000'
  date_gmt: '2010-04-10 12:36:34 +1000'
  content: |-
    You sir are my hero.  Seriously!  You just rocked my world.

    Thanks!
    Donald
- id: 301353
  author: Donald Willms
  author_email: donaldwillms@me.com
  author_url: http://donaldwillms.posterous.com
  date: '2010-04-10T23:33:17+1000'
  date_gmt: '2010-04-10 13:33:17 +1000'
  content: |-
    Oh wait.  This terminal noob has hit a snag.  My Radioshift folder is on a second drive and I seem to be running into permissions issues like Mark had.  Well I've been meaning to roll up my sleeves and learn my way around unix anyway.  Maybe I'm just missing the Mountain Dew.

    Still My hero but my world has settled to a nice looking pile of rubble.
    Donald
- id: 312264
  author: John Wolf
  author_email: johnwolf.lobo@gmail.com
  author_url: http://JohnWolfBooks.com
  date: '2010-07-03T10:46:52+1000'
  date_gmt: '2010-07-03 00:46:52 +1000'
  content: What an international environment we are in. I listen to sky-fm from London
    while working on PHP code from a guy in Australia that's from Canada with a last
    name of an American as described by a bloke in Somerset, and I'm sitting in Southern
    California. All of this generally in real-time, give or take a few milliseconds.
    My most notorious iPod story occurs with all the innocence of a shark attack.
    On occasion, when loading the device from iTunes on the computer, it erases the
    music library on the computer. This usually happens when the iPod is empty, a
    fresh load. It doesnâ€™t do it all the time, which explains why I havenâ€™t backed
    the car over the thing yet. I reload iTunes from an outboard drive and try again
    and it works. Anyone have a solution or even a reason why this would happen?
- id: 316636
  author: Matt Gibson
  author_email: gothick@gothick.org.uk
  author_url: http://gothick.org.uk
  date: '2010-08-20T16:10:26+1000'
  date_gmt: '2010-08-20 06:10:26 +1000'
  content: |-
    Thanks a lot for this! I've been meaning to hack something similar together with PHP for a while, but never got around to it. (Probably the only advantage of the way I was going to do it was that iTunes viewing the URL would actually kick off the PHP script and dynamically update the feed based on whatever happened to be in the Radioshift directories at the time...)

    I've always wondered why Radioshift doesn't simply come with a little built-in web server that does this for you; it seems like a truly missed opportunity on Rogue Amoeba's part, and makes Radioshift an awful lot clunkier to use with iTunes.
- id: 325481
  author: Ben
  author_email: benjtucker@mac.com
  author_url: ''
  date: '2010-10-28T20:55:11+1100'
  date_gmt: '2010-10-28 10:55:11 +1100'
  content: |-
    Just wanted to say thanks for taking the time to write the scripts and post them on the web. Its really a great way to use Radioshift recordings.
    fwiw for the final automation i just set up a shell script with the commands in and put it in the cron.
    Good work.

    Ben
- id: 337970
  author: David Maslen
  author_email: dmm_au@yahoo.com
  author_url: ''
  date: '2010-12-29T16:53:04+1100'
  date_gmt: '2010-12-29 06:53:04 +1100'
  content: |-
    Very helpful. I just wanted a python script to convert a directory full of mp4 files to an RSS feed.
    Directory then published on a local linux box.

    You scripts worked perfectly, but I needed to include the mp4 extension as a mime type, and also increase n=10 to n=100 so as to include all the files in my directory (~50).

    When importing these files directly into itunes, it seems itunes has access to some description other than the file name. I'm guessing mp4 files have some sort of metadata. I'd like to get that into the description
- id: 415846
  author: Foxhoundn
  author_email: rahz@email.cz
  author_url: http://www.foxhoundn.com
  date: '2011-07-28T17:48:26+1000'
  date_gmt: '2011-07-28 07:48:26 +1000'
  content: Pretty awesome and useful!
- id: 498220
  author: Dominic Jones
  author_email: dom@oddjones.com
  author_url: http://oddjones.com
  date: '2012-09-23T08:19:41+1000'
  date_gmt: '2012-09-22 22:19:41 +1000'
  content: Hi - the screenshot where you detail the Hazel settings is missing - this
    is EXACTLY what I'm trying to do - could you please try and root out that screenshot
    please?
- id: 498222
  author: Kevin Yank
  author_email: thatguy@kevinyank.com
  author_url: https://kevinyank.com/
  date: '2012-09-24T10:12:55+1000'
  date_gmt: '2012-09-24 00:12:55 +1000'
  content: "@Dominic Jones: Iâ€™ve re-created the missing screenshot."
---
<p>Like many displaced Canadians, I like to listen to <a href="http://radio3.cbc.ca/">CBC Radio 3</a> at work to keep me feeling culturally connected to my home country. But the shows I enjoy tend to be on at inconvenient times here in Australia. Thanks to Radioshift, that isn’t a problem!</p>
<p><a href="http://rogueamoeba.com/radioshift/">Radioshift</a> from <a href="http://rogueamoeba.com/">Rogue Amoeba</a> is a Mac application for scheduled recording of web radio streams. Radioshift makes it easy to import your recordings into iTunes, but it would be nice, I thought, if those recordings showed up as a podcast, instead of normal music tracks in my iTunes library.<a id="more"></a><a id="more-190"></a></p>
<h2>Why A Podcast?</h2>
<p>By default, podcasts in iTunes remember your playback position when you stop listening to them halfway through, and aren’t played when you shuffle your entire iTunes music library. You can also choose to delete podcasts automatically after you have listened to them.</p>
<p>With the release of iPhone OS 3.0, podcasts gained even more benefits while on the go: when listening to a podcast on an iPhone or iPod touch, you can choose to listen at 2X speed, and also skip back 30 seconds with a single tap.</p>
<p>These new features were enough to make me get off my butt and do a little work.</p>
<h2>Step 1: Generate A Podcast Feed</h2>
<p>Technically, a podcast is just a text file that points to the MP3/M4A files that iTunes should download and store in its library. I whipped up a Python script that will generate a podcast file (podcast.xml) given a directory full of MP3/M4A files (such as those contained in the ~/Music/Radioshift folder after Radioshift does its thing).</p>
<p>To install this script on your own Mac, download <a href="/assets/wp-content/uploads/2009/06/podcastFromFolder.zip">this ZIP file</a> containing three Python files:</p>
<ul>
<li>podcastFromFolder.py</li>
<li>PyPodcastGen.py</li>
<li>PyRSS2Gen.py</li>
</ul>
<p>Once you’ve unzipped the file, put all three files (podcastFromFolder.py) somewhere handy, like your home directory (/Users/kyank).</p>
<p>With the files in place, let’s test that the script works. Open Terminal and follow along.</p>
<p>First, you’ll need to make the podcastFromFolder.py script executable:</p>
<pre><code>Computer:~ kyank$ <strong>chmod u+x podcastFromFolder.py</strong></code></pre>
<p>Be sure to specify the path to the podcastFromFolder.py file if you put it somewhere else on your system (mine is actually in ~/bin/podcastFromFolder.py).</p>
<p>Now try running the script in your Radioshift recordings folder:</p>
<pre><code>Computer:~ kyank$ <strong>cd "Music/Radioshift/<em>My Show</em>"</strong>
Computer:My Show kyank$ <strong>~/podcastFromFolder.py</strong></code></pre>
<p>In the first command, instead of <em>My Show</em> you’ll need to type the actual name of the folder containing your desired show’s Radioshift recordings (mine’s CBC Radio 3 with Grant Lawrence 2).</p>
<p>In the second command, again, you’ll need to specify the path to the script if it’s somewhere other than in your home directory.</p>
<p>If all goes well, these commands should execute silently, and you should find a new podcast.xml file in the folder along with any .M4A files that Radioshift has stored there. This file will contain the feed that tells iTunes about your “fake” podcast.</p>
<h2>Step 2: Serve Up Your Podcast Feed</h2>
<p>Unfortunately, iTunes is picky about where it gets its podcast feeds. You can’t simply point it at a file on your hard disk (believe me, I’ve tried!). iTunes will only accept a podcast feed that it retrieves from the Web.</p>
<p>Fortunately, the Mac comes with everything you need to make your computer look like part of the Web.</p>
<p>Open System Preferences, and click Sharing. Select Web Sharing from the menu on the left, and make sure the On checkbox next to Web Sharing is checked.</p>
<p><a href='/assets/wp-content/uploads/2009/06/web-sharing-on-2.png'><img src="/assets/wp-content/uploads/2009/06/web-sharing-on-2-300x245.png" width="300" height="245" class="attachment-medium" alt="Screenshot showing Web Sharing switched on" /></a></p>
<p>This enables the Apache 2 web server built into Mac OS X. Next, we need to make your Radioshift recordings folder available to the Web. Pop open Terminal and follow along:</p>
<pre><code>Computer:My Show kyank$ <strong>cd ~/Sites/</strong>
Computer:Sites kyank$ <strong>ln -s "~/Music/Radioshift/<em>My Show</em>" "<em>MyShow</em>"</strong></code></pre>
<p>In that second command, replace <em>My Show</em> with the name of the folder for your desired show’s Radioshift recordings, and replace <em>MyShow</em> with a “web friendly”, simplified version of the show title. Here’s exactly what I typed on my system:</p>
<pre><code><strong>ln -s "~/Music/Radioshift/CBC Radio 3 with Grant Lawrence 2"
"GrantLawrence"</strong></code></pre>
<p>This creates in your Sites folder an alias that points to the folder containing your show’s recordings (and your new podcast feed file).</p>
<p>Open your web browser of choice and type this address:</p>
<p>http://localhost/~<em>kyank</em>/<em>MyShow</em>/</p>
<p>Replace <em>kyank</em> with your Mac OS X username (it’s what appears before the $ in the Terminal prompt), and <em>MyShow</em> with the “web friendly” title you chose for your show above.</p>
<p>Chances are, the first time you try this address, your browser will tell you that you don’t have permission to view the requested page. You need to give Apache permission to follow the alias you created from your Sites folder above.</p>
<p>To do this, you’ll need to edit the <em>user</em>.conf file (where <em>user</em> is your Mac OS X username) in /etc/apache2/users. Since this is a protected system file, the simplest way to do this is probably to use the nano editor from inside Terminal:</p>
<pre><code>Computer:Sites kyank$ <strong>cd /etc/apache2/users</strong>
Computer:users kyank$ <strong>sudo nano <em>kyank</em>.conf</strong>
Password:</code></pre>
<p>Type your password when prompted, and the nano text editor will fill your Terminal window. On the line that begins with <code>Options</code>, add <code>FollowSymLinks</code> to the end, so the file looks like this:</p>
<pre><code>&lt;Directory "/Users/<em>kyank</em>/Sites/">
    Options Indexes MultiViews <strong>FollowSymLinks</strong>
    AllowOverride None
    Order allow,deny
    Allow from all
&lt;/Directory></code></pre>
<p>With that done, type ^O and then Enter to save your changes, then ^X to exit the nano editor. Go back into System Preferences and turn Web Sharing off and then on again to make this change take effect. Finally, load up that URL again:</p>
<p>http://localhost/~<em>kyank</em>/<em>MyShow</em>/</p>
<p>Your browser should now display a list of the files contained in the show’s Radioshift recordings folder, including the podcast.xml file.</p>
<p>Now that you have a URL where iTunes will be able to find your podcast feed, you need to regenerate the podcast.xml file with a few extra settings to make the file complete. Again, pop open Terminal:</p>
<pre><code>Computer:~ kyank$ <strong>cd "Music/Radioshift/<em>My Show</em>"</strong>
Computer:My Show kyank$ <strong>~/podcastFromFolder.py .
"Grant Lawrence on CBC Radio 3" http://radio3.cbc.ca/
http://localhost/~kyank/GrantLawrence/</strong></code></pre>
<p>Notice the four new parameters I am passing to the podcastFromFolder.py script. You’ll want to supply your own values using this guide:</p>
<dl>
<dt><strong>.</strong></dt>
<dd>The first parameter tells the script what folder to work on. Just type a period (or full stop, if you call it that) to tell it to use the current directory.</dd>
<dt><strong>"Grant Lawrence on CBC Radio 3"</strong></dt>
<dd>The second parameter specifies the title of your podcast as it should be displayed in iTunes (and on your iPod or iPhone). Choose something short that you’ll recognise.</dd>
<dt><strong>http://radio3.cbc.ca/</strong></dt>
<dd>The third parameter specifies the web site that the podcast came from, so you can get to it from within iTunes. Set it to the URL of the web radio site that Radioshift records for you.</dd>
<dt><strong>http://localhost/~kyank/GrantLawrence/</strong></dt>
<dd><strong>This is the important one.</strong> Set this to the URL that you have just set up to point to your show’s Radioshift recordings folder. The script will use this to generate the full URLs to each of the audio files in the folder, and include them in the podcast feed.</dd>
</dl>
<p>Again, the script should run silently and generate a fresh podcast.xml file, which now contains everything iTunes needs to know to access your Radioshift recordings.</p>
<h2>Step 3: Subscribe To Your Feed</h2>
<p>Open iTunes, and from the menu bar choose Advanced → Subscribe to Podcast…</p>
<p>In the window that pops up, type the full URL to your podcast.xml file. Mine looks like this:</p>
<p>http://localhost/~kyank/GrantLawrence/podcast.xml</p>
<p>Click OK, and iTunes should happily begin downloading the most recent recording into a new podcast with the title you specified. You can click the Get All button to instruct it to get all of your recordings (assuming you have more than one).</p>
<p>You did it! Your iTunes library now contains your Radioshift recordings as a podcast.</p>
<h2>Step 4: Automate Feed Updates</h2>
<p>Of course, as Radioshift makes new recordings, you will want these to appear in your iTunes podcast too. This means you need to automate the running of the podcastFromFolder.py script every time a new recording is completed.</p>
<p>It is possible to set this up using Mac OS X’s Folder Actions, and if you’re an AppleScript genius I invite you to do so. In practice, I find Folder Actions unreliable even in Leopard (they seem to become disabled for no reason after working perfectly for days), and dealing with recordings-in-progress and other such complexities is not for the faint of heart.</p>
<p>Rather, I recommend you grab yourself a copy of <a href="http://www.noodlesoft.com/hazel.php">Hazel</a> from <a href="http://www.noodlesoft.com/">Noodlesoft</a>, which is a System Preferences panel that will monitor folders for files matching the criteria you specify, and then do whatever you like to them.</p>
<p>With Hazel installed, open System Preferences and choose Hazel. In the Folder list on the left, add the folder containing your show’s Radioshift recordings. Then, on the right, click the + button to add a new rule.</p>
<p>Copy the settings for the rule from this screenshot:</p>
<p><a href="/assets/wp-content/uploads/2009/08/hazel-podcast-from-folder-contents.png"><img src="/assets/wp-content/uploads/2012/09/Snapshot-240912-1006-AM-2.png" alt="Set up a Hazel rule to run a shell script on all files with extension is not 'xml'. The shell script to run is: /Users/kyank/bin/podcastFromFolder.py . 'Grant Lawrence on CBC Radio 3' http://radio3.cbc.ca/ http://localhost/~kyank/Grant%20Lawrence/" title="Hazel podcast from folder contents" width="305" height="240" class="size-medium wp-image-199" /></a></p>
<p>Make sure to adjust the path to podcastFromFolder.py, and the arguments passed to the script to match those you used when manually invoking it above.</p>
<p>With the rule in place, Hazel should generate an updated podcast.xml file each time Radioshift finishes a new recording, which will enable iTunes to add the recording to your library as a new episode of the podcast.</p>
<p>Note that, while iTunes copies the recordings into your library, the original recordings remain in your Radioshift recordings folder. To save disk space, you will want to periodically open Radioshift and delete all the old recordings. Better yet, you can use another Hazel rule to automatically delete recordings from the recordings folder after a week or so—the copies will remain in your iTunes library, and the corresponding entries will be purged from the podcast feed the next time Radioshift downloads a new recording.</p>
<h2>Summing Up</h2>
<p>If this seems like a lot of work, you’re not imagining things. I have sent Rogue Amoeba a feature request to suggest that it make exposing your subscriptions as podcasts visible to iTunes a built-in feature in a future version of Radioshift.</p>
<p>In the meantime, if you use Radioshift to record a regular web radio broadcast, the added convenience of having new episodes appear as a podcast in iTunes will make all the hackery above worthwhile.</p>
<p>Let me know if you run into any trouble with the above setup, or if you have any suggestions for improving it.</p>
