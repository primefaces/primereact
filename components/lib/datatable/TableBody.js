import * as React from 'react';
import { localeOption } from '../api/Api';
import { ColumnBase } from '../column/ColumnBase';
import { useMergeProps, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { DomHandler, ObjectUtils } from '../utils/Utils';
import { BodyRow } from './BodyRow';
import { RowTogglerButton } from './RowTogglerButton';

export const TableBody = React.memo(
    React.forwardRef((props, ref) => {
        const mergeProps = useMergeProps();
        const { ptm, ptmo, cx, isUnsyled } = props.ptCallbacks;
        const [rowGroupHeaderStyleObjectState, setRowGroupHeaderStyleObjectState] = React.useState({});
        const getColumnProps = (column) => ColumnBase.getCProps(column);

        const getColumnPTOptions = (key) => {
            const cProps = getColumnProps(props.column);
            const columnMetaData = {
                props: cProps,
                parent: props.metaData,
                hostName: props.hostName,
                state: {
                    rowGroupHeaderStyleObject: rowGroupHeaderStyleObjectState
                }
            };

            return mergeProps(ptm(`column.${key}`, { column: columnMetaData }), ptm(`column.${key}`, columnMetaData), ptmo(cProps, key, columnMetaData));
        };

        const elementRef = React.useRef(null);
        const refCallback = React.useCallback(
            (el) => {
                elementRef.current = el;
                props.virtualScrollerContentRef && props.virtualScrollerContentRef(el);
            },
            [props]
        );
        const dragSelectionHelper = React.useRef(null);
        const initialDragPosition = React.useRef(null);
        const anchorRowIndex = React.useRef(null);
        const anchorCellIndex = React.useRef(null);
        const rangeRowIndex = React.useRef(null);
        const anchorRowFirst = React.useRef(null);
        const rowTouched = React.useRef(false);
        const rowDragging = React.useRef(false);
        const draggedRowIndex = React.useRef(null);
        const droppedRowIndex = React.useRef(null);
        const isSubheaderGrouping = props.rowGroupMode && props.rowGroupMode === 'subheader';
        const isRadioSelectionMode = props.selectionMode === 'radiobutton';
        const isCheckboxSelectionMode = props.selectionMode === 'checkbox';
        const isRadioSelectionModeInColumn = props.selectionModeInColumn === 'single';
        const isCheckboxSelectionModeInColumn = props.selectionModeInColumn === 'multiple';

        const equals = (data1, data2) => {
            if (allowCellSelection()) return (data1.rowIndex === data2.rowIndex || data1.rowData === data2.rowData) && (data1.field === data2.field || data1.cellIndex === data2.cellIndex);
            else return props.compareSelectionBy === 'equals' ? data1 === data2 : ObjectUtils.equals(data1, data2, props.dataKey);
        };

        const isSelectionEnabled = () => {
            return props.selectionMode || props.selectionModeInColumn !== null || (props.columns && props.columns.some((col) => col && !!getColumnProp(col, 'selectionMode')));
        };

        const isSingleSelection = () => {
            return (props.selectionMode === 'single' && !isCheckboxSelectionModeInColumn) || (!isRadioSelectionMode && isRadioSelectionModeInColumn);
        };

        const isMultipleSelection = () => {
            return (props.selectionMode === 'multiple' && !isRadioSelectionModeInColumn) || isCheckboxSelectionModeInColumn;
        };

        const isRadioOnlySelection = () => {
            return isRadioSelectionMode && isRadioSelectionModeInColumn;
        };

        const isCheckboxOnlySelection = () => {
            return isCheckboxSelectionMode && isCheckboxSelectionModeInColumn;
        };

        const isSelected = (rowData) => {
            if (rowData && props.selection) {
                return props.selection instanceof Array ? findIndex(props.selection, rowData) > -1 : equals(rowData, props.selection);
            }

            return false;
        };

        const isContextMenuSelected = (rowData) => {
            if (rowData && props.contextMenuSelection) {
                return equals(rowData, props.contextMenuSelection);
            }

            return false;
        };

        const isSelectable = (options) => {
            return props.isDataSelectable ? props.isDataSelectable(options) : true;
        };

        const isRowExpanded = (rowData) => {
            if (rowData && props.expandedRows) {
                if (isSubheaderGrouping && props.expandableRowGroups) {
                    return isRowGroupExpanded(rowData);
                } else {
                    if (props.dataKey) {
                        const rowId = ObjectUtils.resolveFieldData(rowData, props.dataKey);
                        let expanded = false;

                        if (props.expandedRows) {
                            if (Array.isArray(props.expandedRows)) {
                                expanded = props.expandedRows.some((row) => ObjectUtils.resolveFieldData(row, props.dataKey) === rowId);
                            } else {
                                expanded = props.expandedRows[rowId] !== undefined;
                            }
                        }

                        return expanded;
                    } else {
                        return findIndex(props.expandedRows, rowData) !== -1;
                    }
                }
            }

            return false;
        };

        const isRowGroupExpanded = (rowData) => {
            if (props.dataKey === props.groupRowsBy) return Object.keys(props.expandedRows).some((data) => ObjectUtils.equals(data, ObjectUtils.resolveFieldData(rowData, props.dataKey)));
            else return props.expandedRows.some((data) => ObjectUtils.equals(data, rowData, props.groupRowsBy));
        };

        const isRowEditing = (rowData) => {
            if (props.editMode === 'row' && rowData && props.editingRows) {
                if (props.dataKey) return props.editingRows ? props.editingRows[ObjectUtils.resolveFieldData(rowData, props.dataKey)] !== undefined : false;
                else return findIndex(props.editingRows, rowData) !== -1;
            }

            return false;
        };

        const allowDrag = (event) => {
            return props.dragSelection && isMultipleSelection() && !event.originalEvent.shiftKey;
        };

        const allowRowDrag = (event) => {
            return (!allowCellSelection() && allowDrag(event)) || props.reorderableRows;
        };

        const allowCellDrag = (event) => {
            return allowCellSelection() && allowDrag(event);
        };

        const allowSelection = (event) => {
            return !DomHandler.isClickable(event.originalEvent.target);
        };

        const allowMetaKeySelection = (event) => {
            return !rowTouched.current && (!props.metaKeySelection || (props.metaKeySelection && (event.originalEvent.metaKey || event.originalEvent.ctrlKey)));
        };

        const allowRangeSelection = (event) => {
            return isMultipleSelection() && event.originalEvent.shiftKey && anchorRowIndex.current !== null;
        };

        const allowRowSelection = () => {
            return (props.selectionMode || props.selectionModeInColumn) && !isRadioOnlySelection() && !isCheckboxOnlySelection();
        };

        const allowCellSelection = () => {
            return props.cellSelection && !isRadioSelectionModeInColumn && !isCheckboxSelectionModeInColumn;
        };

        const getColumnsLength = () => {
            return props.columns ? props.columns.length : 0;
        };

        const getColumnProp = (column, name) => {
            return ColumnBase.getCProp(column, name);
        };

        const getVirtualScrollerOption = (option, options) => {
            options = options || props.virtualScrollerOptions;

            return options ? options[option] : null;
        };

        const findIndex = (collection, rowData) => {
            return (collection || []).findIndex((data) => equals(rowData, data));
        };

        const rowGroupHeaderStyle = () => {
            if (props.scrollable) {
                return { top: rowGroupHeaderStyleObjectState['top'] };
            }

            return null;
        };

        const getRowKey = (rowData, index) => {
            return props.dataKey ? ObjectUtils.resolveFieldData(rowData, props.dataKey) : index;
        };

        const shouldRenderRowGroupHeader = (value, rowData, i) => {
            const currentRowFieldData = ObjectUtils.resolveFieldData(rowData, props.groupRowsBy);
            const prevRowData = value[i - 1];

            if (prevRowData) {
                const previousRowFieldData = ObjectUtils.resolveFieldData(prevRowData, props.groupRowsBy);

                return !ObjectUtils.deepEquals(currentRowFieldData, previousRowFieldData);
            } else {
                return true;
            }
        };

        const shouldRenderRowGroupFooter = (value, rowData, i, expanded) => {
            if (props.expandableRowGroups && !expanded) {
                return false;
            } else {
                const currentRowFieldData = ObjectUtils.resolveFieldData(rowData, props.groupRowsBy);
                const nextRowData = value[i + 1];

                if (nextRowData) {
                    const nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, props.groupRowsBy);

                    return !ObjectUtils.deepEquals(currentRowFieldData, nextRowFieldData);
                } else {
                    return true;
                }
            }
        };

        const updateFrozenRowStickyPosition = () => {
            elementRef.current.style.top = DomHandler.getOuterHeight(elementRef.current.previousElementSibling) + 'px';
        };

        const updateFrozenRowGroupHeaderStickyPosition = () => {
            const tableHeaderHeight = DomHandler.getOuterHeight(elementRef.current.previousElementSibling);
            const top = tableHeaderHeight + 'px';

            if (rowGroupHeaderStyleObjectState.top !== top) {
                setRowGroupHeaderStyleObjectState({ top });
            }
        };

        const onSingleSelection = ({ originalEvent, data, index, toggleable, type }) => {
            if (!isSelectable({ data, index })) {
                return;
            }

            let selected = isSelected(data);
            let selection = props.selection;

            if (selected) {
                if (toggleable) {
                    selection = null;
                    onUnselect({ originalEvent, data, type });
                }
            } else {
                selection = data;
                onSelect({ originalEvent, data, type });
            }

            focusOnElement(originalEvent, true);

            if (props.onSelectionChange && selection !== props.selection) {
                props.onSelectionChange({
                    originalEvent,
                    value: selection,
                    type
                });
            }
        };

        const onMultipleSelection = ({ originalEvent, data, index, toggleable, type }) => {
            if (!isSelectable({ data, index })) {
                return;
            }

            let selected = isSelected(data);
            let selection = props.selection || [];

            if (selected) {
                if (toggleable) {
                    let selectionIndex = findIndex(selection, data);

                    selection = props.selection.filter((val, i) => i !== selectionIndex);
                    onUnselect({ originalEvent, data, type });
                } else if (selection.length) {
                    props.selection.forEach((d) => onUnselect({ originalEvent, data: d, type }));
                    selection = [data];
                    onSelect({ originalEvent, data, type });
                }
            } else {
                selection = ObjectUtils.isObject(selection) ? [selection] : selection;
                selection = toggleable && isMultipleSelection() ? [...selection, data] : [data];
                onSelect({ originalEvent, data, type });
            }

            focusOnElement(originalEvent, true);

            if (props.onSelectionChange && selection !== props.selection) {
                props.onSelectionChange({
                    originalEvent,
                    value: selection,
                    type
                });
            }
        };

        const onRangeSelection = (event, type) => {
            DomHandler.clearSelection();
            rangeRowIndex.current = allowCellSelection() ? event.rowIndex : event.index;
            const selection = selectRange(event);

            if (props.onSelectionChange && selection !== props.selection) {
                props.onSelectionChange({
                    originalEvent: event.originalEvent,
                    value: selection,
                    type
                });
            }

            anchorRowIndex.current = rangeRowIndex.current;
            anchorCellIndex.current = event.cellIndex;

            focusOnElement(event.originalEvent, false);
        };

        const selectRange = (event) => {
            let rangeStart, rangeEnd;

            if (rangeRowIndex.current > anchorRowIndex.current) {
                rangeStart = anchorRowIndex.current;
                rangeEnd = rangeRowIndex.current;
            } else if (rangeRowIndex.current < anchorRowIndex.current) {
                rangeStart = rangeRowIndex.current;
                rangeEnd = anchorRowIndex.current;
            } else {
                rangeStart = rangeEnd = rangeRowIndex.current;
            }

            if (props.paginator) {
                rangeStart = Math.max(rangeStart - props.first, 0);
                rangeEnd -= props.first;
            }

            return allowCellSelection() ? selectRangeOnCell(event, rangeStart, rangeEnd) : selectRangeOnRow(event, rangeStart, rangeEnd);
        };

        const selectRangeOnRow = (event, rowRangeStart, rowRangeEnd) => {
            const value = props.value;
            let selection = [];

            for (let i = rowRangeStart; i <= rowRangeEnd; i++) {
                let rangeRowData = value[i];

                if (!isSelectable({ data: rangeRowData, index: i })) {
                    continue;
                }

                selection.push(rangeRowData);

                onSelect({ originalEvent: event.originalEvent, data: rangeRowData, type: 'row' });
            }

            return selection;
        };

        const selectRangeOnCell = (event, rowRangeStart, rowRangeEnd) => {
            let cellRangeStart,
                cellRangeEnd,
                cellIndex = event.cellIndex;

            if (cellIndex > anchorCellIndex.current) {
                cellRangeStart = anchorCellIndex.current;
                cellRangeEnd = cellIndex;
            } else if (cellIndex < anchorCellIndex.current) {
                cellRangeStart = cellIndex;
                cellRangeEnd = anchorCellIndex.current;
            } else {
                cellRangeStart = cellRangeEnd = cellIndex;
            }

            const value = props.value;
            let selection = [];

            for (let i = rowRangeStart; i <= rowRangeEnd; i++) {
                let rowData = value[i];
                let columns = props.columns;
                let rowIndex = props.paginator ? i + props.first : i;

                for (let j = cellRangeStart; j <= cellRangeEnd; j++) {
                    let field = getColumnProp(columns[j], 'field');
                    let value = ObjectUtils.resolveFieldData(rowData, field);
                    let rangeRowData = {
                        value,
                        field,
                        rowData,
                        rowIndex,
                        cellIndex: j,
                        selected: true
                    };

                    if (!isSelectable({ data: rangeRowData, index: i })) {
                        continue;
                    }

                    selection.push(rangeRowData);

                    onSelect({ originalEvent: event.originalEvent, data: rangeRowData, type: 'cell' });
                }
            }

            return selection;
        };

        const onSelect = (event) => {
            if (allowCellSelection()) props.onCellSelect && props.onCellSelect({ originalEvent: event.originalEvent, ...event.data, type: event.type });
            else props.onRowSelect && props.onRowSelect(event);
        };

        const onUnselect = (event) => {
            if (allowCellSelection()) props.onCellUnselect && props.onCellUnselect({ originalEvent: event.originalEvent, ...event.data, type: event.type });
            else props.onRowUnselect && props.onRowUnselect(event);
        };

        const enableDragSelection = (event) => {
            if (props.dragSelection && !dragSelectionHelper.current) {
                dragSelectionHelper.current = document.createElement('div');
                dragSelectionHelper.current.setAttribute('p-datatable-drag-selection-helper', 'true');
                !isUnsyled && DomHandler.addClass(dragSelectionHelper.current, 'p-datatable-drag-selection-helper');

                initialDragPosition.current = { x: event.clientX, y: event.clientY };
                dragSelectionHelper.current.style.top = `${event.pageY}px`;
                dragSelectionHelper.current.style.left = `${event.pageX}px`;

                bindDragSelectionEvents();
            }
        };

        const focusOnElement = (event, isFocused) => {
            const target = event.currentTarget;

            if (!allowCellSelection() && props.selectionAutoFocus) {
                if (isCheckboxSelectionModeInColumn) {
                    const checkbox = DomHandler.findSingle(target, 'td[data-p-selection-column="true"] [data-pc-section="checkbox"]');

                    checkbox && checkbox.focus();
                } else if (isRadioSelectionModeInColumn) {
                    const radio = DomHandler.findSingle(target, 'td[data-p-selection-column="true"] input[type="radio"]');

                    radio && radio.focus();
                }
            }

            !isFocused && target && target.focus();
        };

        const changeTabIndex = (event, type) => {
            const target = event.currentTarget;
            const isSelectable = DomHandler.getAttribute(target, type === 'cell' ? 'data-p-selectable-cell' : 'data-p-selectable-row') === true;

            if (isSelectable) {
                const selector = type === 'cell' ? 'tr > td' : 'tr';
                const tabbableEl = DomHandler.findSingle(elementRef.current, `${selector}[tabindex="${props.tabIndex}"]`);

                if (tabbableEl && target) {
                    tabbableEl.tabIndex = -1;
                    target.tabIndex = props.tabIndex;
                }
            }
        };

        const onRowClick = (event) => {
            if (event.defaultPrevented || (event.originalEvent && event.originalEvent.defaultPrevented) || allowCellSelection() || !allowSelection(event)) {
                return;
            }

            props.onRowClick && props.onRowClick(event);

            if (allowRowSelection()) {
                if (allowRangeSelection(event)) {
                    onRangeSelection(event, 'row');
                } else {
                    const toggleable = isRadioSelectionModeInColumn || isCheckboxSelectionModeInColumn || allowMetaKeySelection(event);

                    anchorRowIndex.current = event.index;
                    rangeRowIndex.current = event.index;
                    anchorRowFirst.current = props.first;

                    if (isSingleSelection()) {
                        onSingleSelection({ ...event, toggleable, type: 'row' });
                    } else {
                        onMultipleSelection({ ...event, toggleable, type: 'row' });
                    }
                }

                changeTabIndex(event.originalEvent, 'row');
            } else {
                focusOnElement(event.originalEvent);
            }

            rowTouched.current = false;
        };

        const onRowDoubleClick = (e) => {
            const { originalEvent: event } = e;

            if (DomHandler.isClickable(event.target)) {
                return;
            }

            if (props.onRowDoubleClick) {
                props.onRowDoubleClick(e);
            }
        };

        const onRowPointerDown = (e) => {
            const { originalEvent: event } = e;

            if (DomHandler.isClickable(event.target)) {
                return;
            }

            if (props.onRowPointerDown) {
                props.onRowPointerDown(e);
            }
        };

        const onRowPointerUp = (e) => {
            const { originalEvent: event } = e;

            if (DomHandler.isClickable(event.target)) {
                return;
            }

            if (props.onRowPointerUp) {
                props.onRowPointerUp(e);
            }
        };

        const onRowRightClick = (event) => {
            if (props.onContextMenu || props.onContextMenuSelectionChange) {
                const hasSelection = ObjectUtils.isNotEmpty(props.selection);
                const data = hasSelection ? props.selection : event.data;

                if (hasSelection) DomHandler.clearSelection();

                if (props.onContextMenuSelectionChange) {
                    props.onContextMenuSelectionChange({
                        originalEvent: event.originalEvent,
                        value: data
                    });
                }

                if (props.onContextMenu) {
                    props.onContextMenu({
                        originalEvent: event.originalEvent,
                        data
                    });
                }

                event.originalEvent.preventDefault();
            }
        };

        const onRowMouseEnter = (event) => {
            props.onRowMouseEnter && props.onRowMouseEnter(event);
        };

        const onRowMouseLeave = (event) => {
            props.onRowMouseLeave && props.onRowMouseLeave(event);
        };

        const onRowTouchEnd = () => {
            rowTouched.current = true;
        };

        const onRowMouseDown = (e) => {
            const { originalEvent: event } = e;

            if (!isUnsyled && DomHandler.hasClass(event.target, 'p-datatable-reorderablerow-handle')) event.currentTarget.draggable = true;
            else event.currentTarget.draggable = false;

            if (allowRowDrag(e)) {
                enableDragSelection(event, 'row');
                anchorRowIndex.current = e.index;
                rangeRowIndex.current = e.index;
                anchorRowFirst.current = props.first;
            }
        };

        const onRowMouseUp = (event) => {
            const isSameRow = event.index === anchorRowIndex.current;

            if (allowRowDrag(event) && !isSameRow) {
                onRangeSelection(event, 'row');
            }
        };

        const onRowToggle = (event) => {
            let expandedRows;
            let dataKey = props.dataKey;
            let hasDataKey = props.groupRowsBy ? dataKey === props.groupRowsBy : !!dataKey;

            if (hasDataKey) {
                let dataKeyValue = String(ObjectUtils.resolveFieldData(event.data, dataKey));

                expandedRows = props.expandedRows ? { ...props.expandedRows } : {};

                if (expandedRows[dataKeyValue] != null) {
                    delete expandedRows[dataKeyValue];

                    if (props.onRowCollapse) {
                        props.onRowCollapse({ originalEvent: event, data: event.data });
                    }
                } else {
                    expandedRows[dataKeyValue] = true;

                    if (props.onRowExpand) {
                        props.onRowExpand({ originalEvent: event, data: event.data });
                    }
                }
            } else {
                let expandedRowIndex = findIndex(props.expandedRows, event.data);

                expandedRows = props.expandedRows ? [...props.expandedRows] : [];

                if (expandedRowIndex !== -1) {
                    expandedRows = expandedRows.filter((_, i) => i !== expandedRowIndex);

                    if (props.onRowCollapse) {
                        props.onRowCollapse({ originalEvent: event, data: event.data });
                    }
                } else {
                    expandedRows.push(event.data);

                    if (props.onRowExpand) {
                        props.onRowExpand({ originalEvent: event, data: event.data });
                    }
                }
            }

            if (props.onRowToggle) {
                props.onRowToggle({
                    data: expandedRows
                });
            }
        };

        const onRowDragStart = (e) => {
            const { originalEvent: event, index } = e;

            if (allowRowDrag(event)) {
                rowDragging.current = true;
                draggedRowIndex.current = index;
                event.dataTransfer.setData('text', 'b'); // For firefox
            }
        };

        const onRowDragOver = (e) => {
            const { originalEvent: event, index } = e;

            if (rowDragging.current && draggedRowIndex.current !== index) {
                const rowElement = event.currentTarget;
                const rowY = DomHandler.getOffset(rowElement).top + DomHandler.getWindowScrollTop();
                const pageY = event.pageY + window.scrollY;
                const rowMidY = rowY + DomHandler.getOuterHeight(rowElement) / 2;
                const prevRowElement = rowElement.previousElementSibling;

                if (pageY < rowMidY) {
                    rowElement.setAttribute('data-p-datatable-dragpoint-bottom', 'false');
                    !isUnsyled && DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');

                    droppedRowIndex.current = index;

                    if (prevRowElement) {
                        prevRowElement.setAttribute('data-p-datatable-dragpoint-bottom', 'true');
                        !isUnsyled && DomHandler.addClass(prevRowElement, 'p-datatable-dragpoint-bottom');
                    } else {
                        rowElement.setAttribute('data-p-datatable-dragpoint-top', 'true');
                        !isUnsyled && DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');
                    }
                } else {
                    if (prevRowElement) {
                        prevRowElement.setAttribute('data-p-datatable-dragpoint-bottom', 'false');
                        !isUnsyled && DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');
                    } else {
                        rowElement.setAttribute('data-p-datatable-dragpoint-top', 'true');
                        !isUnsyled && DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');
                    }

                    droppedRowIndex.current = index + 1;
                    rowElement.setAttribute('data-p-datatable-dragpoint-bottom', 'true');
                    !isUnsyled && DomHandler.addClass(rowElement, 'p-datatable-dragpoint-bottom');
                }
            }

            event.preventDefault();
        };

        const onRowDragLeave = (e) => {
            const { originalEvent: event } = e;
            const rowElement = event.currentTarget;
            const prevRowElement = rowElement.previousElementSibling;

            if (prevRowElement) {
                prevRowElement.setAttribute('data-p-datatable-dragpoint-bottom', 'false');
                !isUnsyled && DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');
            }

            rowElement.setAttribute('data-p-datatable-dragpoint-bottom', 'false');
            !isUnsyled && DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');
            rowElement.setAttribute('data-p-datatable-dragpoint-top', 'false');
            !isUnsyled && DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-top');
        };

        const onRowDragEnd = (e) => {
            const { originalEvent: event } = e;

            rowDragging.current = false;
            draggedRowIndex.current = null;
            droppedRowIndex.current = null;
            event.currentTarget.draggable = false;
        };

        const onRowDrop = (e) => {
            const { originalEvent: event } = e;

            if (droppedRowIndex.current != null) {
                let dropIndex = draggedRowIndex.current > droppedRowIndex.current ? droppedRowIndex.current : droppedRowIndex.current === 0 ? 0 : droppedRowIndex.current - 1;
                let val = [...props.tableProps.value];

                ObjectUtils.reorderArray(val, draggedRowIndex.current, dropIndex);

                if (props.onRowReorder) {
                    props.onRowReorder({
                        originalEvent: event,
                        value: val,
                        dragIndex: draggedRowIndex.current,
                        dropIndex: dropIndex
                    });
                }
            }

            //cleanup
            onRowDragLeave(e);
            onRowDragEnd(e);
            event.preventDefault();
        };

        const onRadioChange = (event) => {
            onSingleSelection({ ...event, toggleable: true, type: 'radio' });
        };

        const onCheckboxChange = (event) => {
            onMultipleSelection({ ...event, toggleable: true, type: 'checkbox' });
        };

        const onDragSelectionMouseMove = (event) => {
            const { x, y } = initialDragPosition.current;
            const dx = event.clientX - x;
            const dy = event.clientY - y;

            if (dy < 0) dragSelectionHelper.current.style.top = `${event.pageY + 5}px`;
            if (dx < 0) dragSelectionHelper.current.style.left = `${event.pageX + 5}px`;

            dragSelectionHelper.current.style.height = `${Math.abs(dy)}px`;
            dragSelectionHelper.current.style.width = `${Math.abs(dx)}px`;

            event.preventDefault();
        };

        const onDragSelectionMouseUp = () => {
            if (dragSelectionHelper.current) {
                dragSelectionHelper.current.remove();
                dragSelectionHelper.current = null;
            }

            document.removeEventListener('mousemove', onDragSelectionMouseMove);
            document.removeEventListener('mouseup', onDragSelectionMouseUp);
        };

        const onCellClick = (event) => {
            if (!allowSelection(event)) {
                return;
            }

            props.onCellClick && props.onCellClick(event);

            if (allowCellSelection()) {
                if (allowRangeSelection(event)) {
                    onRangeSelection(event, 'cell');
                } else {
                    let toggleable = allowMetaKeySelection(event);
                    let { originalEvent, ...data } = event;

                    anchorRowIndex.current = event.rowIndex;
                    rangeRowIndex.current = event.rowIndex;
                    anchorRowFirst.current = props.first;
                    anchorCellIndex.current = event.cellIndex;

                    if (isSingleSelection()) {
                        onSingleSelection({ originalEvent, data, index: event.rowIndex, toggleable, type: 'cell' });
                    } else {
                        onMultipleSelection({ originalEvent, data, index: event.rowIndex, toggleable, type: 'cell' });
                    }
                }

                changeTabIndex(event.originalEvent, 'cell');
            }

            rowTouched.current = false;
        };

        const onCellMouseDown = (event) => {
            if (allowCellDrag(event)) {
                enableDragSelection(event.originalEvent);
                anchorRowIndex.current = event.rowIndex;
                rangeRowIndex.current = event.rowIndex;
                anchorRowFirst.current = props.first;
                anchorCellIndex.current = event.cellIndex;
            }
        };

        const onCellMouseUp = (event) => {
            const isSameCell = event.rowIndex === anchorRowIndex.current && event.cellIndex === anchorCellIndex.current;

            if (allowCellDrag(event) && !isSameCell) {
                onRangeSelection(event, 'cell');
            }
        };

        const bindDragSelectionEvents = () => {
            document.addEventListener('mousemove', onDragSelectionMouseMove);
            document.addEventListener('mouseup', onDragSelectionMouseUp);
            document.body.appendChild(dragSelectionHelper.current);
        };

        const unbindDragSelectionEvents = () => {
            onDragSelectionMouseUp();
        };

        React.useEffect(() => {
            if (props.frozenRow) {
                updateFrozenRowStickyPosition();
            }

            if (props.scrollable && props.rowGroupMode === 'subheader') {
                updateFrozenRowGroupHeaderStickyPosition();
            }
        });

        useUpdateEffect(() => {
            if (props.paginator && isMultipleSelection()) {
                anchorRowIndex.current = null;
            }
        }, [props.first]);

        useUnmountEffect(() => {
            if (props.dragSelection) {
                unbindDragSelectionEvents();
            }
        });

        const createEmptyContent = () => {
            if (!props.loading) {
                const colSpan = getColumnsLength();
                const content = ObjectUtils.getJSXElement(props.emptyMessage, { props: props.tableProps, frozen: props.frozenRow }) || localeOption('emptyMessage');
                const emptyMessageProps = mergeProps(
                    {
                        className: cx('emptyMessage'),
                        role: 'row'
                    },
                    getColumnPTOptions('emptyMessage')
                );

                const bodyCellProps = mergeProps(
                    {
                        colSpan,
                        role: 'cell'
                    },
                    getColumnPTOptions('root'),
                    getColumnPTOptions('bodyCell')
                );

                return (
                    <tr {...emptyMessageProps}>
                        <td {...bodyCellProps}>{content}</td>
                    </tr>
                );
            }

            return null;
        };

        const createGroupHeader = (rowData, rowIndex, expanded, colSpan) => {
            if (isSubheaderGrouping && shouldRenderRowGroupHeader(props.value, rowData, rowIndex - props.first)) {
                const style = rowGroupHeaderStyle();
                const toggler = props.expandableRowGroups && (
                    <RowTogglerButton
                        hostName={props.hostName}
                        onClick={onRowToggle}
                        rowData={rowData}
                        expanded={expanded}
                        expandedRowIcon={props.expandedRowIcon}
                        collapsedRowIcon={props.collapsedRowIcon}
                        ptCallbacks={props.ptCallbacks}
                        metaData={props.metaData}
                    />
                );
                const options = { index: rowIndex, props: props.tableProps, customRendering: false };
                let content = ObjectUtils.getJSXElement(props.rowGroupHeaderTemplate, rowData, options);

                // check if the user wants complete control of the rendering
                if (!options.customRendering) {
                    const bodyCellProps = mergeProps(
                        {
                            colSpan
                        },
                        getColumnPTOptions('root'),
                        getColumnPTOptions('bodyCell')
                    );

                    const rowGroupHeaderNameProps = mergeProps(
                        {
                            className: cx('rowGroupHeaderName')
                        },
                        getColumnPTOptions('rowGroupHeaderName')
                    );

                    content = (
                        <td {...bodyCellProps}>
                            {toggler}
                            <span {...rowGroupHeaderNameProps}>{content}</span>
                        </td>
                    );
                }

                const rowGroupHeaderProps = mergeProps(
                    {
                        className: cx('rowGroupHeader'),
                        style,
                        role: 'row'
                    },
                    getColumnPTOptions('rowGroupHeader')
                );

                return <tr {...rowGroupHeaderProps}>{content}</tr>;
            }

            return null;
        };

        const createRow = (rowData, rowIndex, index, expanded) => {
            if (!props.expandableRowGroups || expanded) {
                const selected = isSelectionEnabled() ? isSelected(rowData) : false;
                const contextMenuSelected = isContextMenuSelected(rowData);
                const _allowRowSelection = allowRowSelection();
                const _allowCellSelection = allowCellSelection();
                const editing = isRowEditing(rowData);

                return (
                    <BodyRow
                        hostName={props.hostName}
                        allowCellSelection={_allowCellSelection}
                        allowRowSelection={_allowRowSelection}
                        cellClassName={props.cellClassName}
                        checkIcon={props.checkIcon}
                        collapsedRowIcon={props.collapsedRowIcon}
                        columns={props.columns}
                        compareSelectionBy={props.compareSelectionBy}
                        contextMenuSelected={contextMenuSelected}
                        dataKey={props.dataKey}
                        editMode={props.editMode}
                        editing={editing}
                        editingMeta={props.editingMeta}
                        editingRows={props.editingRows}
                        expanded={expanded}
                        expandedRowIcon={props.expandedRowIcon}
                        frozenRow={props.frozenRow}
                        groupRowsBy={props.groupRowsBy}
                        index={index}
                        isSelectable={isSelectable}
                        onCellClick={onCellClick}
                        onCellMouseDown={onCellMouseDown}
                        onCellMouseUp={onCellMouseUp}
                        onCheckboxChange={onCheckboxChange}
                        onEditingMetaChange={props.onEditingMetaChange}
                        onRadioChange={onRadioChange}
                        onRowClick={onRowClick}
                        onRowDoubleClick={onRowDoubleClick}
                        onRowPointerDown={onRowPointerDown}
                        onRowPointerUp={onRowPointerUp}
                        onRowDragEnd={onRowDragEnd}
                        onRowDragLeave={onRowDragLeave}
                        onRowDragOver={onRowDragOver}
                        onRowDragStart={onRowDragStart}
                        onRowDrop={onRowDrop}
                        onRowEditCancel={props.onRowEditCancel}
                        onRowEditChange={props.onRowEditChange}
                        onRowEditComplete={props.onRowEditComplete}
                        onRowEditInit={props.onRowEditInit}
                        onRowEditSave={props.onRowEditSave}
                        onRowMouseDown={onRowMouseDown}
                        onRowMouseEnter={onRowMouseEnter}
                        onRowMouseLeave={onRowMouseLeave}
                        onRowMouseUp={onRowMouseUp}
                        onRowRightClick={onRowRightClick}
                        onRowToggle={onRowToggle}
                        onRowTouchEnd={onRowTouchEnd}
                        responsiveLayout={props.responsiveLayout}
                        rowClassName={props.rowClassName}
                        rowData={rowData}
                        rowEditValidator={props.rowEditValidator}
                        rowEditorCancelIcon={props.rowEditorCancelIcon}
                        rowEditorInitIcon={props.rowEditorInitIcon}
                        rowEditorSaveIcon={props.rowEditorSaveIcon}
                        rowGroupMode={props.rowGroupMode}
                        rowIndex={rowIndex}
                        selectOnEdit={props.selectOnEdit}
                        selected={selected}
                        selection={props.selection}
                        selectionMode={props.selectionMode}
                        selectionModeInColumn={props.selectionModeInColumn}
                        showRowReorderElement={props.showRowReorderElement}
                        showSelectionElement={props.showSelectionElement}
                        tabIndex={props.tabIndex}
                        tableProps={props.tableProps}
                        tableSelector={props.tableSelector}
                        value={props.value}
                        virtualScrollerOptions={props.virtualScrollerOptions}
                        ptCallbacks={props.ptCallbacks}
                        metaData={props.metaData}
                    />
                );
            }
        };

        const createExpansion = (rowData, rowIndex, expanded, colSpan) => {
            if (expanded && !(isSubheaderGrouping && props.expandableRowGroups)) {
                const id = `${props.tableSelector}_content_${rowIndex}_expanded`;
                const options = { index: rowIndex, customRendering: false };
                let content = ObjectUtils.getJSXElement(props.rowExpansionTemplate, rowData, options);

                // check if the user wants complete control of the rendering
                if (!options.customRendering) {
                    const bodyCellProps = mergeProps(
                        {
                            colSpan,
                            role: 'cell'
                        },
                        getColumnPTOptions('root'),
                        getColumnPTOptions('bodyCell')
                    );

                    content = <td {...bodyCellProps}>{content}</td>;
                }

                const rowExpansionProps = mergeProps(
                    {
                        id,
                        className: cx('rowExpansion'),
                        role: 'row'
                    },
                    getColumnPTOptions('rowExpansion')
                );

                return <tr {...rowExpansionProps}>{content}</tr>;
            }

            return null;
        };

        const createGroupFooter = (rowData, rowIndex, expanded, colSpan) => {
            if (isSubheaderGrouping && shouldRenderRowGroupFooter(props.value, rowData, rowIndex - props.first, expanded)) {
                const content = ObjectUtils.getJSXElement(props.rowGroupFooterTemplate, rowData, { index: rowIndex, colSpan, props: props.tableProps });
                const rowGroupFooterProps = mergeProps(
                    {
                        className: cx('rowGroupFooter'),
                        role: 'row'
                    },
                    getColumnPTOptions('rowGroupFooter')
                );

                return <tr {...rowGroupFooterProps}>{content}</tr>;
            }

            return null;
        };

        const createContent = () => {
            return (
                props.value &&
                props.value.map((rowData, index) => {
                    const rowIndex = getVirtualScrollerOption('getItemOptions') ? getVirtualScrollerOption('getItemOptions')(index).index : props.first + index;
                    const key = getRowKey(rowData, rowIndex);
                    const expanded = isRowExpanded(rowData);
                    const colSpan = getColumnsLength();

                    const groupHeader = createGroupHeader(rowData, rowIndex, expanded, colSpan);
                    const row = createRow(rowData, rowIndex, index, expanded);
                    const expansion = createExpansion(rowData, rowIndex, expanded, colSpan);
                    const groupFooter = createGroupFooter(rowData, rowIndex, expanded, colSpan);

                    return (
                        <React.Fragment key={key}>
                            {groupHeader}
                            {row}
                            {expansion}
                            {groupFooter}
                        </React.Fragment>
                    );
                })
            );
        };

        const content = props.empty ? createEmptyContent() : createContent();
        const ptKey = props.className === 'p-datatable-virtualscroller-spacer' ? 'virtualScrollerSpacer' : 'tbody';
        const tbodyProps = mergeProps(
            {
                style: props.style,
                className: cx(ptKey, { className: props.className }),
                role: ' rowgroup'
            },
            ptm(ptKey, { hostName: props.hostName })
        );

        return (
            <tbody ref={refCallback} {...tbodyProps}>
                {content}
            </tbody>
        );
    })
);

TableBody.displayName = 'TableBody';
