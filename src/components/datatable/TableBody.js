import React, { Component } from 'react';
import classNames from 'classnames';
import {BodyRow} from './BodyRow';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';

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
        if(targetNode === 'INPUT' || targetNode === 'BUTTON' || targetNode ==='A' || (DomHandler.hasClass(event.originalEvent.target, 'ui-clickable'))) {
            return;
        }

        if(this.props.onRowClick) {
            this.props.onRowClick(event);
        }

        if(this.props.selectionMode) {
            let rowData = event.data;
            let rowIndex = event.index;

            if(this.isMultipleSelectionMode() && event.originalEvent.shiftKey && this.anchorRowIndex !== null) {
                DomHandler.clearSelection();
                //todo: shift key
            }
            else {
                let selected = this.isSelected(rowData);
                let metaSelection = this.rowTouched ? false : this.props.metaKeySelection;
                this.anchorRowIndex = rowIndex;
                this.rangeRowIndex = rowIndex;
                let selection;

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
                            this.onRowUnselect({originalEvent: event.originalEvent, data: rowData, type: 'row'});
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
                                this.onRowUnselect({originalEvent: event.originalEvent, data: rowData, type: 'row'});
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

                this.props.onSelectionChange({originalEvent: event.originalEvent, data: selection});
            }
        }
        
        this.rowTouched = false;
    }

    onRowTouchEnd(event) {
        this.rowTouched = true;
    }

    onRowRightClick(event) {
        if(this.props.contextMenu) {
            let selectionIndex = this.findIndexInSelection(event.data);
            let selected = selectionIndex !== -1;
            let selection;

            if(!selected) {
                 if(this.isSingleSelectionMode()) {
                    selection = event.data;
                 }
                 else if(this.isMultipleSelectionMode()) {
                    selection = [event.data];
                 }

                 this.props.onSelectionChange({originalEvent: event.originalEvent, data: selection});
            }

            this.props.contextMenu.show(event.originalEvent);
            if(this.props.onContextMenuSelect) {
                this.props.onContextMenuSelect({originalEvent: event.originalEvent, data: event.data});
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
                this.onRowUnselect({originalEvent: event.originalEvent, data: rowData, type: 'radio'});
            }
        }
        else {
            selection = rowData;
            if(this.props.onRowSelect) {
                this.props.onRowSelect({originalEvent: event.originalEvent, data: rowData, type: 'radio'});
            }
        }

        this.props.onSelectionChange({originalEvent: event.originalEvent, data: selection});
    }

    onCheckboxClick(event) {
        let rowData = event.data;
        let selection;

        if(this.isSelected(rowData)) {
            let selectionIndex = this.findIndexInSelection(rowData);
            selection = this.props.selection.filter((val,i) => i !== selectionIndex);
            if(this.props.onRowSelect) {
                this.props.onRowSelect({originalEvent: event.originalEvent, data: rowData, type: 'checkbox'});
            }
        }
        else {
            selection = [...this.props.selection||[], rowData];
            if(this.props.onRowSelect) {
                this.props.onRowSelect({originalEvent: event.originalEvent, data: rowData, type: 'checkbox'});
            }
        }

        this.props.onSelectionChange({originalEvent: event.originalEvent, data: selection});
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

    equals(data1, data2) {
        return this.props.compareSelectionBy === 'equals' ? (data1 === data2) : ObjectUtils.equals(data1, data2, this.props.dataKey);
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
        let expandedRowIndex = this.findExpandedRowIndex(event.data);
        let expandedRows = this.props.expandedRows ? [...this.props.expandedRows] : [];

        if(expandedRowIndex !== -1) {
            expandedRows = expandedRows.filter((val,i) => i !== expandedRowIndex);

            if(this.props.onRowCollapse) {
                this.props.onRowCollapse({originalEvent: event, data: event.data});
            }
        }
        else {
            expandedRows.push(event.data);
           
            if(this.props.onRowExpand) {
                this.props.onRowExpand({originalEvent: event, data: event.data});
            }
        }

        this.props.onRowToggle({
            data: expandedRows
        });
    }

    findExpandedRowIndex(row) {
        let index = -1;
        if(this.props.expandedRows) {
            for(let i = 0; i < this.props.expandedRows.length; i++) {
                if(this.props.expandedRows[i] === row) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }

    isRowExpanded(row) {
        return this.findExpandedRowIndex(row) !== -1;
    }

    isSelectionEnabled() {
        if(this.props.selectionMode || this.props.frozenSelectionMode != null) {
            return true;
        }
        else {
            if(Array.isArray(this.props.children)) {
                for(let col of this.props.children) {
                    if(col.props.selectionMode)
                       return true;
                }
            }
            else {
                return this.props.children.selectionMode != null;
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
                DomHandler.removeClass(rowElement, 'ui-datatable-dragpoint-bottom');
    
                this.droppedRowIndex = index;
                if (prevRowElement)
                    DomHandler.addClass(prevRowElement, 'ui-datatable-dragpoint-bottom');
                else
                    DomHandler.addClass(rowElement, 'ui-datatable-dragpoint-top');
            } 
            else {
                if (prevRowElement)
                    DomHandler.removeClass(prevRowElement, 'ui-datatable-dragpoint-bottom');
                else
                    DomHandler.addClass(rowElement, 'ui-datatable-dragpoint-top');
    
                this.droppedRowIndex = index + 1;
                DomHandler.addClass(rowElement, 'ui-datatable-dragpoint-bottom');
            }
        }
    }

    onRowDragLeave(event) {
        let rowElement = event.rowElement;
        let prevRowElement = rowElement.previousElementSibling;
        if (prevRowElement) {
            DomHandler.removeClass(prevRowElement, 'ui-datatable-dragpoint-bottom');
        }

        DomHandler.removeClass(rowElement, 'ui-datatable-dragpoint-bottom');
        DomHandler.removeClass(rowElement, 'ui-datatable-dragpoint-top');
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
        return (
            <tr key={index + '_rowgroupheader'} className="ui-widget-header ui-rowgroup-header">
                <td colSpan={React.Children.count(this.props.children)}>
                    <span className="ui-rowgroup-header-name">
                        {this.props.rowGroupHeaderTemplate(rowData, index)}
                    </span>
                </td>
            </tr>
        );
    }
    
    renderRowGroupFooter(rowData, index) {
        return (
            <tr key={index + '_rowgroupfooter'} className="ui-widget-header ui-rowgroup-footer">
                {this.props.rowGroupFooterTemplate(rowData, index)}
            </tr>
        );
    }

    render() {
        let className = classNames('ui-datatable-data ui-widget-content', {'ui-datatable-hoverable-rows': this.props.selectionMode});
        let rows;
        let rpp = this.props.rows||0;
        let first = this.props.first||0;
        let selectionEnabled = this.isSelectionEnabled();
        let rowGroupMode = this.props.rowGroupMode;
        let hasSubheaderGrouping = (rowGroupMode && rowGroupMode === 'subheader');
        let rowSpanGrouping = (rowGroupMode && rowGroupMode === 'rowspan');

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
                let groupRowSpan;
                
                //header row group
                if(hasSubheaderGrouping) {
                    let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.props.groupField);
                    let previousRowFieldData = ObjectUtils.resolveFieldData(this.props.value[i - 1], this.props.groupField);
                    
                    if(i === 0 || (currentRowFieldData !== previousRowFieldData)) {
                        rows.push(this.renderRowGroupHeader(rowData, i));
                    }
                }
                
                if(rowSpanGrouping) {                    
                    let rowSpanIndex = i;
                    let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.props.sortField);
                    let shouldCountRowSpan = (i === 0) || ObjectUtils.resolveFieldData(this.props.value[i - 1], this.props.sortField) !== currentRowFieldData;
                    
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

                //row content
                let bodyRow = <BodyRow key={i} value={this.props.value} rowData={rowData} rowIndex={i} onClick={this.onRowClick} onDoubleClick={this.props.onRowDoubleClick} onRightClick={this.onRowRightClick} onTouchEnd={this.onRowTouchEnd} 
                            onRowToggle={this.onRowToggle} expanded={expanded} responsive={this.props.responsive}
                            onRadioClick={this.onRadioClick} onCheckboxClick={this.onCheckboxClick} selected={selected} rowClassName={this.props.rowClassName}
                            sortField={this.props.sortField} rowGroupMode={this.props.rowGroupMode} groupRowSpan={groupRowSpan}
                            onDragStart={(e) => this.onRowDragStart(e, i)} onDragEnd={this.onRowDragEnd} onDragOver={(e) => this.onRowDragOver(e, i)} onDragLeave={this.onRowDragLeave}
                            onDrop={this.onRowDrop}>{this.props.children}</BodyRow>

                rows.push(bodyRow);

                //row expansion
                if(expanded) {
                    let expandedRowContent = this.props.rowExpansionTemplate(rowData);
                    let expandedRow = <tr className="ui-widget-content" key={i + '_expanded'}><td colSpan={this.props.children.length}>{expandedRowContent}</td></tr>
                    rows.push(expandedRow);
                }
                
                //footer row group
                if(hasSubheaderGrouping) {
                    let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.props.groupField);
                    let nextRowFieldData = ObjectUtils.resolveFieldData(this.props.value[i + 1], this.props.groupField);
                    
                    if((i === this.props.value.length - 1) || (currentRowFieldData !== nextRowFieldData)) {
                        rows.push(this.renderRowGroupFooter(rowData, i));
                    }
                }
            }
        }
        else {
            rows = <tr className="ui-widget-content ui-datatable-emptymessage"><td colSpan={this.props.children.length}>{this.props.emptyMessage}</td></tr>;
        }

        return (
            <tbody className={className}>
                {rows}
            </tbody>
        );
    }
}