import * as React from 'react';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, ObjectUtils } from '../utils/Utils';

export const InputSwitch = React.memo(React.forwardRef((props, ref) => {
    const [focusedState, setFocusedState] = React.useState(false);
    const elementRef = React.useRef(null);
    const inputRef = React.useRef(props.inputRef);
    const checked = props.checked === props.trueValue;

    const onClick = (event) => {
        if (props.disabled) {
            return;
        }

        toggle(event);
        inputRef.current.focus();

        event.preventDefault();
    }

    const toggle = (event) => {
        if (props.onChange) {
            const value = checked ? props.falseValue : props.trueValue;

            props.onChange({
                originalEvent: event,
                value,
                stopPropagation: () => { },
                preventDefault: () => { },
                target: {
                    name: props.name,
                    id: props.id,
                    value
                }
            });
        }
    }

    const onFocus = (event) => {
        setFocusedState(true);
        props.onFocus && props.onFocus(event);
    }

    const onBlur = (event) => {
        setFocusedState(false);
        props.onBlur && props.onBlur(event);
    }

    React.useEffect(() => {
        ObjectUtils.combinedRefs(inputRef, props.inputRef);
    }, [inputRef, props.inputRef]);

    const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
    const otherProps = ObjectUtils.findDiffKeys(props, InputSwitch.defaultProps);
    const className = classNames('p-inputswitch p-component', {
        'p-inputswitch-checked': checked,
        'p-disabled': props.disabled,
        'p-focus': focusedState
    }, props.className);

    return (
        <>
            <div ref={elementRef} id={props.id} className={className} style={props.style} {...otherProps} onClick={onClick} role="checkbox" aria-checked={checked}>
                <div className="p-hidden-accessible">
                    <input ref={inputRef} type="checkbox" id={props.inputId} name={props.name} checked={checked} onChange={toggle}
                        onFocus={onFocus} onBlur={onBlur} disabled={props.disabled} role="switch" tabIndex={props.tabIndex} aria-checked={checked}
                        aria-labelledby={props['aria-labelledby']} aria-label={props['aria-label']} />
                </div>
                <span className="p-inputswitch-slider"></span>
            </div>
            {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} />}
        </>
    )
}));

InputSwitch.displayName = 'InputSwitch';
InputSwitch.defaultProps = {
    __TYPE: 'InputSwitch',
    id: null,
    inputRef: null,
    style: null,
    className: null,
    inputId: null,
    name: null,
    tabIndex: null,
    checked: false,
    trueValue: true,
    falseValue: false,
    disabled: false,
    tooltip: null,
    tooltipOptions: null,
    'aria-label': null,
    'aria-labelledby': null,
    onChange: null,
    onFocus: null,
    onBlur: null
}
