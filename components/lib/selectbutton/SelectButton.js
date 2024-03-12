import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps } from '../hooks/Hooks';
import { Tooltip } from '../tooltip/Tooltip';
import { DomHandler, ObjectUtils } from '../utils/Utils';
import { SelectButtonBase } from './SelectButtonBase';
import { SelectButtonItem } from './SelectButtonItem';

export const SelectButton = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = SelectButtonBase.getProps(inProps, context);

        const [focusedIndex, setFocusedIndex] = React.useState(0);
        const elementRef = React.useRef(null);

        const { ptm, cx, isUnstyled } = SelectButtonBase.setMetaData({
            props
        });

        useHandleStyle(SelectButtonBase.css.styles, isUnstyled, { name: 'selectbutton', styled: true });

        const onOptionClick = (event) => {
            if (props.disabled || isOptionDisabled(event.option)) {
                return;
            }

            let selected = isSelected(event.option);

            if (selected && !(props.unselectable && props.allowEmpty)) {
                return;
            }

            let optionValue = getOptionValue(event.option);
            let newValue;

            if (props.multiple) {
                let currentValue = props.value ? [...props.value] : [];

                newValue = selected ? currentValue.filter((val) => !ObjectUtils.equals(val, optionValue, props.dataKey)) : [...currentValue, optionValue];
            } else {
                newValue = selected ? null : optionValue;
            }

            if (props.onChange) {
                props.onChange({
                    originalEvent: event.originalEvent,
                    value: newValue,
                    stopPropagation: () => {
                        event.originalEvent.stopPropagation();
                    },
                    preventDefault: () => {
                        event.originalEvent.preventDefault();
                    },
                    target: {
                        name: props.name,
                        id: props.id,
                        value: newValue
                    }
                });
            }
        };

        const getOptionLabel = (option) => {
            return props.optionLabel ? ObjectUtils.resolveFieldData(option, props.optionLabel) : option && option['label'] !== undefined ? option['label'] : option;
        };

        const getOptionValue = (option) => {
            return props.optionValue ? ObjectUtils.resolveFieldData(option, props.optionValue) : option && option['value'] !== undefined ? option['value'] : option;
        };

        const isOptionDisabled = (option) => {
            if (props.optionDisabled) {
                return ObjectUtils.isFunction(props.optionDisabled) ? props.optionDisabled(option) : ObjectUtils.resolveFieldData(option, props.optionDisabled);
            }

            return option && option['disabled'] !== undefined ? option['disabled'] : false;
        };

        const isSelected = (option) => {
            let optionValue = getOptionValue(option);

            if (props.multiple) {
                if (props.value && props.value.length) {
                    return props.value.some((val) => ObjectUtils.equals(val, optionValue, props.dataKey));
                }
            } else {
                return ObjectUtils.equals(props.value, optionValue, props.dataKey);
            }

            return false;
        };

        const createItems = () => {
            if (props.options && props.options.length) {
                return props.options.map((option, index) => {
                    const isDisabled = props.disabled || isOptionDisabled(option);
                    const optionLabel = getOptionLabel(option);
                    const tabIndex = props.disabled || index !== focusedIndex ? '-1' : '0';
                    const selected = isSelected(option);
                    const key = optionLabel + '_' + index;

                    return (
                        <SelectButtonItem
                            hostName="SelectButton"
                            key={key}
                            label={optionLabel}
                            className={option.className}
                            option={option}
                            setFocusedIndex={setFocusedIndex}
                            onClick={onOptionClick}
                            template={props.itemTemplate}
                            selected={selected}
                            tabIndex={tabIndex}
                            index={index}
                            disabled={isDisabled}
                            ptm={ptm}
                            cx={cx}
                            elementRef={elementRef}
                        />
                    );
                });
            }

            return null;
        };

        React.useImperativeHandle(ref, () => ({
            props,
            focus: () => DomHandler.focusFirstElement(elementRef.current),
            getElement: () => elementRef.current
        }));

        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
        const items = createItems();

        const rootProps = mergeProps(
            {
                ref: elementRef,
                id: props.id,
                className: cx('root'),
                style: props.style,
                role: 'group'
            },
            SelectButtonBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <>
                <div {...rootProps}>
                    {items}
                    {props.children}
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} pt={ptm('tooltip')} {...props.tooltipOptions} />}
            </>
        );
    })
);

SelectButton.displayName = 'SelectButton';
