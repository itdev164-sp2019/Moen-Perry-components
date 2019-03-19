"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ButtonBase = require("./ButtonBase");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = (0, _styledComponents.default)(_ButtonBase.ButtonBase)(_templateObject(), function (props) {
  return props.theme.variants.button[props.variant || 'primary'];
});

var Button = function Button(props) {
  return _react.default.createElement(StyledButton, props);
};

exports.Button = Button;
Button.propTypes = {
  variant: _propTypes.default.string
};

//# sourceMappingURL=Button.js.map