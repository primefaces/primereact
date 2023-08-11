import * as React from 'react';
import { Ripple } from '../ripple/Ripple';
import { mergeProps, ObjectUtils } from '../utils/Utils';

export const DropdownItem = React.memo((props) => {
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
            className: cx('item'),
            style: props.style,
            onClick: (e) => onClick(e),
            'aria-label': label,
            role: 'option',
            'aria-selected': selected,
            key: props.label
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
