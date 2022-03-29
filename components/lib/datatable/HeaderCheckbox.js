import React, { memo, useState } from 'react';
import { classNames } from '../utils/Utils';

export const HeaderCheckbox = memo((props) => {
    const [focusedState, setFocusedState] = useState(false);

    const onFocus = () => {
        setFocusedState(true);
    }

    const onBlur = () => {
        setFocusedState(false);
    }

    const onClick = (event) => {
        if (!props.disabled) {
            setFocusedState(true);

            props.onChange({
                originalEvent: event,
                checked: !props.checked
            });
        }
    }

    const onKeyDown = (event) => {
        if (event.code === 'Space') {
            onClick(event);
            event.preventDefault();
        }
    }

    const boxClassName = classNames('p-checkbox-box p-component', {
        'p-highlight': props.checked,
        'p-disabled': props.disabled,
        'p-focus': focusedState
    });
    const iconClassName = classNames('p-checkbox-icon', {
        'pi pi-check': props.checked
    });
    const tabIndex = props.disabled ? null : 0;

    return (
        <div className="p-checkbox p-component" onClick={onClick}>
            <div className={boxClassName} role="checkbox" aria-checked={props.checked} tabIndex={tabIndex} onFocus={onFocus} onBlur={onBlur} onKeyDown={onKeyDown}>
                <span className={iconClassName}></span>
            </div>
        </div>
    )
});
