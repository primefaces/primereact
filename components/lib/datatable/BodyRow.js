import * as React from 'react';
import { ColumnBase } from '../column/ColumnBase';
import { useMergeProps } from '../hooks/Hooks';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';
import { BodyCell } from './BodyCell';

export const BodyRow = React.memo((props) => {
    const mergeProps = useMergeProps();
    const [editingState, setEditingState] = React.useState(false);
    const editing = props.onRowEditChange ? props.editing : editingState;
    const { ptm, cx } = props.ptCallbacks;

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
                selected: (!props.allowCellSelection && props.selected) || props.contextMenuSelected,
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

    const changeTabIndex = (currentRow, nextRow) => {
        if (currentRow && nextRow) {
            currentRow.tabIndex = -1;
            nextRow.tabIndex = props.tabIndex;
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
        } else {
            return null;
        }
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
                focusedItem !== rows[0] && (rows[rowIndex].tabIndex = '-1');
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

                if (editingRowIndex !== -1) editingRows = editingRows.filter((val, i) => i !== editingRowIndex);
                else editingRows.push(data);
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

    const createContent = () => {
        return props.columns.map((col, i) => {
            if (shouldRenderBodyCell(props.value, col, props.index)) {
                const key = `${props.rowIndex}_${getColumnProp(col, 'columnKey') || getColumnProp(col, 'field')}_${i}`;
                const rowSpan = props.rowGroupMode === 'rowspan' ? calculateRowGroupSize(props.value, col, props.index) : null;

                return (
                    <BodyCell
                        hostName={props.hostName}
                        key={key}
                        allowCellSelection={props.allowCellSelection}
                        cellClassName={props.cellClassName}
                        checkIcon={props.checkIcon}
                        collapsedRowIcon={props.collapsedRowIcon}
                        column={col}
                        compareSelectionBy={props.compareSelectionBy}
                        dataKey={props.dataKey}
                        editMode={props.editMode}
                        editing={editing}
                        editingMeta={props.editingMeta}
                        expanded={props.expanded}
                        expandedRowIcon={props.expandedRowIcon}
                        frozenRow={props.frozenRow}
                        index={i}
                        isSelectable={props.isSelectable}
                        onCheckboxChange={props.onCheckboxChange}
                        onClick={props.onCellClick}
                        onEditingMetaChange={props.onEditingMetaChange}
                        onMouseDown={props.onCellMouseDown}
                        onMouseUp={props.onCellMouseUp}
                        onRadioChange={props.onRadioChange}
                        onRowEditCancel={onEditCancel}
                        onRowEditInit={onEditInit}
                        onRowEditSave={onEditSave}
                        onRowToggle={props.onRowToggle}
                        responsiveLayout={props.responsiveLayout}
                        rowData={props.rowData}
                        rowEditorCancelIcon={props.rowEditorCancelIcon}
                        rowEditorInitIcon={props.rowEditorInitIcon}
                        rowEditorSaveIcon={props.rowEditorSaveIcon}
                        rowIndex={props.rowIndex}
                        rowSpan={rowSpan}
                        selectOnEdit={props.selectOnEdit}
                        selected={props.selected}
                        selection={props.selection}
                        selectionAriaLabel={props.tableProps.selectionAriaLabel}
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
            className: rowClassName // #5983 must be last so all unstyled merging takes place first
        }
    );

    return <tr {...rowProps}>{content}</tr>;
});

BodyRow.displayName = 'BodyRow';
