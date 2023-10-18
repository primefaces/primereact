import * as React from 'react';
import { Ripple } from '../ripple/Ripple';
import { classNames, mergeProps, ObjectUtils } from '../utils/Utils';

export const SelectButtonItem = React.memo((props) => {
    const [focusedState, setFocusedState] = React.useState(false);

    const getPTOptions = (item, key) => {
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
    };

    const onFocus = () => {
        setFocusedState(true);
    };

    const onBlur = () => {
        setFocusedState(false);
    };

    const onKeyDown = (event) => {
        const keyCode = event.which;

        if (keyCode === 32) {
            onClick(event);
            event.preventDefault();
        }
    };

    const createContent = () => {
        const labelProps = mergeProps(
            {
                className: 'p-button-label p-c'
            },
            getPTOptions(props.option, 'label')
        );

        return props.template ? ObjectUtils.getJSXElement(props.template, props.option) : <span {...labelProps}>{props.label}</span>;
    };

    const className = classNames(
        'p-button p-component',
        {
            'p-highlight': props.selected,
            'p-disabled': props.disabled,
            'p-focus': focusedState
        },
        props.className
    );
    const content = createContent();

    const buttonProps = mergeProps(
        {
            className: className,
            role: 'button',
            'aria-label': props.label,
            'aria-pressed': props.selected,
            onClick: onClick,
            onKeyDown: onKeyDown,
            tabIndex: props.tabIndex,
            onFocus: onFocus,
            onBlur: onBlur
        },
        getPTOptions(props.option, 'button')
    );

    return (
        <div {...buttonProps}>
            {content}
            {!props.disabled && <Ripple />}
        </div>
    );
});

SelectButtonItem.displayName = 'SelectButtonItem';
