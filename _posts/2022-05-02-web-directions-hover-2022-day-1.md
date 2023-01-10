---
title: Web Directions Hover 2022 Day 1 notes
author: Kevin Yank
date: 2022-05-02T10:40+1000
excerpt: These are the live notes I took from Day 1 of the Web Directions Hover 2022 conference for our team internally at Culture Amp.
categories:
  - Culture Amp
  - web development
---

These are the live notes I took from Day 1 of the [Web Directions Hover 2022](https://webdirections.org/hover/) conference for our team internally at Culture Amp. Day 2 is this Friday, and I'll aim to do the same!

## Jen Simmons: “What’s new in ’22 for CSS”

[Caniuse.com](https://caniuse.com) doesn’t just show what’s available now, but “below the line” it shows what’s coming in the next release of each browser.

The [Interop 2022 Dashboard](https://wpt.fyi/interop-2022) is tracking the big push by the major browsers this year to release the most-requested features to improve CSS interoperability.

2022 is seeing an unprecedented number of changes land in CSS that will make a material difference to how it works for developers day-to-day.

The rise of Utility class frameworks [like [Tailwind](https://tailwindcss.com)] are a symptom of CSS not meeting developers’ needs. They are actively avoiding writing CSS. 2022 is seeing a concerted effort to change that.

### Container queries

```css
main, aside {
  container-type: inline-size;
}

@container (width > 56rem) {
  /* responsive styles here */
}
```

(But actually `inline-size` is preferable to `width` now.)

You are required to declare what your container is, so that the browser can avoid infinite loops in calculating layout. This is why container queries took so long to happen.

Best place to learn this is [the actual spec](https://www.w3.org/TR/css-contain-3/). The web is littered with obsolete blog posts about earlier ideas for the spec. The spec is actually quite short and readable (and critically, it’s up-to-date).

New container units: `cqw`/`cqi` lets you specify a percentage of the container’s `width`/`inline-size`.

Container queries are currently behind a flag in Chrome Canary. That’s where the proof-of-concept work on this has been happening for years. It’s also enabled by default in Safari Technical Preview!

### Cascade layers

Addressing friction caused by selector specificity. Specificity is often not well understood, so Jen gave a brief refresher on how it works.

Something that is more powerful than specificity: origin. For example, custom styles always override browser styles, and  inline styles always override custom styles, regardless of selector specificity. Cascade layers let you create extra layers: so you could make it so that app-specific styles always override CSS framework [Tailwind?] or design system styles, freeing you from having to worry about selector specificity (or reaching for `!important`) to make sure one set of styles override another.

Shipped in Firefox, Chrome, Safari and Edge, but we may need to wait a little for older browsers (especially mobile browsers) to phase out, since this is difficult to progressively-enhance.

### Parent Selector / `:has`

Style a `figure` differently depending on if it has a `figcaption` as a child:

```css
figure {
  /* … */
}
figure:has(figcaption) {
  /* … */
}
```

Also can match direct child (`table:has(> thead)`), sibling (`dt:has(+ dt)`), and supports negation (`section:not(:has(h1, h2, h3))`).

Why wasn’t this available before? Computers have gotten faster. We can afford to performance cost of this in today’s browsers/devices.

Available in Safari 15.4 now. Coming to other browsers in 2022.

### CSS selector nesting

The hardest part of this is not breaking Sass! 😆

Work underway, but no browser support now. Unlikely to land in 2022.

### Selector scoping

Most of the docs out there for `:scope` on MDN, etc. are now obsolete. That version of scoping is not happening. Early work for `@scope` in [CSS Cascading Level 6 spec](https://www.w3.org/TR/css-cascade-6/#scoped-styles).

Not landing in 2022.

### Subgrid for CSS Grid

Lets a child grid align its cells to the rows/columns of a parent element’s grid. (e.g. a `ul` can wrap multiple `li` cells in a parent `div`’s grid).

Supported for a long time in Firefox. It’s also in Safari Technical Preview. Work underway for Chromium. Hopefully this year!

### Dialog and `::backdrop`

Browsers were slow to implement it because accessibility hasn’t been solved. That seems to have been fixed, so it’s coming to browsers now! Available in all major browsers, with Safari 15.4 the last to implement it [so we can’t quite use it yet].

Related: HTML `inert` attribute lets you make your own “backdrop”-like things: using HTML elements for visual purposes but hiding them from assistive technologies, keyboard shortcuts, etc. Available in Safari TP now, but going to be really useful as it lands in other browsers.

### Also
- Smarter focus rings with `:focus-visible`
- Themeing of browser widgets (form controls) with `accent-color`
- `appearance` property to access or completely disable browser-native form element rendering
- and so much more

## Bramus Van Damme: “Cascade Layers”

The cascade decides which of multiple matching CSS rules get to “win” when competing to set a property’s value.

Specificity (or order of appearance when there’s a tie) determines the winner for competing rules with the same: Origin & Importance. But specificity doesn’t always match our intent, so we reach for all sorts of hacks to “bump up” specificity on rules that we want to “win”.

Layers let us group styles into layers that are meaningful to us, to avoid unwanted specificity/order interactions! For example, we could very easily declare that component styles always override global styles!

[Cool specificity calculator](https://polypane.app/css-specificity-calculator/) shared in the conference chat.

Recommendation: start by putting your reset and third party styles in layers, so your own styles always override them:

```css
@layer reset, thirdparty;
```

[Article with all the details from Bramus](https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/)

## Kilian Valkhof, “:where :is :has?”

Previously supported as `:matches`, `:any`, the opposite to `:not` is now called `:is`. It also now supports “complex” (multi-element) selectors, where previously it was limited to “simple” (single-element) selectors.

The ability to specify multiple alternative selectors really cuts down on selector duplication:

```css
:is(nav > ul, footer > ol, aside > p) > li {
  /* … */
}
```

Gotcha: `:is` can only match DOM elements, not pseudo-elements like `::before` or `::after`.

Kilian made the [specificity calculator](https://polypane.app/css-specificity-calculator/) I linked above!

`:where` is just `:is` but with specificity 0.

`:is` adds specificity equal to the most specific selector in its list.

`:has` is the newest, and least supported. But it’s the one that developers have been asking for forever. It’s the so-called “parent” selector. Style an element based on what elements are inside of it.

(See above for more details on `:has`.)

`:has` is called the “relational pseudoclass”, because it lets you target elements based on much more than their descendants.

## Josh Goldberg, "Focus Visible, At Last!"

An element can receive focus when a user **clicks or tabs** to an element. You can see which element has focus with a focus ring.

Some sites don’t like the look of a focus ring, so they remove it with `:focus { outline none; }`, which is really bad for users who need these indicators (especially keyboard users!). **This is a red flag. Please don’t do this.**

Unlike `:focus`, `:focus-visible` matches elements that receive focus from the keyboard, not the mouse. So you can use it to show focus rings only when they are needed:

```css
:focus:not(:focus-visible) { outline: none; }
```

`:focus-visible` landed in Safari 15.4, and is otherwise supported by all our target browsers. So we’re close to being able to drop our JS polyfill for this.

Design tip: don’t forget your focus indicators when considering colour contrast requirements for accessibility. Your indicators need to satisfy the same minimum contrast ratio!

Accessibility tip: accessibility overlays like [accessiBe](https://accessibe.com/) generally don’t work, and may even get you sued. There’s no shortcut to good accessibility. Get yourself dedicated accessibility testers and put real effort into this stuff.

A good design system to check out that does all this stuff well: [Codecademy Gamut](https://gamut.codecademy.com)

## Martine Dowden, "Type-setting in CSS"

A brief primer/history on typography and fonts. Serif vs Sans Serif, Display and Monospace fonts.

You might think that fonts generate variants like bold, italic, etc. algorithmically, but in truth most fonts define glyphs for each of these variants entirely separately.

Leading with `line-height` to improve legibility.

Drop-caps for embellishment with `::first-letter`.

Over/under/through lines with `text-decoration`, which can specify position, style (doubled, dotted, dashed, wavy!), width. Some combinations not fully supported.

`ch` unit is nice for setting `max-width` [or `max-inline-size`] based on a number of average character widths. `39ch` = 1.5 alphabets, which is a good width for readability.

`letter-spacing` (to crowd or space characters) is a useful, and under-used visual effect.

[Sadly I missed the end of this talk because of network/system issues on my Mac.
😢]

## Alvaro Montoro, "The colorful future of CSS"

[Sadly I also missed much of this talk for the same technical issue. 😞]

`color-contrast` function will auto-select colours based on WCAG contrast requirements for accessibility!

E.g.:
```css
color-contrast(#000 vs #222, #eee, #ff0 to AA)
```

Use it with CSS custom properties (variables) to auto select from your design system colours. Or pick a white or black text based on which will provide sufficient contrast against the background! `color-contrast` will automatically choose white or black if none of the listed colours meet contrast requirements!

Whoa. We’re effectively getting a super-powered `calc` for colours so you can mix, match and override colour channels:

```css
rgb(from hsl(180 50% 50%) r g 255)
```

Make a 50% opacity version of a design system colour!

```css
rgba(from var(--design-system-color) r g b 50%)
```

## Elad Shechter, "How does CSS work?"

Default styles come from the user agent stylesheet, right…? `span` by default is `display: inline`. Why don’t you see a user agent stylesheet entry for this in the browser inspector? Interesting question!

To answer this, we need to understand these special values supported by all CSS properties: `inherit`, `initial`, `unset`, `revert`.

`inerit` – use the value of the property from the parent component.

`initial` – Every CSS property has an “initial value”, which is the calculated value you get if you don’t set the property at all (e.g. `position: static`).

`div { display: initial; }` will make the `div` `display: inline`. This is the answer to the `span` question above! The initial value is specific to the property, not the element type.

You can see the initial value for each property in MDN (or your favourite CSS reference).

`unset` – Sometimes behaves like `inherit` (on properties that inherit by default), or `initial` (on properties that don’t inherit by default).

CSS has two kinds of properties: “inherited” and “uninherited”. Inherited are all the typography properties – we want a `strong` element inside a `p` to inherit the text styles of the `p`. Properties like this are shown as “Inherited: yes” on MDN.

“uninherited” properties are all the other properties. Box, position, display, transforms… everything, really. These are shown as “Inherited: no” on MDN.

`color: unset` → `inherit`\
`padding: unset` → `initial` → `0`

Why have this one value that can mean both things? The special `all` property, which you can use to reset all properties at once: `all: unset`. Useful when you have a block that you want to be treated as “unstyled HTML” – a one-line CSS reset!

```css
.common-content * {
  all: unset;
}
```

…but wait, how do you unset a property like `display`, whose user agent stylesheet defines a value depending on the element type?

This is what the `revert` value does! `div { display: revert; }` sets the `div` back to `display: block` based on the user agent stylesheet.

Using this, built [The New CSS Reset](https://elad2412.github.io/the-new-css-reset/).

Override default form element styles:

```css
input[type="checkbox"] {
  all: unset;
  /* custom checkbox styles */
}
```
