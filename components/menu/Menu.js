"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

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

var Menu =
/*#__PURE__*/
function (_Component) {
  _inherits(Menu, _Component);

  function Menu(props) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, props));
    _this.onMenuClick = _this.onMenuClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Menu, [{
    key: "onMenuClick",
    value: function onMenuClick() {
      if (this.documentClickListener) {
        this.selfClick = true;
      }
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

      if (this.props.popup) {
        this.hide(event);
      }
    }
  }, {
    key: "onItemKeyDown",
    value: function onItemKeyDown(event, item) {
      var listItem = event.currentTarget.parentElement;

      switch (event.which) {
        //down
        case 40:
          var nextItem = this.findNextItem(listItem);

          if (nextItem) {
            nextItem.children[0].focus();
          }

          event.preventDefault();
          break;
        //up

        case 38:
          var prevItem = this.findPrevItem(listItem);

          if (prevItem) {
            prevItem.children[0].focus();
          }

          event.preventDefault();
          break;

        default:
          break;
      }
    }
  }, {
    key: "findNextItem",
    value: function findNextItem(item) {
      var nextItem = item.nextElementSibling;
      if (nextItem) return _DomHandler.default.hasClass(nextItem, 'p-disabled') || !_DomHandler.default.hasClass(nextItem, 'p-menuitem') ? this.findNextItem(nextItem) : nextItem;else return null;
    }
  }, {
    key: "findPrevItem",
    value: function findPrevItem(item) {
      var prevItem = item.previousElementSibling;
      if (prevItem) return _DomHandler.default.hasClass(prevItem, 'p-disabled') || !_DomHandler.default.hasClass(prevItem, 'p-menuitem') ? this.findPrevItem(prevItem) : prevItem;else return null;
    }
  }, {
    key: "toggle",
    value: function toggle(event) {
      if (this.props.popup) {
        if (this.documentClickListener) {
          this.selfClick = true;
        }

        if (this.container.offsetParent) this.hide(event);else this.show(event);
      }
    }
  }, {
    key: "show",
    value: function show(event) {
      var _this2 = this;

      this.container.style.zIndex = String(this.props.baseZIndex + _DomHandler.default.generateZIndex());
      this.container.style.display = 'block';
      setTimeout(function () {
        _DomHandler.default.addClass(_this2.container, 'p-menu-overlay-visible');

        _DomHandler.default.removeClass(_this2.container, 'p-menu-overlay-hidden');
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
      var _this3 = this;

      if (this.container) {
        _DomHandler.default.addClass(this.container, 'p-menu-overlay-hidden');

        _DomHandler.default.removeClass(this.container, 'p-menu-overlay-visible');

        setTimeout(function () {
          if (_this3.container) {
            _this3.container.style.display = 'none';

            _DomHandler.default.removeClass(_this3.container, 'p-menu-overlay-hidden');
          }
        }, 150);
      }

      if (this.props.onHide) {
        this.props.onHide(event);
      }

      this.unbindDocumentListeners();
      this.selfClick = false;
    }
  }, {
    key: "bindDocumentListeners",
    value: function bindDocumentListeners() {
      var _this4 = this;

      if (!this.documentClickListener) {
        this.documentClickListener = function (event) {
          if (_this4.selfClick) _this4.selfClick = false;else _this4.hide(event);
        };

        document.addEventListener('click', this.documentClickListener);
      }

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
    key: "unbindDocumentListeners",
    value: function unbindDocumentListeners() {
      if (this.documentClickListener) {
        document.removeEventListener('click', this.documentClickListener);
        this.documentClickListener = null;
      }

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
    key: "renderSubmenu",
    value: function renderSubmenu(submenu, index) {
      var _this5 = this;

      var className = (0, _classnames.default)('p-submenu-header', submenu.className, {
        'p-disabled': submenu.disabled
      });
      var items = submenu.items.map(function (item, index) {
        return _this5.renderMenuitem(item, index);
      });
      return _react.default.createElement(_react.default.Fragment, {
        key: submenu.label + '_' + index
      }, _react.default.createElement("li", {
        className: className,
        style: submenu.style
      }, submenu.label), items);
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
    key: "renderMenuitem",
    value: function renderMenuitem(item, index) {
      var _this6 = this;

      var className = (0, _classnames.default)('p-menuitem', item.className, {
        'p-disabled': item.disabled
      });
      var iconClassName = (0, _classnames.default)(item.icon, 'p-menuitem-icon');
      var icon = item.icon ? _react.default.createElement("span", {
        className: iconClassName
      }) : null;
      return _react.default.createElement("li", {
        key: item.label + '_' + index,
        className: className,
        style: item.style
      }, _react.default.createElement("a", {
        href: item.url || '#',
        className: "p-menuitem-link",
        target: item.target,
        onClick: function onClick(e) {
          return _this6.onItemClick(e, item);
        },
        onKeyDown: function onKeyDown(e) {
          return _this6.onItemKeyDown(e, item);
        }
      }, icon, _react.default.createElement("span", {
        className: "p-menuitem-text"
      }, item.label)));
    }
  }, {
    key: "renderItem",
    value: function renderItem(item, index) {
      if (item.separator) {
        return this.renderSeparator(index);
      } else {
        if (item.items) return this.renderSubmenu(item, index);else return this.renderMenuitem(item, index);
      }
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this7 = this;

      return this.props.model.map(function (item, index) {
        return _this7.renderItem(item, index);
      });
    }
  }, {
    key: "renderElement",
    value: function renderElement() {
      var _this8 = this;

      if (this.props.model) {
        var className = (0, _classnames.default)('p-menu p-component', this.props.className, {
          'p-menu-dynamic p-menu-overlay': this.props.popup
        });
        var menuitems = this.renderMenu();
        return _react.default.createElement("div", {
          id: this.props.id,
          className: className,
          style: this.props.style,
          ref: function ref(el) {
            return _this8.container = el;
          },
          onClick: this.onMenuClick
        }, _react.default.createElement("ul", {
          className: "p-menu-list p-reset"
        }, menuitems));
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var element = this.renderElement();
      if (this.props.appendTo) return _reactDom.default.createPortal(element, this.props.appendTo);else return element;
    }
  }]);

  return Menu;
}(_react.Component);

exports.Menu = Menu;

_defineProperty(Menu, "defaultProps", {
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

_defineProperty(Menu, "propTypes", {
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