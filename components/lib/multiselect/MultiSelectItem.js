import * as React from 'react';
import { Checkbox } from '../checkbox/Checkbox';
import { useMergeProps } from '../hooks/Hooks';
import { CheckIcon } from '../icons/check';
import { Ripple } from '../ripple/Ripple';
import { IconUtils, ObjectUtils, classNames } from '../utils/Utils';

export const MultiSelectItem = React.memo((props) => {
    const [focusedState, setFocusedState] = React.useState(false);
    const checkboxRef = React.useRef(null);
    const mergeProps = useMergeProps();
    const { ptm, cx, isUnstyled } = props;

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
        checkboxRef?.current?.getInput().focus();
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

    const itemProps = mergeProps(
        {
            className: classNames(props.className, props.option.className, cx('item', { itemProps: props })),
            style: props.style,
            onClick: onClick,
            onFocus: onFocus,
            onBlur: onBlur,
            onMouseMove: (e) => props?.onMouseMove(e, props.index),
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
                <Checkbox ref={checkboxRef} checked={props.selected} icon={checkboxIcon} pt={ptm('checkbox')} unstyled={isUnstyled()} />
            </div>
            <span>{content}</span>
            <Ripple />
        </li>
    );
});

MultiSelectItem.displayName = 'MultiSelectItem';
