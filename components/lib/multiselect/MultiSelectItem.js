import * as React from 'react';
import { CheckIcon } from '../icons/check';
import { Ripple } from '../ripple/Ripple';
import { PrimeReactContext } from '../api/Api';
import { IconUtils, ObjectUtils, classNames, mergeProps } from '../utils/Utils';

export const MultiSelectItem = React.memo((props) => {
    const { ptm, cx } = props;
    const context = React.useContext(PrimeReactContext);

    const getPTOptions = (key) => {
        return ptm(key, {
            hostName: props.hostName,
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

    const checkboxIconProps = mergeProps(
        [
            {
                className: cx('checkboxIcon')
            },
            getPTOptions('checkboxIcon')
        ],
        { useTailwind: context.useTailwind }
    );

    const icon = props.checkboxIcon || <CheckIcon {...checkboxIconProps} />;
    const checkboxIcon = props.selected ? IconUtils.getJSXIcon(icon, { ...checkboxIconProps }, { selected: props.selected }) : null;

    const content = props.template ? ObjectUtils.getJSXElement(props.template, props.option) : props.label;
    const tabIndex = props.disabled ? null : props.tabIndex || 0;

    const checkboxContainerProps = mergeProps(
        [
            {
                className: cx('checkboxContainer')
            },
            getPTOptions('checkboxContainer')
        ],
        { useTailwind: context.useTailwind }
    );

    const checkboxProps = mergeProps(
        [
            {
                className: cx('checkbox', { itemProps: props }),
                'data-p-highlight': props.selected
            },
            getPTOptions('checkbox')
        ],
        { useTailwind: context.useTailwind }
    );

    const itemProps = mergeProps(
        [
            {
                className: classNames(props.className, props.option.className, cx('item', { itemProps: props })),
                style: props.style,
                onClick: onClick,
                tabIndex: tabIndex,
                onKeyDown: onKeyDown,
                role: 'option',
                'aria-selected': props.selected,
                'data-p-highlight': props.selected,
                'data-p-disabled': props.disabled
            },
            getPTOptions('item')
        ],
        { useTailwind: context.useTailwind }
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
