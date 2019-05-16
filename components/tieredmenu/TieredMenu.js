"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TieredMenu = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

var _TieredMenuSub = require("./TieredMenuSub");

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

var TieredMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(TieredMenu, _Component);

  function TieredMenu() {
    _classCallCheck(this, TieredMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(TieredMenu).apply(this, arguments));
  }

  _createClass(TieredMenu, [{
    key: "toggle",
    value: function toggle(event) {
      if (this.props.popup) {
        if (this.container.offsetParent) this.hide(event);else this.show(event);
      }
    }
  }, {
    key: "show",
    value: function show(event) {
      var _this = this;

      if (this.props.autoZIndex) {
        this.container.style.zIndex = String(this.props.baseZIndex + _DomHandler.default.generateZIndex());
      }

      this.container.style.display = 'block';
      setTimeout(function () {
        _DomHandler.default.addClass(_this.container, 'p-menu-overlay-visible');

        _DomHandler.default.removeClass(_this.container, 'p-menu-overlay-hidden');
      }, 1);

      _DomHandler.default.absolutePosition(this.container, event.currentTarget);

      this.bindDocumentListeners();

      if (this.props.onShow) {
        this.props.onShow(event);
      }
    }
  }, {
    key: "hide",
    value: function hide(event) {
      var _this2 = this;

      if (this.container) {
        _DomHandler.default.addClass(this.container, 'p-menu-overlay-hidden');

        _DomHandler.default.removeClass(this.container, 'p-menu-overlay-visible');

        setTimeout(function () {
          if (_this2.container) {
            _this2.container.style.display = 'none';

            _DomHandler.default.removeClass(_this2.container, 'p-menu-overlay-hidden');
          }
        }, 150);
      }

      if (this.props.onHide) {
        this.props.onHide(event);
      }

      this.unbindDocumentListeners();
    }
  }, {
    key: "bindDocumentListeners",
    value: function bindDocumentListeners() {
      this.bindDocumentClickListener();
      this.bindDocumentResizeListener();
    }
  }, {
    key: "unbindDocumentListeners",
    value: function unbindDocumentListeners() {
      this.unbindDocumentClickListener();
      this.unbindDocumentResizeListener();
    }
  }, {
    key: "bindDocumentClickListener",
    value: function bindDocumentClickListener() {
      var _this3 = this;

      if (!this.documentClickListener) {
        this.documentClickListener = function (event) {
          if (_this3.props.popup && !_this3.container.contains(event.target)) {
            _this3.hide(event);
          }
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
    key: "bindDocumentResizeListener",
    value: function bindDocumentResizeListener() {
      var _this4 = this;

      if (!this.documentResizeListener) {
        this.documentResizeListener = function (event) {
          if (_this4.container.offsetParent) {
            _this4.hide(event);
          }
        };

        window.addEventListener('resize', this.documentResizeListener);
      }
    }
  }, {
    key: "unbindDocumentResizeListener",
    value: function unbindDocumentResizeListener() {
      if (this.documentResizeListener) {
        window.removeEventListener('resize', this.documentResizeListener);
        this.documentResizeListener = null;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindDocumentListeners();
    }
  }, {
    key: "renderElement",
    value: function renderElement() {
      var _this5 = this;

      var className = (0, _classnames.default)('p-tieredmenu p-component', {
        'p-tieredmenu-dynamic p-menu-overlay': this.props.popup
      }, this.props.className);
      return _react.default.createElement("div", {
        ref: function ref(el) {
          return _this5.container = el;
        },
        id: this.props.id,
        className: className,
        style: this.props.style
      }, _react.default.createElement(_TieredMenuSub.TieredMenuSub, {
        model: this.props.model,
        root: true,
        popup: this.props.popup
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var element = this.renderElement();
      if (this.props.appendTo) return _reactDom.default.createPortal(element, this.props.appendTo);else return element;
    }
  }]);

  return TieredMenu;
}(_react.Component);

exports.TieredMenu = TieredMenu;

_defineProperty(TieredMenu, "defaultProps", {
  id: null,
  model: null,
  popup: false,
  style: null,
  className: null,
  autoZIndex: true,
  baseZIndex: 0,
  appendTo: null,
  onShow: null,
  onHide: null
});

_defineProperty(TieredMenu, "propTypes", {
  id: _propTypes.default.string,
  model: _propTypes.default.array,
  popup: _propTypes.default.bool,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  autoZIndex: _propTypes.default.bool,
  baseZIndex: _propTypes.default.number,
  appendTo: _propTypes.default.any,
  onShow: _propTypes.default.func,
  onHide: _propTypes.default.func
});