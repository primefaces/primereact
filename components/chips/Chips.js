"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chips = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _InputText = require("../inputtext/InputText");

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Tooltip = _interopRequireDefault(require("../tooltip/Tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Chips =
/*#__PURE__*/
function (_Component) {
  _inherits(Chips, _Component);

  function Chips(props) {
    var _this;

    _classCallCheck(this, Chips);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Chips).call(this, props));
    _this.focusInput = _this.focusInput.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Chips, [{
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
    key: "removeItem",
    value: function removeItem(event, index) {
      if (this.props.disabled) {
        return;
      }

      var values = _toConsumableArray(this.props.value);

      var removedItem = values.splice(index, 1);

      if (this.props.onRemove) {
        this.props.onRemove({
          originalEvent: event,
          value: removedItem
        });
      }

      if (this.props.onChange) {
        this.props.onChange({
          originalEvent: event,
          value: values,
          stopPropagation: function stopPropagation() {},
          preventDefault: function preventDefault() {},
          target: {
            name: this.props.name,
            id: this.props.id,
            value: values
          }
        });
      }
    }
  }, {
    key: "focusInput",
    value: function focusInput() {
      this.inputElement.focus();
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      var inputValue = event.target.value;

      switch (event.which) {
        //backspace
        case 8:
          if (this.inputElement.value.length === 0 && this.props.value && this.props.value.length > 0) {
            this.removeItem(event, this.props.value.length - 1);
          }

          break;
        //enter

        case 13:
          if (inputValue && inputValue.trim().length && (!this.props.max || this.props.max > this.props.value.length)) {
            var values = _toConsumableArray(this.props.value);

            values.push(inputValue);
            this.setState({
              values: values
            });

            if (this.props.onAdd) {
              this.props.onAdd({
                originalEvent: event,
                value: inputValue
              });
            }

            if (this.props.onChange) {
              this.props.onChange({
                originalEvent: event,
                value: values,
                stopPropagation: function stopPropagation() {},
                preventDefault: function preventDefault() {},
                target: {
                  name: this.props.name,
                  id: this.props.id,
                  value: values
                }
              });
            }
          }

          this.inputElement.value = '';
          event.preventDefault();
          break;

        default:
          if (this.isMaxedOut()) {
            event.preventDefault();
          }

          break;
      }
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      _DomHandler.default.addClass(this.listElement, 'p-focus');
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      _DomHandler.default.removeClass(this.listElement, 'p-focus');
    }
  }, {
    key: "isMaxedOut",
    value: function isMaxedOut() {
      return this.props.max && this.props.value && this.props.max === this.props.value.length;
    }
  }, {
    key: "renderItem",
    value: function renderItem(value, index) {
      var _this2 = this;

      var content = this.props.itemTemplate ? this.props.itemTemplate(value) : value;
      return _react.default.createElement("li", {
        key: index,
        className: "p-chips-token p-highlight"
      }, _react.default.createElement("span", {
        className: "p-chips-token-icon pi pi-fw pi-times",
        onClick: function onClick(event) {
          return _this2.removeItem(event, index);
        }
      }), _react.default.createElement("span", {
        className: "p-chips-token-label"
      }, content));
    }
  }, {
    key: "renderInputElement",
    value: function renderInputElement() {
      var _this3 = this;

      return _react.default.createElement("li", {
        className: "p-chips-input-token"
      }, _react.default.createElement(_InputText.InputText, {
        ref: function ref(el) {
          return _this3.inputElement = _reactDom.default.findDOMNode(el);
        },
        placeholder: this.props.placeholder,
        type: "text",
        name: this.props.name,
        disabled: this.props.disabled || this.isMaxedOut(),
        onKeyDown: this.onKeyDown,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      }));
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this4 = this;

      if (this.props.value) {
        return this.props.value.map(function (value, index) {
          return _this4.renderItem(value, index);
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderList",
    value: function renderList() {
      var _this5 = this;

      var className = (0, _classnames.default)('p-inputtext', {
        'p-disabled': this.props.disabled
      });
      var items = this.renderItems();
      var inputElement = this.renderInputElement();

      if (this.props.value) {
        return _react.default.createElement("ul", {
          ref: function ref(el) {
            return _this5.listElement = el;
          },
          className: className,
          onClick: this.focusInput
        }, items, inputElement);
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var className = (0, _classnames.default)('p-chips p-component', this.props.className);
      var list = this.renderList();
      return _react.default.createElement("div", {
        ref: function ref(el) {
          return _this6.element = el;
        },
        id: this.props.id,
        className: className,
        style: this.props.style
      }, list);
    }
  }]);

  return Chips;
}(_react.Component);

exports.Chips = Chips;

_defineProperty(Chips, "defaultProps", {
  id: null,
  name: null,
  placeholder: null,
  value: null,
  max: null,
  disabled: null,
  style: null,
  className: null,
  tooltip: null,
  tooltipOptions: null,
  itemTemplate: null,
  onAdd: null,
  onRemove: null,
  onChange: null
});

_defineProperty(Chips, "propTypes", {
  id: _propTypes.default.string,
  name: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  value: _propTypes.default.array,
  max: _propTypes.default.number,
  disabled: _propTypes.default.bool,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  tooltip: _propTypes.default.string,
  tooltipOptions: _propTypes.default.object,
  itemTemplate: _propTypes.default.func,
  onAdd: _propTypes.default.func,
  onRemove: _propTypes.default.func,
  onChange: _propTypes.default.func
});