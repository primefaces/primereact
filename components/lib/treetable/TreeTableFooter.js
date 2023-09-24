import * as React from 'react';
import { ColumnBase } from '../column/ColumnBase';
import { ColumnGroupBase } from '../columngroup/ColumnGroupBase';
import { RowBase } from '../row/RowBase';
import { mergeProps } from '../utils/Utils';

export const TreeTableFooter = React.memo((props) => {
    const { ptm, ptmo, cx } = props.ptCallbacks;

    const getColumnProp = (column, name) => {
        return ColumnBase.getCProp(column, name);
    };

    const getColumnProps = (column) => {
        return ColumnBase.getCProps(column);
    };

    const getColumnPTOptions = (column, key) => {
        const cProps = getColumnProps(column);
        const columnMetadata = {
            props: cProps,
            parent: props.metaData,
            hostName: props.hostName
        };

        return mergeProps(ptm(`column.${key}`, { column: columnMetadata }), ptm(`column.${key}`, columnMetadata), ptmo(cProps, key, columnMetadata));
    };

    const createFooterCell = (column, index) => {
        const footerCellProps = mergeProps(
            {
                key: column.field || index,
                className: getColumnProp(column, 'footerClassName') || getColumnProp(column, 'className'),
                style: getColumnProp(column, 'footerStyle') || getColumnProp(column, 'style'),
                rowSpan: getColumnProp(column, 'rowSpan'),
                colSpan: getColumnProp(column, 'colSpan')
            },
            getColumnPTOptions(column, 'footerCell')
        );

        return <td {...footerCellProps}>{getColumnProp(column, 'footer')}</td>;
    };

    const createFooterRow = (row, index) => {
        const rowColumns = React.Children.toArray(RowBase.getCProp(row, 'children'));
        const rowFooterCells = rowColumns.map(createFooterCell);
        const footerRowProps = mergeProps(ptm('footerRow', { hostName: props.hostName }));

        return (
            <tr {...footerRowProps} key={index}>
                {rowFooterCells}
            </tr>
        );
    };

    const createColumnGroup = () => {
        let rows = React.Children.toArray(ColumnGroupBase.getCProp(props.columnGroup, 'children'));

        return rows.map(createFooterRow);
    };

    const createColumns = (columns) => {
        if (columns) {
            const headerCells = columns.map(createFooterCell);
            const footerRowProps = mergeProps(ptm('footerRow', { hostName: props.hostName }));

            return <tr {...footerRowProps}>{headerCells}</tr>;
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
        const tfootProps = mergeProps(
            {
                className: cx('tfoot')
            },
            ptm('tfoot', { hostName: props.hostName })
        );

        return <tfoot {...tfootProps}>{content}</tfoot>;
    } else {
        return null;
    }
});

TreeTableFooter.displayName = 'TreeTableFooter';
