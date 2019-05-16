"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PickListControls = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = require("../button/Button");

var _classnames = _interopRequireDefault(require("classnames"));

var _ObjectUtils = _interopRequireDefault(require("../utils/ObjectUtils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PickListControls =
/*#__PURE__*/
function (_Component) {
  _inherits(PickListControls, _Component);

  function PickListControls() {
    var _this;

    _classCallCheck(this, PickListControls);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PickListControls).call(this));
    _this.moveUp = _this.moveUp.bind(_assertThisInitialized(_this));
    _this.moveTop = _this.moveTop.bind(_assertThisInitialized(_this));
    _this.moveDown = _this.moveDown.bind(_assertThisInitialized(_this));
    _this.moveBottom = _this.moveBottom.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PickListControls, [{
    key: "moveUp",
    value: function moveUp(event) {
      var selectedItems = this.props.selection;

      if (selectedItems && selectedItems.length) {
        var list = _toConsumableArray(this.props.list);

        for (var i = 0; i < selectedItems.length; i++) {
          var selectedItem = selectedItems[i];

          var selectedItemIndex = _ObjectUtils.default.findIndexInList(selectedItem, list);

          if (selectedItemIndex !== 0) {
            var movedItem = list[selectedItemIndex];
            var temp = list[selectedItemIndex - 1];
            list[selectedItemIndex - 1] = movedItem;
            list[selectedItemIndex] = temp;
          } else {
            break;
          }
        }

        if (this.props.onReorder) {
          this.props.onReorder({
            originalEvent: event,
            value: list,
            direction: 'up'
          });
        }
      }
    }
  }, {
    key: "moveTop",
    value: function moveTop(event) {
      var selectedItems = this.props.selection;

      if (selectedItems && selectedItems.length) {
        var list = _toConsumableArray(this.props.list);

        for (var i = 0; i < selectedItems.length; i++) {
          var selectedItem = selectedItems[i];

          var selectedItemIndex = _ObjectUtils.default.findIndexInList(selectedItem, list);

          if (selectedItemIndex !== 0) {
            var movedItem = list.splice(selectedItemIndex, 1)[0];
            list.unshift(movedItem);
          } else {
            break;
          }
        }

        if (this.props.onReorder) {
          this.props.onReorder({
            originalEvent: event,
            value: list,
            direction: 'top'
          });
        }
      }
    }
  }, {
    key: "moveDown",
    value: function moveDown(event) {
      var selectedItems = this.props.selection;

      if (selectedItems && selectedItems.length) {
        var list = _toConsumableArray(this.props.list);

        for (var i = selectedItems.length - 1; i >= 0; i--) {
          var selectedItem = selectedItems[i];

          var selectedItemIndex = _ObjectUtils.default.findIndexInList(selectedItem, list);

          if (selectedItemIndex !== list.length - 1) {
            var movedItem = list[selectedItemIndex];
            var temp = list[selectedItemIndex + 1];
            list[selectedItemIndex + 1] = movedItem;
            list[selectedItemIndex] = temp;
          } else {
            break;
          }
        }

        if (this.props.onReorder) {
          this.props.onReorder({
            originalEvent: event,
            value: list,
            direction: 'down'
          });
        }

        this.movedDown = true;
      }
    }
  }, {
    key: "moveBottom",
    value: function moveBottom(event) {
      var selectedItems = this.props.selection;

      if (selectedItems && selectedItems.length) {
        var list = _toConsumableArray(this.props.list);

        for (var i = selectedItems.length - 1; i >= 0; i--) {
          var selectedItem = selectedItems[i];

          var selectedItemIndex = _ObjectUtils.default.findIndexInList(selectedItem, list);

          if (selectedItemIndex !== list.length - 1) {
            var movedItem = list.splice(selectedItemIndex, 1)[0];
            list.push(movedItem);
          } else {
            break;
          }
        }

        if (this.props.onReorder) {
          this.props.onReorder({
            originalEvent: event,
            value: list,
            direction: 'bottom'
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var className = (0, _classnames.default)('p-picklist-buttons', this.props.className);
      return _react.default.createElement("div", {
        className: className
      }, _react.default.createElement("div", {
        className: "p-picklist-buttons-cell"
      }, _react.default.createElement(_Button.Button, {
        type: "button",
        icon: "pi pi-angle-up",
        onClick: this.moveUp
      }), _react.default.createElement(_Button.Button, {
        type: "button",
        icon: "pi pi-angle-double-up",
        onClick: this.moveTop
      }), _react.default.createElement(_Button.Button, {
        type: "button",
        icon: "pi pi-angle-down",
        onClick: this.moveDown
      }), _react.default.createElement(_Button.Button, {
        type: "button",
        icon: "pi pi-angle-double-down",
        onClick: this.moveBottom
      })));
    }
  }]);

  return PickListControls;
}(_react.Component);

exports.PickListControls = PickListControls;

_defineProperty(PickListControls, "defaultProps", {
  className: null,
  list: null,
  selection: null,
  onReorder: null
});

_defineProperty(PickListControls, "propTypes", {
  className: _propTypes.default.string,
  list: _propTypes.default.array,
  selection: _propTypes.default.array,
  onReorder: _propTypes.default.func
});