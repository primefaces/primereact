"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelMenu = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactTransitionGroup = require("react-transition-group");

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

var PanelMenuSub =
/*#__PURE__*/
function (_Component) {
  _inherits(PanelMenuSub, _Component);

  function PanelMenuSub(props) {
    var _this;

    _classCallCheck(this, PanelMenuSub);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PanelMenuSub).call(this, props));
    _this.state = {
      activeItem: null
    };
    return _this;
  }

  _createClass(PanelMenuSub, [{
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
    value: function renderSubmenuIcon(item, active) {
      var className = (0, _classnames.default)('p-panelmenu-icon pi pi-fw', {
        'pi-caret-right': !active,
        'pi-caret-down': active
      });

      if (item.items) {
        return _react.default.createElement("span", {
          className: className
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderSubmenu",
    value: function renderSubmenu(item, active) {
      var submenuWrapperClassName = (0, _classnames.default)('p-toggleable-content', {
        'p-toggleable-content-collapsed': !active
      });

      if (item.items) {
        return _react.default.createElement(_reactTransitionGroup.CSSTransition, {
          classNames: "p-toggleable-content",
          timeout: {
            enter: 400,
            exit: 250
          },
          in: active
        }, _react.default.createElement("div", {
          className: submenuWrapperClassName
        }, _react.default.createElement(PanelMenuSub, {
          model: item.items
        })));
      } else {
        return null;
      }
    }
  }, {
    key: "renderMenuitem",
    value: function renderMenuitem(item, index) {
      var _this2 = this;

      var active = this.state.activeItem === item;
      var className = (0, _classnames.default)('p-menuitem', item.className, {
        'p-disabled': item.disabled
      });
      var icon = this.renderIcon(item, active);
      var submenuIcon = this.renderSubmenuIcon(item, active);
      var submenu = this.renderSubmenu(item, active);
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
      }, submenuIcon, icon, _react.default.createElement("span", {
        className: "p-menuitem-text"
      }, item.label)), submenu);
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
      var className = (0, _classnames.default)('p-submenu-list', this.props.className);
      var menu = this.renderMenu();
      return _react.default.createElement("ul", {
        className: className
      }, menu);
    }
  }]);

  return PanelMenuSub;
}(_react.Component);

_defineProperty(PanelMenuSub, "defaultProps", {
  model: null
});

_defineProperty(PanelMenuSub, "propTypes", {
  model: _propTypes.default.any
});

var PanelMenu =
/*#__PURE__*/
function (_Component2) {
  _inherits(PanelMenu, _Component2);

  function PanelMenu(props) {
    var _this4;

    _classCallCheck(this, PanelMenu);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(PanelMenu).call(this, props));
    _this4.state = {
      activeItem: null
    };
    return _this4;
  }

  _createClass(PanelMenu, [{
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
  }, {
    key: "renderPanelIcon",
    value: function renderPanelIcon(item) {
      var className = (0, _classnames.default)('p-menuitem-icon', item.icon);

      if (item.items) {
        return _react.default.createElement("span", {
          className: className
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderPanelToggleIcon",
    value: function renderPanelToggleIcon(item, active) {
      var className = (0, _classnames.default)('p-panelmenu-icon pi pi-fw', {
        'pi-caret-right': !active,
        ' pi-caret-down': active
      });

      if (item.items) {
        return _react.default.createElement("span", {
          className: className
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderPanel",
    value: function renderPanel(item, index) {
      var _this5 = this;

      var active = this.state.activeItem === item;
      var className = (0, _classnames.default)('p-panelmenu-panel', item.className, {
        'p-disabled': item.disabled
      });
      var headerClassName = (0, _classnames.default)('p-component p-panelmenu-header', {
        'p-highlight': active
      });
      var toggleIcon = this.renderPanelToggleIcon(item, active);
      var itemIcon = this.renderPanelIcon(item);
      var contentWrapperClassName = (0, _classnames.default)('p-toggleable-content', {
        'p-toggleable-content-collapsed': !active
      });
      return _react.default.createElement("div", {
        key: item.label + '_' + index,
        className: className,
        style: item.style
      }, _react.default.createElement("div", {
        className: headerClassName,
        style: item.style
      }, _react.default.createElement("a", {
        href: item.url || '#',
        className: "p-panelmenu-header-link ng-tns-c2-1 ng-star-inserted",
        onClick: function onClick(e) {
          return _this5.onItemClick(e, item);
        }
      }, toggleIcon, itemIcon, _react.default.createElement("span", {
        className: "p-menuitem-text"
      }, item.label))), _react.default.createElement(_reactTransitionGroup.CSSTransition, {
        classNames: "p-toggleable-content",
        timeout: {
          enter: 400,
          exit: 250
        },
        in: active
      }, _react.default.createElement("div", {
        className: contentWrapperClassName
      }, _react.default.createElement("div", {
        className: "p-panelmenu-content"
      }, _react.default.createElement(PanelMenuSub, {
        model: item.items,
        className: "p-panelmenu-root-submenu"
      })))));
    }
  }, {
    key: "renderPanels",
    value: function renderPanels() {
      var _this6 = this;

      if (this.props.model) {
        return this.props.model.map(function (item, index) {
          return _this6.renderPanel(item, index);
        });
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var className = (0, _classnames.default)('p-panelmenu p-component', this.props.className);
      var panels = this.renderPanels();
      return _react.default.createElement("div", {
        id: this.props.id,
        className: className,
        style: this.props.style
      }, panels);
    }
  }]);

  return PanelMenu;
}(_react.Component);

exports.PanelMenu = PanelMenu;

_defineProperty(PanelMenu, "defaultProps", {
  id: null,
  model: null,
  style: null,
  className: null
});

_defineProperty(PanelMenu, "propTypes", {
  id: _propTypes.default.string,
  model: _propTypes.default.array,
  style: _propTypes.default.object,
  className: _propTypes.default.string
});