"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderListSubList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ObjectUtils = _interopRequireDefault(require("../utils/ObjectUtils"));

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

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

var OrderListSubList =
/*#__PURE__*/
function (_Component) {
  _inherits(OrderListSubList, _Component);

  function OrderListSubList(props) {
    var _this;

    _classCallCheck(this, OrderListSubList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OrderListSubList).call(this, props));
    _this.onDragEnd = _this.onDragEnd.bind(_assertThisInitialized(_this));
    _this.onDragLeave = _this.onDragLeave.bind(_assertThisInitialized(_this));
    _this.onDrop = _this.onDrop.bind(_assertThisInitialized(_this));
    _this.onListMouseMove = _this.onListMouseMove.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(OrderListSubList, [{
    key: "isSelected",
    value: function isSelected(item) {
      return _ObjectUtils.default.findIndexInList(item, this.props.selection) !== -1;
    }
  }, {
    key: "onDragStart",
    value: function onDragStart(event, index) {
      this.dragging = true;
      this.draggedItemIndex = index;

      if (this.props.dragdropScope) {
        event.dataTransfer.setData('text', 'orderlist');
      }
    }
  }, {
    key: "onDragOver",
    value: function onDragOver(event, index) {
      if (this.draggedItemIndex !== index && this.draggedItemIndex + 1 !== index) {
        this.dragOverItemIndex = index;

        _DomHandler.default.addClass(event.target, 'p-orderlist-droppoint-highlight');

        event.preventDefault();
      }
    }
  }, {
    key: "onDragLeave",
    value: function onDragLeave(event) {
      this.dragOverItemIndex = null;

      _DomHandler.default.removeClass(event.target, 'p-orderlist-droppoint-highlight');
    }
  }, {
    key: "onDrop",
    value: function onDrop(event) {
      var dropIndex = this.draggedItemIndex > this.dragOverItemIndex ? this.dragOverItemIndex : this.dragOverItemIndex === 0 ? 0 : this.dragOverItemIndex - 1;

      var value = _toConsumableArray(this.props.value);

      _ObjectUtils.default.reorderArray(value, this.draggedItemIndex, dropIndex);

      this.dragOverItemIndex = null;

      _DomHandler.default.removeClass(event.target, 'p-orderlist-droppoint-highlight');

      if (this.props.onChange) {
        this.props.onChange({
          originalEvent: event,
          value: value
        });
      }
    }
  }, {
    key: "onDragEnd",
    value: function onDragEnd(event) {
      this.dragging = false;
    }
  }, {
    key: "onListMouseMove",
    value: function onListMouseMove(event) {
      if (this.dragging) {
        var offsetY = this.listElement.getBoundingClientRect().top + _DomHandler.default.getWindowScrollTop();

        var bottomDiff = offsetY + this.listElement.clientHeight - event.pageY;
        var topDiff = event.pageY - offsetY;
        if (bottomDiff < 25 && bottomDiff > 0) this.listElement.scrollTop += 15;else if (topDiff < 25 && topDiff > 0) this.listElement.scrollTop -= 15;
      }
    }
  }, {
    key: "renderDropPoint",
    value: function renderDropPoint(index, key) {
      var _this2 = this;

      return _react.default.createElement("li", {
        key: key,
        className: "p-orderlist-droppoint",
        onDragOver: function onDragOver(e) {
          return _this2.onDragOver(e, index + 1);
        },
        onDragLeave: this.onDragLeave,
        onDrop: this.onDrop
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var header = null;
      var items = null;

      if (this.props.header) {
        header = _react.default.createElement("div", {
          className: "p-orderlist-caption"
        }, this.props.header);
      }

      if (this.props.value) {
        items = this.props.value.map(function (item, i) {
          var content = _this3.props.itemTemplate ? _this3.props.itemTemplate(item) : item;
          var itemClassName = (0, _classnames.default)('p-orderlist-item', _this3.props.className, {
            'p-highlight': _this3.isSelected(item)
          });
          var key = JSON.stringify(item);

          if (_this3.props.dragdrop) {
            var _items = [_this3.renderDropPoint(i, key + '_droppoint'), _react.default.createElement("li", {
              key: key,
              className: itemClassName,
              onClick: function onClick(e) {
                return _this3.props.onItemClick({
                  originalEvent: e,
                  value: item,
                  index: i
                });
              },
              onKeyDown: function onKeyDown(e) {
                return _this3.props.onItemKeyDown({
                  originalEvent: e,
                  value: item,
                  index: i
                });
              },
              draggable: "true",
              onDragStart: function onDragStart(e) {
                return _this3.onDragStart(e, i);
              },
              onDragEnd: _this3.onDragEnd,
              tabIndex: _this3.props.tabIndex
            }, content)];

            if (i === _this3.props.value.length - 1) {
              _items.push(_this3.renderDropPoint(item, i, key + '_droppoint_end'));
            }

            return _items;
          } else {
            return _react.default.createElement("li", {
              key: JSON.stringify(item),
              className: itemClassName,
              onClick: function onClick(e) {
                return _this3.props.onItemClick({
                  originalEvent: e,
                  value: item,
                  index: i
                });
              },
              onKeyDown: function onKeyDown(e) {
                return _this3.props.onItemKeyDown({
                  originalEvent: e,
                  value: item,
                  index: i
                });
              },
              tabIndex: _this3.props.tabIndex
            }, content);
          }
        });
      }

      return _react.default.createElement("div", {
        className: "p-orderlist-list-container"
      }, header, _react.default.createElement("ul", {
        ref: function ref(el) {
          return _this3.listElement = el;
        },
        className: "p-orderlist-list",
        style: this.props.listStyle,
        onDragOver: this.onListMouseMove
      }, items));
    }
  }]);

  return OrderListSubList;
}(_react.Component);

exports.OrderListSubList = OrderListSubList;

_defineProperty(OrderListSubList, "defaultProps", {
  value: null,
  selection: null,
  header: null,
  listStyle: null,
  itemTemplate: null,
  dragdrop: false,
  tabIndex: null,
  onItemClick: null,
  onItemKeyDown: null,
  onChange: null
});

_defineProperty(OrderListSubList, "propTypes", {
  value: _propTypes.default.array,
  selection: _propTypes.default.array,
  header: _propTypes.default.string,
  listStyle: _propTypes.default.object,
  itemTemplate: _propTypes.default.func,
  dragdrop: _propTypes.default.bool,
  tabIndex: _propTypes.default.string,
  onItemClick: _propTypes.default.func,
  onItemKeyDown: _propTypes.default.func,
  onChange: _propTypes.default.func
});