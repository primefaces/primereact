"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoComplete = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _InputText = require("../inputtext/InputText");

var _Button = require("../button/Button");

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

var _ObjectUtils = _interopRequireDefault(require("../utils/ObjectUtils"));

var _AutoCompletePanel = require("./AutoCompletePanel");

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

var AutoComplete =
/*#__PURE__*/
function (_Component) {
  _inherits(AutoComplete, _Component);

  function AutoComplete(props) {
    var _this;

    _classCallCheck(this, AutoComplete);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AutoComplete).call(this, props));
    _this.onInputChange = _this.onInputChange.bind(_assertThisInitialized(_this));
    _this.onInputFocus = _this.onInputFocus.bind(_assertThisInitialized(_this));
    _this.onInputBlur = _this.onInputBlur.bind(_assertThisInitialized(_this));
    _this.onInputClick = _this.onInputClick.bind(_assertThisInitialized(_this));
    _this.onInputKeyDown = _this.onInputKeyDown.bind(_assertThisInitialized(_this));
    _this.onDropdownClick = _this.onDropdownClick.bind(_assertThisInitialized(_this));
    _this.onMultiContainerClick = _this.onMultiContainerClick.bind(_assertThisInitialized(_this));
    _this.onMultiInputFocus = _this.onMultiInputFocus.bind(_assertThisInitialized(_this));
    _this.onMultiInputBlur = _this.onMultiInputBlur.bind(_assertThisInitialized(_this));
    _this.selectItem = _this.selectItem.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AutoComplete, [{
    key: "onInputChange",
    value: function onInputChange(event) {
      var _this2 = this;

      //Cancel the search request if user types within the timeout
      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      var query = event.target.value;

      if (!this.props.multiple) {
        this.updateModel(event, query);
      }

      if (query.length === 0) {
        this.hidePanel();

        if (this.props.onClear) {
          this.props.onClear(event);
        }
      } else {
        if (query.length >= this.props.minLength) {
          this.timeout = setTimeout(function () {
            _this2.search(event, query, 'input');
          }, this.props.delay);
        } else {
          this.hidePanel();
        }
      }
    }
  }, {
    key: "onInputClick",
    value: function onInputClick(event) {
      if (this.documentClickListener) {
        this.inputClick = true;
      }

      if (this.props.onClick) {
        this.props.onClick(event);
      }
    }
  }, {
    key: "search",
    value: function search(event, query, source) {
      //allow empty string but not undefined or null
      if (query === undefined || query === null) {
        return;
      } //do not search blank values on input change


      if (source === 'input' && query.trim().length === 0) {
        return;
      }

      if (this.props.completeMethod) {
        this.searching = true;
        this.showLoader();
        this.props.completeMethod({
          originalEvent: event,
          query: query
        });
      }
    }
  }, {
    key: "selectItem",
    value: function selectItem(event, option) {
      if (this.props.multiple) {
        this.inputEl.value = '';

        if (!this.isSelected(option)) {
          var newValue = this.props.value ? [].concat(_toConsumableArray(this.props.value), [option]) : [option];
          this.updateModel(event, newValue);
        }
      } else {
        this.updateInputField(option);
        this.updateModel(event, option);
      }

      if (this.props.onSelect) {
        this.props.onSelect({
          originalEvent: event,
          value: option
        });
      }

      this.inputEl.focus();
    }
  }, {
    key: "updateModel",
    value: function updateModel(event, value) {
      if (this.props.onChange) {
        this.props.onChange({
          originalEvent: event,
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
    key: "formatValue",
    value: function formatValue(value) {
      if (value) {
        if (this.props.selectedItemTemplate) {
          var resolvedFieldData = this.props.selectedItemTemplate(value);
          return resolvedFieldData ? resolvedFieldData : value;
        } else if (this.props.field) {
          var _resolvedFieldData = _ObjectUtils.default.resolveFieldData(value, this.props.field);

          return _resolvedFieldData !== null && _resolvedFieldData !== undefined ? _resolvedFieldData : value;
        } else return value;
      } else return '';
    }
  }, {
    key: "updateInputField",
    value: function updateInputField(value) {
      var formattedValue = this.formatValue(value);
      this.inputEl.value = formattedValue;
    }
  }, {
    key: "showPanel",
    value: function showPanel() {
      var _this3 = this;

      if (this.focus) {
        this.alignPanel();

        if (this.panel && this.panel.element && !this.panel.element.offsetParent) {
          this.panel.element.style.zIndex = String(_DomHandler.default.generateZIndex());
          this.panel.element.style.display = "block";
          setTimeout(function () {
            if (_this3.panel && _this3.panel.element) {
              _DomHandler.default.addClass(_this3.panel.element, 'p-input-overlay-visible');

              _DomHandler.default.removeClass(_this3.panel.element, 'p-input-overlay-hidden');
            }
          }, 1);
          this.alignPanel();
          this.bindDocumentClickListener();
        }
      }
    }
  }, {
    key: "alignPanel",
    value: function alignPanel() {
      if (this.panel.element.offsetParent) {
        var target = this.props.multiple ? this.multiContainer : this.inputEl;

        if (this.props.appendTo) {
          this.panel.element.style.minWidth = _DomHandler.default.getWidth(target) + 'px';

          _DomHandler.default.absolutePosition(this.panel.element, target);
        } else {
          _DomHandler.default.relativePosition(this.panel.element, target);
        }
      }
    }
  }, {
    key: "hidePanel",
    value: function hidePanel() {
      var _this4 = this;

      _DomHandler.default.addClass(this.panel.element, 'p-input-overlay-hidden');

      _DomHandler.default.removeClass(this.panel.element, 'p-input-overlay-visible');

      setTimeout(function () {
        if (_this4.panel && _this4.panel.element) {
          _this4.panel.element.style.display = 'none';

          _DomHandler.default.removeClass(_this4.panel.element, 'p-input-overlay-hidden');
        }
      }, 150);
      this.unbindDocumentClickListener();
    }
  }, {
    key: "onDropdownClick",
    value: function onDropdownClick(event) {
      this.inputEl.focus();

      if (this.documentClickListener) {
        this.dropdownClick = true;
      }

      if (this.props.dropdownMode === 'blank') this.search(event, '', 'dropdown');else if (this.props.dropdownMode === 'current') this.search(event, this.inputEl.value, 'dropdown');

      if (this.props.onDropdownClick) {
        this.props.onDropdownClick({
          originalEvent: event,
          query: this.inputEl.value
        });
      }
    }
  }, {
    key: "removeItem",
    value: function removeItem(event, index) {
      var removedValue = this.props.value[index];
      var newValue = this.props.value.filter(function (val, i) {
        return index !== i;
      });
      this.updateModel(event, newValue);

      if (this.props.onUnselect) {
        this.props.onUnselect({
          originalEvent: event,
          value: removedValue
        });
      }
    }
  }, {
    key: "onInputKeyDown",
    value: function onInputKeyDown(event) {
      if (this.isPanelVisible()) {
        var highlightItem = _DomHandler.default.findSingle(this.panel.element, 'li.p-highlight');

        switch (event.which) {
          //down
          case 40:
            if (highlightItem) {
              var nextElement = highlightItem.nextElementSibling;

              if (nextElement) {
                _DomHandler.default.addClass(nextElement, 'p-highlight');

                _DomHandler.default.removeClass(highlightItem, 'p-highlight');

                _DomHandler.default.scrollInView(this.panel.element, nextElement);
              }
            } else {
              _DomHandler.default.addClass(this.panel.element.firstChild.firstChild, 'p-highlight');
            }

            event.preventDefault();
            break;
          //up

          case 38:
            if (highlightItem) {
              var previousElement = highlightItem.previousElementSibling;

              if (previousElement) {
                _DomHandler.default.addClass(previousElement, 'p-highlight');

                _DomHandler.default.removeClass(highlightItem, 'p-highlight');

                _DomHandler.default.scrollInView(this.panel.element, previousElement);
              }
            }

            event.preventDefault();
            break;
          //enter,tab

          case 13:
            if (highlightItem) {
              this.selectItem(event, this.props.suggestions[_DomHandler.default.index(highlightItem)]);
              this.hidePanel();
            }

            event.preventDefault();
            break;
          //escape

          case 27:
            this.hidePanel();
            event.preventDefault();
            break;
          //tab

          case 9:
            if (highlightItem) {
              this.selectItem(event, this.props.suggestions[_DomHandler.default.index(highlightItem)]);
            }

            this.hidePanel();
            break;

          default:
            break;
        }
      }

      if (this.props.multiple) {
        switch (event.which) {
          //backspace
          case 8:
            if (this.props.value && this.props.value.length && !this.inputEl.value) {
              var removedValue = this.props.value[this.props.value.length - 1];
              var newValue = this.props.value.slice(0, -1);

              if (this.props.onUnselect) {
                this.props.onUnselect({
                  originalEvent: event,
                  value: removedValue
                });
              }

              this.updateModel(event, newValue);
            }

            break;

          default:
            break;
        }
      }
    }
  }, {
    key: "onInputFocus",
    value: function onInputFocus(event) {
      this.focus = true;

      if (this.props.onFocus) {
        this.props.onFocus(event);
      }

      _DomHandler.default.addClass(this.container, 'p-inputwrapper-focus');
    }
  }, {
    key: "onInputBlur",
    value: function onInputBlur(event) {
      this.focus = false;

      if (this.props.onBlur) {
        this.props.onBlur(event);
      }

      _DomHandler.default.removeClass(this.container, 'p-inputwrapper-focus');
    }
  }, {
    key: "onMultiContainerClick",
    value: function onMultiContainerClick(event) {
      this.inputEl.focus();

      if (this.documentClickListener) {
        this.inputClick = true;
      }

      if (this.props.onClick) {
        this.props.onClick(event);
      }
    }
  }, {
    key: "onMultiInputFocus",
    value: function onMultiInputFocus(event) {
      this.onInputFocus(event);

      _DomHandler.default.addClass(this.multiContainer, 'p-focus');
    }
  }, {
    key: "onMultiInputBlur",
    value: function onMultiInputBlur(event) {
      this.onInputBlur(event);

      _DomHandler.default.removeClass(this.multiContainer, 'p-focus');
    }
  }, {
    key: "isSelected",
    value: function isSelected(val) {
      var selected = false;

      if (this.props.value && this.props.value.length) {
        for (var i = 0; i < this.props.value.length; i++) {
          if (_ObjectUtils.default.equals(this.props.value[i], val)) {
            selected = true;
            break;
          }
        }
      }

      return selected;
    }
  }, {
    key: "findOptionIndex",
    value: function findOptionIndex(option) {
      var index = -1;

      if (this.suggestions) {
        for (var i = 0; i < this.suggestions.length; i++) {
          if (_ObjectUtils.default.equals(option, this.suggestions[i])) {
            index = i;
            break;
          }
        }
      }

      return index;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.tooltip) {
        this.renderTooltip();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindDocumentClickListener();

      if (this.tooltip) {
        this.tooltip.destroy();
        this.tooltip = null;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.searching) {
        if (this.props.suggestions && this.props.suggestions.length) this.showPanel();else this.hidePanel();
        this.hideLoader();
      }

      this.searching = false;

      if (this.inputEl && !this.props.multiple) {
        this.updateInputField(this.props.value);
      }

      if (this.props.tooltip && prevProps.tooltip !== this.props.tooltip) {
        if (this.tooltip) this.tooltip.updateContent(this.props.tooltip);else this.renderTooltip();
      }
    }
  }, {
    key: "showLoader",
    value: function showLoader() {
      this.loader.style.visibility = 'visible';
    }
  }, {
    key: "hideLoader",
    value: function hideLoader() {
      this.loader.style.visibility = 'hidden';
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
    key: "renderSimpleAutoComplete",
    value: function renderSimpleAutoComplete() {
      var _this5 = this;

      var inputClassName = (0, _classnames.default)('p-autocomplete-input', this.props.inputClassName, {
        'p-autocomplete-dd-input': this.props.dropdown
      });
      return _react.default.createElement(_InputText.InputText, {
        ref: function ref(el) {
          return _this5.inputEl = _reactDom.default.findDOMNode(el);
        },
        id: this.props.inputId,
        type: "text",
        name: this.props.name,
        defaultValue: this.formatValue(this.props.value),
        className: inputClassName,
        style: this.props.inputStyle,
        autoComplete: "off",
        readOnly: this.props.readonly,
        disabled: this.props.disabled,
        placeholder: this.props.placeholder,
        size: this.props.size,
        maxLength: this.props.maxlength,
        tabIndex: this.props.tabindex,
        onBlur: this.onInputBlur,
        onFocus: this.onInputFocus,
        onChange: this.onInputChange,
        onMouseDown: this.props.onMouseDown,
        onKeyUp: this.props.onKeyUp,
        onKeyDown: this.onInputKeyDown,
        onKeyPress: this.props.onKeyPress,
        onContextMenu: this.props.onContextMenu,
        onClick: this.onInputClick,
        onDoubleClick: this.props.onDblClick
      });
    }
  }, {
    key: "renderChips",
    value: function renderChips() {
      var _this6 = this;

      if (this.props.value && this.props.value.length) {
        return this.props.value.map(function (val, index) {
          return _react.default.createElement("li", {
            key: index + 'multi-item',
            className: "p-autocomplete-token p-highlight"
          }, _react.default.createElement("span", {
            className: "p-autocomplete-token-icon pi pi-fw pi-times",
            onClick: function onClick(e) {
              return _this6.removeItem(e, index);
            }
          }), _react.default.createElement("span", {
            className: "p-autocomplete-token-label"
          }, _this6.formatValue(val)));
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderMultiInput",
    value: function renderMultiInput() {
      var _this7 = this;

      return _react.default.createElement("li", {
        className: "p-autocomplete-input-token"
      }, _react.default.createElement("input", {
        ref: function ref(el) {
          return _this7.inputEl = el;
        },
        type: "text",
        disabled: this.props.disabled,
        placeholder: this.props.placeholder,
        autoComplete: "off",
        tabIndex: this.props.tabindex,
        onChange: this.onInputChange,
        id: this.props.inputId,
        name: this.props.name,
        style: this.props.inputStyle,
        className: this.props.inputClassName,
        onKeyUp: this.props.onKeyUp,
        onKeyDown: this.onInputKeyDown,
        onKeyPress: this.props.onKeyPress,
        onFocus: this.onMultiInputFocus,
        onBlur: this.onMultiInputBlur
      }));
    }
  }, {
    key: "renderMultipleAutoComplete",
    value: function renderMultipleAutoComplete() {
      var _this8 = this;

      var multiContainerClass = (0, _classnames.default)("p-autocomplete-multiple-container p-component p-inputtext", {
        'p-disabled': this.props.disabled
      });
      var tokens = this.renderChips();
      var input = this.renderMultiInput();
      return _react.default.createElement("ul", {
        ref: function ref(el) {
          _this8.multiContainer = el;
        },
        className: multiContainerClass,
        onContextMenu: this.props.onContextMenu,
        onMouseDown: this.props.onMouseDown,
        onClick: this.onMultiContainerClick,
        onDoubleClick: this.props.onDblClick
      }, tokens, input);
    }
  }, {
    key: "renderDropdown",
    value: function renderDropdown() {
      return _react.default.createElement(_Button.Button, {
        type: "button",
        icon: "pi pi-fw pi-chevron-down",
        className: "p-autocomplete-dropdown",
        disabled: this.props.disabled,
        onClick: this.onDropdownClick
      });
    }
  }, {
    key: "renderLoader",
    value: function renderLoader() {
      var _this9 = this;

      return _react.default.createElement("i", {
        ref: function ref(el) {
          return _this9.loader = el;
        },
        className: "p-autocomplete-loader pi pi-spinner pi-spin",
        style: {
          visibility: 'hidden'
        }
      });
    }
  }, {
    key: "bindDocumentClickListener",
    value: function bindDocumentClickListener() {
      var _this10 = this;

      if (!this.documentClickListener) {
        this.documentClickListener = function (event) {
          if (event.which === 3) {
            return;
          }

          if (!_this10.inputClick && !_this10.dropdownClick) {
            _this10.hidePanel();
          }

          _this10.inputClick = false;
          _this10.dropdownClick = false;
        };

        document.addEventListener('click', this.documentClickListener);
      }
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
    key: "isPanelVisible",
    value: function isPanelVisible() {
      return this.panel.element.offsetParent != null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this11 = this;

      var input, dropdown;
      var className = (0, _classnames.default)('p-autocomplete p-component', this.props.className, {
        'p-autocomplete-dd': this.props.dropdown,
        'p-autocomplete-multiple': this.props.multiple,
        'p-inputwrapper-filled': this.props.value,
        'p-inputwrapper-focus': this.focus
      });
      var loader = this.renderLoader();
      if (this.props.multiple) input = this.renderMultipleAutoComplete();else input = this.renderSimpleAutoComplete();

      if (this.props.dropdown) {
        dropdown = this.renderDropdown();
      }

      return _react.default.createElement("span", {
        ref: function ref(el) {
          return _this11.container = el;
        },
        id: this.props.id,
        style: this.props.style,
        className: className
      }, input, loader, dropdown, _react.default.createElement(_AutoCompletePanel.AutoCompletePanel, {
        ref: function ref(el) {
          return _this11.panel = el;
        },
        suggestions: this.props.suggestions,
        field: this.props.field,
        appendTo: this.props.appendTo,
        itemTemplate: this.props.itemTemplate,
        onItemClick: this.selectItem
      }));
    }
  }]);

  return AutoComplete;
}(_react.Component);

exports.AutoComplete = AutoComplete;

_defineProperty(AutoComplete, "defaultProps", {
  id: null,
  value: null,
  name: null,
  suggestions: null,
  field: null,
  scrollHeight: '200px',
  dropdown: false,
  dropdownMode: 'blank',
  multiple: false,
  minLength: 1,
  delay: 300,
  style: null,
  className: null,
  inputId: null,
  inputStyle: null,
  inputClassName: null,
  placeholder: null,
  readonly: false,
  disabled: false,
  maxlength: null,
  size: null,
  appendTo: null,
  tabindex: null,
  tooltip: null,
  tooltipOptions: null,
  completeMethod: null,
  itemTemplate: null,
  selectedItemTemplate: null,
  onChange: null,
  onFocus: null,
  onBlur: null,
  onSelect: null,
  onUnselect: null,
  onDropdownClick: null,
  onClick: null,
  onDblClick: null,
  onMouseDown: null,
  onKeyUp: null,
  onKeyPress: null,
  onContextMenu: null,
  onClear: null
});

_defineProperty(AutoComplete, "propTypes", {
  id: _propTypes.default.string,
  value: _propTypes.default.any,
  name: _propTypes.default.string,
  suggestions: _propTypes.default.array,
  field: _propTypes.default.string,
  scrollHeight: _propTypes.default.string,
  dropdown: _propTypes.default.bool,
  dropdownMode: _propTypes.default.string,
  multiple: _propTypes.default.bool,
  minLength: _propTypes.default.number,
  delay: _propTypes.default.number,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  inputId: _propTypes.default.string,
  inputStyle: _propTypes.default.object,
  inputClassName: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  readonly: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  maxlength: _propTypes.default.number,
  size: _propTypes.default.number,
  appendTo: _propTypes.default.any,
  tabindex: _propTypes.default.number,
  tooltip: _propTypes.default.string,
  tooltipOptions: _propTypes.default.object,
  completeMethod: _propTypes.default.func,
  itemTemplate: _propTypes.default.func,
  selectedItemTemplate: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  onUnselect: _propTypes.default.func,
  onDropdownClick: _propTypes.default.func,
  onClick: _propTypes.default.func,
  onDblClick: _propTypes.default.func,
  onMouseDown: _propTypes.default.func,
  onKeyUp: _propTypes.default.func,
  onKeyPress: _propTypes.default.func,
  onContextMenu: _propTypes.default.func,
  onClear: _propTypes.default.func
});