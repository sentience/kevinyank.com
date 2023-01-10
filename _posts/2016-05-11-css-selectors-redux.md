---
title: CSS Selectors Redux
author: Kevin Yank
date: '2016-05-17T00:05:00+1100'
excerpt: "Last month in Sydney and Melbourne I was honoured to speak at Respond 2016, the third Web Directions conference at which I’ve had the privilege of speaking after Web Essentials 2006 and Web Directions South 2009. John Allsopp assigned me a great topic that would never have occurred to me otherwise: CSS selectors."
categories:
  - development
  - speaking
  - web development
---

Last month in Sydney and Melbourne I was honoured to speak at [Respond 2016][respond16], the third Web Directions conference at which I’ve had the privilege of speaking after [Web Essentials 2006]({% post_url 2006-09-30-many-directions %}) and [Web Directions South 2010][web-directions-south-2009]. John Allsopp assigned me a great topic that would never have occurred to me otherwise: CSS selectors.

Here’s what I came up with:

# CSS Selectors Redux

{% include figure src="/assets/images/blog/css-selectors-redux/slide.001.png" alt="title slide: CSS Selectors Redux. Kevin Yank, @sentience, kevin@cultureamp.com" caption="" %}

I’m Kevin Yank. I work at [Culture Amp][cultureamp], and today I’m here to talk about CSS selectors.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.002.png" alt="slide: CSS Selectors. A code listing showing a number of simple CSS declarations, with the part before the curly braces highlighted." caption="No prizes for spotting the selectors on this slide" %}

They’re the things in pink. Selectors are the part of CSS that lets us point at particular bits of a web page and say “I want to style you.”

{% include figure src="/assets/images/blog/css-selectors-redux/slide.005.png" alt="slide: what’s new; why there’s nothing new; how to be MacGyver" caption="What we’ll be covering" %}

In this talk, I’ll be covering what’s new in CSS selectors. I’ll then move swiftly along to *why* there’s nothing new in CSS selectors. And then we’ll finish strong with how to be MacGyver.

## What’s New

{% include figure src="/assets/images/blog/css-selectors-redux/slide.006.png" alt="slide: what’s new (a non-exhaustive list)" caption="" %}

Mostly, there are a bunch of new pseudo-classes in CSS:

{% include figure src="/assets/images/blog/css-selectors-redux/slide.007.png" alt="slide: :enabled, :disabled, :checked" caption="There are selectors for form field states" %}

{% include figure src="/assets/images/blog/css-selectors-redux/slide.009.png" alt="slide: :valid, :invalid, :required, :optional, :read-only, :read-write, :in-range, :out-of-range and :user-error (unsupported)" caption="There are selectors for HTML5 form validations" %}

Because most form fields start off empty and therefore invalid, most of these are of limited usefulness, unless you’re happy with your forms starting mostly red. The `:user-error` pseudo-class has been proposed to match fields that are invalid as a result of user input, but it doesn’t have any support yet.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.011.png" alt="slide: :first-child, :last-child, :only-child, :first-of-type, :last-of-type, :only-of-type, and highlighted: :nth-child(), :nth-last-child(), :nth-of-type() and :nth-last-of-type()" caption="There are a whole bunch of selectors for selecting particular children inside a container" %}

The last four are especially interesting, because they let us build really flexible selections of children:

{% include figure src="/assets/images/blog/css-selectors-redux/slide.012.png" alt="slide: :nth-child(4) selects the 4th child" caption="They let us select a particular child" %}

{% include figure src="/assets/images/blog/css-selectors-redux/slide.013.png" alt="slide: :nth-child(even) selects the 2nd, 4th, 6th child and so on" caption="Just the even or odd children" %}

{% include figure src="/assets/images/blog/css-selectors-redux/slide.014.png" alt="slide: :nth-child(n+4) selects the 4th, 5th, 6th child and so on" caption="The 4th child onward" %}

{% include figure src="/assets/images/blog/css-selectors-redux/slide.015.png" alt="slide: :nth-child(-n+4) selects the 1st, 2nd, 3rd and 4th child" caption="Everything up to the 4th child" %}

{% include figure src="/assets/images/blog/css-selectors-redux/slide.016.png" alt="slide: :nth-child(3n+1) selects the 1st, 4th, 7th child and so on" caption="Every 3rd child, starting with the first" %}

{% include figure src="/assets/images/blog/css-selectors-redux/slide.017.png" alt="slide: :nth-last-child(3) selects the 5th child out of 7" caption="The third to last child" %}

{% include figure src="/assets/images/blog/css-selectors-redux/slide.018.png" alt="slide: :nth-last-child(-n+3) selects the 5th, 6th and 7th child out of 7" caption="The last three children" %}

These child-selecting pseudo-classes will come in handy in some surprising ways a bit later.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.019.png" alt="slide: :empty Example: .errors { border: 1px solid red; } .errors:empty { display: none; }" caption="Style an element differently if it has no content" %}

`:empty` can be handy if, say, your page contains a `div` into which your JavaScript might insert form validation errors, but if there *are* no errors, then you probably don’t want to display that `div` at all.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.020.png" alt="slide: :empty doesn’t apply to a div with a line break between the opening and closing tags" caption=":empty can be finnicky" %}

Unfortuntely, `:empty` won’t match an element if it contains so much as a just line break, so you really have to control the whitespace in your markup.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.021.png" alt="slide: :blank also matches elements that contain only whitespace" caption=":blank has been proposed as a better :empty" %}

There’s basically no support for `:blank` yet, but it’ll be handy if it catches on.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.023.png" alt="slide: :target doesn’t apply to a lightbox that is otherwise styled with display: none" caption="" %}

The `:target` pseudo-class lets you style the element whose ID appears in the fragment identifier in the URL. You can use this to do surprising things like create lightboxes without any JavaScript! Here we have a hyperlink that points to the `message` element in the page, which is a lightbox that’s styled hidden by default.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.025.png" alt="slide: the lightbox appears after following the link, and contains a close button that links back to an empty fragment identifier" caption="" %}

When you click the link, the URL points to the lightbox’s ID, so the `:target` selector matches it, and the new styles make the lightbox appear. The lightbox can also contain a link back to the empty fragment identifier, so that when you click it…

{% include figure src="/assets/images/blog/css-selectors-redux/slide.026.png" alt="slide: the URL has no fragment identifier, so the lightbox is hidden" caption="" %}

…the lightbox is hidden again. All without a shred of JavaScript!

{% include figure src="/assets/images/blog/css-selectors-redux/slide.028.png" alt="slide: :not Example: article:not(:last-child) can be used to apply a border to the bottom of all but the last in a series of articles" caption=":not lets you invert the meaning of simple selectors" %}

Say you want to put a border on the bottom of all but the last in a series of `article`s. You might think to apply the border to all `article`s, and then with a second rule remove the border from the last `article`. Instead, with a single selector using `:not`, you can apply the border efficiently by selecting all but the last child.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.029.png" alt="slide: a[href]:not([class]) matches standard links only, .my_link_class can then match links with a class" caption="These two selectors are mutually exclusive" %}

In this example, the `:not` pseudo-class lets you match only links that have no `class` assigned. These might be hyperlinks in your body content, the ones that come out of your site’s content management system, for example. You can then use simple class selectors to style links with particular classes, and you don’t have to roll back your basic link styles because those classed links aren’t matched by the first selector.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.030.png" alt="slide: .trigger + * matches the sibling element that follows the one with the trigger class applied" caption="The adjacent sibling selector is old news…" %}

Here’s our first new selector that isn’t a pseudo-class!

Most of you are probably familiar with `+`, the adjacent sibling selector. It lets you write a selector to match the element immediately following another element, that shares the same parent element.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.031.png" alt="slide: .trigger ~ * matches all of the sibling elements following the one with the trigger class applied" caption="…but the general sibling selector is new and shiny!" %}

Well now we have `~`, the general sibling selector. It lets you look for matches among *all* of an element’s following siblings.

This is another selector that has some surprising uses, as we’ll see in a bit.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.032.png" alt="slide: “that’s old news!”" caption="" %}

Now you might be thinking all these new selectors have been around for years, and you’d be right; they have. So let’s look at some *really* new selectors.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.033.png" alt="slide: [attribute=value] [attribute~=value] [attribute|=value] [attribute^=value] [attribute$=value] [attribute*=value]" caption="These attribute selectors have been around for awhile…" %}

{% include figure src="/assets/images/blog/css-selectors-redux/slide.034.png" alt="slide: [attribute=value i] [attribute~=value i] [attribute|=value i] [attribute^=value i] [attribute$=value i] [attribute*=value i]" caption="…but now you can add a letter ‘i’ to the end to make the values case-insensitive" %}

This is boring. I honestly don’t know why you would want this, so let’s move on.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.037.png" alt="slide: :matches() Example: ol > li :link, ol > li :visited, ul > li :link, ul > li :visited can be rewritten as :matches(ol, ul) > li :matches(:link, :visited)" caption="The :matches pseudo-class lets you reduce duplication in your selectors, by selecting one of two alternatives" %}

The selectors above match visited or unvisited links inside of list items, which are children of an ordered or unordered list. The first version is quite repetitive because of the alternatives. If you’re familiar with Sass, you can eliminate this repetition using nesting. But now, you can do the same thing in pure CSS using `:matches`.

But this is really just syntactic sugar. It doesn’t let you select any elements that you couldn’t select before. So, boring.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.038.png" alt="slide: :placeholder-shown" caption=":placeholder-shown lets you style a form field when it’s currently displaying a placeholder" %}

Boring!

## Why There’s Nothing New

{% include figure src="/assets/images/blog/css-selectors-redux/slide.039.png" alt="slide: why there’s nothing new" caption="" %}

So, why are there no new CSS Selectors worth talking about? I think it’s because we’re not asking for them, because we’re all doing things like this:

{% include figure src="/assets/images/blog/css-selectors-redux/slide.040.png" alt="slide: Bootstrap A search form is styled entirely by adding class attributes that apply ready-made styles to HTML elements" caption="You can create a perfectly serviceable search form using Bootstrap classes" %}

But even if you’re writing your own styles, chances are you’ve recently adopted a methodology like this one:

{% include figure src="/assets/images/blog/css-selectors-redux/slide.041.png" alt="slide: BEM .everything__is-a--class" caption="Block Element Modifier (BEM) recommends giving every HTML element you might want to style a unique class" %}

Even CSS Modules is just an easy way to generate unique class names:

{% include figure src="/assets/images/blog/css-selectors-redux/slide.042.png" alt="slide: CSS Modules A set of generic class selectors (.menu, .item, .active) in a stylesheet are compiled to unique class names (.site_nav__menu--8675e09, .site_nav__item--8675e09, .site_nav__active--8675e09" caption="The class names in the CSS module on the left get compiled to unique class names that are then inserted into your views" %}

Let me be clear, we’ve adopted CSS Modules at [Culture Amp][cultureamp] and they’ve changed our game. We love them. But they really just make it easier to use class selectors.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.043.png" alt="slide: We are abandoning HTML semantics" caption="When we use selectors like these, we are abandoning HTML semantics when it comes to our styles" %}

In other words, we are no longer styling elements because of what they actually *are*, but because of what we have demanded they look like, using classes.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.045.png" alt="slide: Not a button: &lt;span class=&quot;button&quot;&gt; Click me! &lt;/span&gt;" caption="…and that can lead to disconnects between the appearance and the behaviour of elements like this one" %}

Whether or not you think this is a bad thing probably depends on whether you’re building something with the same semantics as HTML—text documents! If you’re building a GUI application that runs in the browser, it’s harder to justify sacrificing the control of classes in support of HTML semantics. You’re probably more concerned about ARIA attributes than element types.

But for better or worse, we’re turning into these people:

<iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/iHmLljk2t8M?rel=0" frameborder="0" allowfullscreen></iframe>

{% include figure src="/assets/images/blog/css-selectors-redux/slide.048.png" alt="slide: Bryce Shivers and Lisa Eversman stand in an open doorway with their bird-painting kits in hand" caption="We’re becoming the “put a class on it” people" %}

We show up, we want to make our page “all pretty”, so we put classes on things until we’re done. What kind of craftspeople are we if we always use the same tool for every job?

{% include figure src="/assets/images/blog/css-selectors-redux/slide.049.png" alt="slide: prescriptive vs axiomatic, unintelligent vs intelligent" caption="" %}

[Heydon Pickering][heydonworks], to whom I’m indebted for several of the techniques in this talk, has proposed that we write selectors that respond to things like the *relationships* between elements, rather than prescribing the styles of individual elements, one at a time. These ‘axiomatic’ or intelligent styles can give rise to useful, emergent behaviour. I don’t have a lot of time to go into this, but if you’re interested please do check out his talk, [Effortless Style][effortless-style]. The video is online for free and it’s worth your time.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.050.png" alt="slide: CSS Selectors Level 4 Working Draft" caption="Our over-use of class selectors is having a profound impact on the future of CSS" %}

Let’s take a look at a couple of features in the current [CSS Selectors Level 4 Working Draft][css4-wd]:

{% include figure src="/assets/images/blog/css-selectors-redux/slide.051.png" alt="slide: :local-link" caption=":local-link applies styles only to links that remain within the current site" %}

Now this would be really useful; I would totally use this! But there’s no support for it in browsers and no sign of it coming.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.053.png" alt="slide: Reference Combinator Example: label:hover /for/ input" caption="When the user hovers over the label, the input field is styled because the label’s for attribute references the input’s ID" %}

If you’ve heard of the [CSS checkbox hack][checkbox-hack], well this creates all *sorts* possibilities for interactive styles. This would be amazing. But there’s no support for it in browsers and no sign of it coming.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.055.png" alt="slide: Selectors Level 4 Editor’s Draft, 22 March 2016. “Removed the ‘:local-link’ and reference combinator for lack of interest.”" caption="In fact, both of these features have just been removed from the Selectors Level 4 Editor’s Draft due to “lack of interest”" %}

That’s the ‘lack of interest’ of you, me and everyone <del>in this room</del> reading this.

Here’s a feature that’s still in the Editor’s Draft:

{% include figure src="/assets/images/blog/css-selectors-redux/slide.057.png" alt="slide: :has() Example 1: a[href]:has(> img), Example 2: section:not(:has(h1, h2, h3))" caption="Otherwise known as the ‘parent selector’, :has() is the holy grail of CSS selectors" %}

I’ve been wanting this for years. In the first example, `a[href]:has(> img)` matches any link that contains an image as its immediate child. Right now you could match that image, but if you wanted to style the link, you’d need to add a class to it.

The second example, `section:not(:has(h1, h2, h3))` matches any `section` that does *not* contain any headings. It’d take a gnarly bit of template logic to get your CMS to add a class for this to the right `section`s automatically.

But as with many things in life, you need to read the fine print:

{% include figure src="/assets/images/blog/css-selectors-redux/slide.059.png" alt="slide: Dynamic profile: “…appropriate in any context, including dynamic browser CSS selector matching. Includes every selector … except for: the :has() pseudo-class” Static profile: “…appropriate for contexts which aren’t extremely performance sensitive [such as] a static document tree. For example, the querySelector() method.”" caption="The :has() pseudo-class is the only selector relegated to the ‘static profile’" %}

Elsewhere in the CSS Selectors Level 4 draft, the concept of the ‘dynamic’ and ‘static’ profiles is introduced, and unlike *every* other selector in the spec, the `:has()` pseudo-class is restricted to the static profile, which means you can only use it in JavaScript, not in your CSS stylesheets.

Browser vendors say it has to be this way, because it’s impossible to apply selectors that contain `:has()` dynamically, as a page is progressively rendered and then modified.

Because we’re all just settling for class selectors, there’s a voice missing from this debate: the voice of developers like us who have wanted this kind of power and flexibility for as long as we’ve been writing CSS.

In my nearly 20 years as a professional developer, I’ve lost count of the number of times I’ve told my boss something was impossible, but once I was given a push I found a way to make it happen. Browser vendors may well be right; it could be impossible to implement full support for `:has()` in a performant way, but I think we should give them that push.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.060.png" alt="slide: a power drill with a gleaming assortment of sharp bits" caption="As developers, we want power tools…" %}

{% include figure src="/assets/images/blog/css-selectors-redux/slide.061.png" alt="slide: two bulldog clips and a rubber band" caption="…but what we’re getting amounts to little more than paper clips and rubber bands" %}

Incidentally, this is the most depressing piece of stock photography I’ve ever paid money for, and I blame all of you for it.

Thankfully, I know someone who’s pretty good with paper clips and rubber bands.

## How to be MacGyver

{% include figure src="/assets/images/blog/css-selectors-redux/slide.062.png" alt="" caption="" %}

MacGyver is a TV action star from the 80s, who used science to— Well, it’s probably easier just to show you:

<iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/nCX7q3z7pJw?rel=0" frameborder="0" allowfullscreen></iframe>

That’s MacGyver rescuing a hostage from a terrorist camp in a bamboo airplane built from parts he found around the tent in which they were being held.

So if all we have are paper clips and rubber bands, let’s see if we can make a couple of bamboo airplanes.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.066.png" alt="slide: * + *" caption="This is the Lobotomized Owl selector" %}

{% include figure src="/assets/images/blog/css-selectors-redux/slide.067.png" alt="slide: Lobotomized Owl * + * { margin-top: 1.5em; }" caption="The Lobotomized Owl selector (* + *) makes it really easy to create consistent block spacing" %}

[Invented by Heydon Pickering][lobotomized-owl], this selector combines two universal selectors (`*`) with the adjacent sibling selector (`+`). It matches the second of *any* two adjacent elements, but by applying a top margin, which only affects block elements, you’re only styling adjacent blocks.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.068.png" alt="" caption="It works well with nested blocks, too" %}

{% include figure src="/assets/images/blog/css-selectors-redux/slide.069.png" alt="slide: :not(:first-child)" caption="Isn’t this equivalent?" %}

If you know your selectors, you might be thinking that `* + *` could be more clearly written as `:not(:first-child)`. Well, I’d tell you that you were *almost* right. First, it would need to be `:not(:first-child):not(:root)` so that it didn’t match the `body` element.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.071.png" alt="slide: :not(:first-child):not(:root) IE9+, high specificity" caption="This alternative form requires Internet Explorer 9 or later, and has surprisingly high specificity" %}

With two pseudo-class selectors in this alternative form, you’d have a selector with relatively high specificty, that was difficult to override with other selectors. `* + *`, on the other hand, has a specificity of zero. *Any* selector will override it!

For example:

{% include figure src="/assets/images/blog/css-selectors-redux/slide.074.png" alt="slide: p + p { margin-top: 0; text-indent: 2em; }" caption="Instead of a top margin, use a text indent on adjacent paragraphs" %}

Isn’t that cool?

Here’s another bamboo airplane, also [thanks to Heydon Pickering][quantity-queries].

{% include figure src="/assets/images/blog/css-selectors-redux/slide.075.png" alt="slide: quantity selectors" caption="" %}

Since I’m presenting this at [Respond][respond16], I don’t need to tell you what media queries are. They let you apply different styles depending on the size of the device’s viewport.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.076.png" alt="slide: media queries display: table-cell;" caption="Here we have a nav bar where the items are styled as table cells" %}

{% include figure src="/assets/images/blog/css-selectors-redux/slide.079.png" alt="display: inline-block;" caption="As the browser window gets smaller, we might switch to inline blocks to fit them all in" %}

{% include figure src="/assets/images/blog/css-selectors-redux/slide.080.png" alt="display: block;" caption="And on phone-sized devices, we could stack them vertically as blocks" %}

But what if we could write styles that responded to the *content* of the page the same way media queries let us respond to the size of the browser window?

Let’s say we have the same nav bar.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.081.png" alt="slide: quantity selectors display: table-cell;" caption="Table cells work well when there are just four items" %}

{% include figure src="/assets/images/blog/css-selectors-redux/slide.082.png" alt="" caption="But if one of your content people adds a fifth category to your content management system, things get a bit tight" %}

{% include figure src="/assets/images/blog/css-selectors-redux/slide.083.png" alt="" caption="Add a sixth item, and the layout breaks" %}

{% include figure src="/assets/images/blog/css-selectors-redux/slide.084.png" alt="display: inline-block;" caption="We’d like to respond to the number of items by switching to inline-block…" %}

{% include figure src="/assets/images/blog/css-selectors-redux/slide.085.png" alt="" caption="…and this layout could also accommodate a greater number of items" %}

So, what do you think? Can we do this?

Let’s start simple:

{% include figure src="/assets/images/blog/css-selectors-redux/slide.086.png" alt="slide: one element li:only-child" caption="Using :only-child, we can change the styles applied to the items of a list if there is only one of them" %}

{% include figure src="/assets/images/blog/css-selectors-redux/slide.087.png" alt="slide: li:not(:only-child)" caption="We can also reverse the logic, with :not(:only-child) matching all of the list items, but only if there are more than one of them" %}

Okay, that was too easy. Let’s try a bigger challenge:

{% include figure src="/assets/images/blog/css-selectors-redux/slide.088.png" alt="slide: n elements" caption="Can we come up with a selector that will apply different styles to the list items if there are exactly six of them?" %}

{% include figure src="/assets/images/blog/css-selectors-redux/slide.090.png" alt="slide: li:nth-last-child(6):first-child" caption="This selector targets the first child, when there are exactly 6 children" %}

`:nth-last-child(6)` matches the sixth-to-last child, and `:first-child` matches the first child. For one element to be both the sixth-to-last child *and* the first child, there must be exactly six children!

{% include figure src="/assets/images/blog/css-selectors-redux/slide.091.png" alt="slide: li:nth-last-child(6):first-child ~ li" caption="This selector uses the same trick, and targets the rest of the children" %}

Earlier we saw `~`, the general sibling selector, which matches all of the following siblings of a given element. Since we’ve already got a selector to match the first child, we can use this to write this second selector that matches the remaining five children, but again, only if there are exactly six children.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.092.png" alt="slide: li:nth-last-child(6):first-child, li:nth-last-child(6):first-child ~ li" caption="We can now combine these two selectors to achieve the desired effect" %}

Not bad! But the challenge before us is to write a selector that matches *n or more* children.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.093.png" alt="slide: n or more elements" caption="We’d like our alternative styles to apply if there are six or more children" %}

{% include figure src="/assets/images/blog/css-selectors-redux/slide.095.png" alt="slide: li:nth-last-child(n+6)" caption="This selector matches the 6th-to-last child, the 7th-to-last child, and so on" %}

If there are fewer than six children, this selector won’t match anything. So now that we’ve matched the first several, all we need is a selector to match the remaining five children. And I just showed you how to do that!

{% include figure src="/assets/images/blog/css-selectors-redux/slide.096.png" alt="slide: li:nth-last-child(n+6) ~ li" caption="Adding the general sibling selector, we can match the remaining children" %}

And there you have it:

{% include figure src="/assets/images/blog/css-selectors-redux/slide.097.png" alt="slide: li:nth-last-child(n+6), li:nth-last-child(n+6) ~ li" caption="Combine the two selectors, and we’ve done it" %}

These two selectors combined will match all of the children, but only if there are six or more of them!

We can also invert the logic, and write a selector that matches all of the children, but only if there are *n or fewer* of them:

{% include figure src="/assets/images/blog/css-selectors-redux/slide.098.png" alt="slide: n or fewer elements li:nth-last-child(-n+5):first-child, li:nth-last-child(-n+5):first-child ~ li" caption="See if you can explain to yourself how this works" %}

There we go: the Lobotomized Owl and Quantity Selectors. Two bamboo airplanes assembled from parts we found lying around.

I hope I’ve rekindled your interest in CSS Selectors, and encouraged you to get out there and demand the powerful selectors we need.

{% include figure src="/assets/images/blog/css-selectors-redux/slide.099.png" alt="slide: CSS Selectors Redux, Kevin Yank, @sentience, kevin@cultureamp.com, Culture Amp is hiring in Melbourne!" caption="" %}

[web-directions-south-2009]: https://www.webdirections.org/resources/kevin-yank-css-frameworks/
[cultureamp]: https://www.cultureamp.com/
[effortless-style]: https://vimeo.com/101718785
[heydonworks]: http://www.heydonworks.com/
[css4-wd]: http://www.w3.org/TR/2013/WD-selectors4-20130502/
[css4-ed]: https://drafts.csswg.org/selectors
[checkbox-hack]: https://css-tricks.com/the-checkbox-hack/
[lobotomized-owl]: https://alistapart.com/article/axiomatic-css-and-lobotomized-owls
[quantity-queries]: https://alistapart.com/article/quantity-queries-for-css
[respond16]: http://www.webdirections.org/respond16/
[cultureamp]: https://www.cultureamp.com/
