"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressSpinner = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProgressSpinner =
/*#__PURE__*/
function (_Component) {
  _inherits(ProgressSpinner, _Component);

  function ProgressSpinner() {
    _classCallCheck(this, ProgressSpinner);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProgressSpinner).apply(this, arguments));
  }

  _createClass(ProgressSpinner, [{
    key: "render",
    value: function render() {
      var spinnerClass = (0, _classnames.default)('p-progress-spinner', this.props.className);
      return _react.default.createElement("div", {
        id: this.props.id,
        style: this.props.style,
        className: spinnerClass
      }, _react.default.createElement("svg", {
        className: "p-progress-spinner-svg",
        viewBox: "25 25 50 50",
        style: {
          animationDuration: this.props.animationDuration
        }
      }, _react.default.createElement("circle", {
        className: "p-progress-spinner-circle",
        cx: "50",
        cy: "50",
        r: "20",
        fill: this.props.fill,
        strokeWidth: this.props.strokeWidth,
        strokeMiterlimit: "10"
      })));
    }
  }]);

  return ProgressSpinner;
}(_react.Component);

exports.ProgressSpinner = ProgressSpinner;

_defineProperty(ProgressSpinner, "defaultProps", {
  id: null,
  style: null,
  className: null,
  strokeWidth: "2",
  fill: "none",
  animationDuration: "2s"
});

_defineProperty(ProgressSpinner, "propTypes", {
  id: _propTypes.default.string,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  fill: _propTypes.default.string,
  animationDuration: _propTypes.default.string
});