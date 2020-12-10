"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumber = void 0;

// from https://codepen.io/grok/pen/LvOQbW?editors=0010
var isNumber = function isNumber(n) {
  return typeof n === 'number' && n === Number(n) && Number.isFinite(n);
};

exports.isNumber = isNumber;