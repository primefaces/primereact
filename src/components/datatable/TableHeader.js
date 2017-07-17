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

    render() {
        var columnHeaders = this.props.children.map((column,i) => {
                                return <HeaderCell key={i} {...column.props} onSort={this.onSort} 
                                        sortField={this.props.sortField} sortOrder={this.props.sortOrder} 
                                        multiSortMeta={this.props.multiSortMeta} />;
                            });

        return (
            <thead className="ui-datatable-thead">
                <tr className="ui-state-default">
                    {columnHeaders}
                </tr>
            </thead>
        );
    }
}