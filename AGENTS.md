# Project Instructions

## Node.js / npm via devbox

Node.js is managed through [devbox](https://www.jetify.com/devbox). All Node and npm commands must be prefixed with `devbox run --` to run in the devbox environment.

**Do not run Node/npm commands directly.** For example:

| Instead of | Use |
|---|---|
| `node script.js` | `devbox run -- node script.js` |
| `npm install` | `devbox run -- npm install` |
| `npm install --save-dev @playwright/test` | `devbox run -- npm install --save-dev @playwright/test` |
| `npm run build` | `devbox run -- npm run build` |
| `npx playwright test` | `devbox run -- npx playwright test` |

This applies to all shell commands involving `node`, `npm`, `npx`, and any other Node-based tools.
