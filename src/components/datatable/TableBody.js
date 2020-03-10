import React, { Component } from 'react';
import {BodyRow} from './BodyRow';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import { RowTogglerButton } from './RowTogglerButton';

export class TableBody extends Component {

    constructor(props) {
        super(props);
        this.onRowClick = this.onRowClick.bind(this);
        this.onRowRightClick = this.onRowRightClick.bind(this);
        this.onRowTouchEnd = this.onRowTouchEnd.bind(this);
        this.onRowToggle = this.onRowToggle.bind(this);
        this.onRadioClick = this.onRadioClick.bind(this);
        this.onCheckboxClick = this.onCheckboxClick.bind(this);
        this.onRowDragEnd = this.onRowDragEnd.bind(this);
        this.onRowDragLeave = this.onRowDragLeave.bind(this);
        this.onRowDrop = this.onRowDrop.bind(this);
    }

    onRowClick(event) {
        let targetNode = event.originalEvent.target.nodeName;
        if(targetNode === 'INPUT' || targetNode === 'BUTTON' || targetNode ==='A' || (DomHandler.hasClass(event.originalEvent.target, 'p-clickable'))) {
            return;
        }

        if(this.props.onRowClick) {
            this.props.onRowClick(event);
        }

        if(this.props.selectionMode) {
            let rowData = event.data;
            let rowIndex = event.index;
            let selection;

            if(this.isMultipleSelectionMode() && event.originalEvent.shiftKey && this.anchorRowIndex !== null) {
                DomHandler.clearSelection();
                this.rangeRowIndex = rowIndex;
                selection = this.selectRange(event);
            }
            else {
                let selected = this.isSelected(rowData);
                let metaSelection = this.rowTouched ? false : this.props.metaKeySelection;
                this.anchorRowIndex = rowIndex;
                this.rangeRowIndex = rowIndex;

                if(metaSelection) {
                    let metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;

                    if(selected && metaKey) {
                        if(this.isSingleSelectionMode()) {
                            selection = null;
                        }
                        else {
                            let selectionIndex = this.findIndexInSelection(rowData);
                            selection = this.props.selection.filter((val,i) => i !== selectionIndex);
                        }

                        if(this.props.onRowUnselect) {
                            this.props.onRowUnselect({originalEvent: event.originalEvent, data: rowData, type: 'row'});
                        }
                    }
                    else {
                        if(this.isSingleSelectionMode()) {
                            selection = rowData;
                        }
                        else if(this.isMultipleSelectionMode()) {
                            if(metaKey)
                                selection = this.props.selection ? [...this.props.selection] : [];
                            else
                                selection = [];

                            selection = [...selection, rowData];
                        }

                        if(this.props.onRowSelect) {
                            this.props.onRowSelect({originalEvent: event.originalEvent, data: rowData, type: 'row'});
                        }
                    }
                }
                else {
                    if(this.isSingleSelectionMode()) {
                        if(selected) {
                            selection = null;
                            if(this.props.onRowUnselect) {
                                this.props.onRowUnselect({originalEvent: event.originalEvent, data: rowData, type: 'row'});
                            }
                        }
                        else {
                            selection = rowData;
                            if(this.props.onRowSelect) {
                                this.props.onRowSelect({originalEvent: event.originalEvent, data: rowData, type: 'row'});
                            }
                        }
                    }
                    else {
                        if(selected) {
                            let selectionIndex = this.findIndexInSelection(rowData);
                            selection = this.props.selection.filter((val,i) => i !== selectionIndex);
                            if(this.props.onRowSelect) {
                                this.props.onRowSelect({originalEvent: event.originalEvent, data: rowData, type: 'row'});
                            }
                        }
                        else {
                            selection = [...this.props.selection||[], rowData];
                            if(this.props.onRowSelect) {
                                this.props.onRowSelect({originalEvent: event.originalEvent, data: rowData, type: 'row'});
                            }
                        }
                    }
                }
            }

            if(this.props.onSelectionChange) {
                this.props.onSelectionChange({
                    originalEvent: event.originalEvent,
                    value: selection
                });
            }
        }

        this.rowTouched = false;
    }

    selectRange(event) {
        let rangeStart, rangeEnd;

        if (this.rangeRowIndex > this.anchorRowIndex) {
            rangeStart = this.anchorRowIndex;
            rangeEnd = this.rangeRowIndex;
        }
        else if(this.rangeRowIndex < this.anchorRowIndex) {
            rangeStart = this.rangeRowIndex;
            rangeEnd = this.anchorRowIndex;
        }
        else {
            rangeStart = this.rangeRowIndex;
            rangeEnd = this.rangeRowIndex;
        }

        if (this.props.lazy && this.props.paginator) {
            rangeStart -= this.first;
            rangeEnd -= this.first;
        }

        const value = this.props.value;
        let selection = [];
        for(let i = rangeStart; i <= rangeEnd; i++) {
            let rangeRowData = value[i];
            selection.push(rangeRowData);

            if(this.props.onRowSelect) {
                this.props.onRowSelect({originalEvent: event.originalEvent, data: rangeRowData, type: 'row'});
            }
        }

        return selection;
    }

    onRowTouchEnd(event) {
        this.rowTouched = true;
    }

    onRowRightClick(event) {
        if (this.props.onContextMenu) {
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
                    value: this.props.node
                });
            }

            event.originalEvent.preventDefault();
        }
    }

    onRadioClick(event) {
        let rowData = event.data;
        let selection;

        if(this.isSelected(rowData)) {
            selection = null;
            if(this.props.onRowUnselect) {
                this.props.onRowUnselect({originalEvent: event.originalEvent, data: rowData, type: 'radio'});
            }
        }
        else {
            selection = rowData;
            if(this.props.onRowSelect) {
                this.props.onRowSelect({originalEvent: event.originalEvent, data: rowData, type: 'radio'});
            }
        }

        if(this.props.onSelectionChange) {
            this.props.onSelectionChange({
                originalEvent: event.originalEvent,
                value: selection
            });
        }
    }

    onCheckboxClick(event) {
        let rowData = event.data;
        let selection;

        if(this.isSelected(rowData)) {
            let selectionIndex = this.findIndexInSelection(rowData);
            selection = this.props.selection.filter((val,i) => i !== selectionIndex);
            if(this.props.onRowUnselect) {
                this.props.onRowUnselect({originalEvent: event.originalEvent, data: rowData, type: 'checkbox'});
            }
        }
        else {
            selection = [...this.props.selection||[], rowData];
            if(this.props.onRowSelect) {
                this.props.onRowSelect({originalEvent: event.originalEvent, data: rowData, type: 'checkbox'});
            }
        }

        if(this.props.onSelectionChange) {
            this.props.onSelectionChange({
                originalEvent: event.originalEvent,
                value: selection
            });
        }
    }

    isSingleSelectionMode() {
        return this.props.selectionMode === 'single';
    }

    isMultipleSelectionMode() {
        return this.props.selectionMode === 'multiple';
    }

    isSelected(rowData) {
        if(rowData && this.props.selection) {
            if(this.props.selection instanceof Array)
                return this.findIndexInSelection(rowData) > -1;
            else
                return this.equals(rowData, this.props.selection);
        }

        return false;
    }

    isContextMenuSelected(rowData) {
        if(rowData && this.props.contextMenuSelection) {
            return this.equals(rowData, this.props.contextMenuSelection);
        }

        return false;
    }

    equals(data1, data2) {
        return this.compareSelectionBy === 'equals' ? (data1 === data2) : ObjectUtils.equals(data1, data2, this.props.dataKey);
    }

    findIndexInSelection(rowData) {
        let index = -1;
        if(this.props.selection) {
            for(let i = 0; i  < this.props.selection.length; i++) {
                if(this.equals(rowData, this.props.selection[i])) {
                    index = i;
                    break;
                }
            }
        }

        return index;
    }

    onRowToggle(event) {
        let expandedRows;
        let dataKey = this.props.dataKey;

        if (dataKey) {
            let dataKeyValue = String(ObjectUtils.resolveFieldData(event.data, dataKey));
            expandedRows = this.props.expandedRows ? {...this.props.expandedRows} : {};

            if (expandedRows[dataKeyValue] != null) {
                delete expandedRows[dataKeyValue];
                if (this.props.onRowCollapse) {
                    this.props.onRowCollapse({originalEvent: event, data: event.data});
                }
            }
            else {
                expandedRows[dataKeyValue] = true;
                if (this.props.onRowExpand) {
                    this.props.onRowExpand({originalEvent: event, data: event.data});
                }
            }
        }
        else {
            let expandedRowIndex = this.findExpandedRowIndex(event.data);
            expandedRows = this.props.expandedRows ? [...this.props.expandedRows] : [];

            if (expandedRowIndex !== -1) {
                expandedRows = expandedRows.filter((val,i) => i !== expandedRowIndex);
                if (this.props.onRowCollapse) {
                    this.props.onRowCollapse({originalEvent: event, data: event.data});
                }
            }
            else {
                expandedRows.push(event.data);
                if (this.props.onRowExpand) {
                    this.props.onRowExpand({originalEvent: event, data: event.data});
                }
            }
        }

        if (this.props.onRowToggle) {
            this.props.onRowToggle({
                data: expandedRows
            });
        }
    }

    findExpandedRowIndex(row) {
        let index = -1;
        if(this.props.expandedRows) {
            for(let i = 0; i < this.props.expandedRows.length; i++) {
                if(ObjectUtils.equals(this.props.expandedRows[i], row)) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }

    isRowExpanded(row) {
        let dataKey = this.props.dataKey;

        if (dataKey) {
            let dataKeyValue = String(ObjectUtils.resolveFieldData(row, dataKey));

            return this.props.expandedRows && this.props.expandedRows[dataKeyValue] != null;
        }
        else {
            return this.findExpandedRowIndex(row) !== -1
        }
    }

    isSelectionEnabled() {
        if(this.props.selectionMode || this.props.frozenSelectionMode != null) {
            return true;
        }
        else {
            if(Array.isArray(this.props.children)) {
                for(let i = 0; i < this.props.children.length; i++) {
                    if(this.props.children[i].props.selectionMode) {
                        return true;
                    }
                }
            }
            else {
                return this.props.children && this.props.children.selectionMode != null;
            }
        }

        return false;
    }

    onRowDragStart(event, index) {
        this.rowDragging = true;
        this.draggedRowIndex = index;
        event.dataTransfer.setData('text', 'b');    // For firefox
    }

    onRowDragEnd(event, index) {
        this.rowDragging = false;
        this.draggedRowIndex = null;
        this.droppedRowIndex = null;
    }

    onRowDragOver(event, index) {
        if (this.rowDragging && this.draggedRowIndex !== index) {
            let rowElement = event.rowElement;
            let rowY = DomHandler.getOffset(rowElement).top + DomHandler.getWindowScrollTop();
            let pageY = event.originalEvent.pageY;
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
    }

    onRowDragLeave(event) {
        let rowElement = event.rowElement;
        let prevRowElement = rowElement.previousElementSibling;
        if (prevRowElement) {
            DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');
        }

        DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');
        DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-top');
    }

    onRowDrop(event) {
        if (this.droppedRowIndex != null) {
            let dropIndex = (this.draggedRowIndex > this.droppedRowIndex) ? this.droppedRowIndex : (this.droppedRowIndex === 0) ? 0 : this.droppedRowIndex - 1;
            let val = [...this.props.value];
            ObjectUtils.reorderArray(val, this.draggedRowIndex, dropIndex);

            if(this.props.onRowReorder) {
                this.props.onRowReorder({
                    originalEvent: event,
                    value: val,
                    dragIndex: this.draggedRowIndex,
                    dropIndex: this.droppedRowIndex
                })
            }
        }

        //cleanup
        this.onRowDragLeave(event);
        this.onRowDragEnd(event);
    }

    renderRowGroupHeader(rowData, index) {
        let content = null;

        if (this.props.rowGroupMode === 'subheader' && this.props.expandableRowGroups) {
            content = <RowTogglerButton onClick={this.onRowToggle} rowData={rowData} expanded={this.isRowExpanded(rowData)}/>
        }

        return (
            <tr key={index + '_rowgroupheader'} className="p-rowgroup-header">
                <td colSpan={React.Children.count(this.props.children)}>
                    { content }
                    <span className="p-rowgroup-header-name">
                        {this.props.rowGroupHeaderTemplate(rowData, index)}
                    </span>
                </td>
            </tr>
        );
    }

    renderRowGroupFooter(rowData, index) {
        return (
            <tr key={index + '_rowgroupfooter'} className="p-rowgroup-footer">
                {this.props.rowGroupFooterTemplate(rowData, index)}
            </tr>
        );
    }

    render() {
        let rows;
        let rpp = this.props.rows||0;
        let first = this.props.first||0;
        let selectionEnabled = this.isSelectionEnabled();
        let rowGroupMode = this.props.rowGroupMode;
        let hasSubheaderGrouping = (rowGroupMode && rowGroupMode === 'subheader');
        let rowSpanGrouping = (rowGroupMode && rowGroupMode === 'rowspan');
        let rowGroupHeaderExpanded = false;

        if(this.props.value && this.props.value.length) {
            rows = [];
            let startIndex = this.props.lazy ? 0 : first;
            let endIndex = this.props.virtualScroll ? (startIndex + rpp * 2) : (startIndex + rpp||this.props.value.length);

            for(let i = startIndex; i < endIndex; i++) {
                if(i >= this.props.value.length) {
                    break;
                }

                let rowData = this.props.value[i];
                let expanded = this.isRowExpanded(rowData);
                let selected = selectionEnabled ? this.isSelected(this.props.value[i]) : false;
                let contextMenuSelected = this.isContextMenuSelected(rowData);
                let groupRowSpan;

                //header row group
                if(hasSubheaderGrouping) {
                    let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.props.groupField);
                    let previousRowFieldData = ObjectUtils.resolveFieldData(this.props.value[i - 1], this.props.groupField);

                    if(i === 0 || (currentRowFieldData !== previousRowFieldData)) {
                        rows.push(this.renderRowGroupHeader(rowData, i));
                        rowGroupHeaderExpanded = expanded;
                    }
                }

                if(rowSpanGrouping) {
                    let rowSpanIndex = i;
                    let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.props.sortField);
                    let shouldCountRowSpan = (i === startIndex) || ObjectUtils.resolveFieldData(this.props.value[i - 1], this.props.sortField) !== currentRowFieldData ;

                    if(shouldCountRowSpan) {
                        let nextRowFieldData = currentRowFieldData;
                        groupRowSpan = 0;

                        while(currentRowFieldData === nextRowFieldData) {
                            groupRowSpan++;
                            let nextRowData = this.props.value[++rowSpanIndex];
                            if(nextRowData) {
                                nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, this.props.sortField);
                            }
                            else {
                                break;
                            }
                        }
                    }
                }

                let isRowGroupExpanded = this.props.expandableRowGroups && hasSubheaderGrouping && rowGroupHeaderExpanded;
                if (!this.props.expandableRowGroups || isRowGroupExpanded) {
                    //row content
                    let bodyRow = <BodyRow key={i} value={this.props.value} rowData={rowData} rowIndex={i} onClick={this.onRowClick} onDoubleClick={this.props.onRowDoubleClick} onRightClick={this.onRowRightClick} onTouchEnd={this.onRowTouchEnd}
                                        onRowToggle={this.onRowToggle} expanded={expanded} responsive={this.props.responsive} selectionMode={this.props.selectionMode}
                                        onRadioClick={this.onRadioClick} onCheckboxClick={this.onCheckboxClick} selected={selected} contextMenuSelected={contextMenuSelected} rowClassName={this.props.rowClassName}
                                        sortField={this.props.sortField} rowGroupMode={this.props.rowGroupMode} groupRowSpan={groupRowSpan}
                                        onDragStart={(e) => this.onRowDragStart(e, i)} onDragEnd={this.onRowDragEnd} onDragOver={(e) => this.onRowDragOver(e, i)} onDragLeave={this.onRowDragLeave}
                                        onDrop={this.onRowDrop} virtualScroll={this.props.virtualScroll} virtualRowHeight={this.props.virtualRowHeight}
                                        editMode={this.props.editMode} rowEditorValidator={this.props.rowEditorValidator} onRowEditInit={this.props.onRowEditInit} onRowEditSave={this.props.onRowEditSave} onRowEditCancel={this.props.onRowEditCancel}
                                        showRowReorderElement={this.props.showRowReorderElement} showSelectionElement={this.props.showSelectionElement}>
                                        {this.props.children}
                                </BodyRow>

                    rows.push(bodyRow);
                }

                //row expansion
                if(expanded && !(hasSubheaderGrouping && this.props.expandableRowGroups)) {
                    let expandedRowContent = this.props.rowExpansionTemplate(rowData);
                    let expandedRow = <tr key={i + '_expanded'}><td colSpan={this.props.children.length}>{expandedRowContent}</td></tr>
                    rows.push(expandedRow);
                }

                //footer row group
                if(hasSubheaderGrouping && (!this.props.expandableRowGroups || isRowGroupExpanded)) {
                    let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.props.groupField);
                    let nextRowFieldData = ObjectUtils.resolveFieldData(this.props.value[i + 1], this.props.groupField);

                    if((i === this.props.value.length - 1) || (currentRowFieldData !== nextRowFieldData)) {
                        rows.push(this.renderRowGroupFooter(rowData, i));
                    }
                }
            }
        }
        else {
            let emptyMessage = this.props.emptyMessage;

            rows = !this.props.loading && emptyMessage ?
                <tr className="p-datatable-emptymessage">
                    <td colSpan={this.props.children.length}>
                        {
                            (typeof emptyMessage === 'function') ? emptyMessage(this.props.frozen) : emptyMessage
                        }
                        </td>
                </tr> : null;
        }

        return (
            <tbody className="p-datatable-tbody">
                {rows}
            </tbody>
        );
    }
}
