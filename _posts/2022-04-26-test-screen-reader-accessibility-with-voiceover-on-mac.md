---
title: How to test for screen reader accessibility with VoiceOver on your Mac
author: Kevin Yank
date: 2022-04-26T20:20+1000
excerpt: Every Mac has a screen reader built in, called VoiceOver. This article describes how you can use it to test the web application user interfaces you build!
categories:
  - Apple
  - Culture Amp
  - development
featured: true
featureImg: /assets/images/blog/test-screen-reader-accessibility-with-voiceover-on-mac/voiceover-utility.png
featureImgAlt: screenshot of VoiceOver Utility
---

Every Mac has a screen reader built in, called VoiceOver. This article will describe how you can use it to test the web application user interfaces you build!

If you prefer a video, this is a recording of a brown bag session I gave at [Culture Amp] ([we're hiring!][CA hiring]) in early 2019, when we started getting serious about web accessibility. (We've come a very long way since then!) Besides introducing the features of VoiceOver, I do an ad hoc test of Culture Amp’s engagement survey experience as it existed at that time.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/38qQzmkXGS4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Note:** Culture Amp's survey experience no longer relies on a "basic capture" mode to accommodate screen reader users. In 2020, we shipped updates to the main survey experience that fixed all the screen reader issues we (and our auditor, [Intopia]) could find. This is a _far_ preferable user experience for users of assistive technologies.

## Getting started

Every Mac has VoiceOver included, so there’s nothing to install. To turn on VoiceOver, hit **⌘F5**. Hit the same shortcut again to turn it off. On Macs with a TouchBar (where the function keys are not visible by default), you can instead hold down command key (**⌘**) and press the **TouchID button** three times in quick succession (click-click-click) to toggle VoiceOver on or off.

When VoiceOver starts up, you’ll hear a voice explain your current context, and your options for what to do next. If you have a Safari browser window in focus, it might sound like this:

> VoiceOver on Safari. Welcome to Engagement Survey, window. Welcome to Engagement Survey, web content has keyboard focus.
>
> You are currently on web content. To enter the web area, press Control-Option-Shift-Down Arrow.

You’ll also see a black border around the part of the user interface (in this example, the Safari window’s content area) that currently has screen reader focus. This is also known as the **VoiceOver cursor**.

The message above suggests pressing **^⌥⇧↓** (Control-Option-Shift-Down Arrow). The **^⌥** (Control-Option) part is known as the VoiceOver Modifier, and it’s the two keys you will hold down for almost every command that you send to VoiceOver.

---
**Note**

If you find **^⌥** difficult to remember, by default VoiceOver will also respond to the **⇪** (Caps Lock) key. So in the above example you could hold **⇪⇧↓** to enter the web area.

---

**^⌥⇧↓** is the standard shortcut to interact with a group, like entering the Safari browser’s web content area. If you use this to enter a web page, you’ll hear something like this:

> In Welcome to Engagement Survey, web content.

You’ll also see the VoiceOver cursor will shrink to enclose just the first element of the web page.

To get VoiceOver to read the current contents of the cursor, you can hit **^⌥F3**. To do this on a TouchBar Mac, you’ll need to hold the **Fn** key to see the function keys on the touch bar, then you’ll need to tap and then double-tap the **F3** key – tapping it helps you identify that you’ve tapped the right key (VoiceOver will say “F3, button”), and enables it for activation by double-tapping.

It might say something like this:

> CA-logo_coral, group, is in the VoiceOver cursor.

In this example, the VoiceOver cursor is on an image element that lacks a useful alternative text description, so VoiceOver reads out the filename of the image instead. Not very useful, is it? Congratulations! You’ve found your first screen reader accessibility bug!

## Moving around

**^⌥→** moves the VoiceOver cursor forward.

**^⌥←** moves the VoiceOver cursor backward.

Each time you navigate, VoiceOver will describe the content in the cursor, then give you a hint of what you can do next.

> Hooli logo, image.
>
> You are currently on an image, inside of web content. To exit this web area, press Control-Option-Shift-Up Arrow.

---
**Note**

These hints can get tedious, and there are a couple of options to fix this:

At any time, you can interrupt VoiceOver by tapping the **^** (Control) key or **⇪** (Caps Lock). You can tap again if you want to resume playback.

Alternatively you can open VoiceOver Utility (in **System → Applications → Utilities**, or **^⌥F8** with VoiceOver running). Under **Verbosity → Hints**, you can disable **Speak instructions for using the item in the VoiceOver cursor.**

{% include figure src="/assets/images/blog/test-screen-reader-accessibility-with-voiceover-on-mac/voiceover-utility.png" alt="screenshot of VoiceOver Utility" caption="Disable &quot;Speak instructions…&quot; to reduce VoiceOver chattiness" %}

**^⌥⇧N** immediately plays the hint for the current cursor position, which is handy once you’ve disabled playing them automatically.

---

**^⌥⇧↑** is the standard shortcut to exit, or stop interacting with a group. It’s the opposite of the “interact with a group” shortcut we used above to enter the web page. These two shortcuts let you move into and out of groups (and sub-groups) of elements anywhere on a web page.

By default, when you encounter a group while moving forward or backward through a document, VoiceOver will enter groups and read their contents to you one at a time. To skip over groups as you navigate, just hold down the **⇧** (shift) key.

**^⌥⇧→** moves the VoiceOVer cursor forward, skipping over groups.

**^⌥⇧←** moves the VoiceOVer cursor backward, skipping over groups.

## Interacting with links and buttons

When you get to an interactive element like a link or button, you’ll hear something like this (including the hint):

> Get started, button
>
> You are currently on a button, inside of web content. To click this button, press Control-Option-Space. To exit this web area, press Control-Option-Shift-Up Arrow.

**^⌥␣** is the standard shortcut to trigger an interactive element. It’s just like hitting the spacebar on your keyboard to trigger a button after tabbing to it with your keyboard, but with the VoiceOver modifier added.

## Reading in chunks

**^⌥A** will read the content of the element selected by the VoiceOver cursor. It’s a good way to read an entire group without navigating into it.

## The VoiceOver Rotor

Screen reader users frequently jump around the page using prominent landmarks such as headings and form controls. The VoiceOver Rotor is a convenient interface for doing this.

**^⌥U** opens the VoiceOver Rotor, a two-dimensional menu for navigating page landmarks. The first time you open it, you’ll see the **Headings** menu, showing all of the headings on the page, and their level (1-6). You can use the up and down arrows to navigate the list, or you can type to filter the list with a search string. Hit **Enter** to jump to a selected heading in the list, or hit **Escape** to exit the list.

With the Rotor open, you can view other menus of page landmarks: **Links**, **Form Controls**, etc.

VoiceOver’s QuickNav feature (which can be disabled if you want) remembers which list you last had open in the Rotor, and lets you quickly jump between the items in that list using the **↑** and **↓** keys (without the VoiceOver modifier). This makes it super easy to get around a page using headings, for example.

## Group navigation mode

VoiceOver has an alternative navigation mode that lets you move around with the arrow keys (**^⌥↑**, **^⌥↓**, **^⌥←**, **^⌥→**), giving you a sense of spacial awareness about the page. If we were being really thorough with our screen reader testing, we’d have to test both modes! In practice, we’re told by the VoiceOver manual, different sites often work better with different modes, so it’s common for users to toggle this setting as they move from site to site.

To turn on Group navigation mode, hit **^⌥H** to open the VoiceOver Help menu, then **^⌥H** again to get to the Commands Help menu. Type “DOM” to locate the Toggle Web Navigation DOM or Group and hit Enter to toggle the option on.

> Groups, web navigation

(You can toggle back to DOM navigation mode using the same steps.)

You can now use the four arrow keys (with the VoiceOver modifier) to move around the page and have VoiceOver read the entire content of each major content block as you do.

Remember, to get in and out of groups, use **^⌥⇧↓** and **^⌥⇧↑**, respectively.

If in doubt, get the page working well with DOM navigation mode, as it’s the default setting for VoiceOver, and is closest to how other screen readers (like JAWS and NVDA for Windows) work.

## Further reading

You can click the little question mark button in VoiceOver Utility to open the [VoiceOver User Guide], which is the best way to get to know VoiceOver better. The most worthwhile sections to start reading are [Introducing VoiceOver], [Learning VoiceOver Basics], and [Browsing the Internet].
The WebAIM website has [a guide very similar to this one][WebAIM guide], that contains some nuggets of information you might not find here.

[Culture Amp]: https://www.cultureamp.com
[CA hiring]: https://www.cultureamp.com/company/careers
[VoiceOver User Guide]: https://help.apple.com/voiceover/info/guide/10.9/English.lproj/index.html
[Introducing VoiceOver]: https://help.apple.com/voiceover/info/guide/10.9/English.lproj/_1195.html
[Learning VoiceOver Basics]: https://help.apple.com/voiceover/info/guide/10.9/English.lproj/_1198.html
[Browsing the Internet]: https://help.apple.com/voiceover/info/guide/10.9/English.lproj/_1205.html
[WebAIM guide]: https://webaim.org/articles/voiceover/
[Intopia]: https://intopia.digital
