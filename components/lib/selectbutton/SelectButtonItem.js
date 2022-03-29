import React, { memo, useState } from 'react';
import { Ripple } from '../ripple/Ripple';
import { classNames, ObjectUtils } from '../utils/Utils';

export const SelectButtonItem = memo((props) => {
    const [focusedState, setFocusedState] = useState(false);

    const onClick = (event) => {
        if (props.onClick) {
            props.onClick({
                originalEvent: event,
                option: props.option
            });
        }
    }

    const onFocus = () => {
        setFocusedState(true);
    }

    const onBlur = () => {
        setFocusedState(false);
    }

    const onKeyDown = (event) => {
        const keyCode = event.which;
        if (keyCode === 32 || keyCode === 13) { //space and enter
            onClick(event);
            event.preventDefault();
        }
    }

    const createContent = () => {
        return props.template ? ObjectUtils.getJSXElement(props.template, props.option) : <span className="p-button-label p-c">{props.label}</span>;
    }

    const className = classNames('p-button p-component', {
        'p-highlight': props.selected,
        'p-disabled': props.disabled,
        'p-focus': focusedState
    }, props.className);
    const content = createContent();

    return (
        <div className={className} role="button" aria-label={props.label} aria-pressed={props.selected} aria-labelledby={props.ariaLabelledBy}
            onClick={onClick} onKeyDown={onKeyDown} tabIndex={props.tabIndex} onFocus={onFocus} onBlur={onBlur}>
            {content}
            {!props.disabled && <Ripple />}
        </div>
    )
});
