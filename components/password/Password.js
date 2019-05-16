"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Password = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _InputText = require("../inputtext/InputText");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

var _Tooltip = _interopRequireDefault(require("../tooltip/Tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Password =
/*#__PURE__*/
function (_Component) {
  _inherits(Password, _Component);

  function Password(props) {
    var _this;

    _classCallCheck(this, Password);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Password).call(this, props));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onKeyup = _this.onKeyup.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Password, [{
    key: "onFocus",
    value: function onFocus(e) {
      var _this2 = this;

      if (this.props.feedback) {
        if (!this.panel) {
          this.createPanel();
        }

        this.panel.style.zIndex = String(_DomHandler.default.generateZIndex());
        this.panel.style.display = 'block';
        setTimeout(function () {
          _DomHandler.default.addClass(_this2.panel, 'p-input-overlay-visible');

          _DomHandler.default.removeClass(_this2.panel, 'p-input-overlay-hidden');
        }, 1);

        _DomHandler.default.absolutePosition(this.panel, this.inputEl);
      }

      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      var _this3 = this;

      if (this.props.feedback) {
        _DomHandler.default.addClass(this.panel, 'p-input-overlay-hidden');

        _DomHandler.default.removeClass(this.panel, 'p-input-overlay-visible');

        setTimeout(function () {
          _this3.panel.style.display = 'none';

          _DomHandler.default.removeClass(_this3.panel, 'p-input-overlay-hidden');
        }, 150);
      }

      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: "onKeyup",
    value: function onKeyup(e) {
      if (this.props.feedback) {
        var value = e.target.value,
            label = null,
            meterPos = null;

        if (value.length === 0) {
          label = this.props.promptLabel;
          meterPos = '0px 0px';
        } else {
          var score = this.testStrength(value);

          if (score < 30) {
            label = this.props.weakLabel;
            meterPos = '0px -10px';
          } else if (score >= 30 && score < 80) {
            label = this.props.mediumLabel;
            meterPos = '0px -20px';
          } else if (score >= 80) {
            label = this.props.strongLabel;
            meterPos = '0px -30px';
          }
        }

        this.meter.style.backgroundPosition = meterPos;
        this.info.textContent = label;
      }

      if (this.props.onKeyUp) {
        this.props.onKeyUp(e);
      }
    }
  }, {
    key: "testStrength",
    value: function testStrength(str) {
      var grade = 0;
      var val;
      val = str.match('[0-9]');
      grade += this.normalize(val ? val.length : 1 / 4, 1) * 25;
      val = str.match('[a-zA-Z]');
      grade += this.normalize(val ? val.length : 1 / 2, 3) * 10;
      val = str.match('[!@#$%^&*?_~.,;=]');
      grade += this.normalize(val ? val.length : 1 / 6, 1) * 35;
      val = str.match('[A-Z]');
      grade += this.normalize(val ? val.length : 1 / 6, 1) * 30;
      grade *= str.length / 8;
      return grade > 100 ? 100 : grade;
    }
  }, {
    key: "normalize",
    value: function normalize(x, y) {
      var diff = x - y;
      if (diff <= 0) return x / y;else return 1 + 0.5 * (x / (x + y / 4));
    }
  }, {
    key: "createPanel",
    value: function createPanel() {
      this.panel = document.createElement('div');
      this.panel.className = 'p-password-panel p-component p-highlight p-hidden p-password-panel-overlay p-input-overlay';
      this.meter = document.createElement('div');
      this.meter.className = 'p-password-meter';
      this.info = document.createElement('div');
      this.info.className = 'p-password-info';
      this.info.textContent = this.props.promptLabel;
      this.panel.style.minWidth = _DomHandler.default.getOuterWidth(this.inputEl) + 'px';
      this.panel.appendChild(this.meter);
      this.panel.appendChild(this.info);
      document.body.appendChild(this.panel);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.tooltip) {
        this.renderTooltip();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.tooltip && prevProps.tooltip !== this.props.tooltip) {
        if (this.tooltip) this.tooltip.updateContent(this.props.tooltip);else this.renderTooltip();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.feedback && this.panel) {
        this.panel.removeChild(this.meter);
        this.panel.removeChild(this.info);
        document.body.removeChild(this.panel);
        this.panel = null;
        this.meter = null;
        this.info = null;
      }

      if (this.tooltip) {
        this.tooltip.destroy();
        this.tooltip = null;
      }
    }
  }, {
    key: "renderTooltip",
    value: function renderTooltip() {
      this.tooltip = new _Tooltip.default({
        target: this.inputEl,
        content: this.props.tooltip,
        options: this.props.tooltipOptions
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var inputProps = Object.assign({}, this.props);
      delete inputProps.onFocus;
      delete inputProps.onBlur;
      delete inputProps.onKeyUp;
      delete inputProps.promptLabel;
      delete inputProps.weakLabel;
      delete inputProps.mediumLabel;
      delete inputProps.strongLabel;
      delete inputProps.feedback;
      return _react.default.createElement(_InputText.InputText, _extends({
        ref: function ref(el) {
          return _this4.inputEl = _reactDom.default.findDOMNode(el);
        }
      }, inputProps, {
        type: "password",
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onKeyUp: this.onKeyup
      }));
    }
  }]);

  return Password;
}(_react.Component);

exports.Password = Password;

_defineProperty(Password, "defaultProps", {
  promptLabel: 'Enter a password',
  weakLabel: 'Weak',
  mediumLabel: 'Medium',
  strongLabel: 'Strong',
  feedback: true,
  tooltip: null,
  tooltipOptions: null
});

_defineProperty(Password, "propTypes", {
  promptLabel: _propTypes.default.string,
  weakLabel: _propTypes.default.string,
  mediumLabel: _propTypes.default.string,
  strongLabel: _propTypes.default.string,
  feedback: _propTypes.default.bool,
  tooltip: _propTypes.default.string,
  tooltipOptions: _propTypes.default.object
});