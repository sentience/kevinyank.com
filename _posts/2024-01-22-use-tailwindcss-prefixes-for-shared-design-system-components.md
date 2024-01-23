---
date: 2024-01-22T13:22:54+11:00
title: "Use Tailwind CSS prefixes for shared design system components"
author: Kevin Yank
tags:
  - Culture Amp
  - design systems
  - Tailwind
  - web development
excerpt: Surprisingly little has been written about how to use Tailwind with design systems or shared components, when both those components and the app consuming them are styled with Tailwind. Tailwind's `prefix` option is specifically designed to allow for this, but it's a somewhat ugly solution that we did our best to avoid at Culture Amp until recently. Here's everything we learned, and why we're ultimately embracing `prefix`.
featured: true
featureImg: /assets/images/blog/use-tailwindcss-prefixes-for-shared-design-system-components/khamkeo-vilaysing-WtwSsqwYlA0-unsplash-1152.jpg
featureImgAlt: A leafy tree is buffeted by a strong wind. In the foggy background of the windswept landscape, a second, nearly identical tree can barely be seen.
featuredImgBorder: false
---

{% render figure,
  src: "/assets/images/blog/use-tailwindcss-prefixes-for-shared-design-system-components/khamkeo-vilaysing-WtwSsqwYlA0-unsplash.jpg",
  alt: "A leafy tree is buffeted by a strong wind. In the foggy background of the windswept landscape, a second, nearly identical tree can barely be seen.",
  caption: "Photo by <a href='https://unsplash.com/@mahkeo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Khamkéo Vilaysing</a> on <a href='https://unsplash.com/photos/trees-with-wind-photo-WtwSsqwYlA0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
%}

Surprisingly little has been written about how to use Tailwind with design systems or shared components, when both those components and the app consuming them are styled with Tailwind. Tailwind's [`prefix` option](https://tailwindcss.com/docs/configuration#prefix) is specifically designed to allow for this, but it's a somewhat ugly solution that we did our best to avoid at Culture Amp until recently. Here's everything we learned, and why we're ultimately embracing `prefix`.

## A very brief intro to Tailwind

[Tailwind CSS][] (Tailwind for short) is a not-uncontroversial choice of tool for projects where hand-crafting CSS selectors that apply to semantically meaningful patterns of HTML elements is not beneficial. We have decided to use it at Culture Amp, the reasons for which deserve an article of their own. At the risk of oversimplifying: if the structure of your UI matches the structure of your codebase (i.e. visual blocks tend to correspond to software components rather than sections of a document), you might save time and effort by applying styles to your elements directly in those components, rather than by writing CSS selectors that are tightly coupled to those components' implementation. Again, there's a lot more to say here, and I'll try to write it up soon. Let me know if you're keen to read it.

Fundamentally, Tailwind scans your application's source code for class names like this:

```html
<div class="m-0"></div>
```

…and generates a stylesheet that contains only the necessary styles to match the classes you've used:

```css
.m-0 {
  margin: 0px;
}
```

While at first glance this looks like it would have all the downsides of inline styles (the `style` attribute), Tailwind has designed a remarkably robust language of class names that can cover just about any selector, property, or value you need. Inline styles can't do pseudo-class selectors or media queries, but Tailwind can:

```html
<div class="dark:hover:bg-sky-500/25"></div>
```

```css
@media (prefers-color-scheme: dark) {
  .dark\:hover\:bg-sky-500\/25:hover {
    background-color: rgb(14 165 233 / 0.25);
  }
}
```

In a project that's a good fit for Tailwind (see above), this virtually eliminates the need to write CSS code that would mostly contain selectors that match a single element – an unnecessary abstraction.

## Styling shared components

For the purposes of this article, shared components are user interface elements that are used in more than one web application. In Culture Amp's case this includes the React components in our [Kaizen design system](https://cultureamp.design).

When you want to use Tailwind to style both an application's non-shared components, and the shared components that application uses, you have a decision to make: **Will you publish your shared components with compiled CSS, or do you expect the application's build to run the Tailwind compiler over the shared components' source code to generate those styles as well?**

For many years, Culture Amp took the second option, and distributed shared components without compiled CSS. This meant that every app that consumed shared components needed to include the necessary CSS build tooling – at that time [CSS Modules](https://github.com/css-modules/css-modules) and [node-sass](https://github.com/sass/node-sass) – with a compatible version and configuration. This was relatively easy to set up, but over time proved difficult to maintain. When node-sass was deprecated in favour of (the much faster but slightly incompatible) [Dart Sass](https://sass-lang.com/dart-sass/), this demanded a difficult lock-step migration across all those codebases, which we have yet to achieve. And as new applications have switched to Tailwind for their own styles, they've had to continue to maintain those old build tools in parallel for the shared components' styles.

To avoid this coupling between the source code of shared components and the build tooling of the applications that consume them, we now want to go the other way: have our shared components build their styles in their own build pipelines and publish components with plain CSS. That way, the CSS build tooling of our applications can stay decoupled from the CSS build tooling of our component libraries: a Sass-styled application can consume a Tailwind-styled component without having to run Tailwind, and a Tailwind-styled application can consume a Sass-styled component without having to run Sass.

But what happens when a Tailwind-styled application consumes Tailwind-styled components? **How do the Tailwind-generated styles of shared components co-exist with the Tailwind-generated styles of the application?**

## The naive approach

At first, it would seem that it's safe to combine two Tailwind-built stylesheets into one, if slightly inefficient. Let's say your component uses `m-0`:

```html
<div class="m-0">This is a shared component</div>
```

```css
.m-0 {
  margin: 0px;
}
```

And then your application also uses `m-0`:

```html
<div class="m-0">This is my application.</div>
```

```css
.m-0 {
  margin: 0px;
}
```

When you use the shared component in your application, you get something like this:

```html
<div class="m-0">This is my application.</div>
<div class="m-0">This is a shared component</div>
```

```css
/* shared component styles */
.m-0 {
  margin: 0px;
}
/* application styles */
.m-0 {
  margin: 0px;
}
```

`.m-0` is defined twice in your stylesheet, which is the slightly wasteful part, but the two rules apply the exact same styles, so everything still works.

While the duplicate CSS output is unfortunate, Tailwind-generated stylesheets tend to be incredibly small compared to hand-coded CSS, so this bloat is likely negligible. Almost every element in the document that needs its margin set to zero has that done with this one (duplicated) CSS rule, rather than traditional CSS where many, _many_ different rules might specify `margin: 0px` separately. If you _really_ wanted to avoid this duplicate output, a PostCSS plug-in like [postcss-discard-duplicates][] could do this for you.

## The small problem: Configuration coupling

A much bigger downside than the output duplication, however, is the coupling this creates between your Tailwind configurations. If someday you upgrade or alter the configuration of Tailwind in either project (your shared components or your application), and the two outputs do not match, one set of styles will overwrite the other.

```css
/* shared component styles */
.bg-sky-500 {
  background-color: #0ea5e9; /* new value */
}
/* application styles */
.bg-sky-500 {
  background-color: #87cefa; /* old value */
}
```

In this example, because our combined CSS output includes the shared components' CSS first and the application's CSS second, the application styles "win" (because the CSS cascade applies rules of equal specificity in source code order).

Adding to the confusion is the fact that Tailwind, remember, only generates styles for class names that you use, so if your application uses some of the classes that your shared components use but not others, you can end up with an unholy mix of the two configurations applied to your application:

```css
/* shared component styles */
.bg-red-500 {
  background-color: #ef4444; /* new value */
}
.bg-sky-500 {
  background-color: #0ea5e9; /* new value */
}
/* application styles */
.bg-sky-500 {
  background-color: #87cefa; /* old value */
}
```

In the above example, your shared components will display with the old value for `bg-sky-500`, but the new value for `bg-red-500`, because that second background colour isn't used in the application's source code!

You can of course flip the order in which your two stylesheets are combined, putting the application's styles first:

```css
/* application styles */
.bg-sky-500 {
  background-color: #87cefa; /* old value */
}
/* shared component styles */
.bg-red-500 {
  background-color: #ef4444; /* new value */
}
.bg-sky-500 {
  background-color: #0ea5e9; /* new value */
}
```

…but this merely reverses the problem: now your application is being unexpectedly re-styled by the Tailwind configuration used to build your shared components' styles, except for any classes that are used only in your application, which will remain styled by the old configuration.

In short, if you want your styles to be applied consistently, you need to avoid breaking changes to your Tailwind configuration, or update the two packages in lock-step. This by itself may not be a dealbreaker if you expect your Tailwind configuration to be relatively stable. Tailwind itself is pretty careful about releasing breaking changes, so it's unlikely that having slightly different Tailwind versions in the shared components and the application will cause problems _most_ of the time.

But it's hard to ignore the fact that we've ended up back in a situation where our applications are forced to match their build configuration to that assumed by our shared components.

## The big problem: Tailwind depends on source order

There's actually a more subtle (and fatal) issue lurking here: Tailwind is designed with the assumption that it controls the source order of the rules it generates.

Let's consider again our zero-margin `div`:

```html
<div class="m-0"></div>
```

```css
.m-0 {
  margin: 0px;
}
```

`margin` is a [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties), which means it has the effect of setting `margin-block-start` (top), `margin-inline-end` (right), `margin-block-end` (bottom), and `margin-inline-start` (left).

In traditional CSS, you can follow a shorthand property like this with any specific properties you want to override, like adding a left margin:

```css
.bottom-margin-only {
  margin: 0px;
  margin-inline-start: 1rem;
}
```

The order of the property declarations in the above is significant: if you swapped them so that `margin-block-end` was set first, the `margin` declaration would override it.

In Tailwind, you can likewise override a shorthand class like `m-0` with a specific class like `ms-4`:

```html
<div class="m-0 ms-4"></div>
```

```css
.m-0 {
  margin: 0px;
}
.ms-4 {
  margin-inline-start: 1rem;
}
```

But the critical thing to observe here is that **the order of the class names in the HTML is not significant: only the order of the generated CSS rules is.**

If we swapped the order of the class names in the HTML:

```html
<div class="m-0 ms-4"></div>
```

…the left margin would still override the `m-0`, because Tailwind still generates the two CSS rules in the order that ensures the more fine-grained style (the left margin) is applied after the more coarse-grained style (the margin on all four sides):

```css
.m-0 {
  margin: 0px;
}
.ms-4 {
  margin-inline-start: 1rem;
}
```

Now, take this observation that the source order of rules generated by Tailwind is a critical feature of its design, and combine that with the issue we identified above of shared component styles clobbering application styles (or vice versa):

```html
<div class="m-0">This is my application.</div>
<div class="m-0 ms-4">This is a shared component</div>
```

```css
/* shared component styles */
.m-0 {
  margin: 0px;
}
.ms-4 {
  margin-inline-start: 1rem;
}
/* application styles */
.m-0 {
  margin: 0px; /* ❌ overides .ms-4 */
}
```

In this example, our shared components use `m-0` and `ms-4`, but our application only uses `m-0`. The application's `m-0` rule will override the value of `margin-inline-start` set by the `ms-4` rule, and break the shared component's left margin!

Once again, you can solve this specific instance by swapping the order of the two generated stylesheets, but you'll just end up with the opposite problem: shared component styles interfering with application styles, in this example when the margin is on an application element.

```html
<div class="m-0 ms-4">This is my application.</div>
<div class="m-0">This is a shared component</div>
```

```css
/* application styles */
.m-0 {
  margin: 0px;
}
.ms-4 {
  margin-inline-start: 1rem;
}
/* shared component styles */
.m-0 {
  margin: 0px; /* ❌ overides .ms-4 */
}
```

If you're at all tempted to try doing without shorthand styles (e.g. avoid `m-0` in favour of `mt-0 me-0 mb-0 ms-0`), Tailwind also depends on source order for modifiers like media queries:

```html
<div class="m-0 md:m-4">This is my application</div>
<div class="m-0">This is a shared component</div>
```

```css
/* application styles */
.m-0 {
  margin: 0px;
}
@media (min-width: 768px) {
  .md\:m-4 {
    margin: 1rem;
  }
}
/* shared component styles */
.m-0 {
  margin: 0px; /* ❌ overides .md:m-4 */
}
```

Here we're saying the first `div` should have a margin of zero by default, but on medium-sized screens or larger it should have a `1rem` margin. These two rules have equal specificity (one class selector), so the fact that the media query style overrides the default style depends on source order. A second `.m-0` rule at the end of the CSS from the shared component clobbers this margin.

Modifiers (`dark:`, `hover:`, etc.) are a core feature of Tailwind's styling language; there's no avoiding them, and as we've seen, they are broken by combining multiple Tailwind builds in a single CSS stylesheet.

How do we fix this?

## Seductive non-solutions

There are a few approaches to solving this that seem like they could work nicely until you think them through. We'll look at each briefly to explain why they don't work.

### `!important`

Out of the box, Tailwind lets you generate styles with `!important` that override competing styles in the cascade. `class="!ms-4"`, for example, will output this:

```css
.\!ms-4 {
  margin-inline-start: 1rem !important;
}
```

First of all, `!important` is a very sharp knife, and is [best avoided](https://developer.mozilla.org/en-US/docs/Web/CSS/important#best_practices). For example, it interferes with inline styles applied to elements by JavaScript. But even if we ignored everything that's bad about `!important`, it doesn't actually solve the problem!

```html
<div class="m-0">This is my application.</div>
<div class="m-0 !ms-4">This is a shared component</div>
```

```css
/* shared component styles */
.m-0 {
  margin: 0px;
}
.\!ms-4 {
  margin-inline-start: 1rem !important;
}
/* application styles */
.m-0 {
  margin: 0px;
}
```

Yes, this prevents the application's `m-0` rule from overriding the component's `ms-4` rule. But to do this we had to modify our shared component with knowledge of the application that would be consuming it, which is an unhealthy coupling to internal implementation details that would be far from practical to maintain in a real-world ecosystem of shared components and applications.

What if we made _all_ our component styles important? Tailwind even offers [a configuration option for this](https://tailwindcss.com/docs/configuration#important):

```html
<div class="m-0">This is my application.</div>
<div class="m-0 ms-4">This is a shared component</div>
```

```css
/* shared component styles */
.m-0 {
  margin: 0px !important;
}
.ms-4 {
  margin-inline-start: 1rem !important;
}
/* application styles */
.m-0 {
  margin: 0px;
}
```

Well, this is just equivalent to putting our shared component styles at the end of the stylesheet: as already described above, the shared component styles will end up clobbering application styles in different circumstances:

```html
<div class="m-0 ms-4">This is my application.</div>
<div class="m-0">This is a shared component</div>
```

```css
/* shared component styles */
.m-0 {
  margin: 0px !important; /* ❌ overrides .ms-4 */
}
/* application styles */
.m-0 {
  margin: 0px;
}
.ms-4 {
  margin-inline-start: 1rem;
}
```

### Boost specificity with `important`

Tailwind's `important` configuration option also lets you [specify a selector](https://tailwindcss.com/docs/configuration#selector-strategy) for a top-level container element (like `body` or `#app`) to boost the specificity of the selectors it generates beyond the usual one-class specificity.

```html
<div class="m-0">This is my application.</div>
<div class="m-0 ms-4">This is a shared component</div>
```

```css
/* shared component styles */
body :is(.m-0) {
  margin: 0px;
}
body :is(.ms-4) {
  margin-inline-start: 1rem;
}
/* application styles */
.m-0 {
  margin: 0px;
}
```

Here, setting `important` to `'body'` again appears to fix the problem because the shared component styles now consistently override the application styles. But just like with `!important` above, this only has the same effect as putting the component styles at the end of the stylesheet: shared component styles will clobber application styles instead.

```html
<div class="m-0 ms-4">This is my application.</div>
<div class="m-0">This is a shared component</div>
```

```css
/* shared component styles */
body :is(.m-0) {
  margin: 0px; /* ❌ overrides .ms-4 */
}
/* application styles */
.m-0 {
  margin: 0px;
}
.ms-4 {
  margin-inline-start: 1rem;
}
```

### CSS cascade layers

A relatively new but now widely-supported addition to browsers, the [`@layer` CSS at-rule](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) lets you create groups of CSS rules and control the order in which they are applied to the page. So you could specify that your shared component styles be applied after your application styles:

```html
<div class="m-0">This is my application.</div>
<div class="m-0 ms-4">This is a shared component</div>
```

```css
@layer application-styles, component-styles;

@layer component-styles {
  .m-0 {
    margin: 0px;
  }
  .ms-4 {
    margin-inline-start: 1rem;
  }
}

@layer application-styles {
  .m-0 {
    margin: 0px;
  }
}
```

But once again – you guessed it – this is effectively just like moving the component styles to the bottom of the stylesheet: it creates the opposite problem of component styles interfering with application styles.

### Discard duplicates

Remember [at the start of this article](#the-naive-approach) when we noted that our shared components and our application could generate the same CSS rule, and that this would bloat our CSS output unnecessarily? I mentioned [postcss-discard-duplicates][] could get rid of those duplicate rules.

```html
<div class="m-0">This is my application.</div>
<div class="m-0 ms-4">This is a shared component</div>
```

```css
/* shared component styles */
.m-0 {
  margin: 0px;
}
.ms-4 {
  margin-inline-start: 1rem;
}
/* application styles */
```

This looks promising, because the problematic style has entirely disappeared. But there is still a source order issue here, because the style that survives is the style that appears first in the source order, and that isn't always right.

With a slightly tweaked example where the duplicate style is the fine-grained style (`ms-4`), we run into the same problem:

```html
<div class="m-2 ms-4">This is my application.</div>
<div class="m-0 ms-4">This is a shared component</div>
```

```css
/* shared component styles */
.m-0 {
  margin: 0px;
}
.ms-4 {
  margin-inline-start: 1rem;
}
/* application styles */
.m-2 {
  margin: 0.5rem; /* ❌ overrides .ms-4 */
}
```

## An opportunity: intelligent Tailwind output merging

The fundamental problem we face is that two Tailwind builds that use the same global namespace for their class names will inevitably interfere with each other because Tailwind is unable to place the generated CSS rules in the source order required for them the override each other in the correct sequence.

But what if we could?

It's not as if the correct order for the rules is mysterious. It's implemented in the Tailwind compiler. Tools like [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss), which automatically sorts the class names in your HTML code to match the order in which Tailwind generates them in your CSS output, use [a public API](https://github.com/tailwindlabs/tailwindcss/blob/0848e4ca26c0869a90818adb7337b5a463be38d0/src/lib/setupContextUtils.js#L951-L990) in Tailwind to get this order.

So what if we wrote a PostCSS plug-in that would take the output of two Tailwind builds and merge them together, removing duplicate styles and sorting the remaining styles into the correct order?

This seems like it could work, might even be a relatively straightforward project, and could even be worth Tailwind considering as a core feature. I've started [a discussion about this](https://github.com/tailwindlabs/tailwindcss/discussions/12801) on the Tailwind CSS GitHub project.

Even if we implemented this, we would still need to accept that our two Tailwind builds would need to have compatible versions and configurations for their merged outputs to work reliably.

## The actual solution: `prefix`

As I mentioned in the previous section, the fundamental problem we face here is that Tailwind generates styles in a global namespace, and that two Tailwind builds therefore conflict in that namespace.

What if we could give our Tailwind builds separate namespaces? Our shared components would receive styles only from their generated CSS output, and our application elements would receive styles only from the application's Tailwind build output.

This is what Tailwind's [`prefix` option](https://tailwindcss.com/docs/configuration#prefix) is for. It lets you specify a short string of characters that you add to the start of all your Tailwind class names, to distinguish them from styles they need to coexist with (which in this case is another Tailwind-generated stylesheet).

For example, we could configure our Kaizen component library with a Tailwind prefix of `kz-`, and get this:

```html
<div class="m-0">This is my application.</div>
<div class="kz-m-0 kz-ms-4">This is a shared component</div>
```

```css
/* shared component styles */
.kz-m-0 {
  margin: 0px;
}
.kz-ms-4 {
  margin-inline-start: 1rem;
}
/* application styles */
.m-0 {
  margin: 0px;
}
```

The two elements' styles are completely separate in the CSS, because they use two completely different namespaces! You could swap the order of the two stylesheets, and it would make no difference. (We put our application styles last, because our design system components allow you to pass in class names to override their built-in styles, so those application class names need to come last in the stylesheet.)

This is such a clean and complete solution to this problem that you're probably wondering why this isn't a much shorter article.

The thing is, for those who have become used to Tailwind, the extreme terseness of its class names is one of its best features. It vastly reduces the number of keystrokes required for most styling tasks. Strings like `m-0` become burned into your muscle memory, something you can type almost without thinking.

So if you tell an engineer who loves Tailwind that they need to remember to add three extra characters (`kz-`) to the start of all their class names when they're working in a library, and that different libraries will have different prefixes, you're probably going to ruin their day. And someone will have to make the very unpopular decision of who gets to have the default (unprefixed) namespace: your application codebases or your design system's component library. Avoiding this pain is why we tried everything else we could first.

But this really is the cleanest solution to the problem of enabling different Tailwind builds/versions/configurations to coexist in a single web page, and at Culture Amp we've only just learned to accept that.

[Tailwind CSS]: https://tailwindcss.com/
[postcss-discard-duplicates]: https://www.npmjs.com/package/postcss-discard-duplicates
