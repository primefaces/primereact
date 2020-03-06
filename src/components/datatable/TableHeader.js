import React, { Component } from 'react';
import {HeaderCell} from './HeaderCell';

export class TableHeader extends Component {

    createHeaderCells(columns, renderOptions) {
        return React.Children.map(columns, (column, i) => {
            return <HeaderCell key={column.columnKey||column.field||i} columnProps={column.props} value={this.props.value} onSort={this.props.onSort}
                        sortField={this.props.sortField} sortOrder={this.props.sortOrder} multiSortMeta={this.props.multiSortMeta}
                        resizableColumns={this.props.resizableColumns} onColumnResizeStart={this.props.onColumnResizeStart}
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

    render() {
        let content;
        if (this.props.columnGroup) {
            let rows = React.Children.toArray(this.props.columnGroup.props.children);
            content = rows.map((row, i) => {
                return <tr key={i}>{this.createHeaderCells(React.Children.toArray(row.props.children), {filterOnly: false, renderFilter: true, renderHeaderCheckbox: true})}</tr>;
            });
        }
        else {
            let columns = React.Children.toArray(this.props.children);

            if (this.hasColumnFilter(columns)) {
                content = (
                    <>
                        <tr>{this.createHeaderCells(columns, {filterOnly: false, renderFilter: false, renderHeaderCheckbox: false})}</tr>
                        <tr>{this.createHeaderCells(columns, {filterOnly: true, renderFilter: true, renderHeaderCheckbox: true})}</tr>
                    </>
                );
            }
            else {
                content = <tr>{this.createHeaderCells(columns, {filterOnly: false, renderFilter: false, renderHeaderCheckbox: true})}</tr>;
            }
        }

        return (
            <thead className="p-datatable-thead">
                {content}
            </thead>
        );
    }
}
