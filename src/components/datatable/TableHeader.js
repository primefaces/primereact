import React, { Component } from 'react';
import {HeaderCell} from './HeaderCell';

export class TableHeader extends Component {

    createHeaderCells(root, column, i) {
        let children = React.Children.toArray(root.props.children);
        return React.Children.map(children, (column, i) => {
            return <HeaderCell key={i} {...column.props} onSort={this.props.onSort} 
                        sortField={this.props.sortField} sortOrder={this.props.sortOrder} multiSortMeta={this.props.multiSortMeta} 
                        resizableColumns={this.props.resizableColumns} onColumnResizeStart={this.props.onColumnResizeStart}
                        onFilter={this.props.onFilter} onHeaderCheckboxClick={this.props.onHeaderCheckboxClick} 
                        headerCheckboxSelected={this.props.headerCheckboxSelected} onHeaderMousedown={this.props.onHeaderMousedown}
                        reorderableColumns={this.props.reorderableColumns} onColumnDragStart={this.props.onColumnDragStart} onColumnDragleave={this.props.onColumnDragleave} onColumnDrop={this.props.onColumnDrop} />;
        });
    }

    render() {
        let content;
        if(this.props.columnGroup) {
            content = this.props.columnGroup.props.children.map((row, i) => {
                return <tr key={i} className="ui-state-default">{this.createHeaderCells(row)}</tr>;
            });
        }
        else {
            content = <tr className="ui-state-default">{this.createHeaderCells(this)}</tr>;
        }

        return (
            <thead className="ui-datatable-thead">
                {content}
            </thead>
        );
    }
}