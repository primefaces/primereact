import * as React from 'react';
import { Ripple } from '../ripple/Ripple';
import { classNames } from '../utils/Utils';

export const RowTogglerButton = React.memo((props) => {

    const onClick = (event) => {
        props.onClick({
            originalEvent: event,
            data: props.rowData
        })
    }

    const iconClassName = classNames('p-row-toggler-icon', props.expanded ? props.expandedRowIcon : props.collapsedRowIcon);

    return (
        <button type="button" onClick={onClick} className="p-row-toggler p-link" tabIndex={props.tabIndex}>
            <span className={iconClassName}></span>
            <Ripple />
        </button>
    )
});

RowTogglerButton.displayName = 'RowTogglerButton';
