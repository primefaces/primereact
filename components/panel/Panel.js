"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Panel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var Panel =
/*#__PURE__*/
function (_Component) {
  _inherits(Panel, _Component);

  function Panel(props) {
    var _this;

    _classCallCheck(this, Panel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Panel).call(this, props));

    if (!_this.props.onToggle) {
      _this.state = {
        collapsed: _this.props.collapsed
      };
    }

    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.id = _this.props.id || (0, _UniqueComponentId.default)();
    return _this;
  }

  _createClass(Panel, [{
    key: "toggle",
    value: function toggle(event) {
      if (this.props.toggleable) {
        var collapsed = this.props.onToggle ? this.props.collapsed : this.state.collapsed;
        if (collapsed) this.expand(event);else this.collapse(event);

        if (this.props.onToggle) {
          this.props.onToggle({
            originalEvent: event,
            value: !collapsed
          });
        }
      }

      event.preventDefault();
    }
  }, {
    key: "expand",
    value: function expand(event) {
      if (!this.props.onToggle) {
        this.setState({
          collapsed: false
        });
      }

      if (this.props.onExpand) {
        this.props.onExpand(event);
      }
    }
  }, {
    key: "collapse",
    value: function collapse(event) {
      if (!this.props.onToggle) {
        this.setState({
          collapsed: true
        });
      }

      if (this.props.onCollapse) {
        this.props.onCollapse(event);
      }
    }
  }, {
    key: "isCollapsed",
    value: function isCollapsed() {
      return this.props.toggleable ? this.props.onToggle ? this.props.collapsed : this.state.collapsed : false;
    }
  }, {
    key: "renderToggleIcon",
    value: function renderToggleIcon(collapsed) {
      if (this.props.toggleable) {
        var id = this.id + '_label';
        var ariaControls = this.id + '_content';
        return _react.default.createElement("a", {
          href: '#' + ariaControls,
          className: "p-panel-titlebar-icon p-panel-titlebar-toggler",
          onClick: this.toggle,
          id: id,
          "aria-controls": ariaControls,
          "aria-expanded": !collapsed,
          role: "tab"
        }, _react.default.createElement("span", {
          className: (0, _classnames.default)('pi', {
            'pi-plus': collapsed,
            'pi-minus': !collapsed
          })
        }));
      } else {
        return null;
      }
    }
  }, {
    key: "renderHeader",
    value: function renderHeader(collapsed) {
      if (this.props.header || this.props.toggleable) {
        var toggleIcon = this.renderToggleIcon(collapsed);
        return _react.default.createElement("div", {
          className: "p-panel-titlebar"
        }, _react.default.createElement("span", {
          className: "p-panel-title"
        }, this.props.header), toggleIcon);
      } else {
        return null;
      }
    }
  }, {
    key: "renderContent",
    value: function renderContent(collapsed) {
      var className = (0, _classnames.default)('p-toggleable-content', {
        'p-toggleable-content-collapsed': collapsed
      });
      var id = this.id + '_content';
      return _react.default.createElement(_reactTransitionGroup.CSSTransition, {
        classNames: "p-toggleable-content",
        timeout: {
          enter: 400,
          exit: 250
        },
        in: !this.isCollapsed()
      }, _react.default.createElement("div", {
        className: className,
        "aria-hidden": collapsed,
        role: "region"
      }, _react.default.createElement("div", {
        id: id,
        className: "p-panel-content"
      }, this.props.children)));
    }
  }, {
    key: "render",
    value: function render() {
      var className = (0, _classnames.default)('p-panel p-component', this.props.className);
      var collapsed = this.isCollapsed();
      var header = this.renderHeader(collapsed);
      var content = this.renderContent(collapsed);
      return _react.default.createElement("div", {
        id: this.props.id,
        className: className,
        style: this.props.style
      }, header, content);
    }
  }]);

  return Panel;
}(_react.Component);

exports.Panel = Panel;

_defineProperty(Panel, "defaultProps", {
  id: null,
  header: null,
  toggleable: null,
  style: null,
  className: null,
  collapsed: null,
  onExpand: null,
  onCollapse: null,
  onToggle: null
});

_defineProperty(Panel, "propTypes", {
  id: _propTypes.default.string,
  header: _propTypes.default.any,
  toggleable: _propTypes.default.bool,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  collapsed: _propTypes.default.bool,
  onExpand: _propTypes.default.func,
  onCollapse: _propTypes.default.func,
  onToggle: _propTypes.default.func
});