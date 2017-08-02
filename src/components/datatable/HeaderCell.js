import React, { Component } from 'react';
import {InputText} from '../inputtext/InputText';
import classNames from 'classnames';

export class HeaderCell extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onFilterInput = this.onFilterInput.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
    }

    onClick(e) {
        if(this.props.sortable) {
            this.props.onSort({
                originalEvent: e,
                sortField: this.props.field
            });
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

    onMouseDown(event) {
        if(this.props.resizableColumns && this.props.onColumnResizeStart) {
            this.props.onColumnResizeStart({
                originalEvent: event,
                columnEl: event.target.parentElement
            });
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
        let resizer = this.props.resizableColumns && <span className="ui-column-resizer ui-clickable" onMouseDown={this.onMouseDown}></span>;

        if(singleSorted) 
            sortOrder = this.props.sortOrder;
        else if(multipleSorted) 
            sortOrder = multiSortMetaData.order;

        let sorted = this.props.sortable && (singleSorted || multipleSorted);
        let className = classNames('ui-state-default ui-unselectable-text', 
                        {'ui-sortable-column': this.props.sortable, 'ui-state-active': sorted, 'ui-resizable-column': this.props.resizableColumns}, this.props.className);

        if(this.props.sortable) {
            var sortIcon = sorted ? sortOrder < 0 ? 'fa-sort-desc' : 'fa-sort-asc': 'fa-sort';
            var sortIconClassName = classNames('ui-sortable-column-icon fa fa-fw', sortIcon);
        }

        if(this.props.filter) {
            var filterElement = <InputText onInput={this.onFilterInput} className="ui-column-filter" />;
        }

        return (
            <th className={className} style={this.props.style} onClick={this.onClick} 
                colSpan={this.props.colSpan} rowSpan={this.props.rowSpan}>
                {resizer}
               <span className="ui-column-title">{this.props.header}</span>
               <span className={sortIconClassName}></span>
                {filterElement}
            </th>
        );
    }
}