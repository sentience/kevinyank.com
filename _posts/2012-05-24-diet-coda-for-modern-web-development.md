---
status: publish
published: true
title: Diet Coda for Modern Web Development
author: Kev
author_login: kyank
author_email: thatguy@kevinyank.com
author_url: https://kevinyank.com
excerpt: Following the announcement (and imminent release) of Diet Coda from Panic
  Software this week, I’ve heard some complaints that it has been designed for a workflow
  that no longer exists (or shouldn’t). “Edit files directly on my server? Who *does*
  that anymore!?” Setting aside the fact that there are probably plenty of web developers
  who still do exactly that, those who think Diet Coda unsuited to a more sophisticated
  workflow are, I think, simply lacking in imagination.
wordpress_id: 228
wordpress_url: http://old.kevinyank.com/blog/?p=228
date: '2012-05-24T10:27:56+1000'
date_gmt: '2012-05-24 00:27:56 +1000'
tags:
- tech
- web development
comments:
- id: 497880
  author: David
  author_email: Dbainbridge@mac.com
  author_url: ''
  date: '2012-05-28T21:17:52+1000'
  date_gmt: '2012-05-28 11:17:52 +1000'
  content: What's the best way to get the ssh key over to the iPad without emailing
    it?
- id: 497888
  author: Jon
  author_email: jon@armyofgeeks.com
  author_url: http://armyofgeeks.com
  date: '2012-05-28T23:54:45+1000'
  date_gmt: '2012-05-28 13:54:45 +1000'
  content: I have been trying with a key file too. I emailed it and copied it over
    to find it did not work. Now I can't remove the key I added. Have you had any
    luck with ssh keys?
- id: 498120
  author: Kev
  author_email: thatguy@kevinyank.com
  author_url: https://kevinyank.com/
  date: '2012-06-19T08:55:49+1000'
  date_gmt: '2012-06-18 22:55:49 +1000'
  content: I transferred my SSH key to Diet Coda using the clipboard. I used PasteBot
    from Tapbots to grab the key out of the clipboard on my Mac and put it in the
    clipboard on my iPad.
---
<p>Following the announcement (and imminent release) of <a href="http://panic.com/dietcoda/">Diet Coda from Panic Software</a> this week, I’ve heard some complaints that it has been designed for a workflow that no longer exists (or shouldn’t). “Edit files directly on my server? Who <em>does</em> that anymore!?” Setting aside the fact that there are probably plenty of web developers who still do exactly that, those who think Diet Coda unsuited to a more sophisticated workflow are, I think, simply lacking in imagination.<a id="more"></a><a id="more-228"></a>Diet Coda is designed to edit files on <em>a</em> server—not necessarily your production server. With a little setup, that server can be the same development machine you hack on all day long!</p>
<p>Let’s say you run with the cool kids and work on a Mac, using Git to track changes to your code and push it to GitHub when you’re ready to share the work with your team, or deploy it to production. Your Mac has all the servers you need to work remotely with Diet Coda.</p>
<p>Go into the Sharing Preferences Pane and enable Remote Login for your user account.</p>
<p><img src="/assets/wp-content/uploads/2012/05/codasharingprefs.png" alt="screenshot of the Sharing Preferences Pane" border="0" width="600" height="507"></p>
<p>Note (and optionally edit) the network name assigned to your Mac (mythril.local in my case). If Diet Coda is running on an iPad on the same network, you’ll be able to connect to your Mac using that name. If you’re running Diet Coda from outside your network, you may need to set up something like <a href="http://dyn.com/dns/">DynDNS</a> and forward a port on your router to port 22 on your Mac.</p>
<p>Now, you can set up Diet Coda to connect to your Mac using SSH and SFTP. You can use a username and password to authenticate if you really want to, but if you’re using Git you’ve probably got an authentication key pair already set up. Copy your <code>~/.ssh/id_rsa.pub</code> public key to <code>~/.ssh/authorized_keys</code>, then install your private key (protected by a passphrase, of course) in Diet Coda.</p>
<p>Now you can edit your files remotely using an SFTP connection to your Mac, and then switch to Diet Coda’s built-in terminal prompt to connect to your Mac with SSH and work with Git at the command prompt. Mobile web development nirvana.</p>
<p>Something you’ll notice if you use GitHub, is that the Git client will prompt you for your encryption key’s passphrase every single time you use it. That’s because Mac OS X doesn’t add your personal key to your shell’s SSH agent when you log in remotely. Fortunately, you can set up Diet Coda to do this by running an Initial Command upon connection:</p>
<pre><code>eval `ssh-agent`; ssh-add ~/.ssh/id_rsa
</code></pre>
<p>When this command runs, you’ll be prompted for your passphrase to unlock the key (this will unfortunately remain true until Panic adds SSH agent forwarding to Diet Coda), but from then on you’ll be able to perform your GitHub pushes and pulls without being prompted for credentials.</p>
<p>If connecting back to your Mac seems to you to defeat the purpose of a mobile development tool, well get creative! Set up a virtual Linux box on Amazon EC2 that you can fire up whenever you need it. (But that’s another blog post.)</p>
<p>If you’re such a “modern web developer” that editing files on your production server isn’t acceptable to you, then use those mad skills of yours to set up Diet Coda to work the way you want it to.</p>
<p>(<strong>Bonus:</strong> I’ve actually been using this approach with Panic’s dedicated terminal app, <a href="http://panic.com/prompt/">Prompt</a>, and the <a href="http://www.textasticapp.com/">Textastic</a> code editor. The worst part of this workflow is that Textastic <em>doesn’t</em> let you edit files directly on the server, so you have to download every file you want to edit, then upload it again when you’re done. From this perspective, Prompt’s direct-on-server editing is actually <em>more</em> advanced!)</p>
