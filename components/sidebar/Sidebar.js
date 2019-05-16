"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sidebar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

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

var Sidebar =
/*#__PURE__*/
function (_Component) {
  _inherits(Sidebar, _Component);

  function Sidebar(props) {
    var _this;

    _classCallCheck(this, Sidebar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sidebar).call(this, props));
    _this.onCloseClick = _this.onCloseClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Sidebar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.visible) {
        this.onShow();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindMaskClickListener();
      this.disableModality();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.visible !== this.props.visible) {
        if (this.props.visible) this.onShow();else this.onHide();
      }
    }
  }, {
    key: "onShow",
    value: function onShow() {
      this.container.style.zIndex = String(this.props.baseZIndex + _DomHandler.default.generateZIndex());

      if (this.props.modal) {
        this.enableModality();
      }

      if (this.closeIcon) {
        this.closeIcon.focus();
      }

      if (this.props.onShow) {
        this.props.onShow();
      }
    }
  }, {
    key: "enableModality",
    value: function enableModality() {
      if (!this.mask) {
        this.mask = document.createElement('div');
        this.mask.style.zIndex = String(parseInt(this.container.style.zIndex, 10) - 1);

        _DomHandler.default.addMultipleClasses(this.mask, 'p-component-overlay p-sidebar-mask');

        if (this.props.dismissable) {
          this.bindMaskClickListener();
        }

        document.body.appendChild(this.mask);

        if (this.props.blockScroll) {
          _DomHandler.default.addClass(document.body, 'p-overflow-hidden');
        }
      }
    }
  }, {
    key: "disableModality",
    value: function disableModality() {
      if (this.mask) {
        this.unbindMaskClickListener();
        document.body.removeChild(this.mask);

        if (this.props.blockScroll) {
          _DomHandler.default.removeClass(document.body, 'p-overflow-hidden');
        }

        this.mask = null;
      }
    }
  }, {
    key: "onCloseClick",
    value: function onCloseClick(event) {
      this.props.onHide();
      event.preventDefault();
    }
  }, {
    key: "onHide",
    value: function onHide() {
      this.unbindMaskClickListener();

      if (this.props.modal) {
        this.disableModality();
      }
    }
  }, {
    key: "bindMaskClickListener",
    value: function bindMaskClickListener() {
      var _this2 = this;

      if (!this.maskClickListener) {
        this.maskClickListener = function (event) {
          _this2.onCloseClick(event);
        };

        this.mask.addEventListener('click', this.maskClickListener);
      }
    }
  }, {
    key: "unbindMaskClickListener",
    value: function unbindMaskClickListener() {
      if (this.maskClickListener) {
        this.mask.removeEventListener('click', this.maskClickListener);
        this.maskClickListener = null;
      }
    }
  }, {
    key: "renderCloseIcon",
    value: function renderCloseIcon() {
      var _this3 = this;

      if (this.props.showCloseIcon) {
        return _react.default.createElement("button", {
          ref: function ref(el) {
            return _this3.closeIcon = el;
          },
          className: "p-sidebar-close p-link",
          onClick: this.onCloseClick
        }, _react.default.createElement("span", {
          className: "p-sidebar-close-icon pi pi-times"
        }));
      } else {
        return null;
      }
    }
  }, {
    key: "renderIconsTemplate",
    value: function renderIconsTemplate() {
      if (this.props.iconsTemplate) {
        return this.props.iconsTemplate(this);
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var className = (0, _classnames.default)('p-sidebar p-component', this.props.className, 'p-sidebar-' + this.props.position, {
        'p-sidebar-active': this.props.visible,
        'p-sidebar-full': this.props.fullScreen
      });
      var closeIcon = this.renderCloseIcon();
      var iconsTemplate = this.renderIconsTemplate();
      return _react.default.createElement("div", {
        ref: function ref(el) {
          return _this4.container = el;
        },
        id: this.props.id,
        className: className,
        style: this.props.style
      }, closeIcon, iconsTemplate, this.props.children);
    }
  }]);

  return Sidebar;
}(_react.Component);

exports.Sidebar = Sidebar;

_defineProperty(Sidebar, "defaultProps", {
  id: null,
  style: null,
  className: null,
  visible: false,
  position: 'left',
  fullScreen: false,
  blockScroll: false,
  baseZIndex: 0,
  dismissable: true,
  showCloseIcon: true,
  iconsTemplate: null,
  modal: true,
  onShow: null,
  onHide: null
});

_defineProperty(Sidebar, "propTypes", {
  id: _propTypes.default.string,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  visible: _propTypes.default.bool,
  position: _propTypes.default.string,
  fullScreen: _propTypes.default.bool,
  blockScroll: _propTypes.default.bool,
  baseZIndex: _propTypes.default.number,
  dismissable: _propTypes.default.bool,
  showCloseIcon: _propTypes.default.bool,
  iconsTemplate: _propTypes.default.func,
  modal: _propTypes.default.bool,
  onShow: _propTypes.default.func,
  onHide: _propTypes.default.func.isRequired
});