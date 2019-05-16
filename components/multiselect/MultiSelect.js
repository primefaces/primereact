"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiSelect = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

var _ObjectUtils = _interopRequireDefault(require("../utils/ObjectUtils"));

var _classnames = _interopRequireDefault(require("classnames"));

var _MultiSelectPanel = require("./MultiSelectPanel");

var _MultiSelectItem = require("./MultiSelectItem");

var _MultiSelectHeader = require("./MultiSelectHeader");

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

var MultiSelect =
/*#__PURE__*/
function (_Component) {
  _inherits(MultiSelect, _Component);

  function MultiSelect(props) {
    var _this;

    _classCallCheck(this, MultiSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MultiSelect).call(this, props));
    _this.state = {
      filter: ''
    };
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onPanelClick = _this.onPanelClick.bind(_assertThisInitialized(_this));
    _this.onOptionClick = _this.onOptionClick.bind(_assertThisInitialized(_this));
    _this.onOptionKeyDown = _this.onOptionKeyDown.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onFilter = _this.onFilter.bind(_assertThisInitialized(_this));
    _this.onCloseClick = _this.onCloseClick.bind(_assertThisInitialized(_this));
    _this.onToggleAll = _this.onToggleAll.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MultiSelect, [{
    key: "onOptionClick",
    value: function onOptionClick(event) {
      var optionValue = this.getOptionValue(event.option);
      var selectionIndex = this.findSelectionIndex(optionValue);
      var newValue;
      if (selectionIndex !== -1) newValue = this.props.value.filter(function (val, i) {
        return i !== selectionIndex;
      });else newValue = [].concat(_toConsumableArray(this.props.value || []), [optionValue]);
      this.updateModel(event.originalEvent, newValue);
    }
  }, {
    key: "onOptionKeyDown",
    value: function onOptionKeyDown(event) {
      var listItem = event.originalEvent.currentTarget;

      switch (event.originalEvent.which) {
        //down
        case 40:
          var nextItem = this.findNextItem(listItem);

          if (nextItem) {
            nextItem.focus();
          }

          event.originalEvent.preventDefault();
          break;
        //up

        case 38:
          var prevItem = this.findPrevItem(listItem);

          if (prevItem) {
            prevItem.focus();
          }

          event.originalEvent.preventDefault();
          break;
        //enter

        case 13:
          this.onOptionClick(event);
          event.originalEvent.preventDefault();
          break;

        default:
          break;
      }
    }
  }, {
    key: "findNextItem",
    value: function findNextItem(item) {
      var nextItem = item.nextElementSibling;
      if (nextItem) return !_DomHandler.default.hasClass(nextItem, 'p-multiselect-item') ? this.findNextItem(nextItem) : nextItem;else return null;
    }
  }, {
    key: "findPrevItem",
    value: function findPrevItem(item) {
      var prevItem = item.previousElementSibling;
      if (prevItem) return !_DomHandler.default.hasClass(prevItem, 'p-multiselect-item') ? this.findPrevItem(prevItem) : prevItem;else return null;
    }
  }, {
    key: "onClick",
    value: function onClick() {
      if (this.props.disabled) {
        return;
      }

      if (this.documentClickListener) {
        this.selfClick = true;
      }

      if (!this.panelClick) {
        if (this.panel.element.offsetParent) {
          this.hide();
        } else {
          this.focusInput.focus();
          this.show();
        }
      }
    }
  }, {
    key: "onToggleAll",
    value: function onToggleAll(event) {
      var newValue;

      if (event.checked) {
        newValue = [];
      } else {
        var options = this.hasFilter() ? this.filterOptions(this.props.options) : this.props.options;

        if (options) {
          newValue = [];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var option = _step.value;
              newValue.push(this.getOptionValue(option));
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }

      this.updateModel(event.originalEvent, newValue);
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
    key: "onFilter",
    value: function onFilter(event) {
      this.setState({
        filter: event.query
      });
    }
  }, {
    key: "onPanelClick",
    value: function onPanelClick() {
      this.panelClick = true;
    }
  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      if (this.props.options && this.props.options.length) {
        this.panel.element.style.zIndex = String(_DomHandler.default.generateZIndex());
        this.panel.element.style.display = 'block';
        setTimeout(function () {
          _DomHandler.default.addClass(_this2.panel.element, 'p-input-overlay-visible');

          _DomHandler.default.removeClass(_this2.panel.element, 'p-input-overlay-hidden');
        }, 1);
        this.alignPanel();
        this.bindDocumentClickListener();
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this3 = this;

      _DomHandler.default.addClass(this.panel.element, 'p-input-overlay-hidden');

      _DomHandler.default.removeClass(this.panel.element, 'p-input-overlay-visible');

      this.unbindDocumentClickListener();
      this.clearClickState();
      setTimeout(function () {
        _this3.panel.element.style.display = 'none';

        _DomHandler.default.removeClass(_this3.panel.element, 'p-input-overlay-hidden');
      }, 150);
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
    key: "onCloseClick",
    value: function onCloseClick(event) {
      this.hide();
      event.preventDefault();
      event.stopPropagation();
    }
  }, {
    key: "findSelectionIndex",
    value: function findSelectionIndex(value) {
      var index = -1;

      if (this.props.value) {
        for (var i = 0; i < this.props.value.length; i++) {
          if (_ObjectUtils.default.equals(this.props.value[i], value, this.props.dataKey)) {
            index = i;
            break;
          }
        }
      }

      return index;
    }
  }, {
    key: "isSelected",
    value: function isSelected(option) {
      return this.findSelectionIndex(this.getOptionValue(option)) !== -1;
    }
  }, {
    key: "findLabelByValue",
    value: function findLabelByValue(val) {
      var label = null;

      for (var i = 0; i < this.props.options.length; i++) {
        var option = this.props.options[i];
        var optionValue = this.getOptionValue(option);

        if (_ObjectUtils.default.equals(optionValue, val)) {
          label = this.getOptionLabel(option);
          break;
        }
      }

      return label;
    }
  }, {
    key: "onFocus",
    value: function onFocus(event) {
      _DomHandler.default.addClass(this.container, 'p-focus');

      if (this.props.onFocus) {
        this.props.onFocus(event);
      }
    }
  }, {
    key: "onBlur",
    value: function onBlur(event) {
      _DomHandler.default.removeClass(this.container, 'p-focus');

      if (this.props.onBlur) {
        this.props.onBlur(event);
      }
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
    key: "unbindDocumentClickListener",
    value: function unbindDocumentClickListener() {
      if (this.documentClickListener) {
        document.removeEventListener('click', this.documentClickListener);
        this.documentClickListener = null;
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
      this.unbindDocumentClickListener();

      if (this.tooltip) {
        this.tooltip.destroy();
        this.tooltip = null;
      }
    }
  }, {
    key: "onDocumentClick",
    value: function onDocumentClick() {
      if (!this.selfClick && !this.panelClick && this.panel.element.offsetParent) {
        this.hide();
      }

      this.clearClickState();
    }
  }, {
    key: "clearClickState",
    value: function clearClickState() {
      this.selfClick = false;
      this.panelClick = false;
    }
  }, {
    key: "filterOption",
    value: function filterOption(option) {
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
    key: "isAllChecked",
    value: function isAllChecked(visibleOptions) {
      if (this.hasFilter()) return this.props.value && visibleOptions && visibleOptions.length && this.props.value.length === visibleOptions.length;else return this.props.value && this.props.options && this.props.value.length === this.props.options.length;
    }
  }, {
    key: "filterOptions",
    value: function filterOptions(options) {
      var _this4 = this;

      return options.filter(function (option) {
        return _this4.filterOption(option);
      });
    }
  }, {
    key: "getOptionValue",
    value: function getOptionValue(option) {
      return this.props.optionLabel ? option : option.value;
    }
  }, {
    key: "getOptionLabel",
    value: function getOptionLabel(option) {
      return this.props.optionLabel ? _ObjectUtils.default.resolveFieldData(option, this.props.optionLabel) : option.label;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return !this.props.value || this.props.value.length === 0;
    }
  }, {
    key: "getLabel",
    value: function getLabel() {
      var label;

      if (!this.isEmpty() && !this.props.fixedPlaceholder) {
        label = '';

        for (var i = 0; i < this.props.value.length; i++) {
          if (i !== 0) {
            label += ',';
          }

          label += this.findLabelByValue(this.props.value[i]);
        }
      }

      return label;
    }
  }, {
    key: "getLabelContent",
    value: function getLabelContent() {
      var _this5 = this;

      if (this.props.selectedItemTemplate) {
        if (this.props.value && this.props.value.length) {
          return this.props.value.map(function (val, index) {
            return _react.default.createElement(_react.default.Fragment, {
              key: index
            }, _this5.props.selectedItemTemplate(val));
          });
        } else {
          return this.props.selectedItemTemplate();
        }
      } else {
        return this.getLabel();
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
    key: "renderHeader",
    value: function renderHeader(items) {
      return _react.default.createElement(_MultiSelectHeader.MultiSelectHeader, {
        filter: this.props.filter,
        filterValue: this.state.filter,
        onFilter: this.onFilter,
        onClose: this.onCloseClick,
        onToggleAll: this.onToggleAll,
        allChecked: this.isAllChecked(items)
      });
    }
  }, {
    key: "renderLabel",
    value: function renderLabel() {
      var empty = this.isEmpty();
      var content = this.getLabelContent();
      var className = (0, _classnames.default)('p-multiselect-label', {
        'p-placeholder': empty && this.props.placeholder,
        'p-multiselect-label-empty': empty && !this.props.placeholder && !this.props.selectedItemTemplate
      });
      return _react.default.createElement("div", {
        className: "p-multiselect-label-container"
      }, _react.default.createElement("label", {
        className: className
      }, content || this.props.placeholder || 'empty'));
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var className = (0, _classnames.default)('p-multiselect p-component', this.props.className, {
        'p-disabled': this.props.disabled
      });
      var label = this.renderLabel();
      var items = this.props.options;

      if (items) {
        if (this.hasFilter()) {
          items = this.filterOptions(items);
        }

        items = items.map(function (option, index) {
          var optionLabel = _this6.getOptionLabel(option);

          return _react.default.createElement(_MultiSelectItem.MultiSelectItem, {
            key: optionLabel + '_' + index,
            label: optionLabel,
            option: option,
            template: _this6.props.itemTemplate,
            selected: _this6.isSelected(option),
            onClick: _this6.onOptionClick,
            onKeyDown: _this6.onOptionKeyDown,
            tabIndex: _this6.props.tabIndex
          });
        });
      }

      var header = this.renderHeader(items);
      return _react.default.createElement("div", {
        id: this.props.id,
        className: className,
        onClick: this.onClick,
        ref: function ref(el) {
          return _this6.container = el;
        },
        style: this.props.style
      }, _react.default.createElement("div", {
        className: "p-hidden-accessible"
      }, _react.default.createElement("input", {
        readOnly: true,
        type: "text",
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        ref: function ref(el) {
          return _this6.focusInput = el;
        }
      })), label, _react.default.createElement("div", {
        className: "p-multiselect-trigger"
      }, _react.default.createElement("span", {
        className: "p-multiselect-trigger-icon pi pi-chevron-down p-c"
      })), _react.default.createElement(_MultiSelectPanel.MultiSelectPanel, {
        ref: function ref(el) {
          return _this6.panel = el;
        },
        header: header,
        appendTo: this.props.appendTo,
        onClick: this.onPanelClick,
        scrollHeight: this.props.scrollHeight
      }, items));
    }
  }]);

  return MultiSelect;
}(_react.Component);

exports.MultiSelect = MultiSelect;

_defineProperty(MultiSelect, "defaultProps", {
  id: null,
  value: null,
  options: null,
  optionLabel: null,
  style: null,
  className: null,
  scrollHeight: '200px',
  placeholder: null,
  fixedPlaceholder: false,
  disabled: false,
  filter: false,
  tabIndex: '0',
  dataKey: null,
  appendTo: null,
  tooltip: null,
  tooltipOptions: null,
  itemTemplate: null,
  selectedItemTemplate: null,
  onChange: null,
  onFocus: null,
  onBlur: null
});

_defineProperty(MultiSelect, "propTypes", {
  id: _propTypes.default.string,
  value: _propTypes.default.any,
  options: _propTypes.default.array,
  optionLabel: _propTypes.default.string,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  scrollHeight: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  fixedPlaceholder: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  filter: _propTypes.default.bool,
  tabIndex: _propTypes.default.string,
  dataKey: _propTypes.default.string,
  appendTo: _propTypes.default.object,
  tooltip: _propTypes.default.string,
  tooltipOptions: _propTypes.default.object,
  itemTemplate: _propTypes.default.func,
  selectedItemTemplate: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func
});