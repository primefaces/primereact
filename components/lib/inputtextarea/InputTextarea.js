import * as React from 'react';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';

export const InputTextarea = React.memo(React.forwardRef((props, ref) => {
    const elementRef = React.useRef(ref);
    const cachedScrollHeight = React.useRef(0);

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

    const isFilled = React.useMemo(() => (
        ObjectUtils.isNotEmpty(props.value) || ObjectUtils.isNotEmpty(props.defaultValue) || (elementRef.current && ObjectUtils.isNotEmpty(elementRef.current.value))
    ), [props.value, props.defaultValue]);

    React.useEffect(() => {
        ObjectUtils.combinedRefs(elementRef, ref);
    }, [elementRef, ref]);

    React.useEffect(() => {
        if (props.autoResize) {
            resize(true);
        }
    }, [props.autoResize]);

    const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
    const otherProps = ObjectUtils.findDiffKeys(props, InputTextarea.defaultProps);
    const className = classNames('p-inputtextarea p-inputtext p-component', {
        'p-disabled': props.disabled,
        'p-filled': isFilled,
        'p-inputtextarea-resizable': props.autoResize
    }, props.className);

    return (
        <>
            <textarea ref={elementRef} {...otherProps} className={className} onFocus={onFocus} onBlur={onBlur} onKeyUp={onKeyUp} onInput={onInput}></textarea>
            {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} />}
        </>
    )
}));

InputTextarea.displayName = 'InputTextarea';
InputTextarea.defaultProps = {
    __TYPE: 'InputTextarea',
    autoResize: false,
    tooltip: null,
    tooltipOptions: null,
    onInput: null
}
