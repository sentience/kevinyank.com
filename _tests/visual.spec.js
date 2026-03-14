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
];

for (const { name, url } of exemplarPages) {
  test.describe(name, () => {
    test(`${name} — desktop`, async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto(url);
    });

    test(`${name} — mobile`, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(url);
    });
  });
}
