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

        this.state = {
            badgeVisible: false
        }

        this.onFilterInput = this.onFilterInput.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            badgeVisible: nextProps.multiSortMeta && nextProps.multiSortMeta.length > 1
        }
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

    onHeaderMouseDown(event, column) {
        if (this.props.reorderableColumns && column.props.reorderable) {
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

    getMultiSortMetaDataIndex(column) {
        if(this.props.multiSortMeta) {
            for(let i = 0; i < this.props.multiSortMeta.length; i++) {
                if(this.props.multiSortMeta[i].field === column.props.field) {
                    return i;
                }
            }
        }

        return -1;
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

    hasColumnFilter(columns) {
        if (columns) {
            for (let col of columns) {
                if (col.props.filter) {
                    return true;
                }
            }
        }

        return false;
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

    getAriaSort(column, sorted, sortOrder) {
        if (column.props.sortable) {
            let sortIcon = sorted ? sortOrder < 0 ? 'pi-sort-down' : 'pi-sort-up': 'pi-sort';
            if (sortIcon === 'pi-sort-down')
                return 'descending';
            else if (sortIcon === 'pi-sort-up')
                return 'ascending';
            else
                return 'none';
        }
        else {
            return null;
        }
    }

    renderSortBadge(sortMetaDataIndex) {
        if (sortMetaDataIndex !== -1 && this.state.badgeVisible) {
            return <span className="p-sortable-column-badge">{sortMetaDataIndex + 1}</span>;
        }

        return null;
    }

    renderHeaderCell(column, options) {
        let filterElement;

        if (column.props.filter && options.renderFilter) {
            filterElement = column.props.filterElement||<InputText onInput={(e) => this.onFilterInput(e, column)} type={this.props.filterType} defaultValue={this.props.filters && this.props.filters[column.props.field] ? this.props.filters[column.props.field].value : null}
                    className="p-column-filter" placeholder={column.props.filterPlaceholder} maxLength={column.props.filterMaxLength}/>;
        }

        if (options.filterOnly) {
            return (
                <th key={column.props.columnKey||column.props.field||options.index} className={classNames('p-filter-column', column.props.filterHeaderClassName)} style={column.props.filterHeaderStyle||column.props.style}
                    rowSpan={column.props.rowSpan} colSpan={column.props.colSpan}>
                    {filterElement}
                </th>
            );
        }
        else {
            const sortMetaDataIndex = this.getMultiSortMetaDataIndex(column);
            const multiSortMetaData = sortMetaDataIndex !== -1 ? this.props.multiSortMeta[sortMetaDataIndex] : null;
            const singleSorted = (column.props.field === this.props.sortField);
            const multipleSorted = multiSortMetaData !== null;
            const sorted = column.props.sortable && (singleSorted || multipleSorted);
            let sortOrder = 0;

            if(singleSorted)
                sortOrder = this.props.sortOrder;
            else if(multipleSorted)
                sortOrder = multiSortMetaData.order;

            const sortIconElement = this.renderSortIcon(column, sorted, sortOrder);
            let ariaSortData = this.getAriaSort(column, sorted, sortOrder);
            let sortBadge = this.renderSortBadge(sortMetaDataIndex);

            const className = classNames(column.props.headerClassName||column.props.className, {
                'p-sortable-column': column.props.sortable,
                'p-highlight': sorted,
                'p-resizable-column': this.props.resizableColumns
            });

            const resizer = this.renderResizer(column);

            return (
                <th key={column.columnKey||column.field||options.index} className={className} style={column.props.headerStyle||column.props.style} tabIndex={column.props.sortable ? this.props.tabIndex: null}
                    onClick={e => this.onHeaderClick(e, column)} onMouseDown={e => this.onHeaderMouseDown(e, column)} onKeyDown={e => this.onHeaderKeyDown(e, column)}
                    rowSpan={column.props.rowSpan} colSpan={column.props.colSpan} aria-sort={ariaSortData}
                    onDragStart={this.props.onDragStart} onDragOver={this.props.onDragOver} onDragLeave={this.props.onDragLeave} onDrop={this.props.onDrop}>
                    {resizer}
                    <span className="p-column-title">{column.props.header}</span>
                    {sortIconElement}
                    {sortBadge}
                    {filterElement}
                </th>
            );
        }
    }

    renderHeaderRow(row, index) {
        const rowColumns = React.Children.toArray(row.props.children);
        const rowHeaderCells = rowColumns.map((col, i) => this.renderHeaderCell(col, {index: i, filterOnly: false, renderFilter: true}));

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
            if (this.hasColumnFilter(columns)) {
                return (
                    <>
                        <tr>{columns.map((col, i) => this.renderHeaderCell(col, {index: i, filterOnly: false, renderFilter: false}))}</tr>
                        <tr>{columns.map((col, i) => this.renderHeaderCell(col, {index: i, filterOnly: true, renderFilter: true}))}</tr>
                    </>
                );
            }
            else {
                return (
                    <tr>{columns.map((col, i) => this.renderHeaderCell(col, {index: i, filterOnly: false, renderFilter: false}))}</tr>
                );
            }            
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
