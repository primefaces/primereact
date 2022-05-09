import * as React from 'react';
import { Tooltip } from '../tooltip/Tooltip';
import { ariaLabel } from '../api/Api';
import { classNames, ObjectUtils } from '../utils/Utils';

export const TriStateCheckbox = React.memo(React.forwardRef((props, ref) => {
    const [focusedState, setFocusedState] = React.useState(false);
    const elementRef = React.useRef(null);

    const onClick = (event) => {
        if (!props.disabled && !props.readOnly) {
            toggle(event);
        }
    }

    const toggle = (event) => {
        let newValue;
        if (props.value === null || props.value === undefined)
            newValue = true;
        else if (props.value === true)
            newValue = false;
        else if (props.value === false)
            newValue = null;

        if (props.onChange) {
            props.onChange({
                originalEvent: event,
                value: newValue,
                stopPropagation: () => { },
                preventDefault: () => { },
                target: {
                    name: props.name,
                    id: props.id,
                    value: newValue
                }
            });
        }
    }

    const onFocus = () => {
        setFocusedState(true);
    }

    const onBlur = () => {
        setFocusedState(false);
    }

    const onKeyDown = (e) => {
        if (e.keyCode === 32) {
            toggle(e);
            e.preventDefault();
        }
    }

    const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
    const otherProps = ObjectUtils.findDiffKeys(props, TriStateCheckbox.defaultProps);
    const className = classNames('p-tristatecheckbox p-checkbox p-component', props.className);
    const boxClassName = classNames('p-checkbox-box', {
        'p-highlight': (props.value || !props.value) && props.value !== null,
        'p-disabled': props.disabled,
        'p-focus': focusedState
    });
    const iconClassName = classNames('p-checkbox-icon p-c', {
        'pi pi-check': props.value === true,
        'pi pi-times': props.value === false
    });
    const ariaValueLabel = props.value ? ariaLabel('trueLabel') : (props.value === false ? ariaLabel('falseLabel') : ariaLabel('nullLabel'));
    const ariaChecked = props.value ? 'true' : 'false';

    return (
        <>
            <div ref={elementRef} id={props.id} className={className} style={props.style} {...otherProps} onClick={onClick}>
                <div className={boxClassName} tabIndex={props.tabIndex} onFocus={onFocus} onBlur={onBlur} onKeyDown={onKeyDown}
                    role="checkbox" aria-checked={ariaChecked} aria-labelledby={props['aria-labelledby']} aria-label={props['aria-label']}>
                    <span className={iconClassName}></span>
                </div>
                {focusedState && <span className="p-sr-only" aria-live="polite">{ariaValueLabel}</span>}
            </div>
            {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} />}
        </>
    )
}));

TriStateCheckbox.displayName = 'TriStateCheckbox';
TriStateCheckbox.defaultProps = {
    __TYPE: 'TriStateCheckbox',
    id: null,
    value: null,
    style: null,
    className: null,
    disabled: false,
    readOnly: false,
    tabIndex: "0",
    'aria-label': null,
    'aria-labelledby': null,
    tooltip: null,
    tooltipOptions: null,
    onChange: null
}
