"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dialog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

var _classnames = _interopRequireDefault(require("classnames"));

var _UniqueComponentId = _interopRequireDefault(require("../utils/UniqueComponentId"));

var _reactTransitionGroup = require("react-transition-group");

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

var Dialog =
/*#__PURE__*/
function (_Component) {
  _inherits(Dialog, _Component);

  function Dialog(props) {
    var _this;

    _classCallCheck(this, Dialog);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dialog).call(this, props));
    _this.state = {
      maximized: false
    };
    _this.onClose = _this.onClose.bind(_assertThisInitialized(_this));
    _this.toggleMaximize = _this.toggleMaximize.bind(_assertThisInitialized(_this));
    _this.id = _this.props.id || (0, _UniqueComponentId.default)();
    return _this;
  }

  _createClass(Dialog, [{
    key: "onClose",
    value: function onClose(event) {
      this.props.onHide();
      event.preventDefault();
    }
  }, {
    key: "hide",
    value: function hide() {
      this.unbindMaskClickListener();
      this.unbindGlobalListeners();
      this.props.onHide();

      if (this.props.modal) {
        this.disableModality();
      }

      if (this.state.maximized) {
        _DomHandler.default.removeClass(document.body, 'p-overflow-hidden');
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      var focusable = _DomHandler.default.findSingle(this.container, 'button');

      if (focusable) {
        focusable.focus();
      }
    }
  }, {
    key: "show",
    value: function show() {
      this.bindGlobalListeners();

      if (this.props.onShow) {
        this.props.onShow();
      }

      this.container.style.zIndex = String(this.props.baseZIndex + _DomHandler.default.generateZIndex());
      this.focus();

      if (this.props.modal) {
        this.enableModality();
      }

      if (this.state.maximized) {
        _DomHandler.default.removeClass(document.body, 'p-overflow-hidden');
      }
    }
  }, {
    key: "toggleMaximize",
    value: function toggleMaximize(event) {
      this.setState({
        maximized: !this.state.maximized
      });
      event.preventDefault();
    }
  }, {
    key: "maximize",
    value: function maximize() {
      _DomHandler.default.addClass(this.container, 'p-dialog-maximized');

      _DomHandler.default.addClass(document.body, 'p-overflow-hidden');

      var diffHeight = _DomHandler.default.getOuterHeight(this.headerElement) + _DomHandler.default.getOuterHeight(this.footerElement);

      this.contentElement.style.minHeight = 'calc(100vh - ' + diffHeight + 'px)';
    }
  }, {
    key: "restoreMaximize",
    value: function restoreMaximize() {
      _DomHandler.default.removeClass(this.container, 'p-dialog-maximized');

      _DomHandler.default.removeClass(document.body, 'p-overflow-hidden');

      this.contentElement.style.minHeight = 'auto';
    }
  }, {
    key: "enableModality",
    value: function enableModality() {
      var _this2 = this;

      if (!this.mask) {
        this.mask = document.createElement('div');
        this.mask.style.zIndex = String(parseInt(this.container.style.zIndex, 10) - 1);

        _DomHandler.default.addMultipleClasses(this.mask, 'p-component-overlay p-dialog-mask');

        if (this.props.closable && this.props.dismissableMask) {
          this.maskClickListener = function (event) {
            _this2.onClose(event);
          };

          this.mask.addEventListener('click', this.maskClickListener);
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
    key: "unbindMaskClickListener",
    value: function unbindMaskClickListener() {
      if (this.maskClickListener) {
        this.mask.removeEventListener('click', this.maskClickListener);
        this.maskClickListener = null;
      }
    }
  }, {
    key: "bindGlobalListeners",
    value: function bindGlobalListeners() {
      if (this.props.closeOnEscape && this.props.closable) {
        this.bindDocumentEscapeListener();
      }
    }
  }, {
    key: "unbindGlobalListeners",
    value: function unbindGlobalListeners() {
      this.unbindDocumentEscapeListener();
    }
  }, {
    key: "bindDocumentEscapeListener",
    value: function bindDocumentEscapeListener() {
      var _this3 = this;

      this.documentEscapeListener = function (event) {
        if (event.which === 27) {
          if (parseInt(_this3.container.style.zIndex, 10) === _DomHandler.default.getCurrentZIndex()) {
            _this3.onClose(event);
          }
        }
      };

      document.addEventListener('keydown', this.documentEscapeListener);
    }
  }, {
    key: "unbindDocumentEscapeListener",
    value: function unbindDocumentEscapeListener() {
      if (this.documentEscapeListener) {
        document.removeEventListener('keydown', this.documentEscapeListener);
        this.documentEscapeListener = null;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.visible) {
        this.show();
        this.currentHeight = _DomHandler.default.getOuterHeight(this.container);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.visible !== this.props.visible) {
        if (this.props.visible) this.show();else this.hide();
      }

      if (prevState.maximized !== this.state.maximized) {
        if (this.state.maximized) {
          this.maximize();
        } else {
          this.restoreMaximize();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.disableModality();
      this.unbindGlobalListeners();
      this.unbindMaskClickListener();
    }
  }, {
    key: "renderCloseIcon",
    value: function renderCloseIcon() {
      if (this.props.closable) {
        return _react.default.createElement("button", {
          className: "p-dialog-titlebar-icon p-dialog-titlebar-close p-link",
          onClick: this.onClose
        }, _react.default.createElement("span", {
          className: "p-dialog-titlebar-close-icon pi pi-times"
        }));
      } else {
        return null;
      }
    }
  }, {
    key: "renderMaximizeIcon",
    value: function renderMaximizeIcon() {
      var iconClassName = (0, _classnames.default)('p-dialog-titlebar-maximize-icon pi', {
        'pi-window-maximize': !this.state.maximized,
        'pi-window-minimize': this.state.maximized
      });

      if (this.props.maximizable) {
        return _react.default.createElement("button", {
          className: "p-dialog-titlebar-icon p-dialog-titlebar-maximize p-link",
          onClick: this.toggleMaximize
        }, _react.default.createElement("span", {
          className: iconClassName
        }));
      } else {
        return null;
      }
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var _this4 = this;

      if (this.props.showHeader) {
        var closeIcon = this.renderCloseIcon();
        var maximizeIcon = this.renderMaximizeIcon();
        return _react.default.createElement("div", {
          ref: function ref(el) {
            return _this4.headerElement = el;
          },
          className: "p-dialog-titlebar"
        }, _react.default.createElement("span", {
          id: this.id + '_label',
          className: "p-dialog-title"
        }, this.props.header), _react.default.createElement("div", {
          className: "p-dialog-titlebar-icons"
        }, maximizeIcon, closeIcon));
      } else {
        return null;
      }
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this5 = this;

      return _react.default.createElement("div", {
        ref: function ref(el) {
          return _this5.contentElement = el;
        },
        className: "p-dialog-content",
        style: this.props.contentStyle
      }, this.props.children);
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      var _this6 = this;

      if (this.props.footer) {
        return _react.default.createElement("div", {
          ref: function ref(el) {
            return _this6.footerElement = el;
          },
          className: "p-dialog-footer"
        }, this.props.footer);
      } else {
        return null;
      }
    }
  }, {
    key: "renderElement",
    value: function renderElement() {
      var _this7 = this;

      var className = (0, _classnames.default)('p-dialog p-component', this.props.className, {
        'p-dialog-rtl': this.props.rtl,
        'p-dialog-visible': this.props.visible
      });
      var header = this.renderHeader();
      var content = this.renderContent();
      var footer = this.renderFooter();
      return _react.default.createElement(_reactTransitionGroup.CSSTransition, {
        classNames: "p-dialog",
        timeout: {
          enter: 150,
          exit: 75
        },
        in: this.props.visible
      }, _react.default.createElement("div", {
        id: this.id,
        className: className,
        style: this.props.style,
        ref: function ref(el) {
          return _this7.container = el;
        },
        "aria-labelledby": this.id + '_label',
        role: "dialog"
      }, header, content, footer));
    }
  }, {
    key: "render",
    value: function render() {
      var element = this.renderElement();
      if (this.props.appendTo) return _reactDom.default.createPortal(element, this.props.appendTo);else return element;
    }
  }]);

  return Dialog;
}(_react.Component);

exports.Dialog = Dialog;

_defineProperty(Dialog, "defaultProps", {
  id: null,
  header: null,
  footer: null,
  visible: false,
  modal: true,
  onHide: null,
  onShow: null,
  contentStyle: null,
  closeOnEscape: true,
  dismissableMask: false,
  rtl: false,
  closable: true,
  style: null,
  className: null,
  showHeader: true,
  appendTo: null,
  baseZIndex: 0,
  maximizable: false,
  blockScroll: true
});

_defineProperty(Dialog, "propTypes", {
  id: _propTypes.default.string,
  header: _propTypes.default.any,
  footer: _propTypes.default.any,
  visible: _propTypes.default.bool,
  modal: _propTypes.default.bool,
  onHide: _propTypes.default.func.isRequired,
  onShow: _propTypes.default.func,
  contentStyle: _propTypes.default.object,
  closeOnEscape: _propTypes.default.bool,
  dismissableMask: _propTypes.default.bool,
  rtl: _propTypes.default.bool,
  closable: _propTypes.default.bool,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  showHeader: _propTypes.default.bool,
  appendTo: _propTypes.default.object,
  baseZIndex: _propTypes.default.number,
  maximizable: _propTypes.default.bool,
  blockScroll: _propTypes.default.bool
});