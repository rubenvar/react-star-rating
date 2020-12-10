"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeUniqueId = void 0;

// from https://gist.github.com/gordonbrander/2230317
var makeUniqueId = function makeUniqueId() {
  return "_".concat(Math.random().toString(36).substr(2, 9));
};

exports.makeUniqueId = makeUniqueId;