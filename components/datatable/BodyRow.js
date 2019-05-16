"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BodyRow = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _BodyCell = require("./BodyCell");

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BodyRow =
/*#__PURE__*/
function (_Component) {
  _inherits(BodyRow, _Component);

  function BodyRow(props) {
    var _this;

    _classCallCheck(this, BodyRow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BodyRow).call(this, props));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onDoubleClick = _this.onDoubleClick.bind(_assertThisInitialized(_this));
    _this.onTouchEnd = _this.onTouchEnd.bind(_assertThisInitialized(_this));
    _this.onRightClick = _this.onRightClick.bind(_assertThisInitialized(_this));
    _this.onMouseDown = _this.onMouseDown.bind(_assertThisInitialized(_this));
    _this.onDragEnd = _this.onDragEnd.bind(_assertThisInitialized(_this));
    _this.onDragOver = _this.onDragOver.bind(_assertThisInitialized(_this));
    _this.onDragLeave = _this.onDragLeave.bind(_assertThisInitialized(_this));
    _this.onDrop = _this.onDrop.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BodyRow, [{
    key: "onClick",
    value: function onClick(event) {
      if (this.props.onClick) {
        this.props.onClick({
          originalEvent: event,
          data: this.props.rowData,
          index: this.props.rowIndex
        });
      }
    }
  }, {
    key: "onDoubleClick",
    value: function onDoubleClick(event) {
      if (this.props.onDoubleClick) {
        this.props.onDoubleClick({
          originalEvent: event,
          data: this.props.rowData,
          index: this.props.rowIndex
        });
      }
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd(event) {
      if (this.props.onTouchEnd) {
        this.props.onTouchEnd(event);
      }
    }
  }, {
    key: "onRightClick",
    value: function onRightClick(event) {
      if (this.props.onRightClick) {
        this.props.onRightClick({
          originalEvent: event,
          data: this.props.rowData,
          index: this.props.rowIndex
        });
      }
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      if (_DomHandler.default.hasClass(event.target, 'p-table-reorderablerow-handle')) event.currentTarget.draggable = true;else event.currentTarget.draggable = false;
    }
  }, {
    key: "onDragEnd",
    value: function onDragEnd(event) {
      if (this.props.onDragEnd) {
        this.props.onDragEnd(event);
      }

      event.currentTarget.draggable = false;
    }
  }, {
    key: "onDragOver",
    value: function onDragOver(event) {
      if (this.props.onDragOver) {
        this.props.onDragOver({
          originalEvent: event,
          rowElement: this.container
        });
      }

      event.preventDefault();
    }
  }, {
    key: "onDragLeave",
    value: function onDragLeave(event) {
      if (this.props.onDragLeave) {
        this.props.onDragLeave({
          originalEvent: event,
          rowElement: this.container
        });
      }
    }
  }, {
    key: "onDrop",
    value: function onDrop(event) {
      if (this.props.onDrop) {
        this.props.onDrop({
          originalEvent: event,
          rowElement: this.container
        });
      }

      event.preventDefault();
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (this.props.selectionMode) {
        var row = event.target;

        switch (event.which) {
          //down arrow
          case 40:
            var nextRow = this.findNextSelectableRow(row);

            if (nextRow) {
              nextRow.focus();
            }

            event.preventDefault();
            break;
          //up arrow

          case 38:
            var prevRow = this.findPrevSelectableRow(row);

            if (prevRow) {
              prevRow.focus();
            }

            event.preventDefault();
            break;
          //enter

          case 13:
            this.onClick(event);
            break;

          default:
            //no op
            break;
        }
      }
    }
  }, {
    key: "findNextSelectableRow",
    value: function findNextSelectableRow(row) {
      var nextRow = row.nextElementSibling;

      if (nextRow) {
        if (_DomHandler.default.hasClass(nextRow, 'p-datatable-row')) return nextRow;else return this.findNextSelectableRow(nextRow);
      } else {
        return null;
      }
    }
  }, {
    key: "findPrevSelectableRow",
    value: function findPrevSelectableRow(row) {
      var prevRow = row.previousElementSibling;

      if (prevRow) {
        if (_DomHandler.default.hasClass(prevRow, 'p-datatable-row')) return prevRow;else return this.findPrevSelectableRow(prevRow);
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var columns = _react.default.Children.toArray(this.props.children);

      var conditionalStyles = {
        'p-highlight': this.props.selected,
        'p-highlight-contextmenu': this.props.contextMenuSelected
      };

      if (this.props.rowClassName) {
        var rowClassNameCondition = this.props.rowClassName(this.props.rowData);
        conditionalStyles = _objectSpread({}, conditionalStyles, rowClassNameCondition);
      }

      var className = (0, _classnames.default)('p-datatable-row', conditionalStyles);
      var hasRowSpanGrouping = this.props.rowGroupMode === 'rowspan';
      var cells = [];

      for (var i = 0; i < columns.length; i++) {
        var column = columns[i];
        var rowSpan = void 0;

        if (hasRowSpanGrouping) {
          if (this.props.sortField === column.props.field) {
            if (this.props.groupRowSpan) rowSpan = this.props.groupRowSpan;else continue;
          }
        }

        var cell = _react.default.createElement(_BodyCell.BodyCell, _extends({
          key: i
        }, column.props, {
          value: this.props.value,
          rowSpan: rowSpan,
          rowData: this.props.rowData,
          rowIndex: this.props.rowIndex,
          onRowToggle: this.props.onRowToggle,
          expanded: this.props.expanded,
          onRadioClick: this.props.onRadioClick,
          onCheckboxClick: this.props.onCheckboxClick,
          responsive: this.props.responsive,
          selected: this.props.selected
        }));

        cells.push(cell);
      }

      return _react.default.createElement("tr", {
        tabIndex: this.props.selectionMode ? '0' : null,
        ref: function ref(el) {
          _this2.container = el;
        },
        className: className,
        onClick: this.onClick,
        onDoubleClick: this.onDoubleClick,
        onTouchEnd: this.onTouchEnd,
        onContextMenu: this.onRightClick,
        onMouseDown: this.onMouseDown,
        onDragStart: this.props.onDragStart,
        onDragEnd: this.onDragEnd,
        onDragOver: this.onDragOver,
        onDragLeave: this.onDragLeave,
        onDrop: this.onDrop,
        style: {
          height: this.props.virtualRowHeight
        },
        onKeyDown: this.onKeyDown
      }, cells);
    }
  }]);

  return BodyRow;
}(_react.Component);

exports.BodyRow = BodyRow;