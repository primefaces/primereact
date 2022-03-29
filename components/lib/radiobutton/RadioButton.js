import React, { forwardRef, memo, useEffect, useImperativeHandle, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { tip } from '../tooltip/Tooltip';
import { classNames, ObjectUtils } from '../utils/Utils';
import { useUnmountEffect } from '../hooks/Hooks';

export const RadioButton = memo(forwardRef((props, ref) => {
    const [focusedState, setFocusedState] = useState(false);
    const elementRef = useRef(null);
    const inputRef = useRef(props.inputRef);
    const tooltipRef = useRef(null);

    const select = (e) => {
        inputRef.current.checked = true;
        onClick(e);
    }

    const onClick = (e) => {
        if (!props.disabled && props.onChange) {
            props.onChange({
                originalEvent: e,
                value: props.value,
                checked: !props.checked,
                stopPropagation: () => { },
                preventDefault: () => { },
                target: {
                    name: props.name,
                    id: props.id,
                    value: props.value,
                    checked: !props.checked
                }
            });

            inputRef.current.checked = !props.checked;
            inputRef.current.focus();
        }
    }

    const onFocus = () => {
        setFocusedState(true);
    }

    const onBlur = () => {
        setFocusedState(false);
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.checked = props.checked;
        }
    }, [props.checked]);

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

    useImperativeHandle(ref, () => {
        select
    });

    const className = classNames('p-radiobutton p-component', {
        'p-radiobutton-checked': props.checked,
        'p-radiobutton-disabled': props.disabled,
        'p-radiobutton-focused': focusedState
    }, props.className);
    const boxClassName = classNames('p-radiobutton-box', {
        'p-highlight': props.checked,
        'p-disabled': props.disabled,
        'p-focus': focusedState
    });

    return (
        <div ref={elementRef} id={props.id} className={className} style={props.style} onClick={onClick}>
            <div className="p-hidden-accessible">
                <input ref={inputRef} id={props.inputId} type="radio" aria-labelledby={props.ariaLabelledBy} name={props.name} defaultChecked={props.checked}
                    onFocus={onFocus} onBlur={onBlur} disabled={props.disabled} required={props.required} tabIndex={props.tabIndex} />
            </div>
            <div className={boxClassName} role="radio" aria-checked={props.checked}>
                <div className="p-radiobutton-icon"></div>
            </div>
        </div>
    )
}));

RadioButton.defaultProps = {
    __TYPE: 'RadioButton',
    id: null,
    inputRef: null,
    inputId: null,
    name: null,
    value: null,
    checked: false,
    style: null,
    className: null,
    disabled: false,
    required: false,
    tabIndex: null,
    tooltip: null,
    tooltipOptions: null,
    ariaLabelledBy: null,
    onChange: null
}

RadioButton.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    inputRef: PropTypes.any,
    inputId: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    checked: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    tabIndex: PropTypes.number,
    tooltip: PropTypes.string,
    tooltipOptions: PropTypes.object,
    ariaLabelledBy: PropTypes.string,
    onChange: PropTypes.func
}
