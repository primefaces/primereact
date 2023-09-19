import * as React from 'react';
import { Tooltip } from '../tooltip/Tooltip';
import { DomHandler, mergeProps, ObjectUtils } from '../utils/Utils';
import { SelectButtonBase } from './SelectButtonBase';
import { SelectButtonItem } from './SelectButtonItem';
import { PrimeReactContext } from '../api/Api';

export const SelectButton = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = SelectButtonBase.getProps(inProps, context);

        const elementRef = React.useRef(null);

        const { ptm, cx } = SelectButtonBase.setMetaData({
            props
        });

        const onOptionClick = (event) => {
            if (props.disabled || isOptionDisabled(event.option)) {
                return;
            }

            let selected = isSelected(event.option);

            if (selected && !props.unselectable) {
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
                    const tabIndex = isDisabled ? null : 0;
                    const selected = isSelected(option);
                    const key = optionLabel + '_' + index;

                    return (
                        <SelectButtonItem
                            hostName="SelectButton"
                            key={key}
                            label={optionLabel}
                            className={option.className}
                            option={option}
                            onClick={onOptionClick}
                            template={props.itemTemplate}
                            selected={selected}
                            tabIndex={tabIndex}
                            disabled={isDisabled}
                            ptm={ptm}
                            cx={cx}
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
                <div {...rootProps}>{items}</div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} pt={ptm('tooltip')} />}
            </>
        );
    })
);

SelectButton.displayName = 'SelectButton';
