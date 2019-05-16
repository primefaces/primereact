"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextMenu = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactDom = _interopRequireDefault(require("react-dom"));

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

var ContextMenuSub =
/*#__PURE__*/
function (_Component) {
  _inherits(ContextMenuSub, _Component);

  function ContextMenuSub(props) {
    var _this;

    _classCallCheck(this, ContextMenuSub);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContextMenuSub).call(this, props));
    _this.state = {
      activeItem: null
    };
    return _this;
  }

  _createClass(ContextMenuSub, [{
    key: "onItemMouseEnter",
    value: function onItemMouseEnter(event, item) {
      if (item.disabled) {
        event.preventDefault();
        return;
      }

      this.setState({
        activeItem: item
      });
    }
  }, {
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

      if (!item.items) {
        this.props.onLeafClick(event);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.element.offsetParent) {
        this.position();
      }
    }
  }, {
    key: "position",
    value: function position() {
      var parentItem = this.element.parentElement;

      var containerOffset = _DomHandler.default.getOffset(this.element.parentElement);

      var viewport = _DomHandler.default.getViewport();

      var sublistWidth = this.element.offsetParent ? this.element.offsetWidth : _DomHandler.default.getHiddenElementOuterWidth(this.element);

      var itemOuterWidth = _DomHandler.default.getOuterWidth(parentItem.children[0]);

      this.element.style.top = '0px';

      if (parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth > viewport.width - _DomHandler.default.calculateScrollbarWidth()) {
        this.element.style.left = -1 * sublistWidth + 'px';
      } else {
        this.element.style.left = itemOuterWidth + 'px';
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
        return _react.default.createElement(ContextMenuSub, {
          model: item.items,
          resetMenu: item !== this.state.activeItem,
          onLeafClick: this.props.onLeafClick
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
        style: item.style,
        onMouseEnter: function onMouseEnter(event) {
          return _this2.onItemMouseEnter(event, item);
        }
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
    key: "renderMenu",
    value: function renderMenu() {
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
      var _this4 = this;

      var className = (0, _classnames.default)({
        'p-submenu-list': !this.props.root
      });
      var submenu = this.renderMenu();
      return _react.default.createElement("ul", {
        ref: function ref(el) {
          return _this4.element = el;
        },
        className: className
      }, submenu);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.resetMenu === true) {
        return {
          activeItem: null
        };
      }

      return null;
    }
  }]);

  return ContextMenuSub;
}(_react.Component);

_defineProperty(ContextMenuSub, "defaultProps", {
  model: null,
  root: false,
  className: null,
  resetMenu: false,
  onLeafClick: null
});

_defineProperty(ContextMenuSub, "propTypes", {
  model: _propTypes.default.any,
  root: _propTypes.default.bool,
  className: _propTypes.default.string,
  resetMenu: _propTypes.default.bool,
  onLeafClick: _propTypes.default.func
});

var ContextMenu =
/*#__PURE__*/
function (_Component2) {
  _inherits(ContextMenu, _Component2);

  function ContextMenu(props) {
    var _this5;

    _classCallCheck(this, ContextMenu);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(ContextMenu).call(this));
    _this5.state = {
      resetMenu: false
    };
    _this5.onMenuClick = _this5.onMenuClick.bind(_assertThisInitialized(_this5));
    _this5.onLeafClick = _this5.onLeafClick.bind(_assertThisInitialized(_this5));
    _this5.onMenuMouseEnter = _this5.onMenuMouseEnter.bind(_assertThisInitialized(_this5));
    return _this5;
  }

  _createClass(ContextMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.bindDocumentClickListener();

      if (this.props.global) {
        this.bindDocumentContextMenuListener();
      }
    }
  }, {
    key: "onMenuClick",
    value: function onMenuClick() {
      this.selfClick = true;
      this.setState({
        resetMenu: false
      });
    }
  }, {
    key: "onMenuMouseEnter",
    value: function onMenuMouseEnter() {
      this.setState({
        resetMenu: false
      });
    }
  }, {
    key: "show",
    value: function show(event) {
      this.container.style.display = 'block';
      this.position(event);

      if (this.props.autoZIndex) {
        this.container.style.zIndex = String(this.props.baseZIndex + _DomHandler.default.generateZIndex());
      }

      _DomHandler.default.fadeIn(this.container, 250);

      this.bindDocumentResizeListener();

      if (this.props.onShow) {
        this.props.onShow(event);
      }

      event.stopPropagation();
      event.preventDefault();
    }
  }, {
    key: "hide",
    value: function hide(event) {
      if (this.container) {
        this.container.style.display = 'none';
      }

      if (this.props.onHide) {
        this.props.onHide(event);
      }

      this.unbindDocumentResizeListener();
    }
  }, {
    key: "position",
    value: function position(event) {
      if (event) {
        var left = event.pageX + 1;
        var top = event.pageY + 1;
        var width = this.container.offsetParent ? this.container.offsetWidth : _DomHandler.default.getHiddenElementOuterWidth(this.container);
        var height = this.container.offsetParent ? this.container.offsetHeight : _DomHandler.default.getHiddenElementOuterHeight(this.container);

        var viewport = _DomHandler.default.getViewport(); //flip


        if (left + width - document.body.scrollLeft > viewport.width) {
          left -= width;
        } //flip


        if (top + height - document.body.scrollTop > viewport.height) {
          top -= height;
        } //fit


        if (left < document.body.scrollLeft) {
          left = document.body.scrollLeft;
        } //fit


        if (top < document.body.scrollTop) {
          top = document.body.scrollTop;
        }

        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
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
    key: "bindDocumentClickListener",
    value: function bindDocumentClickListener() {
      var _this6 = this;

      if (!this.documentClickListener) {
        this.documentClickListener = function (event) {
          if (!_this6.selfClick && event.button !== 2) {
            _this6.hide(event);

            _this6.setState({
              resetMenu: true
            });
          }

          _this6.selfClick = false;
        };

        document.addEventListener('click', this.documentClickListener);
      }
    }
  }, {
    key: "bindDocumentContextMenuListener",
    value: function bindDocumentContextMenuListener() {
      var _this7 = this;

      if (!this.documentContextMenuListener) {
        this.documentContextMenuListener = function (event) {
          _this7.show(event);
        };

        document.addEventListener('contextmenu', this.documentContextMenuListener);
      }
    }
  }, {
    key: "bindDocumentResizeListener",
    value: function bindDocumentResizeListener() {
      var _this8 = this;

      if (!this.documentResizeListener) {
        this.documentResizeListener = function (event) {
          if (_this8.container.offsetParent) {
            _this8.hide(event);
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
    key: "unbindDocumentContextMenuListener",
    value: function unbindDocumentContextMenuListener() {
      if (this.documentContextMenuListener) {
        document.removeEventListener('contextmenu', this.documentContextMenuListener);
        this.documentContextMenuListener = null;
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
      this.unbindDocumentClickListener();
      this.unbindDocumentResizeListener();
      this.unbindDocumentContextMenuListener();
    }
  }, {
    key: "renderContextMenu",
    value: function renderContextMenu() {
      var _this9 = this;

      var className = (0, _classnames.default)('p-contextmenu p-component', this.props.className);
      return _react.default.createElement("div", {
        id: this.props.id,
        className: className,
        style: this.props.style,
        ref: function ref(el) {
          return _this9.container = el;
        },
        onClick: this.onMenuClick,
        onMouseEnter: this.onMenuMouseEnter
      }, _react.default.createElement(ContextMenuSub, {
        model: this.props.model,
        root: true,
        resetMenu: this.state.resetMenu,
        onLeafClick: this.onLeafClick
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var element = this.renderContextMenu();
      if (this.props.appendTo) return _reactDom.default.createPortal(element, this.props.appendTo);else return element;
    }
  }]);

  return ContextMenu;
}(_react.Component);

exports.ContextMenu = ContextMenu;

_defineProperty(ContextMenu, "defaultProps", {
  id: null,
  model: null,
  style: null,
  className: null,
  global: false,
  autoZIndex: true,
  baseZIndex: 0,
  appendTo: null,
  onShow: null,
  onHide: null
});

_defineProperty(ContextMenu, "propTypes", {
  id: _propTypes.default.string,
  model: _propTypes.default.array,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  global: _propTypes.default.bool,
  autoZIndex: _propTypes.default.bool,
  baseZIndex: _propTypes.default.number,
  appendTo: _propTypes.default.any,
  onShow: _propTypes.default.func,
  onHide: _propTypes.default.func
});