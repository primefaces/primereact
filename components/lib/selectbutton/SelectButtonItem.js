import * as React from 'react';
import { Ripple } from '../ripple/Ripple';
import { classNames, ObjectUtils } from '../utils/Utils';

export const SelectButtonItem = React.memo((props) => {
    const [focusedState, setFocusedState] = React.useState(false);

    const onClick = (event) => {
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

    const onKeyDown = (event) => {
        const keyCode = event.which;

        if (keyCode === 32) {
            onClick(event);
            event.preventDefault();
        }
    };

    const createContent = () => {
        return props.template ? ObjectUtils.getJSXElement(props.template, props.option) : <span className="p-button-label p-c">{props.label}</span>;
    };

    const className = classNames(
        'p-button p-component',
        {
            'p-highlight': props.selected,
            'p-disabled': props.disabled,
            'p-focus': focusedState
        },
        props.className
    );
    const content = createContent();

    return (
        <div className={className} role="button" aria-label={props.label} aria-pressed={props.selected} onClick={onClick} onKeyDown={onKeyDown} tabIndex={props.tabIndex} onFocus={onFocus} onBlur={onBlur}>
            {content}
            {!props.disabled && <Ripple />}
        </div>
    );
});

SelectButtonItem.displayName = 'SelectButtonItem';
