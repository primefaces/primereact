"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiSelectPanel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

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

var MultiSelectPanel =
/*#__PURE__*/
function (_Component) {
  _inherits(MultiSelectPanel, _Component);

  function MultiSelectPanel() {
    _classCallCheck(this, MultiSelectPanel);

    return _possibleConstructorReturn(this, _getPrototypeOf(MultiSelectPanel).apply(this, arguments));
  }

  _createClass(MultiSelectPanel, [{
    key: "renderElement",
    value: function renderElement() {
      var _this = this;

      return _react.default.createElement("div", {
        className: "p-multiselect-panel p-hidden p-input-overlay",
        ref: function ref(el) {
          return _this.element = el;
        },
        onClick: this.props.onClick
      }, this.props.header, _react.default.createElement("div", {
        className: "p-multiselect-items-wrapper",
        style: {
          maxHeight: this.props.scrollHeight
        }
      }, _react.default.createElement("ul", {
        className: "p-multiselect-items p-multiselect-list p-component"
      }, this.props.children)));
    }
  }, {
    key: "render",
    value: function render() {
      var element = this.renderElement();

      if (this.props.appendTo) {
        return _reactDom.default.createPortal(element, this.props.appendTo);
      } else {
        return element;
      }
    }
  }]);

  return MultiSelectPanel;
}(_react.Component);

exports.MultiSelectPanel = MultiSelectPanel;

_defineProperty(MultiSelectPanel, "defaultProps", {
  appendTo: null,
  header: null,
  onClick: null,
  scrollHeight: null
});

_defineProperty(MultiSelectPanel, "propTypes", {
  appendTo: _propTypes.default.object,
  header: _propTypes.default.any,
  onClick: _propTypes.default.func,
  scrollHeight: _propTypes.default.string
});