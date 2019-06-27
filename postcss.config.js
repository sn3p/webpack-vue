const path = require("path");
const md5 = require("md5");

module.exports = {
  ident: "postcss",
  plugins: {
    "postcss-preset-env": { stage: 0 },
    "postcss-modules": {}
  }
};
