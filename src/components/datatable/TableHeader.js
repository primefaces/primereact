import React, { Component } from 'react';
import {HeaderCell} from './HeaderCell';

export class TableHeader extends Component {

    createHeaderCells(root) {
        let children = React.Children.toArray(root.props.children);
        
        return React.Children.map(children, (column, i) => {
            return <HeaderCell key={i} {...column.props} value={this.props.value} onSort={this.props.onSort} columnSortField={column.props.sortField}
                        sortField={this.props.sortField} sortOrder={this.props.sortOrder} multiSortMeta={this.props.multiSortMeta}
                        resizableColumns={this.props.resizableColumns} onColumnResizeStart={this.props.onColumnResizeStart} 
                        onFilter={this.props.onFilter} onHeaderCheckboxClick={this.props.onHeaderCheckboxClick} headerCheckboxSelected={this.props.headerCheckboxSelected} 
                        reorderableColumns={this.props.reorderableColumns} onDragStart={this.props.onColumnDragStart} onDragOver={this.props.onColumnDragOver}
                        onDragLeave={this.props.onColumnDragLeave} onDrop={this.props.onColumnDrop} filters={this.props.filters} tabIndex={this.props.tabIndex} />;
        });
    }

    render() {
        let content;
        if(this.props.columnGroup) {
            let rows = React.Children.toArray(this.props.columnGroup.props.children);
            content = rows.map((row, i) => {
                return <tr key={i}>{this.createHeaderCells(row)}</tr>;
            });
        }
        else {
            content = <tr>{this.createHeaderCells(this)}</tr>;
        }

        return (
            <thead className="p-datatable-thead">
                {content}
            </thead>
        );
    }
}