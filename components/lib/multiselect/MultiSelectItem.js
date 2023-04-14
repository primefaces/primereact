import * as React from 'react';
import { Ripple } from '../ripple/Ripple';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';
import { CheckIcon } from '../icon/check';

export const MultiSelectItem = React.memo((props) => {
    const onClick = (event) => {
        if (props.onClick) {
            props.onClick({
                originalEvent: event,
                option: props.option
            });
        }

        event.preventDefault();
    };

    const onKeyDown = (event) => {
        if (props.onKeyDown) {
            props.onKeyDown({
                originalEvent: event,
                option: props.option
            });
        }
    };

    const className = classNames(
        'p-multiselect-item',
        {
            'p-highlight': props.selected,
            'p-disabled': props.disabled
        },
        props.className,
        props.option.className
    );
    const checkboxClassName = classNames('p-checkbox-box', {
        'p-highlight': props.selected
    });

    const checkboxIconClassName = 'p-checkbox-icon p-c';
    const icon = props.checkboxIcon || <CheckIcon className={checkboxIconClassName} />;
    const checkboxIcon = IconUtils.getJSXIcon(icon, { className: checkboxIconClassName }, { selected: props.selected });

    const content = props.template ? ObjectUtils.getJSXElement(props.template, props.option) : props.label;
    const tabIndex = props.disabled ? null : props.tabIndex || 0;

    return (
        <li className={className} style={props.style} onClick={onClick} tabIndex={tabIndex} onKeyDown={onKeyDown} role="option" aria-selected={props.selected}>
            <div className="p-checkbox p-component">
                <div className={checkboxClassName}>{checkboxIcon}</div>
            </div>
            <span>{content}</span>
            <Ripple />
        </li>
    );
});

MultiSelectItem.displayName = 'MultiSelectItem';
