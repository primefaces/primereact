import * as React from 'react';
import { Ripple } from '../ripple/Ripple';
import { classNames, useMergeProps } from '../utils/Utils';

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
                value: props.value
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

    const content = props.template ? props.template(props.value) : props.value;

    const itemProps = mergeProps(
        {
            className: classNames(props.className, cx('item', { subProps: props })),
            onClick,
            onKeyDown,
            tabIndex: props.tabIndex,
            role: 'option',
            'aria-selected': props.selected
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
