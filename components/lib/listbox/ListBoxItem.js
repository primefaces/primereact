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

    const onClick = (event, index) => {
        if (props.onClick) {
            props.onClick({
                originalEvent: event,
                option: props.option
            });
        }

        props.setFocusedOptionIndex(index);

        event.preventDefault();
    };

    const onTouchEnd = (event) => {
        if (props.onTouchEnd) {
            props.onTouchEnd({
                originalEvent: event,
                option: props.option
            });
        }
    };

    const onKeyDown = (event, index) => {
        const item = event.currentTarget;

        switch (event.key) {
            case 'ArrowDown':
                const nextItem = findNextItem(item);

                props.setFocusedOptionIndex(index + 1 > props.length - 1 ? props.length - 1 : index + 1);

                nextItem && nextItem.focus();

                event.preventDefault();
                break;

            case 'ArrowUp':
                const prevItem = findPrevItem(item);

                props.setFocusedOptionIndex(index - 1 < 0 ? 0 : index - 1);

                prevItem && prevItem.focus();

                event.preventDefault();
                break;

            case 'Home':
                props.setFocusedOptionIndex(0);
                event.preventDefault();
                break;

            case 'End':
                props.setFocusedOptionIndex(props.length - 1);
                event.preventDefault();
                break;

            case 'Enter':
            case 'NumpadEnter':
            case 'Space':
                onClick(event, props.focusedOptionIndex);
                event.preventDefault();
                break;

            default:
                break;
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
            className: cx('item', { props }),
            style: props.style,
            onClick: (event) => onClick(event, props.index),
            onTouchEnd: onTouchEnd,
            onKeyDown: (event) => onKeyDown(event, props.focusedOptionIndex),
            onFocus: onFocus,
            onBlur: onBlur,
            tabIndex: '-1',
            'aria-label': props.label,
            key: props.label,
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
