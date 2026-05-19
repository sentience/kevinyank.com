import { test } from "@chromatic-com/playwright";

const exemplarPages = [
  {
    name: "Homepage",
    url: "/",
  },
  {
    name: "Blog post with feature image and code blocks",
    url: "/posts/on-endings-why-how-we-retired-elm-at-culture-amp/",
    waitFor: [
      (page) => page.locator("iframe[src*='LZj_1qVURL0']").contentFrame().getByText("Elm in Production: Surprises & Pain Points"),
      (page) => page.locator("iframe[src*='kuOCx0QeQ5c']").contentFrame().getByText("Developer Happiness on the Front End with Elm"),
      (page) => page.locator("iframe[src*='uQjivmLan0E']").contentFrame().getByText("Elm at Scale: More Surprises, More Pain Points"),
    ]
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
];

for (const { name, url, waitFor = [] } of exemplarPages) {
  test.describe(name, () => {
    test(`${name} — desktop`, async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto(url);
      await Promise.all(waitFor.map((fn) => fn(page)));
    });

    test(`${name} — desktop (dark)`, async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto(url + "?theme=dark");
      await Promise.all(waitFor.map((fn) => fn(page)));
    });

    test(`${name} — mobile`, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(url);
      await Promise.all(waitFor.map((fn) => fn(page)));
    });

    test(`${name} — mobile (dark)`, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(url + "?theme=dark");
      await Promise.all(waitFor.map((fn) => fn(page)));
    });
  });
}
