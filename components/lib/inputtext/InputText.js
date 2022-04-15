import * as React from 'react';
import { KeyFilter } from '../keyfilter/KeyFilter';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';

export const InputText = React.memo(React.forwardRef((props, ref) => {
    const elementRef = React.useRef(ref);

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

    const onPaste = (event) => {
        props.onPaste && props.onPaste(event);

        if (props.keyfilter) {
            KeyFilter.onPaste(event, props.keyfilter, props.validateOnly)
        }
    }

    const isFilled = React.useMemo(() => (
        ObjectUtils.isNotEmpty(props.value) || ObjectUtils.isNotEmpty(props.defaultValue) || (elementRef.current && ObjectUtils.isNotEmpty(elementRef.current.value))
    ), [props.value, props.defaultValue]);

    React.useEffect(() => {
        ObjectUtils.combinedRefs(elementRef, ref);
    }, [elementRef, ref]);

    const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
    const otherProps = ObjectUtils.findDiffKeys(props, InputText.defaultProps);
    const className = classNames('p-inputtext p-component', {
        'p-disabled': props.disabled,
        'p-filled': isFilled
    }, props.className);

    return (
        <>
            <input ref={elementRef} {...otherProps} className={className} onInput={onInput} onKeyPress={onKeyPress} onPaste={onPaste} />
            {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} />}
        </>
    )
}));

InputText.displayName = 'InputText';
InputText.defaultProps = {
    __TYPE: 'InputText',
    keyfilter: null,
    validateOnly: false,
    tooltip: null,
    tooltipOptions: null,
    onInput: null,
    onKeyPress: null,
    onPaste: null
}
