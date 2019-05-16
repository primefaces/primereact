"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Captcha = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Captcha =
/*#__PURE__*/
function (_Component) {
  _inherits(Captcha, _Component);

  function Captcha() {
    _classCallCheck(this, Captcha);

    return _possibleConstructorReturn(this, _getPrototypeOf(Captcha).apply(this, arguments));
  }

  _createClass(Captcha, [{
    key: "init",
    value: function init() {
      var _this = this;

      this._instance = window.grecaptcha.render(this.targetEL, {
        'sitekey': this.props.siteKey,
        'theme': this.props.theme,
        'type': this.props.type,
        'size': this.props.size,
        'tabindex': this.props.tabIndex,
        'hl': this.props.language,
        'callback': function callback(response) {
          _this.recaptchaCallback(response);
        },
        'expired-callback': function expiredCallback() {
          _this.recaptchaExpiredCallback();
        }
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this._instance === null) return;
      window.grecaptcha.reset(this._instance);
    }
  }, {
    key: "getResponse",
    value: function getResponse() {
      if (this._instance === null) return null;
      return window.grecaptcha.getResponse(this._instance);
    }
  }, {
    key: "recaptchaCallback",
    value: function recaptchaCallback(response) {
      if (this.props.onResponse) {
        this.props.onResponse({
          response: response
        });
      }
    }
  }, {
    key: "recaptchaExpiredCallback",
    value: function recaptchaExpiredCallback() {
      if (this.props.onExpire) {
        this.props.onExpire();
      }
    }
  }, {
    key: "addRecaptchaScript",
    value: function addRecaptchaScript() {
      this.recaptchaScript = null;

      if (!window.grecaptcha) {
        var head = document.head || document.getElementsByTagName('head')[0];
        this.recaptchaScript = document.createElement('script');
        this.recaptchaScript.src = "https://www.google.com/recaptcha/api.js?render=explicit";
        this.recaptchaScript.async = true;
        this.recaptchaScript.defer = true;
        head.appendChild(this.recaptchaScript);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.addRecaptchaScript();

      if (window.grecaptcha) {
        this.init();
      } else {
        setTimeout(function () {
          if (!window.grecaptcha) {
            console.warn("Recaptcha is not loaded");
            return;
          }

          _this2.init();
        }, 500);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.recaptchaScript) {
        this.recaptchaScript.parentNode.removeChild(this.recaptchaScript);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react.default.createElement("div", {
        id: this.props.id,
        ref: function ref(el) {
          return _this3.targetEL = _reactDom.default.findDOMNode(el);
        }
      });
    }
  }]);

  return Captcha;
}(_react.Component);

exports.Captcha = Captcha;

_defineProperty(Captcha, "defaultProps", {
  id: null,
  siteKey: null,
  theme: "light",
  type: "image",
  size: "normal",
  tabIndex: 0,
  language: "en",
  onResponse: null,
  onExpire: null
});

_defineProperty(Captcha, "propTypes", {
  id: _propTypes.default.string,
  sitekey: _propTypes.default.string,
  theme: _propTypes.default.string,
  type: _propTypes.default.string,
  size: _propTypes.default.string,
  tabindex: _propTypes.default.number,
  language: _propTypes.default.string,
  onResponse: _propTypes.default.func,
  onExpire: _propTypes.default.func
});