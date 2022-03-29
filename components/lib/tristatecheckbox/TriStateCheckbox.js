import React, { forwardRef, memo, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { tip } from '../tooltip/Tooltip';
import { classNames, ObjectUtils } from '../utils/Utils';
import { useUnmountEffect } from '../hooks/Hooks';

export const TriStateCheckbox = memo(forwardRef((props, ref) => {
    const [focusedState, setFocusedState] = useState(false);
    const elementRef = useRef(null);
    const tooltipRef = useRef(null);
    const inputRef = useRef(props.inputRef);

    const onClick = (event) => {
        if (!props.disabled) {
            toggle(event);
            inputRef.current.focus();
        }
    }

    const toggle = (event) => {
        let newValue;
        if (props.value === null || props.value === undefined)
            newValue = true;
        else if (props.value === true)
            newValue = false;
        else if (props.value === false)
            newValue = null;

        if (props.onChange) {
            props.onChange({
                originalEvent: event,
                value: newValue,
                stopPropagation: () => { },
                preventDefault: () => { },
                target: {
                    name: props.name,
                    id: props.id,
                    value: newValue
                }
            });
        }
    }

    const onFocus = () => {
        setFocusedState(true);
    }

    const onBlur = () => {
        setFocusedState(false);
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

    const className = classNames('p-tristatecheckbox p-checkbox p-component', props.className);
    const boxClassName = classNames('p-checkbox-box', {
        'p-highlight': (props.value || !props.value) && props.value !== null,
        'p-disabled': props.disabled,
        'p-focus': focusedState
    });
    const iconClassName = classNames('p-checkbox-icon p-c', {
        'pi pi-check': props.value === true,
        'pi pi-times': props.value === false
    });

    return (
        <div ref={elementRef} id={props.id} className={className} style={props.style} onClick={onClick}>
            <div className="p-hidden-accessible">
                <input ref={inputRef} type="checkbox" aria-labelledby={props.ariaLabelledBy} id={props.inputId} name={props.name}
                    onFocus={onFocus} onBlur={onBlur} disabled={props.disabled} defaultChecked={props.value} />
            </div>
            <div className={boxClassName} role="checkbox" aria-checked={props.value === true}>
                <span className={iconClassName}></span>
            </div>
        </div>
    )
}));

TriStateCheckbox.defaultProps = {
    __TYPE: 'TriStateCheckbox',
    id: null,
    inputRef: null,
    inputId: null,
    value: null,
    name: null,
    style: null,
    className: null,
    disabled: false,
    tooltip: null,
    tooltipOptions: null,
    ariaLabelledBy: null,
    onChange: null
}

TriStateCheckbox.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    inputRef: PropTypes.any,
    inputId: PropTypes.string,
    value: PropTypes.bool,
    name: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    tooltip: PropTypes.string,
    tooltipOptions: PropTypes.object,
    ariaLabelledBy: PropTypes.string,
    onChange: PropTypes.func
}
