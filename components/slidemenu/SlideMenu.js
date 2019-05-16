"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlideMenu = exports.SlideMenuSub = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SlideMenuSub =
/*#__PURE__*/
function (_Component) {
  _inherits(SlideMenuSub, _Component);

  function SlideMenuSub(props) {
    var _this;

    _classCallCheck(this, SlideMenuSub);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SlideMenuSub).call(this, props));
    _this.state = {
      activeItem: null
    };
    return _this;
  }

  _createClass(SlideMenuSub, [{
    key: "onItemClick",
    value: function onItemClick(event, item) {
      if (item.disabled) {
        event.preventDefault();
        return;
      }

      if (!item.url) {
        event.preventDefault();
      }

      if (item.command) {
        item.command({
          originalEvent: event,
          item: item
        });
      }

      if (item.items) {
        this.setState({
          activeItem: item
        });
        this.props.onForward();
      }
    }
  }, {
    key: "renderSeparator",
    value: function renderSeparator(index) {
      return _react.default.createElement("li", {
        key: 'separator_' + index,
        className: "p-menu-separator"
      });
    }
  }, {
    key: "renderIcon",
    value: function renderIcon(item) {
      var className = (0, _classnames.default)('p-menuitem-icon', item.icon);

      if (item.icon) {
        return _react.default.createElement("span", {
          className: className
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderSubmenuIcon",
    value: function renderSubmenuIcon(item) {
      if (item.items) {
        return _react.default.createElement("span", {
          className: "p-submenu-icon pi pi-fw pi-caret-right"
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderSubmenu",
    value: function renderSubmenu(item) {
      if (item.items) {
        return _react.default.createElement(SlideMenuSub, {
          model: item.items,
          index: this.props.index + 1,
          menuWidth: this.props.menuWidth,
          effectDuration: this.props.effectDuration,
          onForward: this.props.onForward,
          parentActive: item === this.state.activeItem
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderMenuitem",
    value: function renderMenuitem(item, index) {
      var _this2 = this;

      var className = (0, _classnames.default)('p-menuitem', {
        'p-menuitem-active': this.state.activeItem === item,
        'p-disabled': item.disabled
      }, item.className);
      var icon = this.renderIcon(item);
      var submenuIcon = this.renderSubmenuIcon(item);
      var submenu = this.renderSubmenu(item);
      return _react.default.createElement("li", {
        key: item.label + '_' + index,
        className: className,
        style: item.style
      }, _react.default.createElement("a", {
        href: item.url || '#',
        className: "p-menuitem-link",
        target: item.target,
        onClick: function onClick(event) {
          return _this2.onItemClick(event, item, index);
        }
      }, icon, _react.default.createElement("span", {
        className: "p-menuitem-text"
      }, item.label), submenuIcon), submenu);
    }
  }, {
    key: "renderItem",
    value: function renderItem(item, index) {
      if (item.separator) return this.renderSeparator(index);else return this.renderMenuitem(item, index);
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this3 = this;

      if (this.props.model) {
        return this.props.model.map(function (item, index) {
          return _this3.renderItem(item, index);
        });
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var className = (0, _classnames.default)({
        'p-slidemenu-rootlist': this.props.root,
        'p-submenu-list': !this.props.root,
        'p-active-submenu': this.props.parentActive
      });
      var style = {
        width: this.props.menuWidth + 'px',
        left: this.props.root ? -1 * this.props.level * this.props.menuWidth + 'px' : this.props.menuWidth + 'px',
        transitionProperty: this.props.root ? 'left' : 'none',
        transitionDuration: this.props.effectDuration + 'ms',
        transitionTimingFunction: this.props.easing
      };
      var items = this.renderItems();
      return _react.default.createElement("ul", {
        className: className,
        style: style
      }, items);
    }
  }]);

  return SlideMenuSub;
}(_react.Component);

exports.SlideMenuSub = SlideMenuSub;

_defineProperty(SlideMenuSub, "defaultProps", {
  model: null,
  level: 0,
  easing: 'ease-out',
  effectDuration: 250,
  menuWidth: 190,
  parentActive: false,
  onForward: null
});

_defineProperty(SlideMenuSub, "propTypes", {
  model: _propTypes.default.any,
  level: _propTypes.default.number,
  easing: _propTypes.default.string,
  effectDuration: _propTypes.default.number,
  menuWidth: _propTypes.default.number,
  parentActive: _propTypes.default.bool,
  onForward: _propTypes.default.func
});

var SlideMenu =
/*#__PURE__*/
function (_Component2) {
  _inherits(SlideMenu, _Component2);

  function SlideMenu(props) {
    var _this4;

    _classCallCheck(this, SlideMenu);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(SlideMenu).call(this, props));
    _this4.state = {
      level: 0
    };
    _this4.onMenuClick = _this4.onMenuClick.bind(_assertThisInitialized(_this4));
    _this4.navigateBack = _this4.navigateBack.bind(_assertThisInitialized(_this4));
    _this4.navigateForward = _this4.navigateForward.bind(_assertThisInitialized(_this4));
    return _this4;
  }

  _createClass(SlideMenu, [{
    key: "onMenuClick",
    value: function onMenuClick(event) {
      this.selfClick = true;
    }
  }, {
    key: "navigateForward",
    value: function navigateForward() {
      this.setState({
        level: this.state.level + 1
      });
    }
  }, {
    key: "navigateBack",
    value: function navigateBack() {
      this.setState({
        level: this.state.level - 1
      });
    }
  }, {
    key: "renderBackward",
    value: function renderBackward() {
      var _this5 = this;

      var className = (0, _classnames.default)('p-slidemenu-backward', {
        'p-hidden': this.state.level === 0
      });
      return _react.default.createElement("div", {
        ref: function ref(el) {
          return _this5.backward = el;
        },
        className: className,
        onClick: this.navigateBack
      }, _react.default.createElement("span", {
        className: "p-slidemenu-backward-icon pi pi-fw pi-caret-left"
      }), _react.default.createElement("span", null, this.props.backLabel));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.popup) {
        this.bindDocumentClickListener();
      }
    }
  }, {
    key: "toggle",
    value: function toggle(event) {
      if (this.props.popup) {
        this.selfClick = true;
        if (this.container.offsetParent) this.hide(event);else this.show(event);
      }
    }
  }, {
    key: "show",
    value: function show(event) {
      var _this6 = this;

      if (this.props.autoZIndex) {
        this.container.style.zIndex = String(this.props.baseZIndex + _DomHandler.default.generateZIndex());
      }

      this.container.style.display = 'block';
      setTimeout(function () {
        _DomHandler.default.addClass(_this6.container, 'p-menu-overlay-visible');

        _DomHandler.default.removeClass(_this6.container, 'p-menu-overlay-hidden');
      }, 1);

      _DomHandler.default.absolutePosition(this.container, event.currentTarget);

      this.bindDocumentResizeListener();

      if (this.props.onShow) {
        this.props.onShow(event);
      }
    }
  }, {
    key: "hide",
    value: function hide(event) {
      var _this7 = this;

      if (this.container) {
        _DomHandler.default.addClass(this.container, 'p-menu-overlay-hidden');

        _DomHandler.default.removeClass(this.container, 'p-menu-overlay-visible');

        setTimeout(function () {
          if (_this7.container) {
            _this7.container.style.display = 'none';

            _DomHandler.default.removeClass(_this7.container, 'p-menu-overlay-hidden');
          }
        }, 150);
      }

      if (this.props.onHide) {
        this.props.onHide(event);
      }

      this.unbindDocumentResizeListener();
    }
  }, {
    key: "bindDocumentClickListener",
    value: function bindDocumentClickListener() {
      var _this8 = this;

      if (!this.documentClickListener) {
        this.documentClickListener = function (event) {
          if (!_this8.selfClick && _this8.container.offsetParent) {
            _this8.hide(event);
          }

          _this8.selfClick = false;
        };

        document.addEventListener('click', this.documentClickListener);
      }
    }
  }, {
    key: "onLeafClick",
    value: function onLeafClick(event) {
      this.setState({
        resetMenu: true
      });
      event.stopPropagation();
    }
  }, {
    key: "bindDocumentResizeListener",
    value: function bindDocumentResizeListener() {
      var _this9 = this;

      if (!this.documentResizeListener) {
        this.documentResizeListener = function (event) {
          if (_this9.container.offsetParent) {
            _this9.hide(event);
          }
        };

        window.addEventListener('resize', this.documentResizeListener);
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
    key: "unbindDocumentResizeListener",
    value: function unbindDocumentResizeListener() {
      if (this.documentResizeListener) {
        window.removeEventListener('resize', this.documentResizeListener);
        this.documentResizeListener = null;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.model !== prevProps.model) {
        this.setState({
          level: 0
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindDocumentClickListener();
      this.unbindDocumentResizeListener();
    }
  }, {
    key: "renderElement",
    value: function renderElement() {
      var _this10 = this;

      var className = (0, _classnames.default)('p-slidemenu p-component', {
        'p-slidemenu-dynamic p-menu-overlay': this.props.popup
      });
      var backward = this.renderBackward();
      return _react.default.createElement("div", {
        id: this.props.id,
        className: className,
        style: this.props.style,
        ref: function ref(el) {
          return _this10.container = el;
        },
        onClick: this.onMenuClick
      }, _react.default.createElement("div", {
        className: "p-slidemenu-wrapper",
        style: {
          height: this.props.viewportHeight + 'px'
        }
      }, _react.default.createElement("div", {
        className: "p-slidemenu-content",
        ref: function ref(el) {
          return _this10.slideMenuContent = el;
        }
      }, _react.default.createElement(SlideMenuSub, {
        model: this.props.model,
        root: true,
        index: 0,
        menuWidth: this.props.menuWidth,
        effectDuration: this.props.effectDuration,
        level: this.state.level,
        parentActive: this.state.level === 0,
        onForward: this.navigateForward
      })), backward));
    }
  }, {
    key: "render",
    value: function render() {
      var element = this.renderElement();
      if (this.props.appendTo) return _reactDom.default.createPortal(element, this.props.appendTo);else return element;
    }
  }]);

  return SlideMenu;
}(_react.Component);

exports.SlideMenu = SlideMenu;

_defineProperty(SlideMenu, "defaultProps", {
  id: null,
  model: null,
  popup: false,
  style: null,
  className: null,
  easing: 'ease-out',
  effectDuration: 250,
  backLabel: 'Back',
  menuWidth: 190,
  viewportHeight: 175,
  autoZIndex: true,
  baseZIndex: 0,
  appendTo: null,
  onShow: null,
  onHide: null
});

_defineProperty(SlideMenu, "propTypes", {
  id: _propTypes.default.string,
  model: _propTypes.default.array,
  popup: _propTypes.default.bool,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  easing: _propTypes.default.string,
  effectDuration: _propTypes.default.number,
  backLabel: _propTypes.default.string,
  menuWidth: _propTypes.default.number,
  viewportHeight: _propTypes.default.number,
  autoZIndex: _propTypes.default.bool,
  baseZIndex: _propTypes.default.number,
  appendTo: _propTypes.default.any,
  onShow: _propTypes.default.func,
  onHide: _propTypes.default.func
});