import React, { memo } from 'react';
import { Ripple } from '../ripple/Ripple';
import { ObjectUtils, classNames } from '../utils/Utils';

export const DropdownItem = memo((props) => {

    const onClick = (event) => {
        if (props.onClick) {
            props.onClick({
                originalEvent: event,
                option: props.option
            })
        }
    }

    const className = classNames('p-dropdown-item', {
        'p-highlight': props.selected,
        'p-disabled': props.disabled,
        'p-dropdown-item-empty': (!props.label || props.label.length === 0)
    }, props.option.className);
    const content = props.template ? ObjectUtils.getJSXElement(props.template, props.option) : props.label;

    return (
        <li className={className} onClick={onClick} aria-label={props.label} key={props.label} role="option" aria-selected={props.selected}>
            {content}
            <Ripple />
        </li>
    )
});
