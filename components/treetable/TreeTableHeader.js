"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeTableHeader = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

var _InputText = require("../inputtext/InputText");

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

var TreeTableHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(TreeTableHeader, _Component);

  function TreeTableHeader(props) {
    var _this;

    _classCallCheck(this, TreeTableHeader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TreeTableHeader).call(this, props));
    _this.onHeaderMouseDown = _this.onHeaderMouseDown.bind(_assertThisInitialized(_this));
    _this.onFilterInput = _this.onFilterInput.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TreeTableHeader, [{
    key: "onHeaderClick",
    value: function onHeaderClick(event, column) {
      if (column.props.sortable) {
        var targetNode = event.target;

        if (_DomHandler.default.hasClass(targetNode, 'p-sortable-column') || _DomHandler.default.hasClass(targetNode, 'p-column-title') || _DomHandler.default.hasClass(targetNode, 'p-sortable-column-icon') || _DomHandler.default.hasClass(targetNode.parentElement, 'p-sortable-column-icon')) {
          this.props.onSort({
            originalEvent: event,
            sortField: column.props.field,
            sortFunction: column.props.sortFunction,
            sortable: column.props.sortable
          });

          _DomHandler.default.clearSelection();
        }
      }
    }
  }, {
    key: "onHeaderMouseDown",
    value: function onHeaderMouseDown(event) {
      if (this.props.reorderableColumns) {
        if (event.target.nodeName !== 'INPUT') event.currentTarget.draggable = true;else if (event.target.nodeName === 'INPUT') event.currentTarget.draggable = false;
      }
    }
  }, {
    key: "onHeaderKeyDown",
    value: function onHeaderKeyDown(event, column) {
      if (event.key === 'Enter') {
        this.onHeaderClick(event, column);
        event.preventDefault();
      }
    }
  }, {
    key: "getMultiSortMetaData",
    value: function getMultiSortMetaData(column) {
      if (this.props.multiSortMeta) {
        for (var i = 0; i < this.props.multiSortMeta.length; i++) {
          if (this.props.multiSortMeta[i].field === column.props.field) {
            return this.props.multiSortMeta[i];
          }
        }
      }

      return null;
    }
  }, {
    key: "onResizerMouseDown",
    value: function onResizerMouseDown(event, column) {
      if (this.props.resizableColumns && this.props.onResizeStart) {
        this.props.onResizeStart({
          originalEvent: event,
          columnEl: event.target.parentElement,
          column: column
        });
      }
    }
  }, {
    key: "onFilterInput",
    value: function onFilterInput(e, column) {
      var _this2 = this;

      if (column.props.filter && this.props.onFilter) {
        if (this.filterTimeout) {
          clearTimeout(this.filterTimeout);
        }

        var filterValue = e.target.value;
        this.filterTimeout = setTimeout(function () {
          _this2.props.onFilter({
            value: filterValue,
            field: column.props.field,
            matchMode: column.props.filterMatchMode
          });

          _this2.filterTimeout = null;
        }, this.filterDelay);
      }
    }
  }, {
    key: "renderSortIcon",
    value: function renderSortIcon(column, sorted, sortOrder) {
      if (column.props.sortable) {
        var sortIcon = sorted ? sortOrder < 0 ? 'pi-sort-down' : 'pi-sort-up' : 'pi-sort';
        var sortIconClassName = (0, _classnames.default)('p-sortable-column-icon', 'pi pi-fw', sortIcon);
        return _react.default.createElement("span", {
          className: sortIconClassName
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderResizer",
    value: function renderResizer(column) {
      var _this3 = this;

      if (this.props.resizableColumns) {
        return _react.default.createElement("span", {
          className: "p-column-resizer p-clickable",
          onMouseDown: function onMouseDown(e) {
            return _this3.onResizerMouseDown(e, column);
          }
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderHeaderCell",
    value: function renderHeaderCell(column, index) {
      var _this4 = this;

      var multiSortMetaData = this.getMultiSortMetaData(column);
      var singleSorted = column.props.field === this.props.sortField;
      var multipleSorted = multiSortMetaData !== null;
      var sorted = column.props.sortable && (singleSorted || multipleSorted);
      var sortOrder = 0;
      var filterElement;
      if (singleSorted) sortOrder = this.props.sortOrder;else if (multipleSorted) sortOrder = multiSortMetaData.order;
      var sortIconElement = this.renderSortIcon(column, sorted, sortOrder);
      var className = (0, _classnames.default)(column.props.headerClassName || column.props.className, {
        'p-sortable-column': column.props.sortable,
        'p-highlight': sorted,
        'p-resizable-column': this.props.resizableColumns
      });

      if (column.props.filter) {
        filterElement = column.props.filterElement || _react.default.createElement(_InputText.InputText, {
          onInput: function onInput(e) {
            return _this4.onFilterInput(e, column);
          },
          type: this.props.filterType,
          defaultValue: this.props.filters && this.props.filters[this.props.field] ? this.props.filters[this.props.field].value : null,
          className: "p-column-filter",
          placeholder: column.props.filterPlaceholder,
          maxLength: column.props.filterMaxLength
        });
      }

      var resizer = this.renderResizer(column);
      return _react.default.createElement("th", {
        key: column.field || index,
        className: className,
        style: column.props.headerStyle || column.props.style,
        tabIndex: column.props.sortable ? this.props.tabIndex : null,
        onClick: function onClick(e) {
          return _this4.onHeaderClick(e, column);
        },
        onMouseDown: this.onHeaderMouseDown,
        onKeyDown: function onKeyDown(e) {
          return _this4.onHeaderKeyDown(e, column);
        },
        rowSpan: column.props.rowSpan,
        colSpan: column.props.colSpan,
        onDragStart: this.props.onDragStart,
        onDragOver: this.props.onDragOver,
        onDragLeave: this.props.onDragLeave,
        onDrop: this.props.onDrop
      }, resizer, _react.default.createElement("span", {
        className: "p-column-title"
      }, column.props.header), sortIconElement, filterElement);
    }
  }, {
    key: "renderHeaderRow",
    value: function renderHeaderRow(row, index) {
      var _this5 = this;

      var rowColumns = _react.default.Children.toArray(row.props.children);

      var rowHeaderCells = rowColumns.map(function (col, index) {
        return _this5.renderHeaderCell(col, index);
      });
      return _react.default.createElement("tr", {
        key: index
      }, rowHeaderCells);
    }
  }, {
    key: "renderColumnGroup",
    value: function renderColumnGroup() {
      var _this6 = this;

      var rows = _react.default.Children.toArray(this.props.columnGroup.props.children);

      return rows.map(function (row, i) {
        return _this6.renderHeaderRow(row, i);
      });
    }
  }, {
    key: "renderColumns",
    value: function renderColumns(columns) {
      var _this7 = this;

      if (columns) {
        var headerCells = columns.map(function (col, index) {
          return _this7.renderHeaderCell(col, index);
        });
        return _react.default.createElement("tr", null, headerCells);
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var content = this.props.columnGroup ? this.renderColumnGroup() : this.renderColumns(this.props.columns);
      return _react.default.createElement("thead", {
        className: "p-treetable-thead"
      }, content);
    }
  }]);

  return TreeTableHeader;
}(_react.Component);

exports.TreeTableHeader = TreeTableHeader;

_defineProperty(TreeTableHeader, "defaultProps", {
  columns: null,
  columnGroup: null,
  sortField: null,
  sortOrder: null,
  multiSortMeta: null,
  resizableColumns: false,
  reorderableColumns: false,
  onSort: null,
  onResizeStart: null,
  onDragStart: null,
  onDragOver: null,
  onDragLeave: null,
  onDrop: null,
  onFilter: null
});

_defineProperty(TreeTableHeader, "propTypes", {
  columns: _propTypes.default.array,
  columnGroup: _propTypes.default.any,
  sortField: _propTypes.default.string,
  sortOrder: _propTypes.default.number,
  multiSortMeta: _propTypes.default.array,
  resizableColumns: _propTypes.default.bool,
  reorderableColumns: _propTypes.default.bool,
  onSort: _propTypes.default.func,
  onResizeStart: _propTypes.default.func,
  onDragStart: _propTypes.default.func,
  onDragOver: _propTypes.default.func,
  onDragLeave: _propTypes.default.func,
  onDrop: _propTypes.default.func,
  onFilter: _propTypes.default.func
});