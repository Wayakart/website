module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("icons");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("preview.png"); // if present
  // If folders like media/ or Shop/ exist and should be served, also passthrough:
  // eleventyConfig.addPassthroughCopy("media");
  // eleventyConfig.addPassthroughCopy("Shop");
  return {
    dir: { input: ".", includes: "_includes", data: "_data", output: "_site" }
  };
};

