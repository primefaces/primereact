import * as React from 'react';
import { classNames, DomHandler } from '../utils/Utils';

export const RowRadioButton = React.memo((props) => {
    const [focusedState, setFocusedState] = React.useState(false);
    const inputRef = React.useRef(null);

    const onFocus = () => {
        setFocusedState(true);
    };

    const onBlur = () => {
        setFocusedState(false);
    };

    const onClick = (event) => {
        if (!props.disabled) {
            props.onChange(event);

            DomHandler.focus(inputRef.current);
        }
    };

    const onKeyDown = (event) => {
        if (event.code === 'Space' || event.key === ' ') {
            // event.key is for Android support
            onClick(event);
            event.preventDefault();
        }
    };

    const onChange = (event) => {
        onClick(event);
    };

    const className = classNames('p-radiobutton p-component', { 'p-radiobutton-focused': focusedState });
    const boxClassName = classNames('p-radiobutton-box p-component', { 'p-highlight': props.checked, 'p-focus': focusedState, 'p-disabled': props.disabled });
    const name = `${props.tableSelector}_dt_radio`;

    return (
        <div className={className}>
            <div className="p-hidden-accessible">
                <input name={name} ref={inputRef} type="radio" checked={props.checked} onFocus={onFocus} onBlur={onBlur} onChange={onChange} onKeyDown={onKeyDown} aria-label={props.ariaLabel} />
            </div>
            <div className={boxClassName} onClick={onClick} role="radio" aria-checked={props.checked}>
                <div className="p-radiobutton-icon"></div>
            </div>
        </div>
    );
});

RowRadioButton.displayName = 'RowRadioButton';
