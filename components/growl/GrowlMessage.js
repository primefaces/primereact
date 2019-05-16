"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GrowlMessage = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

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

var GrowlMessage =
/*#__PURE__*/
function (_Component) {
  _inherits(GrowlMessage, _Component);

  function GrowlMessage(props) {
    var _this;

    _classCallCheck(this, GrowlMessage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GrowlMessage).call(this, props));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onClose = _this.onClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(GrowlMessage, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.props.message.sticky) {
        this.timeout = setTimeout(function () {
          _this2.onClose(null);
        }, this.props.message.life || 3000);
      }
    }
  }, {
    key: "onClose",
    value: function onClose(event) {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      if (this.props.onClose) {
        this.props.onClose(this.props.message);
      }

      if (event) {
        event.preventDefault();
      }
    }
  }, {
    key: "onClick",
    value: function onClick() {
      if (this.props.onClick) {
        this.props.onClick(this.props.message);
      }
    }
  }, {
    key: "renderCloseIcon",
    value: function renderCloseIcon() {
      if (this.props.message.closable !== false) {
        return _react.default.createElement("button", {
          className: "p-growl-icon-close p-link",
          onClick: this.onClose
        }, _react.default.createElement("span", {
          className: "p-growl-icon-close-icon pi pi-times"
        }));
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var className = (0, _classnames.default)('p-growl-item-container p-highlight', {
        'p-growl-message-info': this.props.message.severity === 'info',
        'p-growl-message-warn': this.props.message.severity === 'warn',
        'p-growl-message-error': this.props.message.severity === 'error',
        'p-growl-message-success': this.props.message.severity === 'success'
      });
      var iconClassName = (0, _classnames.default)('p-growl-image pi', {
        'pi-info-circle': this.props.message.severity === 'info',
        'pi-exclamation-triangle': this.props.message.severity === 'warn',
        'pi-times': this.props.message.severity === 'error',
        'pi-check': this.props.message.severity === 'success'
      });
      var closeIcon = this.renderCloseIcon();
      return _react.default.createElement("div", {
        ref: function ref(el) {
          _this3.element = el;
        },
        className: className,
        "aria-live": "polite",
        onClick: this.onClick
      }, _react.default.createElement("div", {
        className: "p-growl-item"
      }, closeIcon, _react.default.createElement("span", {
        className: iconClassName
      }), _react.default.createElement("div", {
        className: "p-growl-message"
      }, _react.default.createElement("span", {
        className: "p-growl-title"
      }, this.props.message.summary), _react.default.createElement("p", null, this.props.message.detail))));
    }
  }]);

  return GrowlMessage;
}(_react.Component);

exports.GrowlMessage = GrowlMessage;

_defineProperty(GrowlMessage, "defaultProps", {
  message: null,
  onClose: null,
  onClick: null
});

_defineProperty(GrowlMessage, "propTypes", {
  message: _propTypes.default.object,
  onClose: _propTypes.default.func,
  onClick: _propTypes.default.func
});