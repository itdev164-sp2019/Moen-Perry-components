"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Section = void 0;

var _react = _interopRequireDefault(require("react"));

var _BaseContainer = require("../BaseContainer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Section = function Section(props) {
  return _react.default.createElement(_BaseContainer.BaseContainer, _extends({
    as: "section"
  }, props));
};

exports.Section = Section;

//# sourceMappingURL=Section.js.map