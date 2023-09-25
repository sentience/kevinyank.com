---
date: 2023-09-25T10:58:34+10:00
title: "useEffect vs useLayoutEffect and server-side rendering"
author: Kevin Yank
tags:
    - web development
    - Culture Amp
    - react
excerpt:
  Why React prints an ugly warning when you call useLayoutEffect on the server,
  and what to do about it.
---

Today I learned
the difference between [`useEffect`][useEffect] and [`useLayoutEffect`][useLayoutEffect] in React,
and why the second one prints an ugly warning during server-side rendering.

```js
useEffect(() => {
  /* non-paint-blocking effect */
}, [ /* dependencies */ ])
```

```js
useLayoutEffect(() => {
  /* paint-blocking effect */
}, [ /* dependencies */ ])
```

`useEffect` and `useLayoutEffect` are basically
the "async" and "sync" versions of the same hook;
otherwise, they behave identically.
`useEffect` runs in the background asynchronously
while the render where its dependencies changed is allowed to render and paint
for the user to see,
whereas `useLayoutEffect`
blocks the render where the dependencies' values changed
from being painted to the screen
until after the body of `useLayoutEffect` runs
(and presumably tweaks the DOM in some way).

Until today we were using `useLayoutEffect` to perform a redirect in a new app:


```jsx
import { routes } from "routes"
import { useCurrentUser } from "src/context"
import { useLayoutEffect } from "react"
import { useRouter } from "next/router"

export default function Redirect() {
  const user = useCurrentUser()
  const router = useRouter()

  useLayoutEffect(() => {
    if (!user) {
      return
    }
    router.replace(routes.index({ accountId: user?.account_id.toString() }))
  }, [user, router])
}
```

Since we're going to redirect the browser anyway,
it makes sense to save it the trouble of
painting the initial render to the screen, right?
Not when we there is server-side rendering in the mix!
When a `useLayoutEffect` is encountered by React running on the server, it displays an ugly warning:

> Warning: useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format.

In fact, _neither_ `useEffect` nor `useLayoutEffect` can have any effect
on the server-rendered output that gets sent to the browser
(since there is no actual DOM for these effects to tweak),
but this warning is emitted only for `useLayoutEffect` because
it is usually used to do something to the DOM
before the user gets to see the rendered component.
Server-rendering will cause that "untweaked" version of the rendered output
to be sent to the browser and shown to the user
before the client-side app fires up and runs the `useLayoutEffect` to tweak it.
So React is warning us that the user may see an ugly/broken version of the UI
that we don't want them to see.

## What's `useLayoutEffect` good for?

When I shared this internally at Culture Amp, several people remarked that
they couldn't think of any real use cases for `useLayoutEffect`.
They are indeed rare – more so every year as CSS grows more and more capable –
but here's a semi-contrived example:

Let's say you wanted to let the browser lay out
the "natural" height of a `div` based on its content,
and then use JavaScript to animate it from zero to that "natural" height,
so it appeared to grow vertically from its top edge,
revealing its content as it went.

You wouldn't want the user to see a "flash" of the full-height `div`
before you set its height back to zero for the start of the animation.
`useEffect` would display that flash,
whereas `useLayoutEffect` would let you inspect the height of the rendered `div`
and then adjust it before the user got to see it.

In this case, the warning from React would be telling us that
the user would see the flash,
because the full-height `div` is getting rendered on the server,
and the height tweak won't be applied by `useLayoutEffect`
until the JavaScript starts up on the client –
long after the user got to see the server-rendered version of the page.

[The example given in the official docs](https://react.dev/reference/react/useLayoutEffect#measuring-layout-before-the-browser-repaints-the-screen)
is also good: it involves calculating the position of a tooltip based on
the rendered dimensions of the element to which it is attached.

## See also:

* [A good short video](https://www.youtube.com/watch?v=pHxQtHwcT-s) demonstrating the difference between useEffect and useLayoutEffect.
* [A good gist](https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85) that explains the SSR issue and two available workarounds.

[useEffect]: https://react.dev/reference/react/useEffect
[useLayoutEffect]: https://react.dev/reference/react/useLayoutEffect
