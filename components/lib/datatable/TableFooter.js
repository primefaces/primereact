import * as React from 'react';
import { FooterCell } from './FooterCell';

export const TableFooter = React.memo((props) => {

    const hasFooter = () => {
        return props.footerColumnGroup ? true : (props.columns ? props.columns.some(col => col && col.props.footer) : false);
    }

    const createGroupFooterCells = (row) => {
        const columns = React.Children.toArray(row.props.children);

        return createFooterCells(columns);
    }

    const createFooterCells = (columns) => {
        return React.Children.map(columns, (col, i) => {
            const isVisible = col ? !col.props.hidden : true;
            const key = col ? col.props.columnKey || col.props.field || i : i;

            return isVisible && <FooterCell key={key} tableProps={props.tableProps} column={col} />;
        })
    }

    const createContent = () => {
        if (props.footerColumnGroup) {
            const rows = React.Children.toArray(props.footerColumnGroup.props.children);

            return rows.map((row, i) => <tr key={i} role="row">{createGroupFooterCells(row)}</tr>);
        }

        return <tr role="row">{createFooterCells(props.columns)}</tr>;
    }

    if (hasFooter()) {
        const content = createContent();

        return (
            <tfoot className="p-datatable-tfoot">
                {content}
            </tfoot>
        )
    }

    return null;
});

TableFooter.displayName = 'TableFooter';
