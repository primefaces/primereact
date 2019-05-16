"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderCell = void 0;

var _react = _interopRequireWildcard(require("react"));

var _InputText = require("../inputtext/InputText");

var _classnames = _interopRequireDefault(require("classnames"));

var _RowCheckbox = require("./RowCheckbox");

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

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

var HeaderCell =
/*#__PURE__*/
function (_Component) {
  _inherits(HeaderCell, _Component);

  function HeaderCell(props) {
    var _this;

    _classCallCheck(this, HeaderCell);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HeaderCell).call(this, props));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onFilterInput = _this.onFilterInput.bind(_assertThisInitialized(_this));
    _this.onMouseDown = _this.onMouseDown.bind(_assertThisInitialized(_this));
    _this.onResizerMouseDown = _this.onResizerMouseDown.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(HeaderCell, [{
    key: "onClick",
    value: function onClick(event) {
      if (this.props.sortable) {
        var targetNode = event.target;

        if (_DomHandler.default.hasClass(targetNode, 'p-sortable-column') || _DomHandler.default.hasClass(targetNode, 'p-column-title') || _DomHandler.default.hasClass(targetNode, 'p-sortable-column-icon') || _DomHandler.default.hasClass(targetNode.parentElement, 'p-sortable-column-icon')) {
          this.props.onSort({
            originalEvent: event,
            sortField: this.props.columnSortField || this.props.field,
            sortFunction: this.props.sortFunction,
            sortable: this.props.sortable
          });

          _DomHandler.default.clearSelection();
        }
      }
    }
  }, {
    key: "onFilterInput",
    value: function onFilterInput(e) {
      var _this2 = this;

      if (this.props.filter && this.props.onFilter) {
        if (this.filterTimeout) {
          clearTimeout(this.filterTimeout);
        }

        var filterValue = e.target.value;
        this.filterTimeout = setTimeout(function () {
          _this2.props.onFilter({
            value: filterValue,
            field: _this2.props.field,
            matchMode: _this2.props.filterMatchMode
          });

          _this2.filterTimeout = null;
        }, this.filterDelay);
      }
    }
  }, {
    key: "onResizerMouseDown",
    value: function onResizerMouseDown(event) {
      if (this.props.resizableColumns && this.props.onColumnResizeStart) {
        this.props.onColumnResizeStart({
          originalEvent: event,
          columnEl: event.target.parentElement,
          columnProps: this.props
        });
      }
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      if (this.props.reorderableColumns) {
        if (event.target.nodeName !== 'INPUT') this.el.draggable = true;else if (event.target.nodeName === 'INPUT') this.el.draggable = false;
      }
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.key === 'Enter' && event.currentTarget === this.el) {
        this.onClick(event);
        event.preventDefault();
      }
    }
  }, {
    key: "getMultiSortMetaData",
    value: function getMultiSortMetaData() {
      if (this.props.multiSortMeta) {
        for (var i = 0; i < this.props.multiSortMeta.length; i++) {
          if (this.props.multiSortMeta[i].field === this.props.field) {
            return this.props.multiSortMeta[i];
          }
        }
      }

      return null;
    }
  }, {
    key: "renderSortIcon",
    value: function renderSortIcon(sorted, sortOrder) {
      if (this.props.sortable) {
        var sortIcon = sorted ? sortOrder < 0 ? 'pi-sort-down' : 'pi-sort-up' : 'pi-sort';
        var sortIconClassName = (0, _classnames.default)('p-sortable-column-icon pi pi-fw', sortIcon);
        return _react.default.createElement("span", {
          className: sortIconClassName
        });
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var multiSortMetaData = this.getMultiSortMetaData();
      var singleSorted = this.props.field === this.props.sortField || this.props.columnSortField != null && this.props.columnSortField === this.props.sortField;
      var multipleSorted = multiSortMetaData !== null;
      var sortOrder = 0;

      var resizer = this.props.resizableColumns && _react.default.createElement("span", {
        className: "p-column-resizer p-clickable",
        onMouseDown: this.onResizerMouseDown
      });

      var filterElement, headerCheckbox;
      if (singleSorted) sortOrder = this.props.sortOrder;else if (multipleSorted) sortOrder = multiSortMetaData.order;
      var sorted = this.props.sortable && (singleSorted || multipleSorted);
      var className = (0, _classnames.default)({
        'p-sortable-column': this.props.sortable,
        'p-highlight': sorted,
        'p-resizable-column': this.props.resizableColumns,
        'p-selection-column': this.props.selectionMode
      }, this.props.headerClassName || this.props.className);
      var sortIconElement = this.renderSortIcon(sorted, sortOrder);

      if (this.props.filter) {
        filterElement = this.props.filterElement || _react.default.createElement(_InputText.InputText, {
          onInput: this.onFilterInput,
          type: this.props.filterType,
          defaultValue: this.props.filters && this.props.filters[this.props.field] ? this.props.filters[this.props.field].value : null,
          className: "p-column-filter",
          placeholder: this.props.filterPlaceholder,
          maxLength: this.props.filterMaxLength
        });
      }

      if (this.props.selectionMode === 'multiple') {
        headerCheckbox = _react.default.createElement(_RowCheckbox.RowCheckbox, {
          onClick: this.props.onHeaderCheckboxClick,
          selected: this.props.headerCheckboxSelected,
          disabled: !this.props.value || this.props.value.length === 0
        });
      }

      return _react.default.createElement("th", {
        ref: function ref(el) {
          return _this3.el = el;
        },
        tabIndex: this.props.sortable ? this.props.tabIndex : null,
        className: className,
        style: this.props.headerStyle || this.props.style,
        onClick: this.onClick,
        onMouseDown: this.onMouseDown,
        onKeyDown: this.onKeyDown,
        colSpan: this.props.colSpan,
        rowSpan: this.props.rowSpan,
        onDragStart: this.props.onDragStart,
        onDragOver: this.props.onDragOver,
        onDragLeave: this.props.onDragLeave,
        onDrop: this.props.onDrop
      }, resizer, _react.default.createElement("span", {
        className: "p-column-title"
      }, this.props.header), sortIconElement, filterElement, headerCheckbox);
    }
  }]);

  return HeaderCell;
}(_react.Component);

exports.HeaderCell = HeaderCell;