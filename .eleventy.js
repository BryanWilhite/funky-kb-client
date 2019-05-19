module.exports = function(config) {
   
    config.addCollection('posts', collection => {
      return collection.getFilteredByGlob('posts/*.md');
    });

    config.addFilter("slice", require("./filters/slice.js"));
    config.addFilter("lookup", require("./filters/lookup.js"));
    config.addPassthroughCopy("images");

    return {
        dir: {
          input: ".",
          output: "docs",
          includes: "templates"
        },
        templateFormats : ["html", "md", "css"],
        htmlTemplateEngine : "liquid",
        markdownTemplateEngine : "liquid"
      };
};
