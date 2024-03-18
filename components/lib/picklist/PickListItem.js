import * as React from 'react';
import { useMergeProps } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { classNames } from '../utils/Utils';

export const PickListItem = React.memo((props) => {
    const mergeProps = useMergeProps();
    const { ptm, cx } = props;

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
                value: props.value,
                id: props.id
            });
        }
    };

    const onKeyDown = (event) => {
        if (props.onKeyDown) {
            props.onKeyDown({
                originalEvent: event,
                value: props.value
            });
        }
    };

    const onMouseDown = (event) => {
        if (props.onMouseDown) {
            props.onMouseDown(event);
        }
    };

    const onFocus = (event) => {
        if (props.onFocus) {
            props.onFocus(event);
        }
    };

    const content = props.template ? props.template(props.value) : props.value;

    const itemProps = mergeProps(
        {
            className: classNames(props.className, cx('item', { selected: props.selected, focused: props.focused })),
            id: props.id,
            onClick,
            onKeyDown,
            onFocus,
            onMouseDown,
            role: 'option',
            'aria-selected': props.selected,
            'data-p-highlight': props.selected,
            'data-p-focused': props.focused
        },
        getPTOptions('item')
    );

    return (
        <li {...itemProps}>
            {content}
            <Ripple />
        </li>
    );
});

PickListItem.displayName = 'PickListItem';
