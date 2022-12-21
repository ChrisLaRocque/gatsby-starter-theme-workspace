"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onPreInit = void 0;
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
// You can delete this file if you're not using it

/**
 * You can uncomment the following line to verify that
 * your plugin is being loaded in your site.
 *
 * See: https://www.gatsbyjs.com/docs/creating-a-local-plugin/#developing-a-local-plugin-that-is-outside-your-project
 */
var onPreInit = function onPreInit(_ref) {
  var reporter = _ref.reporter;
  return reporter.info("Loaded theme");
};
exports.onPreInit = onPreInit;