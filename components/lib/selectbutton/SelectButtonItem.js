import * as React from 'react';
import { useMergeProps } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { classNames, ObjectUtils } from '../utils/Utils';

export const SelectButtonItem = React.memo((props) => {
    const [focusedState, setFocusedState] = React.useState(false);
    const mergeProps = useMergeProps();
    const { ptm, cx } = props;

    const getPTOptions = (key) => {
        return ptm(key, {
            hostName: props.hostName,
            context: {
                selected: props.selected,
                disabled: props.disabled,
                option: props.option
            }
        });
    };

    const onClick = (event, index) => {
        props.setFocusedIndex(index);

        if (props.onClick) {
            props.onClick({
                originalEvent: event,
                option: props.option
            });
        }
    };

    const onFocus = () => {
        setFocusedState(true);
    };

    const onBlur = () => {
        setFocusedState(false);
    };

    const onKeyDown = (event, index) => {
        switch (event.code) {
            case 'Space': {
                onClick(event, index);
                event.preventDefault();
                break;
            }

            case 'ArrowDown':

            case 'ArrowRight': {
                changeTabIndexes(event, 'next');
                event.preventDefault();
                break;
            }

            case 'ArrowUp':

            case 'ArrowLeft': {
                changeTabIndexes(event, 'prev');
                event.preventDefault();
                break;
            }

            default:
                break;
        }
    };

    const changeTabIndexes = (event, direction) => {
        let firstTabableChild, index;

        for (let i = 0; i <= props.elementRef.current.children.length - 1; i++) {
            if (props.elementRef.current.children[i].getAttribute('tabindex') === '0') firstTabableChild = { elem: props.elementRef.current.children[i], index: i };
        }

        if (direction === 'prev') {
            if (firstTabableChild.index === 0) index = props.elementRef.current.children.length - 1;
            else index = firstTabableChild.index - 1;
        } else {
            if (firstTabableChild.index === props.elementRef.current.children.length - 1) index = 0;
            else index = firstTabableChild.index + 1;
        }

        props.setFocusedIndex(index);
        props.elementRef.current.children[index].focus();
    };

    const createContent = () => {
        const labelProps = mergeProps(
            {
                className: cx('label')
            },
            getPTOptions('label')
        );

        return props.template ? ObjectUtils.getJSXElement(props.template, props.option) : <span {...labelProps}>{props.label}</span>;
    };

    const content = createContent();

    const buttonProps = mergeProps(
        {
            className: classNames(props.className, cx('button', { itemProps: props, focusedState })),
            role: 'button',
            'aria-label': props.label,
            'aria-pressed': props.selected,
            onClick: (event) => onClick(event, props.index),
            onKeyDown: (event) => onKeyDown(event, props.index),
            tabIndex: props.tabIndex,
            'aria-disabled': props.disabled,
            onFocus: onFocus,
            onBlur: onBlur
        },
        getPTOptions('button')
    );

    return (
        <div {...buttonProps}>
            {content}
            {!props.disabled && <Ripple />}
        </div>
    );
});

SelectButtonItem.displayName = 'SelectButtonItem';
