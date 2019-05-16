"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadCrumb = void 0;

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

var BreadCrumb =
/*#__PURE__*/
function (_Component) {
  _inherits(BreadCrumb, _Component);

  function BreadCrumb() {
    _classCallCheck(this, BreadCrumb);

    return _possibleConstructorReturn(this, _getPrototypeOf(BreadCrumb).apply(this, arguments));
  }

  _createClass(BreadCrumb, [{
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
    }
  }, {
    key: "renderHome",
    value: function renderHome() {
      var _this = this;

      if (this.props.home) {
        var className = (0, _classnames.default)('p-breadcrumb-home', this.props.home.className, {
          'p-disabled': this.props.home.disabled
        });
        return _react.default.createElement("li", {
          className: className,
          style: this.props.home.style
        }, _react.default.createElement("a", {
          href: this.props.home.url || '#',
          className: "p-menuitem-link",
          target: this.props.home.target,
          onClick: function onClick(event) {
            return _this.itemClick(event, _this.props.home);
          }
        }, _react.default.createElement("span", {
          className: this.props.home.icon
        })));
      } else {
        return null;
      }
    }
  }, {
    key: "renderSeparator",
    value: function renderSeparator() {
      return _react.default.createElement("li", {
        className: "p-breadcrumb-chevron pi pi-chevron-right"
      });
    }
  }, {
    key: "renderMenuitem",
    value: function renderMenuitem(item, index) {
      var _this2 = this;

      var className = (0, _classnames.default)(item.className, {
        'p-disabled': item.disabled
      });
      return _react.default.createElement("li", {
        role: "menuitem",
        className: className,
        style: item.style
      }, _react.default.createElement("a", {
        href: item.url || '#',
        className: "p-menuitem-link",
        target: item.target,
        onClick: function onClick(event) {
          return _this2.itemClick(event, item);
        }
      }, _react.default.createElement("span", {
        className: "p-menuitem-text"
      }, item.label)));
    }
  }, {
    key: "renderMenuitems",
    value: function renderMenuitems() {
      var _this3 = this;

      if (this.props.model) {
        var items = this.props.model.map(function (item, index) {
          var menuitem = _this3.renderMenuitem(item, index);

          var separator = index === _this3.props.model.length - 1 ? null : _this3.renderSeparator();
          return _react.default.createElement(_react.default.Fragment, {
            key: item.label + '_' + index
          }, menuitem, separator);
        });
        return items;
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var className = (0, _classnames.default)('p-breadcrumb p-component', this.props.className);
      var home = this.renderHome();
      var items = this.renderMenuitems();
      var separator = this.renderSeparator();
      return _react.default.createElement("div", {
        id: this.props.id,
        className: className,
        style: this.props.style
      }, _react.default.createElement("ul", null, home, separator, items));
    }
  }]);

  return BreadCrumb;
}(_react.Component);

exports.BreadCrumb = BreadCrumb;

_defineProperty(BreadCrumb, "defaultProps", {
  id: null,
  model: null,
  home: null,
  style: null,
  className: null
});

_defineProperty(BreadCrumb, "propTypes", {
  id: _propTypes.default.string,
  model: _propTypes.default.array,
  home: _propTypes.default.any,
  style: _propTypes.default.object,
  className: _propTypes.default.string
});