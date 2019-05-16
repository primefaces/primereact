"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoCompletePanel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _ObjectUtils = _interopRequireDefault(require("../utils/ObjectUtils"));

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

var AutoCompletePanel =
/*#__PURE__*/
function (_Component) {
  _inherits(AutoCompletePanel, _Component);

  function AutoCompletePanel() {
    _classCallCheck(this, AutoCompletePanel);

    return _possibleConstructorReturn(this, _getPrototypeOf(AutoCompletePanel).apply(this, arguments));
  }

  _createClass(AutoCompletePanel, [{
    key: "renderElement",
    value: function renderElement() {
      var _this = this;

      var items;

      if (this.props.suggestions) {
        items = this.props.suggestions.map(function (suggestion, index) {
          var itemContent = _this.props.itemTemplate ? _this.props.itemTemplate(suggestion) : _this.props.field ? _ObjectUtils.default.resolveFieldData(suggestion, _this.props.field) : suggestion;
          return _react.default.createElement("li", {
            key: index + '_item',
            className: "p-autocomplete-list-item",
            onClick: function onClick(e) {
              return _this.props.onItemClick(e, suggestion);
            }
          }, itemContent);
        });
      }

      return _react.default.createElement("div", {
        ref: function ref(el) {
          return _this.element = el;
        },
        className: "p-autocomplete-panel p-input-overlay",
        style: {
          maxHeight: this.props.scrollHeight
        }
      }, _react.default.createElement("ul", {
        className: "p-autocomplete-items p-autocomplete-list p-component p-reset"
      }, items));
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

  return AutoCompletePanel;
}(_react.Component);

exports.AutoCompletePanel = AutoCompletePanel;

_defineProperty(AutoCompletePanel, "defaultProps", {
  suggestions: null,
  field: null,
  appendTo: null,
  itemTemplate: null,
  onItemClick: null,
  scrollHeight: '200px'
});

_defineProperty(AutoCompletePanel, "propTypes", {
  suggestions: _propTypes.default.array,
  field: _propTypes.default.string,
  appendTo: _propTypes.default.any,
  itemTemplate: _propTypes.default.func,
  onItemClick: _propTypes.default.func,
  scrollHeight: _propTypes.default.string
});