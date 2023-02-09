import * as React from 'react';
import { ColumnBase } from '../column/ColumnBase';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';
import { BodyCell } from './BodyCell';

export const BodyRow = React.memo((props) => {
    const [editingState, setEditingState] = React.useState(false);
    const editing = props.onRowEditChange ? props.editing : editingState;

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
        return isFocusable() && !props.allowCellSelection ? (props.index === 0 ? props.tabIndex : -1) : null;
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

    const findNextSelectableRow = (row) => {
        const nextRow = row.nextElementSibling;

        return nextRow ? (DomHandler.hasClass(nextRow, 'p-selectable-row') ? nextRow : findNextSelectableRow(nextRow)) : null;
    };

    const findPrevSelectableRow = (row) => {
        const prevRow = row.previousElementSibling;

        return prevRow ? (DomHandler.hasClass(prevRow, 'p-selectable-row') ? prevRow : findPrevSelectableRow(prevRow)) : null;
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
        props.onRowClick({ originalEvent: event, data: props.rowData, index: props.index });
    };

    const onDoubleClick = (event) => {
        props.onRowDoubleClick({ originalEvent: event, data: props.rowData, index: props.index });
    };

    const onRightClick = (event) => {
        props.onRowRightClick({ originalEvent: event, data: props.rowData, index: props.index });
    };

    const onMouseEnter = (event) => {
        props.onRowMouseEnter({ originalEvent: event, data: props.rowData, index: props.index });
    };

    const onMouseLeave = (event) => {
        props.onRowMouseLeave({ originalEvent: event, data: props.rowData, index: props.index });
    };

    const onTouchEnd = (event) => {
        props.onRowTouchEnd(event);
    };

    const onKeyDown = (event) => {
        if (isFocusable() && !props.allowCellSelection) {
            const { target, currentTarget: row } = event;

            switch (event.which) {
                //down arrow
                case 40:
                    let nextRow = findNextSelectableRow(row);

                    if (nextRow) {
                        changeTabIndex(row, nextRow);
                        nextRow.focus();
                    }

                    event.preventDefault();
                    break;

                //up arrow
                case 38:
                    let prevRow = findPrevSelectableRow(row);

                    if (prevRow) {
                        changeTabIndex(row, prevRow);
                        prevRow.focus();
                    }

                    event.preventDefault();
                    break;

                //enter
                case 13: // @deprecated
                    if (!DomHandler.isClickable(target)) {
                        onClick(event);
                        event.preventDefault();
                    }

                    break;

                //space
                case 32:
                    if (!DomHandler.isClickable(target) && !target.readOnly) {
                        onClick(event);
                        event.preventDefault();
                    }

                    break;

                default:
                    //no op
                    break;
            }
        }
    };

    const onMouseDown = (event) => {
        props.onRowMouseDown({ originalEvent: event, data: props.rowData, index: props.index });
    };

    const onMouseUp = (event) => {
        props.onRowMouseUp({ originalEvent: event, data: props.rowData, index: props.index });
    };

    const onDragStart = (event) => {
        props.onRowDragStart({ originalEvent: event, data: props.rowData, index: props.index });
    };

    const onDragOver = (event) => {
        props.onRowDragOver({ originalEvent: event, data: props.rowData, index: props.index });
    };

    const onDragLeave = (event) => {
        props.onRowDragLeave({ originalEvent: event, data: props.rowData, index: props.index });
    };

    const onDragEnd = (event) => {
        props.onRowDragEnd({ originalEvent: event, data: props.rowData, index: props.index });
    };

    const onDrop = (event) => {
        props.onRowDrop({ originalEvent: event, data: props.rowData, index: props.index });
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
                index: props.index
            });
        }

        onEditChange(e, true);

        event.preventDefault();
    };

    const onEditSave = (e) => {
        const { originalEvent: event, newData } = e;
        const valid = props.rowEditValidator ? props.rowEditValidator(newData, { props: props.tableProps }) : true;

        if (props.onRowEditSave) {
            props.onRowEditSave({
                originalEvent: event,
                data: props.rowData,
                index: props.index,
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
                index: props.index
            });
        }

        onEditChange(e, false);

        event.preventDefault();
    };

    const createContent = () => {
        return props.columns.map((col, i) => {
            if (shouldRenderBodyCell(props.value, col, props.index)) {
                const key = `${getColumnProp(col, 'columnKey') || getColumnProp(col, 'field')}_${i}`;
                const rowSpan = props.rowGroupMode === 'rowspan' ? calculateRowGroupSize(props.value, col, props.index) : null;

                return (
                    <BodyCell
                        key={key}
                        value={props.value}
                        tableProps={props.tableProps}
                        tableSelector={props.tableSelector}
                        column={col}
                        rowData={props.rowData}
                        rowIndex={props.index}
                        index={i}
                        rowSpan={rowSpan}
                        dataKey={props.dataKey}
                        editing={editing}
                        editingMeta={props.editingMeta}
                        editMode={props.editMode}
                        onRowEditInit={onEditInit}
                        onRowEditSave={onEditSave}
                        onRowEditCancel={onEditCancel}
                        onEditingMetaChange={props.onEditingMetaChange}
                        onRowToggle={props.onRowToggle}
                        selection={props.selection}
                        selectionAriaLabel={props.tableProps.selectionAriaLabel}
                        allowCellSelection={props.allowCellSelection}
                        compareSelectionBy={props.compareSelectionBy}
                        selectOnEdit={props.selectOnEdit}
                        selected={props.selected}
                        onClick={props.onCellClick}
                        onMouseDown={props.onCellMouseDown}
                        onMouseUp={props.onCellMouseUp}
                        tabIndex={props.tabIndex}
                        cellClassName={props.cellClassName}
                        responsiveLayout={props.responsiveLayout}
                        frozenRow={props.frozenRow}
                        isSelectable={props.isSelectable}
                        showSelectionElement={props.showSelectionElement}
                        showRowReorderElement={props.showRowReorderElement}
                        onRadioChange={props.onRadioChange}
                        onCheckboxChange={props.onCheckboxChange}
                        expanded={props.expanded}
                        expandedRowIcon={props.expandedRowIcon}
                        collapsedRowIcon={props.collapsedRowIcon}
                        virtualScrollerOptions={props.virtualScrollerOptions}
                    />
                );
            }

            return null;
        });
    };

    const rowClassName = ObjectUtils.getPropValue(props.rowClassName, props.rowData, { props: props.tableProps });
    const className = classNames(rowClassName, {
        'p-highlight': (!props.allowCellSelection && props.selected) || props.contextMenuSelected,
        'p-highlight-contextmenu': props.contextMenuSelected,
        'p-selectable-row': props.allowRowSelection && props.isSelectable({ data: props.rowData, index: props.index }),
        'p-row-odd': props.index % 2 !== 0
    });
    const style = { height: props.virtualScrollerOptions ? props.virtualScrollerOptions.itemSize : undefined };
    const content = createContent();
    const tabIndex = getTabIndex();

    return (
        <tr
            role="row"
            tabIndex={tabIndex}
            className={className}
            style={style}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            onDoubleClick={onDoubleClick}
            onContextMenu={onRightClick}
            onTouchEnd={onTouchEnd}
            onKeyDown={onKeyDown}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDragEnd={onDragEnd}
            onDrop={onDrop}
        >
            {content}
        </tr>
    );
});

BodyRow.displayName = 'BodyRow';
