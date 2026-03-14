import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFile, stat, readdir } from "node:fs/promises";
import { XMLParser } from "fast-xml-parser";

const SITE_URL = "https://kevinyank.com";
const BUILD_DIR = "_site";

async function fileExists(path) {
  try {
    const s = await stat(`${BUILD_DIR}/${path}`);
    return s.isFile();
  } catch {
    return false;
  }
}

async function dirExists(path) {
  try {
    const s = await stat(`${BUILD_DIR}/${path}`);
    return s.isDirectory();
  } catch {
    return false;
  }
}

describe("static assets", () => {
  for (const file of [
    "robots.txt",
    "_headers",
    "_redirects",
    "assets/styles/styles.css",
    "404.html",
    "feed.xml",
  ]) {
    it(`${file} exists`, async () => {
      assert.ok(await fileExists(file), `Expected ${BUILD_DIR}/${file} to exist`);
    });
  }

  it(".well-known/ directory is non-empty", async () => {
    assert.ok(await dirExists(".well-known"), `Expected ${BUILD_DIR}/.well-known/ to exist`);
    const entries = await readdir(`${BUILD_DIR}/.well-known`);
    assert.ok(entries.length > 0, `Expected ${BUILD_DIR}/.well-known/ to be non-empty`);
  });
});

describe("key pages", () => {
  for (const file of [
    "index.html",
    "blog/index.html",
    "notes/index.html",
    "about/index.html",
  ]) {
    it(`${file} exists`, async () => {
      assert.ok(await fileExists(file), `Expected ${BUILD_DIR}/${file} to exist`);
    });
  }
});

describe("pagination", () => {
  it("blog page 50 exists", async () => {
    assert.ok(
      await fileExists("blog/page/50/index.html"),
      `Expected ${BUILD_DIR}/blog/page/50/index.html to exist`,
    );
  });

  it("notes page 5 exists", async () => {
    assert.ok(
      await fileExists("notes/page/5/index.html"),
      `Expected ${BUILD_DIR}/notes/page/5/index.html to exist`,
    );
  });
});

describe("tag pages", () => {
  it("tags/apple/index.html exists", async () => {
    assert.ok(
      await fileExists("tags/apple/index.html"),
      `Expected ${BUILD_DIR}/tags/apple/index.html to exist`,
    );
  });

  it("tags/apple/page/2/index.html exists", async () => {
    assert.ok(
      await fileExists("tags/apple/page/2/index.html"),
      `Expected ${BUILD_DIR}/tags/apple/page/2/index.html to exist`,
    );
  });
});

describe("RSS feed integrity", () => {
  let feed;

  it("feed.xml parses as valid XML", async () => {
    const xml = await readFile(`${BUILD_DIR}/feed.xml`, "utf-8");
    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_" });
    feed = parser.parse(xml);
    assert.ok(feed, "Expected feed.xml to parse successfully");
  });

  it("has <rss> root with <channel>", () => {
    assert.ok(feed?.rss?.channel, "Expected <rss><channel> structure");
  });

  it("channel has <title>", () => {
    assert.ok(feed.rss.channel.title, "Expected <channel><title>");
  });

  it("channel has <description>", () => {
    assert.ok(feed.rss.channel.description, "Expected <channel><description>");
  });

  it("channel has <link>", () => {
    assert.ok(feed.rss.channel.link, "Expected <channel><link>");
  });

  it("channel has atom:link self pointing to feed URL", () => {
    const atomLink = feed.rss.channel["atom:link"];
    assert.ok(atomLink, "Expected <atom:link>");
    assert.equal(
      atomLink["@_rel"],
      "self",
      "Expected atom:link rel=self",
    );
    assert.equal(
      atomLink["@_href"],
      `${SITE_URL}/feed.xml`,
      `Expected atom:link href to be ${SITE_URL}/feed.xml`,
    );
  });

  it("has at least one <item>", () => {
    const items = [].concat(feed.rss.channel.item ?? []);
    assert.ok(items.length > 0, "Expected at least one <item>");
  });

  it("each <item> has title, link, guid, pubDate, description", () => {
    const items = [].concat(feed.rss.channel.item ?? []);
    for (const item of items) {
      assert.ok(item.title, "Expected item <title>");
      assert.ok(item.link, "Expected item <link>");
      assert.ok(item.guid, "Expected item <guid>");
      assert.ok(item.pubDate, "Expected item <pubDate>");
      assert.ok(item.description, "Expected item <description>");
    }
  });

  it("item URLs use correct domain", () => {
    const items = [].concat(feed.rss.channel.item ?? []);
    for (const item of items) {
      assert.ok(
        String(item.link).startsWith(SITE_URL),
        `Expected item link to start with ${SITE_URL}, got: ${item.link}`,
      );
    }
  });
});
