import * as React from 'react';
import { ColumnBase } from '../column/ColumnBase';
import { useMergeProps } from '../hooks/Hooks';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';
import { BodyCell, RadioCheckCell } from './BodyCell';
import { Fragment } from 'react';

export const BodyRow = React.memo((props) => {
    const mergeProps = useMergeProps();
    const [editingState, setEditingState] = React.useState(false);
    const editing = props.onRowEditChange ? props.editing : editingState;
    const { ptm, cx } = props.ptCallbacks;

    const isRowSelected = (!props.allowCellSelection && props.selected) || props.contextMenuSelected;

    const getBodyRowPTOptions = (key) => {
        return ptm(key, {
            parent: props.metaData,
            hostName: props.hostName,
            state: {
                editing: editing
            },
            context: {
                index: props.index,
                selectable: props.allowRowSelection && props.isSelectable({ data: props.rowData, index: props.rowIndex }),
                selected: isRowSelected,
                stripedRows: props.metaData.props.stripedRows
            }
        });
    };

    const getColumnProp = (column, name) => ColumnBase.getCProp(column, name);

    const isFocusable = () => {
        return props.selectionMode && props.selectionModeInColumn !== 'single' && props.selectionModeInColumn !== 'multiple';
    };

    const isGrouped = (column) => {
        const columnField = getColumnProp(column, 'field');

        if (props.groupRowsBy && columnField) {
            return Array.isArray(props.groupRowsBy) ? props.groupRowsBy.indexOf(columnField) > -1 : props.groupRowsBy === columnField;
        }

        return false;
    };

    const equals = (data1, data2) => {
        return props.compareSelectionBy === 'equals' ? data1 === data2 : ObjectUtils.equals(data1, data2, props.dataKey);
    };

    const getTabIndex = () => {
        return isFocusable() && !props.allowCellSelection ? (props.rowIndex === 0 ? props.tabIndex : -1) : null;
    };

    const findIndex = (collection, rowData) => {
        return (collection || []).findIndex((data) => equals(rowData, data));
    };

    const changeTabIndex = (currentElement, nextElement) => {
        if (currentElement && nextElement) {
            currentElement.tabIndex = -1;
            nextElement.tabIndex = props.tabIndex;
        }
    };

    const findFirstSelectableRow = (row) => {
        const firstRow = DomHandler.findSingle(row.parentNode, 'tr[data-p-selectable-row]');

        return firstRow ? firstRow : null;
    };

    const findNextSelectableRow = (row) => {
        const nextRow = row.nextElementSibling;

        return nextRow ? (DomHandler.getAttribute(nextRow, 'data-p-selectable-row') === true ? nextRow : findNextSelectableRow(nextRow)) : null;
    };

    const findPrevSelectableRow = (row) => {
        const prevRow = row.previousElementSibling;

        return prevRow ? (DomHandler.getAttribute(prevRow, 'data-p-selectable-row') === true ? prevRow : findPrevSelectableRow(prevRow)) : null;
    };

    const findLastSelectableRow = (row) => {
        const lastRow = DomHandler.findSingle(row.parentNode, 'tr[data-p-selectable-row]:last-child');

        return lastRow ? lastRow : null;
    };

    const shouldRenderBodyCell = (value, column, i) => {
        if (getColumnProp(column, 'hidden')) {
            return false;
        } else if (props.rowGroupMode && props.rowGroupMode === 'rowspan' && isGrouped(column)) {
            let prevRowData = value[i - 1];

            if (prevRowData) {
                const currentRowFieldData = ObjectUtils.resolveFieldData(value[i], getColumnProp(column, 'field'));
                const previousRowFieldData = ObjectUtils.resolveFieldData(prevRowData, getColumnProp(column, 'field'));

                return currentRowFieldData !== previousRowFieldData;
            }
        }

        return true;
    };

    const calculateRowGroupSize = (value, column, index) => {
        if (isGrouped(column)) {
            let currentRowFieldData = ObjectUtils.resolveFieldData(value[index], getColumnProp(column, 'field'));
            let nextRowFieldData = currentRowFieldData;
            let groupRowSpan = 0;

            while (currentRowFieldData === nextRowFieldData) {
                groupRowSpan++;
                let nextRowData = value[++index];

                if (nextRowData) {
                    nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, getColumnProp(column, 'field'));
                } else {
                    break;
                }
            }

            return groupRowSpan === 1 ? null : groupRowSpan;
        }

        return null;
    };

    const onClick = (event) => {
        props.onRowClick({ originalEvent: event, data: props.rowData, index: props.rowIndex });
    };

    const onDoubleClick = (event) => {
        props.onRowDoubleClick({ originalEvent: event, data: props.rowData, index: props.rowIndex });
    };

    const onPointerDown = (event) => {
        props.onRowPointerDown({ originalEvent: event, data: props.rowData, index: props.rowIndex });
    };

    const onPointerUp = (event) => {
        props.onRowPointerUp({ originalEvent: event, data: props.rowData, index: props.rowIndex });
    };

    const onRightClick = (event) => {
        props.onRowRightClick({ originalEvent: event, data: props.rowData, index: props.rowIndex });
    };

    const onMouseEnter = (event) => {
        props.onRowMouseEnter({ originalEvent: event, data: props.rowData, index: props.rowIndex });
    };

    const onMouseLeave = (event) => {
        props.onRowMouseLeave({ originalEvent: event, data: props.rowData, index: props.rowIndex });
    };

    const onTouchEnd = (event) => {
        props.onRowTouchEnd(event);
    };

    const onKeyDown = (event) => {
        if (isFocusable() && !props.allowCellSelection) {
            const { target, currentTarget: row } = event;

            switch (event.code) {
                case 'ArrowDown':
                    onArrowDownKey(row, event);
                    break;

                case 'ArrowUp':
                    onArrowUpKey(row, event);
                    break;

                case 'Home':
                    onHomeKey(row, event);
                    break;

                case 'End':
                    onEndKey(row, event);
                    break;

                case 'Enter':
                case 'NumpadEnter':
                    onEnterKey(row, event, target);
                    break;

                case 'Space':
                    onSpaceKey(row, event, target);
                    break;

                case 'Tab':
                    onTabKey(row, event);
                    break;

                default:
                    //no op
                    break;
            }
        }
    };

    const onArrowDownKey = (row, event) => {
        let nextRow = findNextSelectableRow(row);

        if (nextRow) {
            changeTabIndex(row, nextRow);
            nextRow.focus();
        }

        event.preventDefault();
    };

    const onArrowUpKey = (row, event) => {
        let prevRow = findPrevSelectableRow(row);

        if (prevRow) {
            changeTabIndex(row, prevRow);
            prevRow.focus();
        }

        event.preventDefault();
    };

    const onHomeKey = (row, event) => {
        const firstRow = findFirstSelectableRow(row);

        if (firstRow) {
            changeTabIndex(row, firstRow);
            firstRow.focus();
        }

        event.preventDefault();
    };

    const onEndKey = (row, event) => {
        const lastRow = findLastSelectableRow(row);

        if (lastRow) {
            changeTabIndex(row, lastRow);
            lastRow.focus();
        }

        event.preventDefault();
    };

    const onEnterKey = (row, event, target) => {
        if (!DomHandler.isClickable(target)) {
            onClick(event);
            event.preventDefault();
        }
    };

    const onSpaceKey = (row, event, target) => {
        if (!DomHandler.isClickable(target) && !target.readOnly) {
            onClick(event);
            event.preventDefault();
        }
    };

    const onTabKey = (row, event) => {
        const parent = row.parentNode;
        const rows = DomHandler.find(parent, 'tr[data-p-selectable-row="true"]');

        if (event.code === 'Tab' && rows && rows.length > 0) {
            const firstSelectedRow = DomHandler.findSingle(parent, 'tr[data-p-highlight="true"]');
            const focusedItem = DomHandler.findSingle(parent, 'tr[data-p-selectable-row="true"][tabindex="0"]');

            if (firstSelectedRow) {
                firstSelectedRow.tabIndex = '0';
                focusedItem && focusedItem !== firstSelectedRow && (focusedItem.tabIndex = '-1');
            } else {
                rows[0].tabIndex = '0';
                focusedItem !== rows[0] && (rows[props.rowIndex].tabIndex = '-1');
            }
        }
    };

    const onMouseDown = (event) => {
        props.onRowMouseDown({ originalEvent: event, data: props.rowData, index: props.rowIndex });
    };

    const onMouseUp = (event) => {
        props.onRowMouseUp({ originalEvent: event, data: props.rowData, index: props.rowIndex });
    };

    const onDragStart = (event) => {
        props.onRowDragStart({ originalEvent: event, data: props.rowData, index: props.rowIndex });
    };

    const onDragOver = (event) => {
        props.onRowDragOver({ originalEvent: event, data: props.rowData, index: props.rowIndex });
    };

    const onDragLeave = (event) => {
        props.onRowDragLeave({ originalEvent: event, data: props.rowData, index: props.rowIndex });
    };

    const onDragEnd = (event) => {
        props.onRowDragEnd({ originalEvent: event, data: props.rowData, index: props.rowIndex });
    };

    const onDrop = (event) => {
        props.onRowDrop({ originalEvent: event, data: props.rowData, index: props.rowIndex });
    };

    const onEditChange = (e, isEditing) => {
        if (props.onRowEditChange) {
            let editingRows;
            const dataKey = props.dataKey;
            const { originalEvent, data, index, newData } = e;

            if (dataKey) {
                let dataKeyValue = String(ObjectUtils.resolveFieldData(data, dataKey));

                editingRows = props.editingRows ? { ...props.editingRows } : {};

                if (!isEditing) {
                    delete editingRows[dataKeyValue];
                    // if the key value was changed, stop editing for the new key value too
                    let newDataKeyValue = String(ObjectUtils.resolveFieldData(newData, dataKey));

                    delete editingRows[newDataKeyValue];
                } else {
                    editingRows[dataKeyValue] = true;
                }
            } else {
                let editingRowIndex = findIndex(props.editingRows, data);

                editingRows = props.editingRows ? [...props.editingRows] : [];

                if (editingRowIndex !== -1) {
                    editingRows = editingRows.filter((val, i) => i !== editingRowIndex);
                } else {
                    editingRows.push(data);
                }
            }

            props.onRowEditChange({
                originalEvent,
                data: editingRows,
                index
            });
        } else {
            setEditingState(isEditing);
        }
    };

    const onEditInit = (e) => {
        const { originalEvent: event } = e;

        if (props.onRowEditInit) {
            props.onRowEditInit({
                originalEvent: event,
                data: props.rowData,
                index: props.rowIndex
            });
        }

        onEditChange(e, true);

        event.preventDefault();
    };

    const onEditSave = (e) => {
        const { originalEvent: event, newData } = e;
        const valid = props.rowEditValidator ? props.rowEditValidator(newData, { props: props.tableProps, rowIndex: props.rowIndex }) : true;

        if (props.onRowEditSave) {
            props.onRowEditSave({
                originalEvent: event,
                data: props.rowData,
                index: props.rowIndex,
                newData,
                valid
            });
        }

        if (valid) {
            if (props.onRowEditComplete) {
                props.onRowEditComplete(e);
            }

            onEditChange(e, false);
        }

        event.preventDefault();
    };

    const onEditCancel = (e) => {
        const { originalEvent: event } = e;

        if (props.onRowEditCancel) {
            props.onRowEditCancel({
                originalEvent: event,
                data: props.rowData,
                index: props.rowIndex
            });
        }

        onEditChange(e, false);

        event.preventDefault();
    };

    const equalsDataCell = (data) => {
        return props.compareSelectionBy === 'equals' ? data === props.rowData : ObjectUtils.equals(data, props.rowData, props.dataKey);
    };

    const equalsCell = (selectedCell, field, colIndex) => {
        return selectedCell && (selectedCell.rowIndex === props.rowIndex || equalsDataCell(selectedCell.rowData)) && (selectedCell.field === field || selectedCell.cellIndex === colIndex);
    };

    const findIndexCell = (collection, field, colIndex) => {
        return (collection || []).findIndex((data) => equalsCell(data, field, colIndex));
    };

    const isCellSelected = (selection, field, colIndex) => {
        return selection ? (selection instanceof Array ? findIndexCell(selection, field, colIndex) > -1 : equalsCell(selection, field, colIndex)) : false;
    };

    const onCheckboxChange = (event) => {
        props.onCheckboxChange({
            originalEvent: event,
            data: props.rowData,
            index: props.rowIndex
        });
    };

    const editingKey = props.dataKey ? (props.rowData && props.rowData[props.dataKey]) || props.rowIndex : props.rowIndex;

    const getVirtualScrollerOption = React.useCallback(
        (option) => {
            return props.virtualScrollerOptions ? props.virtualScrollerOptions[option] : null;
        },
        [props.virtualScrollerOptions]
    );

    const getEditingRowData = () => {
        return props.editingMeta && props.editingMeta[editingKey] ? props.editingMeta[editingKey].data : props.rowData;
    };

    const getTabIndexCell = React.useCallback(
        (cellSelected, cellIndex) => {
            return props.allowCellSelection ? (cellSelected ? 0 : props.rowIndex === 0 && cellIndex === 0 ? props.tabIndex : -1) : null;
        },
        [props.allowCellSelection, props.rowIndex, props.tabIndex]
    );

    const findNextSelectableCell = React.useCallback((cell) => {
        const nextCell = cell.nextElementSibling;

        return nextCell ? (DomHandler.getAttribute(nextCell, 'data-p-selectable-cell') ? nextCell : findNextSelectableCell(nextCell)) : null;
    }, []);

    const findPrevSelectableCell = React.useCallback((cell) => {
        const prevCell = cell.previousElementSibling;

        return prevCell ? (DomHandler.getAttribute(prevCell, 'data-p-selectable-cell') ? prevCell : findPrevSelectableCell(prevCell)) : null;
    }, []);

    const findDownSelectableCell = React.useCallback((cell, cellIndex) => {
        const downRow = cell.parentElement.nextElementSibling;
        const downCell = downRow ? downRow.children[cellIndex] : null;

        return downRow && downCell ? (DomHandler.getAttribute(downRow, 'data-p-selectable-row') && DomHandler.getAttribute(downCell, 'data-p-selectable-cell') ? downCell : findDownSelectableCell(downCell)) : null;
    }, []);

    const findUpSelectableCell = React.useCallback((cell, cellIndex) => {
        const upRow = cell.parentElement.previousElementSibling;
        const upCell = upRow ? upRow.children[cellIndex] : null;

        return upRow && upCell ? (DomHandler.getAttribute(upRow, 'data-p-selectable-row') && DomHandler.getAttribute(upCell, 'data-p-selectable-cell') ? upCell : findUpSelectableCell(upCell)) : null;
    }, []);

    const focusOnElement = React.useCallback(
        (focusTimeoutRef, editingState, elementRef, keyHelperRef) => {
            clearTimeout(focusTimeoutRef.current);
            focusTimeoutRef.current = setTimeout(() => {
                if (editingState) {
                    const focusableEl =
                        props.editMode === 'cell' ? DomHandler.getFirstFocusableElement(elementRef.current, ':not([data-pc-section="editorkeyhelperlabel"])') : DomHandler.findSingle(elementRef.current, '[data-p-row-editor-save="true"]');

                    focusableEl && focusableEl.focus();
                }

                keyHelperRef.current && (keyHelperRef.current.tabIndex = editingState ? -1 : 0);
            }, 1);
        },
        [props.editMode]
    );

    const focusOnInit = React.useCallback(
        (initFocusTimeoutRef, elementRef) => {
            clearTimeout(initFocusTimeoutRef.current);
            initFocusTimeoutRef.current = setTimeout(() => {
                const focusableEl = props.editMode === 'row' ? DomHandler.findSingle(elementRef.current, '[data-p-row-editor-init="true"]') : null;

                focusableEl && focusableEl.focus();
            }, 1);
        },
        [props.editMode]
    );

    const updateStickyPosition = React.useCallback((elementRef, frozen, alignFrozen, styleObjectState, setStyleObjectState) => {
        if (frozen) {
            let styleObject = { ...styleObjectState };

            if (alignFrozen === 'right') {
                let right = 0;
                let next = elementRef.current && elementRef.current.nextElementSibling;

                if (next && next.classList.contains('p-frozen-column')) {
                    right = DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
                }

                styleObject.right = right + 'px';
            } else {
                let left = 0;
                let prev = elementRef.current && elementRef.current.previousElementSibling;

                while (prev) {
                    if (prev.classList.contains('p-frozen-column')) {
                        left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
                        elementRef.current.style.left = left + 'px';
                        break;
                    }

                    prev = prev.previousElementSibling;
                }

                styleObject.left = left + 'px';
            }

            const isSameStyle = styleObjectState.left === styleObject.left && styleObjectState.right === styleObject.right;

            !isSameStyle && setStyleObjectState(styleObject);
        }
    }, []);

    const onCellClick = (event, params, isEditable, editingState, setEditingState, column, bindDocumentClickListener) => {
        if (props.editMode !== 'row' && isEditable && !editingState && (props.selectOnEdit || (!props.selectOnEdit && props.isRowSelected))) {
            const onBeforeCellEditShow = getColumnProp(column, 'onBeforeCellEditShow');
            const onCellEditInit = getColumnProp(column, 'onCellEditInit');
            const cellEditValidatorEvent = getColumnProp(column, 'cellEditValidatorEvent');

            if (onBeforeCellEditShow) {
                // if user returns false do not show the editor
                if (onBeforeCellEditShow(params) === false) {
                    return;
                }

                // if user prevents default stop the editor
                if (event && event.defaultPrevented) {
                    return;
                }
            }

            // If the data is sorted using sort icon, it has been added to wait for the sort operation when any cell is wanted to be opened.
            setTimeout(() => {
                setEditingState(true);

                if (onCellEditInit) {
                    if (onCellEditInit(params) === false) {
                        return;
                    }

                    // if user prevents default stop the editor
                    if (event && event.defaultPrevented) {
                        return;
                    }
                }

                if (cellEditValidatorEvent === 'click') {
                    bindDocumentClickListener();
                }
            }, 1);
        }

        if (props.allowCellSelection && props.onCellClick) {
            props.onCellClick(params);
        }
    };

    const createContent = () => {
        return props.columns.map((col, i) => {
            if (shouldRenderBodyCell(props.value, col, props.index)) {
                const key = `${props.rowIndex}_${getColumnProp(col, 'columnKey') || getColumnProp(col, 'field')}_${i}`;
                const rowSpan = props.rowGroupMode === 'rowspan' ? calculateRowGroupSize(props.value, col, props.index) : null;

                const field = getColumnProp(col, 'field') || `field_${i}`;

                const resolveFieldData = (data) => {
                    return ObjectUtils.resolveFieldData(data || props.rowData, field);
                };

                const selectionMode = getColumnProp(col, 'selectionMode');

                const cellProps = mergeProps({
                    hostName: props.hostName,
                    allowCellSelection: props.allowCellSelection,
                    cellMemo: props.cellMemo,
                    cellMemoProps: props.cellMemoProps,
                    cellMemoPropsDepth: props.cellMemoPropsDepth,
                    cellClassName: props.cellClassName,
                    checkIcon: props.checkIcon,
                    collapsedRowIcon: props.collapsedRowIcon,
                    field: field,
                    resolveFieldData: resolveFieldData,
                    column: col,
                    cProps: props.colsProps[i],
                    dataKey: props.dataKey,
                    editMode: props.editMode,
                    editing: editing,
                    editingMeta: props.editingMeta,
                    onEditingMetaChange: props.onEditingMetaChange,
                    editingKey: editingKey,
                    getEditingRowData: getEditingRowData,
                    expanded: props.expanded,
                    expandedRowIcon: props.expandedRowIcon,
                    frozenRow: props.frozenRow,
                    frozenCol: getColumnProp(col, 'frozen'),
                    alignFrozenCol: getColumnProp(col, 'alignFrozen'),
                    index: i,
                    isSelectable: props.isSelectable,
                    onCheckboxChange: onCheckboxChange,
                    onClick: onCellClick,
                    onMouseDown: props.onCellMouseDown,
                    onMouseUp: props.onCellMouseUp,
                    onRadioChange: props.onRadioChange,
                    onRowEditCancel: onEditCancel,
                    onRowEditInit: onEditInit,
                    onRowEditSave: onEditSave,
                    onRowToggle: props.onRowToggle,
                    responsiveLayout: props.responsiveLayout,
                    rowData: props.rowData,
                    rowEditorCancelIcon: props.rowEditorCancelIcon,
                    rowEditorInitIcon: props.rowEditorInitIcon,
                    rowEditorSaveIcon: props.rowEditorSaveIcon,
                    rowIndex: props.rowIndex,
                    rowSpan: rowSpan,
                    selectOnEdit: props.selectOnEdit,
                    isRowSelected: isRowSelected,
                    isCellSelected: isCellSelected(props.selection, field, i),
                    selectionAriaLabel: props.tableProps.selectionAriaLabel,
                    showRowReorderElement: props.showRowReorderElement,
                    showSelectionElement: props.showSelectionElement,
                    tabIndex: props.tabIndex,
                    getTabIndex: getTabIndexCell,
                    tableProps: props.tableProps,
                    tableSelector: props.tableSelector,
                    value: props.value,
                    getVirtualScrollerOption: getVirtualScrollerOption,
                    ptCallbacks: props.ptCallbacks,
                    metaData: props.metaData,
                    unstyled: props.unstyled,
                    findNextSelectableCell: findNextSelectableCell,
                    findPrevSelectableCell: findPrevSelectableCell,
                    findDownSelectableCell: findDownSelectableCell,
                    findUpSelectableCell: findUpSelectableCell,
                    focusOnElement: focusOnElement,
                    focusOnInit: focusOnInit,
                    updateStickyPosition: updateStickyPosition
                });

                return <Fragment key={key}>{selectionMode ? <RadioCheckCell {...cellProps} /> : <BodyCell {...cellProps} />}</Fragment>;
            }

            return null;
        });
    };

    const rowClassName = ObjectUtils.getPropValue(props.rowClassName, props.rowData, { props: props.tableProps });
    const style = { height: props.virtualScrollerOptions ? props.virtualScrollerOptions.itemSize : undefined };
    const content = createContent();
    const tabIndex = getTabIndex();
    const rowProps = mergeProps(
        {
            role: 'row',
            tabIndex: tabIndex,
            className: classNames(cx('bodyRow', { rowProps: props })),
            style: style,
            onMouseDown: (e) => onMouseDown(e),
            onMouseUp: (e) => onMouseUp(e),
            onMouseEnter: (e) => onMouseEnter(e),
            onMouseLeave: (e) => onMouseLeave(e),
            onClick: (e) => onClick(e),
            onDoubleClick: (e) => onDoubleClick(e),
            onPointerDown: (e) => onPointerDown(e),
            onPointerUp: (e) => onPointerUp(e),
            onContextMenu: (e) => onRightClick(e),
            onTouchEnd: (e) => onTouchEnd(e),
            onKeyDown: (e) => onKeyDown(e),
            onDragStart: (e) => onDragStart(e),
            onDragOver: (e) => onDragOver(e),
            onDragLeave: (e) => onDragLeave(e),
            onDragEnd: (e) => onDragEnd(e),
            onDrop: (e) => onDrop(e),
            'aria-selected': props?.selectionMode ? props.selected : null,
            'data-p-selectable-row': props.allowRowSelection && props.isSelectable({ data: props.rowData, index: props.rowIndex }),
            'data-p-highlight': props.selected,
            'data-p-highlight-contextmenu': props.contextMenuSelected
        },
        getBodyRowPTOptions('bodyRow'),
        {
            className: classNames(rowClassName) // #5983 must be last so all unstyled merging takes place first
        }
    );

    return <tr {...rowProps}>{content}</tr>;
});

BodyRow.displayName = 'BodyRow';
