import * as React from 'react';
import { CheckIcon } from '../icons/check';
import { Ripple } from '../ripple/Ripple';
import { IconUtils, ObjectUtils, classNames, mergeProps } from '../utils/Utils';

export const MultiSelectItem = React.memo((props) => {
    const [focusedState, setFocusedState] = React.useState(false);
    const { ptm, cx } = props;

    const getPTOptions = (key) => {
        return ptm(key, {
            hostName: props.hostName,
            context: {
                selected: props.selected,
                disabled: props.disabled,
                focused: focusedState
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
        event.stopPropagation();
    };

    const onKeyDown = (event) => {
        if (props.onKeyDown) {
            props.onKeyDown({
                originalEvent: event,
                option: props.option
            });
        }
    };

    const onFocus = (event) => {
        setFocusedState(true);
    };

    const onBlur = (event) => {
        setFocusedState(false);
    };

    const checkboxIconProps = mergeProps(
        {
            className: cx('checkboxIcon')
        },
        getPTOptions('checkboxIcon')
    );

    const icon = props.checkboxIcon || <CheckIcon {...checkboxIconProps} />;
    const checkboxIcon = props.selected ? IconUtils.getJSXIcon(icon, { ...checkboxIconProps }, { selected: props.selected }) : null;

    const content = props.template ? ObjectUtils.getJSXElement(props.template, props.option) : props.label;
    const tabIndex = props.disabled ? null : props.tabIndex || 0;

    const checkboxContainerProps = mergeProps(
        {
            className: cx('checkboxContainer')
        },
        getPTOptions('checkboxContainer')
    );

    const checkboxProps = mergeProps(
        {
            className: cx('checkbox', { itemProps: props }),
            'data-p-highlight': props.selected
        },
        getPTOptions('checkbox')
    );

    const itemProps = mergeProps(
        {
            className: classNames(props.className, props.option.className, cx('item', { itemProps: props })),
            style: props.style,
            onClick: onClick,
            tabIndex: tabIndex,
            onKeyDown: onKeyDown,
            onFocus: onFocus,
            onBlur: onBlur,
            role: 'option',
            'aria-selected': props.selected,
            'data-p-highlight': props.selected,
            'data-p-disabled': props.disabled
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
