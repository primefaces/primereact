import React, { forwardRef, memo, useEffect, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { tip } from '../tooltip/Tooltip';
import { DomHandler, ObjectUtils, classNames } from '../utils/Utils';
import { useUnmountEffect } from '../hooks/Hooks';

export const InputTextarea = memo(forwardRef((props, ref) => {
    const elementRef = useRef(ref);
    const tooltipRef = useRef(null);
    const cachedScrollHeight = useRef(0);

    const onFocus = (event) => {
        if (props.autoResize) {
            resize();
        }

        props.onFocus && props.onFocus(event);
    }

    const onBlur = (event) => {
        if (props.autoResize) {
            resize();
        }

        props.onBlur && props.onBlur(event);
    }

    const onKeyUp = (event) => {
        if (props.autoResize) {
            resize();
        }

        props.onKeyUp && props.onKeyUp(event);
    }

    const onInput = (event) => {
        if (props.autoResize) {
            resize();
        }

        props.onInput && props.onInput(event);

        const target = event.target;
        ObjectUtils.isNotEmpty(target.value) ? DomHandler.addClass(target, 'p-filled') : DomHandler.removeClass(target, 'p-filled');
    }

    const resize = (initial) => {
        const inputEl = elementRef.current;

        if (inputEl && DomHandler.isVisible(inputEl)) {
            if (!cachedScrollHeight.current) {
                cachedScrollHeight.current = inputEl.scrollHeight;
                inputEl.style.overflow = 'hidden';
            }

            if (cachedScrollHeight.current !== inputEl.scrollHeight || initial) {
                inputEl.style.height = '';
                inputEl.style.height = inputEl.scrollHeight + 'px';

                if (parseFloat(inputEl.style.height) >= parseFloat(inputEl.style.maxHeight)) {
                    inputEl.style.overflowY = 'scroll';
                    inputEl.style.height = inputEl.style.maxHeight;
                }
                else {
                    inputEl.style.overflow = 'hidden';
                }

                cachedScrollHeight.current = inputEl.scrollHeight;
            }
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

    useEffect(() => {
        if (props.autoResize) {
            resize(true);
        }
    }, [props.autoResize]);

    useUnmountEffect(() => {
        if (tooltipRef.current) {
            tooltipRef.current.destroy();
            tooltipRef.current = null;
        }
    });

    const textareaProps = ObjectUtils.findDiffKeys(props, InputTextarea.defaultProps);
    const className = classNames('p-inputtextarea p-inputtext p-component', {
        'p-disabled': props.disabled,
        'p-filled': isFilled,
        'p-inputtextarea-resizable': props.autoResize
    }, props.className);

    return (
        <textarea ref={elementRef} {...textareaProps} className={className} onFocus={onFocus} onBlur={onBlur} onKeyUp={onKeyUp} onInput={onInput}></textarea>
    )
}));

InputTextarea.defaultProps = {
    __TYPE: 'InputTextarea',
    autoResize: false,
    tooltip: null,
    tooltipOptions: null,
    onInput: null
}

InputTextarea.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    autoResize: PropTypes.bool,
    tooltip: PropTypes.string,
    tooltipOptions: PropTypes.object,
    onInput: PropTypes.func
}
