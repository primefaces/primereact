import * as React from 'react';
import { Ripple } from '../ripple/Ripple';
import { classNames, mergeProps, ObjectUtils } from '../utils/Utils';

export const DropdownItem = React.memo((props) => {
    const getPTOptions = (key) => {
        return props.ptm(key, {
            context: {
                selected: props.selected,
                disabled: props.disabled
            }
        });
    };

    const onClick = (event) => {
        if (props.onClick) {
            props.onClick({
                originalEvent: event,
                option: props.option
            });
        }
    };

    const className = classNames(
        'p-dropdown-item',
        {
            'p-highlight': props.selected,
            'p-disabled': props.disabled,
            'p-dropdown-item-empty': !props.label || props.label.length === 0
        },
        props.option && props.option.className
    );
    const content = props.template ? ObjectUtils.getJSXElement(props.template, props.option) : props.label;
    const itemProps = mergeProps(
        {
            className,
            style: props.style,
            onClick: (e) => onClick(e),
            'aria-label': props.label,
            role: 'option',
            'aria-selected': props.selected,
            key: props.label
        },
        getPTOptions('item')
    );

    return (
        <li {...itemProps}>
            {content}
            <Ripple />
        </li>
    );
});

DropdownItem.displayName = 'DropdownItem';
