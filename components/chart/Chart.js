"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chart = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Chart = _interopRequireDefault(require("chart.js/dist/Chart.js"));

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

var Chart =
/*#__PURE__*/
function (_Component) {
  _inherits(Chart, _Component);

  function Chart() {
    _classCallCheck(this, Chart);

    return _possibleConstructorReturn(this, _getPrototypeOf(Chart).apply(this, arguments));
  }

  _createClass(Chart, [{
    key: "initChart",
    value: function initChart() {
      this.chart = new _Chart.default(this.canvas, {
        type: this.props.type,
        data: this.props.data,
        options: this.props.options
      });
    }
  }, {
    key: "getCanvas",
    value: function getCanvas() {
      return this.canvas;
    }
  }, {
    key: "getBase64Image",
    value: function getBase64Image() {
      return this.chart.toBase64Image();
    }
  }, {
    key: "generateLegend",
    value: function generateLegend() {
      if (this.chart) {
        this.chart.generateLegend();
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      if (this.chart) {
        this.chart.update();
      }
    }
  }, {
    key: "reinit",
    value: function reinit() {
      if (this.chart) {
        this.chart.destroy();
        this.initChart();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initChart();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      this.reinit();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.chart) {
        this.chart.destroy();
        this.chart = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var className = (0, _classnames.default)('p-chart', this.props.className),
          style = Object.assign({
        width: this.props.width,
        height: this.props.height
      }, this.props.style);
      return _react.default.createElement("div", {
        id: this.props.id,
        style: style,
        className: className
      }, _react.default.createElement("canvas", {
        ref: function ref(el) {
          _this.canvas = el;
        },
        width: this.props.width,
        height: this.props.height
      }));
    }
  }]);

  return Chart;
}(_react.Component);

exports.Chart = Chart;

_defineProperty(Chart, "defaultProps", {
  id: null,
  type: null,
  data: null,
  options: null,
  width: null,
  height: null,
  style: null,
  className: null
});

_defineProperty(Chart, "propTypes", {
  id: _propTypes.default.string,
  type: _propTypes.default.string,
  data: _propTypes.default.object,
  options: _propTypes.default.object,
  width: _propTypes.default.string,
  height: _propTypes.default.string,
  style: _propTypes.default.object,
  className: _propTypes.default.string
});