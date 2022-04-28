import * as React from 'react';
import { useUpdateEffect } from '../hooks/Hooks';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';

export const Checkbox = React.memo(React.forwardRef((props, ref) => {
    const [focusedState, setFocusedState] = React.useState(false);
    const elementRef = React.useRef(null);
    const inputRef = React.useRef(props.inputRef);

    const onClick = (event) => {
        if (!props.disabled && !props.readOnly && props.onChange) {
            const checked = isChecked();
            const value = checked ? props.falseValue : props.trueValue;

            props.onChange({
                originalEvent: event,
                value: props.value,
                checked: value,
                stopPropagation: () => { },
                preventDefault: () => { },
                target: {
                    type: 'checkbox',
                    name: props.name,
                    id: props.id,
                    value: props.value,
                    checked: value,
                }
            });

            inputRef.current.checked = !checked;
            inputRef.current.focus();
        }
    }

    const onFocus = () => {
        setFocusedState(true);
    }

    const onBlur = () => {
        setFocusedState(false);
    }

    const isChecked = () => {
        return props.checked === props.trueValue;
    }

    React.useEffect(() => {
        ObjectUtils.combinedRefs(inputRef, props.inputRef);
    }, [inputRef, props.inputRef]);

    useUpdateEffect(() => {
        inputRef.current.checked = isChecked();
    }, [props.checked, props.trueValue]);

    const checked = isChecked();
    const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
    const otherProps = ObjectUtils.findDiffKeys(props, Checkbox.defaultProps);
    const className = classNames('p-checkbox p-component', {
        'p-checkbox-checked': checked,
        'p-checkbox-disabled': props.disabled,
        'p-checkbox-focused': focusedState
    }, props.className);
    const boxClass = classNames('p-checkbox-box', {
        'p-highlight': checked,
        'p-disabled': props.disabled,
        'p-focus': focusedState
    });
    const icon = IconUtils.getJSXIcon(checked ? props.icon : '', { className: 'p-checkbox-icon p-c' }, { props, checked });

    return (
        <>
            <div ref={elementRef} id={props.id} className={className} style={props.style} {...otherProps} onClick={onClick} onContextMenu={props.onContextMenu} onMouseDown={props.onMouseDown}>
                <div className="p-hidden-accessible">
                    <input ref={inputRef} type="checkbox" id={props.inputId} name={props.name} tabIndex={props.tabIndex} defaultChecked={checked} aria-labelledby={props['aria-labelledby']} aria-label={props['aria-label']}
                        onFocus={onFocus} onBlur={onBlur} disabled={props.disabled} readOnly={props.readOnly} required={props.required} />
                </div>
                <div className={boxClass}>
                    {icon}
                </div>
            </div>
            {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} />}
        </>
    )
}));

Checkbox.displayName = 'Checkbox';
Checkbox.defaultProps = {
    __TYPE: 'Checkbox',
    id: null,
    inputRef: null,
    inputId: null,
    value: null,
    name: null,
    checked: false,
    trueValue: true,
    falseValue: false,
    style: null,
    className: null,
    disabled: false,
    required: false,
    readOnly: false,
    tabIndex: null,
    icon: 'pi pi-check',
    tooltip: null,
    tooltipOptions: null,
    'aria-label': null,
    'aria-labelledby': null,
    onChange: null,
    onMouseDown: null,
    onContextMenu: null
}
