import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { Ripple } from '../ripple/Ripple';
import { IconUtils, mergeProps } from '../utils/Utils';
import { ChevronDownIcon } from '../icons/chevrondown';
import { ChevronRightIcon } from '../icons/chevronright';
import { ColumnBase } from '../column/ColumnBase';

export const RowTogglerButton = React.memo((props) => {
    const onClick = (event) => {
        props.onClick({
            originalEvent: event,
            data: props.rowData
        });
    };

    const getColumnProps = () => ColumnBase.getCProps(props.column);

    const getColumnPTOptions = (key) => {
        return props.ptCallbacks.ptmo(ColumnBase.getCProp(props.column, 'pt'), key, {
            props: getColumnProps(),
            parent: props.metaData
        });
    };

    const rowGroupTogglerIconProps = mergeProps(
        {
            className: 'p-row-toggler-icon',
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
            className: 'p-row-toggler p-link',
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
