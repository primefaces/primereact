import * as React from 'react';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';

export const InputSwitch = React.memo(
    React.forwardRef((props, ref) => {
        const [focusedState, setFocusedState] = React.useState(false);
        const elementRef = React.useRef(null);
        const inputRef = React.useRef(props.inputRef);
        const checked = props.checked === props.trueValue;

        const onClick = (event) => {
            if (props.disabled) {
                return;
            }

            toggle(event);
            DomHandler.focus(inputRef.current);

            event.preventDefault();
        };

        const toggle = (event) => {
            if (props.onChange) {
                const value = checked ? props.falseValue : props.trueValue;

                props.onChange({
                    originalEvent: event,
                    value,
                    stopPropagation: () => {},
                    preventDefault: () => {},
                    target: {
                        name: props.name,
                        id: props.id,
                        value
                    }
                });
            }
        };

        const onFocus = (event) => {
            setFocusedState(true);
            props.onFocus && props.onFocus(event);
        };

        const onBlur = (event) => {
            setFocusedState(false);
            props.onBlur && props.onBlur(event);
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current,
            getInput: () => elementRef.current
        }));

        React.useEffect(() => {
            ObjectUtils.combinedRefs(inputRef, props.inputRef);
        }, [inputRef, props.inputRef]);

        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
        const otherProps = ObjectUtils.findDiffKeys(props, InputSwitch.defaultProps);
        const ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);
        const className = classNames(
            'p-inputswitch p-component',
            {
                'p-inputswitch-checked': checked,
                'p-disabled': props.disabled,
                'p-focus': focusedState
            },
            props.className
        );

        return (
            <>
                <div ref={elementRef} id={props.id} className={className} style={props.style} {...otherProps} onClick={onClick} role="checkbox" aria-checked={checked}>
                    <div className="p-hidden-accessible">
                        <input
                            ref={inputRef}
                            type="checkbox"
                            id={props.inputId}
                            name={props.name}
                            checked={checked}
                            onChange={toggle}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            disabled={props.disabled}
                            role="switch"
                            tabIndex={props.tabIndex}
                            aria-checked={checked}
                            {...ariaProps}
                        />
                    </div>
                    <span className="p-inputswitch-slider"></span>
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} />}
            </>
        );
    })
);

InputSwitch.displayName = 'InputSwitch';
InputSwitch.defaultProps = {
    __TYPE: 'InputSwitch',
    checked: false,
    className: null,
    disabled: false,
    falseValue: false,
    id: null,
    inputId: null,
    inputRef: null,
    name: null,
    onBlur: null,
    onChange: null,
    onFocus: null,
    style: null,
    tabIndex: null,
    tooltip: null,
    tooltipOptions: null,
    trueValue: true
};
