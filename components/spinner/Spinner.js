"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _InputText = require("../inputtext/InputText");

var _classnames = _interopRequireDefault(require("classnames"));

var _Tooltip = _interopRequireDefault(require("../tooltip/Tooltip"));

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Spinner =
/*#__PURE__*/
function (_Component) {
  _inherits(Spinner, _Component);

  function Spinner(props) {
    var _this;

    _classCallCheck(this, Spinner);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Spinner).call(this, props));

    if (Math.floor(_this.props.step) === 0) {
      _this.precision = _this.props.step.toString().split(/[,]|[.]/)[1].length;
    }

    _this.onInputKeyDown = _this.onInputKeyDown.bind(_assertThisInitialized(_this));
    _this.onInputChange = _this.onInputChange.bind(_assertThisInitialized(_this));
    _this.onInputBlur = _this.onInputBlur.bind(_assertThisInitialized(_this));
    _this.onInputFocus = _this.onInputFocus.bind(_assertThisInitialized(_this));
    _this.onUpButtonMouseLeave = _this.onUpButtonMouseLeave.bind(_assertThisInitialized(_this));
    _this.onUpButtonMouseDown = _this.onUpButtonMouseDown.bind(_assertThisInitialized(_this));
    _this.onUpButtonMouseUp = _this.onUpButtonMouseUp.bind(_assertThisInitialized(_this));
    _this.onUpButtonKeyDown = _this.onUpButtonKeyDown.bind(_assertThisInitialized(_this));
    _this.onUpButtonKeyUp = _this.onUpButtonKeyUp.bind(_assertThisInitialized(_this));
    _this.onDownButtonMouseLeave = _this.onDownButtonMouseLeave.bind(_assertThisInitialized(_this));
    _this.onDownButtonMouseDown = _this.onDownButtonMouseDown.bind(_assertThisInitialized(_this));
    _this.onDownButtonMouseUp = _this.onDownButtonMouseUp.bind(_assertThisInitialized(_this));
    _this.onDownButtonKeyDown = _this.onDownButtonKeyDown.bind(_assertThisInitialized(_this));
    _this.onDownButtonKeyUp = _this.onDownButtonKeyUp.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Spinner, [{
    key: "repeat",
    value: function repeat(event, interval, dir) {
      var _this2 = this;

      var i = interval || 500;
      this.clearTimer();
      this.timer = setTimeout(function () {
        _this2.repeat(event, 40, dir);
      }, i);
      this.spin(event, dir);
    }
  }, {
    key: "spin",
    value: function spin(event, dir) {
      var step = this.props.step * dir;
      var currentValue;
      var newValue;
      if (this.props.value) currentValue = typeof this.props.value === 'string' ? this.parseValue(this.props.value) : this.props.value;else currentValue = 0;
      if (this.precision) newValue = parseFloat(this.toFixed(currentValue + step, this.precision));else newValue = currentValue + step;

      if (this.props.maxlength !== null && this.props.value.toString().length > this.props.maxlength) {
        newValue = currentValue;
      }

      if (this.props.min !== null && newValue < this.props.min) {
        newValue = this.props.min;
      }

      if (this.props.max !== null && newValue > this.props.max) {
        newValue = this.props.max;
      }

      if (this.props.onChange) {
        this.props.onChange({
          originalEvent: event,
          value: newValue,
          stopPropagation: function stopPropagation() {},
          preventDefault: function preventDefault() {},
          target: {
            name: this.props.name,
            id: this.props.id,
            value: newValue
          }
        });
      }
    }
  }, {
    key: "toFixed",
    value: function toFixed(value, precision) {
      var power = Math.pow(10, precision || 0);
      return String(Math.round(value * power) / power);
    }
  }, {
    key: "onUpButtonMouseDown",
    value: function onUpButtonMouseDown(event) {
      if (!this.props.disabled) {
        this.inputEl.focus();
        this.repeat(event, null, 1);
        event.preventDefault();
      }
    }
  }, {
    key: "onUpButtonMouseUp",
    value: function onUpButtonMouseUp(event) {
      if (!this.props.disabled) {
        this.clearTimer();
      }
    }
  }, {
    key: "onUpButtonMouseLeave",
    value: function onUpButtonMouseLeave(event) {
      if (!this.props.disabled) {
        this.clearTimer();
      }
    }
  }, {
    key: "onUpButtonKeyUp",
    value: function onUpButtonKeyUp(event) {
      if (!this.props.disabled) {
        this.clearTimer();
      }
    }
  }, {
    key: "onUpButtonKeyDown",
    value: function onUpButtonKeyDown(event) {
      if (event.keyCode === 32 || event.keyCode === 13) {
        this.repeat(event, null, 1);
      }
    }
  }, {
    key: "onDownButtonMouseDown",
    value: function onDownButtonMouseDown(event, focusInput) {
      if (!this.props.disabled) {
        this.inputEl.focus();
        this.repeat(event, null, -1);
        event.preventDefault();
      }
    }
  }, {
    key: "onDownButtonMouseUp",
    value: function onDownButtonMouseUp(event) {
      if (!this.props.disabled) {
        this.clearTimer();
      }
    }
  }, {
    key: "onDownButtonMouseLeave",
    value: function onDownButtonMouseLeave(event) {
      if (!this.props.disabled) {
        this.clearTimer();
      }
    }
  }, {
    key: "onDownButtonKeyUp",
    value: function onDownButtonKeyUp(event) {
      if (!this.props.disabled) {
        this.clearTimer();
      }
    }
  }, {
    key: "onDownButtonKeyDown",
    value: function onDownButtonKeyDown(event) {
      if (event.keyCode === 32 || event.keyCode === 13) {
        this.repeat(event, null, -1);
      }
    }
  }, {
    key: "onInputKeyDown",
    value: function onInputKeyDown(event) {
      if (event.which === 38) {
        this.spin(event, 1);
        event.preventDefault();
      } else if (event.which === 40) {
        this.spin(event, -1);
        event.preventDefault();
      }
    }
  }, {
    key: "parseValue",
    value: function parseValue(val) {
      var value = val.trim();

      if (val === '') {
        value = this.props.min != null ? this.props.min : null;
      } else {
        if (this.precision) value = parseFloat(val.replace(',', '.'));else value = parseInt(val, 10);

        if (!isNaN(value)) {
          if (this.props.max !== null && value > this.props.max) {
            value = this.props.max;
          }

          if (this.props.min !== null && value < this.props.min) {
            value = this.props.min;
          }
        } else {
          value = null;
        }
      }

      return value;
    }
  }, {
    key: "onInputFocus",
    value: function onInputFocus(event) {
      _DomHandler.default.addClass(this.element, 'p-inputwrapper-focus');
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(event) {
      if (this.props.onChange) {
        this.props.onChange({
          originalEvent: event,
          value: event.target.value,
          stopPropagation: function stopPropagation() {},
          preventDefault: function preventDefault() {},
          target: {
            name: this.props.name,
            id: this.props.id,
            value: event.target.value
          }
        });
      }
    }
  }, {
    key: "onInputBlur",
    value: function onInputBlur(event) {
      _DomHandler.default.removeClass(this.element, 'p-inputwrapper-focus');

      if (this.props.onChange) {
        var parsedValue = this.parseValue(event.target.value);
        this.props.onChange({
          originalEvent: event,
          value: parsedValue,
          stopPropagation: function stopPropagation() {},
          preventDefault: function preventDefault() {},
          target: {
            name: this.props.name,
            id: this.props.id,
            value: parsedValue
          }
        });
      }

      if (this.props.onBlur) {
        this.props.onBlur(event);
      }
    }
  }, {
    key: "clearTimer",
    value: function clearTimer() {
      if (this.timer) {
        clearInterval(this.timer);
      }
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
      if (this.tooltip) {
        this.tooltip.destroy();
        this.tooltip = null;
      }
    }
  }, {
    key: "renderTooltip",
    value: function renderTooltip() {
      this.tooltip = new _Tooltip.default({
        target: this.element,
        content: this.props.tooltip,
        options: this.props.tooltipOptions
      });
    }
  }, {
    key: "renderInputElement",
    value: function renderInputElement() {
      var _this3 = this;

      var className = (0, _classnames.default)('p-spinner-input', this.props.inputClassName);
      return _react.default.createElement(_InputText.InputText, {
        ref: function ref(el) {
          return _this3.inputEl = _reactDom.default.findDOMNode(el);
        },
        id: this.props.inputId,
        style: this.props.inputStyle,
        className: className,
        value: this.props.value == null ? '' : this.props.value,
        type: "text",
        size: this.props.size,
        maxLength: this.props.maxlength,
        disabled: this.props.disabled,
        readOnly: this.props.readonly,
        name: this.props.name,
        onKeyDown: this.onInputKeyDown,
        onBlur: this.onInputBlur,
        onChange: this.onInputChange,
        onFocus: this.onInputFocus
      });
    }
  }, {
    key: "renderUpButton",
    value: function renderUpButton() {
      var className = (0, _classnames.default)("p-spinner-button p-spinner-button-up p-button p-component", {
        'p-disabled': this.props.disabled
      });
      return _react.default.createElement("button", {
        type: "button",
        className: className,
        onMouseLeave: this.onUpButtonMouseLeave,
        onMouseDown: this.onUpButtonMouseDown,
        onMouseUp: this.onUpButtonMouseUp,
        onKeyDown: this.onUpButtonKeyDown,
        onKeyUp: this.onUpButtonKeyUp,
        disabled: this.props.disabled
      }, _react.default.createElement("span", {
        className: "p-spinner-button-icon pi pi-caret-up"
      }));
    }
  }, {
    key: "renderDownButton",
    value: function renderDownButton() {
      var className = (0, _classnames.default)("p-spinner-button p-spinner-button-down p-button p-component", {
        'p-disabled': this.props.disabled
      });
      return _react.default.createElement("button", {
        type: "button",
        className: className,
        onMouseLeave: this.onDownButtonMouseLeave,
        onMouseDown: this.onDownButtonMouseDown,
        onMouseUp: this.onDownButtonMouseUp,
        onKeyDown: this.onDownButtonKeyDown,
        onKeyUp: this.onDownButtonKeyUp,
        disabled: this.props.disabled
      }, _react.default.createElement("span", {
        className: "p-spinner-button-icon pi pi-caret-down"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var className = (0, _classnames.default)("p-spinner p-component", this.props.className, {
        'p-inputwrapper-filled': this.props.value != null
      });
      var inputElement = this.renderInputElement();
      var upButton = this.renderUpButton();
      var downButton = this.renderDownButton();
      return _react.default.createElement("span", {
        ref: function ref(el) {
          return _this4.element = el;
        },
        id: this.props.id,
        className: className,
        style: this.props.style
      }, inputElement, upButton, downButton);
    }
  }]);

  return Spinner;
}(_react.Component);

exports.Spinner = Spinner;

_defineProperty(Spinner, "defaultProps", {
  id: null,
  value: null,
  name: null,
  step: 1,
  min: null,
  max: null,
  disabled: false,
  readonly: false,
  maxlength: null,
  size: null,
  style: null,
  className: null,
  inputId: null,
  inputStyle: null,
  inputClassName: null,
  tooltip: null,
  tooltipOptions: null,
  onChange: null,
  onBlur: null
});

_defineProperty(Spinner, "propTypes", {
  id: _propTypes.default.string,
  value: _propTypes.default.number,
  name: _propTypes.default.string,
  step: _propTypes.default.number,
  min: _propTypes.default.number,
  max: _propTypes.default.number,
  disabled: _propTypes.default.bool,
  readonly: _propTypes.default.bool,
  maxlength: _propTypes.default.number,
  size: _propTypes.default.number,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  inputId: _propTypes.default.string,
  inputStyle: _propTypes.default.object,
  inputClassName: _propTypes.default.string,
  tooltip: _propTypes.default.string,
  tooltipOptions: _propTypes.default.object,
  onChange: _propTypes.default.func,
  onBlur: _propTypes.default.func
});