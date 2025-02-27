---
date: 2023-04-05T11:18:28.151Z
title: "On Endings: Why & How We Retired Elm at Culture Amp"
author: Kevin Yank
tags:
  - web development
  - Culture Amp
  - Elm
excerpt:
  From time to time someone will ask, "Does Culture Amp still use Elm?" I'll answer privately that no, we are no longer investing in Elm, and explain why. Invariably, they tell me my answer was super valuable, and that I should share it publicly. Until now, I haven't.

  This is the story of how, after four years of proudly advertising Elm as its preferred language for building web UIs, Culture Amp decided – I decided – to leave it behind.
featured: true
featureImg: /assets/images/blog/on-endings-why-how-we-retired-elm-at-culture-amp/elm-logo-fade@2x.png
featureImgAlt: The Elm logo fading away
featuredImgBorder: true
---

> Beginnings are easy – endings are hard.
>
> — [Brian Eno](https://www.musicradar.com/news/brian-eno-fred-again-beginnings-endings)

From time to time someone will ask, "Does Culture Amp still use Elm?" I'll answer privately that no, we are no longer investing in Elm, and explain why. Invariably, they tell me my answer was super valuable, and that I should share it publicly. Until now, I haven't.

We began to use [Elm](https://elm-lang.org/) at [Culture Amp](https://www.cultureamp.com/) in 2016, first as a single-team experiment, then eventually as our preferred language for new front end code. I have told that story publicly in three conference talks: [Elm in Production: Surprises & Pain Points](https://www.youtube.com/watch?v=LZj_1qVURL0), [Developer Happiness on the Front End with Elm](https://www.youtube.com/watch?v=kuOCx0QeQ5c), and [Elm at Scale: More Surprises, More Pain Points](https://www.youtube.com/watch?v=uQjivmLan0E).

{% include youtube video="LZj_1qVURL0" caption="Early 2017" %}

{% include youtube video="kuOCx0QeQ5c" caption="Late 2017" %}

{% include youtube video="uQjivmLan0E" caption="Early 2018" %}

I hosted and produced the [Elm Town Podcast](https://elmtown.simplecast.com/) for 20 episodes from mid-2018 to mid-2020, and helped organise the [Elm Melbourne](https://web.archive.org/web/20191007045331/https://www.meetup.com/Elm-Melbourne/) meetup at our office until it ended due to COVID-19.

I've spoken a lot about Elm over the years. Why not speak about our move away from it?

I tell myself no one is interested in the decision _not_ to do something, that the story is a boring one. Conference talks and viral posts are made of beginnings, of novelties. Endings are relatively mundane. Except that as a technology leader, telling your team they should stop using a beloved tool is a terrifying thing to do.

I tell myself that it would be rude and ungrateful to the Elm community for me to publicly declare Culture Amp's departure from the fold, implying that Elm suffers from some fatal flaw or mistake by its maintainers. Except that no technology is perfect, and every tooling decision is a tradeoff. A really sharp knife is no less worthy of admiration for the fact that it is a poor choice to spread peanut butter.

And yes, deep down, my ego worries that people will interpret this story as a confession, that I was wrong to adopt Elm at Culture Amp, that they were right not to consider it themselves. To that, I say ["judge not"](https://idioms.thefreedictionary.com/Judge+not%2c+lest+ye+be+judged).

Perhaps the greatest challenge for engineers as they reach more senior levels in their career is to make decisions that balance the moment-to-moment joy (or frustration) that a given tool affords them, and the costs (or benefits) that same tool might create for their team, company or client over time and at scale. These stories _are_ worth telling, especially by those of us in privileged positions in the industry. The sharp tools left behind will continue to be used for other things.

This is the story of how, after four years of proudly advertising [Elm](https://elm-lang.org/) as its preferred language for building web UIs, [Culture Amp](https://www.cultureamp.com/) decided – _I_ decided – to leave it behind.

## An Extremely Brief Introduction to Elm

A quick refresher on Elm, in case it's new to you: [Elm](https://elm-lang.org/) is "a delightful language for reliable web applications." It compiles to JavaScript so that it can run in any web browser, but as an ML-based functional programming language, it looks like Haskell – that is, almost nothing like JavaScript.

Whereas JavaScript is full of parentheses and curly braces:

```javascript
const greeting = sayHello("Kevin");

function sayHello(name) {
  if (name == "Kevin") {
    return "Hi, Kev!";
  }
  return `Hello, ${name}.`;
}
```

Elm is considerably less cluttered:

```elm
greeting =
    sayHello "Kevin"

sayHello name =
    if name == "Kevin" then
        "Hi, Kev!"
    else
        "Hello, " ++ name ++ "."
```

Elm has simpler syntax because it's a simpler language, with many fewer features than JavaScript. That simplicity is a feature: Elm is designed not to give you rope enough to hang yourself.

One feature Elm _does_ have is a static type system. In the code sample above, Elm will infer and enforce that `sayHello` must be called with a `String` argument. You can also (and should) declare your functions' types to help Elm catch your mistakes where you make them:

```elm
greeting : String
greeting =
    sayHello "Kevin"

sayHello : String -> String
sayHello name =
    if name == "Kevin" then
        "Hi, Kev!"
    else
        "Hello, " ++ name ++ "."
```

Beyond this simple, functional, statically-typed language, Elm comes "batteries included" for building web apps, with virtual DOM rendering, managed state, effects, and subscriptions, and almost everything else you might need built in.

Elm is also famous for three things:

- Extremely helpful error messages in development.
- No errors at runtime.
- Very small JavaScript bundles.

Elm was invented by [Evan Czaplicki](https://twitter.com/evancz), and is the product of [10 years of his work](https://www.youtube.com/watch?v=Vexdf-Rd-AE), with occasional collaborators from the community, and sponsorship from companies like [NoRedInk](https://blog.noredink.com/post/136615783598/welcome-evan).

## What We Owe to Elm

Looking back on how Elm performed at Culture Amp, it very much delivered on its promises. Parts of our product built with Elm run error-free from their very first production deployment; engineers have joked that it's kind of eerie that launch day for a feature built with Elm is actually the end of the work. And apart from two backwards-incompatible releases over the years that required some migration effort (the first minor, the second a bit more significant), Elm itself has been so stable that we haven't really had to do any work to keep our dependencies up-to-date either (a significant burden in the NPM ecosystem).

Ironically, this stability has actually worked against us on several occasions, since by the time an Elm codebase needed any attention, it had been years since anyone looked at it, and the team that built it had often completely forgotten how it worked! Thankfully, Elm's simplicity makes code hard to over-complicate, so those forgotten codebases usually turned out to be pretty readable when someone needed to read them.

Apart from those technical quality attributes, Elm has also delivered some less tangible benefits: as a fast-growing startup in a competitive hiring market for Australian engineers, Elm helped us stand out. In Melbourne alone there were dozens of well-funded companies that would hire you to write JavaScript. Culture Amp was one of only a few that would let you code web UIs in a strongly-typed, functional programming language. Combined with a product mission that still lights me up eight years in, Elm has attracted some of our best engineers, who were intrigued to work at "the kind of place that would consider Elm."

This too can cut both ways. I got some excellent advice early in our Elm journey, that if the only reason an engineer wants to work for you is because of your tech stack, that may be a warning sign. Culture Amp therefore avoids hiring engineers who are purely technology-focused. As a product company, we seek to hire people who are mostly excited about our product and its mission, and who are happy to learn new things when necessary to progress that. When someone tells us in an interview they're excited about working here because they like functional programming (say), we count that as an indication they might not be a good fit. We have more than once chosen not to hire a candidate because of this mismatch of motivations, and there have been one or two occasions over the years where I wished we had held this line more strictly (for the engineer's sake as well as ours).

Overall, I'm pleased with Elm's impact on Culture Amp. Through a critical phase in its growth as a business, Elm enabled it to produce reliable, easy-to-maintain web apps, and attracted engineers interested in prioritising those outcomes even over following the crowd, and enabled our team to grow more successfully that it would have otherwise.

## Elm + React: Easy to Get Started, Hard to Sustain

Before it built web apps with Elm, Culture Amp had already begun to use [React][]. Elm is easy to try inside React: [an Elm app can run as a React component embedded in an React app](https://elm-lang.org/news/how-to-use-elm-at-work). You can try Elm as an experiment by writing (or re-writing) a small rectangle of your app's UI as an Elm app. If you like it, grow that rectangle until it fills the whole screen, then delete React. That was the pitch, anyway.

[React]: https://react.dev

Culture Amp was well on its way to doing this in 2018, when things started to get hard for the recently-formed Design System team. This team had to build and maintain a library of reusable user interface components and styles to save time and create consistency across a growing number of teams independently building features for the Culture Amp platform. Because some teams were building with React while others were building with Elm, Culture Amp's design system, [Kaizen](https://cultureamp.design/), needed to support both – at least until Elm could "fill the browser window", which still felt at least a couple of years away back then.

Our initial approach, which I spoke about in [Elm at Scale](https://www.youtube.com/watch?v=uQjivmLan0E), was to build our design system components as a pair of feature-equivalent implementations: one in Elm, the other in React. To hold the two together, both those implementations would import and use the same [CSS Module](https://github.com/css-modules/css-modules) (written in [Sass](https://sass-lang.com)). You can see an example of this in [our Button component (as of late 2021)](https://github.com/cultureamp/kaizen-design-system/tree/3ac2dd55af8348ddba67f1f5c4af619a82151fb4/draft-packages/button/KaizenDraft/Button), which includes a **Button.elm** and a **Button.tsx**, along with a single **styles.scss** file that is imported by both (thanks to [elm-css-modules-loader](https://github.com/cultureamp/elm-css-modules-loader), which I created for this purpose).

This approach was a big success at first. Teams who knew React were increasingly adopting Elm, and thus had the skills and confidence to contribute changes to both versions of a component to keep them in sync. But in 2018, that began to change.

A couple of teams, our most enthusiastic, early adopters of Elm, completed their migration away from React. Having worked hard to embrace Elm's nirvana of type-safe, pure functional programming, the last thing those teams wanted to do was break out their increasingly rusty React skills whenever they contributed a change to a design system component.

It became more and more difficult to keep both versions of a component in sync. That burden, increasingly, fell to the small Design System team. Component features added to a React component but not its Elm counterpart (or vice versa) piled up in their backlog, and gradually the two versions of a component became two components with overlapping feature sets. The single CSS module that was supposed to tie them together became an unhealthy mix of two components' styles in a single Sass module.

The pain this caused our Design System team was enough to push us to start experimenting with Web Components, to see if they might provide a better means to build a language-agnostic library of shared UI components.

## The Web Components Experiment

[Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) is a name used for a collection of browser technologies that together let you create modular, reusable components in JavaScript and use them just like native HTML elements. On the surface, Web Components seem tailor-made to solve the problem we had: needing components that could be used in both Elm and React apps.

We took a couple of runs at Web Components, and if maintaining multiple front end frameworks (Elm/React/Svelte/Angular/whatever) at Culture Amp was an inevitability, we might have persisted. As it was, Web Components are a low-level set of technologies that really demand their own framework to scale. In 2020, when we were exploring this in earnest, we liked the look of [Stencil](https://stenciljs.com) as a very React-like framework where you write JavaScript classes with `render` functions that return JSX. Here in 2023, [Lit](https://lit.dev) seems to be very much winning the race to become the de facto standard (although Stencil has a new team and a new major release out, so it's still worth a look).

Before committing to Web Components, we ran an ambitious experiment. We chose our most API-intensive component – [Title Block](https://cultureamp.design/components/title-block/), a very feature-rich component that composes many child components to create a very configurable header area at the top of our application's UI – and attempted to port it to Stencil.

It was during this experiment that I wrote the [Elm Output Target for Stencil](https://github.com/cultureamp/stencil-elm-output-target). If we went ahead with Stencil components in Kaizen, this plug-in would let us publish them both as TypeScript-typed React components and Elm-typed Elm modules. There were a few compromises I had to make in this project (because my code generator could not reasonably convert some complex TypeScript types into Elm types/decoders/encoders), but I'd say it was about 80% of the way there.

Title Block was already implemented in both React and Elm, but the design system engineer who was given the job to port it to Stencil took over a month to deliver an almost-feature-complete version, and no one was particularly happy with the API.

Because they need to be usable as static HTML tags, Web Components support a more limited API format than JavaScript view frameworks. Both our Elm and React engineers were used to passing rich data types into components, like records/objects as configuration, or functions as [render props](https://reactjs.org/docs/render-props.html). Web Components mostly confine you to passing components HTML attributes (text strings) and wiring up functions as event listeners. You _can_ call methods and set JavaScript properties on a Web Component's DOM node once it has mounted in the document, but wiring up essential component configuration after an initial render (and possible re-rendering of the DOM tree) is quite messy in both React and Elm.

If you choose to use [Shadow DOM](https://stenciljs.com/docs/styling#shadow-dom) (and at first glance this seems like a very attractive prospect: enforced DOM and style encapsulation at the component level – awesome!), that pretty much means you're going to have to adopt whatever CSS solution your web components framework (like Stencil) provides. You can't just use your favourite CSS tooling to contribute component styles to your application's CSS bundle, because those "light DOM" styles won't apply to components rendered inside the shadow DOM. For example, in our Title Block component that rendered a number of Button and Menu components, the styles for Button and Menu won't reach those rendered child components unless your framework is mounting the stylesheet for each component inside its shadow DOM (which is hiding inside Title Block's shadow DOM). Frameworks like Stencil have nice CSS support that handles all this per-component stylesheet loading for you, but it's one more way this would pull our engineers away from their familiar tooling when building design system components.

In the end, our experiment revealed Web Components (even with a nice framework around them) to be different enough from both React and Elm that using them meant effectively adding a _third_ view framework to our tech stack, with its own foibles, limitations, learning curve and maintenance burden. Far from reducing the barrier to teams contributing to our design system, Web Components would increase it. This would likely compound the challenge we wanted to solve: that teams were beginning to assume that only the engineers in the small Design System team could make changes to our shared components, which put that team on the critical path of almost every UI project in the company.

Ultimately we decided that, based on what we learned from this experiment, we preferred not to move forward with Stencil and Web Components.

## Critical Mass

It seemed we were faced with a choice: Elm or React. Continuing to support both was fast becoming unsustainable for us.

The thing that ultimately tipped the balance in React's favour for us was that we [acquired another company](https://www.cultureamp.com/blog/culture-amp-acquires-zugata) whose entire codebase was written in React, and whose team knew nothing about Elm. Overnight, we went from a company that was writing about equal amounts of Elm and React (and which might well have decided to double down on Elm) to one that was writing about 75% React.

By that time, TypeScript had grown to be capable enough (and developer-friendly enough) to balance much of what sold us on Elm originally: a usable type system, good-enough error messages, etc. React had baked in some more useful state management primitives that roughly matched Elm's "batteries included" state management.

Around this same time the momentum around Elm's own development and that of its tooling was losing steam. Elm was no longer aiming to ["be mainstream!"](https://www.youtube.com/watch?v=oYk8CKH7OhE), or at least efforts to realise this vision (e.g. a language server and editor integrations, static and server rendering, CSS integration, automated test and localisation tooling) were not core language features but community projects, moving slowly. We frequently encountered tooling issues that were unique to our codebases or build environments, and had to contribute fixes for these ourselves. Culture Amp is a medium-sized tech company that can afford to contribute back to the open source ecosystem it depends upon, but in Elm's case it was beginning to feel like we would have to contribute more than we would get back to make it work well for us.

Considering all of this, and feeling a bit of healthy pressure from my CTO to find economies of scale as Culture Amp crossed the threshold of 100 engineers contributing to the product, I could see that Culture Amp could only justify a single front end application framework – and momentum was not on Elm's side.

Internally, the writing was on the wall too. The breaking changes of Elm 0.18 → 0.19 were not unreasonable, and yet it took a small group of volunteers across multiple teams about a year to do it (and ultimately I spent a month of my own free time getting the last bits and pieces over the line). When no one is finding the time and motivation to keep a technology healthy in your stack, you can infer how people feel about it.

## Making the Change

As I recognised the decision to be made, I made a list of the engineers I knew were most passionate about Elm in our company. They were the ones who joined us because they met us at an Elm meetup, or who volunteered to pair with engineers when they were stuck on an Elm problem. They were the tech leads of teams that still shipped new features in Elm every day. It was a list of about 6 people. I scheduled a 1-on-1 with each to them to talk about the challenge of making Elm successful at Culture Amp, and the feeling I had that it might be time to retire it as a choice for new projects.

Culture Amp's engineering leadership maintains an internal "Tech Radar" that lists technologies in four categories: "adopt", "experiment", "contain", and "hold." I let these engineers know that I was thinking about moving Elm from "adopt" to "contain", I asked them what they thought, and I listened.

Here's the definition we have for "contain" if you're curious:

> Either this technology has been approved only for a very specific context or use case, or we believe there are better “adopt” choices for most new projects. Teams that own assets built using these technologies must still support them and may even need to extend them.

Every single one of them said they understood and agreed with the decision. The ones who owned active Elm codebases offered constructive suggestions as to how we might mitigate the impact on them (for example, one suggested they could move all the Elm components from the design system into their repository, effectively creating a fork that they would maintain for the lifespan of their codebase).

The conversations felt good, and honest. Nobody quit over it (at least not right away), or even seemed to want to. In part, I credit that to the hiring approach that I mentioned above (avoid engineers who who are purely technology-focused).

Once all those conversations were done, I sat down and wrote a request for feedback in our front end engineering practice channel:

> Request for feedback: Elm at Culture Amp
>
> Hi @practice_front_end_eng! Over the past few weeks, I’ve had several conversations with the engineers who have most used and advocated for Elm as a part of our technology mix in front end engineering at Culture Amp, about whether or not we should continue to choose it for new projects.
>
> As a reminder of where we have stood on this question, see "How to choose between Elm and React" on Confluence. With few exceptions in recent build cycles (most notably in #team_ted, which has been doing great work in Elm outside of our monoliths lately), when trusted to make the right decision for them and for Culture Amp, most of our teams and camps have been selecting React in TypeScript for new projects.
>
> Given this trend, and the need to find ways to do “less but better”, I am close to a decision that would see Elm’s status on our Front End Technology List move from Adopt to Contain, which would mean that we would continue to maintain and add features to existing Elm codebases, but we would avoid selecting it for new projects in order to more efficiently pool our collective efforts to ensure the health and sustainability of our React/TypeScript codebases, and even create room to experiment with future emergent languages/frameworks.
>
> Before I finalise this decision, I want to give all engineers an opportunity to reach out to me with feedback. Do you enjoy working with Elm and want to have the freedom to continue to use it for new projects? Is Elm something you have yet to try, but would like to because you think it might improve the way your team builds user interfaces? Even if you don’t consider yourself a front end engineer, if you have feedback for me I’d like to hear it – let’s say by the end of this week (16 October).
>
> Thanks, Campers!

A couple of engineers chimed in with their thoughts. [Louis Quinnell](https://ziorobo.co) from our Front End Foundations team posted this deep and thoughtful analysis of the benefits of Elm, and why we weren't feeling them at Culture Amp:

> I think Elm is great. It’s the reason I became interested in Culture Amp — I first contacted @kevin over the Elm slack!
>
> I discovered Elm while I was working at a software agency, where the nature of the work involved lots of context switching. Projects would come and go — usually with a stack of initial work, then several rounds of changes, a maintenance contract, and sometimes new budget for further work. At any point in time, we would simultaneously be at different stages in this process with a handful of clients.
>
> We needed to be able to efficiently context switch. We had to drop new people onto older projects and have them quickly make changes, without worrying that things would fall over due to lack of familiarity with that codebase.
>
> We solved this in part by standardising on patterns and static analysis — for example, we adopted typescript, with very high strictness — and this got us a long way.
>
> However, we eventually encountered creeping “javascript fatigue”: the tools we were using to solve our maintenance burden were themselves creating a maintenance burden!
>
> Elm was able to solve this by enforcing all of those nice patterns and compiler goodness with a single dependency. I didn’t get to use it in anger before Culture Amp, but if I was starting again, I would still consider something like Elm for exactly the reasons above, and I don’t think that Culture Amp’s needs are so different…
>
> … except that Elm is really designed to be your whole front end stack.
>
> We have gotten around this fact by investing in tools (i.e. super cool hacks) which allow Elm to integrate with our blended stack. But there are some consequences to using Elm in this way:
>
> Firstly, we only have the confidence of Elm in some places, and whether or not you will end up in an Elm codebase can be a bit of a lucky dip (or unlucky, depending on how you feel about it).
>
> And secondly, we don’t get to use Elm as our single dependency — it is actually just one more (big) piece of complexity for the rest of our tools and code to consider.
>
> This means that we don’t see the benefits of Elm _either_ as a low-maintenance front end stack, nor as a way to guarantee consistent low-cost context switching.
>
> Therefore, I’d support a decision to contain Elm. I have other reasons, but this is the crux of it!

At the end of the day, there were no objections.

I updated Elm's status in our tech radar with this description:

> Was a growing part of Culture Amp's front end stack 2016-2020, and was particularly welcome before we had access to TypeScript as a strong and relatively usable type system. Since the acquisition of Zugata and the large performance-ui codebase, however, and the maturing of React and TypeScript, we believe that choosing a single language and framework (React) for new projects is the best path for Culture Amp, as it will buy us economies of scale within the front end practice. Codebases written in Elm will continue to need to be maintained and in some cases grown, but when we have a blank slate available to us, Elm is no longer an approved choice.

## This is What Success (Sometimes) Looks Like

Although we have often praised [Elm's pitch for gradual adoption](https://elm-lang.org/news/how-to-use-elm-at-work), one warning I would give to any teams looking to follow in our footsteps would be: if the momentum ever stalls and Elm no longer seems likely to fill the entire viewport, then you probably need to consider an exit strategy. The in-between place is not a sustainable one, unless you can afford a large investment in a design system team that is excited about maintaining parallel or framework-agnostic component implementations.

But looking back, I'm still glad that we used Elm at Culture Amp. Sure, without Elm, some things might have been easier. For one, we wouldn't still have two large-ish web apps written in Elm today, owned by teams that consider those codebases historical curiosities that will need a full rewrite someday.

But some things would have been harder, too: Culture Amp built the UI for its second product, [Culture Amp Effectiveness](https://www.cultureamp.com/resources/employee-experience/culture-amp-effectiveness) (a [360° review](https://www.cultureamp.com/blog/360-feedback-benefits) tool), entirely in Elm. With the tools available in the React ecosystem at the time, it would have taken longer to build that product, we would have shipped it with more bugs, and it would have cost us a lot more to maintain over the years.

And I can point to at least a dozen amazing engineers that we managed to hire, that it has been a highlight of my career to work with, that I probably never would have met had we not chosen a technology that helped us stand out from the crowd. There's something to be said for being "just weird enough".

Just because a relationship ends doesn't make it a failure. Our time with Elm as a preferred technology has simply run its course. At a certain point, success means learning to be just as good at ending things as you are at starting new ones. If you never let things go, you wind up stuck in the past.

<ins datetime="2025-02-27T16:20:10+11:00">Update Feb 27, 2025:</ins> Removed Neil Gaiman quote on endings.
