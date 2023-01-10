---
status: publish
published: true
title: Installing IIS after Service Pack 2
author: Kev
author_login: kyank
author_email: thatguy@kevinyank.com
author_url: https://kevinyank.com
excerpt: "I'm preparing to record one in <a href=\"http://www.sitepoint.com/blogs/2006/02/24/screencast-photoshop-starburst-effect/\">a
  series of video tutorials</a> for <a href=\"http://www.sitepoint.com/\">SitePoint</a>,
  for which I'll need a copy of Microsoft <a href=\"http://www.microsoft.com/WindowsServer2003/iis/\">Internet
  Information Services</a> (IIS), the web server that comes with Windows XP Professional,
  installed on my home computer for the first time since I installed Windows.\r\n\r\nThe
  usual way to do this is to launch Add or Remove Programs from the Control Panel,
  click Add/Remove Windows Components, pick IIS from the list and then go from there.
  But if, like me, you're working with a copy of Windows that has been updated to
  <a href=\"http://www.microsoft.com/windowsxp/sp2/\">Service Pack 2</a>, you'll just
  get this error:\r\n\r\n<img title=\"Copy Error: Setup cannot copy the file staxmem.dll.\"
  id=\"image47\" alt=\"Copy Error: Setup cannot copy the file staxmem.dll.\" src=\"/assets/wp-content/uploads/2006/03/staxmem.png\"
  />\r\n\r\nMicrosoft helpfully offers <a href=\"http://support.microsoft.com/?kbid=894351\">a
  solution to this</a> in its online knowledge base. Problem is, the solution (which
  will most often require \"Method 2\" in that article) requires you to have a Service
  Pack 2 CD on hand, and Microsoft's web site does everything it can to talk you <span
  style=\"font-style: italic\">out</span> of getting a copy of that CD.\r\n\r\n"
wordpress_id: 48
wordpress_url: http://old.kevinyank.com/blog/archives/installing-iis-after-service-pack-2/
date: '2006-03-06T22:01:54+1100'
date_gmt: '2006-03-06 11:01:54 +1100'
categories:
- rants
- tech
- web development
tags: []
comments:
- id: 71
  author: Deepa Reddy
  author_email: dreddy@houston.rr.com
  author_url: ''
  date: '2006-06-10T06:30:29+1000'
  date_gmt: '2006-06-09 20:30:29 +1000'
  content: "Hi -- the information you have up is extraordinarily useful, but I am
    unable to fix the very same problem that I have because I started out with WinXP
    Service Pack 1a, so the attempt to integrate with SP2 fails miserably. And I'm
    stuck then not being able to put a working version of IIS on my machine -- an
    install does happen, but it's weird, won't let me get to my localhost etc. (my
    own computer!!)\r\n\r\nHere's what I was wondering -- do you know of anywhere
    I can obtain a WINXP disk so that the slipstream does work and I can move on to
    install? Or even better, an integrated boot disk that (my hope is) will allow
    a smooth IIS install?\r\n\r\nI hope I'm making sense. Any pointers would be more
    than welcome. \r\n\r\n&amp; btw, I'm Canadian, too :)\r\nDeepa"
- id: 654
  author: Justin
  author_email: justin.johnson@withincontext.com
  author_url: ''
  date: '2006-07-16T13:16:49+1000'
  date_gmt: '2006-07-16 03:16:49 +1000'
  content: "Unfortunately, I'm still not able to get past the error message. I'm properly
    merging XP Pro with the SP2 build, but it won't work. I remain extremely frustrated.\r\n\r\nLove
    the site!"
- id: 671
  author: Howl
  author_email: howlsmovingemail@gmail.com
  author_url: ''
  date: '2006-07-20T06:51:37+1000'
  date_gmt: '2006-07-19 20:51:37 +1000'
  content: |-
    Greetings, I think I found a solution on another site.  I did this:

    Exited the entire add or remove programs panel.  Then opened a command window and entered: esentutl /p %windir%\security\database\secedit.sdb

    After doing this I attempted to add the IIS component and it worked perfectly.
- id: 813
  author: Frank
  author_email: franktellsastory@gmail.com
  author_url: http://www.franktellsastory.com
  date: '2006-08-02T12:25:46+1000'
  date_gmt: '2006-08-02 02:25:46 +1000'
  content: Thanks so much Howl! That worked perfectly for me too - I've been trying
    all day to get this installation to work and yours was the only way that did.
- id: 846
  author: Proka
  author_email: prokagod@hotmail.com
  author_url: http://www.elvensoft.ro
  date: '2006-08-08T21:14:24+1000'
  date_gmt: '2006-08-08 11:14:24 +1000'
  content: |-
    It also helped me. And I'm not canadian :P Though I have a friend there :D

    Thank you
- id: 968
  author: Renato
  author_email: rpartenza@yahoo.com
  author_url: ''
  date: '2006-08-28T10:59:00+1000'
  date_gmt: '2006-08-28 00:59:00 +1000'
  content: "Hi there, I have sp2 via windows update. When in Add Components, I clicked
    IIS, I got the message to load CD with SP2.\r\nI've attempted:\r\nesentutl/C:\\Windows\\security|Database\\secedit.sdb\r\nand
    I get illegal mode message .\r\n Can someone, please help.  Thank you.  Regards
    Renato"
- id: 975
  author: G
  author_email: gerardb5@gmail.com
  author_url: ''
  date: '2006-08-30T03:00:17+1000'
  date_gmt: '2006-08-29 17:00:17 +1000'
  content: "Hi there,\r\nI too have sp2 installed and have the same trouble with IIS.
    \r\nI tried entering the command:\r\nesentutl /p %windir%\\security\\database\\secedit.sdb\r\non
    a command prompt which gave me a message saying it was successful but when I tried
    to install the IIS component it still fails as before. \r\n\r\nAnyone have any
    other advice on a fix?\r\n\r\nThanks, \r\nG"
- id: 1007
  author: Cildemac
  author_email: cildemac@hotmail.com
  author_url: ''
  date: '2006-09-03T07:11:22+1000'
  date_gmt: '2006-09-02 21:11:22 +1000'
  content: "Hi there!\n\nI already tried it but I had no success.\nWhat I actually
    did was downloading the file, uncompressing it and then I copied the folder some
    place else - since the temp one is deleted once you cancel the installation.\nAfterwards,
    I expanded the files:\n\nfor %i in (*.??_) do expand -r %i\n\nDidn't work pointing
    it the folder where the whole SP2 was already unpacked and expanded.\n\nAs my
    last hope was going away, I used virtual CD to generated it just another unit
    letter - just in case. In the end, didn't work out as well :( \nMaybe I should
    burn a CD with SP2 though I guess it makes NO difference at all!\n\nStill no answer
    guys."
- id: 1024
  author: mos
  author_email: stopwaiting@hotmail.com
  author_url: ''
  date: '2006-09-06T21:29:31+1000'
  date_gmt: '2006-09-06 11:29:31 +1000'
  content: "ok i have the same famous problem\r\ni tried the first fix: \r\nesentutl
    /p %windir%\\security\\database\\secedit.sdb\r\nit didnt help\r\ni turned to the
    second solution - but here i am stuck !!\r\ni downloaded the sp2 file and extracted
    it however the second solution instracts to run a command named xpsp2.exe however
    this file is no where to be found in the sp2 package or xpsp2 cd - i am quite
    surprised that i am the only one with this specific problem since i tried lots
    of diffrent sources !!!\r\nany idea anyone ??? or am i all alone with this issue
    ???"
- id: 1025
  author: mos
  author_email: stopwaiting@hotmail.com
  author_url: ''
  date: '2006-09-06T23:56:17+1000'
  date_gmt: '2006-09-06 13:56:17 +1000'
  content: "i got it !! i got it !!\r\nall the fixes solutions and articles didnt
    help me - so i fixed it myself with just a tiny little thinking !!\r\neverybody
    is talking about the following folder:\r\n%windir%\\security\\Database\r\nso i
    just deleted the 2 files in this folder and copied them back there from a paralel
    windows xp sp2 working ok system !! that's all !! it worked !!"
- id: 1153
  author: CitizenZed
  author_email: arch3flu55@yahoo.com
  author_url: ''
  date: '2006-09-19T12:19:56+1000'
  date_gmt: '2006-09-19 02:19:56 +1000'
  content: |-
    I'm lost.  I tried the esentutl /p %windir%\security\database\secedit.sdb idea but it did not work.  Same thing as before, asking for an SP2 CD I don't have.

    The post right above mine sounds like it has a solution - but I'm not understanding it.  What exactly is a "paralel windows xp sp2 working ok system"?
- id: 1270
  author: dan
  author_email: daniel.eliades@gmail.com
  author_url: http://www.tripping-penguin.com
  date: '2006-09-26T13:30:58+1000'
  date_gmt: '2006-09-26 03:30:58 +1000'
  content: man mos that was common sense dunno why i didnt think of it.. thanks!
- id: 1314
  author: bradster
  author_email: johnsmith@hotmail.com
  author_url: ''
  date: '2006-09-29T02:48:59+1000'
  date_gmt: '2006-09-28 16:48:59 +1000'
  content: citixzenZed helped me... shot bra
- id: 1415
  author: mos
  author_email: stopwaiting@hotmail.com
  author_url: ''
  date: '2006-10-04T01:38:32+1000'
  date_gmt: '2006-10-03 15:38:32 +1000'
  content: "hey CitizenZed - what i ment is just go to a diffrent machine running
    windows xp sp2 were iis was installed with no problem. \r\nin that system go to
    %windir%\\security\\Database - copy the files from that folder to the same folder
    on the problematic machine - and thats it.\r\nyou can also keep these 2 files
    in a share on the network and next time you have this problem just copy them from
    there to the problematic machine at the same location: %windir%\\security\\Database."
- id: 1911
  author: Ned Flanders
  author_email: ned@flanders.com
  author_url: http://www.flanders.com
  date: '2006-10-27T14:46:42+1000'
  date_gmt: '2006-10-27 04:46:42 +1000'
  content: I'm not canadian either but thanks heaps it worked!
- id: 2108
  author: dave hall
  author_email: myeguardian-dave@yahoo.co.uk
  author_url: ''
  date: '2006-11-04T23:03:01+1100'
  date_gmt: '2006-11-04 13:03:01 +1100'
  content: "Hello my name is dave hall and i really need your help, i've recently
    installed IIS 5.1 on my computer but whenever i attempt to connect to the server
    i am faced with a 'HTTP 500 internal server error' how can i fix this problem?
    thank you in advanced,\r\n       Yours Hopefully,\r\n             Dave Hall"
- id: 2970
  author: mikew909
  author_email: mikew909@iinet.net.au
  author_url: ''
  date: '2006-12-05T17:20:39+1100'
  date_gmt: '2006-12-05 07:20:39 +1100'
  content: Same thing happened to me, useful tip thanks a lot
- id: 2998
  author: doobd
  author_email: doobd@doobdNOSPAM.com
  author_url: http://www.doobd.com
  date: '2006-12-07T01:31:49+1100'
  date_gmt: '2006-12-06 15:31:49 +1100'
  content: "hi!\n\ni found a solution to the same problem. \n\ni phoned microsoft
    support center and this is what they said: you cannot install IIS from original
    WINXP install CD, unless it allready has SP2 on it. since i have original WINXPpro
    CD (with SP1) and i have installed SP2 lately (friend brought it on CD), i cannot
    use my original CD for updating windows components (installing IIS).\n\nsolution
    is as follows: you have to make install CD for XP that contains SP2. you can do
    that by this steps:\n\n1. copy contents of your original WINXP CD to some folder
    on your hard drive\n2. copy SP2 exe file to some other folder\n3. download cool
    program needed for this purpose: http://www.nliteos.com/download.html\n4. install
    it, run it, and follow onscreen instructions. you'll be prompted to browse for
    win xp folder (where you copied winxp cd). liteos can be used for many purposes,
    but for this one just choose 'integrate service pack' on one of later menus (next,
    next... :). than you'll be prompted to browse to SP2 exe file... and that's it.
    you can burn compilation directly onto cd, or make .iso image. \n\nnow use the
    new compiled CD to install IIS!\n\nduring the install, it asked mi twice to locate
    some file, but that file was on compiled CD (why it asked?) so i just choose it,
    and it will go on.\n\nhope this will help someone!\n\nrespect\n\n     doobd"
- id: 3203
  author: Brian
  author_email: brianjbarber@gmail.com
  author_url: ''
  date: '2006-12-15T02:26:55+1100'
  date_gmt: '2006-12-14 16:26:55 +1100'
  content: doobd, you're advice is right on the money.  IIS installed without hesitation
    once I directed it to the folder where the newly compiled installed CD was residing.
- id: 5737
  author: Mouna
  author_email: monashebli@yahoo.com
  author_url: ''
  date: '2007-01-27T00:50:41+1100'
  date_gmt: '2007-01-26 14:50:41 +1100'
  content: "Dear Howl \r\n\r\nthanks allot .. it works \r\nI tried before Microsoft
    web site but it dosn't work"
- id: 5769
  author: Dave IN NJ
  author_email: dave@agservers.com
  author_url: ''
  date: '2007-01-27T11:46:28+1100'
  date_gmt: '2007-01-27 01:46:28 +1100'
  content: "Amazing... I used the cmd line esentutl /p %windir%\\security\\database\\secedit.sdb\r\n
    Then used the sp2 made cd by the last post and everything worked."
- id: 6841
  author: Ginny Ryder
  author_email: vryder@eircom.net
  author_url: ''
  date: '2007-02-11T05:48:13+1100'
  date_gmt: '2007-02-10 19:48:13 +1100'
  content: Thanks Howl - that's amazing.  I had tried unsuccessfully to install IIS
    for about 3 hours ! ! Found no help on the official sites.  You supplied the answer
    above.  Very grateful.
- id: 7121
  author: gbroke
  author_email: nsrgreg@netscape.net
  author_url: ''
  date: '2007-02-14T11:31:34+1100'
  date_gmt: '2007-02-14 01:31:34 +1100'
  content: "Thanks for this thread!!!  \r\nI did exactly as doobd described, and it
    worked perfectly!  \r\nPlus that nlite software is super slick!\r\nGreat job!
    \ Saved me hours of searching!"
- id: 8012
  author: Durai
  author_email: duraiblacky@yahoo.com
  author_url: https://kevinyank.com/blog/archives/installing-iis-after-service-pack-2
  date: '2007-02-23T22:50:50+1100'
  date_gmt: '2007-02-23 12:50:50 +1100'
  content: "Hei,\r\n\r\nThx a lot howl.\r\nIts working like what u said\r\nesentutl
    /p %windir%\\security\\database\\secedit.sdb\r\nI was trying this for many days
    and at last i searched google for this problem.\r\nthk u once again."
- id: 8079
  author: Klang Community eSpace
  author_email: kimmy@myklang.com
  author_url: http://www.myklang.com
  date: '2007-02-24T11:50:26+1100'
  date_gmt: '2007-02-24 01:50:26 +1100'
  content: "Thank you for sharing your experience here. I personally have benefited
    from your article. It has saved me hours of troubleshooting.\r\n\r\nCheers."
- id: 9931
  author: Bladerunner
  author_email: bladerunner_1973@hotmail.com
  author_url: ''
  date: '2007-03-12T21:55:29+1100'
  date_gmt: '2007-03-12 11:55:29 +1100'
  content: "doobd solution work well, I have MCE that ships with SP 2 yet I still
    got a message asking for the SP2 CD!!! So I used the nLite software and all is
    well.\r\n\r\nMaybe Microsoft should invest some more money into fixing the bugs
    in it's software."
- id: 11240
  author: Mike
  author_email: asdf@wiu.edu
  author_url: ''
  date: '2007-03-21T02:37:13+1100'
  date_gmt: '2007-03-20 16:37:13 +1100'
  content: "I didn't have a secedit.sdb in the security folder.  After all else failed,
    I copied that file from another XP box and IIS installed without a problem.  \r\n\r\nNo
    idea out that was deleted."
- id: 11274
  author: BobG
  author_email: bgroendyke@csuchico.edu
  author_url: ''
  date: '2007-03-21T06:57:19+1100'
  date_gmt: '2007-03-20 20:57:19 +1100'
  content: Thanks for the nlite solution, works like a charm.
- id: 11707
  author: Moggie
  author_email: mog10@bigpond.net.au
  author_url: ''
  date: '2007-03-22T14:38:28+1100'
  date_gmt: '2007-03-22 04:38:28 +1100'
  content: |-
    Thanks to you, Howl.

    You are better informed than MS :o)

    Worked a treat.

    ...
- id: 16080
  author: Zooni
  author_email: zoonib@gmail.com
  author_url: ''
  date: '2007-04-05T03:45:31+1000'
  date_gmt: '2007-04-04 17:45:31 +1000'
  content: "Here is a link to the MS Knowledge base article that talks about the fix
    to this problem. http://support.microsoft.com/kb/894351\r\n\r\nthanks for the
    good info here."
- id: 24504
  author: Install IIS on Windows XP SP2 without CD | Technology News for your Daily
    Use
  author_email: ''
  author_url: http://www.prakhar.org/install-iis-on-windows-xp-sp2-without-cd-3470
  date: '2007-05-09T15:45:26+1000'
  date_gmt: '2007-05-09 05:45:26 +1000'
  content: "[...] I tried to find a solution on the Internet. I read and practiced
    many solutions including a complicated one from Microsoft Support and some simple
    solutions from Installing IIS after Service Pack 2 . My effort didn&#8217;t pay
    back. [...]"
- id: 27235
  author: vlad
  author_email: vlad.puha@yahoo.com
  author_url: http://donthaveany
  date: '2007-05-20T10:26:13+1000'
  date_gmt: '2007-05-20 00:26:13 +1000'
  content: "Good job\r\n\r\nhelp me as well. Thanks keep this page here."
- id: 29794
  author: BlAckFeVeR
  author_email: iwan.rogge@gmail.com
  author_url: ''
  date: '2007-06-01T23:42:43+1000'
  date_gmt: '2007-06-01 13:42:43 +1000'
  content: "so i just deleted the 2 files in this folder and copied them back there
    from a paralel windows xp sp2 working ok system !! thatâ€™s all !! it worked !!
    \r\n\r\nTried it Works perfect!!!\r\n\r\nTried SP2 download, got stuck.\r\n\r\nI
    deleted the database and then get a copy of a XP pro machine with IIS."
- id: 32081
  author: JC from NZ
  author_email: chilcottroad@hotmail.com
  author_url: ''
  date: '2007-06-18T14:33:32+1000'
  date_gmt: '2007-06-18 04:33:32 +1000'
  content: |-
    doobd's solution work great for me to after trying everything else!

    Awesome... cheers.
- id: 35523
  author: ronaldional
  author_email: ronaldional@yahoo.com
  author_url: http://-
  date: '2007-07-07T03:35:28+1000'
  date_gmt: '2007-07-06 17:35:28 +1000'
  content: million thanx to u for sharing u'r great solution to solve the problem,it's
    simple but not everybody know
- id: 45383
  author: Hany
  author_email: Hnaysm@gmail.com
  author_url: ''
  date: '2007-08-16T07:04:20+1000'
  date_gmt: '2007-08-15 21:04:20 +1000'
  content: "mos,\r\n\r\nMan ( or lady)  your delete and copy tip of those 2 files
    under the c:\\windows\\security\\database ... works like a dream.. THANK YOU!"
- id: 53793
  author: Trux
  author_email: trx0226@hotmail.com
  author_url: ''
  date: '2007-09-25T11:13:59+1000'
  date_gmt: '2007-09-25 01:13:59 +1000'
  content: Howl's suggestion worked for me.  Thanks!
- id: 57643
  author: Emma
  author_email: eako-nai@ix.netcom.com
  author_url: ''
  date: '2007-10-20T08:14:40+1000'
  date_gmt: '2007-10-19 22:14:40 +1000'
  content: "Kevin: Your article was exceptionally well written and straight to the
    point.  However, since I did not have the secedit.sdb file on my system at all,
    I proceeded to follow Mos' suggestion.  Thank you all the same.\r\n\r\nMos:  Your
    suggestion was brilliant!  I simply copied the secedit.sdb file from another Windows
    XP Pro SP2 machine and saved it in my \"not working\" XP machine.  I then proceeded
    to Install IIS the normal way and it WORKED!  Thank you so much!"
- id: 70386
  author: abod
  author_email: ashishnaik1@gmail.com
  author_url: ''
  date: '2007-12-12T15:34:37+1100'
  date_gmt: '2007-12-12 05:34:37 +1100'
  content: doobd, your solution worked for me. Thanks!
- id: 70438
  author: Steve
  author_email: jaythehawk77@hotmail.com
  author_url: ''
  date: '2007-12-13T11:05:44+1100'
  date_gmt: '2007-12-13 01:05:44 +1100'
  content: Many thanks.  The security fix did the trick!
- id: 70466
  author: SR
  author_email: smitharaja@gmail.com
  author_url: ''
  date: '2007-12-13T21:32:54+1100'
  date_gmt: '2007-12-13 11:32:54 +1100'
  content: "Well while installing IIS just like that (without inserting the CD), it
    looked as though it is configuring with \"configuring IIS\".  Once &gt;later,
    i tried running \"http://localhost\" and it returned a page which said \r\n&gt;that
    'hTTP 500 error' or something similar. i found a folder called 'inetpub' which
    had folders like 'wwwroot' and some others. I saved a .asp page in the wwwroot
    folder and \r\n&gt;tried running it via 'Run' in start menu. but as usual it gave
    an &gt;error(internet explorer) you know the 'file not found thing'. It didnt
    show me any errors but still I am not able to go to 'http://localhost' stuff.
    I actually need this IIS to run asp files which is my small project. Please try
    to help me out on how to configure without a CD. When i check it says my PC is
    updated with SP 2.  can someone explain in simple steps what to do thanx a zillion
    in advance for that...SR"
- id: 75687
  author: oliversl
  author_email: oliversl@gmail.com
  author_url: http://tinymailto.com/oliversl
  date: '2008-01-30T11:00:26+1100'
  date_gmt: '2008-01-30 01:00:26 +1100'
  content: "Thanks all!\r\nI had WinXP SP1, upgraded to SP2 and then tryied to install
    IIS, the solucion was:\r\nesentutl /p %windir%\\security\\database\\secedit.sdb\r\n\r\nIt
    worked!\r\nOliver"
- id: 76222
  author: Goral
  author_email: goraldogan@gmail.com
  author_url: ''
  date: '2008-02-03T17:42:49+1100'
  date_gmt: '2008-02-03 07:42:49 +1100'
  content: "Dear Howl! Thank you very much for your help! My ISS problem is solved
    with your help.\r\nI writed to command line \"esentutl /p %windir%\\security\\database\\secedit.sdb\".
    after ISS installation started properly."
- id: 76626
  author: Vj Chan
  author_email: chandra_kv@yahoo.com
  author_url: ''
  date: '2008-02-06T23:26:10+1100'
  date_gmt: '2008-02-06 13:26:10 +1100'
  content: thank you all, as per my observation, the steps given by Howl has resolved
    the issue of installing IIS by default installation, i mean with out selecting
    additional components. Where in by the steps given my MOS we can install IIS by
    selecting all additional components.
- id: 79107
  author: dcu
  author_email: dcu@netvision.net.il
  author_url: ''
  date: '2008-02-27T05:03:10+1100'
  date_gmt: '2008-02-26 19:03:10 +1100'
  content: "Hi everybody\r\nI've been messing with the same problem for quite some
    time now\r\nevery time i try to run the \r\n\"esentutl /p c:windows\\security\\database\\secedit.sdb\"\r\nI
    keep getting the same error \r\n\"accsess to source database c:windows\\security\\database\\secedit.sdb
    failed with with jet error -1811\"\r\nI have no idea as to what to do next\r\nanybody
    got an idea?"
- id: 79111
  author: dcu
  author_email: dcu@netvision.net.il
  author_url: ''
  date: '2008-02-27T05:29:58+1100'
  date_gmt: '2008-02-26 19:29:58 +1100'
  content: "forget the last comment it all worked out just as Howl said \r\nmuch obliged
    \ thank you"
- id: 86537
  author: Pasha
  author_email: sanane@bugmenot.com
  author_url: ''
  date: '2008-05-14T09:48:18+1000'
  date_gmt: '2008-05-13 23:48:18 +1000'
  content: |-
    Thanks Howl,

    I was messing with this problem for about an hour, you are a life saver!
- id: 87878
  author: Archimedes
  author_email: hart_pa@hotmail.com
  author_url: ''
  date: '2008-05-22T20:03:49+1000'
  date_gmt: '2008-05-22 10:03:49 +1000'
  content: Been trying for a solution to SP2 IIS install problem for HOURS now but
    sadly none of these solutions seem to work, it keeps asking for admxprox.dll which
    isnt on the XP CD or in the extracted i386 folder.  Driving me NUTS! Grr!
- id: 91954
  author: samay ranjan pattnayak
  author_email: samaypattnayak@gmail.com
  author_url: ''
  date: '2008-06-26T05:42:19+1000'
  date_gmt: '2008-06-25 19:42:19 +1000'
  content: well.i tried alot. still couldnt find the solution. i have got service
    pack2 alredy installed on ma computer. is it again required to reinstall it?
- id: 92386
  author: Dillon
  author_email: wolfofmanyfaces@gmail.com
  author_url: ''
  date: '2008-06-30T11:28:56+1000'
  date_gmt: '2008-06-30 01:28:56 +1000'
  content: A big thank you to HOWL ... your solution worked perfectly for my installation
    on Win XP Pro SP2
- id: 95536
  author: zonker
  author_email: zonker3210@yahoo.com
  author_url: ''
  date: '2008-07-25T12:01:59+1000'
  date_gmt: '2008-07-25 02:01:59 +1000'
  content: Howl's  suggestion worked for me. Also, the post itself was a god-send.
    Thanks a lot for sharing this information!
- id: 126747
  author: Lucky
  author_email: l.nejtek@atlas.cz
  author_url: ''
  date: '2009-01-29T23:48:55+1100'
  date_gmt: '2009-01-29 13:48:55 +1100'
  content: Thanks a lot to Howl. I've tried this solution and works perfectly! THAAAAAAANKS!!!!
    :-)
- id: 133262
  author: Zaw
  author_email: thant11@yahoo.com
  author_url: ''
  date: '2009-02-15T11:26:36+1100'
  date_gmt: '2009-02-15 01:26:36 +1100'
  content: Thanks a lot Howl. It is 100% workable.
- id: 155047
  author: kenneth
  author_email: kdburnett_2000@yahoo.com
  author_url: ''
  date: '2009-04-16T02:34:44+1000'
  date_gmt: '2009-04-15 16:34:44 +1000'
  content: thanks howl!! the cmd also work for me.. been trying to figure out how
    to install iss for 2hrs now!! it was frustrating.
- id: 255748
  author: hosein
  author_email: hosein1066@gmail.com
  author_url: ''
  date: '2009-11-23T01:32:39+1100'
  date_gmt: '2009-11-22 15:32:39 +1100'
  content: "hello  \nThanks you\nI am iranian."
- id: 261359
  author: Chai
  author_email: chaijxiong@hotmail.com
  author_url: ''
  date: '2009-12-16T16:51:17+1100'
  date_gmt: '2009-12-16 06:51:17 +1100'
  content: I am Hmong and it also help me too.  Many thanks.
- id: 302111
  author: fishbill
  author_email: fishbill@gmail.com
  author_url: ''
  date: '2010-04-20T19:44:26+1000'
  date_gmt: '2010-04-20 09:44:26 +1000'
  content: The solution that mos proposed adout replacing the files from a working
    system works fine. Thanks a lot.
- id: 303241
  author: Mizo
  author_email: mizoali@hotmail.com
  author_url: ''
  date: '2010-05-07T00:40:09+1000'
  date_gmt: '2010-05-06 14:40:09 +1000'
  content: |-
    thank you very much
    i was going to learn php coz i lost hope for a week
    but finaly this is working
    thank you again
- id: 309050
  author: Cristian
  author_email: microem@hotmail.com
  author_url: ''
  date: '2010-06-18T22:59:42+1000'
  date_gmt: '2010-06-18 12:59:42 +1000'
  content: "Solution for SP3 IIS\n\nIf you have this problem with XP SP3 i managed
    to bypass it by downloading the \"Windows XP Service Pack 3 Network Installation
    Package for IT Professionals and Developers\" which I installed. \n\nAfter rebooting
    the PC, I tried to install the IIS service and, at my surprise, it asked me the
    Windows XP Professional Edition, which i used to install XP, and not the \"Service
    Pack 3 Windows Cd\".\n\nI hope it will work for other people."
- id: 314955
  author: sam
  author_email: smsam1@yahoo.com
  author_url: ''
  date: '2010-08-06T16:09:17+1000'
  date_gmt: '2010-08-06 06:09:17 +1000'
  content: hey i cant figure it out what is "xpsp2 " command there! it is not working?
- id: 329431
  author: mike gonzales
  author_email: engr_gonzales@yahoo.com
  author_url: ''
  date: '2010-11-20T00:36:40+1100'
  date_gmt: '2010-11-19 14:36:40 +1100'
  content: |-
    @Howl
    Jul 20th, 2006 at 6:51 am
    Greetings, I think I found a solution on another site. I did this:

    Exited the entire add or remove programs panel. Then opened a command window and entered: esentutl /p %windir%\security\database\secedit.sdb

    After doing this I attempted to add the IIS component and it worked perfectly.

    It works for me.. thank you!
---
<p>I'm preparing to record one in <a href="http://www.sitepoint.com/blogs/2006/02/24/screencast-photoshop-starburst-effect/">a series of video tutorials</a> for <a href="http://www.sitepoint.com/">SitePoint</a>, for which I'll need a copy of Microsoft <a href="http://www.microsoft.com/WindowsServer2003/iis/">Internet Information Services</a> (IIS), the web server that comes with Windows XP Professional, installed on my home computer for the first time since I installed Windows.</p>
<p>The usual way to do this is to launch Add or Remove Programs from the Control Panel, click Add/Remove Windows Components, pick IIS from the list and then go from there. But if, like me, you're working with a copy of Windows that has been updated to <a href="http://www.microsoft.com/windowsxp/sp2/">Service Pack 2</a>, you'll just get this error:</p>
<p><img title="Copy Error: Setup cannot copy the file staxmem.dll." id="image47" alt="Copy Error: Setup cannot copy the file staxmem.dll." src="/assets/wp-content/uploads/2006/03/staxmem.png" /></p>
<p>Microsoft helpfully offers <a href="http://support.microsoft.com/?kbid=894351">a solution to this</a> in its online knowledge base. Problem is, the solution (which will most often require "Method 2" in that article) requires you to have a Service Pack 2 CD on hand, and Microsoft's web site does everything it can to talk you <span style="font-style: italic">out</span> of getting a copy of that CD.</p>
<p><a id="more"></a><a id="more-48"></a>After searching all over the site for a way to get the CD without having to pay (and wait) for Microsoft to ship it to me, I finally gave up and submitted a support request to Microsoft explaining my dilemma (you get two such requests for free).</p>
<p>In the end, I was able to find the answer myself. <a href="http://www.winsupersite.com/showcase/windowsxp_sp2_slipstream.asp">Via Paul Thurrott</a>, I was able to find <a href="http://www.microsoft.com/downloads/details.aspx?FamilyId=049C9DBE-3B8E-4F30-8245-9E368D3CDB5A&displaylang=en">the full download of Service Pack 2</a>, labelled "Windows XP Service Pack 2 Network Installation Package for IT Professionals and Developers" to scare off the plebs.</p>
<p>I had even found that download while scouring Microsoft's site on my own, but the many messages on the page (all of which amount to "you don't want this!") drove me away.</p>
<p>I'd provide feedback on <a href="http://support.microsoft.com/?kbid=894351">the knowledge base article</a>, but it looks like Microsoft took away the feedback solicitation feature of its knowledge base. I'm kinda wishing I hadn't wasted one of my free support requests...</p>
