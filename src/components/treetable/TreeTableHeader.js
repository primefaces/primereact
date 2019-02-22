import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';
import {InputText} from '../inputtext/InputText';

export class TreeTableHeader extends Component {

    static defaultProps = {
        columns: null,
        columnGroup: null,
        sortField: null,
        sortOrder: null,
        multiSortMeta: null,
        resizableColumns: false,
        reorderableColumns: false,
        onSort: null,
        onResizeStart: null,
        onDragStart: null,
        onDragOver: null,
        onDragLeave: null,
        onDrop: null,
        onFilter: null
    }

    static propTypes = {
        columns: PropTypes.array,
        columnGroup: PropTypes.any,
        sortField: PropTypes.string,
        sortOrder: PropTypes.number,
        multiSortMeta: PropTypes.array,
        resizableColumns: PropTypes.bool,
        reorderableColumns: PropTypes.bool,
        onSort: PropTypes.func,
        onResizeStart: PropTypes.func,
        onDragStart: PropTypes.func,
        onDragOver: PropTypes.func,
        onDragLeave: PropTypes.func,
        onDrop: PropTypes.func,
        onFilter: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.onHeaderMouseDown = this.onHeaderMouseDown.bind(this);
        this.onFilterInput = this.onFilterInput.bind(this);
    }

    onHeaderClick(event, column) {
        if (column.props.sortable) {
            const targetNode = event.target;
            if (DomHandler.hasClass(targetNode, 'p-sortable-column') || DomHandler.hasClass(targetNode, 'p-column-title') 
                || DomHandler.hasClass(targetNode, 'p-sortable-column-icon') || DomHandler.hasClass(targetNode.parentElement, 'p-sortable-column-icon')) {
                
                this.props.onSort({
                    originalEvent: event,
                    sortField: column.props.field,
                    sortFunction: column.props.sortFunction,
                    sortable: column.props.sortable
                });

                DomHandler.clearSelection();
            }
        }
    }

    onHeaderMouseDown(event) {
        if (this.props.reorderableColumns) {
            if (event.target.nodeName !== 'INPUT')
                event.currentTarget.draggable = true;
            else if (event.target.nodeName === 'INPUT')
                event.currentTarget.draggable = false;
        }
    }

    onHeaderKeyDown(event, column) {
        if (event.key === 'Enter') {
            this.onHeaderClick(event, column);
            event.preventDefault();
        }
    }

    getMultiSortMetaData(column) {
        if(this.props.multiSortMeta) {
            for(let i = 0; i < this.props.multiSortMeta.length; i++) {
                if(this.props.multiSortMeta[i].field === column.props.field) {
                    return this.props.multiSortMeta[i];
                }
            }
        }

        return null;
    }

    onResizerMouseDown(event, column) {
        if(this.props.resizableColumns && this.props.onResizeStart) {
            this.props.onResizeStart({
                originalEvent: event,
                columnEl: event.target.parentElement,
                column: column
            });
        }
    }

    onFilterInput(e, column) {
        if(column.props.filter && this.props.onFilter) {
            if(this.filterTimeout) {
                clearTimeout(this.filterTimeout);
            }

            let filterValue = e.target.value;
            this.filterTimeout = setTimeout(() => {
                this.props.onFilter({
                    value: filterValue,
                    field: column.props.field,
                    matchMode: column.props.filterMatchMode
                });
                this.filterTimeout = null;            
            }, this.filterDelay);
        }
    }

    renderSortIcon(column, sorted, sortOrder) {
        if (column.props.sortable) {
            const sortIcon = sorted ? sortOrder < 0 ? 'pi-sort-down' : 'pi-sort-up': 'pi-sort';
            const sortIconClassName = classNames('p-sortable-column-icon', 'pi pi-fw', sortIcon);

            return (
                <span className={sortIconClassName}></span>
            );
        }
        else {
            return null;
        }
    }

    renderResizer(column) {
        if (this.props.resizableColumns) {
            return (
                <span className="p-column-resizer p-clickable" onMouseDown={e => this.onResizerMouseDown(e, column)} />
            );
        }
        else {
            return null;
        }
    }

    renderHeaderCell(column, index) {
        const multiSortMetaData = this.getMultiSortMetaData(column);
        const singleSorted = (column.props.field === this.props.sortField);
        const multipleSorted = multiSortMetaData !== null;
        const sorted = column.props.sortable && (singleSorted || multipleSorted);
        let sortOrder = 0;
        let filterElement;

        if(singleSorted) 
            sortOrder = this.props.sortOrder;
        else if(multipleSorted) 
            sortOrder = multiSortMetaData.order;

        const sortIconElement = this.renderSortIcon(column, sorted, sortOrder);

        const className = classNames(column.props.headerClassName||column.props.className, {
            'p-sortable-column': column.props.sortable, 
            'p-highlight': sorted, 
            'p-resizable-column': this.props.resizableColumns
        });

        if(column.props.filter) {
            filterElement = column.props.filterElement||<InputText onInput={(e) => this.onFilterInput(e, column)} type={this.props.filterType} defaultValue={this.props.filters && this.props.filters[this.props.field] ? this.props.filters[this.props.field].value : null}
                    className="p-column-filter" placeholder={column.props.filterPlaceholder} maxLength={column.props.filterMaxLength}/>;
        }

        const resizer = this.renderResizer(column);
        
        return (
            <th key={column.field||index} className={className} style={column.props.headerStyle||column.props.style} tabIndex={column.props.sortable ? this.props.tabIndex: null}
                onClick={e => this.onHeaderClick(e, column)} onMouseDown={this.onHeaderMouseDown} onKeyDown={e => this.onHeaderKeyDown(e, column)} 
                rowSpan={column.props.rowSpan} colSpan={column.props.colSpan}
                onDragStart={this.props.onDragStart} onDragOver={this.props.onDragOver} onDragLeave={this.props.onDragLeave} onDrop={this.props.onDrop}>
                {resizer}
                <span className="p-column-title">{column.props.header}</span>
                {sortIconElement}
                {filterElement}
            </th>
        );
    }

    renderHeaderRow(row, index) {
        const rowColumns = React.Children.toArray(row.props.children);
        const rowHeaderCells = rowColumns.map((col, index) => this.renderHeaderCell(col, index));
        
        return (
            <tr key={index}>{rowHeaderCells}</tr>
        )
    }

    renderColumnGroup() {
        let rows = React.Children.toArray(this.props.columnGroup.props.children);

        return (
            rows.map((row, i) => this.renderHeaderRow(row, i))
        );
    }

    renderColumns(columns) {
        if (columns) {
            const headerCells = columns.map((col, index) => this.renderHeaderCell(col, index));
            return (
                <tr>{headerCells}</tr>
            );
        }
        else {
            return null;
        }
    }

    render() {
        const content = this.props.columnGroup ? this.renderColumnGroup() : this.renderColumns(this.props.columns);

        return (
            <thead className="p-treetable-thead">
                {content}
            </thead>
        );
    }
}