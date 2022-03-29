import React, { forwardRef, memo, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { tip } from '../tooltip/Tooltip';
import { ObjectUtils, classNames } from '../utils/Utils';
import { useMountEffect, useUnmountEffect } from '../hooks/Hooks';

export const MultiStateCheckbox = memo(forwardRef((props, ref) => {
    const [focusedState, setFocusedState] = useState(false);
    const elementRef = useRef(null);
    const inputRef = useRef(props.inputRef);
    const tooltipRef = useRef(null);
    const equalityKey = props.optionValue ? null : props.dataKey;

    const onClick = (event) => {
        if (!props.disabled && !props.readOnly) {
            toggle(event);
            inputRef.current.focus();
        }
    }

    const getOptionValue = (option) => {
        return props.optionValue ? ObjectUtils.resolveFieldData(option, props.optionValue) : option;
    }

    const findNextOption = () => {
        if (props.options) {
            return selectedOptionIndex === props.options.length - 1 ? (props.empty ? null : props.options[0]) : props.options[selectedOptionIndex + 1];
        }

        return null;
    }

    const toggle = (event) => {
        if (props.onChange) {
            const newValue = getOptionValue(findNextOption());

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

    const getSelectedOptionMap = () => {
        let option, index;

        if (props.options) {
            index = props.options.findIndex(option => ObjectUtils.equals(props.value, getOptionValue(option), equalityKey));
            option = props.options[index];
        }

        return { option, index };
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

    useMountEffect(() => {
        if (!props.empty && props.value === null) {
            toggle();
        }
    });

    useUnmountEffect(() => {
        if (tooltipRef.current) {
            tooltipRef.current.destroy();
            tooltipRef.current = null;
        }
    });

    const createIcon = () => {
        const icon = (selectedOption && selectedOption.icon) || '';
        const className = classNames('p-checkbox-icon p-c', {
            [`${icon}`]: true
        });
        const content = <span className={className}></span>;

        if (props.iconTemplate) {
            const defaultOptions = {
                option: selectedOption,
                className,
                element: content,
                props
            }

            return ObjectUtils.getJSXElement(props.iconTemplate, defaultOptions);
        }

        return content;
    }

    const { option: selectedOption, index: selectedOptionIndex } = getSelectedOptionMap();

    const className = classNames('p-multistatecheckbox p-checkbox p-component', props.className);
    const boxClassName = classNames('p-checkbox-box', {
        'p-highlight': !!selectedOption,
        'p-disabled': props.disabled,
        'p-focus': focusedState
    }, selectedOption && selectedOption.className);
    const icon = createIcon();

    return (
        <div ref={elementRef} id={props.id} className={className} style={props.style} onClick={onClick}>
            <div className="p-hidden-accessible">
                <input ref={inputRef} type="checkbox" aria-labelledby={props.ariaLabelledBy} id={props.inputId} name={props.name}
                    onFocus={onFocus} onBlur={onBlur} disabled={props.disabled} readOnly={props.readOnly} defaultChecked={!!selectedOption} />
            </div>
            <div className={boxClassName} role="checkbox" aria-checked={!!selectedOption} style={selectedOption && selectedOption.style}>
                {icon}
            </div>
        </div>
    )
}));

MultiStateCheckbox.defaultProps = {
    __TYPE: 'MultiStateCheckbox',
    id: null,
    inputRef: null,
    inputId: null,
    value: null,
    options: null,
    optionValue: null,
    iconTemplate: null,
    dataKey: null,
    name: null,
    style: null,
    className: null,
    disabled: false,
    readOnly: false,
    empty: true,
    tooltip: null,
    tooltipOptions: null,
    ariaLabelledBy: null,
    onChange: null
}

MultiStateCheckbox.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    inputRef: PropTypes.any,
    inputId: PropTypes.string,
    value: PropTypes.any,
    options: PropTypes.any,
    optionValue: PropTypes.string,
    iconTemplate: PropTypes.any,
    dataKey: PropTypes.string,
    name: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    empty: PropTypes.bool,
    tooltip: PropTypes.string,
    tooltipOptions: PropTypes.object,
    ariaLabelledBy: PropTypes.string,
    onChange: PropTypes.func
}
