import React, { forwardRef, memo, useEffect, useMemo, useRef } from 'react';
import { KeyFilter } from '../keyfilter/KeyFilter';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';

export const InputText = memo(forwardRef((props, ref) => {
    const elementRef = useRef(ref);

    const onKeyPress = (event) => {
        props.onKeyPress && props.onKeyPress(event);

        if (props.keyfilter) {
            KeyFilter.onKeyPress(event, props.keyfilter, props.validateOnly)
        }
    }

    const onInput = (event) => {
        let validatePattern = true;
        if (props.keyfilter && props.validateOnly) {
            validatePattern = KeyFilter.validate(event, props.keyfilter);
        }

        props.onInput && props.onInput(event, validatePattern);

        if (!props.onChange) {
            const target = event.target;
            ObjectUtils.isNotEmpty(target.value) ? DomHandler.addClass(target, 'p-filled') : DomHandler.removeClass(target, 'p-filled');
        }
    }

    const isFilled = useMemo(() => (
        ObjectUtils.isNotEmpty(props.value) || ObjectUtils.isNotEmpty(props.defaultValue) || (elementRef.current && ObjectUtils.isNotEmpty(elementRef.current.value))
    ), [props.value, props.defaultValue]);

    useEffect(() => {
        ObjectUtils.combinedRefs(elementRef, ref);
    }, [elementRef, ref]);

    const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
    const inputProps = ObjectUtils.findDiffKeys(props, InputText.defaultProps);
    const className = classNames('p-inputtext p-component', {
        'p-disabled': props.disabled,
        'p-filled': isFilled
    }, props.className);

    return (
        <>
            <input ref={elementRef} {...inputProps} className={className} onInput={onInput} onKeyPress={onKeyPress} />
            {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} />}
        </>
    )
}));

InputText.defaultProps = {
    __TYPE: 'InputText',
    keyfilter: null,
    validateOnly: false,
    tooltip: null,
    tooltipOptions: null,
    onInput: null,
    onKeyPress: null
}
