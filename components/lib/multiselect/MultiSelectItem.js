import * as React from 'react';
import { CheckIcon } from '../icons/check';
import { Ripple } from '../ripple/Ripple';
import { IconUtils, ObjectUtils, classNames, mergeProps } from '../utils/Utils';

export const MultiSelectItem = React.memo((props) => {
    const getPTOptions = (key) => {
        return props.ptm(key, {
            context: {
                selected: props.selected
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

    const checkboxIconClassName = mergeProps(
        {
            className: 'p-checkbox-icon p-c'
        },
        getPTOptions('checkboxIcon')
    );

    const icon = props.checkboxIcon || <CheckIcon {...checkboxIconClassName} />;
    const checkboxIcon = props.selected ? IconUtils.getJSXIcon(icon, { ...checkboxIconClassName }, { selected: props.selected }) : null;

    const content = props.template ? ObjectUtils.getJSXElement(props.template, props.option) : props.label;
    const tabIndex = props.disabled ? null : props.tabIndex || 0;

    const checkboxContainerProps = mergeProps(
        {
            className: 'p-checkbox p-component'
        },
        getPTOptions('checkboxContainer')
    );

    const checkboxProps = mergeProps(
        {
            className: checkboxClassName
        },
        getPTOptions('checkbox')
    );

    const itemProps = mergeProps(
        {
            className: className,
            style: props.style,
            onClick: onClick,
            tabIndex: tabIndex,
            onKeyDown: onKeyDown,
            role: 'option',
            'aria-selected': props.selected
        },
        getPTOptions('item')
    );

    return (
        <li {...itemProps}>
            <div {...checkboxContainerProps}>
                <div {...checkboxProps}>{checkboxIcon}</div>
            </div>
            <span>{content}</span>
            <Ripple />
        </li>
    );
});

MultiSelectItem.displayName = 'MultiSelectItem';
