---
date: 2023-01-21T11:51:13.068Z
title: Fix System Beep on Move Editor into Next Group in VS Code
tags:
  - web development
---

In Visual Studio Code, I frequently want to split the window into two panes to view one file alongside another. The quickest way to do this without my hands leaving the keyboard is to use **View: Move Editor into Next Group** with the keyboard shortcut ^⌘→ (ctrl-cmd-right arrow).

{% render figure, src: "/assets/images/blog/fix-system-beep-vscode/ymb1l.png", alt: "Screenshot of the command palette in Visual Studio Code with the command highlighted", caption: "You can find the command in the Command Palette" %}

Although this works out of the box in VS Code, for several years now on macOS it also triggers an annoying system beep.

A few years ago this was annoying me enough that I tried to track down the cause. The issue seems to be that Chromium (the browser engine in Electron, the framework that lets you build desktop applications with web technology, with which VS Code is built) does not notify macOS when it handles keyboard shortcuts like ^⌘←, ^⌘↓, and ^⌘→, so macOS plays the system beep to warn you that your keystrokes didn't do anything (even though they did). [A bug report for this on the Chromium project](https://bugs.chromium.org/p/chromium/issues/detail?id=916460) was closed in January 2020 as WontFix, seeming to blame macOS for the issue.

Fortunately, there's a work-around: set up [custom macOS key bindings](https://blog.victormendonca.com/2020/04/27/how-to-change-macos-key-bindings/).

You can establish system-global key bindings for the key combinations ^⌘←, ^⌘↓, and ^⌘→ that are mapped to no operation (`"noop"`). Simply having these declared as valid keystrokes at the OS level eliminates the system beep that occurs even when a Chromium app accepts and handles the keystroke.

In order to establish this, you need to create a **~/Library/KeyBindings/DefaultKeyBinding.dict** file. Note that you'll probably need to create the directory as well, and that the directory name is plural (**Bindings**), but the file name is singular (**Binding**). This should be in your user **Library** folder, not the **/Library** folder or the **/System/Library** folder.

This should be a text file with these contents:

```
{
  "^@\UF701" = "noop";
  "^@\UF702" = "noop";
  "^@\UF703" = "noop";
}
```

`^` means Ctrl, `@` means Command, and `\UF701`, `\UF702`, and `\UF703` are the codes for the three arrow keys. There's a nice reference Gist for this file's syntax [here](https://gist.github.com/trusktr/1e5e516df4e8032cbc3d). You can download a copy of this file if that's easier (but you'll need to extract it from the ZIP archive):

[DefaultKeyBinding.dict.zip](/assets/files/blog/fix-system-beep-vscode/DefaultKeyBinding.dict.zip)

Once you have created this file, restart VS Code (or any other applications where you want to use these keystrokes), or just reboot your system. After that, you should find that the system beeps are gone. I have successfully applied this tweak since macOS Catalina (10.15.2) all the way up to the current macOS Ventura (13.1) to use the default keyboard shortcuts for the **View: Move Editor into Next Group** and **View: Move Editor into Previous Group** commands without hearing system beeps each time.
