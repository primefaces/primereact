import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { Ripple } from '../ripple/Ripple';
import { classNames } from '../utils/Utils';

export const RowTogglerButton = React.memo((props) => {
    const onClick = (event) => {
        props.onClick({
            originalEvent: event,
            data: props.rowData
        });
    };

    const iconClassName = classNames('p-row-toggler-icon', props.expanded ? props.expandedRowIcon : props.collapsedRowIcon);
    const label = props.expanded ? ariaLabel('collapseLabel') : ariaLabel('expandLabel');

    return (
        <button type="button" onClick={onClick} className="p-row-toggler p-link" tabIndex={props.tabIndex} aria-label={label}>
            <span className={iconClassName} aria-hidden="true"></span>
            <Ripple />
        </button>
    );
});

RowTogglerButton.displayName = 'RowTogglerButton';
