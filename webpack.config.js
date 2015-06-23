var path = require("path");

module.exports = {
    entry: "./index.js",
    output: {
        filename: "{{clName}}.js",
        libraryTarget: "umd"
    }
}
