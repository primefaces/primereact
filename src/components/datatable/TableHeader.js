import React, { Component } from 'react';
import {HeaderCell} from './HeaderCell';

export class TableHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sortableDisabledFields: [],
            allSortableDisabled: false
        }

        this.onSortableChange = this.onSortableChange.bind(this);
    }

    createHeaderCells(columns, renderOptions) {
        return React.Children.map(columns, (column, i) => {
            return <HeaderCell key={column.props.columnKey||column.props.field||i} allSortableDisabled={this.isAllSortableDisabled()} onSortableChange={this.onSortableChange} columnProps={column.props} value={this.props.value} onSort={this.props.onSort}
                        sortableDisabledFields={this.state.sortableDisabledFields} sortMode={this.props.sortMode} sortField={this.props.sortField} sortOrder={this.props.sortOrder} multiSortMeta={this.props.multiSortMeta}
                        resizableColumns={this.props.resizableColumns} onColumnResizeStart={this.props.onColumnResizeStart} filterDelay={this.props.filterDelay}
                        onFilter={this.props.onFilter} renderOptions={renderOptions} onHeaderCheckboxClick={this.props.onHeaderCheckboxClick} headerCheckboxSelected={this.props.headerCheckboxSelected}
                        reorderableColumns={this.props.reorderableColumns} onDragStart={this.props.onColumnDragStart} onDragOver={this.props.onColumnDragOver}
                        onDragLeave={this.props.onColumnDragLeave} onDrop={this.props.onColumnDrop} filters={this.props.filters} tabIndex={this.props.tabIndex} />;
        });
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

    isSingleSort() {
        return this.props.sortMode === 'single';
    }

    isMultipleSort() {
        return this.props.sortMode === 'multiple';
    }

    isAllSortableDisabled() {
        return this.isSingleSort() && this.state.allSortableDisabled;
    }

    isColumnSorted(column) {
        return this.props.sortField !== null ? (column.props.field === this.props.sortField || column.props.sortField === this.props.sortField) : false;
    }

    updateSortableDisabled() {
        if (this.isSingleSort() || (this.isMultipleSort() && this.props.onSort)) {
            let sortableDisabledFields = [];
            let allSortableDisabled = false;
            React.Children.forEach(this.props.children, (column) => {
                if (column.props.sortableDisabled) {
                    sortableDisabledFields.push(column.props.sortField || column.props.field);

                    if (!allSortableDisabled && this.isColumnSorted(column)) {
                        allSortableDisabled = true;
                    }
                }
            });

            this.setState({
                sortableDisabledFields,
                allSortableDisabled
            });
        }
    }

    onSortableChange() {
        this.updateSortableDisabled();
    }

    componentDidMount() {
        this.updateSortableDisabled();
    }

    render() {
        let content;
        if (this.props.columnGroup) {
            let rows = React.Children.toArray(this.props.columnGroup.props.children);
            content = rows.map((row, i) => {
                return <tr key={i} role="row">{this.createHeaderCells(React.Children.toArray(row.props.children), {filterOnly: false, renderFilter: true, renderHeaderCheckbox: true})}</tr>;
            });
        }
        else {
            let columns = React.Children.toArray(this.props.children);

            if (this.hasColumnFilter(columns)) {
                content = (
                    <>
                        <tr role="row">{this.createHeaderCells(columns, {filterOnly: false, renderFilter: false, renderHeaderCheckbox: false})}</tr>
                        <tr role="row">{this.createHeaderCells(columns, {filterOnly: true, renderFilter: true, renderHeaderCheckbox: true})}</tr>
                    </>
                );
            }
            else {
                content = <tr role="row">{this.createHeaderCells(columns, {filterOnly: false, renderFilter: false, renderHeaderCheckbox: true})}</tr>;
            }
        }

        return (
            <thead className="p-datatable-thead">
                {content}
            </thead>
        );
    }
}
