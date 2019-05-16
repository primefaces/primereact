"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabMenu = void 0;

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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TabMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(TabMenu, _Component);

  function TabMenu(props) {
    var _this;

    _classCallCheck(this, TabMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TabMenu).call(this, props));

    if (!_this.props.onTabChange) {
      _this.state = {
        activeItem: props.activeItem
      };
    }

    return _this;
  }

  _createClass(TabMenu, [{
    key: "itemClick",
    value: function itemClick(event, item) {
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

      if (this.props.onTabChange) {
        this.props.onTabChange({
          originalEvent: event,
          value: item
        });
      } else {
        this.setState({
          activeItem: item
        });
      }
    }
  }, {
    key: "renderMenuItem",
    value: function renderMenuItem(item, index) {
      var _this2 = this;

      var activeItem = this.props.onTabChange ? this.props.activeItem : this.state.activeItem;
      var className = (0, _classnames.default)('p-tabmenuitem', item.className, {
        'p-highlight': activeItem ? activeItem === item : index === 0,
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
          return _this2.itemClick(event, item);
        }
      }, icon, _react.default.createElement("span", {
        className: "p-menuitem-text"
      }, item.label)));
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this3 = this;

      return this.props.model.map(function (item, index) {
        return _this3.renderMenuItem(item, index);
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.model) {
        var className = (0, _classnames.default)('p-tabmenu p-component', this.props.className);
        var items = this.renderItems();
        return _react.default.createElement("div", {
          id: this.props.id,
          className: className,
          style: this.props.style
        }, _react.default.createElement("ul", {
          className: "p-tabmenu-nav p-reset",
          role: "tablist"
        }, items));
      } else {
        return null;
      }
    }
  }]);

  return TabMenu;
}(_react.Component);

exports.TabMenu = TabMenu;

_defineProperty(TabMenu, "defaultProps", {
  id: null,
  model: null,
  activeItem: null,
  style: null,
  className: null,
  onTabChange: null
});

_defineProperty(TabMenu, "propTypes", {
  id: _propTypes.default.string,
  model: _propTypes.default.array,
  activeItem: _propTypes.default.any,
  style: _propTypes.default.any,
  className: _propTypes.default.string,
  onTabChange: _propTypes.default.func
});