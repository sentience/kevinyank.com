import {
  EleventyRenderPlugin,
  InputPathToUrlTransformPlugin,
} from "@11ty/eleventy";
import eleventyPluginRSS from "@11ty/eleventy-plugin-rss";
import eleventyPluginTimeToRead from "eleventy-plugin-time-to-read";
import highlightJs from "highlight.js";
import markdownItAnchor from "markdown-it-anchor";
import MarkdownIt from "markdown-it";
import filters from "./lib/filters.js";

/** @param { import("@11ty/eleventy/src/UserConfig.js") } eleventyConfig */
export default function (eleventyConfig) {
  setUpLiquid(eleventyConfig);
  setUpMarkdown(eleventyConfig);
  setUpCollections(eleventyConfig);

  ignoreDeleted(eleventyConfig);
  ignoreDrafts(eleventyConfig);

  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("_headers");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy(".well-known");
  eleventyConfig.addPassthroughCopy("assets/files");
  eleventyConfig.addPassthroughCopy("assets/images");
  eleventyConfig.addPassthroughCopy("assets/scripts");
  eleventyConfig.addPassthroughCopy("assets/videos");
  eleventyConfig.addPassthroughCopy("assets/wp-content");
  eleventyConfig.addPassthroughCopy({
    "_tmp/styles.css": "assets/styles/styles.css",
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/seamless-scroll-polyfill/lib/bundle.min.cjs":
      "assets/scripts/seamless-scroll-polyfill/bundle.min.js",
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/seamless-scroll-polyfill/lib/bundle.min.cjs.map":
      "assets/scripts/seamless-scroll-polyfill/bundle.min.cjs.map",
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/highlight.js/styles/github.css":
      "assets/styles/highlight.js/github.css",
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/highlight.js/styles/github-dark.css":
      "assets/styles/highlight.js/github-dark.css",
  });

  eleventyConfig.addPlugin(eleventyPluginRSS);
  eleventyConfig.addPlugin(eleventyPluginTimeToRead);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

  return {
    dir: {
      layouts: "_layouts",
    },
  };
}

function setUpLiquid(eleventyConfig) {
  // Support unquoted filenames and a=b arguments in include tags like Jekyll
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    jekyllInclude: true,
    orderedFilterParameters: true,
  });

  // Import all filters in /lib/filters/index.js
  Object.keys(filters).forEach((filter) =>
    eleventyConfig.addFilter(filter, filters[filter]),
  );
}

function setUpMarkdown(eleventyConfig) {
  const anchor = markdownItAnchor;
  const hljs = highlightJs;

  let markdownIt = MarkdownIt({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value;
        } catch (__) {}
      }

      return ""; // use external default escaping
    },
    html: true,
    typographer: true,
  });
  markdownIt.use(anchor, {
    permalink: anchor.permalink.linkAfterHeader({
      class: "heading-anchor",
      style: "visually-hidden",
      assistiveText: (title) => `Permalink to
      ${title}`,
      visuallyHiddenClass: "sr-only",
      wrapper: ['<div class="heading-wrapper">', "</div>"],
    }),
  });
  eleventyConfig.setLibrary("md", markdownIt);
}

function setUpCollections(eleventyConfig) {
  addPaginatedTagsCollection(eleventyConfig);
}

// Based on https://github.com/11ty/eleventy/issues/332#issuecomment-445236776
function addPaginatedTagsCollection(eleventyConfig) {
  eleventyConfig.addCollection("tagPages", function (collections) {
    let allTags = new Set();
    collections.getAllSorted().forEach(function (item) {
      item.data.tags?.forEach((tag) => allTags.add(tag));
    });

    // Remove content classes
    allTags.delete("note");
    allTags.delete("post");

    // Get each item that matches the tag
    let paginationSize = 5;
    let tagMap = [];
    let tagArray = [...allTags];
    for (let tagName of tagArray) {
      let tagItems = collections.getFilteredByTag(tagName).reverse();
      let pagedItems = chunkArray(tagItems, paginationSize);
      for (
        let pageNumber = 0, max = pagedItems.length;
        pageNumber < max;
        pageNumber++
      ) {
        tagMap.push({
          tagName: tagName,
          pageNumber: pageNumber,
          pageData: pagedItems[pageNumber],
          pageCount: max,
        });
      }
    }

    /* return data looks like:
      [{
        tagName: "tag1",
        pageNumber: 0
        pageData: [] // array of items
      },{
        tagName: "tag1",
        pageNumber: 1
        pageData: [] // array of items
      },{
        tagName: "tag1",
        pageNumber: 2
        pageData: [] // array of items
      },{
        tagName: "tag2",
        pageNumber: 0
        pageData: [] // array of items
      }]
     */
    return tagMap;
  });
}

function ignoreDrafts(eleventyConfig) {
  eleventyConfig.addPreprocessor("drafts", "njk,md,liquid", (data, content) => {
    if (
      process.env.ELEVENTY_ENV === "production" &&
      (data.draft === true || data.published === false)
    ) {
      // Ignore this file
      return false;
    }
  });
}

function ignoreDeleted(eleventyConfig) {
  eleventyConfig.addPreprocessor(
    "deleted",
    "njk,md,liquid",
    (data, content) => {
      if (data.deleted) {
        // Ignore this file
        return false;
      }
    },
  );
}

function chunkArray(arr, chunkSize) {
  const chunks = [];
  let arrRemaining = [...arr];
  while (arrRemaining.length > 0) {
    chunks.push(arrRemaining.slice(0, chunkSize));
    arrRemaining = arrRemaining.slice(chunkSize);
  }
  return chunks;
}
