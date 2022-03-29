import React, { forwardRef, memo, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { tip } from '../tooltip/Tooltip';
import { ObjectUtils, classNames } from '../utils/Utils';
import { useUnmountEffect } from '../hooks/Hooks';

export const InputSwitch = memo(forwardRef((props, ref) => {
    const [focusedState, setFocusedState] = useState(false);
    const elementRef = useRef(null);
    const inputRef = useRef(props.inputRef);
    const tooltipRef = useRef(null);
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

    const onKeyDown = (event) => {
        if (event.key === 'Enter') {
            onClick(event);
        }
    }

    useEffect(() => {
        ObjectUtils.combinedRefs(inputRef, props.inputRef);
    }, [inputRef, props.inputRef]);

    useEffect(() => {
        if (tooltipRef.current) {
            tooltipRef.current.update({ content: props.tooltip, ...(props.tooltipOptions || {}) });
        }
        else if (props.tooltip) {
            tooltipRef.current = tip({
                target: elementRef.current,
                content: props.tooltip,
                options: props.tooltipOptions
            });
        }
    }, [props.tooltip, props.tooltipOptions]);

    useUnmountEffect(() => {
        if (tooltipRef.current) {
            tooltipRef.current.destroy();
            tooltipRef.current = null;
        }
    });

    const className = classNames('p-inputswitch p-component', {
        'p-inputswitch-checked': checked,
        'p-disabled': props.disabled,
        'p-inputswitch-focus': focusedState
    }, props.className);

    const inputSwitchProps = ObjectUtils.findDiffKeys(props, InputSwitch.defaultProps);

    return (
        <div ref={elementRef} id={props.id} className={className} style={props.style} onClick={onClick}
            role="checkbox" aria-checked={checked} {...inputSwitchProps}>
            <div className="p-hidden-accessible">
                <input ref={inputRef} type="checkbox" id={props.inputId} name={props.name} checked={checked} onChange={toggle}
                    onFocus={onFocus} onBlur={onBlur} onKeyDown={onKeyDown} disabled={props.disabled} role="switch" aria-checked={checked}
                    aria-labelledby={props.ariaLabelledBy} />
            </div>
            <span className="p-inputswitch-slider"></span>
        </div>
    )
}));

InputSwitch.defaultProps = {
    __TYPE: 'InputSwitch',
    id: null,
    inputRef: null,
    style: null,
    className: null,
    inputId: null,
    name: null,
    checked: false,
    trueValue: true,
    falseValue: false,
    disabled: false,
    tooltip: null,
    tooltipOptions: null,
    ariaLabelledBy: null,
    onChange: null,
    onFocus: null,
    onBlur: null
}

InputSwitch.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    inputRef: PropTypes.any,
    style: PropTypes.object,
    className: PropTypes.string,
    inputId: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.any,
    trueValue: PropTypes.any,
    falseValue: PropTypes.any,
    disabled: PropTypes.bool,
    tooltip: PropTypes.string,
    tooltipOptions: PropTypes.object,
    ariaLabelledBy: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
}
