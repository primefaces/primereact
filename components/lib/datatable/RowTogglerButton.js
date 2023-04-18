import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { Ripple } from '../ripple/Ripple';
import { IconUtils } from '../utils/Utils';
import { ChevronDownIcon } from '../icons/chevrondown';
import { ChevronRightIcon } from '../icons/chevronright';

export const RowTogglerButton = React.memo((props) => {
    const onClick = (event) => {
        props.onClick({
            originalEvent: event,
            data: props.rowData
        });
    };

    const iconProps = { className: 'p-row-toggler-icon', 'aria-hidden': true };
    const icon = props.expanded ? props.expandedRowIcon || <ChevronDownIcon {...iconProps} /> : props.collapsedRowIcon || <ChevronRightIcon {...iconProps} />;
    const togglerIcon = IconUtils.getJSXIcon(icon, { ...iconProps }, { props });
    const label = props.expanded ? ariaLabel('collapseLabel') : ariaLabel('expandLabel');

    return (
        <button type="button" onClick={onClick} className="p-row-toggler p-link" tabIndex={props.tabIndex} aria-label={label}>
            {togglerIcon}
            <Ripple />
        </button>
    );
});

RowTogglerButton.displayName = 'RowTogglerButton';
