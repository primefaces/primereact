import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps, useMountEffect } from '../hooks/Hooks';
import { Tooltip } from '../tooltip/Tooltip';
import { DomHandler, ObjectUtils, classNames } from '../utils/Utils';
import { InputSwitchBase } from './InputSwitchBase';

export const InputSwitch = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = InputSwitchBase.getProps(inProps, context);
        const [focusedState, setFocusedState] = React.useState(false);
        const { ptm, cx, isUnstyled } = InputSwitchBase.setMetaData({
            props,
            state: {
                focused: focusedState
            }
        });

        useHandleStyle(InputSwitchBase.css.styles, isUnstyled, { name: 'inputswitch' });
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

        const rootProps = mergeProps(
            {
                className: classNames(props.className, cx('root', { focusedState, checked })),
                style: props.style,
                onClick,
                role: 'checkbox',
                'aria-checked': checked,
                'data-p-highlight': checked,
                'data-p-disabled': props.disabled
            },
            otherProps,
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
                className: cx('slider')
            },
            ptm('slider')
        );

        return (
            <>
                <div id={props.id} ref={elementRef} {...rootProps}>
                    <div {...hiddenInputWrapperProps}>
                        <input ref={inputRef} {...hiddenInputProps} />
                    </div>
                    <span {...sliderProps}></span>
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} pt={ptm('tooltip')} {...props.tooltipOptions} />}
            </>
        );
    })
);

InputSwitch.displayName = 'InputSwitch';
