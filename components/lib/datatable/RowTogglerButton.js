import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { ColumnBase } from '../column/ColumnBase';
import { useMergeProps } from '../hooks/Hooks';
import { ChevronDownIcon } from '../icons/chevrondown';
import { ChevronRightIcon } from '../icons/chevronright';
import { Ripple } from '../ripple/Ripple';
import { IconUtils } from '../utils/Utils';

export const RowTogglerButton = React.memo((props) => {
    const mergeProps = useMergeProps();
    const { ptm, ptmo, cx } = props.ptCallbacks;

    const onClick = (event) => {
        props.onClick({
            originalEvent: event,
            data: props.rowData
        });
    };

    const getColumnProps = () => ColumnBase.getCProps(props.column);

    const getColumnPTOptions = (key) => {
        const cProps = getColumnProps();
        const columnMetaData = {
            props: getColumnProps(),
            parent: props.metaData,
            hostName: props.hostName
        };

        return mergeProps(ptm(`column.${key}`, { column: columnMetaData }), ptm(`column.${key}`, columnMetaData), ptmo(cProps, key, columnMetaData));
    };

    const rowGroupTogglerIconProps = mergeProps(
        {
            className: cx('rowGroupTogglerIcon'),
            'aria-hidden': true
        },
        getColumnPTOptions('rowGroupTogglerIcon')
    );
    const icon = props.expanded ? props.expandedRowIcon || <ChevronDownIcon {...rowGroupTogglerIconProps} /> : props.collapsedRowIcon || <ChevronRightIcon {...rowGroupTogglerIconProps} />;
    const togglerIcon = IconUtils.getJSXIcon(icon, { ...rowGroupTogglerIconProps }, { props });
    const label = props.expanded ? ariaLabel('collapseLabel') : ariaLabel('expandLabel');
    const rowGroupTogglerProps = mergeProps(
        {
            type: 'button',
            onClick: (e) => onClick(e),
            className: cx('rowGroupToggler'),
            tabIndex: props.tabIndex,
            'aria-label': label
        },
        getColumnPTOptions('rowGroupToggler')
    );

    return (
        <button {...rowGroupTogglerProps}>
            {togglerIcon}
            <Ripple />
        </button>
    );
});

RowTogglerButton.displayName = 'RowTogglerButton';
