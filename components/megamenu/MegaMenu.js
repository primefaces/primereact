"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MegaMenu = void 0;

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

var MegaMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(MegaMenu, _Component);

  function MegaMenu(props) {
    var _this;

    _classCallCheck(this, MegaMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MegaMenu).call(this, props));
    _this.state = {
      activeItem: null
    };
    _this.onLeafClick = _this.onLeafClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MegaMenu, [{
    key: "onLeafClick",
    value: function onLeafClick(event, item) {
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

      this.setState({
        activeItem: null
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.documentClickListener) {
        this.documentClickListener = function (event) {
          if (_this2.container && !_this2.container.contains(event.target)) {
            _this2.setState({
              activeItem: null
            });
          }
        };

        document.addEventListener('click', this.documentClickListener);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.documentClickListener) {
        document.removeEventListener('click', this.documentClickListener);
        this.documentClickListener = null;
      }
    }
  }, {
    key: "onCategoryMouseEnter",
    value: function onCategoryMouseEnter(event, item) {
      if (item.disabled) {
        event.preventDefault();
        return;
      }

      if (this.state.activeItem) {
        this.setState({
          activeItem: item
        });
      }
    }
  }, {
    key: "onCategoryClick",
    value: function onCategoryClick(event, item) {
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
          item: this.props.item
        });
      }

      if (item.items) {
        if (this.state.activeItem && this.state.activeItem === item) {
          this.setState({
            activeItem: null
          });
        } else {
          this.setState({
            activeItem: item
          });
        }
      }

      event.preventDefault();
    }
  }, {
    key: "onCategoryKeyDown",
    value: function onCategoryKeyDown(event, item) {
      var listItem = event.currentTarget.parentElement;

      switch (event.which) {
        //down
        case 40:
          if (this.isHorizontal()) this.expandMenu(item);else this.navigateToNextItem(listItem);
          event.preventDefault();
          break;
        //up

        case 38:
          if (this.isVertical()) this.navigateToPrevItem(listItem);else if (item.items && item === this.state.activeItem) this.collapseMenu();
          event.preventDefault();
          break;
        //right

        case 39:
          if (this.isHorizontal()) this.navigateToNextItem(listItem);else this.expandMenu(item);
          event.preventDefault();
          break;
        //left

        case 37:
          if (this.isHorizontal()) this.navigateToPrevItem(listItem);else if (item.items && item === this.state.activeItem) this.collapseMenu();
          event.preventDefault();
          break;

        default:
          break;
      }
    }
  }, {
    key: "expandMenu",
    value: function expandMenu(item) {
      if (item.items) {
        this.setState({
          activeItem: item
        });
      }
    }
  }, {
    key: "collapseMenu",
    value: function collapseMenu(item) {
      this.setState({
        activeItem: null
      });
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
    key: "navigateToNextItem",
    value: function navigateToNextItem(listItem) {
      var nextItem = this.findNextItem(listItem);

      if (nextItem) {
        nextItem.children[0].focus();
      }
    }
  }, {
    key: "navigateToPrevItem",
    value: function navigateToPrevItem(listItem) {
      var prevItem = this.findPrevItem(listItem);

      if (prevItem) {
        prevItem.children[0].focus();
      }
    }
  }, {
    key: "isHorizontal",
    value: function isHorizontal() {
      return this.props.orientation === 'horizontal';
    }
  }, {
    key: "isVertical",
    value: function isVertical() {
      return this.props.orientation === 'vertical';
    }
  }, {
    key: "getColumnClassName",
    value: function getColumnClassName(category) {
      var length = category.items ? category.items.length : 0;
      var columnClass;

      switch (length) {
        case 2:
          columnClass = 'p-col-6';
          break;

        case 3:
          columnClass = 'p-col-4';
          break;

        case 4:
          columnClass = 'p-col-3';
          break;

        case 6:
          columnClass = 'p-col-2';
          break;

        default:
          columnClass = 'p-col-12';
          break;
      }

      return columnClass;
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
    key: "renderSubmenuIcon",
    value: function renderSubmenuIcon(item) {
      if (item.items) {
        var className = (0, _classnames.default)('p-submenu-icon pi pi-fw', {
          'pi-caret-down': this.isHorizontal(),
          'pi-caret-right': this.isVertical()
        });
        return _react.default.createElement("span", {
          className: className
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderSubmenuItem",
    value: function renderSubmenuItem(item, index) {
      var _this3 = this;

      if (item.separator) {
        return _react.default.createElement("li", {
          key: 'separator_' + index,
          className: "p-menu-separator"
        });
      } else {
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
          onClick: function onClick(event) {
            return _this3.onLeafClick(event, item);
          }
        }, icon, _react.default.createElement("span", {
          className: "p-menuitem-text"
        }, item.label)));
      }
    }
  }, {
    key: "renderSubmenu",
    value: function renderSubmenu(submenu) {
      var _this4 = this;

      var className = (0, _classnames.default)('p-megamenu-submenu-header', submenu.className, {
        'p-disabled': submenu.disabled
      });
      var items = submenu.items.map(function (item, index) {
        return _this4.renderSubmenuItem(item, index);
      });
      return _react.default.createElement(_react.default.Fragment, {
        key: submenu.label
      }, _react.default.createElement("li", {
        className: className,
        style: submenu.style
      }, submenu.label), items);
    }
  }, {
    key: "renderSubmenus",
    value: function renderSubmenus(column) {
      var _this5 = this;

      return column.map(function (submenu, index) {
        return _this5.renderSubmenu(submenu, index);
      });
    }
  }, {
    key: "renderColumn",
    value: function renderColumn(category, column, index, columnClassName) {
      var submenus = this.renderSubmenus(column);
      return _react.default.createElement("div", {
        key: category.label + '_column_' + index,
        className: columnClassName
      }, _react.default.createElement("ul", {
        className: "p-megamenu-submenu"
      }, submenus));
    }
  }, {
    key: "renderColumns",
    value: function renderColumns(category) {
      var _this6 = this;

      if (category.items) {
        var columnClassName = this.getColumnClassName(category);
        return category.items.map(function (column, index) {
          return _this6.renderColumn(category, column, index, columnClassName);
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderCategoryPanel",
    value: function renderCategoryPanel(category) {
      if (category.items) {
        var columns = this.renderColumns(category);
        return _react.default.createElement("div", {
          className: "p-megamenu-panel"
        }, _react.default.createElement("div", {
          className: "p-grid"
        }, columns));
      } else {
        return null;
      }
    }
  }, {
    key: "renderCategory",
    value: function renderCategory(category, index) {
      var _this7 = this;

      var className = (0, _classnames.default)('p-menuitem', {
        'p-menuitem-active': category === this.state.activeItem,
        'p-disabled': category.disabled
      }, category.className);
      var iconClassName = (0, _classnames.default)(category.icon, 'p-menuitem-icon');
      var icon = category.icon ? _react.default.createElement("span", {
        className: iconClassName
      }) : null;
      var submenuIcon = this.renderSubmenuIcon(category);
      var panel = this.renderCategoryPanel(category);
      return _react.default.createElement("li", {
        key: category.label + '_' + index,
        className: className,
        style: category.style,
        onMouseEnter: function onMouseEnter(e) {
          return _this7.onCategoryMouseEnter(e, category);
        }
      }, _react.default.createElement("a", {
        href: category.url || '#',
        className: "p-menuitem-link",
        target: category.target,
        onClick: function onClick(e) {
          return _this7.onCategoryClick(e, category);
        },
        onKeyDown: function onKeyDown(e) {
          return _this7.onCategoryKeyDown(e, category);
        }
      }, icon, _react.default.createElement("span", {
        className: "p-menuitem-text"
      }, category.label), submenuIcon), panel);
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this8 = this;

      if (this.props.model) {
        return this.props.model.map(function (item, index) {
          return _this8.renderCategory(item, index, true);
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderCustomContent",
    value: function renderCustomContent() {
      if (this.props.children) {
        return _react.default.createElement("div", {
          className: "p-megamenu-custom"
        }, this.props.children);
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;

      var className = (0, _classnames.default)('p-megamenu p-component', {
        'p-megamenu-horizontal': this.props.orientation === 'horizontal',
        'p-megamenu-vertical': this.props.orientation === 'vertical'
      }, this.props.className);
      var menu = this.renderMenu();
      var customContent = this.renderCustomContent();
      return _react.default.createElement("div", {
        ref: function ref(el) {
          return _this9.container = el;
        },
        id: this.props.id,
        className: className,
        style: this.props.style
      }, _react.default.createElement("ul", {
        className: "p-megamenu-root-list"
      }, menu), customContent);
    }
  }]);

  return MegaMenu;
}(_react.Component);

exports.MegaMenu = MegaMenu;

_defineProperty(MegaMenu, "defaultProps", {
  id: null,
  model: null,
  style: null,
  className: null,
  orientation: 'horizontal'
});

_defineProperty(MegaMenu, "propTypes", {
  id: _propTypes.default.string,
  model: _propTypes.default.array,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  orientation: _propTypes.default.string
});