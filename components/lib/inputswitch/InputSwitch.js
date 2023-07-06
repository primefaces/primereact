import * as React from 'react';
import { useMountEffect } from '../hooks/Hooks';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, DomHandler, mergeProps, ObjectUtils } from '../utils/Utils';
import { InputSwitchBase } from './InputSwitchBase';
import { PrimeReactContext } from '../api/Api';

export const InputSwitch = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = InputSwitchBase.getProps(inProps, context);
        const [focusedState, setFocusedState] = React.useState(false);
        const { ptm } = InputSwitchBase.setMetaData({
            props,
            state: {
                focused: focusedState
            }
        });
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
                    stopPropagation: () => {
                        event.stopPropagation();
                    },
                    preventDefault: () => {
                        event.preventDefault();
                    },
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

        useMountEffect(() => {
            if (props.autoFocus) {
                DomHandler.focus(inputRef.current, props.autoFocus);
            }
        });

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

        const rootProps = mergeProps(
            {
                id: props.id,
                ref: elementRef,
                className,
                style: props.style,
                onClick,
                role: 'checkbox',
                'aria-checked': checked
            },
            ptm('root')
        );
        const hiddenInputWrapperProps = mergeProps(
            {
                className: 'p-hidden-accessible'
            },
            ptm('hiddenInputWrapper')
        );

        const hiddenInputProps = mergeProps(
            {
                ref: inputRef,
                type: 'checkbox',
                id: props.inputId,
                name: props.name,
                checked: checked,
                onChange: toggle,
                onFocus: onFocus,
                onBlur: onBlur,
                disabled: props.disabled,
                role: 'switch',
                tabIndex: props.tabIndex,
                'aria-checked': checked,
                ...ariaProps
            },
            ptm('hiddenInput')
        );

        const sliderProps = mergeProps(
            {
                className: 'p-inputswitch-slider'
            },
            ptm('slider')
        );

        return (
            <>
                <div {...rootProps}>
                    <div {...hiddenInputWrapperProps}>
                        <input {...hiddenInputProps} />
                    </div>
                    <span {...sliderProps}></span>
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} pt={ptm('tooltip')} />}
            </>
        );
    })
);

InputSwitch.displayName = 'InputSwitch';
