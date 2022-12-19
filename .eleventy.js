module.exports = (eleventyConfig) => {
  setUpLiquid(eleventyConfig);
  setUpMarkdown(eleventyConfig);

  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addPlugin(require("eleventy-xml-plugin"));
  eleventyConfig.addPlugin(
    require("@mightyplow/eleventy-plugin-cache-buster")({})
  );

  return {
    dir: {
      layouts: "_layouts",
    },
  };
};

function setUpLiquid(eleventyConfig) {
  // Support unquoted filenames and a=b arguments in include tags like Jekyll
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    jekyllInclude: true,
  });

  // Implement Jekyll's post_url tag
  // Usage: {% post_url post-filename-without-extension %}
  eleventyConfig.addLiquidTag("post_url", function (liquidEngine) {
    return {
      parse: function (tagToken, remainingTokens) {
        this.str = tagToken.args; // post-filename-without-extension
      },
      render: async function (context) {
        const postFilenameWithoutExtension = `./_posts/${this.str}`;
        const posts = context.environments.collections.post;
        const post = posts.find((p) =>
          p.inputPath.startsWith(postFilenameWithoutExtension)
        );
        if (post === undefined) {
          throw new Error(`${this.str} not found in posts collection.`);
        } else {
          return post.url;
        }
      },
    };
  });
}

function setUpMarkdown(eleventyConfig) {
  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    typographer: true,
  };
  eleventyConfig.setLibrary("md", markdownIt(options));
}
