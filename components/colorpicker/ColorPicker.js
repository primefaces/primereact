"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorPicker = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ColorPickerPanel = require("./ColorPickerPanel");

var _Tooltip = _interopRequireDefault(require("../tooltip/Tooltip"));

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

var ColorPicker =
/*#__PURE__*/
function (_Component) {
  _inherits(ColorPicker, _Component);

  function ColorPicker(props) {
    var _this;

    _classCallCheck(this, ColorPicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColorPicker).call(this, props));
    _this.onPanelClick = _this.onPanelClick.bind(_assertThisInitialized(_this));
    _this.onInputClick = _this.onInputClick.bind(_assertThisInitialized(_this));
    _this.onInputKeydown = _this.onInputKeydown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ColorPicker, [{
    key: "onHueMousedown",
    value: function onHueMousedown(event) {
      if (this.props.disabled) {
        return;
      }

      this.hueDragging = true;
      this.bindDocumentMouseMoveListener();
      this.bindDocumentMouseUpListener();
      this.pickHue(event);

      _DomHandler.default.addClass(this.container, 'p-colorpicker-dragging');
    }
  }, {
    key: "pickHue",
    value: function pickHue(event) {
      var top = this.hueView.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
      this.hsbValue = this.validateHSB({
        h: Math.floor(360 * (150 - Math.max(0, Math.min(150, event.pageY - top))) / 150),
        s: 100,
        b: 100
      });
      this.updateColorSelector();
      this.updateHue();
      this.updateModel();
    }
  }, {
    key: "onColorMousedown",
    value: function onColorMousedown(event) {
      if (this.props.disabled) {
        return;
      }

      this.colorDragging = true;
      this.bindDocumentMouseMoveListener();
      this.bindDocumentMouseUpListener();
      this.pickColor(event);

      _DomHandler.default.addClass(this.container, 'p-colorpicker-dragging');
    }
  }, {
    key: "pickColor",
    value: function pickColor(event) {
      var rect = this.colorSelector.getBoundingClientRect();
      var top = rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
      var left = rect.left + document.body.scrollLeft;
      var saturation = Math.floor(100 * Math.max(0, Math.min(150, event.pageX - left)) / 150);
      var brightness = Math.floor(100 * (150 - Math.max(0, Math.min(150, event.pageY - top))) / 150);
      this.hsbValue = this.validateHSB({
        h: this.hsbValue.h,
        s: saturation,
        b: brightness
      });
      this.updateColorHandle();
      this.updateInput();
      this.updateModel();
    }
  }, {
    key: "updateModel",
    value: function updateModel() {
      switch (this.props.format) {
        case 'hex':
          this.onChange(this.HSBtoHEX(this.hsbValue));
          break;

        case 'rgb':
          this.onChange(this.HSBtoRGB(this.hsbValue));
          break;

        case 'hsb':
          this.onChange(this.hsbValue);
          break;

        default:
          break;
      }
    }
  }, {
    key: "toHSB",
    value: function toHSB(value) {
      var hsb;

      if (value) {
        switch (this.props.format) {
          case 'hex':
            hsb = this.HEXtoHSB(value);
            break;

          case 'rgb':
            hsb = this.RGBtoHSB(value);
            break;

          case 'hsb':
            hsb = value;
            break;

          default:
            break;
        }
      } else {
        hsb = this.HEXtoHSB(this.props.defaultColor);
      }

      return hsb;
    }
  }, {
    key: "updateHSBValue",
    value: function updateHSBValue(value) {
      this.hsbValue = this.toHSB(value);
    }
  }, {
    key: "areHSBEqual",
    value: function areHSBEqual(val1, val2) {
      return val1.h === val2.h && val1.s === val2.s && val1.b === val2.b;
    }
  }, {
    key: "onChange",
    value: function onChange(value) {
      if (this.props.onChange) {
        this.props.onChange({
          value: value,
          stopPropagation: function stopPropagation() {},
          preventDefault: function preventDefault() {},
          target: {
            name: this.props.name,
            id: this.props.id,
            value: value
          }
        });
      }
    }
  }, {
    key: "updateColorSelector",
    value: function updateColorSelector() {
      var hsbValue = this.validateHSB({
        h: this.hsbValue.h,
        s: 100,
        b: 100
      });
      this.colorSelector.style.backgroundColor = '#' + this.HSBtoHEX(hsbValue);
    }
  }, {
    key: "updateColorHandle",
    value: function updateColorHandle() {
      this.colorHandle.style.left = Math.floor(150 * this.hsbValue.s / 100) + 'px';
      this.colorHandle.style.top = Math.floor(150 * (100 - this.hsbValue.b) / 100) + 'px';
    }
  }, {
    key: "updateHue",
    value: function updateHue() {
      this.hueHandle.style.top = Math.floor(150 - 150 * this.hsbValue.h / 360) + 'px';
    }
  }, {
    key: "updateInput",
    value: function updateInput() {
      if (this.input) {
        this.input.style.backgroundColor = '#' + this.HSBtoHEX(this.hsbValue);
      }
    }
  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      this.panel.element.style.zIndex = String(_DomHandler.default.generateZIndex());
      this.panel.element.style.display = 'block';
      setTimeout(function () {
        _DomHandler.default.addClass(_this2.panel.element, 'p-input-overlay-visible');

        _DomHandler.default.removeClass(_this2.panel.element, 'p-input-overlay-hidden');
      }, 1);
      this.alignPanel();
      this.bindDocumentClickListener();
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this3 = this;

      _DomHandler.default.addClass(this.panel.element, 'p-input-overlay-hidden');

      _DomHandler.default.removeClass(this.panel.element, 'p-input-overlay-visible');

      this.unbindDocumentClickListener();
      setTimeout(function () {
        _this3.panel.element.style.display = 'none';

        _DomHandler.default.removeClass(_this3.panel.element, 'p-input-overlay-hidden');
      }, 150);
    }
  }, {
    key: "onInputClick",
    value: function onInputClick() {
      if (this.documentClickListener) {
        this.selfClick = true;
      }

      this.togglePanel();
    }
  }, {
    key: "togglePanel",
    value: function togglePanel() {
      if (!this.panel.element.offsetParent) this.show();else this.hide();
    }
  }, {
    key: "onInputKeydown",
    value: function onInputKeydown(event) {
      switch (event.which) {
        //space
        case 32:
          this.togglePanel();
          event.preventDefault();
          break;
        //escape and tab

        case 27:
        case 9:
          this.hide();
          break;

        default:
          break;
      }
    }
  }, {
    key: "onPanelClick",
    value: function onPanelClick() {
      this.selfClick = true;
    }
  }, {
    key: "bindDocumentClickListener",
    value: function bindDocumentClickListener() {
      if (!this.documentClickListener) {
        this.documentClickListener = this.onDocumentClick.bind(this);
        document.addEventListener('click', this.documentClickListener);
      }
    }
  }, {
    key: "onDocumentClick",
    value: function onDocumentClick() {
      if (!this.selfClick) {
        this.hide();
        this.unbindDocumentClickListener();
      }

      this.selfClick = false;
    }
  }, {
    key: "unbindDocumentClickListener",
    value: function unbindDocumentClickListener() {
      if (this.documentClickListener) {
        document.removeEventListener('click', this.documentClickListener);
        this.documentClickListener = null;
      }
    }
  }, {
    key: "bindDocumentMouseMoveListener",
    value: function bindDocumentMouseMoveListener() {
      if (!this.documentMouseMoveListener) {
        this.documentMouseMoveListener = this.onDocumentMouseMove.bind(this);
        document.addEventListener('mousemove', this.documentMouseMoveListener);
      }
    }
  }, {
    key: "onDocumentMouseMove",
    value: function onDocumentMouseMove(event) {
      if (this.colorDragging) {
        this.pickColor(event);
      }

      if (this.hueDragging) {
        this.pickHue(event);
      }
    }
  }, {
    key: "unbindDocumentMouseMoveListener",
    value: function unbindDocumentMouseMoveListener() {
      if (this.documentMouseMoveListener) {
        document.removeEventListener('mousemove', this.documentMouseMoveListener);
        this.documentMouseMoveListener = null;
      }
    }
  }, {
    key: "bindDocumentMouseUpListener",
    value: function bindDocumentMouseUpListener() {
      if (!this.documentMouseUpListener) {
        this.documentMouseUpListener = this.onDocumentMouseUp.bind(this);
        document.addEventListener('mouseup', this.documentMouseUpListener);
      }
    }
  }, {
    key: "onDocumentMouseUp",
    value: function onDocumentMouseUp() {
      this.colorDragging = false;
      this.hueDragging = false;

      _DomHandler.default.removeClass(this.container, 'p-colorpicker-dragging');

      this.unbindDocumentMouseMoveListener();
      this.unbindDocumentMouseUpListener();
    }
  }, {
    key: "unbindDocumentMouseUpListener",
    value: function unbindDocumentMouseUpListener() {
      if (this.documentMouseUpListener) {
        document.removeEventListener('mouseup', this.documentMouseUpListener);
        this.documentMouseUpListener = null;
      }
    }
  }, {
    key: "validateHSB",
    value: function validateHSB(hsb) {
      return {
        h: Math.min(360, Math.max(0, hsb.h)),
        s: Math.min(100, Math.max(0, hsb.s)),
        b: Math.min(100, Math.max(0, hsb.b))
      };
    }
  }, {
    key: "validateRGB",
    value: function validateRGB(rgb) {
      return {
        r: Math.min(255, Math.max(0, rgb.r)),
        g: Math.min(255, Math.max(0, rgb.g)),
        b: Math.min(255, Math.max(0, rgb.b))
      };
    }
  }, {
    key: "validateHEX",
    value: function validateHEX(hex) {
      var len = 6 - hex.length;

      if (len > 0) {
        var o = [];

        for (var i = 0; i < len; i++) {
          o.push('0');
        }

        o.push(hex);
        hex = o.join('');
      }

      return hex;
    }
  }, {
    key: "HEXtoRGB",
    value: function HEXtoRGB(hex) {
      var hexValue = parseInt(hex.indexOf('#') > -1 ? hex.substring(1) : hex, 16);
      return {
        r: hexValue >> 16,
        g: (hexValue & 0x00FF00) >> 8,
        b: hexValue & 0x0000FF
      };
    }
  }, {
    key: "HEXtoHSB",
    value: function HEXtoHSB(hex) {
      return this.RGBtoHSB(this.HEXtoRGB(hex));
    }
  }, {
    key: "RGBtoHSB",
    value: function RGBtoHSB(rgb) {
      var hsb = {
        h: 0,
        s: 0,
        b: 0
      };
      var min = Math.min(rgb.r, rgb.g, rgb.b);
      var max = Math.max(rgb.r, rgb.g, rgb.b);
      var delta = max - min;
      hsb.b = max;

      if (max !== 0) {}

      hsb.s = max !== 0 ? 255 * delta / max : 0;

      if (hsb.s !== 0) {
        if (rgb.r === max) {
          hsb.h = (rgb.g - rgb.b) / delta;
        } else if (rgb.g === max) {
          hsb.h = 2 + (rgb.b - rgb.r) / delta;
        } else {
          hsb.h = 4 + (rgb.r - rgb.g) / delta;
        }
      } else {
        hsb.h = -1;
      }

      hsb.h *= 60;

      if (hsb.h < 0) {
        hsb.h += 360;
      }

      hsb.s *= 100 / 255;
      hsb.b *= 100 / 255;
      return hsb;
    }
  }, {
    key: "HSBtoRGB",
    value: function HSBtoRGB(hsb) {
      var rgb = {
        r: null,
        g: null,
        b: null
      };
      var h = Math.round(hsb.h);
      var s = Math.round(hsb.s * 255 / 100);
      var v = Math.round(hsb.b * 255 / 100);

      if (s === 0) {
        rgb = {
          r: v,
          g: v,
          b: v
        };
      } else {
        var t1 = v;
        var t2 = (255 - s) * v / 255;
        var t3 = (t1 - t2) * (h % 60) / 60;
        if (h === 360) h = 0;

        if (h < 60) {
          rgb.r = t1;
          rgb.b = t2;
          rgb.g = t2 + t3;
        } else if (h < 120) {
          rgb.g = t1;
          rgb.b = t2;
          rgb.r = t1 - t3;
        } else if (h < 180) {
          rgb.g = t1;
          rgb.r = t2;
          rgb.b = t2 + t3;
        } else if (h < 240) {
          rgb.b = t1;
          rgb.r = t2;
          rgb.g = t1 - t3;
        } else if (h < 300) {
          rgb.b = t1;
          rgb.g = t2;
          rgb.r = t2 + t3;
        } else if (h < 360) {
          rgb.r = t1;
          rgb.g = t2;
          rgb.b = t1 - t3;
        } else {
          rgb.r = 0;
          rgb.g = 0;
          rgb.b = 0;
        }
      }

      return {
        r: Math.round(rgb.r),
        g: Math.round(rgb.g),
        b: Math.round(rgb.b)
      };
    }
  }, {
    key: "RGBtoHEX",
    value: function RGBtoHEX(rgb) {
      var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];

      for (var key in hex) {
        if (hex[key].length === 1) {
          hex[key] = '0' + hex[key];
        }
      }

      return hex.join('');
    }
  }, {
    key: "HSBtoHEX",
    value: function HSBtoHEX(hsb) {
      return this.RGBtoHEX(this.HSBtoRGB(hsb));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateHSBValue(this.props.value);
      this.updateUI();

      if (this.props.tooltip) {
        this.renderTooltip();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.updateUI();

      if (this.props.tooltip && prevProps.tooltip !== this.props.tooltip) {
        if (this.tooltip) this.tooltip.updateContent(this.props.tooltip);else this.renderTooltip();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindDocumentClickListener();
      this.unbindDocumentMouseMoveListener();
      this.unbindDocumentMouseUpListener();

      if (this.tooltip) {
        this.tooltip.destroy();
        this.tooltip = null;
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.colorDragging) {
        return false;
      } else {
        var oldValue = this.hsbValue;
        this.updateHSBValue(nextProps.value);
        var newValue = this.toHSB(nextProps.value);
        var equals = newValue.h === oldValue.h && newValue.s === oldValue.s && newValue.b === oldValue.b;
        return !equals;
      }
    }
  }, {
    key: "updateUI",
    value: function updateUI() {
      this.updateHue();
      this.updateColorHandle();
      this.updateInput();
      this.updateColorSelector();
    }
  }, {
    key: "alignPanel",
    value: function alignPanel() {
      if (this.props.appendTo) {
        this.panel.element.style.minWidth = _DomHandler.default.getWidth(this.container) + 'px';

        _DomHandler.default.absolutePosition(this.panel.element, this.container);
      } else {
        _DomHandler.default.relativePosition(this.panel.element, this.container);
      }
    }
  }, {
    key: "renderTooltip",
    value: function renderTooltip() {
      this.tooltip = new _Tooltip.default({
        target: this.container,
        content: this.props.tooltip,
        options: this.props.tooltipOptions
      });
    }
  }, {
    key: "renderColorSelector",
    value: function renderColorSelector() {
      var _this4 = this;

      return _react.default.createElement("div", {
        ref: function ref(el) {
          return _this4.colorSelector = el;
        },
        className: "p-colorpicker-color-selector",
        onMouseDown: this.onColorMousedown.bind(this)
      }, _react.default.createElement("div", {
        className: "p-colorpicker-color"
      }, _react.default.createElement("div", {
        ref: function ref(el) {
          return _this4.colorHandle = el;
        },
        className: "p-colorpicker-color-handle"
      })));
    }
  }, {
    key: "renderHue",
    value: function renderHue() {
      var _this5 = this;

      return _react.default.createElement("div", {
        ref: function ref(el) {
          return _this5.hueView = el;
        },
        className: "p-colorpicker-hue",
        onMouseDown: this.onHueMousedown.bind(this)
      }, _react.default.createElement("div", {
        ref: function ref(el) {
          return _this5.hueHandle = el;
        },
        className: "p-colorpicker-hue-handle"
      }));
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var colorSelector = this.renderColorSelector();
      var hue = this.renderHue();
      return _react.default.createElement("div", {
        className: "p-colorpicker-content"
      }, colorSelector, hue);
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this6 = this;

      if (!this.props.inline) {
        var inputClassName = (0, _classnames.default)('p-colorpicker-preview p-inputtext', {
          'p-disabled': this.props.disabled
        });
        return _react.default.createElement("input", {
          ref: function ref(el) {
            return _this6.input = el;
          },
          type: "text",
          className: inputClassName,
          readOnly: "readonly",
          id: this.props.inputId,
          tabIndex: this.props.tabIndex,
          disabled: this.props.disabled,
          onClick: this.onInputClick,
          onKeyDown: this.onInputKeydown
        });
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var className = (0, _classnames.default)('p-colorpicker p-component', this.props.className, {
        'p-colorpicker-overlay': !this.props.inline
      });
      var content = this.renderContent();
      var input = this.renderInput();
      return _react.default.createElement("div", {
        ref: function ref(el) {
          return _this7.container = el;
        },
        id: this.props.id,
        style: this.props.style,
        className: className
      }, input, _react.default.createElement(_ColorPickerPanel.ColorPickerPanel, {
        ref: function ref(el) {
          return _this7.panel = el;
        },
        appendTo: this.props.appendTo,
        onClick: this.onPanelClick,
        inline: this.props.inline,
        disabled: this.props.disabled
      }, content));
    }
  }]);

  return ColorPicker;
}(_react.Component);

exports.ColorPicker = ColorPicker;

_defineProperty(ColorPicker, "defaultProps", {
  id: null,
  value: null,
  style: null,
  className: null,
  defaultColor: 'ff0000',
  inline: false,
  format: "hex",
  appendTo: null,
  disabled: false,
  tabIndex: null,
  inputId: null,
  tooltip: null,
  tooltipOptions: null,
  onChange: null
});

_defineProperty(ColorPicker, "propTypes", {
  id: _propTypes.default.string,
  value: _propTypes.default.any,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  defaultColor: _propTypes.default.string,
  inline: _propTypes.default.bool,
  format: _propTypes.default.string,
  appendTo: _propTypes.default.any,
  disabled: _propTypes.default.bool,
  tabIndex: _propTypes.default.string,
  inputId: _propTypes.default.string,
  tooltip: _propTypes.default.string,
  tooltipOptions: _propTypes.default.object,
  onChange: _propTypes.default.func
});