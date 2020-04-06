---
layout: post
title: Shrink Videos With ffmpeg On Your Mac
author: Kevin Yank
date: '2020-04-06 21:00:00 +1000'
excerpt: "There is a free tool called ffmpeg that makes it easy to convert an original video file into something much smaller (as little as 10% the size, in some cases!) but still very high quality. Installing and running it on your Mac can be a little bit of a hassle, especially if you’ve never used the command line in Terminal before, but I’ve written up these detailed instructions to get you started."
categories:
  - macOS
  - tech tips
---

In these times of communicating remotely, sending video files to each other (and even to customers) is becoming a daily reality! But the videos that our phones and computers record are often extremely large, as they are meant to be high-quality originals.

There is a free tool called [ffmpeg][] that makes it easy to convert an original video file into something much smaller (as little as 10% the size, in some cases!) but still very high quality. Installing and running it on your Mac can be a little bit of a hassle, especially if you’ve never used the command line in Terminal before, but I’ve written up these detailed instructions to get you started.

This guide covers how to install and use ffmpeg on your Mac. It assumes no previous experience with the Terminal command line.

I'm happy to help anyone who runs into trouble with these instructions (especially if your troubles help me improve the instructions!). Just ping me on [Twitter][https://twitter.com/sentience] or [Mastodon][https://mastodon.technology/@sentience].

See [GUI Alternatives](#gui-alternatives) below if you decide these instructions are too much trouble! :)

# Open Terminal

Terminal is an application that is included with macOS. It lets you type commands on a command line prompt, and run programs that do not have a graphical user interface, like ffmpeg.

You can find Terminal in the Utilities folder in your Mac’s main Applications folder. Or just click Spotlight (🔍) in your menu bar, type **Terminal**, and hit Return to open Terminal.

A mostly blank, white window will appear, with a couple of lines of text ending in a prompt like this:

~~~
yourname@yourcomputer ~ %
~~~

(Where `yourname` is your user name, and `yourcomputer` is the network ID of your Mac.)

You can close the window or quit Terminal entirely just like any other application on your Mac, but you might as well leave it open, since you’ll need it in the next step.

# Install Homebrew
Since macOS is mostly designed to support software with graphical user interfaces, it doesn’t provide an easy way to install command line software. Homebrew is an open source tool that makes it easier to install programs like ffmpeg. So before you can install ffmpeg, you must first install Homebrew.

Visit https://brew.sh/. On the home page, just below the heading **Install Homebrew**, you’ll see a command that starts with `/bin/bash -c`. Select the whole command with your mouse, and copy it to your clipboard with ⌘C (or right-click and choose **Copy**). Paste (⌘V or right-click and **Paste**) the command into your Terminal window and hit Return to run it.

> **Note: Pasting commands you don’t understand into Terminal can be dangerous**
>
> You should generally treat requests to paste commands into Terminal with skepticism. Terminal commands can make low-level, potentially destructive changes to your computer and its software, and can access any file on your computer that you yourself can access. In short, be careful who you trust!
>
> Homebrew is a trustworthy source. Culture Amp’s engineers use Homebrew to install development tools on a daily basis.

The install script will display a prompt like this one:

~~~
==> This script will install
/usr/local/bin/brew
/usr/local/share/doc/homebrew
/usr/local/share/man/man1/brew.1
/usr/local/share/zsh/site-functions/_brew
/usr/local/etc/bash_completion.d/brew
/usr/local/Homebrew

Press RETURN to continue or any other key to abort
~~~

Depending on what you already have installed on your computer, it may also mention that it will install the **Xcode Command Line Tools**, which is expected.

Hit Enter to let the installer do its thing. It will likely prompt you for your password, in which case you’ll need to type the password you use to log in to your Mac.

> **Note: Software Update notifications**
>
> As the Homebrew installer downloaded and installed Xcode Command Line Tools, my Mac popped up a separate Software Update notification, letting me know that an update to Xcode Command Line Tools was available to install. If that happens to you, ignore this prompt for now. If it’s still showing up after you finish installing Homebrew, you can feel free to let Software Update install the update; it will likely fail to install and say that your system no longer needs the update.

After a little while, the Homebrew installer will complete. If you have your volume turned up on your Mac, the Terminal app will beep to let you know it’s done. The output will end with something like this:

~~~
==> Installation successful

…stuff about analytics and donating…

==> Next steps:
- Run `brew help` to get started
- Further documentation: 
    https://docs.brew.sh!
yourname@yourcomputer ~ %
~~~

The last line is a fresh command line prompt, letting you know Terminal is ready for you to type another command. You should now be able to install ffmpeg.

# Install ffmpeg
In Terminal (either the window you used to install Homebrew, or a new window will work too), type this command to install ffmpeg with Homebrew, then hit Return:

~~~
brew install ffmpeg
~~~

The first time you do this, it will take awhile. ffmpeg itself requires a large number of other software packages. Homebrew will dutifully install all of these one by one.

Eventually, the installation of ffmpeg should complete with a message like this:

~~~
==> Pouring ffmpeg-4.2.2_2.catalina.bottle.tar.gz
🍺  /usr/local/Cellar/ffmpeg/4.2.2_2: 287 files, 56.7MB
yourname@yourcomputer ~ %
~~~

# Re-encoding a video with ffmpeg

Now that you have ffmpeg installed, you can use it to shrink a video for sharing! This will create a new, smaller video file alongside the original – there is no need to worry about losing your original, high-quality file.

## Put the original file in a well-known place
Your first step should be to put your original video file somewhere that ffmpeg can get at it. I recommend putting the file on your Desktop, but your Movies folder or your Downloads folder are fine choices too.

## Go to the folder in Terminal
Open a new Terminal window (or you can use the one you used to install ffmpeg, if it’s still open). Your command prompt should look something like this:

~~~
yourname@yourcomputer ~ %
~~~

The `~` in that prompt indicates that you are currently working in your home directory. That’s the folder on your Mac that contains your Desktop, Documents, Movies and Downloads folders, among others. In order to convert your video file, you need to **change directory** to the folder containing your video file.

The command to change directory is `cd`. To change directory to your Desktop, you would type `cd Desktop`. To change to your Movies folder, `cd Movies`, and `cd Downloads` will take you to your Downloads folder. Hit Return to run the command.

You should now see an updated prompt telling you which directory you’re now in:

~~~
yourname@yourcomputer ~ % cd Desktop
yourname@yourcomputer Desktop % 
~~~

If you ever want to return to your home directory, you can type `cd ..` and hit Return to take you to the parent folder from your current folder. Or you can type `cd ~` to get to your home directory from anywhere. Or you can just close your Terminal window and open a new one, which will start you in your home directory again.

You should now be in the folder that contains your original video file. You can confirm this by typing `ls` (short for “list”) and hitting Return to list all of the files in the current directory. You should be able to spot your video file among them.

## Convert the file with ffmpeg
Type this command to run ffmpeg on your original file:

~~~
ffmpeg -i "Movie File.mov" "Movie File.mp4"
~~~

This command contains two filenames: the name of the original file you want to convert, and the name of the re-encoded file you want to create. Note that the new filename should end in “.mp4".

Note also that both filenames are surrounded by double quotes, so that Terminal doesn’t get confused by the spaces in the filenames.

> **Tip: Get Terminal to type the filenames for you**
>
> If you’re lazy like me, you can get Terminal to type most of the filenames for you automatically. Just type enough characters of the filename so that Terminal will know which of the files in the current folder you’re referring to, then hit Tab, and Terminal will finish typing the filename for you. For the output file, you can use the same trick to type the original filename again for you, then backspace over the last few characters to change the filename to end in “.mp4”.

If your original filename already ends in “.mp4", you’ll need to find some other way to distinguish the new filename. I suggest adding the word “converted” to the end of the name, so that it ends in “converted.mp4".

When you’re ready, hit Enter.

ffmpeg will output a _lot_ of information about the original video file, and then it will begin counting the frames of video as it converts them:

~~~
frame= 1902 fps= 73 q=31.0 size=   13824kB time=00:00:32.83 bitrate=3449.3kbits/s speed=0.96x
~~~

If your Terminal window is small, you may find that it prints this output over and over again, over many lines of output, rather than updating the line of status in place at the bottom of the window. This may look messy, but it doesn’t really matter. Just wait for it to finish.

Depending on how beefy your computer is, ffmpeg will take about the length of the video itself to convert it. The `speed` indicator in the status tells you how fast it’s going compared to the original video (`speed=1x` means it’s going at the same speed as the video).

When it’s done, you’ll be dropped back at a fresh Terminal prompt after a final splash of confusing technical output about the video file, and you’ll have your new file in the same folder as the original file. You can quit Terminal with ⌘Q (or choose **Terminal → Quit Terminal** in your menu bar). You can then work with your new file as you normally would in Finder.

# GUI Alternatives

If the instructions above are all too scary, or just too much work to convert just one video, you have some options:

* Open the video file in QuickTime Player, and choose **File → Export As**, and select the desired quality for your video file.

  Note that this will change the pixel dimensions of your video, unlike ffmpeg, which will preserve its dimensions and only lower the bitrate (the number of bytes per second of video).

  720p is probably good enough to still seem “high quality” on most devices these days, while saving you a lot of space compared to an original 4K video shot by your iPhone, say.
* Download and install [Handbrake][], a GUI wrapper around ffmpeg. It's not quite as “set and forget” as ffmpeg's defaults above, but it does provide you some nice configurability if you need it, without having to dive into the byzantine world of ffmpeg parameters.

Thanks to [Max Wheeler](https://twitter.com/makenosound) for both of these suggestions!
