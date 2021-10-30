import React, { Component } from 'react';
import { DomHandler, classNames, ObjectUtils } from '../utils/Utils';
import { BodyCell } from './BodyCell';

export class BodyRow extends Component {

    constructor(props) {
        super(props);

        if (!this.props.onRowEditChange) {
            this.state = {
                editing: false
            };
        }

        this.onClick = this.onClick.bind(this);
        this.onDoubleClick = this.onDoubleClick.bind(this);
        this.onRightClick = this.onRightClick.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);

        this.onDragStart = this.onDragStart.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDrop = this.onDrop.bind(this);

        this.onEditInit = this.onEditInit.bind(this);
        this.onEditSave = this.onEditSave.bind(this);
        this.onEditCancel = this.onEditCancel.bind(this);
    }

    isFocusable() {
        return this.props.selectionMode && this.props.selectionModeInColumn !== 'single' && this.props.selectionModeInColumn !== 'multiple';
    }

    isGrouped(column) {
        if (this.props.groupRowsBy && this.getColumnProp(column, 'field')) {
            if (Array.isArray(this.props.groupRowsBy))
                return this.props.groupRowsBy.indexOf(column.props.field) > -1;
            else
                return this.props.groupRowsBy === column.props.field;
        }

        return false;
    }

    equals(data1, data2) {
        return this.props.compareSelectionBy === 'equals' ? (data1 === data2) : ObjectUtils.equals(data1, data2, this.props.dataKey);
    }

    getColumnProp(col, prop) {
        return col.props[prop];
    }

    getEditing() {
        return this.props.onRowEditChange ? this.props.editing : this.state.editing;
    }

    getTabIndex() {
        return this.isFocusable() && !this.props.allowCellSelection ? (this.props.index === 0 ? this.props.tabIndex : -1) : null;
    }

    findIndex(collection, rowData) {
        return (collection || []).findIndex(data => this.equals(rowData, data));
    }

    changeTabIndex(currentRow, nextRow) {
        if (currentRow && nextRow) {
            currentRow.tabIndex = -1;
            nextRow.tabIndex = this.props.tabIndex;
        }
    }

    findNextSelectableRow(row) {
        let nextRow = row.nextElementSibling;

        return nextRow ? (DomHandler.hasClass(nextRow, 'p-selectable-row') ? nextRow : this.findNextSelectableRow(nextRow)) : null;
    }

    findPrevSelectableRow(row) {
        let prevRow = row.previousElementSibling;

        return prevRow ? (DomHandler.hasClass(prevRow, 'p-selectable-row') ? prevRow : this.findPrevSelectableRow(prevRow)) : null;
    }

    shouldRenderBodyCell(value, column, i) {
        if (this.getColumnProp(column, 'hidden')) {
            return false;
        }
        else if (this.props.rowGroupMode && this.props.rowGroupMode === 'rowspan' && this.isGrouped(column)) {
            let prevRowData = value[i - 1];
            if (prevRowData) {
                let currentRowFieldData = ObjectUtils.resolveFieldData(value[i], this.getColumnProp(column, 'field'));
                let previousRowFieldData = ObjectUtils.resolveFieldData(prevRowData, this.getColumnProp(column, 'field'));
                return currentRowFieldData !== previousRowFieldData;
            }
        }

        return true;
    }

    calculateRowGroupSize(value, column, index) {
        if (this.isGrouped(column)) {
            let currentRowFieldData = ObjectUtils.resolveFieldData(value[index], this.getColumnProp(column, 'field'));
            let nextRowFieldData = currentRowFieldData;
            let groupRowSpan = 0;

            while (currentRowFieldData === nextRowFieldData) {
                groupRowSpan++;
                let nextRowData = value[++index];
                if (nextRowData) {
                    nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, this.getColumnProp(column, 'field'));
                }
                else {
                    break;
                }
            }

            return groupRowSpan === 1 ? null : groupRowSpan;
        }
        else {
            return null;
        }
    }

    onClick(event) {
        this.props.onRowClick({ originalEvent: event, data: this.props.rowData, index: this.props.index });
    }

    onDoubleClick(event) {
        this.props.onRowDoubleClick({ originalEvent: event, data: this.props.rowData, index: this.props.index });
    }

    onRightClick(event) {
        this.props.onRowRightClick({ originalEvent: event, data: this.props.rowData, index: this.props.index });
    }

    onTouchEnd(event) {
        this.props.onRowTouchEnd(event);
    }

    onKeyDown(event) {
        if (this.isFocusable() && !this.props.allowCellSelection) {
            const { target, currentTarget: row } = event;

            switch (event.which) {
                //down arrow
                case 40:
                    let nextRow = this.findNextSelectableRow(row);
                    if (nextRow) {
                        this.changeTabIndex(row, nextRow);
                        nextRow.focus();
                    }

                    event.preventDefault();
                    break;

                //up arrow
                case 38:
                    let prevRow = this.findPrevSelectableRow(row);
                    if (prevRow) {
                        this.changeTabIndex(row, prevRow);
                        prevRow.focus();
                    }

                    event.preventDefault();
                    break;

                //enter
                case 13: // @deprecated
                    this.onClick(event);
                    event.preventDefault();
                    break;

                //space
                case 32:
                    if (target.nodeName !== 'INPUT' && target.nodeName !== 'TEXTAREA' && !target.readOnly) {
                        this.onClick(event);
                        event.preventDefault();
                    }

                    break;

                default:
                    //no op
                    break;
            }
        }
    }

    onMouseDown(event) {
        this.props.onRowMouseDown({ originalEvent: event, data: this.props.rowData, index: this.props.index });
    }

    onMouseUp(event) {
        this.props.onRowMouseUp({ originalEvent: event, data: this.props.rowData, index: this.props.index });
    }

    onDragStart(event) {
        this.props.onRowDragStart({ originalEvent: event, data: this.props.rowData, index: this.props.index });
    }

    onDragOver(event) {
        this.props.onRowDragOver({ originalEvent: event, data: this.props.rowData, index: this.props.index });
    }

    onDragLeave(event) {
        this.props.onRowDragLeave({ originalEvent: event, data: this.props.rowData, index: this.props.index });
    }

    onDragEnd(event) {
        this.props.onRowDragEnd({ originalEvent: event, data: this.props.rowData, index: this.props.index });
    }

    onDrop(event) {
        this.props.onRowDrop({ originalEvent: event, data: this.props.rowData, index: this.props.index });
    }

    onEditChange(e, editing) {
        if (this.props.onRowEditChange) {
            let editingRows;
            const dataKey = this.props.dataKey;
            const { originalEvent, data, index } = e;

            if (dataKey) {
                let dataKeyValue = String(ObjectUtils.resolveFieldData(data, dataKey));
                editingRows = this.props.editingRows ? { ...this.props.editingRows } : {};

                if (editingRows[dataKeyValue] != null)
                    delete editingRows[dataKeyValue];
                else
                    editingRows[dataKeyValue] = true;
            }
            else {
                let editingRowIndex = this.findIndex(this.props.editingRows, data);
                editingRows = this.props.editingRows ? [...this.props.editingRows] : [];

                if (editingRowIndex !== -1)
                    editingRows = editingRows.filter((val, i) => i !== editingRowIndex);
                else
                    editingRows.push(data);
            }

            this.props.onRowEditChange({
                originalEvent,
                data: editingRows,
                index
            });
        }
        else {
            this.setState({ editing });
        }
    }

    onEditInit(e) {
        const { originalEvent: event } = e;

        if (this.props.onRowEditInit) {
            this.props.onRowEditInit({
                originalEvent: event,
                data: this.props.rowData,
                index: this.props.index
            });
        }

        this.onEditChange(e, true);

        event.preventDefault();
    }

    onEditSave(e) {
        const { originalEvent: event } = e;
        const valid = this.props.rowEditorValidator ? this.props.rowEditorValidator(this.props.rowData) : true;

        if (this.props.onRowEditSave) {
            this.props.onRowEditSave({
                originalEvent: event,
                data: this.props.rowData,
                index: this.props.index,
                valid
            });
        }

        if (valid) {
            if (this.props.onRowEditComplete) {
                this.props.onRowEditComplete(e);
            }

            this.onEditChange(e, false);
        }

        event.preventDefault();
    }

    onEditCancel(e) {
        const { originalEvent: event } = e;

        if (this.props.onRowEditCancel) {
            this.props.onRowEditCancel({
                originalEvent: event,
                data: this.props.rowData,
                index: this.props.index
            });
        }

        this.onEditChange(e, false);

        event.preventDefault();
    }

    renderContent() {
        return this.props.columns.map((col, i) => {
            if (this.shouldRenderBodyCell(this.props.value, col, this.props.index)) {
                const key = `${this.getColumnProp(col, 'columnKey') || this.getColumnProp(col, 'field')}_${i}`;
                const rowSpan = this.props.rowGroupMode === 'rowspan' ? this.calculateRowGroupSize(this.props.value, col, this.props.index) : null;
                const editing = this.getEditing();

                return (
                    <BodyCell key={key} value={this.props.value} tableProps={this.props} tableSelector={this.props.tableSelector} column={col} rowData={this.props.rowData} rowIndex={this.props.index} index={i} rowSpan={rowSpan} dataKey={this.props.dataKey}
                        editing={editing} editingMeta={this.props.editingMeta} editMode={this.props.editMode} onRowEditInit={this.onEditInit} onRowEditSave={this.onEditSave} onRowEditCancel={this.onEditCancel} onEditingMetaChange={this.props.onEditingMetaChange}
                        onRowToggle={this.props.onRowToggle} selection={this.props.selection} allowCellSelection={this.props.allowCellSelection} compareSelectionBy={this.props.compareSelectionBy} selectOnEdit={this.props.selectOnEdit} selected={this.props.selected}
                        onClick={this.props.onCellClick} onMouseDown={this.props.onCellMouseDown} onMouseUp={this.props.onCellMouseUp} tabIndex={this.props.tabIndex}
                        cellClassName={this.props.cellClassName} responsiveLayout={this.props.responsiveLayout} frozenRow={this.props.frozenRow}
                        showSelectionElement={this.props.showSelectionElement} showRowReorderElement={this.props.showRowReorderElement} onRadioChange={this.props.onRadioChange} onCheckboxChange={this.props.onCheckboxChange}
                        expanded={this.props.expanded} expandedRowIcon={this.props.expandedRowIcon} collapsedRowIcon={this.props.collapsedRowIcon}
                        virtualScrollerLoading={this.props.virtualScrollerLoading} virtualScrollerLoadingTemplate={this.props.virtualScrollerLoadingTemplate} />
                )
            }

            return null;
        })
    }

    render() {
        const rowClassName = ObjectUtils.getPropValue(this.props.rowClassName, this.props.rowData, { props: this.props });
        const className = classNames(rowClassName, {
            'p-highlight': !this.props.allowCellSelection && this.props.selected,
            'p-highlight-contextmenu': this.props.contextMenuSelected,
            'p-selectable-row': this.props.allowRowSelection,
            'p-row-odd': this.props.index % 2 !== 0
        });
        const content = this.renderContent();
        const tabIndex = this.getTabIndex();

        return (
            <tr ref={(el) => this.el = el} role="row" tabIndex={tabIndex} className={className} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}
                onClick={this.onClick} onDoubleClick={this.onDoubleClick} onContextMenu={this.onRightClick} onTouchEnd={this.onTouchEnd} onKeyDown={this.onKeyDown}
                onDragStart={this.onDragStart} onDragOver={this.onDragOver} onDragLeave={this.onDragLeave} onDragEnd={this.onDragEnd} onDrop={this.onDrop}>
                {content}
            </tr>
        )
    }
}
