import React, { Component } from 'react';
import { BodyRow } from './BodyRow';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';
import { RowTogglerButton } from './RowTogglerButton';
import { localeOption } from '../api/Api';

export class TableBody extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rowGroupHeaderStyleObject: {}
        };

        // row
        this.onRowClick = this.onRowClick.bind(this);
        this.onRowDoubleClick = this.onRowDoubleClick.bind(this);
        this.onRowRightClick = this.onRowRightClick.bind(this);
        this.onRowTouchEnd = this.onRowTouchEnd.bind(this);
        this.onRowMouseDown = this.onRowMouseDown.bind(this);
        this.onRowMouseUp = this.onRowMouseUp.bind(this);
        this.onRowToggle = this.onRowToggle.bind(this);

        // drag
        this.onRowDragStart = this.onRowDragStart.bind(this);
        this.onRowDragOver = this.onRowDragOver.bind(this);
        this.onRowDragLeave = this.onRowDragLeave.bind(this);
        this.onRowDragEnd = this.onRowDragEnd.bind(this);
        this.onRowDrop = this.onRowDrop.bind(this);

        // selection
        this.onRadioChange = this.onRadioChange.bind(this);
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
        this.onDragSelectionMouseMove = this.onDragSelectionMouseMove.bind(this);
        this.onDragSelectionMouseUp = this.onDragSelectionMouseUp.bind(this);

        // cell
        this.onCellClick = this.onCellClick.bind(this);
        this.onCellMouseDown = this.onCellMouseDown.bind(this);
        this.onCellMouseUp = this.onCellMouseUp.bind(this);

        this.ref = this.ref.bind(this);
    }

    ref(el) {
        this.el = el;
        this.props.virtualScrollerContentRef && this.props.virtualScrollerContentRef(el);
    }

    equals(data1, data2) {
        if (this.allowCellSelection())
            return (data1.rowIndex === data2.rowIndex || data1.rowData === data2.rowData) && (data1.field === data2.field || data1.cellIndex === data2.cellIndex)
        else
            return this.props.compareSelectionBy === 'equals' ? (data1 === data2) : ObjectUtils.equals(data1, data2, this.props.dataKey);
    }

    isSubheaderGrouping() {
        return this.props.rowGroupMode && this.props.rowGroupMode === 'subheader';
    }

    isSelectionEnabled() {
        return (this.props.selectionMode || this.props.selectionModeInColumn !== null) || (this.props.columns && this.props.columns.some(col => col && !!col.props.selectionMode));
    }

    isRadioSelectionMode() {
        return this.props.selectionMode === 'radiobutton';
    }

    isCheckboxSelectionMode() {
        return this.props.selectionMode === 'checkbox';
    }

    isRadioSelectionModeInColumn() {
        return this.props.selectionModeInColumn === 'single';
    }

    isCheckboxSelectionModeInColumn() {
        return this.props.selectionModeInColumn === 'multiple';
    }

    isSingleSelection() {
        return (this.props.selectionMode === 'single' && !this.isCheckboxSelectionModeInColumn()) ||
            (!this.isRadioSelectionMode() && this.isRadioSelectionModeInColumn());
    }

    isMultipleSelection() {
        return (this.props.selectionMode === 'multiple' && !this.isRadioSelectionModeInColumn()) || this.isCheckboxSelectionModeInColumn();
    }

    isRadioOnlySelection() {
        return this.isRadioSelectionMode() && this.isRadioSelectionModeInColumn();
    }

    isCheckboxOnlySelection() {
        return this.isCheckboxSelectionMode() && this.isCheckboxSelectionModeInColumn();
    }

    isSelected(rowData) {
        if (rowData && this.props.selection) {
            return (this.props.selection instanceof Array) ? this.findIndex(this.props.selection, rowData) > -1 : this.equals(rowData, this.props.selection);
        }

        return false;
    }

    isContextMenuSelected(rowData) {
        if (rowData && this.props.contextMenuSelection) {
            return this.equals(rowData, this.props.contextMenuSelection);
        }

        return false;
    }

    isRowExpanded(rowData) {
        if (rowData && this.props.expandedRows) {
            if (this.isSubheaderGrouping() && this.props.expandableRowGroups) {
                return this.isRowGroupExpanded(rowData);
            }
            else {
                if (this.props.dataKey)
                    return this.props.expandedRows ? this.props.expandedRows[ObjectUtils.resolveFieldData(rowData, this.props.dataKey)] !== undefined : false;
                else
                    return this.findIndex(this.props.expandedRows, rowData) !== -1;
            }
        }

        return false;
    }

    isRowGroupExpanded(rowData) {
        if (this.props.dataKey === this.props.groupRowsBy)
            return Object.keys(this.props.expandedRows).some(data => ObjectUtils.equals(data, ObjectUtils.resolveFieldData(rowData, this.props.dataKey)));
        else
            return this.props.expandedRows.some(data => ObjectUtils.equals(data, rowData, this.props.groupRowsBy));
    }

    isRowEditing(rowData) {
        if (this.props.editMode === 'row' && rowData && this.props.editingRows) {
            if (this.props.dataKey)
                return this.props.editingRows ? this.props.editingRows[ObjectUtils.resolveFieldData(rowData, this.props.dataKey)] !== undefined : false;
            else
                return this.findIndex(this.props.editingRows, rowData) !== -1;
        }

        return false;
    }

    allowDrag(event) {
        return this.props.dragSelection && this.isMultipleSelection() && !event.originalEvent.shiftKey;
    }

    allowRowDrag(event) {
        return !this.allowCellSelection() && this.allowDrag(event);
    }

    allowCellDrag(event) {
        return this.allowCellSelection() && this.allowDrag(event);
    }

    allowSelection(event) {
        return !DomHandler.isClickable(event.originalEvent.target);
    }

    allowMetaKeySelection(event) {
        return !this.rowTouched && (!this.props.metaKeySelection || (this.props.metaKeySelection && (event.originalEvent.metaKey || event.originalEvent.ctrlKey)))
    }

    allowRangeSelection(event) {
        return this.isMultipleSelection() && event.originalEvent.shiftKey && this.anchorRowIndex !== null;
    }

    allowRowSelection() {
        return (this.props.selectionMode || this.props.selectionModeInColumn) && !this.isRadioOnlySelection() && !this.isCheckboxOnlySelection();
    }

    allowCellSelection() {
        return this.props.cellSelection && !this.isRadioSelectionModeInColumn() && !this.isCheckboxSelectionModeInColumn();
    }

    getColumnsLength() {
        return this.props.columns ? this.props.columns.length : 0;
    }

    getVirtualScrollerOption(option, options) {
        options = options || this.props.virtualScrollerOptions;
        return options ? options[option] : null;
    }

    findIndex(collection, rowData) {
        return (collection || []).findIndex(data => this.equals(rowData, data));
    }

    rowGroupHeaderStyle() {
        if (this.props.scrollable) {
            return { top: this.state.rowGroupHeaderStyleObject['top'] };
        }

        return null;
    }

    getRowKey(rowData, index) {
        return this.props.dataKey ? ObjectUtils.resolveFieldData(rowData, this.props.dataKey) + '_' + index : index;
    }

    shouldRenderRowGroupHeader(value, rowData, i) {
        let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.props.groupRowsBy);
        let prevRowData = value[i - 1];
        if (prevRowData) {
            let previousRowFieldData = ObjectUtils.resolveFieldData(prevRowData, this.props.groupRowsBy);
            return currentRowFieldData !== previousRowFieldData;
        }
        else {
            return true;
        }
    }

    shouldRenderRowGroupFooter(value, rowData, i, expanded) {
        if (this.props.expandableRowGroups && !expanded) {
            return false;
        }
        else {
            let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.props.groupRowsBy);
            let nextRowData = value[i + 1];
            if (nextRowData) {
                let nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, this.props.groupRowsBy);
                return currentRowFieldData !== nextRowFieldData;
            }
            else {
                return true;
            }
        }
    }

    updateFrozenRowStickyPosition() {
        this.el.style.top = DomHandler.getOuterHeight(this.el.previousElementSibling) + 'px';
    }

    updateFrozenRowGroupHeaderStickyPosition() {
        const tableHeaderHeight = DomHandler.getOuterHeight(this.el.previousElementSibling);
        const top = tableHeaderHeight + 'px';
        if (this.state.rowGroupHeaderStyleObject && this.state.rowGroupHeaderStyleObject.top !== top) {
            this.setState({ rowGroupHeaderStyleObject: { top } })
        }
    }

    updateVirtualScrollerPosition() {
        const tableHeaderHeight = DomHandler.getOuterHeight(this.el.previousElementSibling);
        this.el.style.top = (this.el.style.top || 0) + tableHeaderHeight + 'px';
    }

    onSingleSelection({ originalEvent, data, toggleable, type }) {
        let selected = this.isSelected(data);
        let selection = this.props.selection;

        if (selected) {
            if (toggleable) {
                selection = null;
                this.onUnselect({ originalEvent, data, type });
            }
        }
        else {
            selection = data;
            this.onSelect({ originalEvent, data, type });
        }

        this.focusOnElement(originalEvent, true);

        if (this.props.onSelectionChange && selection !== this.props.selection) {
            this.props.onSelectionChange({
                originalEvent,
                value: selection,
                type
            });
        }
    }

    onMultipleSelection({ originalEvent, data, toggleable, type }) {
        let selected = this.isSelected(data);
        let selection = this.props.selection || [];

        if (selected) {
            if (toggleable) {
                let selectionIndex = this.findIndex(selection, data);
                selection = this.props.selection.filter((val, i) => i !== selectionIndex);
                this.onUnselect({ originalEvent, data, type });
            }
            else if (selection.length) {
                this.props.selection.forEach(d => this.onUnselect({ originalEvent, data: d, type }));
                selection = [data];
                this.onSelect({ originalEvent, data, type });
            }
        }
        else {
            selection = toggleable && this.isMultipleSelection() ? [...selection, data] : [data];
            this.onSelect({ originalEvent, data, type });
        }

        this.focusOnElement(originalEvent, true);

        if (this.props.onSelectionChange && selection !== this.props.selection) {
            this.props.onSelectionChange({
                originalEvent,
                value: selection,
                type
            });
        }
    }

    onRangeSelection(event, type) {
        DomHandler.clearSelection();
        this.rangeRowIndex = this.allowCellSelection() ? event.rowIndex : event.index;
        let selectionInRange = this.selectRange(event);
        let selection = this.isMultipleSelection() ? [...new Set([...(this.props.selection || []), ...selectionInRange])] : selectionInRange;

        if (this.props.onSelectionChange && selection !== this.props.selection) {
            this.props.onSelectionChange({
                originalEvent: event.originalEvent,
                value: selection,
                type
            });
        }

        this.anchorRowIndex = this.rangeRowIndex;
        this.anchorCellIndex = event.cellIndex;

        this.focusOnElement(event.originalEvent, false);
    }

    selectRange(event) {
        let rangeStart, rangeEnd;
        let isLazyAndPaginator = this.props.lazy && this.props.paginator;

        if (isLazyAndPaginator) {
            this.anchorRowIndex += this.anchorRowFirst;
            this.rangeRowIndex += this.props.first;
        }

        if (this.rangeRowIndex > this.anchorRowIndex) {
            rangeStart = this.anchorRowIndex;
            rangeEnd = this.rangeRowIndex;
        }
        else if (this.rangeRowIndex < this.anchorRowIndex) {
            rangeStart = this.rangeRowIndex;
            rangeEnd = this.anchorRowIndex;
        }
        else {
            rangeStart = rangeEnd = this.rangeRowIndex;
        }

        if (isLazyAndPaginator) {
            rangeStart = Math.max(rangeStart - this.props.first, 0);
            rangeEnd -= this.props.first;
        }

        return this.allowCellSelection() ? this.selectRangeOnCell(event, rangeStart, rangeEnd) : this.selectRangeOnRow(event, rangeStart, rangeEnd);
    }

    selectRangeOnRow(event, rowRangeStart, rowRangeEnd) {
        const value = this.props.value;
        let selection = [];

        for (let i = rowRangeStart; i <= rowRangeEnd; i++) {
            let rangeRowData = value[i];
            selection.push(rangeRowData);

            this.onSelect({ originalEvent: event.originalEvent, data: rangeRowData, type: 'row' });
        }

        return selection;
    }

    selectRangeOnCell(event, rowRangeStart, rowRangeEnd) {
        let cellRangeStart, cellRangeEnd, cellIndex = event.cellIndex;
        if (cellIndex > this.anchorCellIndex) {
            cellRangeStart = this.anchorCellIndex;
            cellRangeEnd = cellIndex;
        }
        else if (cellIndex < this.anchorCellIndex) {
            cellRangeStart = cellIndex;
            cellRangeEnd = this.anchorCellIndex;
        }
        else {
            cellRangeStart = cellRangeEnd = cellIndex;
        }

        const value = this.props.value;
        let selection = [];

        for (let i = rowRangeStart; i <= rowRangeEnd; i++) {
            let rowData = value[i];
            let columns = this.props.columns;

            for (let j = cellRangeStart; j <= cellRangeEnd; j++) {
                let field = columns[j].props.field;
                let rangeRowData = {
                    value: ObjectUtils.resolveFieldData(rowData, field),
                    field,
                    rowData,
                    rowIndex: i,
                    cellIndex: j,
                    selected: true
                };

                selection.push(rangeRowData);

                this.onSelect({ originalEvent: event.originalEvent, data: rangeRowData, type: 'cell' });
            }
        }

        return selection;
    }

    onSelect(event) {
        if (this.allowCellSelection())
            this.props.onCellSelect && this.props.onCellSelect({ originalEvent: event.originalEvent, ...event.data, type: event.type });
        else
            this.props.onRowSelect && this.props.onRowSelect(event);
    }

    onUnselect(event) {
        if (this.allowCellSelection())
            this.props.onCellUnselect && this.props.onCellUnselect({ originalEvent: event.originalEvent, ...event.data, type: event.type });
        else
            this.props.onRowUnselect && this.props.onRowUnselect(event);
    }

    enableDragSelection(event) {
        if (this.props.dragSelection && !this.dragSelectionHelper) {
            this.dragSelectionHelper = document.createElement('div');
            DomHandler.addClass(this.dragSelectionHelper, 'p-datatable-drag-selection-helper');

            this.initialDragPosition = { x: event.clientX, y: event.clientY };
            this.dragSelectionHelper.style.top = `${event.pageY}px`;
            this.dragSelectionHelper.style.left = `${event.pageX}px`;

            this.bindDragSelectionEvents();
        }
    }

    focusOnElement(event, isFocused) {
        const target = event.currentTarget;

        if (!this.allowCellSelection() && this.props.selectionAutoFocus) {
            if (this.isCheckboxSelectionModeInColumn()) {
                const checkbox = DomHandler.findSingle(target, 'td.p-selection-column .p-checkbox-box');
                checkbox && checkbox.focus();
            }
            else if (this.isRadioSelectionModeInColumn()) {
                const radio = DomHandler.findSingle(target, 'td.p-selection-column input[type="radio"]');
                radio && radio.focus();
            }
        }

        !isFocused && target && target.focus();
    }

    onRowClick(event) {
        if (this.allowCellSelection() || !this.allowSelection(event)) {
            return;
        }

        this.props.onRowClick && this.props.onRowClick(event);

        if (this.allowRowSelection()) {
            if (this.allowRangeSelection(event)) {
                this.onRangeSelection(event, 'row');
            }
            else {
                const toggleable = this.isRadioSelectionModeInColumn() || this.isCheckboxSelectionModeInColumn() || this.allowMetaKeySelection(event);
                this.anchorRowIndex = event.index;
                this.rangeRowIndex = event.index;
                this.anchorRowFirst = this.props.first;

                if (this.isSingleSelection()) {
                    this.onSingleSelection({ ...event, toggleable, type: 'row' });
                }
                else {
                    this.onMultipleSelection({ ...event, toggleable, type: 'row' });
                }
            }
        }
        else {
            this.focusOnElement(event.originalEvent);
        }

        this.rowTouched = false;
    }

    onRowDoubleClick(e) {
        const { originalEvent: event } = e;
        if (DomHandler.isClickable(event.target)) {
            return;
        }

        if (this.props.onRowDoubleClick) {
            this.props.onRowDoubleClick(e);
        }
    }

    onRowRightClick(event) {
        if (this.props.onContextMenu || this.props.onContextMenuSelectionChange) {
            DomHandler.clearSelection();

            if (this.props.onContextMenuSelectionChange) {
                this.props.onContextMenuSelectionChange({
                    originalEvent: event.originalEvent,
                    value: event.data
                });
            }

            if (this.props.onContextMenu) {
                this.props.onContextMenu({
                    originalEvent: event.originalEvent,
                    data: event.data
                });
            }

            event.originalEvent.preventDefault();
        }
    }

    onRowTouchEnd() {
        this.rowTouched = true;
    }

    onRowMouseDown(e) {
        DomHandler.clearSelection();

        const { originalEvent: event } = e;

        if (DomHandler.hasClass(event.target, 'p-datatable-reorderablerow-handle'))
            event.currentTarget.draggable = true;
        else
            event.currentTarget.draggable = false;

        if (this.allowRowDrag(e)) {
            this.enableDragSelection(event);
            this.anchorRowIndex = e.index;
            this.rangeRowIndex = e.index;
            this.anchorRowFirst = this.props.first;
        }
    }

    onRowMouseUp(event) {
        const isSameRow = event.index === this.anchorRowIndex;
        if (this.allowRowDrag(event) && !isSameRow) {
            this.onRangeSelection(event, 'row');
        }
    }

    onRowToggle(event) {
        let expandedRows;
        let dataKey = this.props.dataKey;
        let hasDataKey = this.props.groupRowsBy ? dataKey === this.props.groupRowsBy : !!dataKey;

        if (hasDataKey) {
            let dataKeyValue = String(ObjectUtils.resolveFieldData(event.data, dataKey));
            expandedRows = this.props.expandedRows ? { ...this.props.expandedRows } : {};

            if (expandedRows[dataKeyValue] != null) {
                delete expandedRows[dataKeyValue];
                if (this.props.onRowCollapse) {
                    this.props.onRowCollapse({ originalEvent: event, data: event.data });
                }
            }
            else {
                expandedRows[dataKeyValue] = true;
                if (this.props.onRowExpand) {
                    this.props.onRowExpand({ originalEvent: event, data: event.data });
                }
            }
        }
        else {
            let expandedRowIndex = this.findIndex(this.props.expandedRows, event.data);
            expandedRows = this.props.expandedRows ? [...this.props.expandedRows] : [];

            if (expandedRowIndex !== -1) {
                expandedRows = expandedRows.filter((val, i) => i !== expandedRowIndex);
                if (this.props.onRowCollapse) {
                    this.props.onRowCollapse({ originalEvent: event, data: event.data });
                }
            }
            else {
                expandedRows.push(event.data);
                if (this.props.onRowExpand) {
                    this.props.onRowExpand({ originalEvent: event, data: event.data });
                }
            }
        }

        if (this.props.onRowToggle) {
            this.props.onRowToggle({
                data: expandedRows
            });
        }
    }

    onRowDragStart(e) {
        const { originalEvent: event, index } = e;
        this.rowDragging = true;
        this.draggedRowIndex = index;
        event.dataTransfer.setData('text', 'b');    // For firefox
    }

    onRowDragOver(e) {
        const { originalEvent: event, index } = e;

        if (this.rowDragging && this.draggedRowIndex !== index) {
            let rowElement = event.currentTarget;
            let rowY = DomHandler.getOffset(rowElement).top + DomHandler.getWindowScrollTop();
            let pageY = event.pageY;
            let rowMidY = rowY + DomHandler.getOuterHeight(rowElement) / 2;
            let prevRowElement = rowElement.previousElementSibling;

            if (pageY < rowMidY) {
                DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');

                this.droppedRowIndex = index;
                if (prevRowElement)
                    DomHandler.addClass(prevRowElement, 'p-datatable-dragpoint-bottom');
                else
                    DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');
            }
            else {
                if (prevRowElement)
                    DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');
                else
                    DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');

                this.droppedRowIndex = index + 1;
                DomHandler.addClass(rowElement, 'p-datatable-dragpoint-bottom');
            }
        }

        event.preventDefault();
    }

    onRowDragLeave(e) {
        const { originalEvent: event } = e;
        const rowElement = event.currentTarget;
        const prevRowElement = rowElement.previousElementSibling;

        if (prevRowElement) {
            DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');
        }

        DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');
        DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-top');
    }

    onRowDragEnd(e) {
        const { originalEvent: event } = e;

        this.rowDragging = false;
        this.draggedRowIndex = null;
        this.droppedRowIndex = null;
        event.currentTarget.draggable = false;
    }

    onRowDrop(e) {
        const { originalEvent: event } = e;

        if (this.droppedRowIndex != null) {
            let dropIndex = (this.draggedRowIndex > this.droppedRowIndex) ? this.droppedRowIndex : (this.droppedRowIndex === 0) ? 0 : this.droppedRowIndex - 1;
            let val = [...this.props.value];
            ObjectUtils.reorderArray(val, this.draggedRowIndex, dropIndex);

            if (this.props.onRowReorder) {
                this.props.onRowReorder({
                    originalEvent: event,
                    value: val,
                    dragIndex: this.draggedRowIndex,
                    dropIndex: this.droppedRowIndex
                })
            }
        }

        //cleanup
        this.onRowDragLeave(e);
        this.onRowDragEnd(e);
        event.preventDefault();
    }

    onRadioChange(event) {
        this.onSingleSelection({ ...event, toggleable: true, type: 'radio' });
    }

    onCheckboxChange(event) {
        this.onMultipleSelection({ ...event, toggleable: true, type: 'checkbox' });
    }

    onDragSelectionMouseMove(event) {
        const { x, y } = this.initialDragPosition;
        const dx = event.clientX - x;
        const dy = event.clientY - y;

        if (dy < 0)
            this.dragSelectionHelper.style.top = `${event.pageY + 5}px`;
        if (dx < 0)
            this.dragSelectionHelper.style.left = `${event.pageX + 5}px`;

        this.dragSelectionHelper.style.height = `${Math.abs(dy)}px`;
        this.dragSelectionHelper.style.width = `${Math.abs(dx)}px`;

        event.preventDefault();
    }

    onDragSelectionMouseUp() {
        if (this.dragSelectionHelper) {
            this.dragSelectionHelper.remove();
            this.dragSelectionHelper = null;
        }

        document.removeEventListener('mousemove', this.onDragSelectionMouseMove);
        document.removeEventListener('mouseup', this.onDragSelectionMouseUp);
    }

    onCellClick(event) {
        if (!this.allowSelection(event)) {
            return;
        }

        this.props.onCellClick && this.props.onCellClick(event);

        if (this.allowCellSelection()) {
            if (this.allowRangeSelection(event)) {
                this.onRangeSelection(event, 'cell');
            }
            else {
                let toggleable = this.allowMetaKeySelection(event);
                let { originalEvent, ...data } = event;
                this.anchorRowIndex = event.rowIndex;
                this.rangeRowIndex = event.rowIndex;
                this.anchorRowFirst = this.props.first;
                this.anchorCellIndex = event.cellIndex;

                if (this.isSingleSelection()) {
                    this.onSingleSelection({ originalEvent, data, toggleable, type: 'cell' });
                }
                else {
                    this.onMultipleSelection({ originalEvent, data, toggleable, type: 'cell' });
                }
            }
        }

        this.rowTouched = false;
    }

    onCellMouseDown(event) {
        if (this.allowCellDrag(event)) {
            this.enableDragSelection(event.originalEvent);
            this.anchorRowIndex = event.rowIndex;
            this.rangeRowIndex = event.rowIndex;
            this.anchorRowFirst = this.props.first;
            this.anchorCellIndex = event.cellIndex;
        }
    }

    onCellMouseUp(event) {
        const isSameCell = event.rowIndex === this.anchorRowIndex && event.cellIndex === this.anchorCellIndex;
        if (this.allowCellDrag(event) && !isSameCell) {
            this.onRangeSelection(event, 'cell');
        }
    }

    bindDragSelectionEvents() {
        document.addEventListener('mousemove', this.onDragSelectionMouseMove);
        document.addEventListener('mouseup', this.onDragSelectionMouseUp);
        document.body.appendChild(this.dragSelectionHelper);
    }

    unbindDragSelectionEvents() {
        this.onDragSelectionMouseUp();
    }

    componentDidMount() {
        if (this.props.frozenRow) {
            this.updateFrozenRowStickyPosition();
        }

        if (this.props.scrollable && this.props.rowGroupMode === 'subheader') {
            this.updateFrozenRowGroupHeaderStickyPosition();
        }

        if (!this.props.isVirtualScrollerDisabled && this.getVirtualScrollerOption('vertical')) {
            this.updateVirtualScrollerPosition();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.frozenRow) {
            this.updateFrozenRowStickyPosition();
        }

        if (this.props.scrollable && this.props.rowGroupMode === 'subheader') {
            this.updateFrozenRowGroupHeaderStickyPosition();
        }

        if (!this.props.isVirtualScrollerDisabled && this.getVirtualScrollerOption('vertical') && this.getVirtualScrollerOption('itemSize', prevProps.virtualScrollerOptions) !== this.getVirtualScrollerOption('itemSize')) {
            this.updateVirtualScrollerPosition();
        }
    }

    componentWillUnmount() {
        if (this.props.dragSelection) {
            this.unbindDragSelectionEvents();
        }
    }

    renderEmptyContent() {
        if (!this.props.loading) {
            const colSpan = this.getColumnsLength();
            const content = ObjectUtils.getJSXElement(this.props.emptyMessage, { props: this.props, frozen: this.props.frozenRow }) || localeOption('emptyMessage');

            return (
                <tr className="p-datatable-emptymessage" role="row">
                    <td colSpan={colSpan} role="cell">
                        {content}
                    </td>
                </tr>
            )
        }

        return null;
    }

    renderGroupHeader(rowData, index, expanded, isSubheaderGrouping, colSpan) {
        if (isSubheaderGrouping && this.shouldRenderRowGroupHeader(this.props.value, rowData, index)) {
            const style = this.rowGroupHeaderStyle();
            const toggler = this.props.expandableRowGroups && (
                <RowTogglerButton onClick={this.onRowToggle} rowData={rowData} expanded={expanded} expandedRowIcon={this.props.expandedRowIcon} collapsedRowIcon={this.props.collapsedRowIcon} />
            );
            const content = ObjectUtils.getJSXElement(this.props.rowGroupHeaderTemplate, rowData, { index, props: this.props.tableProps });

            return (
                <tr className="p-rowgroup-header" style={style} role="row">
                    <td colSpan={colSpan}>
                        {toggler}
                        <span className="p-rowgroup-header-name">
                            {content}
                        </span>
                    </td>
                </tr>
            )
        }

        return null;
    }

    renderRow(rowData, index, expanded) {
        if (!this.props.expandableRowGroups || expanded) {
            const selected = this.isSelectionEnabled() ? this.isSelected(rowData) : false;
            const contextMenuSelected = this.isContextMenuSelected(rowData);
            const allowRowSelection = this.allowRowSelection();
            const allowCellSelection = this.allowCellSelection();
            const editing = this.isRowEditing(rowData);

            return (
                <BodyRow tableProps={this.props.tableProps} tableSelector={this.props.tableSelector} value={this.props.value} columns={this.props.columns} rowData={rowData} index={index} selected={selected} contextMenuSelected={contextMenuSelected}
                    onRowClick={this.onRowClick} onRowDoubleClick={this.onRowDoubleClick} onRowRightClick={this.onRowRightClick} tabIndex={this.props.tabIndex}
                    onRowTouchEnd={this.onRowTouchEnd} onRowMouseDown={this.onRowMouseDown} onRowMouseUp={this.onRowMouseUp} onRowToggle={this.onRowToggle}
                    onRowDragStart={this.onRowDragStart} onRowDragOver={this.onRowDragOver} onRowDragLeave={this.onRowDragLeave} onRowDragEnd={this.onRowDragEnd} onRowDrop={this.onRowDrop}
                    onRadioChange={this.onRadioChange} onCheckboxChange={this.onCheckboxChange} onCellClick={this.onCellClick} onCellMouseDown={this.onCellMouseDown} onCellMouseUp={this.onCellMouseUp}
                    editing={editing} editingRows={this.props.editingRows} editingMeta={this.props.editingMeta} editMode={this.props.editMode} onRowEditChange={this.props.onRowEditChange} onEditingMetaChange={this.props.onEditingMetaChange}
                    groupRowsBy={this.props.groupRowsBy} compareSelectionBy={this.props.compareSelectionBy} dataKey={this.props.dataKey} rowGroupMode={this.props.rowGroupMode}
                    onRowEditInit={this.props.onRowEditInit} rowEditValidator={this.props.rowEditValidator} onRowEditSave={this.props.onRowEditSave} onRowEditComplete={this.props.onRowEditComplete} onRowEditCancel={this.props.onRowEditCancel}
                    selection={this.props.selection} allowRowSelection={allowRowSelection} allowCellSelection={allowCellSelection} selectOnEdit={this.props.selectOnEdit} selectionMode={this.props.selectionMode} selectionModeInColumn={this.props.selectionModeInColumn}
                    cellClassName={this.props.cellClassName} responsiveLayout={this.props.responsiveLayout} frozenRow={this.props.frozenRow}
                    showSelectionElement={this.props.showSelectionElement} showRowReorderElement={this.props.showRowReorderElement}
                    expanded={expanded} expandedRowIcon={this.props.expandedRowIcon} collapsedRowIcon={this.props.collapsedRowIcon} rowClassName={this.props.rowClassName}
                    virtualScrollerOptions={this.props.virtualScrollerOptions} />
            )
        }
    }

    renderExpansion(rowData, index, expanded, isSubheaderGrouping, colSpan) {
        if (expanded && !(isSubheaderGrouping && this.props.expandableRowGroups)) {
            const content = ObjectUtils.getJSXElement(this.props.rowExpansionTemplate, rowData, { index });
            const id = `${this.props.tableSelector}_content_${index}_expanded`;

            return (
                <tr id={id} className="p-datatable-row-expansion" role="row">
                    <td role="cell" colSpan={colSpan}>
                        {content}
                    </td>
                </tr>
            )
        }

        return null;
    }

    renderGroupFooter(rowData, index, expanded, isSubheaderGrouping, colSpan) {
        if (isSubheaderGrouping && this.shouldRenderRowGroupFooter(this.props.value, rowData, index, expanded)) {
            const content = ObjectUtils.getJSXElement(this.props.rowGroupFooterTemplate, rowData, { index, colSpan, props: this.props.tableProps });

            return (
                <tr className="p-rowgroup-footer" role="row">
                    {content}
                </tr>
            )
        }

        return null;
    }

    renderContent() {
        return (
            this.props.value.map((rowData, i) => {
                const index = this.getVirtualScrollerOption('getItemOptions') ? this.getVirtualScrollerOption('getItemOptions')(i).index : this.props.first + i;
                const key = this.getRowKey(rowData, index);
                const expanded = this.isRowExpanded(rowData);
                const isSubheaderGrouping = this.isSubheaderGrouping();
                const colSpan = this.getColumnsLength();

                const groupHeader = this.renderGroupHeader(rowData, index, expanded, isSubheaderGrouping, colSpan);
                const row = this.renderRow(rowData, index, expanded);
                const expansion = this.renderExpansion(rowData, index, expanded, isSubheaderGrouping, colSpan);
                const groupFooter = this.renderGroupFooter(rowData, index, expanded, isSubheaderGrouping, colSpan);

                return (
                    <React.Fragment key={key}>
                        {groupHeader}
                        {row}
                        {expansion}
                        {groupFooter}
                    </React.Fragment>
                )
            })
        )
    }

    render() {
        const className = classNames('p-datatable-tbody', this.props.className);
        const content = this.props.empty ? this.renderEmptyContent() : this.renderContent();

        return (
            <tbody ref={this.ref} className={className}>
                {content}
            </tbody>
        )
    }
}
