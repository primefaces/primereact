import * as React from 'react';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, ObjectUtils } from '../utils/Utils';

export const TriStateCheckbox = React.memo(React.forwardRef((props, ref) => {
    const [focusedState, setFocusedState] = React.useState(false);
    const elementRef = React.useRef(null);
    const inputRef = React.useRef(props.inputRef);

    const onClick = (event) => {
        if (!props.disabled) {
            toggle(event);
            inputRef.current.focus();
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

    React.useEffect(() => {
        ObjectUtils.combinedRefs(inputRef, props.inputRef);
    }, [inputRef, props.inputRef]);

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

    return (
        <>
            <div ref={elementRef} id={props.id} className={className} style={props.style} {...otherProps} onClick={onClick}>
                <div className="p-hidden-accessible">
                    <input ref={inputRef} type="checkbox" aria-labelledby={props.ariaLabelledBy} id={props.inputId} name={props.name}
                        onFocus={onFocus} onBlur={onBlur} disabled={props.disabled} defaultChecked={props.value} />
                </div>
                <div className={boxClassName} role="checkbox" aria-checked={props.value === true}>
                    <span className={iconClassName}></span>
                </div>
            </div>
            {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} />}
        </>
    )
}));

TriStateCheckbox.displayName = 'TriStateCheckbox';
TriStateCheckbox.defaultProps = {
    __TYPE: 'TriStateCheckbox',
    id: null,
    inputRef: null,
    inputId: null,
    value: null,
    name: null,
    style: null,
    className: null,
    disabled: false,
    tooltip: null,
    tooltipOptions: null,
    ariaLabelledBy: null,
    onChange: null
}
