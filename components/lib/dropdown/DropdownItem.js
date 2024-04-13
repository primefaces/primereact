import * as React from 'react';
import { useMergeProps } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { classNames, ObjectUtils } from '../utils/Utils';
import { CheckIcon } from '../icons/check';
import { BlankIcon } from '../icons/blank';

export const DropdownItem = React.memo((props) => {
    const mergeProps = useMergeProps();
    const { ptm, cx, selected, disabled, option, label, index, focusedOptionIndex, checkmark, highlightOnSelect } = props;

    const getPTOptions = (key) => {
        return ptm(key, {
            context: {
                selected,
                disabled
            }
        });
    };

    const onClick = (event, i) => {
        if (props.onClick) {
            props.onClick({
                originalEvent: event,
                option
            });
        }
    };

    const content = props.template ? ObjectUtils.getJSXElement(props.template, props.option) : props.label;
    const itemProps = mergeProps(
        {
            role: 'option',
            key: props.label,
            className: classNames(option.className, cx('item', { selected, disabled, label, index, focusedOptionIndex, highlightOnSelect })),
            style: props.style,
            onClick: (e) => onClick(e, index),
            onMouseMove: (e) => props?.onMouseMove(e, index),
            'aria-label': label,
            'aria-selected': selected,
            'data-p-highlight': selected,
            'data-p-focused': focusedOptionIndex === index,
            'data-p-disabled': disabled
        },
        getPTOptions('item', { selected, disabled, option, label })
    );
    const itemGroupLabelProps = mergeProps(
        {
            className: cx('itemLabel')
        },
        getPTOptions('itemLabel')
    );

    const iconRenderer = () => {
        if (selected) {
            const checkIconProps = mergeProps(
                {
                    className: cx('checkIcon')
                },
                getPTOptions('checIcon')
            );

            return <CheckIcon {...checkIconProps} />;
        }

        const blankIconProps = mergeProps(
            {
                className: cx('blankIcon')
            },
            getPTOptions('blankIcon')
        );

        return <BlankIcon {...blankIconProps} />;
    };

    return (
        <li {...itemProps}>
            {checkmark && iconRenderer()}
            <span {...itemGroupLabelProps}>{content}</span>
            <Ripple />
        </li>
    );
});

DropdownItem.displayName = 'DropdownItem';
