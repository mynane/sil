"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isArray", {
  enumerable: true,
  get: function get() {
    return _isArray["default"];
  }
});
Object.defineProperty(exports, "isNumber", {
  enumerable: true,
  get: function get() {
    return _isNumber["default"];
  }
});
Object.defineProperty(exports, "isNull", {
  enumerable: true,
  get: function get() {
    return _isNull["default"];
  }
});
Object.defineProperty(exports, "isObject", {
  enumerable: true,
  get: function get() {
    return _isObject["default"];
  }
});
Object.defineProperty(exports, "inBrowser", {
  enumerable: true,
  get: function get() {
    return _browser.inBrowser;
  }
});
Object.defineProperty(exports, "inWeex", {
  enumerable: true,
  get: function get() {
    return _browser.inWeex;
  }
});
Object.defineProperty(exports, "weexPlatform", {
  enumerable: true,
  get: function get() {
    return _browser.weexPlatform;
  }
});
Object.defineProperty(exports, "UA", {
  enumerable: true,
  get: function get() {
    return _browser.UA;
  }
});
Object.defineProperty(exports, "isIE", {
  enumerable: true,
  get: function get() {
    return _browser.isIE;
  }
});
Object.defineProperty(exports, "isIE9", {
  enumerable: true,
  get: function get() {
    return _browser.isIE9;
  }
});
Object.defineProperty(exports, "isEdge", {
  enumerable: true,
  get: function get() {
    return _browser.isEdge;
  }
});
Object.defineProperty(exports, "isAndroid", {
  enumerable: true,
  get: function get() {
    return _browser.isAndroid;
  }
});
Object.defineProperty(exports, "isIOS", {
  enumerable: true,
  get: function get() {
    return _browser.isIOS;
  }
});
Object.defineProperty(exports, "isChrome", {
  enumerable: true,
  get: function get() {
    return _browser.isChrome;
  }
});
Object.defineProperty(exports, "isPhantomJS", {
  enumerable: true,
  get: function get() {
    return _browser.isPhantomJS;
  }
});
Object.defineProperty(exports, "isFF", {
  enumerable: true,
  get: function get() {
    return _browser.isFF;
  }
});

var _isArray = _interopRequireDefault(require("./is/isArray"));

var _isNumber = _interopRequireDefault(require("./is/isNumber"));

var _isNull = _interopRequireDefault(require("./is/isNull"));

var _isObject = _interopRequireDefault(require("./is/isObject"));

var _browser = require("./is/browser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }