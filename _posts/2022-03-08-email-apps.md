---
title: Email apps on Mac, iPhone, iPad and Apple Watch compared
author: Kevin Yank
date: 2022-03-08T20:05+1100
excerpt: TODO
categories:
  - tech
---

About once a year, the many tiny frictions and frustrations of the email apps I have settled on pile up, and prompt me to go looking for something better for my particular needs and preferences.

This year, I have the further motivation of moving my personal email over from G Suite (the free version of which is [shutting down][G Suite Legacy Free shutdown]) to [Fastmail]. I haven't minded using Google's email service all these years for free, but if I was going to pay for it my expectations were higher – but that's a different blog post.

## What I want in an email client

While not quite the [UI design playground] that 3rd party Twitter apps were at their peek ([TweetBot] is still a steal at twice the price, by the way), email is still a stable and open enough platform that there continues to be a steady stream of attempts to reinvent it.

Different people also have very different needs for their email: for some it is still the lifeblood of their professional lives; for others, it's a relic of a bygone age used only to retrieve lost passwords to their social media and Slack accounts.

The best email client for me might be a _terrible_ fit for your needs, or just your personal tastes. There's also so many options out there, with so many subtle differences between them, that I can't decide without a scoring system of some kind to help me make a rational decision.

Here's what I want, from most to least important to me:

1. **Email, not Gmail**

   Increasingly, new email apps are appearing that only work with Gmail. Either they want to build on top of some of Gmail's own value-add features (such as [Priority Inbox]), or they find it easier to talk to the [Gmail API] rather than using the compartively ancient email standards, IMAP and SMTP.

   This one hurts, because it disqualifies the one app that otherwise satisfies just about all of my criteria for a macOS email app: [Mimestream]. Seriously, if you happen to be a Gmail user yourself, and are happy staying with them, I urge you to give Mimestream a try. For the months that I used it up until dropping Gmail for my personal email, I was in love with its perfect balance of novel, refined design and leveraging native operating system controls. If it [supported IMAP email][Mimestream IMAP], I wouldn't be writing this article.

   Alas, the search continues.

2. **Rapid triage**

   My email inbox is a noisy place, even after I've filtered out all my newsletter subscriptions and sent them to [Feedbin]. The less time I spend there, the better.

   Both on iOS and macOS, the thing I do most is archive messages in my inbox, rapid-fire, often without reading them beyond the sender and subject, occasionally with a quick peek at the contents first.

   If there's an email that I need to reply to or do something about, I'll still do what I need to do to get it out of my inbox. I'll either compose a quick reply, or (more often) send a copy of the email to my task manager (currently [OmniFocus]), where I can manage it along with my other things to do later.

   My ideal mail client will make each of those actions (and _especially_ Archive) a one-key/tap/swipe operation – something I can do effortlessly from muscle-memory. Ideally, it's _delightful_ – but without slowing me down.

3. **Keyboard navigation**

   While I'll glance at email on the go, I do most of my email (especially that daily-ish triage to zero) on my Mac. As a coder, the keyboard is my most efficient means of performing actions on my Mac. Reaching for the mouse or trackpad is something I do by exception, if I need to spell out an unusual action for the computer. For everything I do frequently, I want to be able to do it without my hands leaving the keyboard.

   Email clients, even in graphical operating systems, have a long tradition of semi-standard keyboard interactions that have remained more or less consistent over the decades. The very first email app I ever used on a university terminal let me read messages a page at a time, moving to the next page of the current message (if there was one) or the next message (if there wasn't) by hitting the spacebar. Hitting spacebar to look at the next page of the currently-selected email/thread while keeping my keyboard focus on the message list (where I can continue to triage uninterrupted) is one of the things I try first in any new email client.

   Lately it feels like I'm the last person in the world who remembers and values this interaction. I've been shocked by the number of slick, new desktop email apps that don't support it (or in some cases, any meaningful keyboard navigation at all).

4. **Unified inbox**

   I monitor four different email accounts on a daily basis. One is my personal email, that tends to be full of nice things that I enjoy looking at. Another is for the [theatre company] I perform with, which is likewise generally full of stuff that I look forward to reading. The other two are work inboxes. I love my job, but work emails are work.

   Mixing the work with the fun, having these different streams of communication blended into a single inbox that I can triage all at once, is one of the ways I “trick” myself into getting to that empty inbox most of the time.

5. **Deep integrations**

   The main integration I look for is the ability to turn an email message or thread into an action in [OmniFocus], my to-do list app. Many 3rd party email apps offer this, but some integrations are better than others.

   Beyond just being able to send the body of a message into OmniFocus as a note attached to a task, the best integrations include a link back to the message from the task. Clicking that link in the OmniFocus task should open the original email in my email app again, even if I've since filed the message away into my Archive folder.

   I made [a video about this][message links video] way back in 2013, and I still want this feature today. Not all email apps support it, or support it well.

   In particular, many apps that integrate with OmniFocus (and other task managers and note-taking apps) _will_ include a back-link, but they'll use a [custom URL scheme], where the link will only open the specific email app that was used to create it. If that app is not available on your device (say if you're using a Mac-only email app and you're following the link on your iPhone), it won't work. If you change email apps, all your old links will be useless!

   The best implementation of this uses the "standard" **message://** URL scheme supported by Apple Mail, which will open your selected default email app, and will work both on macOS and on iOS.

6. **Beautiful native UI**

   Beauty is subjective, but I use macOS and iOS because I enjoy their look and feel – and those of the best apps for these platforms. Of course, apps frequently diverge from Apple's [guidelines][HIG] to push the boundaries of modern UI design. That's all great, as long as that boundary-pushing UI remains connected to the core frameworks and foundations that power the basic features of the operating system.

   What happens when you select a word in an email and right-click it on macOS? If it's a native text field, you can choose options to look up the word in a dictionary, or translate it to another language, or even invoke a system service to send the text to another app. If the app _isn't_ native to the operating system, if it's using its own custom implementation of UI elements like text fields, then you lose all those facilities except the ones the developer has decided are worth re-creating.

   I'm a power user of my operating systems, and I want apps that build on those foundational features, not sacrifice them on the altar of novel design or, more often, cross-platform compatibility.

7. **Respect for, if not enhancement of, my privacy and security**

   In their haste to build differentiating features on top of the basics of email – message snoozing, inbox screening, delayed sending, push notifications, message classification, follow-up reminders and more – many modern email apps are much more than the app you install on your computer or phone: they include a server-side component that the maker of the app uses to download all of your email into their database to analyse it and power these "smart" features.

   Google's Gmail got a bad reputation for scanning the emails of free users in order to show them more targeted advertisements all over the Web. It [stopped doing this in 2017][Gmail stopped scanning], but the sour taste remains to this day for those of us who prefer to avoid handing a psychological profile to advertisers.

   While I acknowledge the difficulty in making money this way is much higher, I value developers who go the extra mile to minimise the amount of my personal data they need to hold, while still providing me innovative features for my email. It's something I'm eager to pay for.

   For bonus points, I love it when an app supports a secure email standard (ideally PGP, but S/MIME will do in a pinch), both for signed and encrypted messages. Email _can_ be secure and private; we just need this to be implemented in an easy-to-use way for mainstream users. I can't wait for someone to do for email what [Let's Encrypt] has done for website security over the past decade: normalise the idea that Internet communications should be private and secure.

## The contenders

### Mail

### Mimestream

### Spark

### Newton

### MailMate

### Postbox

### Edison Mail

### Spike

### Canary Mail

### Airmail

### Chuck

### Not tried

Mail Pilot

Polymail

Superhuman

Missive

Mailspring

HEY

## The Scoreboard

<div class="table-scroll">
  <table class="scores">
    <thead>
      <tr>
        <th>Criteria (points)</th>
        <th width="8%">Mail</th>
        <th width="8%">Mimestream</th>
        <th width="8%">Spark</th>
        <th width="8%">Newton</th>
        <th width="8%">MailMate</th>
        <th width="8%">Postbox</th>
        <th width="8%">Edison Mail</th>
        <th width="8%">Spike</th>
        <th width="8%">Canary Mail</th>
        <th width="8%">Airmail</th>
        <th width="8%">Chuck</th>
      </tr>
      <tr>
        <th>Platforms</th>
        <td>Mac & iOS</td><!-- Mail -->
        <td>Mac</td><!-- Mimestream -->
        <td>Mac & iOS</td><!-- Spark -->
        <td>Mac & iOS</td><!-- Newton -->
        <td>Mac</td><!-- MailMate -->
        <td>Mac</td><!-- Postbox -->
        <td>Mac & iOS</td><!-- Edison Mail -->
        <td>Mac & iOS</td><!-- Spike -->
        <td>Mac & iOS</td><!-- Canary Mail -->
        <td>Mac & iOS</td><!-- Airmail -->
        <td>iOS</td><!-- Chuck -->
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Email, not Gmail (7)</th>
        <td>✅</td><!-- Mail -->
        <td>⛔️</td><!-- Mimestream -->
        <td>✅</td><!-- Spark -->
        <td>✅</td><!-- Newton -->
        <td>✅</td><!-- MailMate -->
        <td>✅</td><!-- Postbox -->
        <td>✅</td><!-- Edison Mail -->
        <td>✅</td><!-- Spike -->
        <td>✅</td><!-- Canary Mail -->
        <td>✅</td><!-- Airmail -->
        <td>✅</td><!-- Chuck -->
      </tr>
      <tr>
        <th>Rapid triage (6)</th>
        <td></td>
      </tr>
      <tr>
        <th>Keyboard navigation (5)</th>
        <td></td>
      </tr>
      <tr>
        <th>Unified inbox (4)</th>
        <td></td>
      </tr>
      <tr>
        <th>Deep integrations (3)</th>
        <td></td>
      </tr>
      <tr>
        <th>Beautiful native UI (2)</th>
        <td></td>
      </tr>
      <tr>
        <th>Privacy & security (1)</th>
        <td></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>Score:</th>
        <td></td>
      </tr>
    </tfoot>
  </table>
</div>

[G Suite Legacy Free shutdown]: https://arstechnica.com/gadgets/2022/01/google-tells-free-g-suite-users-pay-up-or-lose-your-account/
[Fastmail]: https://ref.fm/u27828720
[UI design playground]: https://daringfireball.net/2009/04/twitter_clients_playground
[TweetBot]: https://tapbots.com/tweetbot/
[Feedbin]: http://feedbin.com
[OmniFocus]: https://www.omnigroup.com/omnifocus/
[message links video]: https://www.youtube.com/watch?v=oFUPXVtuBMo
[custom URL scheme]: https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app
[HIG]: https://developer.apple.com/design/human-interface-guidelines/
[Gmail stopped scanning]: https://www.theguardian.com/technology/2017/jun/26/google-will-stop-scanning-content-of-personal-emails
[Let's Encrypt]: https://letsencrypt.org
[Priority Inbox]: https://www.theverge.com/21310155/gmail-inbox-layout-email-customize-tabs-priority-messages-google
[Gmail API]: https://developers.google.com/gmail/api
[Mimestream]: https://mimestream.com
[Mimestream IMAP]: https://portal.productboard.com/mimestream/1-mimestream-roadmap/c/23-support-the-imap-protocol-e-g-icloud-yahoo-etc
[theatre company]: https://www.impromelbourne.com.au
