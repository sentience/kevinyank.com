---
title: Orbitkey + 1Password + Hazel = ♥
author: Kevin Yank
date: 2014-05-04T23:00:00+1000
excerpt: This past week I received my Orbitkey, an alternative to your typical
  keychain that holds your keys snugly within a leather or rubber loop instead
  of allowing them to jangle around in your pocket. Included with my Orbitkey
  was the optional extra 32GB USB flash drive. The moment I saw that key-shaped
  drive I knew what I wanted to store on it.
categories:
- tech
---

This past week I received my [Orbitkey][orbitkey], a local [Kickstarter success story][orbitkeyks] recommended to me by my pal [Matt Magain][mattymcg]. It’s an alternative to your typical keychain that holds your keys snugly within a leather or rubber loop instead of allowing them to jangle around in your pocket. When you need a key, it’s always in the same place and you just fold it out for use.

{% include figure src="/assets/images/blog/orbitkey.jpg" alt="photo of an Orbitkey on a wooden surface with keys and other accessories attached" caption="My Orbitkey with my keys and 32GB USB flash drive folded out for access" %}

Included with my Orbitkey was the optional extra 32GB USB flash drive (you can add in a bottle opener too). The moment I saw that key-shaped drive I knew what I wanted to store on it.

## 1Password on a Bad Day

I store all my web logins, server logins, credit cards, software licences, SSH and SSL keys, and anything else I want to carry around with me in a secure form in [1Password][1password]. Its encrypted database is synced via Dropbox between the Mac, iPhone and Windows versions of the application. As long as I remember my one, very strong master password, I can unlock all of that data and access it from any of my devices.

But what if I need some of my secure data on a computer without 1Password installed? Let’s say I’m fixing a friend’s PC and I need to grab the licence key for a disk repair utility I bought some time ago. 1Password has a neat solution to this called [1Password Anywhere][1pwanywhere]. As long as you can access a copy of your 1Password data files, you can open the 1Password.html file included within them in a web browser and enter your master password into that web page to gain access to your secure data. So if I find myself in this position, I just surf over to dropbox.com, log into my account, and open up the 1Password.html file I have stored there. No copy of 1Password required!

{% include figure src="/assets/images/blog/1password-anywhere.png" alt="the 1Password Anywhere master password prompt" caption="1Password Anywhere opened in Safari" %}

But wait, did you spot the problem? I had to log into Dropbox to get at that file. First of all, that means I need to memorise not only my 1Password master password (to unlock my 1Password data), but also my Dropbox account password (to access my locked data at all). Secondly, I have my Dropbox account protected with [2-factor authentication][dropox2factorauth] (you should too!), so if my phone isn’t to hand (or has run out of charge), I won’t have a Dropbox login token, and I won’t be able to access my files online at all!

Granted, I’m getting pretty close to a worst-case scenario with these hypothetical problems, but it’s precisely on the worst day of your life that you will most need reliable access to your personal, private data.

## Peace of Mind, Automated by Hazel

This brings me back to that key-shaped flash drive. Wouldn’t it be great to have a recent copy of my encrypted 1Password data on that drive? Like my phone, it would travel with me almost everywhere, but it would never run out of battery, choke on a bad software update, or suffer a shattered screen if dropped by accident. Thanks to 1Password Anywhere, all I’d need to access that encrypted data would be a working web browser and my master password.

Of course, I could just remember occasionally to copy my 1Password data files from my Mac onto that drive, but that’s just enough friction to cause me to neglect to do it regularly. Rather, I’d like the latest changes to those files to sync onto the USB drive whenever I plug it into my Mac.

OS X has the tools to set this up built in. A combination of [Folder Actions][osxfolderactions] and [Automator][automator] workflows, and perhaps a small shell script to invoke rsync would do the trick, but as I considered it this was all feeling a bit finnicky and fragile, certainly not a solution I could recommend to others. Then I remembered Hazel’s sync action.

[Hazel][hazel] is an OS X add-on I’ve written about before. You give it folders to watch, and for each folder you define a set of rules. When a file in a watched folder matches a rule you have set, Hazel does what you tell it to do. One of the things it can do is sync that file to another location.

Here’s the rule I’ve set up in Hazel for my Dropbox folder. It watches the 1PasswordSync subfolder (which contains my 1Password data) to see if it has been changed since the last time this rule was triggered, and if it was it syncs the latest changes to its contents to my Orbitkey flash drive.

{% include figure src="/assets/images/blog/hazel-1password-orbitkey-sync.png" alt="Hazel is configured with a rule to monitor my Dropbox folder for files where Kind is Folder, Name is 1PasswordSync, and any of the following conditions are met for the current file or folder: Date Last Modified is after Date Last Matched, or any of the following conditions are met for any of its subfiles or subfolders: Date Last Modified is after Date Last Matched. The rule action is set to Sync into folder: Orbitkey" caption="To create condition groups, hold down the Option (⌥) key when you click the button to add a condition" %}

Hazel is smart enough to hold off on running this rule until it notices the Orbitkey drive is connected and available; therefore, whenever I connect the drive, any recent changes to my 1Password data files are almost immediately synced to it. Perfect!

The only rough patch to this workflow right now is that, because I’ve formatted the Orbitkey drive as [exFAT][exFAT] (so that I can read it on Windows and Linux computers, not just Macs), Hazel complains in its log file that it is unable to replicate the extended attributes of the files it syncs to the drive. Fortunately, 1Password’s data files don’t depend on such attributes, so this doesn’t appear to cause any real issue.

With [Orbitkey][orbitkey], [1Password][1password] and [Hazel][hazel] working together, I have the peace of mind of knowing that the keys to my life—online _and_ off—will always be with me.

[1password]: https://agilebits.com/onepassword
[1pwanywhere]: http://help.agilebits.com/1Password3/1passwordanywhere.html
[automator]: http://www.macosxautomation.com/automator/index.html
[dropox2factorauth]: https://www.dropbox.com/help/363/en
[exFAT]: http://en.wikipedia.org/wiki/ExFAT
[hazel]: http://www.noodlesoft.com/hazel.php
[mattymcg]: http://about.me/mattymcg
[orbitkey]: http://www.orbitkey.com
[orbitkeyks]: https://www.kickstarter.com/projects/1912797983/orbitkey-love-your-keys
[osxfolderactions]: https://developer.apple.com/library/mac/documentation/applescript/conceptual/applescriptlangguide/reference/ASLR_folder_actions.html
