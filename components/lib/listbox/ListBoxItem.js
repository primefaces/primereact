import * as React from 'react';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, mergeProps, ObjectUtils } from '../utils/Utils';

export const ListBoxItem = React.memo((props) => {
    const {
        ptCallbacks: { ptm, cx }
    } = props;

    const getPTOptions = (key) => {
        return ptm(key, {
            hostName: props.hostName,
            context: {
                selected: props.selected,
                disabled: props.disabled
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

    const onTouchEnd = (event) => {
        if (props.onTouchEnd) {
            props.onTouchEnd({
                originalEvent: event,
                option: props.option
            });
        }
    };

    const onKeyDown = (event) => {
        const item = event.currentTarget;

        switch (event.which) {
            //down
            case 40:
                const nextItem = findNextItem(item);

                nextItem && nextItem.focus();

                event.preventDefault();
                break;

            //up
            case 38:
                const prevItem = findPrevItem(item);

                prevItem && prevItem.focus();

                event.preventDefault();
                break;

            //enter
            case 13:
                onClick(event);
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
            onClick: onClick,
            onTouchEnd: onTouchEnd,
            onKeyDown: onKeyDown,
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
