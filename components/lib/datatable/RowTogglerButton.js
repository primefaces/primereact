import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { Button } from '../button/Button';
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

    return <Button className="p-row-toggler p-link" onClick={onClick} ariaButton icon={iconClassName} tabIndex={props.tabIndex} aria-label={label} />;
});

RowTogglerButton.displayName = 'RowTogglerButton';
