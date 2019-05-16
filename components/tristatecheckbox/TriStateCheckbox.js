"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TriStateCheckbox = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

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

var TriStateCheckbox =
/*#__PURE__*/
function (_Component) {
  _inherits(TriStateCheckbox, _Component);

  function TriStateCheckbox(props) {
    var _this;

    _classCallCheck(this, TriStateCheckbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TriStateCheckbox).call(this, props));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TriStateCheckbox, [{
    key: "onClick",
    value: function onClick(event) {
      this.toggle(event);
      this.inputEL.focus();
    }
  }, {
    key: "toggle",
    value: function toggle(event) {
      var newValue;
      if (this.props.value === null || this.props.value === undefined) newValue = true;else if (this.props.value === true) newValue = false;else if (this.props.value === false) newValue = null;

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
    key: "onFocus",
    value: function onFocus(e) {
      _DomHandler.default.addClass(this.box, 'p-focus');
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      _DomHandler.default.removeClass(this.box, 'p-focus');
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
    key: "render",
    value: function render() {
      var _this2 = this;

      var containerClass = (0, _classnames.default)('p-checkbox p-tristatecheckbox p-component', this.props.className);
      var boxClass = (0, _classnames.default)('p-checkbox-box p-component', {
        'p-highlight': (this.props.value || !this.props.value) && this.props.value !== null
      });
      var iconClass = (0, _classnames.default)('p-checkbox-icon p-c', {
        'pi pi-check': this.props.value === true,
        'pi pi-times': this.props.value === false
      });
      return _react.default.createElement("div", {
        ref: function ref(el) {
          return _this2.element = el;
        },
        id: this.props.id,
        className: containerClass,
        style: this.props.style,
        onClick: this.onClick
      }, _react.default.createElement("div", {
        className: "p-hidden-accessible"
      }, _react.default.createElement("input", {
        ref: function ref(el) {
          return _this2.inputEL = el;
        },
        type: "checkbox",
        id: this.props.inputId,
        name: this.props.name,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      })), _react.default.createElement("div", {
        className: boxClass,
        ref: function ref(el) {
          _this2.box = el;
        }
      }, _react.default.createElement("span", {
        className: iconClass
      })));
    }
  }]);

  return TriStateCheckbox;
}(_react.Component);

exports.TriStateCheckbox = TriStateCheckbox;

_defineProperty(TriStateCheckbox, "defaultProps", {
  id: null,
  inputId: null,
  value: null,
  name: null,
  style: null,
  className: null,
  tooltip: null,
  tooltipOptions: null,
  onChange: null
});

_defineProperty(TriStateCheckbox, "propTypes", {
  id: _propTypes.default.string,
  inputId: _propTypes.default.string,
  value: _propTypes.default.bool,
  name: _propTypes.default.string,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  tooltip: _propTypes.default.string,
  tooltipOptions: _propTypes.default.object,
  onChange: _propTypes.default.func
});