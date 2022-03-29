import React, { forwardRef, memo, useEffect, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { KeyFilter } from '../keyfilter/KeyFilter';
import { tip } from '../tooltip/Tooltip';
import { DomHandler, ObjectUtils, classNames } from '../utils/Utils';
import { useUnmountEffect } from '../hooks/Hooks';

export const InputText = memo(forwardRef((props, ref) => {
    const elementRef = useRef(ref);
    const tooltipRef = useRef(null);

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

    const inputProps = ObjectUtils.findDiffKeys(props, InputText.defaultProps);
    const className = classNames('p-inputtext p-component', {
        'p-disabled': props.disabled,
        'p-filled': isFilled
    }, props.className);

    return <input ref={elementRef} {...inputProps} className={className} onInput={onInput} onKeyPress={onKeyPress} />;
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

InputText.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    keyfilter: PropTypes.any,
    validateOnly: PropTypes.bool,
    tooltip: PropTypes.string,
    tooltipOptions: PropTypes.object,
    onInput: PropTypes.func,
    onKeyPress: PropTypes.func
}
