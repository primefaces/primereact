import * as React from 'react';
import { ColumnBase } from '../column/ColumnBase';
import { ColumnGroupBase } from '../columngroup/ColumnGroupBase';
import { useMergeProps } from '../hooks/Hooks';
import { RowBase } from '../row/RowBase';
import { FooterCell } from './FooterCell';

export const TableFooter = React.memo((props) => {
    const { ptm, ptmo, cx } = props.ptCallbacks;
    const mergeProps = useMergeProps();
    const getRowProps = (row) => ColumnGroupBase.getCProps(row);

    const getColumnGroupProps = () => {
        return props.footerColumnGroup ? ColumnGroupBase.getCProps(props.footerColumnGroup) : undefined;
    };

    const getRowPTOptions = (row, key) => {
        const rProps = getRowProps(row);
        const rowMetaData = {
            props: rProps,
            parent: props.metaData,
            hostName: props.hostName
        };

        return mergeProps(ptm(`row.${key}`, { row: rowMetaData }), ptm(`row.${key}`, rowMetaData), ptmo(rProps, key, rowMetaData));
    };

    const getColumnGroupPTOptions = (key) => {
        const cGProps = getColumnGroupProps();
        const columnGroupMetaData = {
            props: getColumnGroupProps(),
            parent: props.metaData,
            hostName: props.hostName
        };

        return mergeProps(ptm(`columnGroup.${key}`, { columnGroup: columnGroupMetaData }), ptm(`columnGroup.${key}`, columnGroupMetaData), ptmo(cGProps, key, columnGroupMetaData));
    };

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

            return isVisible && <FooterCell hostName={props.hostName} key={key} tableProps={props.tableProps} column={col} ptCallbacks={props.ptCallbacks} metaData={props.metaData} />;
        });
    };

    const createContent = () => {
        if (props.footerColumnGroup) {
            const rows = React.Children.toArray(ColumnGroupBase.getCProp(props.footerColumnGroup, 'children'));

            return rows.map((row, i) => {
                const rootProps = mergeProps(
                    {
                        role: 'row'
                    },
                    getRowPTOptions(row, 'root')
                );

                return (
                    <tr {...rootProps} key={i}>
                        {createGroupFooterCells(row)}
                    </tr>
                );
            });
        }

        const footerRowProps = mergeProps(
            {
                role: 'row'
            },
            ptm('footerRow', { hostName: props.hostName })
        );

        return <tr {...footerRowProps}>{createFooterCells(props.columns)}</tr>;
    };

    if (hasFooter()) {
        const content = createContent();
        const tfootProps = mergeProps(
            {
                className: cx('tfoot'),
                role: 'rowgroup'
            },
            getColumnGroupPTOptions('root'),
            ptm('tfoot', { hostName: props.hostName })
        );

        return <tfoot {...tfootProps}>{content}</tfoot>;
    }

    return null;
});

TableFooter.displayName = 'TableFooter';
