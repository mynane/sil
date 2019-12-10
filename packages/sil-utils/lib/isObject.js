"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Checks if `value` is the of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 * @param {*} value
 */
function isObject(value) {
  var type = _typeof(value);

  return value !== null && (type === 'object' || type === 'function');
}

var _default = isObject;
exports["default"] = _default;