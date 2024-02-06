import * as React from 'react';
import { useMergeProps } from '../hooks/Hooks';
import { CheckIcon } from '../icons/check';
import { Ripple } from '../ripple/Ripple';
import { IconUtils, ObjectUtils, classNames } from '../utils/Utils';

export const MultiSelectItem = React.memo((props) => {
    const [focusedState, setFocusedState] = React.useState(false);
    const mergeProps = useMergeProps();
    const { ptm, cx } = props;

    const getPTOptions = (key) => {
        return ptm(key, {
            hostName: props.hostName,
            context: {
                selected: props.selected,
                disabled: props.disabled,
                focused: focusedState,
                focusedIndex: props.focusedIndex,
                index: props.index
            }
        });
    };

    const onFocus = (event) => {
        setFocusedState(true);
    };

    const onBlur = (event) => {
        setFocusedState(false);
    };

    const onClick = (event) => {
        if (props.onClick) {
            props.onClick(event, props.option);
        }

        event.preventDefault();
        event.stopPropagation();
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
    const tabIndex = props.disabled ? -1 : props.tabIndex;

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
            onFocus: onFocus,
            onBlur: onBlur,
            tabIndex: tabIndex,
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
