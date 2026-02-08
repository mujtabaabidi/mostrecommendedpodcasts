module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Add collections
  eleventyConfig.addCollection("people", function(collectionApi) {
    return collectionApi.getAll().filter(item => item.data.layout === "person");
  });
  
  eleventyConfig.addCollection("topics", function(collectionApi) {
    return collectionApi.getAll().filter(item => item.data.layout === "topic");
  });
  
  eleventyConfig.addCollection("lists", function(collectionApi) {
    return collectionApi.getAll().filter(item => item.data.layout === "list");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["html", "md", "njk"],
    htmlTemplateEngine: "njk"
  };
};
