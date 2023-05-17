import * as React from 'react';
import { ColumnBase } from '../column/ColumnBase';
import { ColumnGroupBase } from '../columngroup/ColumnGroupBase';
import { RowBase } from '../row/RowBase';
import { FooterCell } from './FooterCell';

export const TableFooter = React.memo((props) => {
    const hasFooter = () => {
        return props.footerColumnGroup ? true : props.columns ? props.columns.some((col) => col && getColumnProp(col, 'footer')) : false;
    };

    const getColumnProp = (column, name) => {
        return ColumnBase.getCProp(column, name);
    };

    const createGroupFooterCells = (row) => {
        const columns = React.Children.toArray(RowBase.getCProp(row, 'children'));

        return createFooterCells(columns);
    };

    const createFooterCells = (columns) => {
        return React.Children.map(columns, (col, i) => {
            const isVisible = col ? !getColumnProp(col, 'hidden') : true;
            const key = col ? getColumnProp(col, 'columnKey') || getColumnProp(col, 'field') || i : i;

            return isVisible && <FooterCell key={key} tableProps={props.tableProps} column={col} />;
        });
    };

    const createContent = () => {
        if (props.footerColumnGroup) {
            const rows = React.Children.toArray(ColumnGroupBase.getCProp(props.footerColumnGroup, 'children'));

            return rows.map((row, i) => (
                <tr key={i} role="row">
                    {createGroupFooterCells(row)}
                </tr>
            ));
        }

        return <tr role="row">{createFooterCells(props.columns)}</tr>;
    };

    if (hasFooter()) {
        const content = createContent();

        return <tfoot className="p-datatable-tfoot">{content}</tfoot>;
    }

    return null;
});

TableFooter.displayName = 'TableFooter';
