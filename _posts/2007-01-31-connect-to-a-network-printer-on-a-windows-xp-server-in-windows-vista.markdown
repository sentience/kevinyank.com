---
layout: post
status: publish
published: true
title: Connect to a Network Printer on a Windows XP Server in Windows Vista
author: Kev
author_login: kyank
author_email: thatguy@kevinyank.com
author_url: https://kevinyank.com
excerpt: "For better or worse, <a href=\"http://www.microsoft.com/windows/products/windowsvista/\">Windows
  Vista</a> is out today and I'll shortly be moving to it as the primary operating
  system on both my work and home PCs. Aside from compatibility glitches in certain
  Adobe applications, everything I need to work on Vista does (if a little shakily,
  in the case of <a href=\"http://www.mozilla.com/firefox/\">Firefox</a>).\r\n\r\nThe
  one issue that almost prevented me from making the move was my need to connect to
  the shared printer at the office.\r\n\r\n"
wordpress_id: 142
wordpress_url: http://old.kevinyank.com/blog/archives/connect-to-a-network-printer-on-a-windows-xp-server-in-windows-vista/
date: '2007-01-31 11:11:15 +1100'
date_gmt: '2007-01-31 01:11:15 +1100'
categories:
- tech
tags: []
comments:
- id: 6105
  author: Tuna
  author_email: web@radharc.com.au
  author_url: http://manwithnoblog.com
  date: '2007-01-31 13:16:12 +1100'
  date_gmt: '2007-01-31 03:16:12 +1100'
  content: That reminds me of Window 3.11 printer driver installations for network
    printers, good to see over all those years we have made some progress, not. :)
- id: 6997
  author: Franklin Krebs
  author_email: dalekrebs@yahoo.com
  author_url: ''
  date: '2007-02-12 17:11:19 +1100'
  date_gmt: '2007-02-12 07:11:19 +1100'
  content: "Great tech help article!!!  I have been looking for days through Microsoft
    Books on Vista and other resources including internet searches for this exact
    problem.\n\nI have an Epson CX4600 that I could not get Vista to talk to via my
    home network where the printer is connected to an XP machine.  I followed the
    same guidelines as the Samsung and it immediately resolved my problem...well almost
    immediate.  \n\nI had to go in and turn off \"Use Off-Line\" on the printer properties.
    \ I followed your instructions and everything seemed to be fine, but it would
    not print.  I could view the properties of the printer -- but the printing would
    not start.  After turning off the \"Use Off-Line\" check mark, I was off and running.\n\nI
    appreciate this sooooo much.\n\nGod Bless you,\nFDKrebs"
- id: 6999
  author: Franklin Krebs
  author_email: dalekrebs@yahoo.com
  author_url: ''
  date: '2007-02-12 17:23:09 +1100'
  date_gmt: '2007-02-12 07:23:09 +1100'
  content: |-
    Also, the printer could not be directly accessed from the network properties window...only from the local printer settings under the control panel.

    Thanks,
    FDKrebs
- id: 7934
  author: Troy Warwick
  author_email: troy@cityonthehill.com
  author_url: ''
  date: '2007-02-23 04:59:01 +1100'
  date_gmt: '2007-02-22 18:59:01 +1100'
  content: "I thought I'd tell other of how I got my Samsung ML-2250 network printer
    installed on Vista.  I tried the above steps and kept getting the error message
    that this port is already in use.  \r\n\r\nSo what worked for me was selecting
    \"add a printer\" , \"local printer\",  then browse to your network printer's
    path from the drop down list, then select your printer driver.\r\n\r\nHope this
    helps someone."
- id: 7938
  author: Kosta Eftimov
  author_email: kosta11@mt.net.mk
  author_url: ''
  date: '2007-02-23 05:54:03 +1100'
  date_gmt: '2007-02-22 19:54:03 +1100'
  content: |-
    I have the same problem with my printer in Office. We have Router like server and our printer is attachet on the router  on USB port. When I use WIN XP it was no problem to install like network printer but when I install Vista all the time I have some erorr with conection. It was some message like the server is not acessable or there is no printer attachet on the server.
    And after two hours I resolve the problem on the same way like  in this article.
    But after installing new  LOCAL PORT and finishing with giving the server name and printer name a must set up like I use printer Offline than I restart the PC and after that I turn on printer back using Online and finaly a resolve the problem.
- id: 8145
  author: Tor-AndrÃ©
  author_email: chevaganza@gmail.com
  author_url: ''
  date: '2007-02-25 18:52:29 +1100'
  date_gmt: '2007-02-25 08:52:29 +1100'
  content: "I have been struggeling with installing my shared Cannon printer, but
    \ thanks to this superb article I was finally able to print from my Vista PC.\r\n\r\nThanks,\r\nTor-AndrÃ©"
- id: 8233
  author: Tre
  author_email: sinstermotives@hotmail.com
  author_url: ''
  date: '2007-02-27 00:26:04 +1100'
  date_gmt: '2007-02-26 14:26:04 +1100'
  content: wow so much searching and so many complicated answers and this simple one
    actually works.
- id: 8250
  author: Tre
  author_email: sinstermotives@hotmail.com
  author_url: ''
  date: '2007-02-27 11:23:31 +1100'
  date_gmt: '2007-02-27 01:23:31 +1100'
  content: ok its broken again the next day :)
- id: 8252
  author: Tre
  author_email: sinstermotives@hotmail.com
  author_url: ''
  date: '2007-02-27 12:02:14 +1100'
  date_gmt: '2007-02-27 02:02:14 +1100'
  content: "Sorry to spam your blog.\r\n\r\nI had a look at my settings and it seems
    it was set to offline for some reason.\r\n\r\nall seems to be working again.\r\n\r\nthanks
    for your help!"
- id: 8305
  author: Ed-Doc
  author_email: lfreise@adelphia.net
  author_url: ''
  date: '2007-02-28 03:29:23 +1100'
  date_gmt: '2007-02-27 17:29:23 +1100'
  content: "You'd think for the billions MS has they could have something like this
    resolved before release.  Okay, I'm off my box.\r\n\r\nThe described approach
    for loading the drivers worked, but I'm still having a problem with both of my
    network printers going off-line for the Vista machine after bootup.  I can't seem
    to find a property setting on either printer to un-check the \"Use off-line\"
    option.\r\n\r\nSet up is:  Canon MP-730 on a Linksys print server.\r\n            Samsung
    2150 on a Win 98SE machine\r\n\r\nAll network printing works great on my four
    Win XP machines.  Vista's got me in a twista'!(sorry)\r\n\r\nThe Doc"
- id: 8309
  author: Laurent
  author_email: lthaler@free.fr
  author_url: http://lthaler.free.fr
  date: '2007-02-28 06:27:42 +1100'
  date_gmt: '2007-02-27 20:27:42 +1100'
  content: "I loosed the whole afternoon trying to connect a new vista laptop to an
    old XP desktop who share the inkjet, and all what I got was several explorer hangs
    ... \n\nTHANKS A LOT\n\nLaurent"
- id: 8311
  author: LeOuaibeLog
  author_email: ''
  author_url: http://lthaler.free.fr/dotclear/index.php/2007/02/27/97-comment-imprimer-depuis-vista-sur-une-imprimante-partagee-sous-xp
  date: '2007-02-28 06:55:08 +1100'
  date_gmt: '2007-02-27 20:55:08 +1100'
  content: |-
    <strong>Comment imprimer depuis Vista sur une imprimante partagée sous XP ?</strong>

    Et bien bêtement j'ai perdu l'après-midi sur cette c...rie, et je ne sais pas si ce qui me fait le plus ch... c'est d'avoir perdu une demi journée de vacances ou de ne pas avoir trouvé la solution tout seul ! Le pire c'est que j'étais...
- id: 8326
  author: JNA2900
  author_email: jna7802@yahoo.com
  author_url: ''
  date: '2007-02-28 13:00:14 +1100'
  date_gmt: '2007-02-28 03:00:14 +1100'
  content: Will any of these solutions work if the printer is attached to a Win98
    machine and there is no Vista driver available for the printer?
- id: 8344
  author: poelman
  author_email: ttepoele@hotmail.com
  author_url: ''
  date: '2007-02-28 19:51:07 +1100'
  date_gmt: '2007-02-28 09:51:07 +1100'
  content: "Thank you!!! This article was a great help.\r\n\r\nRegards Poelman"
- id: 8673
  author: Chris
  author_email: cristib@cogeco.ca
  author_url: ''
  date: '2007-03-04 15:00:13 +1100'
  date_gmt: '2007-03-04 05:00:13 +1100'
  content: thanks a bunch, you were great in figuring this one out; it worked with
    my Samsung SCX-4100
- id: 8936
  author: Chipp
  author_email: skipflyer@hotmail.com
  author_url: ''
  date: '2007-03-07 13:39:13 +1100'
  date_gmt: '2007-03-07 03:39:13 +1100'
  content: This fix worked for an HP PSC 2410 too.  Thanks.
- id: 9558
  author: Keith Lee
  author_email: keithvlee@hotmail.com
  author_url: ''
  date: '2007-03-11 03:53:43 +1100'
  date_gmt: '2007-03-10 17:53:43 +1100'
  content: "Can anyone tell me how to workout the port name in the solution above,
    I keep receiving an error message The network path was not found ?\r\n\r\nVista
    is driving me mad"
- id: 9570
  author: Keith Lee
  author_email: keithvlee@hotmail.com
  author_url: ''
  date: '2007-03-11 04:06:09 +1100'
  date_gmt: '2007-03-10 18:06:09 +1100'
  content: Have found the network address but when the document goes to print, nothing
    happens.... any ideas ?
- id: 9586
  author: Randy
  author_email: randy517@roadrunner.com
  author_url: ''
  date: '2007-03-11 07:14:50 +1100'
  date_gmt: '2007-03-10 21:14:50 +1100'
  content: "How do you network a printer connected to a Vista Computer with an XP
    laptop?  The printer is HP deskjet 5550 series, and I can't get it connected.\r\nThanks,\r\nRandy"
- id: 10197
  author: Jake
  author_email: jake@gabbrotech.com
  author_url: http://gabbrotech.com
  date: '2007-03-15 00:37:55 +1100'
  date_gmt: '2007-03-14 14:37:55 +1100'
  content: "Thanks for the tip. I only lost an hour or so before I found your installation
    steps. Many thanks!!!!\r\n\r\nJake"
- id: 10304
  author: pierre
  author_email: jezraoui@club-internet.fr
  author_url: ''
  date: '2007-03-16 08:12:58 +1100'
  date_gmt: '2007-03-15 22:12:58 +1100'
  content: "How do you network a printer connected to a Vista Computer with an XP
    laptop? The printer is HP photosmart D5100 series, and I canâ€™t get it connected.\r\nThanks,
    pierre"
- id: 11030
  author: Jonathan
  author_email: XxJJung89xX@gmail.com
  author_url: ''
  date: '2007-03-20 06:47:29 +1100'
  date_gmt: '2007-03-19 20:47:29 +1100'
  content: I have the same printer, SCX-4x16 Series and I'm trying to connect from
    XP Desktop to Vista Notebook.  It keeps saying Network not found?  Any solutions?
- id: 11247
  author: Barry
  author_email: barry@dreamous.com
  author_url: ''
  date: '2007-03-21 05:06:35 +1100'
  date_gmt: '2007-03-20 19:06:35 +1100'
  content: "Thanks, please send your solution to microsoft and dell they did not have
    a clue.\r\n\r\nI installed a vista driver for a simliar printer because mine printer
    does not have a vista driver.\r\nIt worked great.  Hp say some of their drivers
    for vista will be available in July , this really helps\r\n\r\nThanks"
- id: 11847
  author: Andre Mombourquette
  author_email: Andremombo@gmail.com
  author_url: ''
  date: '2007-03-22 22:40:35 +1100'
  date_gmt: '2007-03-22 12:40:35 +1100'
  content: I was Totally stuck and frustrated with trying to network my canon printer
    between an Xp and Vista computer. Thanks for the helpful article, it worked like
    a charm.
- id: 12215
  author: techiesue83
  author_email: scassibry@escdist.com
  author_url: ''
  date: '2007-03-24 00:11:09 +1100'
  date_gmt: '2007-03-23 14:11:09 +1100'
  content: All I can say is THANK YOU!!!
- id: 12693
  author: CheekoRex
  author_email: s.sauve@shaw.ca
  author_url: ''
  date: '2007-03-26 04:44:23 +1000'
  date_gmt: '2007-03-25 18:44:23 +1000'
  content: "Perfect - I used the share name in the port setting and it worked.\r\n\r\nYou
    would think MS would have handled this already. Pure cr_p\r\n\r\nThanks"
- id: 12817
  author: Tre
  author_email: sinstermotives@hotmail.com
  author_url: ''
  date: '2007-03-26 19:15:48 +1000'
  date_gmt: '2007-03-26 09:15:48 +1000'
  content: "I get pop up boxes first time i print after a reset asking me to install
    drivers but it still prints anyway.\r\n\r\nI cant believe canon (in my case) or
    microsoft havnt fixed this.\r\n\r\nI wont be buying a canon printer again... not
    much choice for operating systems."
- id: 15313
  author: sol
  author_email: accounts@wbm.us
  author_url: ''
  date: '2007-04-03 00:37:59 +1000'
  date_gmt: '2007-04-02 14:37:59 +1000'
  content: "I have a similar issue.  My new computer runs Vista Home Premium.  The
    printer is a Ricoh Aficio 1013F and it is connected to the network by a Netgear
    PS101 mini print server.  The mini print server is a gadget that attaches to the
    parallel port on the printer and presents a RJ45 ethernet jack for connection
    to the network.  It works perfectly with all of the other computers on the network.
    \ \r\n\r\nSo this is what happens.  I install the printer by a procedure similar
    to that above, and all is fine.  Then, upon booting up the next day, the printer
    is \"offline\" and will not go online.  I can fool around and change ports (i.e.
    switch between the name and the IP address as in \"//RICOH/P1\" versus \"192.168.0.101\")
    and it will then print, but it prints gibberish."
- id: 15423
  author: Craig C
  author_email: craigclement@gmail.com
  author_url: ''
  date: '2007-04-03 07:48:46 +1000'
  date_gmt: '2007-04-02 21:48:46 +1000'
  content: "Great Job! Finally works on my Lexmark E232.\n\n\"had to go in and turn
    off â€œUse Off-Lineâ€\x9D on the printer properties\" Thanks Franklin as this
    was required for mine to work."
- id: 15535
  author: Nelson
  author_email: nelsonjchan@gmail.com
  author_url: ''
  date: '2007-04-03 14:48:28 +1000'
  date_gmt: '2007-04-03 04:48:28 +1000'
  content: |-
    Hey everyone ... where do you guys find the "use off-line" option?

    I have an HP LaserJet 6L and am having the same problems ... it's connected to an XP machine and shared as HPLaserJ ... I've configured my port as \\dellpc\HPLaserJ and still nothing - not even a test page ... any ideas would be appreciated!
- id: 16858
  author: DeMarco
  author_email: decofamily@gmail.com
  author_url: ''
  date: '2007-04-07 11:27:07 +1000'
  date_gmt: '2007-04-07 01:27:07 +1000'
  content: Thanks a Million!  Works like a champ!!
- id: 17281
  author: Mike S UK
  author_email: michael.shelton3@ntlworld.com
  author_url: ''
  date: '2007-04-08 19:02:23 +1000'
  date_gmt: '2007-04-08 09:02:23 +1000'
  content: "I'm having the same problem with a HP Officejet V45. I have two XP PC's
    with the printer attached to one. I can see the printer from my new VISTA laptop.
    When I send a test page it goes into the print queue then dissapears.\r\n\r\nI
    tried to add a port to the locally installed HPV45 but received an 'access denied'
    message when trying to save it. Any suggestions?"
- id: 17422
  author: Ken A (an Aussie in Australia)
  author_email: kande120@eq.edu.au
  author_url: ''
  date: '2007-04-09 22:54:55 +1000'
  date_gmt: '2007-04-09 12:54:55 +1000'
  content: "This solution worked for me with HP Vista Ultimate Laptop to connect to
    XP Pro Desktop with a Canon S820.\r\nGreat solution and saved me hours of frustration.
    \ Just keep empaphising that you are Canadian and you'll do all right over here.\r\nThanks"
- id: 17488
  author: Bruce R
  author_email: brucerlong@roadrunner.com
  author_url: http://none
  date: '2007-04-10 06:09:13 +1000'
  date_gmt: '2007-04-09 20:09:13 +1000'
  content: Thank goodness for this article. I've spent days on this. I used this method
    and then had to select properties - Print Processor - WinPrint (versus BJ Print
    Processor3) to get my Canon i560s to print. The Canon is installed on the XP desktop
    and my Vista laptop is connected to this two computer home network via a router.
    I just printed a page from my Vista system through the home network!
- id: 17490
  author: Ric
  author_email: fish1_49811@yahoo.com
  author_url: http://www.yahoo.com
  date: '2007-04-10 06:12:33 +1000'
  date_gmt: '2007-04-09 20:12:33 +1000'
  content: "First I would like to let everyone know that I am a novice with computer.
    \ However I do know a little about trying to get my network up and running.\r\n\r\nBut
    first I need to as WHAT THE HELL is and where do you find the NETWORK PATH, and
    NAME???\r\n\r\nI am have as follows:  New Toshiba Laptop with Windows Vista home
    premium installed&gt;a old Gateway PC Desktop with Window XP&gt;a Lexmark 8300
    series all in one Printer&gt;a Linksys wireless router&gt;cable modem.\r\n\r\nThe
    Problem:   I could not connect to my XP to share files or printer with the Vista
    Laptop. I tried all sorts of things.....changed Work-group names to same, reconfigured
    IP address...downloaded Both Windows XP driver for printer on XP machine...and
    the Vista driver from the Lexmark.com site.\r\n\r\nNow heres what happen I downloaded
    a little program known as Network Magic, on both machines. This got up my network
    working together to be able to share files, but not the printer.\r\n\r\nI Beg
    you  Please help...All I want is to make my printer work with my Vista laptop...and
    I need someone to walk me thru it step by step in plain English.\r\n\r\nThe above
    sound good. But im stuck on stupid here....lol....What is a network path, and
    where do I find this name...\r\n\r\nThank you in advance"
- id: 17652
  author: SteveTokyo
  author_email: stbay@comcast.net
  author_url: ''
  date: '2007-04-10 16:05:56 +1000'
  date_gmt: '2007-04-10 06:05:56 +1000'
  content: Excellent advice, worked on the first try.  Thank you.
- id: 18146
  author: Hagen (Norway)
  author_email: hagstu@gmail.com
  author_url: ''
  date: '2007-04-12 05:17:23 +1000'
  date_gmt: '2007-04-11 19:17:23 +1000'
  content: "THANK YOU !!!\r\n\r\nmy i865 from Canon doesn't even have a Vista driver,
    but i installed the XP version on the Vista-PC and created the port as you described.\r\n\r\nWorks
    like a charm !!"
- id: 20559
  author: Kenton
  author_email: cyclwestks@veloemail.com
  author_url: ''
  date: '2007-04-21 23:24:13 +1000'
  date_gmt: '2007-04-21 13:24:13 +1000'
  content: Another success!  Why did MS make printer sharing so difficult between
    XP &amp; Vista?  Thanks
- id: 21043
  author: Darryl
  author_email: drd@market-vantage.com
  author_url: http://www.market-vantage.com
  date: '2007-04-24 05:06:59 +1000'
  date_gmt: '2007-04-23 19:06:59 +1000'
  content: Thanks. I just upgraded to Windows Vista Business and couldn't print to
    the network printer. This was very helpful!
- id: 21166
  author: Bill G.
  author_email: billg_02176@yahoo.com
  author_url: ''
  date: '2007-04-24 21:50:10 +1000'
  date_gmt: '2007-04-24 11:50:10 +1000'
  content: "Hello! \r\n\r\nThe only question I have is how do you know what to name
    the port? My printer name is \"Printer\" but how do I find the network path?\r\n\r\nYour
    help would be greatly appreciated! \r\n\r\nthanks! \r\n\r\nBill G\r\n\r\n\r\nFor
    the port name, enter exactly the network path and share name of your printer (e.g.
    \\\\RECEPTION\\Samsung SCX-4Ã—16 Series)."
- id: 21168
  author: Kev
  author_email: thatguy@kevinyank.com
  author_url: https://kevinyank.com/
  date: '2007-04-24 22:03:05 +1000'
  date_gmt: '2007-04-24 12:03:05 +1000'
  content: |-
    Hi Bill,

    The network path is \\MACHINENAME\SHARENAME, where MACHINENAME is the network name of the computer to which the printer is connected, and SHARENAME is the network share name of the printer (you can find this on the Sharing tab of the printer's properties on the computer to which it is connected).
- id: 21212
  author: Bill G.
  author_email: billg_02176@yahoo.com
  author_url: ''
  date: '2007-04-25 01:35:23 +1000'
  date_gmt: '2007-04-24 15:35:23 +1000'
  content: "Thanks Kev, I appreciate the repsonse. I also have been successful with
    XP desktop and 2 Lap tops, but the VISTA sharing was not something I had attempted.
    \r\n\r\nSo, using your example above, the path would look like this for me?\r\n\r\n\\\\Mshome\\printer\r\n\r\nObvioulsy
    I did not get fancy with names. I kept the default for the Network name (MSHOME)
    and named my printer - \"PRINTER\". \r\n\r\nWould that be correct....??  Thanks
    again .. I could see by lot's of blogs, that the vista - XP sharing was difficult.
    I am so happy I found this site. \r\n\r\nThanks again!!!\r\n\r\nBILL G"
- id: 21247
  author: Bill G.
  author_email: billg_02176@yahoo.com
  author_url: ''
  date: '2007-04-25 03:13:32 +1000'
  date_gmt: '2007-04-24 17:13:32 +1000'
  content: "Hi Again, Re-reading my entry I think the MSHOME is my network \"group
    name\". I would want the PC within the network to which the printer is connected.
    \r\n\r\nThat would be something like \\\\BILLSDESKTOPPC\\Printer\r\n\r\nBill G."
- id: 22124
  author: Terry
  author_email: sharer@xplornet.com
  author_url: ''
  date: '2007-04-27 12:20:52 +1000'
  date_gmt: '2007-04-27 02:20:52 +1000'
  content: "Holy s--t it worked. Great advice. Now able to print from a VIsta laptop
    to networked Canon MP500 on an XP machine.\r\nShouldn't have to go through all
    this mess in the first place though. Aside from eye candy so far no benefit from
    Vista over XP. Slower &amp; many compatibility problems. Wish I had stayed with
    XP."
- id: 22454
  author: Cesar Rubio
  author_email: crubio1@gmail.com
  author_url: ''
  date: '2007-04-28 14:07:37 +1000'
  date_gmt: '2007-04-28 04:07:37 +1000'
  content: I want to give a big word of appreciation for your help. I have a PSC HP
    1210 installed in a Home XP server network and follow your sugestion, except that
    I used the HP PSC driver alrady installed in Windows Vista. It worked perfectlly!
    Thank you very much! i spent a good amount of time loking for this tip. Windows
    Vista help on Microsoft TechNet was helpless
- id: 22890
  author: Rob Brand
  author_email: rob.w.m.brand@hetnet.nl
  author_url: ''
  date: '2007-04-30 08:49:41 +1000'
  date_gmt: '2007-04-29 22:49:41 +1000'
  content: Thanks for the help. Rob Brand, The Netherlands
- id: 23004
  author: Robb
  author_email: robb@robblightfoot.com
  author_url: http://www.robblightfoot.com
  date: '2007-05-02 08:45:43 +1000'
  date_gmt: '2007-05-01 22:45:43 +1000'
  content: |-
    Well, I used the tip, and it suddenly saw the printer and worked, But the next day it shows up as offline, and I couldn't get it to work. so, I deleted it. now I can't reinstall it...

    Bummer
- id: 23012
  author: Robb
  author_email: robb@robblightfoot.com
  author_url: http://www.robblightfoot.com
  date: '2007-05-02 14:30:25 +1000'
  date_gmt: '2007-05-02 04:30:25 +1000'
  content: "Update\n\nThis is Robb again, the fellow who deleted the printer and then
    could not reinstall it. I manage to reinstall it. What I had to do was to DELETE
    THE PORT that pointed to the netgear PS 101. I deleted these, and then I was able
    to reinstall. Now, it may all disappear again, but I know now to try some of the
    other tricks mentioned herein. I don't recommend that you just delete the printer.
    If you do, remember to delete the ports. You may have to go into another printer's
    configuration.\n\nThe way I did it was to break down and connect a USB cable from
    my HP printer to my new Vista laptop. It detected everything like a whiz. By the
    way, I left the netgear unit connected to the old LP input on the HP, and it didn't
    miss a beat. If I continue to have problems, I may just give up on the wireless
    route to the PS 101 until I get a newer printer server. \n\nMan, it just amazes
    me that Vista/longhorn, after two years of delays, still is so incompatable with
    well-established, name-brand hardware. What on earth were the millionares at Microsoft
    working on.\n\nI wonder if I shouldn't have just spend another $700 and bought
    a mac laptop."
- id: 23110
  author: Robb
  author_email: robb@robblightfoot.com
  author_url: http://www.robblightfoot.com
  date: '2007-05-03 17:04:40 +1000'
  date_gmt: '2007-05-03 07:04:40 +1000'
  content: |-
    Yet another posting.

    Well, the netgear PS 101 and it's HP 932C are "offline." I'm wondering how I can just force the thing to go out to the network and wake this connection up!
- id: 23145
  author: George
  author_email: g.egleton@btinternet.com
  author_url: ''
  date: '2007-05-04 01:01:30 +1000'
  date_gmt: '2007-05-03 15:01:30 +1000'
  content: "This is a minor miracle.   Microsoft should pay you a million.\r\n\r\nI
    have been struggling for weeks trying to connect a Vista laptop to an Epson Stylus
    Photo R800 connected to a XP PC.\r\n\r\nMy sincere thanks."
- id: 23403
  author: Dokn
  author_email: dkib2001@hotmail.com
  author_url: ''
  date: '2007-05-05 02:02:12 +1000'
  date_gmt: '2007-05-04 16:02:12 +1000'
  content: THANKS, Thanks, THANKS!!!!!!!!
- id: 23972
  author: Sugarless
  author_email: tinola1@hotmail.com
  author_url: ''
  date: '2007-05-07 15:01:31 +1000'
  date_gmt: '2007-05-07 05:01:31 +1000'
  content: Thank you very much..I struggled a little bit trying to figure out what
    the "Network path" and "Sharename" was..but after a little bit of investigating
    and reading the rest of the threads...it work finally...I had the laptop with
    Vista for 3 months now and I just finally got it to work...Thank you everybody
    and I will forward this to all my friends that has Vista..Once again..thanks..you
    guys rock!!!
- id: 25213
  author: fÃ¡bio ferreira
  author_email: fabio@i-config.net
  author_url: http://www.i-config.net
  date: '2007-05-12 05:14:22 +1000'
  date_gmt: '2007-05-11 19:14:22 +1000'
  content: "thank-u.. very good..\r\nMuito bom, me ajudou a resolver meu problema.\r\n\r\neu
    tinha prolema na instalaÃ§Ã£o da impressora SCX-4100."
- id: 25284
  author: Tom Nielsen
  author_email: tom@enfolded.info
  author_url: ''
  date: '2007-05-12 21:31:01 +1000'
  date_gmt: '2007-05-12 11:31:01 +1000'
  content: "I continue to have the 'offline' problem with an new Vista Home Premium
    system and an HP LaserJet 5MP. I can define the printer using the subject proc
    but sometime later the printer goes offline and when I try to uncheck the property
    for use offline, I get a 'command error' in the property applet. I must delete
    the printer and redefine a new one to get any printing done from the Vista system.\r\n\r\nI
    have had several lengthly chat and phone conversations regarding this 'bug' in
    the driver. HP's final, recommended solution: \"Buy a new compatible printer!\"\r\n\r\nConsider
    the business ethics of a company that uses a known 'bug' as a marketing strategy
    to sell new hardware to thousands of their loyal customers who have servicable
    hardware except for the identified driver problem. Shame on HP!\r\n\r\nSo how
    to we contact J.D. Powers about HP's 'womderful' support rating?"
- id: 25594
  author: jeff
  author_email: gleacher@ieee.org
  author_url: ''
  date: '2007-05-14 03:50:28 +1000'
  date_gmt: '2007-05-13 17:50:28 +1000'
  content: I've been struggling getting a print server to work on Vista and finally
    found the solution as described above by treating it as a local printer.  This
    works until Vista reboots and then the printers go off-line.  They can only be
    brought back on-line by delete and reinstall.  I have SNMP disabled and and bi-directional
    is greyed out.  If I try to configure a port, I get the error "An error occurred
    during port configuration.  This operation is not supported."  I tried to stay
    away from Vista knowing about these problems, but it is very difficult to find
    XP laptops any more.  XP didn't work until SP2 came out.  When is Vista scheduled
    to work?
- id: 26673
  author: JimmyFA
  author_email: jimmy@desarrollojava.com
  author_url: ''
  date: '2007-05-18 07:56:21 +1000'
  date_gmt: '2007-05-17 21:56:21 +1000'
  content: Thanks You save my day
- id: 29677
  author: steve
  author_email: stevereece@btinternet.com
  author_url: ''
  date: '2007-05-31 06:20:44 +1000'
  date_gmt: '2007-05-30 20:20:44 +1000'
  content: Absolutely B****y marvellous. After 2 days of messing about got there with
    an HP Printer, Vista Laptop and XP server. I thought I had an idea of networking.
    How wrong I was. How did you ever work this out?
- id: 29795
  author: jackie
  author_email: jackie_hywrd@hotmail.com
  author_url: ''
  date: '2007-06-01 23:53:54 +1000'
  date_gmt: '2007-06-01 13:53:54 +1000'
  content: I have Lexmark z25, how do i get it to work on my vista windows, dosen't
    have a clue about it, can you help me please,  thanks from jackie
- id: 31518
  author: Andrew
  author_email: andrewmsmith@sympatico.ca
  author_url: ''
  date: '2007-06-13 11:46:11 +1000'
  date_gmt: '2007-06-13 01:46:11 +1000'
  content: "I had no real problem with connecting to a pre xp shared resource I just
    googled the error  lo and behold solution was out there. My problem is if the
    \"port\"  \"//SERVER/printername\" is not \"online\" when the Vista station boots
    then the only way to reconnect the resource is by deleting and reinstalling.\r\n\r\nMay
    have to break down and get a \"print server\""
- id: 31646
  author: JOE
  author_email: patta8@hotmail.com
  author_url: ''
  date: '2007-06-15 02:57:26 +1000'
  date_gmt: '2007-06-14 16:57:26 +1000'
  content: I have 3 xp pro PC's. Printer is connected to one of machines that is hooked
    up with a wireless DSL. Life was good internet, printing, file sharing. Now I
    replaced the PC that is connected to the printer &amp; DSL router with Vista premium.
    The other two XP pro pc's can go on to Internet, can see the Network but can't
    see the printer.Looks like a protocol issue? I see the network on both the XP
    pro but nothing beyond that. Tried the local port thing as you said but it says
    network path not found. Any ideas appreciated.
- id: 31650
  author: windows vista features and problem guide
  author_email: ujval_se@yahoo.com
  author_url: http://vista-basic.blogspot.com
  date: '2007-06-15 03:47:01 +1000'
  date_gmt: '2007-06-14 17:47:01 +1000'
  content: as i studied windows vista features.I dont find any special features of
    windows vista that make me impress to move from xp to windows vista.It may possible
    i miss something.can u guide me any new thing about windows vista features.
- id: 31722
  author: David
  author_email: asthar75@hotmail.com
  author_url: ''
  date: '2007-06-15 20:20:23 +1000'
  date_gmt: '2007-06-15 10:20:23 +1000'
  content: "Thank you !\r\n\r\nI trying for a while to connect to my printer share
    without success \"asked me to install the driver which was already bundled with
    vista and freeze afterwhile\"\r\n\r\nThis is brillant. Works great"
- id: 32029
  author: John,WImbledon, London
  author_email: j.hennessey@blueyonder.co.uk
  author_url: ''
  date: '2007-06-18 05:39:39 +1000'
  date_gmt: '2007-06-17 19:39:39 +1000'
  content: "Just wanted to record my thanks for this thread.\r\nThe recommended action
    at the top of the thread worked first time.\r\nPERFECT!!!\r\n\r\nThank you!!!"
- id: 32398
  author: hluli
  author_email: hluli.m@gmail.com
  author_url: ''
  date: '2007-06-21 00:20:18 +1000'
  date_gmt: '2007-06-20 14:20:18 +1000'
  content: I've been circling with this problem for a while now and it's a good thing
    i stumbled on this link on my google search. This is great! thanks!
- id: 32705
  author: Jim in FL
  author_email: jimgronostalski@yahoo.com
  author_url: ''
  date: '2007-06-23 17:00:38 +1000'
  date_gmt: '2007-06-23 07:00:38 +1000'
  content: "I am shocked. I searched postings and the only thing I could find was
    to just submit and buy network magic. This worked immediately, but I did have
    to uncheck the use offline also.\r\n\r\nThanks,\r\nJim"
- id: 35846
  author: Eduardo Martinez
  author_email: je.martinez@yahoo.com
  author_url: ''
  date: '2007-07-08 06:25:15 +1000'
  date_gmt: '2007-07-07 20:25:15 +1000'
  content: "I have a Samsung SCX-4200 Connected to my XP machine and I spent weeks
    trying to share it with my new Vista computer. \r\nYour recomendation worked very
    well !\r\n\r\nThanks for sharing your tip."
- id: 35884
  author: Stew
  author_email: stuwarner@aol.com
  author_url: ''
  date: '2007-07-08 09:17:18 +1000'
  date_gmt: '2007-07-07 23:17:18 +1000'
  content: "Thanks for this article.  I searched books and the internet for several
    days because I could not get my new Vista computer to print to a shared HP laserjet
    1020 printer on my XP computer.  It worked fine with my old XP laptop.  But my
    new Vista laptop would not print to the printer.  This solution worked.  I too
    found that I had to uncheck the offline item on the popup menu for the printer.
    \ But everythings works fine after offline is unchecked.  Thanks.\r\n\r\nStew"
- id: 36222
  author: Myoriah
  author_email: myoriah@hotmail.com
  author_url: ''
  date: '2007-07-10 11:09:38 +1000'
  date_gmt: '2007-07-10 01:09:38 +1000'
  content: "I have been trying for months to get the printer attached to a desktop
    to work. I could get a different printer on the network to work which did not
    need a driver upgrade. I had added the network address and printer name for the
    desktop as the port. Today I went to the network setting where it showed all the
    computers on the network. I highlighted the computer I wanted to add the printer
    to. Then clicked add printer. The Wizard came up asking me whether I wanted local
    or network. This time I picked local. When it came time to pick the port the port
    was on the list already so I picked that and then told the Wizard where to find
    the driver. Of course since the Vista Driver was already installed it used that
    one. The print test page printed and I turned the laptop with Vista off and back
    on and it printed a document. *Sigh* the other printer is now listed as being
    offline even though it is not and will print from other computers. Unfortunately
    the Use Printer Offline option can't be unchecked as it is grayed out. At least
    I can get one printer to work with the Vista laptop and the one that the person
    wanted to print from.\r\n\r\nThanks for posting this information here. Although
    I had tried it before this time it worked. Just remember when adding a printer
    to pick local and not the other option. Also make sure that sharing is enabled
    on the host computer."
- id: 36886
  author: Stephane (from France)
  author_email: sjoulain@yahoo.fr
  author_url: http://www.neoaltervox.org
  date: '2007-07-13 05:04:58 +1000'
  date_gmt: '2007-07-12 19:04:58 +1000'
  content: "Au secours please. \r\n\r\nI'm getting desesperate because I cannot install
    my hp laserjet 1320 under Vista. It's seems it install a sort of pilote, hp laserjet
    1320 (DOT4), then I cannot find it in the printer manager window. Where is that
    printer gone???\r\nPlease help me I've spent one full day trying to find an answer.
    \r\nTake care, have a good day"
- id: 37363
  author: Farrell
  author_email: farrellcsun@yahoo.com
  author_url: ''
  date: '2007-07-15 03:38:43 +1000'
  date_gmt: '2007-07-14 17:38:43 +1000'
  content: "THANK YOU THANK YOU!  When Vista came out, I resisted upgrading for so
    long since my home network was optimally set up.  I got a new laptop at work and
    I had no choice but to use it and it came with Vista.  I took it home and could
    NOT find a way to use my Epson R200 via my home network.  The printer is connected
    my desktop XP machine...\r\n\r\nWell, like others on this post, I searched and
    searched for a solution (via the Epson site and Microsoft sites), and YOUR INSTRUCTIONS
    WORKED!!!\r\n\r\nTHANK YOU SO MUCH!!  You saved me from getting a new printer.
    \ :-)\r\n\r\nFarrell\r\nLos Angeles, CA"
- id: 38059
  author: ana
  author_email: wian1706@yahoo.com
  author_url: ''
  date: '2007-07-17 16:05:54 +1000'
  date_gmt: '2007-07-17 06:05:54 +1000'
  content: "My computer in vista won't print to network printer which have xp operation
    system. I have already make sure that printer is online and shared, security has
    been checked too but it still won't. My printer is HP Laser jet 1015. By the way
    another computer in xp don't have any problem to connect with this printer.\r\n\r\nThanks"
- id: 39867
  author: RandyG
  author_email: astroak@yahoo.com
  author_url: ''
  date: '2007-07-25 03:36:10 +1000'
  date_gmt: '2007-07-24 17:36:10 +1000'
  content: I followed the steps from the top, I cant find  the offline checkbox??
    :T
- id: 40269
  author: GBC
  author_email: g@hotmail.com
  author_url: http://none
  date: '2007-07-26 11:52:05 +1000'
  date_gmt: '2007-07-26 01:52:05 +1000'
  content: "I have been trying off and on since March 2007 to get my daughter's new
    Vista laptop to connect to an HP Officejet K80 being shared from an XP desktop.\r\n\r\nFinally,
    success.  Your instructions were right-on.\r\n\r\nEntering the network host name
    and printer share name for the port name as you describe in step 7 was the key.
    \ NOT very intuitive of Microsoft."
- id: 40278
  author: GK
  author_email: KESI@ZING-NET.CA
  author_url: ''
  date: '2007-07-26 12:22:56 +1000'
  date_gmt: '2007-07-26 02:22:56 +1000'
  content: "It works \r\n\r\nTHank you so much"
- id: 41095
  author: Ian
  author_email: ian_bramhill@hotmail.com
  author_url: ''
  date: '2007-07-30 22:08:20 +1000'
  date_gmt: '2007-07-30 12:08:20 +1000'
  content: Like many others I was stuck connecting to an XP home machine over a wireless
    link trying to print from a 64bit vista. Now woks thanks.
- id: 41416
  author: Mark
  author_email: no-reply@depth.net
  author_url: ''
  date: '2007-08-01 15:48:31 +1000'
  date_gmt: '2007-08-01 05:48:31 +1000'
  content: "Thanks so much.  I tried every way but sideways to get my network printer
    working with no results until I found your solution.\r\n\r\nThe only thing I had
    to do differently was plug the printer into my Vista laptop first to get Vista
    to install the printer drivers properly.  Once that was done, I just hooked the
    printer back up to the network server and changed my port like you suggested and
    bam! it works like a champ now.\r\n\r\nThank you."
- id: 42527
  author: Robb P
  author_email: rpetersburg@hotmail.com
  author_url: ''
  date: '2007-08-05 08:50:08 +1000'
  date_gmt: '2007-08-04 22:50:08 +1000'
  content: My Lexmark Z25 doesn't want to work with Vista.  Lexmark's website did
    NOT have a driver for this printer on Vista.  I've tried numerous other places
    as well, with no solid answers.  Does anyone know for sure?  I don't really want
    to buy a new printer.
- id: 44615
  author: isaac
  author_email: ilpryor@carolina.rr.com
  author_url: ''
  date: '2007-08-13 03:51:53 +1000'
  date_gmt: '2007-08-12 17:51:53 +1000'
  content: thanks for the help. I was just about to give up on attempting to get windows
    vista to recognize my printer on my xp computer, until I found this article. My
    problem was solved in about 5 minutes. Again thanks for the free advise.
- id: 44694
  author: Natenc
  author_email: natenc@hotmail.com
  author_url: ''
  date: '2007-08-13 10:00:50 +1000'
  date_gmt: '2007-08-13 00:00:50 +1000'
  content: That was a great fix!!! Before everything was taking forever to print when
    I sent print jobs from my vista laptop to my xp desktop. Now it is just as fast
    as when when my laptop was on xp. Thanks!!!
- id: 45212
  author: Gigi
  author_email: GTsang89@gmail.com
  author_url: ''
  date: '2007-08-15 09:45:08 +1000'
  date_gmt: '2007-08-14 23:45:08 +1000'
  content: |-
    Do these directions apply for the Lexmark Z25? I'm have the same problem as Jackie. I recently purchased a new laptop with Vista for college and my Lexmark Z25 is not compatible. =(

    Help!
- id: 45390
  author: nick drumattic
  author_email: nick@drumattic.co.uk
  author_url: ''
  date: '2007-08-16 09:02:52 +1000'
  date_gmt: '2007-08-15 23:02:52 +1000'
  content: thankyou, spent a day on this , then came across your post. couldn't skip
    the pluging in of printer on my hp 7762 install so i moved printer to vista pc
    for the install then moved it back to xp print server after install . followed
    your instructions and bingo. Thanks.
- id: 46177
  author: Michael LeBlanc
  author_email: michael@trackie.ca
  author_url: ''
  date: '2007-08-19 10:54:39 +1000'
  date_gmt: '2007-08-19 00:54:39 +1000'
  content: Thanks a lot, from a fellow Canadian (living in New York). I knew it had
    something to do with installing the Vista driver locally, but I wasn't sure on
    out to get it to look on the network for the printer instead of the USB bus.
- id: 47997
  author: I need help with a Vista to XP homenetwork
  author_email: charliepcn@aol.com
  author_url: ''
  date: '2007-08-25 16:49:55 +1000'
  date_gmt: '2007-08-25 06:49:55 +1000'
  content: I can't get my Vista machine to see my XP machine when I choose view workgroup
    computers.  If I look at a full map of the wireless router on the |Vista machine
    it shows the XP kind of dangling out there.  The router is connected to the XP
    machine. I need these two to talk so that I can print to the X|P from the Vista.
    Can anyone help me?
- id: 48143
  author: Terry in Miami
  author_email: seeker_in_nyc@yahoo.com
  author_url: ''
  date: '2007-08-26 10:57:33 +1000'
  date_gmt: '2007-08-26 00:57:33 +1000'
  content: Yep. Installing the printer locally on the vista machine worked wonderfully.
    Thank you, as I had been pulling my hair out for awhile on this ......
- id: 49560
  author: Greg in Laguna Niguel
  author_email: gtaylor@cox.net
  author_url: ''
  date: '2007-09-03 03:17:26 +1000'
  date_gmt: '2007-09-02 17:17:26 +1000'
  content: Worked for me too!  My printer was connected to Win2000.  I had to change
    the share name so that it didn't have any spaces.
- id: 50592
  author: Darko
  author_email: benovic@hardas.hr
  author_url: ''
  date: '2007-09-07 21:06:54 +1000'
  date_gmt: '2007-09-07 11:06:54 +1000'
  content: I have printer CANON Multi PASS L60. Is there a driver for Windows VISTA
    available? Thanks!
- id: 50657
  author: Elizabeth Smith
  author_email: elizabeth@buildersmith.com
  author_url: http://www.buildersmith.com
  date: '2007-09-08 05:48:29 +1000'
  date_gmt: '2007-09-07 19:48:29 +1000'
  content: "Thank you!!!!!!!\r\nYour fix worked wonders.  We played around with this
    for a long time...and you saved us many hours and much wailing and knashing of
    teeth.\r\n\r\nThanks again!"
- id: 51530
  author: GW
  author_email: gw@gardenwife.com
  author_url: http://gardenwife.com
  date: '2007-09-13 05:06:02 +1000'
  date_gmt: '2007-09-12 19:06:02 +1000'
  content: Thank you, thank you, thank you. Your advice about tricking Vista into
    thinking a networked printer is a local one is spot on. I just bought a Toshiba
    Satellite notebook with Vista pre-installed, and I was frustrated after an hour
    of troubleshooting why Vista could see my Canon MP500 on the XP desktop, but not
    install it. I followed your advice of creating a new port with \\DESKTOP\MP500
    as the port and everything immediately worked. I thank you for sharing this information
    with legions of frustrated new Vista operators!  :)
- id: 52675
  author: Mac
  author_email: macpham@gmail.com
  author_url: ''
  date: '2007-09-19 04:14:33 +1000'
  date_gmt: '2007-09-18 18:14:33 +1000'
  content: |-
    Wow! That worked for me too.

    I had issues connecting to my SCX-4200 hosting on my XP machine from my Vista laptop. Could not get the drivers!

    Thanks for sharing this.
- id: 53814
  author: CPM
  author_email: CPM112@YAHOO.COM
  author_url: ''
  date: '2007-09-25 14:37:03 +1000'
  date_gmt: '2007-09-25 04:37:03 +1000'
  content: LET'S FACE IT FOLKS, VISTA IS A PIECE OF S--T. UNTIL A SERVICE PACK OR
    NEW OS COMES OUT WE'RE STUCK. REMINDS ME OF WINDOWS ME. CALLED MS ABOUT PRINTER/NETWORKING
    PROB AND THEY CUD CARE LESS.
- id: 54003
  author: Xinyi
  author_email: x_ani@yahoo.com
  author_url: ''
  date: '2007-09-26 16:26:43 +1000'
  date_gmt: '2007-09-26 06:26:43 +1000'
  content: "Cool... this works for my Canon LBP 3200.\r\nI called up Canon Service
    center but the personnel asked me to off my firewall. \r\nI'm so lucky to i get
    to read up your article it helps a lot. Now i can connect my printer in my office."
- id: 54584
  author: Brian
  author_email: durangedfish@yahoo.com
  author_url: ''
  date: '2007-09-30 04:49:16 +1000'
  date_gmt: '2007-09-29 18:49:16 +1000'
  content: |-
    I could print just fine on my Samsung ML-2010 attached to XP Pro from my Vista laptop over wireless a few months ago. I moved to a new location, set everything up, and I could no longer print from the Vista laptop.

    After uninstalling the printer from the laptop and reinstalling it with the method above, I can now print again! I used this method to connect an HP OfficeJet T45 attached to an XP Home desktop on the network to my laptop as well without any troubles. Thanks!
- id: 54701
  author: Howard
  author_email: h_saffer@hotmail.com
  author_url: ''
  date: '2007-10-01 09:06:58 +1000'
  date_gmt: '2007-09-30 23:06:58 +1000'
  content: "I bought a laptop for my daughter â€“ about two weeks ago â€“ with Windows
    Vista Home edition. It is working fine generally.\r\n\r\nI set this laptop up
    on our home (Netgear wireless router) network â€“ I gave the laptop a â€˜nameâ€™,
    and changed the Windows Workgroup to the same as the other two computers on our
    home network, set up the WEP key â€“ and it connected okay, can access the Internet
    and can see and be seen on our home network.\r\n\r\nOne of the other two computers
    (still running Windows ME) has an Epson 760 printer attached, and I have never
    had any problems connecting to this or printing on it - from my other laptop (running
    Windows XP) over this network.\r\n\r\nIn order to add a connection to a network
    printer (the Epson 760 mentioned above) on to the Vista laptop, I have found that
    it is not possible to add this directly as a network printer (gives an error message).
    However (after consulting an on-line forum) I have found that it is possible to
    add it as a local printer, and then direct Vista to use the network port for the
    printer on the other computer (e.g. using format of   \\\\network-name\\device-name
    \  ). \r\n\r\nWell this works okay â€“ initially. The printer is added â€“ shows
    on-line - and I can print to it over our network.\r\n\r\nHowever â€“ here is the
    problem. If I turn the Vista laptop off, when I start it again later the network
    printer appears off-line, even though the Vista laptop is still properly connected
    to the network (can see and be seen, and can access the Internet). All attempts
    to turn the printer back on-line fail (either directly or as administrator â€“
    using UAC) â€“ showing an error.\r\n\r\nI have checked various on-line forums
    (including this one) and many people using Vista computers seem to be suffering
    this problem â€“ on a range of different printers.\r\n\r\nI have tried various
    things â€“ \r\n\r\n1.\tI updated my Windows ME PC to use NTLM2 â€“ but this doesnâ€™t
    seem to have any effect. \r\n\r\n2.\tI also responded to a Microsoft web page
    article that someone referred me to (934455 - A \"Web Services on Devices\"-based
    printer appears as Offline after you wake a Windows Vista-based computer from
    sleep). Microsoft sent me a hotfix patch â€“ which I have installed, but this
    has not had any effect in helping resolve this problem.\r\n\r\nThe only (rather
    crazy) â€˜solutionâ€™ that I (and clearly others) have found to work is to delete
    the printer and immediately re-install it â€“ whereupon it starts working again
    immediately. This canâ€™t be right â€“ there must be a better way. \r\n\r\nPerhaps
    someone on this forum has some other suggestions? (or maybe Microsoft could just
    fix this?)\r\n\r\nHoward â€“ Sheffield UK"
- id: 54828
  author: Michael Reagan
  author_email: computerdocbhc@gmail.com
  author_url: ''
  date: '2007-10-02 12:08:07 +1000'
  date_gmt: '2007-10-02 02:08:07 +1000'
  content: I fought with two new Dell's trying to attach Vista to a Konica printer
    for half the day.  Until i found your post.  I tried it and it worked perfect.  Thank
    you!
- id: 54916
  author: Scott Strehle
  author_email: s_strehle@yahoo.com
  author_url: ''
  date: '2007-10-03 03:02:49 +1000'
  date_gmt: '2007-10-02 17:02:49 +1000'
  content: When I enter my computer name \ shared printer name for new port I get
    network path was not found. Also when I click on network on my Vista laptop client
    machine it doesn't seem to have a clue about what's on its network. Do you have
    any troubleshooting tools to help me figure out why my laptop does not recognize
    my network and/or the host machine. Both machines are working fine on wireless
    Linksys router with Internet connection. I use two printers regularly on my host
    and have installed drivers and tested the Vista on a direct connection. Thank
    you.
- id: 55781
  author: Tim
  author_email: keggie.fitzgerald@gmail.com
  author_url: ''
  date: '2007-10-08 09:10:25 +1000'
  date_gmt: '2007-10-07 23:10:25 +1000'
  content: Thank you, thank you a million times, thank you!!!
- id: 56571
  author: Janet
  author_email: info@janetmartin.ca
  author_url: ''
  date: '2007-10-13 05:07:00 +1000'
  date_gmt: '2007-10-12 19:07:00 +1000'
  content: Thanks very much! Works great! I lost a day on this until I realized i
    had to make sure I had the right printer sharing name, rather than the actual
    printer name. Ah...knew it had to be my error somewhere. I found the sharing name
    under "sharing" in the printer properties tab.
- id: 57812
  author: Robin Fried
  author_email: rtfried@gmail.com
  author_url: ''
  date: '2007-10-21 03:52:54 +1000'
  date_gmt: '2007-10-20 17:52:54 +1000'
  content: |-
    thanks, thanks, thanks....

    Why couldn't HP have posted this?

    Robin
- id: 59277
  author: Truc Nguyen
  author_email: sori5583@yahoo.com
  author_url: ''
  date: '2007-10-26 12:15:13 +1000'
  date_gmt: '2007-10-26 02:15:13 +1000'
  content: "Thank you, thank you, thank you, thank you, thank you, thank you, thank
    you, thank you, thank you, thank you, thank you, thank you, thank you, thank you,
    thank you........\r\nThank you very much."
- id: 59494
  author: Jon
  author_email: g.f.wood@sympatico.ca
  author_url: ''
  date: '2007-10-27 05:56:08 +1000'
  date_gmt: '2007-10-26 19:56:08 +1000'
  content: "I am having this same problem.....with a twist ...I can't print from my
    laptopn (VISTA), which is connected by wireless network to my VISTA-equipped desktop
    (connected to hp psc 1300 series printer).  Everyone else seems to be having problems
    when the printer is attached to an XP machine.  When I try to add printer through
    local port....get \"network path can't be found\" error message.   I  am quite
    ready to throw my laptop, desktop and printer out the window!\r\n\r\nShould I
    be trying to download VISTA driver for my printer through HP website?"
- id: 65423
  author: Subin
  author_email: subinsharma@gmail.com
  author_url: ''
  date: '2007-11-15 17:50:16 +1100'
  date_gmt: '2007-11-15 07:50:16 +1100'
  content: "i couldnot work on canon 1210 printer.\r\nit connceted and  print goes
    but no printing."
- id: 67784
  author: Caliope
  author_email: user@badgepro.com
  author_url: http://www.badgepro.com
  date: '2007-12-01 03:03:19 +1100'
  date_gmt: '2007-11-30 17:03:19 +1100'
  content: |-
    Thanks, couldn't figure out why our new Vista machine wouldn't print to an network HP Laserjet 5si which it recognized, installed as a local port with a network address and it works beautifully!

    Really appreciate the tip.

    Cali
- id: 69814
  author: Chris
  author_email: king.usa@verizon.net
  author_url: ''
  date: '2007-12-10 09:06:48 +1100'
  date_gmt: '2007-12-09 23:06:48 +1100'
  content: Wow. Thank you
- id: 70861
  author: Stan Winrich
  author_email: ate1sdw@yahoo.com
  author_url: ''
  date: '2007-12-15 16:41:45 +1100'
  date_gmt: '2007-12-15 06:41:45 +1100'
  content: "You have more steps than needed. To make my HP970 on my XP server print
    from my Vista lap top.\r\n1.On the Vista lap top click on Ad a printer\r\n2.Click
    on ad a local printer\r\n3.Select \"Create a new port\" leave on local port and
    click on next.\r\n4.\"Enter a port name\" pops up,type in the server name followed
    by the shared printer name, example:\r\n\\\\SERVER\\HP970CSE\r\n5.Choose your
    printer from the list.\r\n6.Name your printer, print a test page and click on
    finish!\r\nAmazing, it works!! HP told me I had to buy a new printer and Microsoft
    was clueless!!\r\nHow happy I am to prove them wrong and saved money to boot!!"
- id: 71335
  author: Claudette Brozzo
  author_email: claudette_52@hotmail.com
  author_url: ''
  date: '2007-12-18 02:43:14 +1100'
  date_gmt: '2007-12-17 16:43:14 +1100'
  content: "Hi there could you help me please.\r\n  I am also stuck on stupid.  I
    know nothing...I cannot get my Lexmark X75 to print.\r\n  I just got my new computer
    with Vista up and running Saturday.  \r\nMy printer ran fine with my windowsME.\r\n
    I don't understand drivers and ports...please can you spell it out exactly what
    I need to do. \r\n wrote to Lexmark,but no contact from them.  \r\nThanks so much!
    Claudette Brozzo ..housewife,(with what she thought was an above average itelleigence),
    from Indiana!!"
- id: 72483
  author: hady
  author_email: hadi@sgrsb.com
  author_url: ''
  date: '2007-12-24 17:46:37 +1100'
  date_gmt: '2007-12-24 07:46:37 +1100'
  content: thanks for this forum. finally i can resolve my problem.
- id: 72484
  author: murthy
  author_email: mahaq@integr8it.biz
  author_url: ''
  date: '2007-12-24 17:47:03 +1100'
  date_gmt: '2007-12-24 07:47:03 +1100'
  content: "hi,\r\n\r\ni am having hp printer 1010 installed ,configured as shared
    printer on Win Xp sp2  desktop,\r\ni conbfigured to access from xp home laptop
    it is connecting and able to get print ,but every time i restart or logoff the
    laptop it is not,Again if i reconfigure it will work.\r\n\r\n\r\nhow can get perminent
    connection to the printer even i if restart or logoff the laptop?\r\n\r\nplease
    help me on it .ASAP.\r\n\r\nThank you"
- id: 74218
  author: LCF
  author_email: daniel.mitrofansky@gmail.com
  author_url: ''
  date: '2008-01-14 18:31:10 +1100'
  date_gmt: '2008-01-14 08:31:10 +1100'
  content: Thanks!!!!!!!
- id: 74603
  author: Heidi
  author_email: hdaileader@optonline.net
  author_url: ''
  date: '2008-01-18 07:24:38 +1100'
  date_gmt: '2008-01-17 21:24:38 +1100'
  content: I followed all of the instructions for my HP Photosmart 7350 but keep getting
    network path not found.  I'm going to kill someone!!!!  HELP!!
- id: 74694
  author: mm
  author_email: mmorello@yahoo.com
  author_url: ''
  date: '2008-01-19 12:29:12 +1100'
  date_gmt: '2008-01-19 02:29:12 +1100'
  content: I have an HP3180, and I had to connect my printer to my laptop to allow
    the installation to complete-then I disconnected it and reconnected to my XP machine.  Then,
    I had to turn off my firewall on my XP machine and followed the directions.  And
    it worked!  Thanks.
- id: 74903
  author: Jason
  author_email: wherisat@hotmail.com
  author_url: ''
  date: '2008-01-22 10:01:39 +1100'
  date_gmt: '2008-01-22 00:01:39 +1100'
  content: "WOW! This worked! After much wasted time trying to figure it out this
    did the trick. \n\nMy setup: Canon MP390 on a Vista 64 bit box as the print server
    and XP 32 bit machines on the network - pointing the 32 bit boxes to the print
    server with the above method worked like a charm."
- id: 75326
  author: Susan
  author_email: susan@neqwa.com
  author_url: ''
  date: '2008-01-26 10:01:08 +1100'
  date_gmt: '2008-01-26 00:01:08 +1100'
  content: Great fix!  Can't thank you enough for taking the time to share.
- id: 75402
  author: Hamid
  author_email: hchadorbaf@yahoo.com
  author_url: ''
  date: '2008-01-27 07:53:40 +1100'
  date_gmt: '2008-01-26 21:53:40 +1100'
  content: Thanks a lot. Your solution worked just fine for me after spending hours
    trying out other solution.
- id: 75549
  author: Doug Passey
  author_email: doug.is@verizon.net
  author_url: ''
  date: '2008-01-29 03:57:18 +1100'
  date_gmt: '2008-01-28 17:57:18 +1100'
  content: This worked for my Canon PIXMA ip4000 printer located on an XP system accessed
    via a VISTA laptop on the network.  Choosing Windows update for the source of
    the driver, there was no iP4000 choice ... in a leap of faith, I chose the iP4200
    driver and it worked ... at least for basic printing ... don't know yet about
    all the bells and whistles.
- id: 75770
  author: Jon
  author_email: g.f.wood@sympatico.ca
  author_url: ''
  date: '2008-01-31 04:53:02 +1100'
  date_gmt: '2008-01-30 18:53:02 +1100'
  content: After pulling out much of my hair (the solutions posted on this forum did
    not work for me), I purchased/downloaded Network Magic  and installed on my desktop
    and laptop and I can now print from my Vista-equipped, networked laptop as well
    as the desktop.
- id: 76649
  author: John
  author_email: nospam@nospam.com
  author_url: ''
  date: '2008-02-07 03:41:55 +1100'
  date_gmt: '2008-02-06 17:41:55 +1100'
  content: Just wanted to say that this solution worked perfectly for me.  I just
    installed Vista on my main PC, and my printer (Epson Stylus CS7400) is attached
    to a Windows XP machine.  It's working great now, thank you so much!
- id: 76839
  author: Alejandro
  author_email: amolochko@gmail.com
  author_url: ''
  date: '2008-02-08 15:56:00 +1100'
  date_gmt: '2008-02-08 05:56:00 +1100'
  content: YES! After a frustrating hour or so trying to figure out how to get my
    new Vista laptop to connect to the shared printer on my XP home network, I finally
    found this tutorial... and it worked PERFECTLY. I can't believe how easy it was,
    but I'd never have figured it out on my own. I know this post was written over
    a year ago now, but still, THANK YOU for writing it.
- id: 77910
  author: KtecK
  author_email: kibmcz@gmail.com
  author_url: http://www.kcomputerzone.ca
  date: '2008-02-17 13:46:56 +1100'
  date_gmt: '2008-02-17 03:46:56 +1100'
  content: Worked with my Samsung ML-4500 :)... now why didn't i think of that LOL
- id: 78902
  author: Mike Zerby
  author_email: mikezerby@comcast.net
  author_url: ''
  date: '2008-02-25 09:31:52 +1100'
  date_gmt: '2008-02-24 23:31:52 +1100'
  content: Amazing! You have saved MANY of us from a life of degradation and doom!
    Thanks!
- id: 78912
  author: Abdul M Ibrahim
  author_email: abc2nd@yahoo.com
  author_url: ''
  date: '2008-02-25 10:57:37 +1100'
  date_gmt: '2008-02-25 00:57:37 +1100'
  content: "Sir,\r\n\r\nI have a similar probem i.e. a Canon LBP 810 Printer attached
    to an XP machine cannot be accesed from a Laptop on Windows Vista Home Premium.
    I tried your instructions but I received errror at the poit of writing the path
    to the printer:\" \\\\com2\\canolbp \"  Error reported that the specified path
    not accessible\r\n\r\nI enabled:\r\n  1.  Network Descovery,\r\n  2.  FileSharing\r\n
    \ 3.  Printer Sharing \r\nsuccesfully. \r\nI equally disabled Password Protected
    Sharing successfully. \r\n\r\nI turn off Windows Firewall \r\n\r\nBut I noticed
    that Norton Protection Center is ative though not uptodate. \r\nWhat could have
    made it impossible to see other computer that are on XP from the VIsta?\r\nI can
    only see systems that are on Vista. How do make the Vista visible to Xp and vice
    versa.\r\n\r\nThanks"
- id: 78922
  author: Abdul M Ibrahim
  author_email: abc2nd@yahoo.com
  author_url: ''
  date: '2008-02-25 12:16:08 +1100'
  date_gmt: '2008-02-25 02:16:08 +1100'
  content: "Sir,\r\n\r\nI have a similar probem i.e. a Canon LBP 810 Printer attached
    to an XP machine cannot be accesed from a Laptop on Windows Vista Home Premium.
    I tried your instructions but I received errror at the poit of writing the path
    to the printer:â€\x9D \\\\com2\\canolbp â€\x9D Error reported that the specified
    path not accessible\r\n\r\nAll the system in the network were in the same work
    group. Then I enabled:\r\n\r\n1. Network Descovery,\r\n2. FileSharing\r\n3. Printer
    Sharing\r\nsuccesfully.\r\nI equally disabled Password Protected Sharing successfully.
    \r\n\r\nI turn off Windows Firewall \r\n\r\nBut I noticed that Norton Protection
    Center is ative though not uptodate.\r\nWhat could have made it impossible to
    see other computer that are on XP from the VIsta?\r\nI can only see systems that
    are on Vista. How do make the Vista visible to Xp and vice versa.\r\n\r\nThanks"
- id: 81587
  author: Carlo
  author_email: guerra420@sbcglobal.net
  author_url: ''
  date: '2008-03-13 02:30:58 +1100'
  date_gmt: '2008-03-12 16:30:58 +1100'
  content: Hi - Just wanted to say thank you very much!!!! This was exactly what I
    needed.  I have been trying for hours to get my new laptop (Vista) to discover
    my HP 2000c on my other laptop with Windows XP and it could not find it.  I tried
    entering the comptuer name and IP address.  Then I tried your method and it worked!  Thanks
    a million.  :-)
- id: 81818
  author: karthik
  author_email: karthik_psgimsr@yahoo.com
  author_url: ''
  date: '2008-03-14 17:23:52 +1100'
  date_gmt: '2008-03-14 07:23:52 +1100'
  content: This WORKS!!!
- id: 81868
  author: Tazman
  author_email: tazman@hotmail.com
  author_url: ''
  date: '2008-03-14 22:06:06 +1100'
  date_gmt: '2008-03-14 12:06:06 +1100'
  content: Thanks!!!
- id: 83713
  author: David Hunter
  author_email: hunter@hunterstrat.com
  author_url: http://www.hunterstrat.com/news/
  date: '2008-03-26 11:22:45 +1100'
  date_gmt: '2008-03-26 01:22:45 +1100'
  content: Had exactly this problem, Googled for advice, found this post and now my
    XP connected printer works like a champ from the new Vista system over the network.
    Thank you very much.
- id: 87651
  author: Kevin
  author_email: michwlvrne03@yahoo.com
  author_url: ''
  date: '2008-05-21 12:03:54 +1000'
  date_gmt: '2008-05-21 02:03:54 +1000'
  content: Thank you so much for this extremely helpful advice.  I have been fighting
    this issue for almost a year now.  You are a bonafide genius.  Thank you again
    for your help.
- id: 88773
  author: Kevin
  author_email: kfbryski@yahoo.ca
  author_url: ''
  date: '2008-05-29 07:23:46 +1000'
  date_gmt: '2008-05-28 21:23:46 +1000'
  content: Thank you. A frustrating problem solved! How about Windows XP to a printer
    served by Vista?
- id: 90230
  author: siddarood.s.dk
  author_email: siddu_kusambi@yahoo.co.in
  author_url: http://yahoomail.com
  date: '2008-06-09 22:43:37 +1000'
  date_gmt: '2008-06-09 12:43:37 +1000'
  content: i want install hp laserjet 1320n printer in network. i have 10 computers
    in my lacation but there is windows xp in all computers.
- id: 91008
  author: LucaFromItaly
  author_email: lucascl@libero.it
  author_url: ''
  date: '2008-06-17 07:09:16 +1000'
  date_gmt: '2008-06-16 21:09:16 +1000'
  content: "Hey, thanks for the good job. It has been weeks of tries before I bumped
    into your nice post. And it WORKED !!! So, a big thankyou from faraway Italy !!!\r\nCiao"
- id: 92973
  author: Shatavia
  author_email: shatavia305@yahoo.com
  author_url: ''
  date: '2008-07-05 15:07:13 +1000'
  date_gmt: '2008-07-05 05:07:13 +1000'
  content: help, I am trying to get my lexmark z25 connected to computer, telling
    me that there are compatability issues with vista???
- id: 94448
  author: Rodrigo
  author_email: rbriceno@sanigest.com
  author_url: ''
  date: '2008-07-19 03:09:12 +1000'
  date_gmt: '2008-07-18 17:09:12 +1000'
  content: |-
    Hi friends. After reading the so many successful histories about setting up printers under vista I must put this online in order to try to solve my problem. I have read a lot of blogs, and many solutions to my problem but none of them have been ok for me. Here is my problem:

    I have a samsung ml-1710 printer, connected to the network through a network print server (ML1710PRINTSERVER). None of the computers or laptops (I have very little knowledge of technical stuff so forgive me if I'm not providing accurate names or info) is connected directly to the printer. When I had the XP system what I had to do is to install the printer as local, and then to install the software for print server. In that way I can print easily.

    The notes you have here do not mention the case when you have a print server. Can somebody with many patience try to help me to solve this thing...PLEASE....I have 2 months dealing with it!!! PLEASE!

    Rodrigo BriceÃ±o
- id: 95049
  author: Peter van der Heiden
  author_email: petervh@sa.chariot.net.au
  author_url: ''
  date: '2008-07-22 22:02:08 +1000'
  date_gmt: '2008-07-22 12:02:08 +1000'
  content: I have just purchased my second network printer and the same problem persists.  I
    have one telephone line and it splits through a filter/splitter to my computer
    room.  There it splits again into two, one line into a cordless phone and the
    other into my BB modem/router.  Well my new printer is the Brother MFC885CW (previous
    one 3820CN) with its own cordless phone (reason I bought it to eliminate a separate
    cordless phone).  I have disconnected my old cordless and as soon as I plug its
    phone line into the new printer "LINE IN" I lose my BB connection (ADSL light
    goes out) which is on the other line.  When I plug the modem and printer in series
    on the same line the same result, swap them around same again. I would have though
    that the fax or phone in the printer would act the same as the cordless phone
    and work. Not so, confused?
- id: 97876
  author: Mike
  author_email: eckorex@gmail.com
  author_url: ''
  date: '2008-08-08 07:46:36 +1000'
  date_gmt: '2008-08-07 21:46:36 +1000'
  content: So glad I found this!  Thank you very much for finding an easy fix.  Very
    clever and worked with an HP 2600n.  Printing from my Vista Home Premium PC to
    the printer hooked up on Windows XP.  Thanks again.
- id: 98110
  author: Adam
  author_email: ukmail@gmail.com
  author_url: ''
  date: '2008-08-11 00:15:57 +1000'
  date_gmt: '2008-08-10 14:15:57 +1000'
  content: Just got a vista laptop and could not get it to print via XP network to
    a Canon MP360....read your article and did what you said, apart from would the
    install would not move screens until I actually connected the printer (Now disconnected
    and connected back to XP network) and VOILA! Yes it works, you are without doubt
    a genius and have saved many people lots of grief Thank you kindly!
- id: 100370
  author: Nicholas Max
  author_email: nmax@money-file.com
  author_url: ''
  date: '2008-08-28 04:28:08 +1000'
  date_gmt: '2008-08-27 18:28:08 +1000'
  content: Thank you; good solution. Works with HP PSC 2179 where Microsoft research
    was useless once again.
- id: 101518
  author: Paul T. Ivancie
  author_email: paul.ivancie@sbcglobal.net
  author_url: ''
  date: '2008-09-06 01:59:26 +1000'
  date_gmt: '2008-09-05 15:59:26 +1000'
  content: "Thanks. I spent four loooong hours trying to get this accomplished using
    \"official\" channels. After finding this on the Internet, it took me five minutes
    to get my first successful test print. \r\nI first tried HP online help for my
    new HP notebook, and after a number of fruitless experiments, I tried their online
    help for my HP printers. Then, I started wading through voice menus on the phone.
    I went through eight separate HELP[less] desk sessions, the end result being \"Try
    to find a knowledgeable friend to help.\" I AM THE \"KNOWLEDGEABLE FRIEND\", having
    been an engineer in the computer industry for 38 years. My work is flying in the
    Space Shuttle, for Pete's sake! \r\nWhat an arcane method to hook up... but it
    works! There's nothing quite like success.\r\nThanks again,"
- id: 101820
  author: Rex the Strange
  author_email: roger.main@widgetinc.com
  author_url: http://www.widgetinc.com
  date: '2008-09-10 03:46:35 +1000'
  date_gmt: '2008-09-09 17:46:35 +1000'
  content: |-
    This is brilliant. I've been trying to print from my vista system to my deskjet 5550 which is connected to a network pc running xp and it couldn't get it to work. This solved the problem.

    Thanks

    rts
- id: 102171
  author: Donnyrides
  author_email: donnyrides@yahoo.com
  author_url: ''
  date: '2008-09-14 07:27:11 +1000'
  date_gmt: '2008-09-13 21:27:11 +1000'
  content: Thank you so much. I would have never thought to manipulate the ports to
    point to my XP machine. amazing!!!!!
- id: 105130
  author: George
  author_email: fsmbox@gmail.com
  author_url: ''
  date: '2008-10-01 02:00:22 +1000'
  date_gmt: '2008-09-30 16:00:22 +1000'
  content: "Thank you so much for this post!   Using this procedure I was able to
    connect to my Brother HL-2040 attached to an XP computer from a Vista laptop.
    \ I've been strugling for days trying to connect to the printer without success
    and finally found this post.  My sincere thanks again for sharing this with public!\r\n\r\nP.S.
    Some Windows bashing and Linux propaganda: I did not have any problem connecting
    to the same printer from the same dual-boot laptop while running Ubuntu 8.04."
- id: 109263
  author: Crosby
  author_email: crosby1968@yahoo.com
  author_url: ''
  date: '2008-11-14 02:07:02 +1100'
  date_gmt: '2008-11-13 16:07:02 +1100'
  content: "I tried your method.  Adding the new port with the server name works fine,
    but when I print; my printer doesn't print and the printer shows 0 prints in queue.
    \ What is the error?\r\n\r\n\r\nThanks"
- id: 109267
  author: Rick
  author_email: traderrik@hotmail.com
  author_url: ''
  date: '2008-11-14 03:06:28 +1100'
  date_gmt: '2008-11-13 17:06:28 +1100'
  content: I, too, thank you for this solution!  All other methods failed to "connect"
    my Canon multifunction MP390 to my Vista laptop on my XP network server.
- id: 119387
  author: Ken
  author_email: ken.hunnicutt@bgct.org
  author_url: ''
  date: '2009-01-01 07:42:14 +1100'
  date_gmt: '2008-12-31 21:42:14 +1100'
  content: Wish I'd seen this before repeatedly banging my head against the floor!  We
    have a MS wireless network with an XP computer hooked up via USB to an HP 2420.  I
    tried everything I could think of to get the new Vista computer to recognize the
    HP -- without success.  I finally called HP support and encountered a knowledgeable
    tech person. Since I had already downloaded the Vista printer driver for our LaserJet
    2420, he suggested I hook up my new Dell Vista notebook directly to the USB network
    printer to get the computer to recognize the printer.  I then pretty much followed
    the above solution, created a new port, and we are up and running.  Or at least
    printing...
- id: 123473
  author: Cathy
  author_email: cdenboer@comcast.net
  author_url: ''
  date: '2009-01-19 09:38:16 +1100'
  date_gmt: '2009-01-18 23:38:16 +1100'
  content: I add my name to the long list of those saying thank you!  We have a home
    network that had 2 machines running Windows XP.  My husband bought a new machine
    running Windows Vista.  He paid someone $100 to fix several issues he was having,
    but they were not able to connect to our HP LaserJet 1012 and suggested it was
    too old to work with Vista.  But they also suggested trying connecting it directly
    to his machine instead of my machine running XP.  We downloaded the correct driver
    for Vista from HP's website and connected the printer directly.  That worked for
    his machine, but then we had the same problem with my machine not being able to
    connect to the printer.  Then I found your blog and your solution worked perfectly!!  Thanks
    for sharing.
- id: 125502
  author: Brian
  author_email: fubar357@gmail.com
  author_url: ''
  date: '2009-01-26 10:29:00 +1100'
  date_gmt: '2009-01-26 00:29:00 +1100'
  content: |-
    I want to add my thanks as well, and a solution to an additional problem I encountered.

    When I tried to add my XP-shared printer to Vista, I got the arcane message "Not enough server storage is available to process this command" after entering the \\server\printer name.

    Turns out I had to edit the registry on the XP machine that was serving the printer.  It was missing the IRPStackSize parameter in [\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\lanmanserver\parameters].  I had to add that key (careful, it's case-sensitive) as a d-word value of 0x20, and restart the server service on the XP box.  Then I was able to connect my HP G85 printer from Vista, using the above-described instructions.

    Isn't that simple and obvious?
- id: 133627
  author: Elellodeptits
  author_email: vrett4@gmail.com
  author_url: http://jan09dir.fortunecity.com/
  date: '2009-02-16 07:31:10 +1100'
  date_gmt: '2009-02-15 21:31:10 +1100'
  content: Your web page does not correctly work in safari browser
- id: 138112
  author: Tim
  author_email: trush7@hughes.net
  author_url: ''
  date: '2009-02-25 07:41:44 +1100'
  date_gmt: '2009-02-24 21:41:44 +1100'
  content: "WOW!!!! worked on this problem for days!!!! it worked GREAT for my ML-1710
    and Photosmart 7760!! Thanks for a very simple solution!!!!\r\n\r\nTim"
- id: 157798
  author: Navid
  author_email: andrej.jaklic@gmail.com
  author_url: ''
  date: '2009-04-27 05:39:53 +1000'
  date_gmt: '2009-04-26 19:39:53 +1000'
  content: "AWESOME !!! Thanks for your solution. Works on my SCX-4300!! \n\nNavid"
- id: 160169
  author: bala
  author_email: bala_rish@yahoo.co.in
  author_url: ''
  date: '2009-05-14 23:03:46 +1000'
  date_gmt: '2009-05-14 13:03:46 +1000'
  content: "Pls help me, i need the solution \r\n\r\ni am using wireless network in
    my office area, i bought a new desktop with xp professionl sp2 also i connected
    the wireless network with wireless pci adaptor, big problem is that i cant connect
    with the printer wich is already connected to the wireless network.\r\n\r\nPls
    scrap all solutions to my mail id bala_rish@yahoo.co.in"
- id: 164205
  author: TheBlueBadger
  author_email: mark@ThinkToys.co.uk
  author_url: ''
  date: '2009-06-04 05:47:59 +1000'
  date_gmt: '2009-06-03 19:47:59 +1000'
  content: Thanks so much.  It was driving me crazy.
- id: 166041
  author: Ze Mane
  author_email: zemane@softhome.net
  author_url: ''
  date: '2009-06-08 08:43:33 +1000'
  date_gmt: '2009-06-07 22:43:33 +1000'
  content: |-
    Hi,

    On step 2. when installing the Samsung driver it asks if I want "Typical installation for a local printer" or "Typical installation for a network printer".

    Could you please point out exactly which one I should use?
- id: 192362
  author: Randy
  author_email: posisme@yahoo.com
  author_url: ''
  date: '2009-07-05 07:44:52 +1000'
  date_gmt: '2009-07-04 21:44:52 +1000'
  content: "Thank you thank you thank you. I've been struggling with printing to my
    home printer through our network. The HP 3900 series does not have a Vista 64
    driver, but with your bit about adding a local port with the definition of the
    computer server made it all happen. Here's what I did, if anyone has the same
    problem with the HP 3900 series printer and Vista 64 bit.\r\n1. Plug the USB into
    your Vista machine so it can use the built in printer driver.\r\n2. Make sure
    the printer is networked, and plug it back into the server computer.\r\n3. After
    it has been installed, go to that printer properties. Add a new local port and
    define that local port with the server name and printer name (ie: \\\\PLAYROOM\\Printer2)\r\n4.
    Now make sure that port is checked. You're good to go.\r\n\r\nThanks again."
- id: 196740
  author: Asydripsy
  author_email: weedaddeniwef@gmail.com
  author_url: ''
  date: '2009-07-08 15:51:05 +1000'
  date_gmt: '2009-07-08 05:51:05 +1000'
  content: Hi. And Bye bye.
- id: 201127
  author: John
  author_email: goodtogo@yahoo.com
  author_url: ''
  date: '2009-07-13 00:54:40 +1000'
  date_gmt: '2009-07-12 14:54:40 +1000'
  content: "Finally!  Installed Canon MP390 on Vista64.\r\nThank you!\r\nOh, and Vista
    sucks!"
- id: 202572
  author: Michele
  author_email: vanille_99@hotmail.com
  author_url: ''
  date: '2009-07-14 13:12:34 +1000'
  date_gmt: '2009-07-14 03:12:34 +1000'
  content: Thank you so much ! This works perfectly.
- id: 218318
  author: Carlos
  author_email: albanez_carlos@yahoo.com
  author_url: ''
  date: '2009-08-02 16:15:46 +1000'
  date_gmt: '2009-08-02 06:15:46 +1000'
  content: "You were a life-saver...thank you and God bless...\r\nJust remember that
    now you are installing a Local printer and not a Network printer"
- id: 219618
  author: Sam
  author_email: jon16samih@aol.com
  author_url: ''
  date: '2009-08-06 02:21:12 +1000'
  date_gmt: '2009-08-05 16:21:12 +1000'
  content: OMG You are awesome.  Thank you so much, I wanted to throw my Vista computer
    into the trash I've been working on this since yesterday!  SO COOL it worked instantly.
- id: 226703
  author: cheryl
  author_email: grandma080@yahoo.com
  author_url: ''
  date: '2009-08-25 00:28:15 +1000'
  date_gmt: '2009-08-24 14:28:15 +1000'
  content: "looking for the website to download hp photosmart 776 printer \r\ncan
    anyone help me please"
- id: 227586
  author: Leo
  author_email: leohuynh@tpg.com.au
  author_url: ''
  date: '2009-08-27 16:38:11 +1000'
  date_gmt: '2009-08-27 06:38:11 +1000'
  content: "It works really well on Xerox 186 Model :-)\r\nThanks much !!!\r\nLeo"
- id: 229418
  author: STORMIE RIVERS
  author_email: theresacwilliams@aol.com
  author_url: ''
  date: '2009-09-01 13:59:08 +1000'
  date_gmt: '2009-09-01 03:59:08 +1000'
  content: "Can someone pleae help. I got all the way down to number 7, and its seems
    from all the other posting we are having the same issues.\r\n\r\nI used my computer
    name, the portname, everything what am I doing wrong. I have Vista on one computer
    and Windows xp on another...Thanks for any help\r\n\r\n\r\nFor the port name,
    enter exactly the network path and share name of your printer (e.g. \\\\RECEPTION\\Samsung
    SCX-4Ã—16 Series)."
- id: 231276
  author: Himanshu Bhushan
  author_email: hianshu@savgen.com
  author_url: ''
  date: '2009-09-06 17:21:18 +1000'
  date_gmt: '2009-09-06 07:21:18 +1000'
  content: You guys are great - We have been able to solve all printer problems
- id: 232200
  author: Gabriel Mitin
  author_email: gabriel.mitin@gmail.com
  author_url: ''
  date: '2009-09-08 23:07:08 +1000'
  date_gmt: '2009-09-08 13:07:08 +1000'
  content: |-
    Thank you very much!
    It's working OK with SCX-4200 model, except that after number 6, all I have to do is check that port, because it was already there. That's on Vista Business and MFP is on XP.

    Gabriel
- id: 233086
  author: Lisa
  author_email: lisa_saunders@hotmail.com
  author_url: ''
  date: '2009-09-11 11:16:15 +1000'
  date_gmt: '2009-09-11 01:16:15 +1000'
  content: I followed this and it seems to work up until I change the port. I have
    the printer installed on my laptop and plugged in to the desktop. I type in the
    \\server\printer (which I have checked several times on the desktop and it is
    correct) but it is saying the port is not found. In all the network pages on the
    laptop and desktop it doesn't seem like the two computers can see eachother, as
    they never show up on the other. On my laptop another laptop in my network shows
    up, but on the desktop neither laptop shows up. It's like the desktop isn't actually
    on the network when it is connected just like the laptops (wirelessly). Any help?
    Thanks.
- id: 233215
  author: Stormie Rivers
  author_email: theresacwilliams@aol.com
  author_url: ''
  date: '2009-09-12 05:38:36 +1000'
  date_gmt: '2009-09-11 19:38:36 +1000'
  content: LlSA....I am at the same point as you. Everything works up until I change
    the port; and it continues to say "cant locate the port" I see no additional responses
    have been posted.
- id: 235050
  author: lyle
  author_email: lylehardin@hotmail.com
  author_url: ''
  date: '2009-09-17 13:18:26 +1000'
  date_gmt: '2009-09-17 03:18:26 +1000'
  content: Thanks for the insight, solution worked as advertised sharing HP K4300
    from WinXP to Vista.  Disturbing thing was that previous to the above solution,
    Vista machine saw the printer, but when trying to install it, refused due to lack
    of authority.  Go figure, thanks again.
- id: 239277
  author: needscoffee
  author_email: hwgrieve@gmail.com
  author_url: ''
  date: '2009-09-28 17:39:21 +1000'
  date_gmt: '2009-09-28 07:39:21 +1000'
  content: Works for me! HP deskjet 3915, Vista 64-bit. It's been 2 1/2 years since
    you posted your solution, and it is still saving people. Don't know how you ever
    came up with this! Thank you!
- id: 251500
  author: mdeanh
  author_email: mdeanh@yahoo.com
  author_url: ''
  date: '2009-11-03 19:38:43 +1100'
  date_gmt: '2009-11-03 09:38:43 +1100'
  content: |-
    Ever since i got my new laptop with windows Vista I was unable to get my hp dj 5550 printer to print over my network.
    Thanks to his method of installing the printer as a local printer and adding in a port directed to the networked printer it works like its suppose to.
    A   for this post, I wont forget this fix next time it comes up.

    Thanks a Billion!!
- id: 255678
  author: NihilWolf
  author_email: nw.ns.thx@gmail.com
  author_url: ''
  date: '2009-11-22 08:03:01 +1100'
  date_gmt: '2009-11-21 22:03:01 +1100'
  content: "Canon S900 + Windows 7 and windows XP print server of course, and your
    solution is WORK!\r\nThanks for you :D"
- id: 258798
  author: Peter de Wagenaar
  author_email: peter@dewag.speedxs.nl
  author_url: ''
  date: '2009-12-07 09:08:48 +1100'
  date_gmt: '2009-12-06 23:08:48 +1100'
  content: "Because I know how by experience how much time and frustation it sometimes
    costs to get equipment working, I am very grateful for the solution you offered
    to get my Canon i865 (connected to an XP machine) working via wireless connection
    from my Toshiba m700 with Windows 7 operating system.\r\n\r\nMany thanks you shared
    this solution ! Peter"
- id: 267881
  author: Shank Kris
  author_email: l_shankar@rediffmail.com
  author_url: ''
  date: '2010-01-08 05:54:18 +1100'
  date_gmt: '2010-01-07 19:54:18 +1100'
  content: Hey!!! after 2 days of figuring out how to download 64 bit driver into
    my 32 bit xp..I failed...Now,this works for a windows 7 machine very well...The
    printer is HP 3015 All in one.My server is xp and client is windows 7.
- id: 274635
  author: Pelican
  author_email: nrs121@ozemail.com.au
  author_url: ''
  date: '2010-01-31 16:24:23 +1100'
  date_gmt: '2010-01-31 06:24:23 +1100'
  content: |-
    Your solution also works with Win7 accessing a printer on networked XP machine.
    Took me 4 hours to find your blog.
    Thank you heaps!
- id: 275740
  author: Smoke_Family
  author_email: wilsmoke@yahoo.com
  author_url: ''
  date: '2010-02-07 02:45:43 +1100'
  date_gmt: '2010-02-06 16:45:43 +1100'
  content: "Worked it saved a marriage.  I been dealing with this for 6 months.. trying
    to make two new vista computers work on network with XP computer where printer
    its.  the key for me was the net work name i made it harder then need be\r\n\r\n\\\\mycomputernamewheretheprinterisattached\\printernamethatislocatedinthesharingoftheprinter\r\n\r\nthat
    simple two things listed in name .. then port worked....  i also changed my sharing
    name so it was one word... as before i had HP 812c  i changed to HP812c  ... not
    sure if that helped but it worked..."
- id: 277720
  author: CRC
  author_email: crc123@myway.com
  author_url: ''
  date: '2010-02-14 18:21:56 +1100'
  date_gmt: '2010-02-14 08:21:56 +1100'
  content: What about a slightly different situation, a 64-bit Vista host and a 32-bit
    Vista client?  The 64-bit driver will not install on the 32-bit machine.
- id: 280568
  author: Herc
  author_email: sheridan@colba.net
  author_url: ''
  date: '2010-02-19 01:03:35 +1100'
  date_gmt: '2010-02-18 15:03:35 +1100'
  content: "I've been trying to connect to my HP laserjet 1020 from a Vista Laptop
    for almost a year, until I found this. It works like a charm.\r\n\r\nMany thanks
    for this!!\r\n\r\nHerc"
- id: 284791
  author: M.Proudfit
  author_email: mjp@mjproudfit.com
  author_url: ''
  date: '2010-03-01 18:52:41 +1100'
  date_gmt: '2010-03-01 08:52:41 +1100'
  content: You rock Dude!  Set up a Canon i9900 printer, on my new Dell laptop, that
    is connected to my XP Pro box. Had to start a trial subscription at Expert's Exchange
    to get an answer with a link to this article. Gat to find it!!!
- id: 285176
  author: M.Proudfit
  author_email: mjp@mjproudfit.com
  author_url: ''
  date: '2010-03-02 04:42:22 +1100'
  date_gmt: '2010-03-01 18:42:22 +1100'
  content: I should say that the new laptop has Windows 7.
- id: 293786
  author: Pat
  author_email: p.roth@bell.net
  author_url: ''
  date: '2010-03-16 08:36:42 +1100'
  date_gmt: '2010-03-15 22:36:42 +1100'
  content: "Because of a massive virus infiltration on my Vista 64 bit laptop, I had
    to reinstall the Vista program.\r\nThen I lost everything I had done before.  Some
    of it I had backed up on an external hard drive, but I could not connect my laptop
    to the printer which is connected directly to a desk top running XP.\r\nI tried
    a lot of things, but until I came across your solution, nothing worked.  Finally
    I was able to install on my laptop the required Vista driver and then following
    your instrucions, I was able to connect to the printer and print directly from
    my laptop and the desktop computers.\r\nThank you so much.  It has been a very
    frustrating few weeks, trying to reinstall everything.\r\nMany blessings to you!\r\nPat."
- id: 314278
  author: Surendra Konathala
  author_email: surendra@sand-soft.com
  author_url: http://www.sand-soft.com
  date: '2010-07-30 08:18:40 +1000'
  date_gmt: '2010-07-29 22:18:40 +1000'
  content: worked perfectly for me.. thanks!
- id: 314447
  author: Setsuko Kettell
  author_email: Zamborano@spinald.com
  author_url: http://makemusiconlinenow.com
  date: '2010-08-02 05:10:45 +1000'
  date_gmt: '2010-08-01 19:10:45 +1000'
  content: Thank you for spelling it out so clearly, once i started have a look at
    this I was a skeptic, but now I'm consistently seeking info. Thanks once again,
    I hope you don't mind if I link this tomy blog in order that my readers can benefit
    from this info aswell <a href="http://makemusiconlinenow.com" rel="nofollow">Thanks</a>
- id: 316514
  author: Glenn Schmelzle
  author_email: glenn@marketingwhatsnew.com
  author_url: http://marketingwhatsnew.com
  date: '2010-08-19 09:53:03 +1000'
  date_gmt: '2010-08-18 23:53:03 +1000'
  content: A big thank you - I just got my Windows7 laptop to print to a networked
    XP printer. I'm thrilled, thanks to your instructions!!
- id: 318183
  author: BÃ¼yÃ¼
  author_email: deramsss42@gmail.com
  author_url: http://www.buyubozmamerkezi.com
  date: '2010-09-04 21:15:45 +1000'
  date_gmt: '2010-09-04 11:15:45 +1000'
  content: A big thank you â€“ I just got my Windows7 laptop to print to a networked
    XP printer. Iâ€™m thrilled, thanks to your instructions!!
- id: 323479
  author: Bev
  author_email: bcici@chartermi.net
  author_url: ''
  date: '2010-10-17 15:22:41 +1100'
  date_gmt: '2010-10-17 05:22:41 +1100'
  content: Kev,  You are awesome.  My husband stopped me from committing murder/suicide
    by jumping out the window with computers and printer in arms.  After 2 weeks of
    trying to solve this issue I did even more research and came across your blog
    somehow.  I am no longer stressed out and you have saved my life.  Thank you for
    your solution and thanks to Troy and Stan for being inspired by you to make it
    even easier to fix this problem.  Your site is now in my Favorites.
- id: 360108
  author: jim
  author_email: jimscott@alum.rit.edu
  author_url: ''
  date: '2011-03-15 06:37:04 +1100'
  date_gmt: '2011-03-14 20:37:04 +1100'
  content: |-
    In the middle of trying this I am. One anomaly vis-Ã¡-vis Step 7:

    For the port name, enter exactly the network path and share name of your printer (e.g. \\RECEPTION\Samsung SCX-4Ã—16 Series).

    This Windows 7 Home Premium that HP installed will NOT accept spaces in the text box for the port name. Win7 [as in, Feelin' lucky, punk?!] just beeps at one if one attempts to enter a space character.
- id: 367087
  author: MrSmartyPants
  author_email: peaceguy@gmail.com
  author_url: ''
  date: '2011-04-02 16:37:34 +1100'
  date_gmt: '2011-04-02 06:37:34 +1100'
  content: |-
    UNBELIEVABLE !   This article/solution was published over FOUR YEARS AGO, and it is STILL useful...!!  I had just bought a Lenovo M58p Duo Core desktop to replace a NOISY old HP nx9600 laptop, and so I installed Windows 7 x64 onto it. My wife's old laptop she does a lot of work on, is of course, XP. I  of course could print to the Canon Pixma MP500 now attached to the new Lenovo desktop from my HP Elitebook laptop with Windows 7 x64, but I was PULLING MY HAIR OUT trying to get my wife's XP laptop to print to the Canon printer..!!  No matter what I tried. It didn't even seem to want to recognize the same old printer drivers after I deleted the old laptop printer on her laptop to point it to the new desktop's printer. Was killing me.

    But I Googles "canon mp500 windows 7 won't let xp print", and this article was the 9th link down. Thank GAWD I scrolled down after hitting the unhelpful links above it!

    This WORKED !!

    Thank you Kev, whoever you are.  You save me hours of tortuous troubleshooting. I was even thinking of calling - Canon! (ohgawd...).

    Thanks again.
- id: 378106
  author: Baodad
  author_email: baodad@byu.net
  author_url: http://baodad.posterous.com
  date: '2011-05-04 04:28:58 +1000'
  date_gmt: '2011-05-03 18:28:58 +1000'
  content: I add my voice to the many others that have expressed thanks for this tip!  It's
    not specific to any model of printer, it just works when you have a 64-bit computer
    trying to print to an older printer connected to a 32-bit computer acting as a
    print server.
- id: 421176
  author: JOHNNY
  author_email: JOHNNYMCENTYRE@YAHOO.COM
  author_url: ''
  date: '2011-08-08 22:09:58 +1000'
  date_gmt: '2011-08-08 12:09:58 +1000'
  content: WOW!  2 DAYS OF THIS CRAP AND THIS TOOK 2 MINUTES.  I DID HOWEVER HAVE
    TO CHANGE MY PRINTER NAME TO ONE WORD. THANKS VERY MUCH FOR THIS. LIFE SAVER!!
- id: 431957
  author: jane
  author_email: gemini_61791@yahoo.com
  author_url: ''
  date: '2011-09-02 18:35:46 +1000'
  date_gmt: '2011-09-02 08:35:46 +1000'
  content: hi.. can't find windows vista printer driver for epson lq300. help. thanks.
- id: 487479
  author: Stephen
  author_email: stephen@barrynet.net
  author_url: ''
  date: '2011-12-24 21:08:32 +1100'
  date_gmt: '2011-12-24 11:08:32 +1100'
  content: "Thanks. I also have spent months looking for this solution.\r\n\r\nNow
    I can sucessfully can print from Win7 64bit to Canon MP360 printer attached to
    Win2k server.\r\n\r\nNow I just need to refine the process for installing Win7
    Canon print drivers (which still seems a bit hit and miss)."
- id: 501427
  author: Luise Salverson
  author_email: glen-bingle@wildmail.com
  author_url: http://mincopca.org/digital-trade-watcher/how-transcriptionists-can-help-your-business
  date: '2014-01-13 09:22:46 +1100'
  date_gmt: '2014-01-12 22:22:46 +1100'
  content: Needed to put you that very little word so as to thank you yet again on
    your superb tactics you've shared on this page.
- id: 501433
  author: Art Garbarini
  author_email: nerdycheesecake@hotmail.com
  author_url: http://www.dorrysdeli.com
  date: '2014-03-12 15:52:27 +1100'
  date_gmt: '2014-03-12 04:52:27 +1100'
  content: Good website! I truly love how it is simple on my eyes and the data are
    well written. I am wondering how I could be notified whenever a new post has been
    made. I have subscribed to your RSS which must do the trick! Have a great day!
---
<p>For better or worse, <a href="http://www.microsoft.com/windows/products/windowsvista/">Windows Vista</a> is out today and I'll shortly be moving to it as the primary operating system on both my work and home PCs. Aside from compatibility glitches in certain Adobe applications, everything I need to work on Vista does (if a little shakily, in the case of <a href="http://www.mozilla.com/firefox/">Firefox</a>).</p>
<p>The one issue that almost prevented me from making the move was my need to connect to the shared printer at the office.</p>
<p><a id="more"></a><a id="more-142"></a>A Samsung SCX-4216F, the SitePoint office printer requires <a href="http://www.samsung.com/support/productsupport/download/Model_Select.aspx?type=MFP&typecode=300600&subtype=Multi+Function+Product&subtypecode=300601&model=SCX-4216F&filetype=DR&language=">new printer drivers</a> to work in Vista. Unfortunately, unless Vista has the necessary driver built-in (it doesn't in this case), the Add Printer wizard in Vista insists on retrieving the driver for a network printer from the computer to which the printer is connected. At SitePoint (and at many other offices, I imagine), that is and will remain for the foreseeable future, a Windows XP computer. Since you can't install the Vista driver on a Windows XP computer, that means that Vista fails to connect to the network printer.</p>
<p>The solution is a twisty one that I wasn't able to find in any of the official Microsoft documentation. In short, you need to fool Vista into thinking that the network printer is actually a local printer, so that you can install the driver directly on your Vista computer.</p>
<p>Here are the exact steps that worked for me:</p>
<ol>
<li><a href="http://www.samsung.com/support/productsupport/download/Model_Select.aspx?type=MFP&typecode=300600&subtype=Multi+Function+Product&subtypecode=300601&model=SCX-4216F&filetype=DR&language=">Download</a> the Windows Vista printer driver for the SCX-4216F multifunction printer from <a href="http://www.samsung.com/">www.samsung.com</a>.</li>
<li>Install the driver on your Windows Vista computer. During installation, you’ll be prompted to connect the printer to your computer. Choose the option to proceed with installation without connecting the printer.</li>
<li>After installation completes, open the Printers applet from the Windows Vista Control Panel.</li>
<li>Right-click on the new Samsung SCX-4100 Series printer and choose Properties.</li>
<li>Go to the Ports tab.</li>
<li>Click Add Port..., select Local Port, then click New Port...</li>
<li>For the port name, enter exactly the network path and share name of your printer (e.g. \\RECEPTION\Samsung SCX-4x16 Series).</li>
<li>Click OK, and double-check that this new port is selected with the checkbox next to it.</li>
<li>Click OK to close the printer properties.</li>
</ul>
