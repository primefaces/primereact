import React, { Component } from 'react';
import { FooterCell } from './FooterCell';

export class TableFooter extends Component {

    hasFooter() {
        return this.props.footerColumnGroup ? true : (this.props.columns ? this.props.columns.some(col => col.props.footer) : false);
    }

    renderGroupFooterCells(row) {
        const columns = React.Children.toArray(row.props.children);

        return this.renderFooterCells(columns);
    }

    renderFooterCells(columns) {
        return React.Children.map(columns, (col, i) => {
            return !col.props.hidden && <FooterCell key={col.props.columnKey || col.props.field || i} tableProps={this.props.tableProps} column={col} />;
        })
    }

    renderContent() {
        if (this.props.footerColumnGroup) {
            const rows = React.Children.toArray(this.props.footerColumnGroup.props.children);

            return rows.map((row, i) => <tr key={i} role="row">{this.renderGroupFooterCells(row)}</tr>);
        }

        return <tr role="row">{this.renderFooterCells(this.props.columns)}</tr>;
    }

    render() {
        if (this.hasFooter()) {
            let content = this.renderContent();

            return (
                <tfoot className="p-datatable-tfoot">
                    {content}
                </tfoot>
            )
        }

        return null;
    }
}
