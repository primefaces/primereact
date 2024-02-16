import * as React from 'react';
import { useMergeProps } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, ObjectUtils } from '../utils/Utils';

export const ListBoxItem = React.memo((props) => {
    const [focusedState, setFocusedState] = React.useState(false);

    const mergeProps = useMergeProps();
    const {
        ptCallbacks: { ptm, cx }
    } = props;

    const getPTOptions = (key) => {
        return ptm(key, {
            hostName: props.hostName,
            context: {
                selected: props.selected,
                disabled: props.disabled,
                focused: focusedState,
                focusedOptionIndex: props.focusedOptionIndex
            }
        });
    };

    const onFocus = (event) => {
        setFocusedState(true);
    };

    const onBlur = (event) => {
        setFocusedState(false);
    };

    const onTouchEnd = (event) => {
        if (props.onTouchEnd) {
            props.onTouchEnd({
                originalEvent: event,
                option: props.option
            });
        }
    };

    const findNextItem = (item) => {
        const nextItem = item.nextElementSibling;

        return nextItem ? (DomHandler.isAttributeEquals(nextItem, 'data-p-disabled', true) || DomHandler.isAttributeEquals(nextItem, 'data-pc-section', 'itemgroup') ? findNextItem(nextItem) : nextItem) : null;
    };

    const findPrevItem = (item) => {
        const prevItem = item.previousElementSibling;

        return prevItem ? (DomHandler.isAttributeEquals(prevItem, 'data-p-disabled', true) || DomHandler.isAttributeEquals(prevItem, 'data-pc-section', 'itemgroup') ? findPrevItem(prevItem) : prevItem) : null;
    };

    const content = props.template ? ObjectUtils.getJSXElement(props.template, props.option) : props.label;
    const itemProps = mergeProps(
        {
            id: props.id,
            className: cx('item', { props }),
            style: props.style,
            onClick: (event) => props.onClick(event, props.option, props.index),
            onTouchEnd: onTouchEnd,
            onFocus: onFocus,
            onBlur: onBlur,
            tabIndex: '-1',
            'aria-label': props.label,
            key: props.optionKey,
            role: 'option',
            'aria-selected': props.selected,
            'aria-disabled': props.disabled,
            'data-p-disabled': props.disabled
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

ListBoxItem.displayName = 'ListBoxItem';
