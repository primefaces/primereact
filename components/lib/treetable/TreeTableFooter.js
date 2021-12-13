import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TreeTableFooter extends Component {

    static defaultProps = {
        columns: null,
        columnGroup: null
    }

    static propTypes = {
        columns: PropTypes.array,
        columnGroup: PropTypes.any
    }

    renderFooterCell(column, index) {
        return (
            <td key={column.field||index} className={column.props.footerClassName||column.props.className} style={column.props.footerStyle||column.props.style}
                rowSpan={column.props.rowSpan} colSpan={column.props.colSpan}>
                {column.props.footer}
            </td>
        );
    }

    renderFooterRow(row, index) {
        const rowColumns = React.Children.toArray(row.props.children);
        const rowFooterCells = rowColumns.map((col, index) => this.renderFooterCell(col, index));
        
        return (
            <tr key={index}>{rowFooterCells}</tr>
        )
    }

    renderColumnGroup() {
        let rows = React.Children.toArray(this.props.columnGroup.props.children);

        return (
            rows.map((row, i) => this.renderFooterRow(row, i))
        );
    }

    renderColumns(columns) {
        if (columns) {
            const headerCells = columns.map((col, index) => this.renderFooterCell(col, index));
            return (
                <tr>{headerCells}</tr>
            );
        }
        else {
            return null;
        }
    }


    hasFooter() {
        if(this.props.columnGroup) {
            return true;
        }
        else {
            for (let i = 0; i < this.props.columns.length; i++) {
                if (this.props.columns[i].props.footer) {
                    return true;
                }
            }
        }

        return false;
    }

    render() {
        let content = this.props.columnGroup ? this.renderColumnGroup() : this.renderColumns(this.props.columns);

        if (this.hasFooter()) {
            return (
                <tfoot className="p-treetable-tfoot">
                    {content}
                </tfoot>
            );
        } 
        else {
            return null;
        }
        
    }
}