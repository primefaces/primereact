import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TreeTableHeader extends Component {

    static defaultProps = {
        columns: null,
        columnGroup: null
    }

    static propsTypes = {
        columns: PropTypes.array,
        columnGroup: PropTypes.element
    }

    renderHeaderCell(column, index) {
        return (
            <th key={column.field||index}>
                <span className="p-column-title">{column.props.header}</span>
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
        let content = this.props.columnGroup ? this.renderColumnGroup() : this.renderColumns(this.props.columns);

        return (
            <thead className="p-treetable-thead">
                {content}
            </thead>
        );
    }
}