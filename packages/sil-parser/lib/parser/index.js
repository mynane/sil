"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _parseHtml = _interopRequireDefault(require("./parseHtml"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Parser = function Parser(code) {
  var str = (0, _parseHtml["default"])(code, {
    start: function start() {},
    end: function end() {},
    "char": function char() {}
  });
  return str;
};

var _default = Parser;
exports["default"] = _default;