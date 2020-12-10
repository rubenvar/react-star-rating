"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = StarRating;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Star = _interopRequireDefault(require("./Star"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function StarRating(_ref) {
  var rating = _ref.rating,
      _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  var id = (0, _utils.makeUniqueId)(); // number of full, 'half' and empty stars

  var full = Math.floor(rating);
  var half = Math.round((rating - full) * 100) / 100;
  var empty = Math.floor(5 - rating); // partial arrays

  var fullArr = Array(full).fill(1);
  var halfArr = half !== 0 ? [half] : [];
  var emptyArr = Array(empty).fill(0); // array of star-to-be numbers

  var stars = fullArr.concat(halfArr).concat(emptyArr); // font size of rating text will be half of the star size, with a min value of 16px

  var fontSize = config.size && (0, _utils.isNumber)(config.size) ? config.size : 20;
  fontSize = fontSize / 2 < 16 ? 16 : fontSize / 2; // TODO all this array thing a little more efficiently

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({
      display: 'flex',
      marginBottom: 14
    }, style)
  }, stars.map(function (star, i) {
    return /*#__PURE__*/_react["default"].createElement(_Star["default"], {
      key: i,
      id: id,
      full: star,
      config: config
    });
  }), config.showText && /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: fontSize,
      color: '#7f7f7f',
      lineHeight: 1,
      alignSelf: 'center',
      marginLeft: 8
    }
  }, rating));
}

StarRating.propTypes = {
  config: _propTypes["default"].object,
  rating: _propTypes["default"].number,
  style: _propTypes["default"].object
};