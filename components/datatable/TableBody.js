"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableBody = void 0;

var _react = _interopRequireWildcard(require("react"));

var _BodyRow = require("./BodyRow");

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

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

var TableBody =
/*#__PURE__*/
function (_Component) {
  _inherits(TableBody, _Component);

  function TableBody(props) {
    var _this;

    _classCallCheck(this, TableBody);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TableBody).call(this, props));
    _this.onRowClick = _this.onRowClick.bind(_assertThisInitialized(_this));
    _this.onRowRightClick = _this.onRowRightClick.bind(_assertThisInitialized(_this));
    _this.onRowTouchEnd = _this.onRowTouchEnd.bind(_assertThisInitialized(_this));
    _this.onRowToggle = _this.onRowToggle.bind(_assertThisInitialized(_this));
    _this.onRadioClick = _this.onRadioClick.bind(_assertThisInitialized(_this));
    _this.onCheckboxClick = _this.onCheckboxClick.bind(_assertThisInitialized(_this));
    _this.onRowDragEnd = _this.onRowDragEnd.bind(_assertThisInitialized(_this));
    _this.onRowDragLeave = _this.onRowDragLeave.bind(_assertThisInitialized(_this));
    _this.onRowDrop = _this.onRowDrop.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TableBody, [{
    key: "onRowClick",
    value: function onRowClick(event) {
      var targetNode = event.originalEvent.target.nodeName;

      if (targetNode === 'INPUT' || targetNode === 'BUTTON' || targetNode === 'A' || _DomHandler.default.hasClass(event.originalEvent.target, 'p-clickable')) {
        return;
      }

      if (this.props.onRowClick) {
        this.props.onRowClick(event);
      }

      if (this.props.selectionMode) {
        var rowData = event.data;
        var rowIndex = event.index;

        if (this.isMultipleSelectionMode() && event.originalEvent.shiftKey && this.anchorRowIndex !== null) {
          _DomHandler.default.clearSelection(); //todo: shift key

        } else {
          var selected = this.isSelected(rowData);
          var metaSelection = this.rowTouched ? false : this.props.metaKeySelection;
          this.anchorRowIndex = rowIndex;
          this.rangeRowIndex = rowIndex;
          var selection;

          if (metaSelection) {
            var metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;

            if (selected && metaKey) {
              if (this.isSingleSelectionMode()) {
                selection = null;
              } else {
                var selectionIndex = this.findIndexInSelection(rowData);
                selection = this.props.selection.filter(function (val, i) {
                  return i !== selectionIndex;
                });
              }

              if (this.props.onRowUnselect) {
                this.props.onRowUnselect({
                  originalEvent: event.originalEvent,
                  data: rowData,
                  type: 'row'
                });
              }
            } else {
              if (this.isSingleSelectionMode()) {
                selection = rowData;
              } else if (this.isMultipleSelectionMode()) {
                if (metaKey) selection = this.props.selection ? _toConsumableArray(this.props.selection) : [];else selection = [];
                selection = [].concat(_toConsumableArray(selection), [rowData]);
              }

              if (this.props.onRowSelect) {
                this.props.onRowSelect({
                  originalEvent: event.originalEvent,
                  data: rowData,
                  type: 'row'
                });
              }
            }
          } else {
            if (this.isSingleSelectionMode()) {
              if (selected) {
                selection = null;

                if (this.props.onRowUnselect) {
                  this.props.onRowUnselect({
                    originalEvent: event.originalEvent,
                    data: rowData,
                    type: 'row'
                  });
                }
              } else {
                selection = rowData;

                if (this.props.onRowSelect) {
                  this.props.onRowSelect({
                    originalEvent: event.originalEvent,
                    data: rowData,
                    type: 'row'
                  });
                }
              }
            } else {
              if (selected) {
                var _selectionIndex = this.findIndexInSelection(rowData);

                selection = this.props.selection.filter(function (val, i) {
                  return i !== _selectionIndex;
                });

                if (this.props.onRowSelect) {
                  this.props.onRowSelect({
                    originalEvent: event.originalEvent,
                    data: rowData,
                    type: 'row'
                  });
                }
              } else {
                selection = [].concat(_toConsumableArray(this.props.selection || []), [rowData]);

                if (this.props.onRowSelect) {
                  this.props.onRowSelect({
                    originalEvent: event.originalEvent,
                    data: rowData,
                    type: 'row'
                  });
                }
              }
            }
          }

          if (this.props.onSelectionChange) {
            this.props.onSelectionChange({
              originalEvent: event.originalEvent,
              value: selection
            });
          }
        }
      }

      this.rowTouched = false;
    }
  }, {
    key: "onRowTouchEnd",
    value: function onRowTouchEnd(event) {
      this.rowTouched = true;
    }
  }, {
    key: "onRowRightClick",
    value: function onRowRightClick(event) {
      if (this.props.onContextMenu) {
        _DomHandler.default.clearSelection();

        if (this.props.onContextMenuSelectionChange) {
          this.props.onContextMenuSelectionChange({
            originalEvent: event.originalEvent,
            value: event.data
          });
        }

        if (this.props.onContextMenu) {
          this.props.onContextMenu({
            originalEvent: event.originalEvent,
            value: this.props.node
          });
        }

        event.originalEvent.preventDefault();
      }
    }
  }, {
    key: "onRadioClick",
    value: function onRadioClick(event) {
      var rowData = event.data;
      var selection;

      if (this.isSelected(rowData)) {
        selection = null;

        if (this.props.onRowUnselect) {
          this.props.onRowUnselect({
            originalEvent: event.originalEvent,
            data: rowData,
            type: 'radio'
          });
        }
      } else {
        selection = rowData;

        if (this.props.onRowSelect) {
          this.props.onRowSelect({
            originalEvent: event.originalEvent,
            data: rowData,
            type: 'radio'
          });
        }
      }

      if (this.props.onSelectionChange) {
        this.props.onSelectionChange({
          originalEvent: event.originalEvent,
          value: selection
        });
      }
    }
  }, {
    key: "onCheckboxClick",
    value: function onCheckboxClick(event) {
      var rowData = event.data;
      var selection;

      if (this.isSelected(rowData)) {
        var selectionIndex = this.findIndexInSelection(rowData);
        selection = this.props.selection.filter(function (val, i) {
          return i !== selectionIndex;
        });

        if (this.props.onRowUnselect) {
          this.props.onRowUnselect({
            originalEvent: event.originalEvent,
            data: rowData,
            type: 'checkbox'
          });
        }
      } else {
        selection = [].concat(_toConsumableArray(this.props.selection || []), [rowData]);

        if (this.props.onRowSelect) {
          this.props.onRowSelect({
            originalEvent: event.originalEvent,
            data: rowData,
            type: 'checkbox'
          });
        }
      }

      if (this.props.onSelectionChange) {
        this.props.onSelectionChange({
          originalEvent: event.originalEvent,
          value: selection
        });
      }
    }
  }, {
    key: "isSingleSelectionMode",
    value: function isSingleSelectionMode() {
      return this.props.selectionMode === 'single';
    }
  }, {
    key: "isMultipleSelectionMode",
    value: function isMultipleSelectionMode() {
      return this.props.selectionMode === 'multiple';
    }
  }, {
    key: "isSelected",
    value: function isSelected(rowData) {
      if (rowData && this.props.selection) {
        if (this.props.selection instanceof Array) return this.findIndexInSelection(rowData) > -1;else return this.equals(rowData, this.props.selection);
      }

      return false;
    }
  }, {
    key: "isContextMenuSelected",
    value: function isContextMenuSelected(rowData) {
      if (rowData && this.props.contextMenuSelection) {
        return this.equals(rowData, this.props.contextMenuSelection);
      }

      return false;
    }
  }, {
    key: "equals",
    value: function equals(data1, data2) {
      return this.props.compareSelectionBy === 'equals' ? data1 === data2 : _ObjectUtils.default.equals(data1, data2, this.props.dataKey);
    }
  }, {
    key: "findIndexInSelection",
    value: function findIndexInSelection(rowData) {
      var index = -1;

      if (this.props.selection) {
        for (var i = 0; i < this.props.selection.length; i++) {
          if (this.equals(rowData, this.props.selection[i])) {
            index = i;
            break;
          }
        }
      }

      return index;
    }
  }, {
    key: "onRowToggle",
    value: function onRowToggle(event) {
      var expandedRowIndex = this.findExpandedRowIndex(event.data);
      var expandedRows = this.props.expandedRows ? _toConsumableArray(this.props.expandedRows) : [];

      if (expandedRowIndex !== -1) {
        expandedRows = expandedRows.filter(function (val, i) {
          return i !== expandedRowIndex;
        });

        if (this.props.onRowCollapse) {
          this.props.onRowCollapse({
            originalEvent: event,
            data: event.data
          });
        }
      } else {
        expandedRows.push(event.data);

        if (this.props.onRowExpand) {
          this.props.onRowExpand({
            originalEvent: event,
            data: event.data
          });
        }
      }

      this.props.onRowToggle({
        data: expandedRows
      });
    }
  }, {
    key: "findExpandedRowIndex",
    value: function findExpandedRowIndex(row) {
      var index = -1;

      if (this.props.expandedRows) {
        for (var i = 0; i < this.props.expandedRows.length; i++) {
          if (_ObjectUtils.default.equals(this.props.expandedRows[i], row)) {
            index = i;
            break;
          }
        }
      }

      return index;
    }
  }, {
    key: "isRowExpanded",
    value: function isRowExpanded(row) {
      return this.findExpandedRowIndex(row) !== -1;
    }
  }, {
    key: "isSelectionEnabled",
    value: function isSelectionEnabled() {
      if (this.props.selectionMode || this.props.frozenSelectionMode != null) {
        return true;
      } else {
        if (Array.isArray(this.props.children)) {
          for (var i = 0; i < this.props.children.length; i++) {
            if (this.props.children[i].props.selectionMode) {
              return true;
            }
          }
        } else {
          return this.props.children && this.props.children.selectionMode != null;
        }
      }

      return false;
    }
  }, {
    key: "onRowDragStart",
    value: function onRowDragStart(event, index) {
      this.rowDragging = true;
      this.draggedRowIndex = index;
      event.dataTransfer.setData('text', 'b'); // For firefox
    }
  }, {
    key: "onRowDragEnd",
    value: function onRowDragEnd(event, index) {
      this.rowDragging = false;
      this.draggedRowIndex = null;
      this.droppedRowIndex = null;
    }
  }, {
    key: "onRowDragOver",
    value: function onRowDragOver(event, index) {
      if (this.rowDragging && this.draggedRowIndex !== index) {
        var rowElement = event.rowElement;

        var rowY = _DomHandler.default.getOffset(rowElement).top + _DomHandler.default.getWindowScrollTop();

        var pageY = event.originalEvent.pageY;
        var rowMidY = rowY + _DomHandler.default.getOuterHeight(rowElement) / 2;
        var prevRowElement = rowElement.previousElementSibling;

        if (pageY < rowMidY) {
          _DomHandler.default.removeClass(rowElement, 'p-datatable-dragpoint-bottom');

          this.droppedRowIndex = index;
          if (prevRowElement) _DomHandler.default.addClass(prevRowElement, 'p-datatable-dragpoint-bottom');else _DomHandler.default.addClass(rowElement, 'p-datatable-dragpoint-top');
        } else {
          if (prevRowElement) _DomHandler.default.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');else _DomHandler.default.addClass(rowElement, 'p-datatable-dragpoint-top');
          this.droppedRowIndex = index + 1;

          _DomHandler.default.addClass(rowElement, 'p-datatable-dragpoint-bottom');
        }
      }
    }
  }, {
    key: "onRowDragLeave",
    value: function onRowDragLeave(event) {
      var rowElement = event.rowElement;
      var prevRowElement = rowElement.previousElementSibling;

      if (prevRowElement) {
        _DomHandler.default.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');
      }

      _DomHandler.default.removeClass(rowElement, 'p-datatable-dragpoint-bottom');

      _DomHandler.default.removeClass(rowElement, 'p-datatable-dragpoint-top');
    }
  }, {
    key: "onRowDrop",
    value: function onRowDrop(event) {
      if (this.droppedRowIndex != null) {
        var dropIndex = this.draggedRowIndex > this.droppedRowIndex ? this.droppedRowIndex : this.droppedRowIndex === 0 ? 0 : this.droppedRowIndex - 1;

        var val = _toConsumableArray(this.props.value);

        _ObjectUtils.default.reorderArray(val, this.draggedRowIndex, dropIndex);

        if (this.props.onRowReorder) {
          this.props.onRowReorder({
            originalEvent: event,
            value: val,
            dragIndex: this.draggedRowIndex,
            dropIndex: this.droppedRowIndex
          });
        }
      } //cleanup


      this.onRowDragLeave(event);
      this.onRowDragEnd(event);
    }
  }, {
    key: "renderRowGroupHeader",
    value: function renderRowGroupHeader(rowData, index) {
      return _react.default.createElement("tr", {
        key: index + '_rowgroupheader',
        className: "p-rowgroup-header"
      }, _react.default.createElement("td", {
        colSpan: _react.default.Children.count(this.props.children)
      }, _react.default.createElement("span", {
        className: "p-rowgroup-header-name"
      }, this.props.rowGroupHeaderTemplate(rowData, index))));
    }
  }, {
    key: "renderRowGroupFooter",
    value: function renderRowGroupFooter(rowData, index) {
      return _react.default.createElement("tr", {
        key: index + '_rowgroupfooter',
        className: "p-rowgroup-footer"
      }, this.props.rowGroupFooterTemplate(rowData, index));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var rows;
      var rpp = this.props.rows || 0;
      var first = this.props.first || 0;
      var selectionEnabled = this.isSelectionEnabled();
      var rowGroupMode = this.props.rowGroupMode;
      var hasSubheaderGrouping = rowGroupMode && rowGroupMode === 'subheader';
      var rowSpanGrouping = rowGroupMode && rowGroupMode === 'rowspan';

      if (this.props.value && this.props.value.length) {
        rows = [];
        var startIndex = this.props.lazy ? 0 : first;
        var endIndex = this.props.virtualScroll ? startIndex + rpp * 2 : startIndex + rpp || this.props.value.length;

        var _loop = function _loop(i) {
          if (i >= _this2.props.value.length) {
            return "break";
          }

          var rowData = _this2.props.value[i];

          var expanded = _this2.isRowExpanded(rowData);

          var selected = selectionEnabled ? _this2.isSelected(_this2.props.value[i]) : false;

          var contextMenuSelected = _this2.isContextMenuSelected(rowData);

          var groupRowSpan = void 0; //header row group

          if (hasSubheaderGrouping) {
            var currentRowFieldData = _ObjectUtils.default.resolveFieldData(rowData, _this2.props.groupField);

            var previousRowFieldData = _ObjectUtils.default.resolveFieldData(_this2.props.value[i - 1], _this2.props.groupField);

            if (i === 0 || currentRowFieldData !== previousRowFieldData) {
              rows.push(_this2.renderRowGroupHeader(rowData, i));
            }
          }

          if (rowSpanGrouping) {
            var rowSpanIndex = i;

            var _currentRowFieldData = _ObjectUtils.default.resolveFieldData(rowData, _this2.props.sortField);

            var shouldCountRowSpan = i === 0 || _ObjectUtils.default.resolveFieldData(_this2.props.value[i - 1], _this2.props.sortField) !== _currentRowFieldData;

            if (shouldCountRowSpan) {
              var nextRowFieldData = _currentRowFieldData;
              groupRowSpan = 0;

              while (_currentRowFieldData === nextRowFieldData) {
                groupRowSpan++;
                var nextRowData = _this2.props.value[++rowSpanIndex];

                if (nextRowData) {
                  nextRowFieldData = _ObjectUtils.default.resolveFieldData(nextRowData, _this2.props.sortField);
                } else {
                  break;
                }
              }
            }
          } //row content


          var bodyRow = _react.default.createElement(_BodyRow.BodyRow, {
            key: i,
            value: _this2.props.value,
            rowData: rowData,
            rowIndex: i,
            onClick: _this2.onRowClick,
            onDoubleClick: _this2.props.onRowDoubleClick,
            onRightClick: _this2.onRowRightClick,
            onTouchEnd: _this2.onRowTouchEnd,
            onRowToggle: _this2.onRowToggle,
            expanded: expanded,
            responsive: _this2.props.responsive,
            selectionMode: _this2.props.selectionMode,
            onRadioClick: _this2.onRadioClick,
            onCheckboxClick: _this2.onCheckboxClick,
            selected: selected,
            contextMenuSelected: contextMenuSelected,
            rowClassName: _this2.props.rowClassName,
            sortField: _this2.props.sortField,
            rowGroupMode: _this2.props.rowGroupMode,
            groupRowSpan: groupRowSpan,
            onDragStart: function onDragStart(e) {
              return _this2.onRowDragStart(e, i);
            },
            onDragEnd: _this2.onRowDragEnd,
            onDragOver: function onDragOver(e) {
              return _this2.onRowDragOver(e, i);
            },
            onDragLeave: _this2.onRowDragLeave,
            onDrop: _this2.onRowDrop,
            virtualRowHeight: _this2.props.virtualRowHeight
          }, _this2.props.children);

          rows.push(bodyRow); //row expansion

          if (expanded) {
            var expandedRowContent = _this2.props.rowExpansionTemplate(rowData);

            var expandedRow = _react.default.createElement("tr", {
              key: i + '_expanded'
            }, _react.default.createElement("td", {
              colSpan: _this2.props.children.length
            }, expandedRowContent));

            rows.push(expandedRow);
          } //footer row group


          if (hasSubheaderGrouping) {
            var _currentRowFieldData2 = _ObjectUtils.default.resolveFieldData(rowData, _this2.props.groupField);

            var _nextRowFieldData = _ObjectUtils.default.resolveFieldData(_this2.props.value[i + 1], _this2.props.groupField);

            if (i === _this2.props.value.length - 1 || _currentRowFieldData2 !== _nextRowFieldData) {
              rows.push(_this2.renderRowGroupFooter(rowData, i));
            }
          }
        };

        for (var i = startIndex; i < endIndex; i++) {
          var _ret = _loop(i);

          if (_ret === "break") break;
        }
      } else {
        rows = !this.props.loading && this.props.emptyMessage ? _react.default.createElement("tr", {
          className: "p-datatable-emptymessage"
        }, _react.default.createElement("td", {
          colSpan: this.props.children.length
        }, this.props.emptyMessage)) : null;
      }

      return _react.default.createElement("tbody", {
        className: "p-datatable-tbody"
      }, rows);
    }
  }]);

  return TableBody;
}(_react.Component);

exports.TableBody = TableBody;