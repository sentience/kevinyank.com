---
title: Assume ChatGPT is Lying
date: 2023-03-28T20:18:12+11:00
tags:
  - tech
  - impro
excerpt: In an industry where expertise is currency, a tool that lets us all pretend to be experts to each other is very dangerous indeed.
featured: true
featureImg: /assets/images/blog/assume-chatgpt-is-lying/rock-n-roll-monkey-R4WCbazrD1g-unsplash-1152.jpg
featureImgAlt: A confused-looking toy robot
---

{% render figure,
  src: "/assets/images/blog/assume-chatgpt-is-lying/rock-n-roll-monkey-R4WCbazrD1g-unsplash.jpg",
  alt: "A confused-looking toy robot",
  caption: "Photo by <a href='https://unsplash.com/@rocknrollmonkey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Rock'n Roll Monkey</a> on <a href='https://unsplash.com/photos/R4WCbazrD1g?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
%}

Seemingly every digital product I use is adding features powered by a large language model (LLM). [The latest is Rewind.ai](https://www.rewind.ai/chatgpt-for-me), an app I love that records everything that appears on my Mac's screen and indexes it for local searching.

At the same time, the software industry seems to be falling over itself to automate away the grunt work of writing code, or communicating between people who write code.

{%liquid
  assign note = collections.note | findBySlug: 'x1xjd'
  render embedded-note, note: note
%}

I shudder to think how many of these are already slipping past code reviews straight into production every day. In an industry where expertise is currency, a tool that lets us all pretend to be experts to each other is very dangerous indeed.

{%liquid
  assign note = collections.note | findBySlug: 'gkpmo'
  render embedded-note, note: note
%}

If we can figure out how to use it safely and responsibly, LLM and other ML technology can be an incredible tool, not least for accessibility! A colleague with ADHD and Autism remarked to me that ChatGPT can provide executive function, helping to break large tasks down into smaller ones, or providing a starting point for a task they might otherwise avoid.

Wary of being the curmudgeon complaining my way into irrelevance (or worse, gate-keeping a technology that can make our industry more inclusive), I sat down this evening to give ChatGPT "a fair shake". I started by asking it a real question I'm facing: "How much water storage do I need to water a medium-sized lawn in Melbourne from collected rain water?"

The answer it provided was instantly seductive:

> The amount of rainwater storage needed to water a medium-sized lawn in Melbourne depends on various factors, such as the size of the lawn, the type of plants, the climate, and the frequency of watering. As an AI language model, I do not have access to the specific dimensions of your lawn. However, I can provide you with some general guidelines based on an average-sized lawn in Melbourne.
>
> In general, a medium-sized lawn (around 300 square meters) in Melbourne requires between 500 and 1000 liters of water per week during the summer months (December to February). Assuming an average rainfall of 50mm per week during the summer in Melbourne and a rainwater harvesting efficiency of 85%, one would need between 6000 and 12,000 liters of rainwater storage to water a medium-sized lawn solely from collected rainwater during the summer months.
>
> Of course, depending on the climate, seasonal variations, and the amount of rainfall, the amount of water required may increase or decrease, so it is always worth checking the weather and adapting your watering practices accordingly. Additionally, water conservation strategies such as using drought-resistant plants, mulching, and reducing irrigation frequency can help to reduce water usage and increase the efficiency of your rainwater harvesting system.

The equivocation at the start of the answer especially sells it. It acknowledges that it may not be completely reliable, calls out some specific limitations it has, then wades in. "Those are reasonable constraints," you are led to believe. "I can trust the advice in that context."

And who knows? I'm not yet an expert in sustainable garden irrigation. This advice could be completely right. I don't actually know.

To help me judge its trustworthiness, I decided to ask it another question, one that I definitely knew the answer to, but which I'd expect a language model trained on a large corpus of Internet content to have a reasonable chance at answering correctly.

I will soon be directing a season of Superscene for [Impro Melbourne](https://www.impromelbourne.com.au). Superscene is far from the most popular improvised theatre format, but it has been performed by theatre companies around the world for more than a decade. The form has been documented on several public websites for years ([Impro Melbourne](https://www.impromelbourne.com.au/blog/2015/02/super-scene-gorilla-theatre-turned-up-to-eleven), [Improwiki](https://improwiki.com/en/wiki/improv/superscene), [Dad's Garage](https://www.dadsgarage.com/superscene)). If you approached ChatGPT expecting it to be as "knowledgeable" as your average web search engine, you would expect to get the right answer.

And you would be misled:

> **You:**
>
> Describe the improvised theatre format, Superscene.
>
> **ChatGPT:**
>
> As an AI language model, I don't have personal experience or memories. However, I can explain the format of Superscene based on research.
>
> Superscene is an improvised theatre format that is designed to create an interconnected series of scenes that revolve around a central theme. The format is usually performed by a team of improvisers or by a cast of several actors.
>
> The Superscene format is typically structured around multiple scenes that are performed simultaneously on stage. Each of these scenes is designed to showcase different aspects of the central theme, with characters and storylines intersecting and intertwining as the performance progresses.
>
> The format typically follows a simple structure. The improvisers or actors choose a central theme, which is then used to inspire a series of individual scenes. Each scene is given a definitive start and end point, with a clear storyline and set of characters. As each scene comes to a close, the performers may then use a live editing tool or other improvisation techniques to seamlessly transition into the next scene.
>
> The Superscene format is known for its fast-paced and energetic style, often featuring multiple actors and storylines unfolding simultaneously on stage. It requires a high degree of collaboration and communication between performers, as well as an ability to think creatively and adapt quickly to changing situations.

Again, that acknowledgement up front of its limitations. "Research", you say? Sounds good to me. Research is exactly what I would have to do myself if I had to find this answer, so it sounds like ChatGPT is about to save me the trouble!

But then the description it provides is a complete fabrication. What it describes is certainly an improvised theatre format; it's even plausible that it could be titled "Superscene", but beyond that there is nothing here that is remotely accurate.

Superscene, if you're wondering, is a show in which 4-5 performers compete, each directing the others in a series of improvised scenes that tell a story. After each round of scenes (e.g. the first scene of each director's story), the directors each "pitch" the audience on why they should stay in the show, before the audience votes by applause to eliminate one of the directors. The last surviving director gets to direct the last scene in the show, the final scene of their story – the "superscene".

The scenes are not interconnected (except in that a single director's scenes tell a longer story). There is no central theme (in fact, directors are encouraged to create variety by choosing contrasting themes). Multiple scenes are not performed simultaneously.

The closest improvised theatre format I can think of to what ChatGPT described is [Harold](https://en.wikipedia.org/wiki/Harold_(improvisation)).

You may have heard that ChatGPT can respond to feedback, and correct itself. I think I've already made my point here – after all, you need to know enough about a subject to be able to question a response that is this plausible (and yet completely incorrect). Nevertheless, let's see how it does:

> **You:**
>
> That sounds more like Harold to me. Superscene does not involve scenes played simultaneously.
>
> **ChatGPT:**
>
> As an AI language model, I don't have a personal opinion, but you are right that the definition given does not match the standard definition of superscene. Superscene is actually a term used in film and theater to refer to a scene that encompasses several smaller scenes or moments that are all related to a central theme or idea. These smaller scenes may take place in different locations or involve different characters, but they are all connected by a common thread. So, a superscene may involve the use of multiple locations or perspectives, but they are not played back simultaneously.
>
> **You:**
>
> Okay, but I asked you to describe the improvised theatre format named Superscene, not the film or theatre term.
>
> **ChatGPT:**
>
> My apologies, Superscene is an improvised theatre format where multiple storylines are created and then woven together into a cohesive and satisfying ending. The show typically starts with a suggestion from the audience, and the performers will then create several scenes in different styles and genres. As the show progresses, the performers will find ways to connect the storylines and characters, eventually bringing everything together in a grand finale. Superscene requires high levels of improvisation skill, as performers must listen and react to each other's scenes, as well as the audience's reactions, to create a cohesive storyline.
>
> **You:**
>
> That still sounds like a Harold. Superscene involves multiple, competing directors, and stories are not normally woven together.
>
> **ChatGPT:**
>
> As an AI language model, I apologize for any confusion I may have caused. Yes, you are correct that superscene typically involves multiple directors and their individual storytelling without interweaving their stories. Thank you for clarifying that.

It's easy to get distracted by the magic trick, here. Ultimately, ChatGPT is not learning from its mistake: it's shifting the goalposts, changing the subject, and ultimately thanking you for correcting it (without actually learning anything – since it's not capable of that).

In many respects, ChatGPT is a simulation of a sociopath. Until someone fixes that, we must remember to treat it like one.
