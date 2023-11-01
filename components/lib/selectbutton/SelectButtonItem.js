import * as React from 'react';
import { Ripple } from '../ripple/Ripple';
import { classNames, useMergeProps, ObjectUtils } from '../utils/Utils';

export const SelectButtonItem = React.memo((props) => {
    const mergeProps = useMergeProps();
    const [focusedState, setFocusedState] = React.useState(false);
    const { ptm, cx } = props;

    const getPTOptions = (key) => {
        return ptm(key, {
            hostName: props.hostName,
            context: {
                selected: props.selected,
                disabled: props.disabled,
                option: props.option
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
                className: cx('label')
            },
            getPTOptions('label')
        );

        return props.template ? ObjectUtils.getJSXElement(props.template, props.option) : <span {...labelProps}>{props.label}</span>;
    };

    const content = createContent();

    const buttonProps = mergeProps(
        {
            className: classNames(props.className, cx('button', { itemProps: props, focusedState })),
            role: 'button',
            'aria-label': props.label,
            'aria-pressed': props.selected,
            onClick: onClick,
            onKeyDown: onKeyDown,
            tabIndex: props.tabIndex,
            onFocus: onFocus,
            onBlur: onBlur
        },
        getPTOptions('button')
    );

    return (
        <div {...buttonProps}>
            {content}
            {!props.disabled && <Ripple />}
        </div>
    );
});

SelectButtonItem.displayName = 'SelectButtonItem';
