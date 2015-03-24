---
layout: post
status: publish
published: true
title: My Sublime Text Setup
author: Kev
author_login: kyank
author_email: thatguy@kevinyank.com
author_url: http://old.kevinyank.com
excerpt: A couple of months ago I produced a video course for lynda.com about the
  Sublime Text programmer’s editor, “Up and Running with Sublime Text 2”. One of the
  best things about producing a course or writing a book is that you get to know your
  subject *really* well, so after a couple of friends asked me today what I recommend
  when setting up Sublime Text for the first time, I thought I’d write it up here.
wordpress_id: 260
wordpress_url: http://old.kevinyank.com/blog/?p=260
date: '2013-04-22 22:43:51 +1000'
date_gmt: '2013-04-22 12:43:51 +1000'
categories:
- training
tags: []
comments: []
---
<p>A couple of months ago I produced a video course for lynda.com about the <a href="http://www.sublimetext.com/">Sublime Text</a> programmer’s editor, <a href="http://www.lynda.com/Sublime-Text-tutorials/Up-Running-Sublime-Text-2/114325-2.html">“Up and Running with Sublime Text 2”</a>—sample videos below! One of the best things about producing a course or writing a book is that you get to know your subject <em>really</em> well, so after a couple of friends asked me today what I recommend when setting up Sublime Text for the first time, I thought I’d write it up here.</p>
<p><a id="more"></a><a id="more-260"></a></p>
<h2>Make it Look Nice</h2>
<p>I hate to say it, but Sublime Text looks like ass out of the box. If you’re coming from Vim you might not mind so much, but one of the reasons I prefer an editor with a graphical interface is that I get to look at something relatively pretty all day.</p>
<p>Sublime Text’s default icon is a rare miss from <a href="http://iconfactory.com">The Iconfactory</a>. Fortunately there are plenty of good alternatives out there. Jerod Santo has <a href="http://blog.jerodsanto.net/2012/01/sublime-text-2-icon-replacement-roundup/">a nice post with many of the best options</a>, from minimalist choices like Adam Kiss’s abstract design…</p>
<p><a href="https://forrst.com/posts/Unofficial_Sublime_Text_2_Icon_Replacement_F-6hb"><img src="http://old.kevinyank.com/blog/wp-content/uploads/2013/04/st2-adamkiss.png" alt="a dark grey circle with a small grey dot at its centre and a vertical white line to the right of it" border="0" width="256" height="256"></a></p>
<p>…to carefully rendered images like Kreg Wallace’s lickable lime segment.</p>
<p><a href="http://www.designkode.com/sublime-text-icon/"><img src="http://old.kevinyank.com/blog/wp-content/uploads/2013/04/st2-kregwallace.png" alt="A shiny, white-edged slate with a blue grid pattern and the letter ‘S’ sketched on it with a bold outline rests partly obscured by a slice of lime glistening with water droplets." title="st2-kregwallace.png" border="0" width="256" height="256"></a></p>
<p>My personal favourite alternative icon comes with a new alternative theme that I’ll come to in a moment: Flatland.</p>
<p><a href="https://github.com/thinkpixellab/flatland"><img src="http://old.kevinyank.com/blog/wp-content/uploads/2013/04/sticon-flatland.png" alt="a paper plane folded from a dark grey sheet of paper with a large letter ‘S’ printed on it in a bold sky blue" title="sticon-flatland.png" border="0" width="256" height="256"></a></p>
<p>The remaining two elements that you’ll need to make Sublime look good are a <strong>user interface theme</strong> and a <strong>code colour scheme</strong>. Depending on what kind of coder you are, you may have a deep-rooted preference for your colour scheme already, in which case you’ll want to find a UI theme that matches that preference. Otherwise, you might want to start with a UI theme that appeals to you, and choose a color scheme that goes with it.</p>
<p><a href="https://github.com/buymeasoda/soda-theme">The Soda Theme</a> is the best known UI theme out there. It comes with dark and light variations, has Retina quality assets, and options for round or square tabs, and folder icons in the sidebar. While I used Soda Light, my preferred colour scheme was the <a href="https://github.com/kuroir/TextMate-Kuroir-Theme">Kuroir Theme for TextMate</a> by my pal Mario Ricalde (yes, Sublime Text uses TextMate theme files for its colour schemes).</p>
<p><a href="https://github.com/buymeasoda/soda-theme"><img src="http://old.kevinyank.com/blog/wp-content/uploads/2013/04/soda-light.png" alt="screenshot of the Soda Light theme" border="0" width="425" height="318"></a></p>
<p><a href="https://github.com/buymeasoda/soda-theme"><img src="http://old.kevinyank.com/blog/wp-content/uploads/2013/04/soda-dark.png" alt="screenshot of the Soda Dark theme" border="0" width="425" height="318"></a></p>
<p>If you like a dark theme and prefer something a bit more minimal, <a href="https://github.com/nilium/st2-nil-theme">the Nil theme</a> with its bundled Tubnil color scheme looks great to my eye. It uses relatively few pixels, but uses them well.</p>
<p><a href="https://github.com/nilium/st2-nil-theme"><img src="http://old.kevinyank.com/blog/wp-content/uploads/2013/04/nil-dark.png" alt="screenshot of the nil theme" border="0" width="425" height="382"></a></p>
<p>But the theme I’m rocking at the moment is <a href="https://github.com/thinkpixellab/flatland">Flatland</a>, a new and very polished theme from digital agency <a href="http://thinkpixellab.com">Pixel Lab</a>, who have embraced the “flat” aesthetic that is making inroads in mobile app design. I’m still toying with the colour scheme I’ll use with it, but I’m likely to stick with Tubnil (which is based on Tubster—author unknown but preserved by <a href="https://github.com/filmgirl/TextMate-Themes">Christina Warren on GitHub</a>) and tweak its background colour to go with Flatland.</p>
<p><a href="https://github.com/thinkpixellab/flatland"><img src="http://old.kevinyank.com/blog/wp-content/uploads/2013/04/flatland.png" alt="screenshot of the Flatland theme" border="0" width="425" height="320"></a></p>
<p><strong>Note:</strong> As of this writing, Flatland doesn’t install properly with Package Control (see below), so you may need to install it manually until they fix <a href="https://github.com/thinkpixellab/flatland/issues/44">this issue</a>.</p>
<p>Finally, you’ll want to use whatever monospaced font floats your boat. Personally, I’ve settled on (and paid for, happily) <a href="http://www.fsd.it/fonts/pragmatapro.htm">PragmataPro</a>, but I still switch to <a href="http://eurofurence.net/monofur.html">monofur</a> from time to time when I want a typeface that trades a little legibility for a lot of fun (hat tip to Dmitry Baranovskiy).</p>
<h2>Add Some Missing Features</h2>
<p>Sublime Text does a great job of including a very powerful yet restrained set of core features, while supporting a rich API and set of extension mechanisms for developers to build upon.</p>
<p>The first thing you’ll want to do once you get Sublime Text installed is to install <a href="http://wbond.net/sublime_packages/package_control">Package Control</a>, a package for installing packages from a vast <a href="http://wbond.net/sublime_packages/community">package repository</a> (which I help maintain).</p>
<p>Once you have Package Control installed, you can use it to install a set of packages to bestow Sublime with the specific features you need. Here’s my current list of essential, general purpose packages:</p>
<ul>
<li><strong><a href="https://github.com/roadhump/ReadmePlease">ReadmePlease</a></strong><br />
The first thing you’ll do after installing any new package is open its README file to learn how it works. This package gives you a command to do just that.</li>
<li><strong><a href="http://weslly.github.com/ColorPicker/">ColorPicker</a></strong><br />
If you do any frontend coding, a proper colour picker in your code editor is an essential you probably didn’t even realise you were missing until now.</li>
<li><strong><a href="http://emmet.io">Emmet</a></strong><br />
This is another big one for frontend coders. Once you’ve written HTML and CSS with Emmet, you’ll never want to write it another way again. Fair warning: the keyboard shortcuts in the Sublime Text version differ from those presented on the website, so make sure to read the README. <strong>Hidden feature:</strong> Add <code>"auto_id_class": true</code> to your User Settings file to add a class or ID to an HTML tag simply by typing ‘.’ or ‘#’, respectively.</li>
<li><strong><a href="https://github.com/kemayo/sublime-text-2-git">Git</a></strong> and <strong><a href="http://www.jisaacks.com/gitgutter">GitGutter</a></strong><br />
The Git package adds rich Git version control support to Sublime, enabling you to commit, branch, merge, rebase, push and pull with confidence, as well as peruse commit history and more right inside your editor. GitGutter adds to this little icons in the gutter that indicate which lines in an open file have been added/removed/modified from their committed version.</li>
<li><strong><a href="https://github.com/sentience/HyperlinkHelper">HyperlinkHelper</a></strong><br />
Okay, you caught me. I wrote this one. Still, if you write link-heavy markup (HTML, Markdown, LaTeX, etc.) such as blog posts, you’ll find this an indispensable time saver.</li>
<li><strong><a href="https://github.com/SublimeText/LineEndings">LineEndings</a></strong><br />
If you work in a mixed-platform development environment (e.g. Mac and PC), line endings will bite you now and then. This package makes the line ending types of open files easier to see and easier to change.</li>
<li><strong><a href="https://github.com/spadgos/sublime-ToggleQuotes">ToggleQuotes</a></strong><br />
Sublime’s core editing features can handle most common code edits efficiently, but changing the type of quotation marks on a string is an exception. This package makes it as easy as it should be.</li>
<li><strong><a href="https://github.com/afterdesign/MacTerminal">MacTerminal</a></strong><br />
If you’re a Mac user, this will let you open your project folder in Terminal/iTerm. Dead simple, but a huge time saver.</li>
<li><strong><a href="https://github.com/titoBouzout/SideBarEnhancements">SideBarEnhancements</a></strong><br />
The pop-up menu you get when you right-click a file or folder in the sidebar is simple and uncluttered, but if you’re a nerd like me you want a lot more in there. This package fills those menus out nicely.</li>
<li><strong><a href="https://github.com/SublimeText/SideBarGit">SideBarGit</a></strong><br />
I don’t actually use this much, preferring to invoke Git commands from the Command Palette, but fans of TortoiseGit will feel right at home with their Git commands in their sidebar pop-up menus.</li>
<li><strong><a href="http://www.sublimetext.com/docs/2/vintage.html">Vintage</a></strong><br />
This one’s bundled with Sublime Text, but is disabled by default. If you’re coming to Sublime from Vim and miss Command Mode, enable Vintage Mode and you’ll find a surprisingly complete emulation of Command Mode in Sublime. Personally I find it clashes a little with Sublime’s core functionality when it comes to text selection (if you select text while in Insert mode, you’ll need to hit ESC twice to deselect, and end up in Command Mode), but if you’re used to working in this modal fashion you’ll love having it in Sublime.</li>
</ul>
<h2>Recommended Settings</h2>
<p>Sublime’s defaults are pretty good, but there are a few settings changes that are worth making if you understand what they do. Put each of these in your User Settings (<strong>Preferences > Settings - User</strong>) file to override the factory defaults:</p>
<pre><code>"ensure_newline_at_eof_on_save": true,
</code></pre>
<p>In Linux-land, all text files should end with a newline character. With this turned on, you’ll never see that annoying warning from Git that a file doesn’t end with a newline.</p>
<pre><code>"highlight_line": true,
</code></pre>
<p>Once you get used to your editor highlighting the line that contains your cursor, you’ll feel lost without it.</p>
<pre><code>"highlight_modified_tabs": true,
</code></pre>
<p>Provides a nice visual cue to help you spot modified files you’ve left open and unsaved.</p>
<pre><code>"scroll_past_end": true,
</code></pre>
<p>This might be just me and the way I read, but I like to have the freedom to scroll down sometimes, even when there isn’t any more of the file to show.</p>
<pre><code>"show_tab_close_buttons": false,
</code></pre>
<p>I’m enough of a keyboard-heavy user that I almost never need to close an open file using my mouse. Getting rid of the buttons to do so reduces visual clutter and leaves more room for filenames in my tabs.</p>
<p>If you want to browse more “look and feel” preferences like these, open the Default Settings file (<strong>Preferences > Settings - Default</strong>), but remember not to edit that “factory defaults” file directly. Instead, copy the settings you want to modify into your User Settings file and set them there.</p>
<h2>Learn the Editor</h2>
<p>It’s fair to say I didn’t come to appreciate Sublime Text fully until I put together <a href="http://www.lynda.com/Sublime-Text-tutorials/Up-Running-Sublime-Text-2/114325-2.html">Up and Running with Sublime Text 2</a> for lynda.com. There is <a href="http://www.sublimetext.com/docs/2/">decent documentation</a> available for all of the editor’s features, but it can be hard to find the impetus to go read it all.</p>
<p>Like most other code editors, Sublime Text rewards whatever time you put into learning it properly; so whether you use my course to do it or not, I recommend you take the time to learn what this thing can do.</p>
<p>In particular, the find/replace and text selection features, as well as automation features like snippets and macros hide a lot of power that isn’t easily discovered.</p>
<p>Even the free sample videos from my course will show you some easily overlooked features that I consider essential to using Sublime Text effectively:</p>
<h3>Split Window Layouts</h3>
<p><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" height="365" width="560" id="ply" ><param name="movie" value="http://www.lynda.com/home/embed/player.swf" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param value="basepath=http://www.lynda.com/home/&amp;skin=http://www.lynda.com/home/embed/skin.swf&amp;plugins=http://www.lynda.com/home/embed/controlling.swf&amp;type=video&amp;lpk4=122107" name="flashvars" /><embed src="http://www.lynda.com/home/embed/player.swf" width="560" height="365" allowfullscreen="true" allowscriptaccess="always" flashvars="basepath=http://www.lynda.com/home/&amp;skin=http://www.lynda.com/home/embed/skin.swf&amp;plugins=http://www.lynda.com/home/embed/controlling.swf&amp;type=video&amp;lpk4=122107"></embed></object></p>
<h3>Goto Anything</h3>
<p><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" height="365" width="560" id="ply" ><param name="movie" value="http://www.lynda.com/home/embed/player.swf" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param value="basepath=http://www.lynda.com/home/&amp;skin=http://www.lynda.com/home/embed/skin.swf&amp;plugins=http://www.lynda.com/home/embed/controlling.swf&amp;type=video&amp;lpk4=122119" name="flashvars" /><embed src="http://www.lynda.com/home/embed/player.swf" width="560" height="365" allowfullscreen="true" allowscriptaccess="always" flashvars="basepath=http://www.lynda.com/home/&amp;skin=http://www.lynda.com/home/embed/skin.swf&amp;plugins=http://www.lynda.com/home/embed/controlling.swf&amp;type=video&amp;lpk4=122119"></embed></object></p>
<h3>Multiple Selections</h3>
<p><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" height="365" width="560" id="ply" ><param name="movie" value="http://www.lynda.com/home/embed/player.swf" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param value="basepath=http://www.lynda.com/home/&amp;skin=http://www.lynda.com/home/embed/skin.swf&amp;plugins=http://www.lynda.com/home/embed/controlling.swf&amp;type=video&amp;lpk4=122121" name="flashvars" /><embed src="http://www.lynda.com/home/embed/player.swf" width="560" height="365" allowfullscreen="true" allowscriptaccess="always" flashvars="basepath=http://www.lynda.com/home/&amp;skin=http://www.lynda.com/home/embed/skin.swf&amp;plugins=http://www.lynda.com/home/embed/controlling.swf&amp;type=video&amp;lpk4=122121"></embed></object></p>
<p>(Sorry for the Flash movies. <a href="http://www.lynda.com/Sublime-Text-tutorials/Up-Running-Sublime-Text-2/114325-2.html">HTML5 versions are viewable on lynda.com.</a>)</p>
<p>I hope you’ll check out the full course, and regardless, enjoy getting familiar with Sublime Text.</p>
