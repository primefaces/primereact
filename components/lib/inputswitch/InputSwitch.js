import * as React from 'react';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';
import { InputSwitchBase } from './InputSwitchBase';

export const InputSwitch = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = InputSwitchBase.getProps(inProps);

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
            focus: () => DomHandler.focus(inputRef.current),
            getElement: () => elementRef.current,
            getInput: () => inputRef.current
        }));

        React.useEffect(() => {
            ObjectUtils.combinedRefs(inputRef, props.inputRef);
        }, [inputRef, props.inputRef]);

        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
        const otherProps = InputSwitchBase.getOtherProps(props);
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
