"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 * @param {*} value
 */
function isNumber(value) {
  return typeof value === 'number';
}

var _default = isNumber;
exports["default"] = _default;