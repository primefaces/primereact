import * as React from 'react';
import { classNames } from '../utils/Utils';

export const RowCheckbox = React.memo((props) => {
    const [focusedState, setFocusedState] = React.useState(false);

    const onFocus = () => {
        setFocusedState(true);
    };

    const onBlur = () => {
        setFocusedState(false);
    };

    const onClick = (event) => {
        if (!props.disabled) {
            setFocusedState(true);

            props.onChange(event);
        }
    };

    const onKeyDown = (event) => {
        if (event.code === 'Space' || event.key === ' ') {
            // event.key is for Android support
            onClick(event);
            event.preventDefault();
        }
    };

    const className = classNames('p-checkbox p-component', { 'p-checkbox-focused': focusedState });
    const boxClassName = classNames('p-checkbox-box p-component', { 'p-highlight': props.checked, 'p-disabled': props.disabled, 'p-focus': focusedState });
    const iconClassName = classNames('p-checkbox-icon', { 'pi pi-check': props.checked });
    const tabIndex = props.disabled ? null : '0';

    return (
        <div className={className} onClick={onClick}>
            <div className={boxClassName} role="checkbox" aria-checked={props.checked} tabIndex={tabIndex} onKeyDown={onKeyDown} onFocus={onFocus} onBlur={onBlur} aria-label={props.ariaLabel}>
                <span className={iconClassName}></span>
            </div>
        </div>
    );
});

RowCheckbox.displayName = 'RowCheckbox';
