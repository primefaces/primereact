"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SplitButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = require("../button/Button");

var _classnames = _interopRequireDefault(require("classnames"));

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

var _SplitButtonItem = require("./SplitButtonItem");

var _SplitButtonPanel = require("./SplitButtonPanel");

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

var SplitButton =
/*#__PURE__*/
function (_Component) {
  _inherits(SplitButton, _Component);

  function SplitButton(props) {
    var _this;

    _classCallCheck(this, SplitButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SplitButton).call(this, props));
    _this.onDropdownButtonClick = _this.onDropdownButtonClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SplitButton, [{
    key: "onDropdownButtonClick",
    value: function onDropdownButtonClick(event) {
      if (this.documentClickListener) {
        this.dropdownClick = true;
      }

      if (this.panel.element.offsetParent) this.hide();else this.show();
    }
  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      this.panel.element.style.zIndex = String(_DomHandler.default.generateZIndex());
      this.panel.element.style.display = 'block';
      setTimeout(function () {
        _DomHandler.default.addClass(_this2.panel.element, 'p-menu-overlay-visible');

        _DomHandler.default.removeClass(_this2.panel.element, 'p-menu-overlay-hidden');
      }, 1);
      this.alignPanel();
      this.bindDocumentListener();
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this3 = this;

      if (this.panel && this.panel.element) {
        _DomHandler.default.addClass(this.panel.element, 'p-menu-overlay-hidden');

        _DomHandler.default.removeClass(this.panel.element, 'p-menu-overlay-visible');

        setTimeout(function () {
          if (_this3.panel && _this3.panel.element) {
            _this3.panel.element.style.display = 'none';

            _DomHandler.default.removeClass(_this3.panel.element, 'p-menu-overlay-hidden');
          }
        }, 150);
      }

      this.unbindDocumentListener();
      this.dropdownClick = false;
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
    key: "bindDocumentListener",
    value: function bindDocumentListener() {
      var _this4 = this;

      if (!this.documentClickListener) {
        this.documentClickListener = function () {
          if (_this4.dropdownClick) _this4.dropdownClick = false;else _this4.hide();
        };

        document.addEventListener('click', this.documentClickListener);
      }
    }
  }, {
    key: "unbindDocumentListener",
    value: function unbindDocumentListener() {
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
      this.unbindDocumentListener();

      if (this.tooltip) {
        this.tooltip.destroy();
        this.tooltip = null;
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
    key: "renderItems",
    value: function renderItems() {
      if (this.props.model) {
        return this.props.model.map(function (menuitem, index) {
          return _react.default.createElement(_SplitButtonItem.SplitButtonItem, {
            menuitem: menuitem,
            key: index
          });
        });
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var className = (0, _classnames.default)('p-splitbutton p-buttonset p-component', this.props.className, {
        'p-disabled': this.props.disabled
      });
      var items = this.renderItems();
      return _react.default.createElement("div", {
        id: this.props.id,
        className: className,
        style: this.props.style,
        ref: function ref(el) {
          return _this5.container = el;
        }
      }, _react.default.createElement(_Button.Button, {
        type: "button",
        icon: this.props.icon,
        label: this.props.label,
        onClick: this.props.onClick,
        disabled: this.props.disabled,
        tabIndex: this.props.tabIndex
      }), _react.default.createElement(_Button.Button, {
        type: "button",
        className: "p-splitbutton-menubutton",
        icon: "pi pi-caret-down",
        onClick: this.onDropdownButtonClick,
        disabled: this.props.disabled
      }), _react.default.createElement(_SplitButtonPanel.SplitButtonPanel, {
        ref: function ref(el) {
          return _this5.panel = el;
        },
        appendTo: this.props.appendTo,
        menuStyle: this.props.menuStyle,
        menuClassName: this.props.menuClassName
      }, items));
    }
  }]);

  return SplitButton;
}(_react.Component);

exports.SplitButton = SplitButton;

_defineProperty(SplitButton, "defaultProps", {
  id: null,
  label: null,
  icon: null,
  model: null,
  disabled: null,
  style: null,
  className: null,
  menuStyle: null,
  menuClassName: null,
  tabIndex: null,
  onClick: null,
  appendTo: null,
  tooltip: null,
  tooltipOptions: null
});

_defineProperty(SplitButton, "propTypes", {
  id: _propTypes.default.string,
  label: _propTypes.default.string,
  icon: _propTypes.default.string,
  model: _propTypes.default.array,
  disabled: _propTypes.default.bool,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  menustyle: _propTypes.default.object,
  menuClassName: _propTypes.default.string,
  tabIndex: _propTypes.default.string,
  onClick: _propTypes.default.func,
  appendTo: _propTypes.default.object,
  tooltip: _propTypes.default.string,
  tooltipOptions: _propTypes.default.object
});