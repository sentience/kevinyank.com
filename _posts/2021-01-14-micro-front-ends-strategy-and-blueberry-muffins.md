---
title: Micro Front Ends, Strategy, and Blueberry Muffins
author: Kevin Yank
date: '2021-01-14T16:00:00+1000'
excerpt: As the director of Culture Amp's large-and-growing front end engineering practice, my biggest challenge in the past year was to communicate a coherent strategy that those 60+ engineers could understand and get behind. The solution was <strong>blueberry muffins</strong>. 🫐
categories:
  - Culture Amp
  - design systems
  - leadership
  - react
  - web development
---

As the director of Culture Amp's large-and-growing front end engineering practice, my biggest challenge in the past year was to communicate a coherent strategy that those 60+ engineers could understand and get behind.

The solution was **blueberry muffins**. 🫐

## Set the table

I've worked at [Culture Amp](https://www.cultureamp.com/) for nearly seven years because I believe that empowering companies to put their people first, to make their culture a competitive advantage, makes a difference in the world that I can be proud of.

We build a set of web-based products that together we call an employee experience platform. It's a growing collection of React apps to 1) collect employee feedback to drive engagement, 2) run performance reviews that are fair and equitable, and 3) develop the most important workplace skills in managers and individual contributors.

When I joined Culture Amp in 2015 I was employee number 26, we had a single engineering team, and we had yet to land our 200th client.

{% include figure src="/assets/images/blog/micro-front-ends-strategy-and-blueberry-muffins/culture-amp-insight-2015.png" alt="screenshot" caption="How it started: Culture Amp Insight report circa 2015" %}

Seven years later, over 5,000 companies around the world now use our products, which are built and maintained by over 100 engineers across a dozen or so different teams.

{% include figure src="/assets/images/blog/micro-front-ends-strategy-and-blueberry-muffins/culture-amp-insight-2021.png" alt="screenshot" caption="How it's going: the same screen in 2022 – with fake data, of course" %}

Safe to say, our front end engineers today build a lot of UIs – new and old, routine and novel – all at once. From that comes our biggest challenge. For it to go well (by which I mean we build user interfaces (UIs) affordably, sustainably, and producing a product our customers love) we must empower those engineers to work in separate codebases, but embrace every opportunity we have to **leverage consistency across those codebases**.

Did I say codebases? I meant blueberry muffins.

## The shopping list

To articulate a strategy for the practice, I had to start with where we are. For five years and counting, Culture Amp has had a group of engineers devoted to the health and scalability of front end engineering. Here's what they've built so far:

Back in 2017, we began with [our design system: Kaizen](https://cultureamp.design). A set of design guidelines, atomic values (design tokens), and more than 50 reusable components (with many more to come!), Kaizen defines the consistent look and feel of our product. There's always more to do, but Kaizen is already in wide and successful use in all our UI code bases today.

{% include figure src="/assets/images/blog/micro-front-ends-strategy-and-blueberry-muffins/kaizen-home.png" alt="screenshot of the Kaizen home page" caption="<a href='https://cultureamp.design/'>The Kaizen website</a>" %}

Kicking off a couple of years later in 2019, Culture Amp's standard development, continuous integration, and serverless infrastructure deployment tooling for UIs is called frontend-ops. It's still an internal project at this stage so I can't link to it, but here's a peek at some of its features:

{% include figure src="/assets/images/blog/micro-front-ends-strategy-and-blueberry-muffins/frontend-template-readme.png" alt="screenshot listing yarn commands to run a local development server, create a static build, deploy to production, run a Storybook server, and run tools like TypeScript, eslint, Jest, Prettier and Playwright" caption="From the README of Culture Amp's front end app template" %}

So what's missing?

Culture Amp has settled on [React](https://reactjs.org) written in [TypeScript](https://www.typescriptlang.org) as the standard platform for all of its UIs. But React is just a view framework, which leaves a lot of problems for engineers to solve in building a web app. Routing, data fetching, state management, form validation… there are at least a dozen more things that every Culture Amp UI needs, but which React doesn't provide. Having every team reinvent these wheels for every project is not a good use of their time. In short, we need a more full-featured framework for our React applications.

At the same time, there are things we need to learn and get better at together as a practice. Not because we're bad at them, but because the art of web application engineering is always progressing, and we need to keep up. Test automation, web accessibility, application security, animation and other user experience refinements, performance optimizations, and driving runtime error rates down.

All this and more I wrote about in a sweeping vision for the many ways we would improve as a practice in the months and years ahead. It was all in there. Would it provide the clarity my fellow engineers were craving?

One of Culture Amp's values is to "Learn faster through feedback", so in July 2021 or so I shared my latest draft with a handful of front end engineers and engineering leaders around the company, and asked what they thought.

I got a ton of great feedback, much of which I might share in a separate article about writing strategy documents if folks are curious. But my single biggest take-away that crystallized in a conversation with my manager, [Michael Ridgway](https://www.linkedin.com/in/ridgwaymichael/) (thanks, Mike!), was that I was missing exactly that: one memorable concept to pull the whole thing together.

Rather than a shopping list of necessary ingredients for the success of our practice, **I needed to give readers one idea to remember**, and carry with them into their work.

## A delicious metaphor

So yes, a blueberry muffin.

{% include figure src="/assets/images/blog/micro-front-ends-strategy-and-blueberry-muffins/blueberry-muffin-metaphor.jpeg" alt="Close-up photo of a blueberry muffin surrounded by others like it. The blueberries are labelled &quot;Kaizen components&quot; and the paper wrapper is labelled &quot;frontend-ops&quot;; both are highlighted in green with the annotation &quot;Leverage these&quot;. The cake of the muffin, however, is labelled with three question marks and highlighted in red, with the annotation &quot;Invest in this&quot;." caption="A very delicious muffin, despite appearances!<br>Photo borrowed from <a href='https://www.biggerbolderbaking.com/lemon-blueberry-muffins/'>Gemma's Bigger Bolder Baking</a>." %}

Quoting from my final strategy document:

> If our front end apps are blueberry muffins, we want to bake a lot of them while keeping them consistently delicious. To do this, we’ve got a ready-made “muffin cup” we can use on every muffin (frontend-ops), and we’ve locked in a single source for our “blueberries” (Kaizen components). **Next, we need to work on the recipe for our “batter” (our React app architecture/framework).**

**Kaizen components are blueberries** because they're the colourful morsels that festoon the surface of our "muffins". When you decide to bake a blueberry muffin, you _definitely_ don't have time to plant a blueberry bush and wait for it to grow, so you need a reliable source of high-quality blueberries. Likewise, no one wants to build a date picker from scratch for their new app.

**Frontend-ops is the paper cup** because it's the easily-overlooked conveyance device that speeds the muffin on its journey from oven to mouth. Most ~~UI engineers~~ bakers couldn't make one from scratch even if they wanted to – it's not even food!

**The app framework is the batter** because it's not the _point_ of the muffin – it's the blueberries that make your mouth water, not the cake – but it holds it all together. Without it, you'd just have a pile of blueberries. One bowl of batter makes an entire batch of muffins: you don't make new batter for each muffin!

**The muffin itself represents the app** because it's the product we're ultimately trying to offer. No two are exactly alike, but a consistent set of ingredients ensures that every muffin can deliver the same quality despite its uniqueness.

This single metaphor captures the one most important thing we seek to achieve (make our front end apps more alike, from architecture to pixels), the two aspects that are already going well (UI components and serverless architecture), and the one missing piece that we need everyone to rally to create (a shared application framework).

Since I published this strategy and presented it at leadership and practice meetings, not to mention numerous engineering inductions since, it's become known as the "blueberry muffin document", and engineers have begun using shorthand like "is this project going to contribute to our 'muffin batter'?" This, more than anything, is the signal that tells me the strategy has landed, and is meaningful to the engineers I wrote it for.

## Crumbs on the floor

What about all the other things that we're also working towards as a practice: test automation and accessibility, performance and error rates? Were they sacrificed in service of a satisfying metaphor?

Well that's the thing about a strategy: it isn't just a list of everything you want. It needs to narrow the focus, elevating a just few things _even over_ all the other also-desirable things.

Beyond the overriding priorities covered by the blueberry muffin, the document lists five ["even overs"](https://www.fearlessculture.design/blog-posts/establish-clear-priorities-using-even-over-statements):

> * Grow test automation to reduce manual testing burden
> * Improve platform accessibility
> * Harden our UIs with new browser security features
> * Polish the details of our user experience
> * Grow performance, shrink errors

For each of these it describes the current situation, efforts already being made to progress it, and advice for how engineers passionate about it can contribute to driving it forward.

You can get a lot done with 60+ engineers, and I'm confident we will progress significantly all five of these areas in the coming year. But none of them is as important as perfecting our blueberry muffin recipe.

## A muffin for the road

Am I saying that you should embrace this same muffin metaphor if you happen to be writing a strategy for _your_ engineering practice? Not at all!

But if you need to pull together a lot of threads into something memorable, do look for that unifying metaphor. Have some fun with it. Got a strong coffee culture in your team? Maybe you're trying to make the perfect macchiato! Like ice cream? Who doesn't!? What might a [Magnum](https://www.magnumicecream.com/) say about your architecture?

There are probably even some non-food-related metaphors to consider; I'm just a little hungry right now. Honestly, I started with chocolate chip cookies until I realised that those aren't baked in a tray of identical cups!

{% include figure alt="A Slack conversation between Kevin Yank and Louis Quinnell. Kevin writes &quot;Just realised chocolate chip cookies are baked on a flat sheet, not in cupcake-like tins I was imagining. FML. 😆&quot; The thread continues, considering images of muffins placed sideways in a baking tray. Louis suggests &quot;I that this represents the need for docs…&quot;" src="/assets/images/blog/micro-front-ends-strategy-and-blueberry-muffins/slack-thread.png" caption="Working out the kinks with Louis Quinnell, the tech lead for frontend-ops" %}

This, like so many things, is an opportunity to create culture. Have some fun with it!

As you might imagine, we think of this kind of thing a lot at Culture Amp. If you like thinking of engineering problems through a lens of company culture, [please apply!](https://www.cultureamp.com/company/careers)

## A Conversation with Jason O'Neil

The delivery lead of Culture Amp's Front End Ops team, [Jason O'Neil] sat down with me for a brief chat about his career, and how it intersects with the subject of this blog post:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/p2G5oFWjZsQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Jason O'Neil]: https://jasono.co
