---
title: Horizontal Scrolling
author: Kevin Yank
date: 2023-01-11T23:55+1100
tags:
  - web development
  - CSS
  - accessibility
excerpt:
  My new site design makes heavy use of horizontal scrolling on the home page, with scrollbars hidden. Horizontal scrolling <em>can</em> be accessible, but it takes some work to make it so. This article covers accessibility for keyboard and screen reader users, and users whose pointing devices simply don't support horizontal scrolling! It also breaks down several usability features I added to create a better experience than the native scrollbars they replace.
featured: true
featureImg: /assets/images/blog/horizontal-scrolling/2023-site-home-page.png
featureImgAlt: Screenshot of horizontally-scrolling content sections
featuredImgBorder: true
---

<ins datetime="2023-01-12T18:20+1100">Update Jan 12, 2023:</ins> Added section [Scroll on focus](#scroll-on-focus).

My new (and not-quite-complete) website design, gratefully inspired by [Alexander Obenauer's lovely UI research site](https://alexanderobenauer.com/), makes heavy use of horizontal scrolling on the home page, with scrollbars hidden. As [documented elsewhere](https://www.nngroup.com/articles/horizontal-scrolling/) (and [a softer take](https://www.experienceux.co.uk/ux-blog/a-ux-perspective-on-horizontal-scrolling/)), this is not a risk-free design decision. (TL;DR: many pointing devices don't have horizontal scrolling controls, and only Firefox automatically provides a tab stop for scrolling with the keyboard.) But…

{%liquid
  assign note = collections.note | findBySlug: 'o29y2'
  render embedded-note, note: note
%}

{% render figure,
  src: "/assets/images/blog/horizontal-scrolling/2023-site-home-page.png",
  alt: "screenshot of kevinyank.com's home page showing two content categories, each scrolled to a different horizontal position",
  caption: "Horizontally-scrolling content sections",
  border: true %}

## Create a horizontally scrolling region

To make a region horizontally scrollable, wrap the content of the region in a block with `overflow-x: scroll`. Pair this with `overflow-y: hidden` to prevent a vertical scrollbar from showing up under some conditions (in my case, large text sometimes triggered this because the line box would overflow the top/bottom of the container):

```css
.scrollable-region {
  overflow-x: scroll;
  overflow-y: hidden;
}
```

Then, give that block some content that will exceed the width of the viewport. In my case, this was a set of flex items with a specified `inline-size` (née `width`) and `flex: none` to prevent them shrinking:

```css
.scrollable-region {
  display: flex;
}

.content-item {
  flex: none;
  inline-size: 24rem;
}
```

## Hide the scrollbar

**Warning:** Much like focus outlines, scrollbars should not be hidden without some alternative plan for how _all_ your users will be able to scroll the region. More on this below.

More and more operating systems are already hiding scrollbars when they are not in use. This is far from universal, however. If, like me, you're designing a site around horizontally scrollable regions, you probably don't want them marred by the eyesore of browser-native horizontal scrollbars. (It should be noted, however, that if you don't mind how they look, leaving scrollbars visible is certainly your most accessibility-first option.)

The standard way to hide scrollbars is with `scrollbar-width: none`, but as of this writing it is [only supported in Firefox](https://caniuse.com/?search=scrollbar-width). It takes a bit more code to cover Chrome, Edge and Safari:

```css
.scrollable-region {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.scrollable-region::-webkit-scrollbar {
  display: none;
}
```

## Accessibility issues

While horizontal scrolling is not intrinsically inaccessible, hiding the scrollbars with no alternative UI certainly is.

On an early version implemented pretty much as described above, I got some excellent feedback [from Matt Willcox](https://mstdn.social/@mattwilcox/109636912726398941):

> I'll tell you now - I can't use it because I'm on a mac but using a trackball.
>
> Guess what has no horizontal scrolling UI available? A mac with a trackball.

and [from Ana Tudor](https://mastodon.social/@anatudor/109637475873803825):

> I have the same problem and I'm on Ubuntu. My trackpad has no horizontal scrolling option.
>
> Without the arrow keys (which I wouldn't have thought about using before seeing this thread as I'm not much of a keyboard user) I couldn't have scrolled at all.
>
> There are lots of situations where scroll is just not possible or not obvious without scrollbars.

While I don't mind the design of my personal website being a bit experimental and unfamiliar, actually making it _inaccessible_ crosses a line for a site where I want to teach techniques to _improve_ web accessibility.

Adrian Roselli's article, [Keyboard-Only Scrolling Areas](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) is an excellent guide for what is needed to make a custom-styled horizontal scrolling area accessible to keyboard users. In short, you need to make the region keyboard-focusable (`tabindex="0"`), which only Firefox does by default, and give it a descriptive ARIA role and label for screen reader users to understand why the tab stop exists:

```html
<section class="scrollable-region"
    tabindex="0"
    role="region"
    aria-label="scrollable region"
>
```

If, like me, your scrollable regions span the full viewport width, you may also want to customize the `:focus-visible` styles, since the default focus outline will overflow the viewport on the left and right edges. In my case, I went for a background colour on the region:

```css
.scrollable-region:focus-visible {
  outline: none;
  background-color: #fecaca;
}
```

But per the feedback I'd received, keyboard scrolling – while necessary – would not be sufficient for all my users to be able to scroll the region easily. The other thing that is needed is an actually-clickable alternative to the scrollbar I had hidden.

I implemented this with a pair of arrow buttons just below the scrolling region. These buttons trigger JavaScript that checks the current scroll position to see what content is currently in view, and moves it along to the next/previous block of content. The details of this would be an article in themselves, but you can [read the source code](https://github.com/sentience/kevinyank.com/blob/655abefd86e0b57ff7af1ce6b6ddcca60c7d579a/assets/scripts/scroll-region.js) if you're interested.

## Scroll snapping

As I clicked my new scroll buttons and saw the browser smoothly animate the scroll position to the next chunk of content, I realised how satisfying it was to have the horizontal scroll position exactly line up the edge of a content block with the margin of my page design. I was reminded that [CSS Scroll Snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap/Basic_concepts) is a thing!

With `scroll-snap-type`, and `scroll-padding-inline-start`, you can tell the scrolling region to snap the scroll position to specific elements within your content:

```css
.scrollable-region {
  scroll-snap-type: x mandatory;
  scroll-padding-inline-start: 3rem;
}
```

Then, tag each content block that you want to be a "scroll stop" with `scroll-snap-align: start`:

```css
.scrollable-region .note {
  scroll-snap-align: start;
}
```

This one change took the horizontal scrolling from something that looked nice but honestly was feeling like a somewhat annoying gimmick, to something I actually enjoyed using, at least as a trackpad user who can scroll horizontally with swipe gestures!

One minor browser issue that I found confusing was that if you scroll vertically in Chrome before the horizontal scroll finishes its smooth "snap" into place, the vertical scroll will interrupt the horizontal scroll and leave the scrollable region in an "illegal" position. Neither Safari nor Firefox has this issue.

## Scroll on focus

<ins datetime="2023-01-13T23:35+1100">Update Jan 13, 2023:</ins> Updated the following solution for compatibility with Safari.

With the scroll position neatly snapping to the content blocks in each scroll region, a minor usability issue became apparent: as a keyboard user, if you tabbed to a link in a content block that was only partially visible on the screen, the region would not auto-scroll to ensure the newly-focused link was visible in its entirety. Browsers will only scroll on focus if the item to be focused is completely off screen.

Once again, JavaScript can solve this, but overriding the automatic scroll-on-focus of all browsers turned out to be quite tricky, as the exact sequence of DOM events (`focus` and `focusin`) and the automatic scrolling seems to be different in Safari.

The solution is to capture the current scroll position after each `keydown` event (we're especially concerned with the Tab key being pressed, but there's no harm to recording it on every key), which is reliably before any auto-scrolling in all browsers, and then to wait until an animation frame after the `focus` (and `focusin`) event, which is reliably after any auto-scrolling in all browsers, to reset the scroll position to the value we last stored. We can then trigger a smooth scroll of our own from the correct starting position.

```javascript
const items = scrollRegion.querySelectorAll(".scroll-region__item");

// Capture current scroll position before the browser has a chance to
// auto-scroll on focus. Chrome auto-scrolls even before dispatching
// the focus event, so we must do this on the keydown that triggers
// the focus change to get ahead of it.
scrollRegion.addEventListener("keydown", () =>
  saveScrollPosition(scrollRegion)
);

Array.from(items).forEach((itemNode) => {
  itemNode.addEventListener(
    "focus",
    // Safari auto-scrolls after the focus (and focusin) event, so we
    // must wait for the next animation frame to avoid our scrolling
    // being clobbered by Safari's auto-scroll.
    () => requestAnimationFrame(() => this.scrollToFocus(itemNode)),
    true // focus events don't bubble
  );
});

function saveScrollPosition(scrollRegion) {
  scrollRegion._savedScrollPosition = scrollRegion.scrollLeft;
}

scrollToFocus(itemNode) {
  // Restore saved scroll position to pre-focus position before doing
  // our own smooth-scrolling.
  this.scrollNode.scrollLeft = this.scrollNode._savedScrollPosition;

  const scrollPadding = parseInt(
    getComputedStyle(this.scrollNode).paddingInlineStart
  );
  this.scrollNode.scrollTo({
    left: itemNode.offsetLeft - scrollPadding,
    top: 0,
    behavior: "smooth",
  });
}
```

A couple of notes on this:

`focus` events are a little special. For most DOM events, you can `addEventListener` on a parent or ancestor to respond to all events targeting elements they contain. But `focus` and `blur` events [don't "bubble" up](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event) from the target element to trigger event listeners on containing elements the way most events (like `click`) do. To respond to `focus` events on all descendants of a content block, therefore, you need to call `addEventListener` with the third parameter (`useCapture`) set to `true`. This tells the browser to trigger the listener in the "capture" phase of event propagation (as the event makes its way from the root of the document down to the target element), instead of in the "bubble" phase (where the event propagates back up from the target element to the document root). It's also worth noting that `focus` events don't have `target` or `currentTarget` properties, so you need to find some other way to get references to DOM nodes inside your listener function.

I could have worked around all of this by using the much more "normal" `focusin` event, but I got it working with `focus` first, so I decided to leave it that way.

I also had to give up on `Element.scrollIntoView` for our custom scroll, because I couldn't get it to work reliably in Safari 16.2. It seems that this latest version of Safari made some changes to scrolling to support the CSS `scroll-behavior` property, and I suspect it has resulted in some subtle bugs with smooth scrolling. Luckily, `Element.scrollTo` does seem to work fine.

The subtle inconsistencies and bugs around auto-scrolling on focus, and how to override it with a custom scroll, took me back to the "good old days" of DOM APIs being completely incompatible between browsers. On a personal project, this was a fun challenge to solve. If I'd run into this at work, it probably would have ruined my day! Thanks to [Stéphane Deschamps](https://nota-bene.org/) for making me aware of this issue so that I could solve it.

## Sticky positioning effects

As I played with the scrollable regions, I was inspired to add a couple of nice visual effects with `position: sticky`, which tells the browser to keep an element pinned to the edge of a scrollable region (with an offset you specify) if it would normally scroll off the screen, as long as part of its parent block is still within the visible area of the region.

First, I made the little "tails" on the speech bubbles I had designed for notes stick to my avatar image, only shifting out of the way to make way for the next note:

<video controls src="/assets/videos/blog/horizontal-scrolling/speech-bubbles.mp4">
  Screen recording demo of notes presented as speech bubbles scrolling horizontally. The tails of the bubbles are pinned to a photo of the author, and scroll only when needed to make room for the next note.
</video>

Secondly, I wanted some trace of the colourful header block at the start of each scrollable region, so I made a strip of this colour stick to the edge of the viewport as the header area is scrolled out of view:

<video controls src="/assets/videos/blog/horizontal-scrolling/header-strips.mp4">
  Screen recording demo of a scrollable region scrolling a bright red block off the left edge of the screen, leaving a thin strip of red on the edge of the screen as a design accent.
</video>

## Persist scroll positions

The final tweak honestly shocked me. As I worked on all of this, each time the page refreshed in Chrome, the scrollable regions reset to their start positions.

It didn't occur to me that this was strange until I began working on other screens of my site. But sure enough, once I had scrolled to reveal a piece of content and clicked to navigate to it, if I hit the Back button in Chrome to return to the home page, all the scrollable regions would be reset to their start positions. Safari and Firefox both retain the scroll positions as you would expect, but Chrome does not.

Once again, a little JavaScript to the rescue! [A StackOverflow answer from user Jondi](https://stackoverflow.com/a/46461016/76951) provided the correct incantation to stow each scroll position in [`sessionStorage`](http://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) on the `beforeunload` event, and then pull them out again on page load.

One of these scripts per scroll region (with a unique {% raw %}`{{id}}`{% endraw %} for each region) was the solution:

```html
<section id="scrollable-{% raw %}{{id}}{% endraw %}" class="scrollable-region">
  ⋮
</section>
<script>
  // Restore scroll position on page reload
  (function () {
    const scrollable = document.getElementById('scrollable-{% raw %}{{id}}{% endraw %}');
    const key = `scrollPosition.${document.location.pathname}.{% raw %}{{id}}{% endraw %}`;
    const scrollPosition = sessionStorage.getItem(key);
    if (scrollPosition) {
      scrollable.scrollLeft = scrollPosition;
      sessionStorage.removeItem(key);
    }
    addEventListener('beforeunload', () => {
      const scrollPosition = scrollable.scrollLeft;
      sessionStorage.setItem(key, scrollPosition);
    });
  })();
</script>
```

## Worth it?

If at some point in reading this article you threw your hands up in the air and decided to simply let the native scrollbars stay, I wouldn't blame you. Most modern browsers and operating systems can render a fairly attractive, invisible-until-used scrollbar out of the box.

Ultimately, I'm sticking with my custom solution because playing with alternative, custom visual cues and UI elements for horizontal scrolling was sort of the whole point of this design. And again, a personal website with no real stakes to its usability is the perfect place to experiment this sort of "risky" design.

I almost certainly wouldn't do this at work, where our product needs to minimise friction for first-time users getting a job done. That said, the micro-interactions of horizontal scrolling, deployed in the right context, could well be a means to delight users. I think this design is successful enough to demonstrate this.
