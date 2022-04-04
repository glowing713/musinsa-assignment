const path = require("path");

const pathAlias = Object.entries({
  components: "src/components",
  pages: "src/pages",
}).map(([key, value]) => [key, path.resolve(__dirname, value)]);

module.exports = {
  webpack: {
    alias: pathAlias,
  },
};
