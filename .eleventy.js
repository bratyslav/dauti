module.exports = function(eleventyConfig) {
    // Tells Eleventy to copy the entire assets folder to dist/assets
    eleventyConfig.addPassthroughCopy("src/assets");

    return {
        templateFormats: ["md", "html", "liquid"],

        dir: {
            input: "src",
            output: "dist"
        }
    };
};