"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

var _ObjectUtils = _interopRequireDefault(require("../utils/ObjectUtils"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DropdownPanel = require("./DropdownPanel");

var _DropdownItem = require("./DropdownItem");

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

var Dropdown =
/*#__PURE__*/
function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));
    _this.state = {
      filter: ''
    };
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onInputFocus = _this.onInputFocus.bind(_assertThisInitialized(_this));
    _this.onInputBlur = _this.onInputBlur.bind(_assertThisInitialized(_this));
    _this.onInputKeyDown = _this.onInputKeyDown.bind(_assertThisInitialized(_this));
    _this.onEditableInputClick = _this.onEditableInputClick.bind(_assertThisInitialized(_this));
    _this.onEditableInputChange = _this.onEditableInputChange.bind(_assertThisInitialized(_this));
    _this.onEditableInputFocus = _this.onEditableInputFocus.bind(_assertThisInitialized(_this));
    _this.onOptionClick = _this.onOptionClick.bind(_assertThisInitialized(_this));
    _this.onFilterInputChange = _this.onFilterInputChange.bind(_assertThisInitialized(_this));
    _this.onFilterInputKeyDown = _this.onFilterInputKeyDown.bind(_assertThisInitialized(_this));
    _this.panelClick = _this.panelClick.bind(_assertThisInitialized(_this));
    _this.clear = _this.clear.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Dropdown, [{
    key: "onClick",
    value: function onClick(event) {
      var _this2 = this;

      if (this.props.disabled) {
        return;
      }

      if (this.documentClickListener) {
        this.selfClick = true;
      }

      var clearClick = _DomHandler.default.hasClass(event.target, 'p-dropdown-clear-icon');

      if (!this.overlayClick && !this.editableInputClick && !clearClick) {
        this.focusInput.focus();

        if (this.panel.element.offsetParent) {
          this.hide();
        } else {
          this.show();

          if (this.props.filter) {
            setTimeout(function () {
              _this2.filterInput.focus();
            }, 200);
          }
        }
      }

      if (this.editableInputClick) {
        this.expeditableInputClick = false;
      }
    }
  }, {
    key: "panelClick",
    value: function panelClick() {
      this.overlayClick = true;
    }
  }, {
    key: "onInputFocus",
    value: function onInputFocus(event) {
      _DomHandler.default.addClass(this.container, 'p-focus');
    }
  }, {
    key: "onInputBlur",
    value: function onInputBlur(event) {
      _DomHandler.default.removeClass(this.container, 'p-focus');
    }
  }, {
    key: "onUpKey",
    value: function onUpKey(event) {
      if (this.props.options) {
        var selectedItemIndex = this.findOptionIndex(this.props.value);
        var prevItem = this.findPrevVisibleItem(selectedItemIndex);

        if (prevItem) {
          this.selectItem({
            originalEvent: event,
            option: prevItem
          });
        }
      }

      event.preventDefault();
    }
  }, {
    key: "onDownKey",
    value: function onDownKey(event) {
      if (this.props.options) {
        if (!this.panel.element.offsetParent && event.altKey) {
          this.show();
        } else {
          var selectedItemIndex = this.findOptionIndex(this.props.value);
          var nextItem = this.findNextVisibleItem(selectedItemIndex);

          if (nextItem) {
            this.selectItem({
              originalEvent: event,
              option: nextItem
            });
          }
        }
      }

      event.preventDefault();
    }
  }, {
    key: "onInputKeyDown",
    value: function onInputKeyDown(event) {
      switch (event.which) {
        //down
        case 40:
          this.onDownKey(event);
          break;
        //up

        case 38:
          this.onUpKey(event);
          break;
        //space

        case 32:
          if (!this.panel.element.offsetParent) {
            this.show();
            event.preventDefault();
          }

          break;
        //enter

        case 13:
          this.hide();
          event.preventDefault();
          break;
        //escape and tab

        case 27:
        case 9:
          this.hide();
          break;

        default:
          this.search(event);
          break;
      }
    }
  }, {
    key: "search",
    value: function search(event) {
      var _this3 = this;

      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }

      var _char = String.fromCharCode(event.keyCode);

      this.previousSearchChar = this.currentSearchChar;
      this.currentSearchChar = _char;
      if (this.previousSearchChar === this.currentSearchChar) this.searchValue = this.currentSearchChar;else this.searchValue = this.searchValue ? this.searchValue + _char : _char;
      var searchIndex = this.props.value ? this.findOptionIndex(this.props.value) : -1;
      var newOption = this.searchOption(++searchIndex);

      if (newOption) {
        this.selectItem({
          originalEvent: event,
          option: newOption
        });
        this.selectedOptionUpdated = true;
      }

      this.searchTimeout = setTimeout(function () {
        _this3.searchValue = null;
      }, 250);
    }
  }, {
    key: "searchOption",
    value: function searchOption(index) {
      var option;

      if (this.searchValue) {
        option = this.searchOptionInRange(index, this.props.options.length);

        if (!option) {
          option = this.searchOptionInRange(0, index);
        }
      }

      return option;
    }
  }, {
    key: "searchOptionInRange",
    value: function searchOptionInRange(start, end) {
      for (var i = start; i < end; i++) {
        var opt = this.props.options[i];
        var label = this.getOptionLabel(opt).toString().toLowerCase();

        if (label.startsWith(this.searchValue.toLowerCase())) {
          return opt;
        }
      }

      return null;
    }
  }, {
    key: "findNextVisibleItem",
    value: function findNextVisibleItem(index) {
      var i = index + 1;

      if (i === this.props.options.length) {
        return null;
      }

      var option = this.props.options[i];

      if (this.hasFilter()) {
        if (this.filter(option)) return option;else return this.findNextVisibleItem(i);
      } else {
        return option;
      }
    }
  }, {
    key: "findPrevVisibleItem",
    value: function findPrevVisibleItem(index) {
      var i = index - 1;

      if (i === -1) {
        return null;
      }

      var option = this.props.options[i];

      if (this.hasFilter()) {
        if (this.filter(option)) return option;else return this.findPrevVisibleItem(i);
      } else {
        return option;
      }
    }
  }, {
    key: "onEditableInputClick",
    value: function onEditableInputClick(event) {
      this.editableInputClick = true;
      this.bindDocumentClickListener();
    }
  }, {
    key: "onEditableInputChange",
    value: function onEditableInputChange(event) {
      this.props.onChange({
        originalEvent: event.originalEvent,
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
  }, {
    key: "onEditableInputFocus",
    value: function onEditableInputFocus(event) {
      _DomHandler.default.addClass(this.container, 'p-focus');

      this.hide();
    }
  }, {
    key: "onOptionClick",
    value: function onOptionClick(event) {
      var _this4 = this;

      this.selectItem(event);
      this.focusInput.focus();
      setTimeout(function () {
        _this4.hide();
      }, 100);
    }
  }, {
    key: "onFilterInputChange",
    value: function onFilterInputChange(event) {
      this.setState({
        filter: event.target.value
      });
    }
  }, {
    key: "onFilterInputKeyDown",
    value: function onFilterInputKeyDown(event) {
      switch (event.which) {
        //down
        case 40:
          this.onDownKey(event);
          break;
        //up

        case 38:
          this.onUpKey(event);
          break;
        //enter

        case 13:
          this.hide();
          event.preventDefault();
          break;

        default:
          break;
      }
    }
  }, {
    key: "clear",
    value: function clear(event) {
      this.props.onChange({
        originalEvent: event,
        value: null,
        stopPropagation: function stopPropagation() {},
        preventDefault: function preventDefault() {},
        target: {
          name: this.props.name,
          id: this.props.id,
          value: null
        }
      });
      this.updateEditableLabel();
    }
  }, {
    key: "selectItem",
    value: function selectItem(event) {
      var currentSelectedOption = this.findOption(this.props.value);

      if (currentSelectedOption !== event.option) {
        this.updateEditableLabel(event.option);
        this.props.onChange({
          originalEvent: event.originalEvent,
          value: this.props.optionLabel ? event.option : event.option.value,
          stopPropagation: function stopPropagation() {},
          preventDefault: function preventDefault() {},
          target: {
            name: this.props.name,
            id: this.props.id,
            value: this.props.optionLabel ? event.option : event.option.value
          }
        });
      }
    }
  }, {
    key: "findOptionIndex",
    value: function findOptionIndex(value) {
      var index = -1;

      if (this.props.options) {
        for (var i = 0; i < this.props.options.length; i++) {
          var optionValue = this.props.optionLabel ? this.props.options[i] : this.props.options[i].value;

          if (value === null && optionValue == null || _ObjectUtils.default.equals(value, optionValue, this.props.dataKey)) {
            index = i;
            break;
          }
        }
      }

      return index;
    }
  }, {
    key: "findOption",
    value: function findOption(value) {
      var index = this.findOptionIndex(value);
      return index !== -1 ? this.props.options[index] : null;
    }
  }, {
    key: "show",
    value: function show() {
      var _this5 = this;

      this.panel.element.style.zIndex = String(_DomHandler.default.generateZIndex());
      this.panel.element.style.display = 'block';
      setTimeout(function () {
        _DomHandler.default.addClass(_this5.panel.element, 'p-input-overlay-visible');

        _DomHandler.default.removeClass(_this5.panel.element, 'p-input-overlay-hidden');
      }, 1);
      this.alignPanel();
      this.bindDocumentClickListener();
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this6 = this;

      if (this.panel.element && this.panel.element.offsetParent) {
        _DomHandler.default.addClass(this.panel.element, 'p-input-overlay-hidden');

        _DomHandler.default.removeClass(this.panel.element, 'p-input-overlay-visible');

        this.unbindDocumentClickListener();
        this.clearClickState();
        this.hideTimeout = setTimeout(function () {
          _this6.panel.element.style.display = 'none';

          _DomHandler.default.removeClass(_this6.panel.element, 'p-input-overlay-hidden');
        }, 150);
      }
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
    key: "bindDocumentClickListener",
    value: function bindDocumentClickListener() {
      var _this7 = this;

      if (!this.documentClickListener) {
        this.documentClickListener = function () {
          if (!_this7.selfClick && !_this7.overlayClick) {
            _this7.hide();
          }

          _this7.clearClickState();
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
    key: "clearClickState",
    value: function clearClickState() {
      this.selfClick = false;
      this.editableInputClick = false;
      this.overlayClick = false;
    }
  }, {
    key: "updateEditableLabel",
    value: function updateEditableLabel(option) {
      if (this.editableInput) {
        this.editableInput.value = option ? this.getOptionLabel(option) : this.props.value || '';
      }
    }
  }, {
    key: "filter",
    value: function filter(option) {
      var filterValue = this.state.filter.trim().toLowerCase();
      var optionLabel = this.getOptionLabel(option);
      return optionLabel.toLowerCase().indexOf(filterValue.toLowerCase()) > -1;
    }
  }, {
    key: "hasFilter",
    value: function hasFilter() {
      return this.state.filter && this.state.filter.trim().length > 0;
    }
  }, {
    key: "renderKeyboardHelper",
    value: function renderKeyboardHelper() {
      var _this8 = this;

      return _react.default.createElement("div", {
        className: "p-hidden-accessible"
      }, _react.default.createElement("input", {
        ref: function ref(el) {
          return _this8.focusInput = el;
        },
        id: this.props.inputId,
        type: "text",
        role: "listbox",
        onFocus: this.onInputFocus,
        onBlur: this.onInputBlur,
        onKeyDown: this.onInputKeyDown,
        disabled: this.props.disabled,
        tabIndex: this.props.tabIndex,
        "aria-label": this.props.ariaLabel,
        "aria-labelledby": this.props.ariaLabelledBy
      }));
    }
  }, {
    key: "renderLabel",
    value: function renderLabel(label) {
      var _this9 = this;

      if (this.props.editable) {
        var value = label || this.props.value || '';
        return _react.default.createElement("input", {
          ref: function ref(el) {
            return _this9.editableInput = el;
          },
          type: "text",
          defaultValue: value,
          className: "p-dropdown-label p-inputtext",
          disabled: this.props.disabled,
          placeholder: this.props.placeholder,
          onClick: this.onEditableInputClick,
          onInput: this.onEditableInputChange,
          onFocus: this.onEditableInputFocus,
          onBlur: this.onInputBlur,
          "aria-label": this.props.ariaLabel,
          "aria-labelledby": this.props.ariaLabelledBy
        });
      } else {
        var className = (0, _classnames.default)('p-dropdown-label p-inputtext', {
          'p-placeholder': label === null && this.props.placeholder,
          'p-dropdown-label-empty': label === null && !this.props.placeholder
        });
        return _react.default.createElement("label", {
          className: className
        }, label || this.props.placeholder || 'empty');
      }
    }
  }, {
    key: "renderClearIcon",
    value: function renderClearIcon() {
      if (this.props.value && this.props.showClear && !this.props.disabled) {
        return _react.default.createElement("i", {
          className: "p-dropdown-clear-icon pi pi-times",
          onClick: this.clear
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderDropdownIcon",
    value: function renderDropdownIcon() {
      return _react.default.createElement("div", {
        className: "p-dropdown-trigger"
      }, _react.default.createElement("span", {
        className: "p-dropdown-trigger-icon pi pi-chevron-down p-clickable"
      }));
    }
  }, {
    key: "renderItems",
    value: function renderItems(selectedOption) {
      var _this10 = this;

      var items = this.props.options;

      if (items && this.hasFilter()) {
        items = items && items.filter(function (option) {
          return _this10.filter(option);
        });
      }

      if (items) {
        return items.map(function (option) {
          var optionLabel = _this10.getOptionLabel(option);

          return _react.default.createElement(_DropdownItem.DropdownItem, {
            key: _this10.getOptionKey(option),
            label: optionLabel,
            option: option,
            template: _this10.props.itemTemplate,
            selected: selectedOption === option,
            onClick: _this10.onOptionClick
          });
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderFilter",
    value: function renderFilter() {
      var _this11 = this;

      if (this.props.filter) {
        return _react.default.createElement("div", {
          className: "p-dropdown-filter-container"
        }, _react.default.createElement("input", {
          ref: function ref(el) {
            return _this11.filterInput = el;
          },
          type: "text",
          autoComplete: "off",
          className: "p-dropdown-filter p-inputtext p-component",
          placeholder: this.props.filterPlaceholder,
          onKeyDown: this.onFilterInputKeyDown,
          onChange: this.onFilterInputChange
        }), _react.default.createElement("span", {
          className: "p-dropdown-filter-icon pi pi-search"
        }));
      } else {
        return null;
      }
    }
  }, {
    key: "getOptionLabel",
    value: function getOptionLabel(option) {
      return this.props.optionLabel ? _ObjectUtils.default.resolveFieldData(option, this.props.optionLabel) : option.label;
    }
  }, {
    key: "getOptionKey",
    value: function getOptionKey(option) {
      return this.props.dataKey ? _ObjectUtils.default.resolveFieldData(option, this.props.dataKey) : this.getOptionLabel(option);
    }
  }, {
    key: "unbindWindowLoadListener",
    value: function unbindWindowLoadListener() {
      if (this.windowLoadListener) {
        window.removeEventListener('load', this.windowLoadListener);
      }
    }
  }, {
    key: "checkValidity",
    value: function checkValidity() {
      return this.nativeSelect.checkValidity;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this12 = this;

      if (this.props.autoFocus && this.focusInput) {
        this.windowLoadListener = function () {
          _this12.focusInput.focus();
        };

        window.addEventListener('load', this.windowLoadListener);
      }

      if (this.props.tooltip) {
        this.renderTooltip();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindDocumentClickListener();
      this.unbindWindowLoadListener();

      if (this.tooltip) {
        this.tooltip.destroy();
        this.tooltip = null;
      }

      if (this.hideTimeout) {
        clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.filter) {
        this.alignPanel();
      }

      if (this.panel.element.offsetParent) {
        var highlightItem = _DomHandler.default.findSingle(this.panel.element, 'li.p-highlight');

        if (highlightItem) {
          _DomHandler.default.scrollInView(this.panel.itemsWrapper, highlightItem);
        }
      }

      if (this.props.tooltip && prevProps.tooltip !== this.props.tooltip) {
        if (this.tooltip) this.tooltip.updateContent(this.props.tooltip);else this.renderTooltip();
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
    key: "render",
    value: function render() {
      var _this13 = this;

      var className = (0, _classnames.default)('p-dropdown p-component', this.props.className, {
        'p-disabled': this.props.disabled,
        'p-dropdown-clearable': this.props.showClear && !this.props.disabled
      });
      var selectedOption = this.findOption(this.props.value);
      var label = selectedOption ? this.getOptionLabel(selectedOption) : null;
      var keyboardHelper = this.renderKeyboardHelper();
      var labelElement = this.renderLabel(label);
      var dropdownIcon = this.renderDropdownIcon();
      var items = this.renderItems(selectedOption);
      var filterElement = this.renderFilter();
      var clearIcon = this.renderClearIcon();

      if (this.props.editable && this.editableInput) {
        var value = label || this.props.value || '';
        this.editableInput.value = value;
      }

      return _react.default.createElement("div", {
        id: this.props.id,
        ref: function ref(el) {
          return _this13.container = el;
        },
        className: className,
        style: this.props.style,
        onClick: this.onClick,
        onMouseDown: this.props.onMouseDown,
        onContextMenu: this.props.onContextMenu
      }, keyboardHelper, labelElement, clearIcon, dropdownIcon, _react.default.createElement(_DropdownPanel.DropdownPanel, {
        ref: function ref(el) {
          return _this13.panel = el;
        },
        appendTo: this.props.appendTo,
        panelStyle: this.props.panelStyle,
        panelClassName: this.props.panelClassName,
        scrollHeight: this.props.scrollHeight,
        onClick: this.panelClick,
        filter: filterElement
      }, items));
    }
  }]);

  return Dropdown;
}(_react.Component);

exports.Dropdown = Dropdown;

_defineProperty(Dropdown, "defaultProps", {
  id: null,
  value: null,
  options: null,
  optionLabel: null,
  itemTemplate: null,
  style: null,
  className: null,
  scrollHeight: '200px',
  filter: false,
  filterPlaceholder: null,
  editable: false,
  placeholder: null,
  required: false,
  disabled: false,
  appendTo: null,
  tabIndex: null,
  autoFocus: false,
  panelClassName: null,
  panelStyle: null,
  dataKey: null,
  inputId: null,
  showClear: false,
  tooltip: null,
  tooltipOptions: null,
  ariaLabel: null,
  ariaLabelledBy: null,
  onChange: null,
  onMouseDown: null,
  onContextMenu: null
});

_defineProperty(Dropdown, "propTypes", {
  id: _propTypes.default.string,
  value: _propTypes.default.any,
  options: _propTypes.default.array,
  optionLabel: _propTypes.default.string,
  itemTemplate: _propTypes.default.func,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  scrollHeight: _propTypes.default.string,
  filter: _propTypes.default.bool,
  filterPlaceholder: _propTypes.default.string,
  editable: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  appendTo: _propTypes.default.any,
  tabIndex: _propTypes.default.number,
  autoFocus: _propTypes.default.bool,
  lazy: _propTypes.default.bool,
  panelClassName: _propTypes.default.string,
  panelstyle: _propTypes.default.object,
  dataKey: _propTypes.default.string,
  inputId: _propTypes.default.string,
  showClear: _propTypes.default.bool,
  tooltip: _propTypes.default.string,
  tooltipOptions: _propTypes.default.object,
  ariaLabel: _propTypes.default.string,
  ariaLabelledBy: _propTypes.default.string,
  onChange: _propTypes.default.func,
  onMouseDown: _propTypes.default.func,
  onContextMenu: _propTypes.default.func
});