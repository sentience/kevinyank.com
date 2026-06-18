# Project Instructions

## Node.js / npm via devbox

Node.js is managed through [devbox](https://www.jetify.com/devbox). Before running `node`, `npm`, `npx`, or any other Node-based tool in a shell session, load the devbox environment from the repository root with:

`eval "$(devbox shellenv)"`

After that, run Node-based commands directly in that same shell session.

## Lockfile safety

This repo uses plain `npm ci` in CI. Do not use `--legacy-peer-deps` or `--force`
when running `npm install`, `npm update`, or other commands that modify
`package-lock.json` unless the user explicitly asks for that behavior.

If npm reports peer dependency resolution errors while updating dependencies,
prefer one of these approaches instead:

- adjust the dependency change so plain npm resolution succeeds
- run `npm install --package-lock-only` with the normal resolver
- stop and explain the peer conflict rather than writing a lockfile that needs
  non-default npm flags
