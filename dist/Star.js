"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Star;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Star(_ref) {
  var id = _ref.id,
      full = _ref.full,
      _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config;
  var fullColor = config.fullColor || '#ffcf00';
  var emptyColor = config.emptyColor || '#7f7f7f'; // check user size input

  var width = "".concat(config.size && (0, _utils.isNumber)(config.size) ? config.size : 20, "px");
  var height = width;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "249.748",
    viewBox: "0 -10 187.673 179.503",
    height: "239.338",
    style: {
      width: width,
      height: height,
      marginRight: 2
    }
  }, full !== 1 && full !== 0 && /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("linearGradient", {
    id: "grad-".concat(id),
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "0%",
    style: {
      stopColor: fullColor,
      stopOpacity: 1
    }
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "".concat(full * 100, "%"),
    style: {
      stopColor: fullColor,
      stopOpacity: 1
    }
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "".concat(full * 100, "%"),
    style: {
      stopColor: emptyColor,
      stopOpacity: 1
    }
  }))), /*#__PURE__*/_react["default"].createElement("path", {
    fill: full === 1 ? fullColor : full === 0 ? emptyColor : "url(#grad-".concat(id, ")"),
    d: "M187.183 57.47a9.955 9.955 0 00-8.587-6.86l-54.167-4.918-21.42-50.134a9.978 9.978 0 00-9.172-6.052 9.972 9.972 0 00-9.172 6.061l-21.42 50.125L9.07 50.611a9.973 9.973 0 00-8.578 6.858 9.964 9.964 0 002.917 10.596l40.944 35.908-12.073 53.184a9.97 9.97 0 003.878 10.298A9.953 9.953 0 0042 169.357a9.937 9.937 0 005.114-1.424l46.724-27.925 46.707 27.925a9.936 9.936 0 0010.964-.478 9.979 9.979 0 003.88-10.298l-12.074-53.184 40.944-35.9a9.98 9.98 0 002.925-10.604zm0 0"
  }));
}

Star.propTypes = {
  config: _propTypes["default"].object,
  full: _propTypes["default"].number,
  id: _propTypes["default"].string
};