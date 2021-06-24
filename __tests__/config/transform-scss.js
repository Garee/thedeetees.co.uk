// https://jestjs.io/docs/webpack#mocking-css-modules
module.exports = {
  process() {
    return "module.exports = {};";
  },
  getCacheKey() {
    return "cssTransform";
  },
};
