"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListBox = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ObjectUtils = _interopRequireDefault(require("../utils/ObjectUtils"));

var _ListBoxItem = require("./ListBoxItem");

var _ListBoxHeader = require("./ListBoxHeader");

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

var ListBox =
/*#__PURE__*/
function (_Component) {
  _inherits(ListBox, _Component);

  function ListBox() {
    var _this;

    _classCallCheck(this, ListBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ListBox).call(this));
    _this.state = {
      filter: ''
    };
    _this.onFilter = _this.onFilter.bind(_assertThisInitialized(_this));
    _this.onOptionClick = _this.onOptionClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ListBox, [{
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
    key: "onOptionClick",
    value: function onOptionClick(event) {
      if (this.props.disabled) {
        return;
      }

      if (this.props.multiple) this.onOptionClickMultiple(event.originalEvent, event.option);else this.onOptionClickSingle(event.originalEvent, event.option);
      this.optionTouched = false;
    }
  }, {
    key: "onOptionTouchEnd",
    value: function onOptionTouchEnd(event, option) {
      if (this.props.disabled) {
        return;
      }

      this.optionTouched = true;
    }
  }, {
    key: "onOptionClickSingle",
    value: function onOptionClickSingle(event, option) {
      var selected = this.isSelected(option);
      var valueChanged = false;
      var value = null;
      var metaSelection = this.optionTouched ? false : this.props.metaKeySelection;

      if (metaSelection) {
        var metaKey = event.metaKey || event.ctrlKey;

        if (selected) {
          if (metaKey) {
            value = null;
            valueChanged = true;
          }
        } else {
          value = this.getOptionValue(option);
          valueChanged = true;
        }
      } else {
        value = selected ? null : this.getOptionValue(option);
        valueChanged = true;
      }

      if (valueChanged) {
        this.updateModel(event, value);
      }
    }
  }, {
    key: "onOptionClickMultiple",
    value: function onOptionClickMultiple(event, option) {
      var selected = this.isSelected(option);
      var valueChanged = false;
      var value = null;
      var metaSelection = this.optionTouched ? false : this.props.metaKeySelection;

      if (metaSelection) {
        var metaKey = event.metaKey || event.ctrlKey;

        if (selected) {
          if (metaKey) value = this.removeOption(option);else value = [this.getOptionValue(option)];
          valueChanged = true;
        } else {
          value = metaKey ? this.props.value || [] : [];
          value = [].concat(_toConsumableArray(value), [this.getOptionValue(option)]);
          valueChanged = true;
        }
      } else {
        if (selected) value = this.removeOption(option);else value = [].concat(_toConsumableArray(this.props.value || []), [this.getOptionValue(option)]);
        valueChanged = true;
      }

      if (valueChanged) {
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
    key: "removeOption",
    value: function removeOption(option) {
      var _this2 = this;

      return this.props.value.filter(function (val) {
        return !_ObjectUtils.default.equals(val, _this2.getOptionValue(option), _this2.props.dataKey);
      });
    }
  }, {
    key: "isSelected",
    value: function isSelected(option) {
      var selected = false;
      var optionValue = this.getOptionValue(option);

      if (this.props.multiple) {
        if (this.props.value) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.props.value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var val = _step.value;

              if (_ObjectUtils.default.equals(val, optionValue, this.props.dataKey)) {
                selected = true;
                break;
              }
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
      } else {
        selected = _ObjectUtils.default.equals(this.props.value, optionValue, this.props.dataKey);
      }

      return selected;
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
    key: "render",
    value: function render() {
      var _this3 = this;

      var className = (0, _classnames.default)('p-listbox p-inputtext p-component', this.props.className, {
        'p-disabled': this.props.disabled
      });
      var items = this.props.options;
      var header;

      if (this.props.options) {
        if (this.hasFilter()) {
          items = items.filter(function (option) {
            return _this3.filter(option);
          });
        }

        items = items.map(function (option, index) {
          var optionLabel = _this3.getOptionLabel(option);

          return _react.default.createElement(_ListBoxItem.ListBoxItem, {
            key: optionLabel,
            label: optionLabel,
            option: option,
            template: _this3.props.itemTemplate,
            selected: _this3.isSelected(option),
            onClick: _this3.onOptionClick,
            onTouchEnd: function onTouchEnd(e) {
              return _this3.onOptionTouchEnd(e, option, index);
            },
            tabIndex: _this3.props.tabIndex
          });
        });
      }

      if (this.props.filter) {
        header = _react.default.createElement(_ListBoxHeader.ListBoxHeader, {
          filter: this.state.filter,
          onFilter: this.onFilter,
          disabled: this.props.disabled
        });
      }

      return _react.default.createElement("div", {
        ref: function ref(el) {
          return _this3.element = el;
        },
        id: this.props.id,
        className: className,
        style: this.props.style
      }, header, _react.default.createElement("div", {
        className: "p-listbox-list-wrapper"
      }, _react.default.createElement("ul", {
        className: "p-listbox-list",
        style: this.props.listStyle
      }, items)));
    }
  }]);

  return ListBox;
}(_react.Component);

exports.ListBox = ListBox;

_defineProperty(ListBox, "defaultProps", {
  id: null,
  value: null,
  options: null,
  optionLabel: null,
  itemTemplate: null,
  style: null,
  listStyle: null,
  className: null,
  disabled: null,
  dataKey: null,
  multiple: false,
  metaKeySelection: false,
  filter: false,
  tabIndex: '0',
  tooltip: null,
  tooltipOptions: null,
  onChange: null
});

_defineProperty(ListBox, "propTypes", {
  id: _propTypes.default.string,
  value: _propTypes.default.any,
  options: _propTypes.default.array,
  optionLabel: _propTypes.default.string,
  itemTemplate: _propTypes.default.func,
  style: _propTypes.default.object,
  listStyle: _propTypes.default.object,
  className: _propTypes.default.string,
  dataKey: _propTypes.default.string,
  multiple: _propTypes.default.bool,
  metaKeySelection: _propTypes.default.bool,
  filter: _propTypes.default.bool,
  tabIndex: _propTypes.default.string,
  tooltip: _propTypes.default.string,
  tooltipOptions: _propTypes.default.object,
  onChange: _propTypes.default.func
});