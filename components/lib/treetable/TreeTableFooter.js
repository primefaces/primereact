import * as React from 'react';
import { ColumnBase } from '../column/ColumnBase';
import { ColumnGroupBase } from '../columngroup/ColumnGroupBase';
import { RowBase } from '../row/RowBase';

export const TreeTableFooter = React.memo((props) => {
    const getColumnProp = (column, name) => {
        return ColumnBase.getCProp(column, name);
    };

    const createFooterCell = (column, index) => {
        return (
            <td
                key={column.field || index}
                className={getColumnProp(column, 'footerClassName') || getColumnProp(column, 'className')}
                style={getColumnProp(column, 'footerStyle') || getColumnProp(column, 'style')}
                rowSpan={getColumnProp(column, 'rowSpan')}
                colSpan={getColumnProp(column, 'colSpan')}
            >
                {getColumnProp(column, 'footer')}
            </td>
        );
    };

    const createFooterRow = (row, index) => {
        const rowColumns = React.Children.toArray(RowBase.getCProp(row, 'children'));
        const rowFooterCells = rowColumns.map(createFooterCell);

        return <tr key={index}>{rowFooterCells}</tr>;
    };

    const createColumnGroup = () => {
        let rows = React.Children.toArray(ColumnGroupBase.getCProp(props.columnGroup, 'children'));

        return rows.map(createFooterRow);
    };

    const createColumns = (columns) => {
        if (columns) {
            const headerCells = columns.map(createFooterCell);

            return <tr>{headerCells}</tr>;
        } else {
            return null;
        }
    };

    const hasFooter = () => {
        if (props.columnGroup) {
            return true;
        } else {
            for (let i = 0; i < props.columns.length; i++) {
                if (getColumnProp(props.columns[i], 'footer')) {
                    return true;
                }
            }
        }

        return false;
    };

    const content = props.columnGroup ? createColumnGroup() : createColumns(props.columns);

    if (hasFooter()) {
        return <tfoot className="p-treetable-tfoot">{content}</tfoot>;
    } else {
        return null;
    }
});

TreeTableFooter.displayName = 'TreeTableFooter';
