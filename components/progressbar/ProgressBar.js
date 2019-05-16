"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = void 0;

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

var ProgressBar =
/*#__PURE__*/
function (_Component) {
  _inherits(ProgressBar, _Component);

  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProgressBar).apply(this, arguments));
  }

  _createClass(ProgressBar, [{
    key: "renderLabel",
    value: function renderLabel() {
      if (this.props.showValue && this.props.value) {
        return _react.default.createElement("div", {
          className: "p-progressbar-label"
        }, this.props.value + this.props.unit);
      } else {
        return null;
      }
    }
  }, {
    key: "renderDeterminate",
    value: function renderDeterminate() {
      var className = (0, _classnames.default)('p-progressbar p-component p-progressbar-determinate', this.props.className);
      var label = this.renderLabel();
      return _react.default.createElement("div", {
        role: "progressbar",
        id: this.props.id,
        className: className,
        style: this.props.style,
        "aria-valuemin": "0",
        "aria-valuenow": this.props.value,
        "aria-valuemax": "100",
        "aria-label": this.props.value
      }, _react.default.createElement("div", {
        className: "p-progressbar-value p-progressbar-value-animate",
        style: {
          width: this.props.value + '%',
          display: 'block'
        }
      }), label);
    }
  }, {
    key: "renderIndeterminate",
    value: function renderIndeterminate() {
      var className = (0, _classnames.default)('p-progressbar p-component p-progressbar-indeterminate', this.props.className);
      return _react.default.createElement("div", {
        role: "progressbar",
        id: this.props.id,
        className: className,
        style: this.props.style
      }, _react.default.createElement("div", {
        className: "p-progressbar-indeterminate-container"
      }, _react.default.createElement("div", {
        className: "p-progressbar-value p-progressbar-value-animate"
      })));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.mode === 'determinate') return this.renderDeterminate();else if (this.props.mode === 'indeterminate') return this.renderIndeterminate();else throw new Error(this.props.mode + " is not a valid mode for the ProgressBar. Valid values are 'determinate' and 'indeterminate'");
    }
  }]);

  return ProgressBar;
}(_react.Component);

exports.ProgressBar = ProgressBar;

_defineProperty(ProgressBar, "defaultProps", {
  id: null,
  value: null,
  showValue: true,
  unit: '%',
  style: null,
  className: null,
  mode: 'determinate'
});

_defineProperty(ProgressBar, "propTypes", {
  id: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  showValue: _propTypes.default.bool,
  unit: _propTypes.default.string,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  mode: _propTypes.default.string
});