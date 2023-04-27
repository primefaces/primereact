import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { useMountEffect } from '../hooks/Hooks';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';
import { MultiStateCheckboxBase } from './MultiStateCheckboxBase';

export const MultiStateCheckbox = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = MultiStateCheckboxBase.getProps(inProps);

        const [focusedState, setFocusedState] = React.useState(false);
        const elementRef = React.useRef(null);
        const equalityKey = props.optionValue ? null : props.dataKey;

        const onClick = (event) => {
            if (!props.disabled && !props.readOnly) {
                toggle(event);
            }
        };

        const getOptionValue = (option) => {
            return props.optionValue ? ObjectUtils.resolveFieldData(option, props.optionValue) : option;
        };

        const getOptionIcon = (option) => {
            return ObjectUtils.resolveFieldData(option, props.optionIcon || 'icon');
        };

        const getOptionAriaLabel = (option) => {
            const ariaField = props.optionLabel || props.optionValue;

            return ariaField ? ObjectUtils.resolveFieldData(option, ariaField) : option;
        };

        const findNextOption = () => {
            if (props.options) {
                return selectedOptionIndex === props.options.length - 1 ? (props.empty ? null : props.options[0]) : props.options[selectedOptionIndex + 1];
            }

            return null;
        };

        const toggle = (event) => {
            if (props.onChange) {
                const newValue = getOptionValue(findNextOption());

                props.onChange({
                    originalEvent: event,
                    value: newValue,
                    stopPropagation: () => {},
                    preventDefault: () => {},
                    target: {
                        name: props.name,
                        id: props.id,
                        value: newValue
                    }
                });
            }
        };

        const onFocus = () => {
            setFocusedState(true);
        };

        const onBlur = () => {
            setFocusedState(false);
        };

        const onKeyDown = (e) => {
            if (e.keyCode === 32) {
                toggle(e);
                e.preventDefault();
            }
        };

        const getSelectedOptionMap = () => {
            let option, index;

            if (props.options) {
                index = props.options.findIndex((option) => ObjectUtils.equals(props.value, getOptionValue(option), equalityKey));
                option = props.options[index];
            }

            return { option, index };
        };

        React.useImperativeHandle(ref, () => ({
            props,
            focus: () => DomHandler.focusFirstElement(elementRef.current),
            getElement: () => elementRef.current
        }));

        useMountEffect(() => {
            if (!props.empty && props.value === null) {
                toggle();
            }
        });

        const createIcon = () => {
            const icon = (selectedOption && getOptionIcon(selectedOption)) || '';
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
                };

                return ObjectUtils.getJSXElement(props.iconTemplate, defaultOptions);
            }

            return content;
        };

        const { option: selectedOption, index: selectedOptionIndex } = getSelectedOptionMap();

        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
        const otherProps = MultiStateCheckboxBase.getOtherProps(props);
        const ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);
        const className = classNames('p-multistatecheckbox p-checkbox p-component', props.className, { 'p-checkbox-disabled': props.disabled });
        const boxClassName = classNames(
            'p-checkbox-box',
            {
                'p-highlight': !!selectedOption,
                'p-disabled': props.disabled,
                'p-focus': focusedState
            },
            selectedOption && selectedOption.className
        );
        const icon = createIcon();
        const ariaValueLabel = !!selectedOption ? getOptionAriaLabel(selectedOption) : ariaLabel('nullLabel');
        const ariaChecked = !!selectedOption ? 'true' : 'false';

        return (
            <>
                <div ref={elementRef} id={props.id} className={className} style={props.style} {...otherProps} onClick={onClick}>
                    <div className={boxClassName} style={selectedOption && selectedOption.style} tabIndex={props.tabIndex} onFocus={onFocus} onBlur={onBlur} onKeyDown={onKeyDown} role="checkbox" aria-checked={ariaChecked} {...ariaProps}>
                        {icon}
                    </div>
                    {focusedState && (
                        <span className="p-sr-only" aria-live="polite">
                            {ariaValueLabel}
                        </span>
                    )}
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} />}
            </>
        );
    })
);

MultiStateCheckbox.displayName = 'MultiStateCheckbox';
