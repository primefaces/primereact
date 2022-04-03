import * as React from 'react';
import { useMountEffect } from '../hooks/Hooks';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, ObjectUtils } from '../utils/Utils';

export const MultiStateCheckbox = React.memo(React.forwardRef((props, ref) => {
    const [focusedState, setFocusedState] = React.useState(false);
    const elementRef = React.useRef(null);
    const inputRef = React.useRef(props.inputRef);
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

    React.useEffect(() => {
        ObjectUtils.combinedRefs(inputRef, props.inputRef);
    }, [inputRef, props.inputRef]);

    useMountEffect(() => {
        if (!props.empty && props.value === null) {
            toggle();
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

    const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
    const otherProps = ObjectUtils.findDiffKeys(props, MultiStateCheckbox.defaultProps);
    const className = classNames('p-multistatecheckbox p-checkbox p-component', props.className);
    const boxClassName = classNames('p-checkbox-box', {
        'p-highlight': !!selectedOption,
        'p-disabled': props.disabled,
        'p-focus': focusedState
    }, selectedOption && selectedOption.className);
    const icon = createIcon();

    return (
        <>
            <div ref={elementRef} id={props.id} className={className} style={props.style} {...otherProps} onClick={onClick}>
                <div className="p-hidden-accessible">
                    <input ref={inputRef} type="checkbox" aria-labelledby={props.ariaLabelledBy} id={props.inputId} name={props.name}
                        onFocus={onFocus} onBlur={onBlur} disabled={props.disabled} readOnly={props.readOnly} defaultChecked={!!selectedOption} />
                </div>
                <div className={boxClassName} role="checkbox" aria-checked={!!selectedOption} style={selectedOption && selectedOption.style}>
                    {icon}
                </div>
            </div>
            {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} />}
        </>
    )
}));

MultiStateCheckbox.displayName = 'MultiStateCheckbox';
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
