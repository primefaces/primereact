import * as React from 'react';
import { Ripple } from '../ripple/Ripple';
import { classNames, useMergeProps, ObjectUtils } from '../utils/Utils';

export const DropdownItem = React.memo((props) => {
    const mergeProps = useMergeProps();
    const { ptm, cx, selected, disabled, option, label } = props;

    const getPTOptions = (key) => {
        return ptm(key, {
            context: {
                selected,
                disabled
            }
        });
    };

    const onClick = (event) => {
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
            className: classNames(option.className, cx('item', { selected, disabled, label })),
            style: props.style,
            onClick: (e) => onClick(e),
            'aria-label': label,
            'aria-selected': selected,
            'data-p-highlight': selected,
            'data-p-disabled': disabled
        },
        getPTOptions('item', { selected, disabled, option, label })
    );

    return (
        <li {...itemProps}>
            {content}
            <Ripple />
        </li>
    );
});

DropdownItem.displayName = 'DropdownItem';
