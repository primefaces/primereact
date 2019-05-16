"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataTable = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _Paginator = require("../paginator/Paginator");

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

var _ObjectUtils = _interopRequireDefault(require("../utils/ObjectUtils"));

var _ScrollableView = require("./ScrollableView");

var _TableBody = require("./TableBody");

var _TableFooter = require("./TableFooter");

var _TableHeader = require("./TableHeader");

var _TableLoadingBody = require("./TableLoadingBody");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

var DataTable =
/*#__PURE__*/
function (_Component) {
  _inherits(DataTable, _Component);

  function DataTable(props) {
    var _this;

    _classCallCheck(this, DataTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataTable).call(this, props));
    var state = {};

    if (!_this.props.onPage) {
      state.first = props.first;
      state.rows = props.rows;
    }

    if (!_this.props.onSort) {
      state.sortField = props.sortField;
      state.sortOrder = props.sortOrder;
      state.multiSortMeta = props.multiSortMeta;
    }

    if (!_this.props.onFilter) {
      state.filters = props.filters;
    }

    if (_this.isStateful()) {
      _this.restoreState(state);
    }

    if (Object.keys(state).length) {
      _this.state = state;
    }

    _this.onPageChange = _this.onPageChange.bind(_assertThisInitialized(_this));
    _this.onSort = _this.onSort.bind(_assertThisInitialized(_this));
    _this.onFilter = _this.onFilter.bind(_assertThisInitialized(_this));
    _this.onColumnResizeStart = _this.onColumnResizeStart.bind(_assertThisInitialized(_this));
    _this.onHeaderCheckboxClick = _this.onHeaderCheckboxClick.bind(_assertThisInitialized(_this));
    _this.onColumnDragStart = _this.onColumnDragStart.bind(_assertThisInitialized(_this));
    _this.onColumnDragOver = _this.onColumnDragOver.bind(_assertThisInitialized(_this));
    _this.onColumnDragLeave = _this.onColumnDragLeave.bind(_assertThisInitialized(_this));
    _this.onColumnDrop = _this.onColumnDrop.bind(_assertThisInitialized(_this));
    _this.onVirtualScroll = _this.onVirtualScroll.bind(_assertThisInitialized(_this));
    _this.frozenSelectionMode = null;
    return _this;
  }

  _createClass(DataTable, [{
    key: "getFirst",
    value: function getFirst() {
      return this.props.onPage ? this.props.first : this.state.first;
    }
  }, {
    key: "getRows",
    value: function getRows() {
      return this.props.onPage ? this.props.rows : this.state.rows;
    }
  }, {
    key: "getSortField",
    value: function getSortField() {
      return this.props.onSort ? this.props.sortField : this.state.sortField;
    }
  }, {
    key: "getSortOrder",
    value: function getSortOrder() {
      return this.props.onSort ? this.props.sortOrder : this.state.sortOrder;
    }
  }, {
    key: "getMultiSortMeta",
    value: function getMultiSortMeta() {
      return this.props.onSort ? this.props.multiSortMeta : this.state.multiSortMeta;
    }
  }, {
    key: "getFilters",
    value: function getFilters() {
      return this.props.onFilter ? this.props.filters : this.state.filters;
    }
  }, {
    key: "getStorage",
    value: function getStorage() {
      switch (this.props.stateStorage) {
        case 'local':
          return window.localStorage;

        case 'session':
          return window.sessionStorage;

        default:
          throw new Error(this.props.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
      }
    }
  }, {
    key: "isStateful",
    value: function isStateful() {
      return this.props.stateKey != null;
    }
  }, {
    key: "saveState",
    value: function saveState() {
      var storage = this.getStorage();
      var state = {};

      if (this.props.paginator) {
        state.first = this.getFirst();
        state.rows = this.getRows();
      }

      if (this.getSortField()) {
        state.sortField = this.getSortField();
        state.sortOrder = this.getSortOrder();
        state.multiSortMeta = this.getMultiSortMeta();
      }

      if (this.hasFilter()) {
        state.filters = this.getFilters();
      }

      if (this.props.resizableColumns) {
        this.saveColumnWidths(state);
      }

      if (this.props.reorderableColumns) {
        state.columnOrder = this.state.columnOrder;
      }

      if (this.props.expandedRows) {
        state.expandedRows = this.props.expandedRows;
      }

      if (this.props.selection && this.props.onSelectionChange) {
        state.selection = this.props.selection;
      }

      if (Object.keys(state).length) {
        storage.setItem(this.props.stateKey, JSON.stringify(state));
      }
    }
  }, {
    key: "clearState",
    value: function clearState() {
      var storage = this.getStorage();

      if (this.props.stateKey) {
        storage.removeItem(this.props.stateKey);
      }
    }
  }, {
    key: "restoreState",
    value: function restoreState(state) {
      var storage = this.getStorage();
      var stateString = storage.getItem(this.props.stateKey);

      if (stateString) {
        var restoredState = JSON.parse(stateString);

        if (this.props.paginator) {
          if (this.props.onPage) {
            this.props.onPage({
              first: restoredState.first,
              rows: restoredState.rows
            });
          } else {
            state.first = restoredState.first;
            state.rows = restoredState.rows;
          }
        }

        if (restoredState.sortField) {
          if (this.props.onSort) {
            this.props.onSort({
              sortField: restoredState.sortField,
              sortOrder: restoredState.sortOrder,
              multiSortMeta: restoredState.multiSortMeta
            });
          } else {
            state.sortField = restoredState.sortField;
            state.sortOrder = restoredState.sortOrder;
            state.multiSortMeta = restoredState.multiSortMeta;
          }
        }

        if (restoredState.filters) {
          if (this.props.onFilter) {
            this.props.onFilter({
              filters: restoredState.filters
            });
          } else {
            state.filters = restoredState.filters;
          }
        }

        if (this.props.resizableColumns) {
          this.columnWidthsState = restoredState.columnWidths;
          this.tableWidthState = restoredState.tableWidth;
        }

        if (this.props.reorderableColumns) {
          state.columnOrder = restoredState.columnOrder;
        }

        if (restoredState.expandedRows && this.props.onRowToggle) {
          this.props.onRowToggle({
            data: restoredState.expandedRows
          });
        }

        if (restoredState.selection && this.props.onSelectionChange) {
          this.props.onSelectionChange({
            value: restoredState.selection
          });
        }
      }
    }
  }, {
    key: "saveColumnWidths",
    value: function saveColumnWidths(state) {
      var widths = [];

      var headers = _DomHandler.default.find(this.container, '.p-datatable-thead > tr > th');

      headers.map(function (header) {
        return widths.push(_DomHandler.default.getOuterWidth(header));
      });
      state.columnWidths = widths.join(',');

      if (this.props.columnResizeMode === 'expand') {
        state.tableWidth = this.props.scrollable ? _DomHandler.default.findSingle(this.container, '.p-datatable-scrollable-header-table').style.width : _DomHandler.default.getOuterWidth(this.table) + 'px';
      }
    }
  }, {
    key: "restoreColumnWidths",
    value: function restoreColumnWidths() {
      if (this.columnWidthsState) {
        var widths = this.columnWidthsState.split(',');

        if (this.props.columnResizeMode === 'expand' && this.tableWidthState) {
          if (this.props.scrollable) {
            this.setScrollableItemsWidthOnExpandResize(null, this.tableWidthState, 0);
          } else {
            this.tableViewChild.nativeElement.style.width = this.tableWidthState;
            this.containerViewChild.nativeElement.style.width = this.tableWidthState;
          }
        }

        if (this.props.scrollable) {
          var headerCols = _DomHandler.default.find(this.container, '.p-datatable-scrollable-header-table > colgroup > col');

          var bodyCols = _DomHandler.default.find(this.container, '.p-datatable-scrollable-body-table > colgroup > col');

          headerCols.map(function (col, index) {
            return col.style.width = widths[index] + 'px';
          });
          bodyCols.map(function (col, index) {
            return col.style.width = widths[index] + 'px';
          });
        } else {
          var headers = _DomHandler.default.find(this.table, '.p-datatable-thead > tr > th');

          headers.map(function (header, index) {
            return header.style.width = widths[index] + 'px';
          });
        }
      }
    }
  }, {
    key: "onPageChange",
    value: function onPageChange(event) {
      if (this.props.onPage) this.props.onPage(event);else this.setState({
        first: event.first,
        rows: event.rows
      });

      if (this.props.onValueChange) {
        this.props.onValueChange();
      }
    }
  }, {
    key: "createPaginator",
    value: function createPaginator(position, totalRecords, data) {
      var className = 'p-paginator-' + position;
      return _react.default.createElement(_Paginator.Paginator, {
        first: this.getFirst(),
        rows: this.getRows(),
        pageLinkSize: this.props.pageLinkSize,
        className: className,
        onPageChange: this.onPageChange,
        template: this.props.paginatorTemplate,
        totalRecords: totalRecords,
        rowsPerPageOptions: this.props.rowsPerPageOptions,
        currentPageReportTemplate: this.props.currentPageReportTemplate,
        leftContent: this.props.paginatorLeft,
        rightContent: this.props.paginatorRight
      });
    }
  }, {
    key: "onSort",
    value: function onSort(event) {
      var sortField = event.sortField;
      var sortOrder = this.getSortField() === event.sortField ? this.getSortOrder() * -1 : this.props.defaultSortOrder;
      var multiSortMeta;
      this.columnSortable = event.sortable;
      this.columnSortFunction = event.sortFunction;

      if (this.props.sortMode === 'multiple') {
        var metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;
        multiSortMeta = this.getMultiSortMeta();

        if (!multiSortMeta || !metaKey) {
          multiSortMeta = [];
        }

        this.addSortMeta({
          field: sortField,
          order: sortOrder
        }, multiSortMeta);
      }

      if (this.props.onSort) {
        this.props.onSort({
          sortField: sortField,
          sortOrder: sortOrder,
          multiSortMeta: multiSortMeta
        });
      } else {
        this.setState({
          sortField: sortField,
          sortOrder: sortOrder,
          first: 0,
          multiSortMeta: multiSortMeta
        });
      }

      if (this.props.onValueChange) {
        this.props.onValueChange(this.processData({
          sortField: sortField,
          sortOrder: sortOrder,
          multiSortMeta: multiSortMeta
        }));
      }
    }
  }, {
    key: "addSortMeta",
    value: function addSortMeta(meta, multiSortMeta) {
      var index = -1;

      for (var i = 0; i < multiSortMeta.length; i++) {
        if (multiSortMeta[i].field === meta.field) {
          index = i;
          break;
        }
      }

      if (index >= 0) multiSortMeta[index] = meta;else multiSortMeta.push(meta);
    }
  }, {
    key: "sortSingle",
    value: function sortSingle(data, sortField, sortOrder) {
      var value = _toConsumableArray(data);

      if (this.columnSortable && this.columnSortFunction) {
        value = this.columnSortFunction({
          field: this.getSortField(),
          order: this.getSortOrder()
        });
      } else {
        value.sort(function (data1, data2) {
          var value1 = _ObjectUtils.default.resolveFieldData(data1, sortField);

          var value2 = _ObjectUtils.default.resolveFieldData(data2, sortField);

          var result = null;
          if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, {
            numeric: true
          });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
          return sortOrder * result;
        });
      }

      return value;
    }
  }, {
    key: "sortMultiple",
    value: function sortMultiple(data, multiSortMeta) {
      var _this2 = this;

      var value = _toConsumableArray(data);

      value.sort(function (data1, data2) {
        return _this2.multisortField(data1, data2, multiSortMeta, 0);
      });
      return value;
    }
  }, {
    key: "multisortField",
    value: function multisortField(data1, data2, multiSortMeta, index) {
      var value1 = _ObjectUtils.default.resolveFieldData(data1, multiSortMeta[index].field);

      var value2 = _ObjectUtils.default.resolveFieldData(data2, multiSortMeta[index].field);

      var result = null;

      if (typeof value1 === 'string' || value1 instanceof String) {
        if (value1.localeCompare && value1 !== value2) {
          return multiSortMeta[index].order * value1.localeCompare(value2, undefined, {
            numeric: true
          });
        }
      } else {
        result = value1 < value2 ? -1 : 1;
      }

      if (value1 === value2) {
        return multiSortMeta.length - 1 > index ? this.multisortField(data1, data2, multiSortMeta, index + 1) : 0;
      }

      return multiSortMeta[index].order * result;
    }
  }, {
    key: "filter",
    value: function filter(value, field, mode) {
      this.onFilter({
        value: value,
        field: field,
        matchMode: mode
      });
    }
  }, {
    key: "onFilter",
    value: function onFilter(event) {
      var currentFilters = this.getFilters();
      var newFilters = currentFilters ? _objectSpread({}, currentFilters) : {};
      if (!this.isFilterBlank(event.value)) newFilters[event.field] = {
        value: event.value,
        matchMode: event.matchMode
      };else if (newFilters[event.field]) delete newFilters[event.field];

      if (this.props.onFilter) {
        this.props.onFilter({
          filters: newFilters
        });
      } else {
        this.setState({
          first: 0,
          filters: newFilters
        });
      }

      if (this.props.onValueChange) {
        this.props.onValueChange(this.processData({
          filters: newFilters
        }));
      }
    }
  }, {
    key: "hasFilter",
    value: function hasFilter() {
      var filters = this.getFilters();
      return filters && Object.keys(filters).length > 0;
    }
  }, {
    key: "isFilterBlank",
    value: function isFilterBlank(filter) {
      if (filter !== null && filter !== undefined) {
        if (typeof filter === 'string' && filter.trim().length === 0 || filter instanceof Array && filter.length === 0) return true;else return false;
      }

      return true;
    }
  }, {
    key: "hasFooter",
    value: function hasFooter() {
      if (this.props.children) {
        if (this.props.footerColumnGroup) {
          return true;
        } else {
          if (this.props.children instanceof Array) {
            for (var i = 0; i < this.props.children.length; i++) {
              if (this.props.children[i].props.footer) {
                return true;
              }
            }
          } else {
            return this.props.children.props.footer !== null;
          }
        }
      } else {
        return false;
      }
    }
  }, {
    key: "onColumnResizeStart",
    value: function onColumnResizeStart(event) {
      var containerLeft = _DomHandler.default.getOffset(this.container).left;

      this.resizeColumn = event.columnEl;
      this.resizeColumnProps = event.columnProps;
      this.columnResizing = true;
      this.lastResizerHelperX = event.originalEvent.pageX - containerLeft + this.container.scrollLeft;
      this.bindColumnResizeEvents();
    }
  }, {
    key: "onColumnResize",
    value: function onColumnResize(event) {
      var containerLeft = _DomHandler.default.getOffset(this.container).left;

      _DomHandler.default.addClass(this.container, 'p-unselectable-text');

      this.resizerHelper.style.height = this.container.offsetHeight + 'px';
      this.resizerHelper.style.top = 0 + 'px';
      this.resizerHelper.style.left = event.pageX - containerLeft + this.container.scrollLeft + 'px';
      this.resizerHelper.style.display = 'block';
    }
  }, {
    key: "onColumnResizeEnd",
    value: function onColumnResizeEnd(event) {
      var delta = this.resizerHelper.offsetLeft - this.lastResizerHelperX;
      var columnWidth = this.resizeColumn.offsetWidth;
      var newColumnWidth = columnWidth + delta;
      var minWidth = this.resizeColumn.style.minWidth || 15;

      if (columnWidth + delta > parseInt(minWidth, 10)) {
        if (this.props.columnResizeMode === 'fit') {
          var nextColumn = this.resizeColumn.nextElementSibling;
          var nextColumnWidth = nextColumn.offsetWidth - delta;

          if (newColumnWidth > 15 && nextColumnWidth > 15) {
            if (this.props.scrollable) {
              var scrollableView = this.findParentScrollableView(this.resizeColumn);

              var scrollableBodyTable = _DomHandler.default.findSingle(scrollableView, 'table.p-datatable-scrollable-body-table');

              var scrollableHeaderTable = _DomHandler.default.findSingle(scrollableView, 'table.p-datatable-scrollable-header-table');

              var scrollableFooterTable = _DomHandler.default.findSingle(scrollableView, 'table.p-datatable-scrollable-footer-table');

              var resizeColumnIndex = _DomHandler.default.index(this.resizeColumn);

              this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
              this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
              this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
            } else {
              this.resizeColumn.style.width = newColumnWidth + 'px';

              if (nextColumn) {
                nextColumn.style.width = nextColumnWidth + 'px';
              }
            }
          }
        } else if (this.props.columnResizeMode === 'expand') {
          if (this.props.scrollable) {
            this.setScrollableItemsWidthOnExpandResize(this.resizeColumn, newColumnWidth, delta);
          } else {
            this.table.style.width = this.table.offsetWidth + delta + 'px';
            this.resizeColumn.style.width = newColumnWidth + 'px';
          }
        }

        if (this.props.onColumnResizeEnd) {
          this.props.onColumnResizeEnd({
            element: this.resizeColumn,
            column: this.resizeColumnProps,
            delta: delta
          });
        }

        if (this.isStateful()) {
          this.saveState();
        }
      }

      this.resizerHelper.style.display = 'none';
      this.resizeColumn = null;
      this.resizeColumnProps = null;

      _DomHandler.default.removeClass(this.container, 'p-unselectable-text');

      this.unbindColumnResizeEvents();
    }
  }, {
    key: "setScrollableItemsWidthOnExpandResize",
    value: function setScrollableItemsWidthOnExpandResize(column, newColumnWidth, delta) {
      var scrollableView = column ? this.findParentScrollableView(column) : this.container;

      var scrollableBody = _DomHandler.default.findSingle(scrollableView, '.p-datatable-scrollable-body');

      var scrollableHeader = _DomHandler.default.findSingle(scrollableView, '.p-datatable-scrollable-header');

      var scrollableFooter = _DomHandler.default.findSingle(scrollableView, '.p-datatable-scrollable-footer');

      var scrollableBodyTable = _DomHandler.default.findSingle(scrollableBody, 'table.p-datatable-scrollable-body-table');

      var scrollableHeaderTable = _DomHandler.default.findSingle(scrollableHeader, 'table.p-datatable-scrollable-header-table');

      var scrollableFooterTable = _DomHandler.default.findSingle(scrollableFooter, 'table.p-datatable-scrollable-footer-table');

      var scrollableBodyTableWidth = column ? scrollableBodyTable.offsetWidth + delta : newColumnWidth;
      var scrollableHeaderTableWidth = column ? scrollableHeaderTable.offsetWidth + delta : newColumnWidth;
      var isContainerInViewport = this.container.offsetWidth >= scrollableBodyTableWidth;

      var setWidth = function setWidth(container, table, width, isContainerInViewport) {
        if (container && table) {
          container.style.width = isContainerInViewport ? width + _DomHandler.default.calculateScrollbarWidth(scrollableBody) + 'px' : 'auto';
          table.style.width = width + 'px';
        }
      };

      setWidth(scrollableBody, scrollableBodyTable, scrollableBodyTableWidth, isContainerInViewport);
      setWidth(scrollableHeader, scrollableHeaderTable, scrollableHeaderTableWidth, isContainerInViewport);
      setWidth(scrollableFooter, scrollableFooterTable, scrollableHeaderTableWidth, isContainerInViewport);

      if (column) {
        var resizeColumnIndex = _DomHandler.default.index(column);

        this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, null);
        this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, null);
        this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, null);
      }
    }
  }, {
    key: "findParentScrollableView",
    value: function findParentScrollableView(column) {
      if (column) {
        var parent = column.parentElement;

        while (parent && !_DomHandler.default.hasClass(parent, 'p-datatable-scrollable-view')) {
          parent = parent.parentElement;
        }

        return parent;
      } else {
        return null;
      }
    }
  }, {
    key: "resizeColGroup",
    value: function resizeColGroup(table, resizeColumnIndex, newColumnWidth, nextColumnWidth) {
      if (table) {
        var colGroup = table.children[0].nodeName === 'COLGROUP' ? table.children[0] : null;

        if (colGroup) {
          var col = colGroup.children[resizeColumnIndex];
          var nextCol = col.nextElementSibling;
          col.style.width = newColumnWidth + 'px';

          if (nextCol && nextColumnWidth) {
            nextCol.style.width = nextColumnWidth + 'px';
          }
        } else {
          throw new Error("Scrollable tables require a colgroup to support resizable columns");
        }
      }
    }
  }, {
    key: "bindColumnResizeEvents",
    value: function bindColumnResizeEvents() {
      var _this3 = this;

      this.documentColumnResizeListener = document.addEventListener('mousemove', function (event) {
        if (_this3.columnResizing) {
          _this3.onColumnResize(event);
        }
      });
      this.documentColumnResizeEndListener = document.addEventListener('mouseup', function (event) {
        if (_this3.columnResizing) {
          _this3.columnResizing = false;

          _this3.onColumnResizeEnd(event);
        }
      });
    }
  }, {
    key: "unbindColumnResizeEvents",
    value: function unbindColumnResizeEvents() {
      document.removeEventListener('document', this.documentColumnResizeListener);
      document.removeEventListener('document', this.documentColumnResizeEndListener);
    }
  }, {
    key: "findParentHeader",
    value: function findParentHeader(element) {
      if (element.nodeName === 'TH') {
        return element;
      } else {
        var parent = element.parentElement;

        while (parent.nodeName !== 'TH') {
          parent = parent.parentElement;
          if (!parent) break;
        }

        return parent;
      }
    }
  }, {
    key: "onColumnDragStart",
    value: function onColumnDragStart(event) {
      if (this.columnResizing) {
        event.preventDefault();
        return;
      }

      this.iconWidth = _DomHandler.default.getHiddenElementOuterWidth(this.reorderIndicatorUp);
      this.iconHeight = _DomHandler.default.getHiddenElementOuterHeight(this.reorderIndicatorUp);
      this.draggedColumn = this.findParentHeader(event.target);
      event.dataTransfer.setData('text', 'b'); // Firefox requires this to make dragging possible
    }
  }, {
    key: "onColumnDragOver",
    value: function onColumnDragOver(event) {
      var dropHeader = this.findParentHeader(event.target);

      if (this.props.reorderableColumns && this.draggedColumn && dropHeader) {
        event.preventDefault();

        var containerOffset = _DomHandler.default.getOffset(this.container);

        var dropHeaderOffset = _DomHandler.default.getOffset(dropHeader);

        if (this.draggedColumn !== dropHeader) {
          var targetLeft = dropHeaderOffset.left - containerOffset.left; //let targetTop =  containerOffset.top - dropHeaderOffset.top;

          var columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
          this.reorderIndicatorUp.style.top = dropHeaderOffset.top - containerOffset.top - (this.iconHeight - 1) + 'px';
          this.reorderIndicatorDown.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';

          if (event.pageX > columnCenter) {
            this.reorderIndicatorUp.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.iconWidth / 2) + 'px';
            this.reorderIndicatorDown.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.iconWidth / 2) + 'px';
            this.dropPosition = 1;
          } else {
            this.reorderIndicatorUp.style.left = targetLeft - Math.ceil(this.iconWidth / 2) + 'px';
            this.reorderIndicatorDown.style.left = targetLeft - Math.ceil(this.iconWidth / 2) + 'px';
            this.dropPosition = -1;
          }

          this.reorderIndicatorUp.style.display = 'block';
          this.reorderIndicatorDown.style.display = 'block';
        }
      }
    }
  }, {
    key: "onColumnDragLeave",
    value: function onColumnDragLeave(event) {
      if (this.props.reorderableColumns && this.draggedColumn) {
        event.preventDefault();
        this.reorderIndicatorUp.style.display = 'none';
        this.reorderIndicatorDown.style.display = 'none';
      }
    }
  }, {
    key: "onColumnDrop",
    value: function onColumnDrop(event) {
      event.preventDefault();

      if (this.draggedColumn) {
        var dragIndex = _DomHandler.default.index(this.draggedColumn);

        var dropIndex = _DomHandler.default.index(this.findParentHeader(event.target));

        var allowDrop = dragIndex !== dropIndex;

        if (allowDrop && (dropIndex - dragIndex === 1 && this.dropPosition === -1 || dragIndex - dropIndex === 1 && this.dropPosition === 1)) {
          allowDrop = false;
        }

        if (allowDrop) {
          var columns = this.state.columnOrder ? this.getColumns() : _react.default.Children.toArray(this.props.children);

          _ObjectUtils.default.reorderArray(columns, dragIndex, dropIndex);

          var columnOrder = [];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = columns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var column = _step.value;
              columnOrder.push(column.props.columnKey || column.props.field);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          this.setState({
            columnOrder: columnOrder
          });

          if (this.props.onColReorder) {
            this.props.onColReorder({
              dragIndex: dragIndex,
              dropIndex: dropIndex,
              columns: columns
            });
          }
        }

        this.reorderIndicatorUp.style.display = 'none';
        this.reorderIndicatorDown.style.display = 'none';
        this.draggedColumn.draggable = false;
        this.draggedColumn = null;
        this.dropPosition = null;
      }
    }
  }, {
    key: "onVirtualScroll",
    value: function onVirtualScroll(event) {
      var _this4 = this;

      if (this.virtualScrollTimer) {
        clearTimeout(this.virtualScrollTimer);
      }

      this.virtualScrollTimer = setTimeout(function () {
        if (_this4.props.onVirtualScroll) {
          _this4.props.onVirtualScroll({
            first: (event.page - 1) * _this4.props.rows,
            rows: _this4.props.virtualScroll ? _this4.props.rows * 2 : _this4.props.rows
          });
        }
      }, this.props.virtualScrollDelay);
    }
  }, {
    key: "exportCSV",
    value: function exportCSV() {
      var _this5 = this;

      var data = this.processData();
      var csv = "\uFEFF";

      var columns = _react.default.Children.toArray(this.props.children); //headers


      for (var i = 0; i < columns.length; i++) {
        if (columns[i].props.field) {
          csv += '"' + (columns[i].props.header || columns[i].props.field) + '"';

          if (i < columns.length - 1) {
            csv += this.props.csvSeparator;
          }
        }
      } //body        


      data.forEach(function (record, i) {
        csv += '\n';

        for (var _i = 0; _i < columns.length; _i++) {
          if (columns[_i].props.field) {
            csv += '"' + _ObjectUtils.default.resolveFieldData(record, columns[_i].props.field) + '"';

            if (_i < columns.length - 1) {
              csv += _this5.props.csvSeparator;
            }
          }
        }
      });
      var blob = new Blob([csv], {
        type: 'text/csv;charset=utf-8;'
      });

      if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, this.props.exportFilename + '.csv');
      } else {
        var link = document.createElement("a");
        link.style.display = 'none';
        document.body.appendChild(link);

        if (link.download !== undefined) {
          link.setAttribute('href', URL.createObjectURL(blob));
          link.setAttribute('download', this.props.exportFilename + '.csv');
          link.click();
        } else {
          csv = 'data:text/csv;charset=utf-8,' + csv;
          window.open(encodeURI(csv));
        }

        document.body.removeChild(link);
      }
    }
  }, {
    key: "closeEditingCell",
    value: function closeEditingCell() {
      document.body.click();
    }
  }, {
    key: "onHeaderCheckboxClick",
    value: function onHeaderCheckboxClick(event) {
      var selection;

      if (!event.checked) {
        var visibleData = this.hasFilter() ? this.processData() : this.props.value;
        selection = _toConsumableArray(visibleData);
      } else {
        selection = [];
      }

      if (this.props.onSelectionChange) {
        this.props.onSelectionChange({
          originalEvent: event,
          value: selection
        });
      }
    }
  }, {
    key: "filterLocal",
    value: function filterLocal(value) {
      var filteredValue = [];
      var filters = this.getFilters();

      var columns = _react.default.Children.toArray(this.props.children);

      for (var i = 0; i < value.length; i++) {
        var localMatch = true;
        var globalMatch = false;

        for (var j = 0; j < columns.length; j++) {
          var col = columns[j];
          var filterMeta = filters ? filters[col.props.field] : null; //local

          if (filterMeta) {
            var filterValue = filterMeta.value;
            var filterField = col.props.field;
            var filterMatchMode = filterMeta.matchMode || col.props.filterMatchMode;

            var dataFieldValue = _ObjectUtils.default.resolveFieldData(value[i], filterField);

            var filterConstraint = filterMatchMode === 'custom' ? col.props.filterFunction : _ObjectUtils.default.filterConstraints[filterMatchMode];

            if (!filterConstraint(dataFieldValue, filterValue)) {
              localMatch = false;
            }

            if (!localMatch) {
              break;
            }
          } //global


          if (!col.props.excludeGlobalFilter && this.props.globalFilter && !globalMatch) {
            globalMatch = _ObjectUtils.default.filterConstraints['contains'](_ObjectUtils.default.resolveFieldData(value[i], col.props.field), this.props.globalFilter);
          }
        }

        var matches = localMatch;

        if (this.props.globalFilter) {
          matches = localMatch && globalMatch;
        }

        if (matches) {
          filteredValue.push(value[i]);
        }
      }

      if (filteredValue.length === value.length) {
        filteredValue = value;
      }

      return filteredValue;
    }
  }, {
    key: "processData",
    value: function processData(localState) {
      var data = this.props.value;

      if (!this.props.lazy) {
        if (data && data.length) {
          var sortField = localState && localState.sortField || this.getSortField();
          var sortOrder = localState && localState.sortOrder || this.getSortOrder();
          var multiSortMeta = localState && localState.multiSortMeta || this.getMultiSortMeta();

          if (sortField || multiSortMeta) {
            if (this.props.sortMode === 'single') data = this.sortSingle(data, sortField, sortOrder);else if (this.props.sortMode === 'multiple') data = this.sortMultiple(data, multiSortMeta);
          }

          var localFilters = localState && localState.filters || this.getFilters();

          if (localFilters || this.props.globalFilter) {
            data = this.filterLocal(data, localFilters);
          }
        }
      }

      return data;
    }
  }, {
    key: "isAllSelected",
    value: function isAllSelected() {
      var visibleData = this.hasFilter() ? this.processData() : this.props.value;
      return this.props.selection && visibleData && visibleData.length && this.props.selection.length === visibleData.length;
    }
  }, {
    key: "getFrozenColumns",
    value: function getFrozenColumns(columns) {
      var frozenColumns = null;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = columns[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var col = _step2.value;

          if (col.props.frozen) {
            frozenColumns = frozenColumns || [];
            frozenColumns.push(col);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return frozenColumns;
    }
  }, {
    key: "getScrollableColumns",
    value: function getScrollableColumns(columns) {
      var scrollableColumns = null;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = columns[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var col = _step3.value;

          if (!col.props.frozen) {
            scrollableColumns = scrollableColumns || [];
            scrollableColumns.push(col);
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return scrollableColumns;
    }
  }, {
    key: "getFrozenSelectionModeInColumn",
    value: function getFrozenSelectionModeInColumn(columns) {
      if (Array.isArray(columns)) {
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = columns[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var col = _step4.value;
            if (col.props.selectionMode) return col.props.selectionMode;
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      }

      return null;
    }
  }, {
    key: "createTableHeader",
    value: function createTableHeader(value, columns, columnGroup) {
      return _react.default.createElement(_TableHeader.TableHeader, {
        value: value,
        onSort: this.onSort,
        sortField: this.getSortField(),
        sortOrder: this.getSortOrder(),
        multiSortMeta: this.getMultiSortMeta(),
        columnGroup: columnGroup,
        resizableColumns: this.props.resizableColumns,
        onColumnResizeStart: this.onColumnResizeStart,
        onFilter: this.onFilter,
        onHeaderCheckboxClick: this.onHeaderCheckboxClick,
        headerCheckboxSelected: this.isAllSelected(),
        reorderableColumns: this.props.reorderableColumns,
        onColumnDragStart: this.onColumnDragStart,
        filters: this.getFilters(),
        onColumnDragOver: this.onColumnDragOver,
        onColumnDragLeave: this.onColumnDragLeave,
        onColumnDrop: this.onColumnDrop,
        tabIndex: this.props.tabIndex
      }, columns);
    }
  }, {
    key: "createTableBody",
    value: function createTableBody(value, columns) {
      return _react.default.createElement(_TableBody.TableBody, {
        value: value,
        first: this.getFirst(),
        rows: this.getRows(),
        lazy: this.props.lazy,
        dataKey: this.props.dataKey,
        compareSelectionBy: this.props.compareSelectionBy,
        selectionMode: this.props.selectionMode,
        selection: this.props.selection,
        metaKeySelection: this.props.metaKeySelection,
        frozenSelectionMode: this.frozenSelectionMode,
        onSelectionChange: this.props.onSelectionChange,
        onRowClick: this.props.onRowClick,
        onRowDoubleClick: this.props.onRowDoubleClick,
        onRowSelect: this.props.onRowSelect,
        onRowUnselect: this.props.onRowUnselect,
        contextMenuSelection: this.props.contextMenuSelection,
        onContextMenuSelectionChange: this.props.onContextMenuSelectionChange,
        onContextMenu: this.props.onContextMenu,
        expandedRows: this.props.expandedRows,
        onRowToggle: this.props.onRowToggle,
        rowExpansionTemplate: this.props.rowExpansionTemplate,
        onRowExpand: this.props.onRowExpand,
        onRowCollapse: this.props.onRowCollapse,
        responsive: this.props.responsive,
        emptyMessage: this.props.emptyMessage,
        virtualScroll: this.props.virtualScroll,
        virtualRowHeight: this.props.virtualRowHeight,
        loading: this.props.loading,
        groupField: this.props.groupField,
        rowGroupMode: this.props.rowGroupMode,
        rowGroupHeaderTemplate: this.props.rowGroupHeaderTemplate,
        rowGroupFooterTemplate: this.props.rowGroupFooterTemplate,
        sortField: this.getSortField(),
        rowClassName: this.props.rowClassName,
        onRowReorder: this.props.onRowReorder
      }, columns);
    }
  }, {
    key: "createTableLoadingBody",
    value: function createTableLoadingBody(columns) {
      if (this.props.virtualScroll) {
        return _react.default.createElement(_TableLoadingBody.TableLoadingBody, {
          columns: columns,
          rows: this.getRows()
        });
      } else {
        return null;
      }
    }
  }, {
    key: "createTableFooter",
    value: function createTableFooter(columns, columnGroup) {
      if (this.hasFooter()) return _react.default.createElement(_TableFooter.TableFooter, {
        columnGroup: columnGroup
      }, columns);else return null;
    }
  }, {
    key: "createScrollableView",
    value: function createScrollableView(value, columns, frozen, headerColumnGroup, footerColumnGroup, totalRecords) {
      return _react.default.createElement(_ScrollableView.ScrollableView, {
        columns: columns,
        header: this.createTableHeader(value, columns, headerColumnGroup),
        body: this.createTableBody(value, columns),
        loadingBody: this.createTableLoadingBody(columns),
        frozenBody: this.props.frozenValue ? this.createTableBody(this.props.frozenValue, columns) : null,
        footer: this.createTableFooter(columns, footerColumnGroup),
        tableStyle: this.props.tableStyle,
        tableClassName: this.props.tableClassName,
        scrollHeight: this.props.scrollHeight,
        frozen: frozen,
        frozenWidth: this.props.frozenWidth,
        virtualScroll: this.props.virtualScroll,
        virtualRowHeight: this.props.virtualRowHeight,
        rows: this.props.rows,
        totalRecords: totalRecords,
        onVirtualScroll: this.onVirtualScroll,
        loading: this.props.loading
      });
    }
  }, {
    key: "getColumns",
    value: function getColumns() {
      var columns = _react.default.Children.toArray(this.props.children);

      if (columns && columns.length) {
        if (this.props.reorderableColumns && this.state.columnOrder) {
          var orderedColumns = [];
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = this.state.columnOrder[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var columnKey = _step5.value;
              var column = this.findColumnByKey(columns, columnKey);

              if (column) {
                orderedColumns.push(column);
              }
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          return [].concat(orderedColumns, _toConsumableArray(columns.filter(function (item) {
            return orderedColumns.indexOf(item) < 0;
          })));
        } else {
          return columns;
        }
      }

      return null;
    }
  }, {
    key: "findColumnByKey",
    value: function findColumnByKey(columns, key) {
      if (columns && columns.length) {
        for (var i = 0; i < columns.length; i++) {
          var child = columns[i];

          if (child.props.columnKey === key || child.props.field === key) {
            return child;
          }
        }
      }

      return null;
    }
  }, {
    key: "getTotalRecords",
    value: function getTotalRecords(data) {
      return this.props.lazy ? this.props.totalRecords : data ? data.length : 0;
    }
  }, {
    key: "renderLoader",
    value: function renderLoader() {
      var iconClassName = (0, _classnames.default)('p-datatable-loading-icon pi-spin', this.props.loadingIcon);
      return _react.default.createElement("div", {
        className: "p-datatable-loading"
      }, _react.default.createElement("div", {
        className: "p-datatable-loading-overlay p-component-overlay"
      }), _react.default.createElement("div", {
        className: "p-datatable-loading-content"
      }, _react.default.createElement("i", {
        className: iconClassName
      })));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.isStateful() && this.props.resizableColumns) {
        this.restoreColumnWidths();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.isStateful()) {
        this.saveState();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var value = this.processData();
      var columns = this.getColumns();
      var totalRecords = this.getTotalRecords(value);
      var className = (0, _classnames.default)('p-datatable p-component', {
        'p-datatable-responsive': this.props.responsive,
        'p-datatable-resizable': this.props.resizableColumns,
        'p-datatable-resizable-fit': this.props.resizableColumns && this.props.columnResizeMode === 'fit',
        'p-datatable-scrollable': this.props.scrollable,
        'p-datatable-virtual-scrollable': this.props.virtualScroll,
        'p-datatable-auto-layout': this.props.autoLayout,
        'p-datatable-hoverable-rows': this.props.selectionMode
      }, this.props.className);
      var paginatorTop = this.props.paginator && this.props.paginatorPosition !== 'bottom' && this.createPaginator('top', totalRecords);
      var paginatorBottom = this.props.paginator && this.props.paginatorPosition !== 'top' && this.createPaginator('bottom', totalRecords);

      var headerFacet = this.props.header && _react.default.createElement("div", {
        className: "p-datatable-header"
      }, this.props.header);

      var footerFacet = this.props.footer && _react.default.createElement("div", {
        className: "p-datatable-footer"
      }, this.props.footer);

      var resizeHelper = this.props.resizableColumns && _react.default.createElement("div", {
        ref: function ref(el) {
          _this6.resizerHelper = el;
        },
        className: "p-column-resizer-helper p-highlight",
        style: {
          display: 'none'
        }
      });

      var tableContent = null;

      var resizeIndicatorUp = this.props.reorderableColumns && _react.default.createElement("span", {
        ref: function ref(el) {
          _this6.reorderIndicatorUp = el;
        },
        className: "pi pi-arrow-down p-datatable-reorder-indicator-up",
        style: {
          position: 'absolute',
          display: 'none'
        }
      });

      var resizeIndicatorDown = this.props.reorderableColumns && _react.default.createElement("span", {
        ref: function ref(el) {
          _this6.reorderIndicatorDown = el;
        },
        className: "pi pi-arrow-up p-datatable-reorder-indicator-down",
        style: {
          position: 'absolute',
          display: 'none'
        }
      });

      var loader;

      if (this.props.loading) {
        loader = this.renderLoader();
      }

      if (this.props.scrollable) {
        this.frozenSelectionMode = this.frozenSelectionMode || this.getFrozenSelectionModeInColumn(columns);
        var frozenColumns = this.getFrozenColumns(columns);
        var scrollableColumns = frozenColumns ? this.getScrollableColumns(columns) : columns;
        var frozenView, scrollableView;

        if (frozenColumns) {
          frozenView = this.createScrollableView(value, frozenColumns, true, this.props.frozenHeaderColumnGroup, this.props.frozenFooterColumnGroup, totalRecords);
        }

        scrollableView = this.createScrollableView(value, scrollableColumns, false, this.props.headerColumnGroup, this.props.footerColumnGroup, totalRecords);
        tableContent = _react.default.createElement("div", {
          className: "p-datatable-scrollable-wrapper"
        }, frozenView, scrollableView);
      } else {
        var tableHeader = this.createTableHeader(value, columns, this.props.headerColumnGroup);
        var tableBody = this.createTableBody(value, columns);
        var tableFooter = this.createTableFooter(columns, this.props.footerColumnGroup);
        tableContent = _react.default.createElement("div", {
          className: "p-datatable-wrapper"
        }, _react.default.createElement("table", {
          style: this.props.tableStyle,
          className: this.props.tableClassName,
          ref: function ref(el) {
            _this6.table = el;
          }
        }, tableHeader, tableFooter, tableBody));
      }

      return _react.default.createElement("div", {
        id: this.props.id,
        className: className,
        style: this.props.style,
        ref: function ref(el) {
          _this6.container = el;
        }
      }, loader, headerFacet, paginatorTop, tableContent, paginatorBottom, footerFacet, resizeHelper, resizeIndicatorUp, resizeIndicatorDown);
    }
  }]);

  return DataTable;
}(_react.Component);

exports.DataTable = DataTable;

_defineProperty(DataTable, "defaultProps", {
  id: null,
  value: null,
  header: null,
  footer: null,
  style: null,
  className: null,
  tableStyle: null,
  tableClassName: null,
  paginator: false,
  paginatorPosition: 'bottom',
  alwaysShowPaginator: true,
  paginatorTemplate: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
  paginatorLeft: null,
  paginatorRight: null,
  pageLinkSize: 5,
  rowsPerPageOptions: null,
  currentPageReportTemplate: '({currentPage} of {totalPages})',
  first: null,
  rows: null,
  totalRecords: null,
  lazy: false,
  sortField: null,
  sortOrder: null,
  multiSortMeta: null,
  sortMode: 'single',
  defaultSortOrder: 1,
  emptyMessage: null,
  selectionMode: null,
  selection: null,
  onSelectionChange: null,
  contextMenuSelection: null,
  onContextMenuSelectionChange: null,
  compareSelectionBy: 'deepEquals',
  dataKey: null,
  metaKeySelection: true,
  headerColumnGroup: null,
  footerColumnGroup: null,
  frozenHeaderColumnGroup: null,
  frozenFooterColumnGroup: null,
  rowExpansionTemplate: null,
  expandedRows: null,
  onRowToggle: null,
  responsive: false,
  resizableColumns: false,
  columnResizeMode: 'fit',
  reorderableColumns: false,
  filters: null,
  globalFilter: null,
  scrollable: false,
  scrollHeight: null,
  virtualScroll: false,
  virtualScrollDelay: 150,
  virtualRowHeight: 28,
  frozenWidth: null,
  frozenValue: null,
  csvSeparator: ',',
  exportFilename: 'download',
  rowGroupMode: null,
  autoLayout: false,
  rowClassName: null,
  rowGroupHeaderTemplate: null,
  rowGroupFooterTemplate: null,
  loading: false,
  loadingIcon: 'pi pi-spinner',
  tabIndex: '0',
  stateKey: null,
  stateStorage: 'session',
  onColumnResizeEnd: null,
  onSort: null,
  onPage: null,
  onFilter: null,
  onVirtualScroll: null,
  onRowClick: null,
  onRowDoubleClick: null,
  onRowSelect: null,
  onRowUnselect: null,
  onRowExpand: null,
  onRowCollapse: null,
  onContextMenu: null,
  onColReorder: null,
  onRowReorder: null,
  onValueChange: null
});

_defineProperty(DataTable, "propTypes", {
  id: _propTypes.default.string,
  value: _propTypes.default.array,
  header: _propTypes.default.any,
  footer: _propTypes.default.any,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  tableStyle: _propTypes.default.any,
  tableClassName: _propTypes.default.string,
  paginator: _propTypes.default.bool,
  paginatorPosition: _propTypes.default.string,
  alwaysShowPaginator: _propTypes.default.bool,
  paginatorTemplate: _propTypes.default.string,
  paginatorLeft: _propTypes.default.any,
  paginatorRight: _propTypes.default.any,
  pageLinkSize: _propTypes.default.number,
  rowsPerPageOptions: _propTypes.default.array,
  currentPageReportTemplate: _propTypes.default.string,
  first: _propTypes.default.number,
  rows: _propTypes.default.number,
  totalRecords: _propTypes.default.number,
  lazy: _propTypes.default.bool,
  sortField: _propTypes.default.string,
  sortOrder: _propTypes.default.number,
  multiSortMeta: _propTypes.default.array,
  sortMode: _propTypes.default.string,
  defaultSortOrder: _propTypes.default.number,
  emptyMessage: _propTypes.default.string,
  selectionMode: _propTypes.default.string,
  selection: _propTypes.default.any,
  onSelectionChange: _propTypes.default.func,
  compareSelectionBy: _propTypes.default.string,
  dataKey: _propTypes.default.string,
  metaKeySelection: _propTypes.default.bool,
  headerColumnGroup: _propTypes.default.any,
  footerColumnGroup: _propTypes.default.any,
  frozenHeaderColumnGroup: _propTypes.default.any,
  frozenFooterColumnGroup: _propTypes.default.any,
  rowExpansionTemplate: _propTypes.default.func,
  expandedRows: _propTypes.default.array,
  onRowToggle: _propTypes.default.func,
  responsive: _propTypes.default.bool,
  resizableColumns: _propTypes.default.bool,
  columnResizeMode: _propTypes.default.string,
  reorderableColumns: _propTypes.default.bool,
  filters: _propTypes.default.object,
  globalFilter: _propTypes.default.any,
  scrollable: _propTypes.default.bool,
  scrollHeight: _propTypes.default.string,
  virtualScroll: _propTypes.default.bool,
  virtualScrollDelay: _propTypes.default.number,
  virtualRowHeight: _propTypes.default.number,
  frozenWidth: _propTypes.default.string,
  frozenValue: _propTypes.default.array,
  csvSeparator: _propTypes.default.string,
  exportFilename: _propTypes.default.string,
  rowGroupMode: _propTypes.default.string,
  autoLayout: _propTypes.default.bool,
  rowClassName: _propTypes.default.func,
  rowGroupHeaderTemplate: _propTypes.default.func,
  rowGroupFooterTemplate: _propTypes.default.func,
  loading: _propTypes.default.bool,
  loadingIcon: _propTypes.default.string,
  tabIndex: _propTypes.default.string,
  stateKey: _propTypes.default.string,
  stateStorage: _propTypes.default.string,
  onColumnResizeEnd: _propTypes.default.func,
  onSort: _propTypes.default.func,
  onPage: _propTypes.default.func,
  onFilter: _propTypes.default.func,
  onVirtualScroll: _propTypes.default.func,
  onRowClick: _propTypes.default.func,
  onRowDoubleClick: _propTypes.default.func,
  onRowSelect: _propTypes.default.func,
  onRowUnselect: _propTypes.default.func,
  onRowExpand: _propTypes.default.func,
  onRowCollapse: _propTypes.default.func,
  onContextMenu: _propTypes.default.func,
  onColReorder: _propTypes.default.func,
  onRowReorder: _propTypes.default.func,
  onValueChange: _propTypes.default.func
});