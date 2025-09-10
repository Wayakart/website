module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("icons");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("preview.png");
  return {
    dir: { input: ".", includes: "_includes", data: "_data", output: "_site" }
  };
};
