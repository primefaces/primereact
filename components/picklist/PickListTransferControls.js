"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PickListTransferControls = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = require("../button/Button");

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

var PickListTransferControls =
/*#__PURE__*/
function (_Component) {
  _inherits(PickListTransferControls, _Component);

  function PickListTransferControls() {
    var _this;

    _classCallCheck(this, PickListTransferControls);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PickListTransferControls).call(this));
    _this.moveRight = _this.moveRight.bind(_assertThisInitialized(_this));
    _this.moveAllRight = _this.moveAllRight.bind(_assertThisInitialized(_this));
    _this.moveLeft = _this.moveLeft.bind(_assertThisInitialized(_this));
    _this.moveAllLeft = _this.moveAllLeft.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PickListTransferControls, [{
    key: "moveRight",
    value: function moveRight(event) {
      var selection = this.props.sourceSelection;

      if (selection && selection.length) {
        var targetList = _toConsumableArray(this.props.target);

        var sourceList = _toConsumableArray(this.props.source);

        for (var i = 0; i < selection.length; i++) {
          var selectedItem = selection[i];

          if (_ObjectUtils.default.findIndexInList(selectedItem, targetList) === -1) {
            targetList.push(sourceList.splice(_ObjectUtils.default.findIndexInList(selectedItem, sourceList), 1)[0]);
          }
        }

        if (this.props.onTransfer) {
          this.props.onTransfer({
            originalEvent: event,
            source: sourceList,
            target: targetList,
            direction: 'toTarget'
          });
        }
      }
    }
  }, {
    key: "moveAllRight",
    value: function moveAllRight(event) {
      if (this.props.source) {
        var targetList = [].concat(_toConsumableArray(this.props.target), _toConsumableArray(this.props.source));
        var sourceList = [];

        if (this.props.onTransfer) {
          this.props.onTransfer({
            originalEvent: event,
            source: sourceList,
            target: targetList,
            direction: 'allToTarget'
          });
        }
      }
    }
  }, {
    key: "moveLeft",
    value: function moveLeft(event) {
      var selection = this.props.targetSelection;

      if (selection && selection.length) {
        var targetList = _toConsumableArray(this.props.target);

        var sourceList = _toConsumableArray(this.props.source);

        for (var i = 0; i < selection.length; i++) {
          var selectedItem = selection[i];

          if (_ObjectUtils.default.findIndexInList(selectedItem, sourceList) === -1) {
            sourceList.push(targetList.splice(_ObjectUtils.default.findIndexInList(selectedItem, targetList), 1)[0]);
          }
        }

        if (this.props.onTransfer) {
          this.props.onTransfer({
            originalEvent: event,
            source: sourceList,
            target: targetList,
            direction: 'toSource'
          });
        }
      }
    }
  }, {
    key: "moveAllLeft",
    value: function moveAllLeft(event) {
      if (this.props.source) {
        var sourceList = [].concat(_toConsumableArray(this.props.source), _toConsumableArray(this.props.target));
        var targetList = [];

        if (this.props.onTransfer) {
          this.props.onTransfer({
            originalEvent: event,
            source: sourceList,
            target: targetList,
            direction: 'allToSource'
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
        icon: "pi pi-angle-right",
        onClick: this.moveRight
      }), _react.default.createElement(_Button.Button, {
        type: "button",
        icon: "pi pi-angle-double-right",
        onClick: this.moveAllRight
      }), _react.default.createElement(_Button.Button, {
        type: "button",
        icon: "pi pi-angle-left",
        onClick: this.moveLeft
      }), _react.default.createElement(_Button.Button, {
        type: "button",
        icon: "pi pi-angle-double-left",
        onClick: this.moveAllLeft
      })));
    }
  }]);

  return PickListTransferControls;
}(_react.Component);

exports.PickListTransferControls = PickListTransferControls;

_defineProperty(PickListTransferControls, "defaultProps", {
  source: null,
  target: null,
  sourceSelection: null,
  targetSelection: null,
  onTransfer: null
});

_defineProperty(PickListTransferControls, "propTypes", {
  source: _propTypes.default.array,
  target: _propTypes.default.array,
  sourceSelection: _propTypes.default.array,
  targetSelection: _propTypes.default.array,
  onTransfer: _propTypes.default.func
});