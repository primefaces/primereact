"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Inplace = exports.InplaceContent = exports.InplaceDisplay = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = require("../button/Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var InplaceDisplay =
/*#__PURE__*/
function (_Component) {
  _inherits(InplaceDisplay, _Component);

  function InplaceDisplay() {
    _classCallCheck(this, InplaceDisplay);

    return _possibleConstructorReturn(this, _getPrototypeOf(InplaceDisplay).apply(this, arguments));
  }

  _createClass(InplaceDisplay, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.default.Fragment, null, this.props.children);
    }
  }]);

  return InplaceDisplay;
}(_react.Component);

exports.InplaceDisplay = InplaceDisplay;

var InplaceContent =
/*#__PURE__*/
function (_Component2) {
  _inherits(InplaceContent, _Component2);

  function InplaceContent() {
    _classCallCheck(this, InplaceContent);

    return _possibleConstructorReturn(this, _getPrototypeOf(InplaceContent).apply(this, arguments));
  }

  _createClass(InplaceContent, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.default.Fragment, null, this.props.children);
    }
  }]);

  return InplaceContent;
}(_react.Component);

exports.InplaceContent = InplaceContent;

var Inplace =
/*#__PURE__*/
function (_Component3) {
  _inherits(Inplace, _Component3);

  function Inplace(props) {
    var _this;

    _classCallCheck(this, Inplace);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Inplace).call(this, props));

    if (!_this.props.onToggle) {
      _this.state = {
        active: false
      };
    }

    _this.open = _this.open.bind(_assertThisInitialized(_this));
    _this.close = _this.close.bind(_assertThisInitialized(_this));
    _this.onDisplayKeyDown = _this.onDisplayKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Inplace, [{
    key: "open",
    value: function open(event) {
      if (this.props.disabled) {
        return;
      }

      if (this.props.onOpen) {
        this.props.onOpen(event);
      }

      if (this.props.onToggle) {
        this.props.onToggle({
          originalEvent: event,
          value: true
        });
      } else {
        this.setState({
          active: true
        });
      }
    }
  }, {
    key: "close",
    value: function close(event) {
      if (this.props.onClose) {
        this.props.onClose(event);
      }

      if (this.props.onToggle) {
        this.props.onToggle({
          originalEvent: event,
          value: false
        });
      } else {
        this.setState({
          active: false
        });
      }
    }
  }, {
    key: "onDisplayKeyDown",
    value: function onDisplayKeyDown(event) {
      if (event.key === 'Enter') {
        this.open(event);
        event.preventDefault();
      }
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return this.props.onToggle ? this.props.active : this.state.active;
    }
  }, {
    key: "renderDisplay",
    value: function renderDisplay(content) {
      var className = (0, _classnames.default)('p-inplace-display', {
        'p-disabled': this.props.disabled
      });
      return _react.default.createElement("div", {
        className: className,
        onClick: this.open,
        onKeyDown: this.onDisplayKeyDown,
        tabIndex: this.props.tabIndex
      }, content);
    }
  }, {
    key: "renderCloseButton",
    value: function renderCloseButton() {
      if (this.props.closable) {
        return _react.default.createElement(_Button.Button, {
          type: "button",
          icon: "pi pi-times",
          onClick: this.close
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderContent",
    value: function renderContent(content) {
      var closeButton = this.renderCloseButton();
      return _react.default.createElement("div", {
        className: "p-inplace-content"
      }, content, closeButton);
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this2 = this;

      var active = this.isActive();
      return _react.default.Children.map(this.props.children, function (child, i) {
        if (active && child.type === InplaceContent) {
          return _this2.renderContent(child);
        } else if (!active && child.type === InplaceDisplay) {
          return _this2.renderDisplay(child);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var className = (0, _classnames.default)('p-inplace p-component', {
        'p-inplace-closable': this.props.closable
      }, this.props.className);
      return _react.default.createElement("div", {
        className: className
      }, this.renderChildren());
    }
  }]);

  return Inplace;
}(_react.Component);

exports.Inplace = Inplace;

_defineProperty(Inplace, "defaultProps", {
  style: null,
  className: null,
  active: false,
  closable: false,
  disabled: false,
  tabIndex: '0',
  onOpen: null,
  onClose: null,
  onToggle: null
});

_defineProperty(Inplace, "propTypes", {
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  active: _propTypes.default.bool,
  closable: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  tabIndex: _propTypes.default.string,
  onOpen: _propTypes.default.func,
  onClose: _propTypes.default.func,
  onToggle: _propTypes.default.func
});