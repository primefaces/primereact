import * as React from 'react';
import { ColumnBase } from '../column/ColumnBase';
import { ColumnGroupBase } from '../columngroup/ColumnGroupBase';
import { RowBase } from '../row/RowBase';
import { FooterCell } from './FooterCell';
import { mergeProps } from '../utils/Utils';

export const TableFooter = React.memo((props) => {
    const getRowProps = (row) => ColumnGroupBase.getCProps(row);

    const getColumnGroupProps = () => {
        return props.footerColumnGroup ? props.ptCallbacks.ptmo(ColumnGroupBase.getCProps(props.footerColumnGroup)) : undefined;
    };

    const getRowPTOptions = (row, key) => {
        const rProps = getRowProps(row);

        return props.ptCallbacks.ptmo(ColumnGroupBase.getCProp(row, 'pt'), key, {
            props: rProps,
            parent: props.metaData
        });
    };

    const getColumnGroupPTOptions = (key) => {
        return (
            props.ptCallbacks.ptmo(ColumnGroupBase.getCProp(props.footerColumnGroup, 'pt')),
            key,
            {
                props: getColumnGroupProps(),
                parent: props.metaData
            }
        );
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

            return isVisible && <FooterCell key={key} tableProps={props.tableProps} column={col} ptCallbacks={props.ptCallbacks} metaData={props.metaData} />;
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
            props.ptCallbacks.ptm('footerRow')
        );

        return <tr {...footerRowProps}>{createFooterCells(props.columns)}</tr>;
    };

    if (hasFooter()) {
        const content = createContent();
        const tfootProps = mergeProps(
            {
                className: 'p-datatable-tfoot'
            },
            props.ptCallbacks.ptm('tfoot'),
            getColumnGroupPTOptions('root')
        );

        return <tfoot {...tfootProps}>{content}</tfoot>;
    }

    return null;
});

TableFooter.displayName = 'TableFooter';
