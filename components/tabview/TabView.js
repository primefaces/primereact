"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabView = exports.TabPanel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _UniqueComponentId = _interopRequireDefault(require("../utils/UniqueComponentId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TabPanel =
/*#__PURE__*/
function (_Component) {
  _inherits(TabPanel, _Component);

  function TabPanel() {
    _classCallCheck(this, TabPanel);

    return _possibleConstructorReturn(this, _getPrototypeOf(TabPanel).apply(this, arguments));
  }

  return TabPanel;
}(_react.Component);

exports.TabPanel = TabPanel;

_defineProperty(TabPanel, "defaultProps", {
  header: null,
  leftIcon: null,
  rightIcon: null,
  disabled: false,
  headerStyle: null,
  headerClassName: null,
  contentStyle: null,
  contentClassName: null
});

_defineProperty(TabPanel, "propTypes", {
  header: _propTypes.default.string,
  leftIcon: _propTypes.default.string,
  rightIcon: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  headerStyle: _propTypes.default.object,
  headerClassName: _propTypes.default.string,
  contentStyle: _propTypes.default.object,
  contentClassName: _propTypes.default.string
});

var TabView =
/*#__PURE__*/
function (_Component2) {
  _inherits(TabView, _Component2);

  function TabView(props) {
    var _this;

    _classCallCheck(this, TabView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TabView).call(this, props));

    if (!_this.props.onTabChange) {
      _this.state = {
        activeIndex: _this.props.activeIndex
      };
    }

    _this.id = _this.props.id || (0, _UniqueComponentId.default)();
    return _this;
  }

  _createClass(TabView, [{
    key: "isSelected",
    value: function isSelected(index) {
      var activeIndex = this.props.onTabChange ? this.props.activeIndex : this.state.activeIndex;
      return activeIndex === index;
    }
  }, {
    key: "onTabHeaderClick",
    value: function onTabHeaderClick(event, tab, index) {
      if (!tab.props.disabled) {
        if (this.props.onTabChange) {
          this.props.onTabChange({
            originalEvent: event,
            index: index
          });
        } else {
          this.setState({
            activeIndex: index
          });
        }
      }

      event.preventDefault();
    }
  }, {
    key: "renderTabHeader",
    value: function renderTabHeader(tab, index) {
      var _this2 = this;

      var selected = this.isSelected(index);
      var className = (0, _classnames.default)(tab.props.headerClassName, 'p-unselectable-text', {
        'p-tabview-selected p-highlight': selected,
        'p-disabled': tab.props.disabled
      });
      var id = this.id + '_header_' + index;
      var ariaControls = this.id + '_content_' + index;
      return _react.default.createElement("li", {
        className: className,
        style: tab.props.headerStyle,
        role: "presentation"
      }, _react.default.createElement("a", {
        role: "tab",
        href: '#' + ariaControls,
        onClick: function onClick(event) {
          return _this2.onTabHeaderClick(event, tab, index);
        },
        id: id,
        "aria-controls": ariaControls,
        "aria-selected": selected
      }, tab.props.leftIcon && _react.default.createElement("span", {
        className: (0, _classnames.default)('p-tabview-left-icon ', tab.props.leftIcon)
      }), _react.default.createElement("span", {
        className: "p-tabview-title"
      }, tab.props.header), tab.props.rightIcon && _react.default.createElement("span", {
        className: (0, _classnames.default)('p-tabview-right-icon ', tab.props.rightIcon)
      })));
    }
  }, {
    key: "renderTabHeaders",
    value: function renderTabHeaders() {
      var _this3 = this;

      return _react.default.Children.map(this.props.children, function (tab, index) {
        return _this3.renderTabHeader(tab, index);
      });
    }
  }, {
    key: "renderNavigator",
    value: function renderNavigator() {
      var headers = this.renderTabHeaders();
      return _react.default.createElement("ul", {
        className: "p-tabview-nav p-reset",
        role: "tablist"
      }, headers);
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this4 = this;

      var contents = _react.default.Children.map(this.props.children, function (tab, index) {
        if (!_this4.props.renderActiveOnly || _this4.isSelected(index)) {
          return _this4.createContent(tab, index);
        }
      });

      return _react.default.createElement("div", {
        className: "p-tabview-panels"
      }, contents);
    }
  }, {
    key: "createContent",
    value: function createContent(tab, index) {
      var selected = this.isSelected(index);
      var className = (0, _classnames.default)(tab.props.contentClassName, 'p-tabview-panel', {
        'p-hidden': !selected
      });
      var id = this.id + '_content_' + index;
      var ariaLabelledBy = this.id + '_header_' + index;
      return _react.default.createElement("div", {
        id: id,
        "aria-labelledby": ariaLabelledBy,
        "aria-hidden": !selected,
        className: className,
        style: tab.props.contentStyle,
        role: "tabpanel"
      }, !this.props.renderActiveOnly ? tab.props.children : selected && tab.props.children);
    }
  }, {
    key: "render",
    value: function render() {
      var className = (0, _classnames.default)('p-tabview p-component p-tabview-top', this.props.className);
      var navigator = this.renderNavigator();
      var content = this.renderContent();
      return _react.default.createElement("div", {
        id: this.props.id,
        className: className,
        style: this.props.style
      }, navigator, content);
    }
  }]);

  return TabView;
}(_react.Component);

exports.TabView = TabView;

_defineProperty(TabView, "defaultProps", {
  id: null,
  activeIndex: 0,
  style: null,
  className: null,
  renderActiveOnly: true,
  onTabChange: null
});

_defineProperty(TabView, "propTypes", {
  id: _propTypes.default.string,
  activeIndex: _propTypes.default.number,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  renderActiveOnly: _propTypes.default.bool,
  onTabChange: _propTypes.default.func
});