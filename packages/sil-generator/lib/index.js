"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(File) {
  var ExpressionStatement = File.program.body[0];

  if (!ExpressionStatement) {
    return;
  }

  var expression = ExpressionStatement.expression;
  var openingElement = expression.openingElement,
      _expression$children = expression.children,
      children = _expression$children === void 0 ? [] : _expression$children;
  var tag = openingElement.name.name;

  for (var i = 0; i < children.length; i++) {
    var opening = children[i].openingElement;
    var child = children[i].children;
  }

  console.log(tag);
};

exports["default"] = _default;