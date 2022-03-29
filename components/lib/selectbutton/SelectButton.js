import React, { forwardRef, memo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { SelectButtonItem } from './SelectButtonItem';
import { tip } from '../tooltip/Tooltip';
import { ObjectUtils, classNames } from '../utils/Utils';
import { useUnmountEffect } from '../hooks/Hooks';

export const SelectButton = memo(forwardRef((props, ref) => {
    const elementRef = useRef(null);
    const tooltipRef = useRef(null);

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
        }
        else {
            newValue = selected ? null : optionValue;
        }

        if (props.onChange) {
            props.onChange({
                originalEvent: event.originalEvent,
                value: newValue,
                stopPropagation: () => { },
                preventDefault: () => { },
                target: {
                    name: props.name,
                    id: props.id,
                    value: newValue,
                }
            });
        }
    }

    const getOptionLabel = (option) => {
        return props.optionLabel ? ObjectUtils.resolveFieldData(option, props.optionLabel) : (option && option['label'] !== undefined ? option['label'] : option);
    }

    const getOptionValue = (option) => {
        return props.optionValue ? ObjectUtils.resolveFieldData(option, props.optionValue) : (option && option['value'] !== undefined ? option['value'] : option);
    }

    const isOptionDisabled = (option) => {
        if (props.optionDisabled) {
            return ObjectUtils.isFunction(props.optionDisabled) ? props.optionDisabled(option) : ObjectUtils.resolveFieldData(option, props.optionDisabled);
        }

        return (option && option['disabled'] !== undefined ? option['disabled'] : false);
    }

    const isSelected = (option) => {
        let optionValue = getOptionValue(option);

        if (props.multiple) {
            if (props.value && props.value.length) {
                return props.value.some((val) => ObjectUtils.equals(val, optionValue, props.dataKey));
            }
        }
        else {
            return ObjectUtils.equals(props.value, optionValue, props.dataKey);
        }

        return false;
    }

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

    const createItems = () => {
        if (props.options && props.options.length) {
            return props.options.map((option, index) => {
                const isDisabled = props.disabled || isOptionDisabled(option);
                const optionLabel = getOptionLabel(option);
                const tabIndex = isDisabled ? null : 0;
                const selected = isSelected(option);
                const key = optionLabel + '_' + index;

                return <SelectButtonItem key={key} label={optionLabel} className={option.className} option={option} onClick={onOptionClick} template={props.itemTemplate}
                    selected={selected} tabIndex={tabIndex} disabled={isDisabled} ariaLabelledBy={props.ariaLabelledBy} />
            });
        }

        return null;
    }

    const className = classNames('p-selectbutton p-buttonset p-component', props.className);
    const items = createItems();

    return (
        <div ref={elementRef} id={props.id} className={className} style={props.style} role="group">
            {items}
        </div>
    )
}));

SelectButton.defaultProps = {
    __TYPE: 'SelectButton',
    id: null,
    value: null,
    options: null,
    optionLabel: null,
    optionValue: null,
    optionDisabled: null,
    tabIndex: null,
    multiple: false,
    unselectable: true,
    disabled: false,
    style: null,
    className: null,
    dataKey: null,
    tooltip: null,
    tooltipOptions: null,
    ariaLabelledBy: null,
    itemTemplate: null,
    onChange: null
}

SelectButton.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.any,
    options: PropTypes.array,
    optionLabel: PropTypes.string,
    optionValue: PropTypes.string,
    optionDisabled: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    tabIndex: PropTypes.number,
    multiple: PropTypes.bool,
    unselectable: PropTypes.bool,
    disabled: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string,
    dataKey: PropTypes.string,
    tooltip: PropTypes.string,
    tooltipOptions: PropTypes.object,
    ariaLabelledBy: PropTypes.string,
    itemTemplate: PropTypes.func,
    onChange: PropTypes.func
}
