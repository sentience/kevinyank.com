import { test } from "@chromatic-com/playwright";

const exemplarPages = [
  {
    name: "Homepage",
    url: "/",
  },
  {
    name: "Blog post with feature image and code blocks",
    url: "/posts/on-endings-why-how-we-retired-elm-at-culture-amp/",
  },
  {
    name: "Blog list",
    url: "/blog/",
  },
  {
    name: "Notes list",
    url: "/notes/",
  },
  {
    name: "About",
    url: "/about/",
  },
]

for (const { name, url } of exemplarPages) {
  test.describe(name, () => {
    test(`${name} — desktop`, async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await mockYouTubeEmbeds(page);
      await page.goto(url);
    });

    test(`${name} — desktop (dark)`, async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await mockYouTubeEmbeds(page);
      await page.goto(url + "?theme=dark");
    });

    test(`${name} — mobile`, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await mockYouTubeEmbeds(page);
      await page.goto(url);
    });

    test(`${name} — mobile (dark)`, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await mockYouTubeEmbeds(page);
      await page.goto(url + "?theme=dark");
    });
  });
}

async function mockYouTubeEmbeds(page) {
  await page.route("https://www.youtube-nocookie.com/embed/**", async (route) => {
    const url = new URL(route.request().url());
    const videoId = url.pathname.split("/").pop();

    await route.fulfill({
      contentType: "text/html",
      body: `<!doctype html>
        <html lang="en">
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <style>
              body {
                margin: 0;
                min-height: 100vh;
                display: grid;
                place-items: center;
                background:
                  radial-gradient(circle at top, #3b82f6, transparent 55%),
                  linear-gradient(135deg, #111827, #030712);
                color: #f9fafb;
                font: 600 24px/1.4 system-ui, sans-serif;
              }

              .card {
                padding: 1.5rem 2rem;
                border: 1px solid rgba(255, 255, 255, 0.18);
                border-radius: 1rem;
                background: rgba(17, 24, 39, 0.72);
                text-align: center;
                box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
              }

              .label {
                display: block;
                font-size: 0.875rem;
                font-weight: 500;
                letter-spacing: 0.08em;
                text-transform: uppercase;
                opacity: 0.8;
              }
            </style>
          </head>
          <body>
            <div class="card">
              <span class="label">Embedded video</span>
              <div>${videoId}</div>
            </div>
          </body>
        </html>`,
    });
  });
}
