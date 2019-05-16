"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UIMessage = void 0;

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

var UIMessage =
/*#__PURE__*/
function (_Component) {
  _inherits(UIMessage, _Component);

  function UIMessage(props) {
    var _this;

    _classCallCheck(this, UIMessage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UIMessage).call(this, props));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onClose = _this.onClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UIMessage, [{
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
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timeout) {
        clearTimeout(this.timeout);
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
        event.stopPropagation();
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
          className: "p-messages-close p-link",
          onClick: this.onClose
        }, _react.default.createElement("i", {
          className: "p-messages-close-icon pi pi-times"
        }));
      } else {
        return null;
      }
    }
  }, {
    key: "renderMessages",
    value: function renderMessages() {
      if (this.props.message) {
        return _react.default.createElement("ul", null, _react.default.createElement("li", {
          key: this.props.message.id
        }, _react.default.createElement("span", {
          className: "p-messages-summary"
        }, this.props.message.summary), _react.default.createElement("span", {
          className: "p-messages-detail"
        }, this.props.message.detail)));
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var className = 'p-messages p-component p-messages-' + this.props.message.severity;
      var icon = (0, _classnames.default)('p-messages-icon pi ', {
        'pi-info-circle': this.props.message.severity === 'info',
        'pi-exclamation-triangle': this.props.message.severity === 'warn',
        'pi-times': this.props.message.severity === 'error',
        'pi-check': this.props.message.severity === 'success'
      });
      var closeIcon = this.renderCloseIcon();
      var messages = this.renderMessages();
      return _react.default.createElement("div", {
        ref: function ref(el) {
          _this3.container = el;
        },
        className: className,
        onClick: this.onClick
      }, _react.default.createElement("div", {
        className: "p-messages-wrapper"
      }, closeIcon, _react.default.createElement("span", {
        className: icon
      }), messages));
    }
  }]);

  return UIMessage;
}(_react.Component);

exports.UIMessage = UIMessage;

_defineProperty(UIMessage, "defaultProps", {
  message: null,
  onClose: null,
  onClick: null
});

_defineProperty(UIMessage, "propTypes", {
  message: _propTypes.default.object,
  onClose: _propTypes.default.func,
  onClick: _propTypes.default.func
});