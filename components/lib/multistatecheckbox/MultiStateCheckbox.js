import * as React from 'react';
import { ariaLabel, PrimeReactContext } from '../api/Api';
import { Checkbox } from '../checkbox/Checkbox';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps, useMountEffect } from '../hooks/Hooks';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, DomHandler, IconUtils, ObjectUtils, UniqueComponentId } from '../utils/Utils';
import { MultiStateCheckboxBase } from './MultiStateCheckboxBase';

export const MultiStateCheckbox = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = MultiStateCheckboxBase.getProps(inProps, context);

        const [focusedState, setFocusedState] = React.useState(false);
        const elementRef = React.useRef(null);
        const equalityKey = props.optionValue ? null : props.dataKey;

        const { ptm, cx, sx, isUnstyled } = MultiStateCheckboxBase.setMetaData({
            props,
            state: {
                focused: focusedState
            }
        });

        useHandleStyle(MultiStateCheckboxBase.css.styles, isUnstyled, { name: 'multistatecheckbox' });

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
                    stopPropagation: () => {
                        event?.stopPropagation();
                    },
                    preventDefault: () => {
                        event?.preventDefault();
                    },
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
            let option;
            let index;

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

            if (props.autoFocus) {
                DomHandler.focusFirstElement(elementRef.current);
            }
        });

        const createIcon = () => {
            const icon = (selectedOption && getOptionIcon(selectedOption)) || '';
            const className = classNames('p-checkbox-icon p-c', {
                [`${icon}`]: true
            });
            const iconProps = mergeProps(
                {
                    className: cx('icon', { icon })
                },
                ptm('icon')
            );

            const content = IconUtils.getJSXIcon(icon, { ...iconProps }, { props });

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
        const icon = createIcon();
        const ariaValueLabel = selectedOption ? getOptionAriaLabel(selectedOption) : ariaLabel('nullLabel');

        const rootProps = mergeProps(
            {
                ref: elementRef,
                id: props.id,
                className: classNames(props.className, cx('root')),
                style: props.style,
                onClick: onClick
            },
            MultiStateCheckboxBase.getOtherProps(props),
            ptm('root')
        );

        const inputId = React.useMemo(() => props.id || UniqueComponentId(), [props.id]);

        const checkboxProps = mergeProps(
            {
                id: inputId + '_checkbox',
                inputId: props.inputId || inputId + '_multistatecheckbox',
                className: cx('checkbox'),
                style: sx('checkbox', { selectedOption }),
                tabIndex: props.tabIndex,
                onFocus: onFocus,
                onBlur: onBlur,
                onKeyDown: onKeyDown,
                onChange: onClick,
                checked: !!selectedOption,
                disabled: props?.disabled,
                icon,
                ...ariaProps
            },
            ptm('checkbox')
        );

        const srOnlyAriaProps = mergeProps(
            {
                className: 'p-hidden-accessible',
                'aria-live': 'polite'
            },
            ptm('srOnlyAria')
        );

        return (
            <>
                <div {...rootProps}>
                    <Checkbox {...checkboxProps} />
                    {focusedState && <span {...srOnlyAriaProps}>{ariaValueLabel}</span>}
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} pt={ptm('tooltip')} {...props.tooltipOptions} />}
            </>
        );
    })
);

MultiStateCheckbox.displayName = 'MultiStateCheckbox';
