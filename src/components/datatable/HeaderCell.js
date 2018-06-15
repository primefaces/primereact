import React, { Component } from 'react';
import {InputText} from '../inputtext/InputText';
import classNames from 'classnames';
import {RowCheckbox} from './RowCheckbox';
import DomHandler from '../utils/DomHandler';

export class HeaderCell extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onFilterInput = this.onFilterInput.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onResizerMouseDown = this.onResizerMouseDown.bind(this);
    }

    onClick(e) {
        if(this.props.sortable) {
            let targetNode = e.target;
            if(DomHandler.hasClass(targetNode, 'ui-sortable-column') || DomHandler.hasClass(targetNode, 'ui-column-title') || DomHandler.hasClass(targetNode, 'ui-sortable-column-icon')) {
                this.props.onSort({
                    originalEvent: e,
                    sortField: this.props.field,
                    sortFunction: this.props.sortFunction,
                    sortable: this.props.sortable
                });
            }
        }
    }

    onFilterInput(e) {
        if(this.props.filter && this.props.onFilter) {
            if(this.filterTimeout) {
                clearTimeout(this.filterTimeout);
            }

            let filterValue = e.target.value;
            this.filterTimeout = setTimeout(() => {
                this.props.onFilter({
                    value: filterValue,
                    field: this.props.field,
                    matchMode: this.props.filterMatchMode
                });
                this.filterTimeout = null;            
            }, this.filterDelay);
        }
    }

    onResizerMouseDown(event) {
        if(this.props.resizableColumns && this.props.onColumnResizeStart) {
            this.props.onColumnResizeStart({
                originalEvent: event,
                columnEl: event.target.parentElement
            });
        }
    }

    onMouseDown(event) {
        if (this.props.reorderableColumns) {
            if (event.target.nodeName !== 'INPUT')
                this.el.draggable = true;
            else if (event.target.nodeName === 'INPUT')
                this.el.draggable = false;
        }
    }

    getMultiSortMetaData() {
        if(this.props.multiSortMeta) {
            for(let i = 0; i < this.props.multiSortMeta.length; i++) {
                if(this.props.multiSortMeta[i].field === this.props.field) {
                    return this.props.multiSortMeta[i];
                }
            }
        }

        return null;
    }

    render() {
        let multiSortMetaData = this.getMultiSortMetaData();
        let singleSorted = (this.props.field === this.props.sortField);
        let multipleSorted = multiSortMetaData !== null;
        let sortOrder = 0;
        let resizer = this.props.resizableColumns && <span className="ui-column-resizer ui-clickable" onMouseDown={this.onResizerMouseDown}></span>;
        let sortIconElement, filterElement, headerCheckbox;

        if(singleSorted) 
            sortOrder = this.props.sortOrder;
        else if(multipleSorted) 
            sortOrder = multiSortMetaData.order;

        let sorted = this.props.sortable && (singleSorted || multipleSorted);
        let className = classNames('ui-state-default ui-unselectable-text', 
                        {'ui-sortable-column': this.props.sortable, 
                        'ui-state-active': sorted, 
                        'ui-resizable-column': this.props.resizableColumns,
                        'ui-selection-column': this.props.selectionMode}, this.props.headerClassName||this.props.className);

        if(this.props.sortable) {
            var sortIcon = sorted ? sortOrder < 0 ? 'pi-sort-down' : 'pi-sort-up': 'pi-sort';
            sortIconElement = <span className={classNames('ui-sortable-column-icon pi pi-fw', sortIcon)}></span>;
        }

        if(this.props.filter) {
            filterElement = this.props.filterElement||<InputText onInput={this.onFilterInput} type={this.props.filterType} defaultValue={this.props.filters && this.props.filters[this.props.field] ? this.props.filters[this.props.field].value : null}
                        className="ui-column-filter" placeholder={this.props.filterPlaceholder} maxLength={this.props.filterMaxLength} />;
        }

        if(this.props.selectionMode === 'multiple') {
            headerCheckbox = <RowCheckbox onClick={this.props.onHeaderCheckboxClick} selected={this.props.headerCheckboxSelected}/>;
        }

        return (
            <th ref={(el) => this.el = el} 
                className={className} style={this.props.headerStyle||this.props.style} onClick={this.onClick} onMouseDown={this.onMouseDown}
                colSpan={this.props.colSpan} rowSpan={this.props.rowSpan}
                onDragStart={this.props.onDragStart} onDragOver={this.props.onDragOver} onDragLeave={this.props.onDragLeave} onDrop={this.props.onDrop}>
                {resizer}
                <span className="ui-column-title">{this.props.header}</span>
                {sortIconElement}
                {filterElement}
                {headerCheckbox}
            </th>
        );
    }
}