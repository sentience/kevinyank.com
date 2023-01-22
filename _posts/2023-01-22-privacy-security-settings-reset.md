---
title: Privacy & Security settings in macOS reset on reboot
date: 2023-01-22T10:49:48+11:00
tags:
  - tech
  - macOS
---

Since macOS Monterey 12.6.1, including the current macOS Ventura 13.1, whenever I reboot, my Mac forgets some or all of the applications I've given permissions to in the Privacy & Security settings. This can include permissions for Accessibility (1Password, Bartender, Logi Options, etc.), Full Disk Access (iTerm, LaunchBar, Transmit, etc.) and Screen Recording (CleanShot, Keyboard Maestro, ScreenFlow). At different times, a series of escalating fixes is necessary to work around this until the next time that it happens.

The bug seems to be a race condition of some kind, where applications request the access they've already been granted before macOS has finished bringing the necessary services online, so the app thinks it has lost its permissions. I believe this because the easiest way to resolve the issue, often, is to **quit and restart the app** that is complaining that it lacks permissions.

That doesn't always do the trick, though. There seems to be a way that the database for an entire section of the Privacy & Security settings (most commonly Accessibility) can become corrupt, and all the apps that rely on it will be locked out. When this happens, the apps are still listed as approved in Privacy & Security, and toggling their permissions on and off doesn't help, nor does removing the apps from the list entirely and re-adding them.

This issue is widespread enough that some of these applications have help pages on their support sites with advice on how to resolve the problem when it occurs. [Bartender](https://www.macbartender.com/b4blog/macOS-Ventura-Permissions/) advises users to open Terminal and use the [`tccutil` utility](https://eclecticlight.co/2020/01/28/a-guide-to-catalinas-privacy-protection-4-tccutil/) to reset permissions. I've had success with doing this for all apps at once:

```shell
tccutil reset Accessibility
tccutil reset ScreenCapture
tccutil reset SystemPolicyAllFiles
```

After running the necessary command(s) and rebooting, the applications will prompt for the access they need again, but this time you'll be able to add them back into the list of approved applications successfully again.

Every now and then, however, an even _worse_ manifestation of this issue may see you looking at a blank list of approved applications in Privacy & Security settings, with every attempt to add an application back onto the list failing silently:

{% render figure src: "/assets/images/blog/privacy-security-settings-reset/blank-accessibility-list.png", alt: "screenshot of macOS Privacy & Security settings, with the Accessibility list showing No Items", caption: "The scary blank list" %}

When this happens, it's time to get the big hammer. What has worked for me is to delete the **~/Library/Preferences/com.apple.security.KCN.plist** file and reboot.

```shell
rm ~/Library/Preferences/com.apple.security.KCN.plist
```

Surprisingly, when I do this, after rebooting I find that all my previously-approved applications are back in the list! So however this file works, there does seem to be an underlying "source of truth" that doesn't get clobbered in this process.

None of these solutions are permanent. I've steadily gotten used to a reboot of my Mac taking 30 minutes out of my day while I sort out broken macOS permissions. I really hope Apple fixes this (assuming it's their bug) soon!

Are you seeing some version of this issue on your Mac? Please reach out and let me know. The biggest mystery about this for me is whether this is a side-effect of some peculiar aspect of my Mac's setup, or if this is an issue that is affecting everyone using apps that require Accessibility permissions on their Mac.
