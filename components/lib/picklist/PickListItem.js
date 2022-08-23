import * as React from 'react';
import { Ripple } from '../ripple/Ripple';
import { classNames } from '../utils/Utils';

export const PickListItem = React.memo((props) => {
    const onClick = (event) => {
        if (props.onClick) {
            props.onClick({
                originalEvent: event,
                value: props.value
            });
        }
    };

    const onKeyDown = (event) => {
        if (props.onKeyDown) {
            props.onKeyDown({
                originalEvent: event,
                value: props.value
            });
        }
    };

    const content = props.template ? props.template(props.value) : props.value;
    const className = classNames(
        'p-picklist-item',
        {
            'p-highlight': props.selected
        },
        props.className
    );

    return (
        <li className={className} onClick={onClick} onKeyDown={onKeyDown} tabIndex={props.tabIndex} role="option" aria-selected={props.selected}>
            {content}
            <Ripple />
        </li>
    );
});

PickListItem.displayName = 'PickListItem';
