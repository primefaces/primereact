import * as React from 'react';
import { IconUtils, classNames } from '../utils/Utils';
import { CheckIcon } from '../icons/check';

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
    const iconClassName = 'p-checkbox-icon';
    const icon = props.checked ? props.checkIcon || <CheckIcon className={iconClassName} /> : null;
    const checkIcon = IconUtils.getJSXIcon(icon, { className: iconClassName }, { props });
    const tabIndex = props.disabled ? null : '0';

    return (
        <div className={className} onClick={onClick}>
            <div className={boxClassName} role="checkbox" aria-checked={props.checked} tabIndex={tabIndex} onKeyDown={onKeyDown} onFocus={onFocus} onBlur={onBlur} aria-label={props.ariaLabel}>
                {checkIcon}
            </div>
        </div>
    );
});

RowCheckbox.displayName = 'RowCheckbox';
