"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Masthead = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rebass = require("rebass");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    color: white;\n    text-decoration: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nheight: ", ";\nwidth: 100%;\nbackground-color: rebeccapurple;\nmargin-bottom: 1.45rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Outer = (0, _styledComponents.default)(_rebass.Box)(_templateObject(), function (props) {
  return props.height;
});
var StyledLink = (0, _styledComponents.default)(_rebass.Link)(_templateObject2());

var Masthead = function Masthead(_ref) {
  var height = _ref.height,
      siteTitle = _ref.siteTitle;
  return _react.default.createElement(Outer, {
    height: height
  }, _react.default.createElement(StyledLink, {
    href: "/"
  }, siteTitle));
};

exports.Masthead = Masthead;
Masthead.propTypes = {
  height: _propTypes.default.string.isRequired,
  siteTitle: _propTypes.default.string
};

//# sourceMappingURL=Masthead.js.map