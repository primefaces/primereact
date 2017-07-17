import React, { Component } from 'react';
import {HeaderCell} from './HeaderCell';

export class TableHeader extends Component {

    constructor(props) {
        super(props);
        this.onSort = this.onSort.bind(this);
    }

    onSort(e) {
        this.props.onSort(e);
    }

    createHeaderCells(root, column, i) {
        return root.props.children.map((column,i) => {
            return <HeaderCell key={i} {...column.props} onSort={this.onSort} 
                        sortField={this.props.sortField} sortOrder={this.props.sortOrder} 
                        multiSortMeta={this.props.multiSortMeta} />;
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