import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps, useMountEffect, useUpdateEffect } from '../hooks/Hooks';
import { CheckIcon } from '../icons/check';
import { Tooltip } from '../tooltip/Tooltip';
import { DomHandler, IconUtils, ObjectUtils, classNames } from '../utils/Utils';
import { CheckboxBase } from './CheckboxBase';

export const Checkbox = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = CheckboxBase.getProps(inProps, context);
        const [focusedState, setFocusedState] = React.useState(false);
        const { ptm, cx, isUnstyled } = CheckboxBase.setMetaData({
            props,
            state: {
                focused: focusedState
            },
            context: {
                checked: props.checked === props.trueValue,
                disabled: props.disabled
            }
        });

        useHandleStyle(CheckboxBase.css.styles, isUnstyled, { name: 'checkbox', styled: true });
        const elementRef = React.useRef(null);
        const inputRef = React.useRef(props.inputRef);

        const onClick = (event) => {
            if (props.disabled || props.readOnly) {
                return;
            }

            if (props.onChange || props.onClick) {
                const checked = isChecked();
                const checkboxClicked = event.target instanceof HTMLDivElement || event.target instanceof HTMLSpanElement || event.target instanceof Object;
                const isInputToggled = event.target === inputRef.current;
                const isCheckboxToggled = checkboxClicked && event.target.checked !== checked;
                const value = checked ? props.falseValue : props.trueValue;
                const eventData = {
                    originalEvent: event,
                    value: props.value,
                    checked: value,
                    stopPropagation: () => {
                        event.stopPropagation();
                    },
                    preventDefault: () => {
                        event.preventDefault();
                    },
                    target: {
                        type: 'checkbox',
                        name: props.name,
                        id: props.id,
                        value: props.value,
                        checked: value
                    }
                };

                props.onClick && props.onClick(eventData);

                // do not continue if the user defined click wants to prevent
                if (event.defaultPrevented) {
                    return;
                }

                if (isInputToggled || isCheckboxToggled) {
                    props.onChange && props.onChange(eventData);
                }

                DomHandler.focus(inputRef.current);
                event.preventDefault();
            }
        };

        const onFocus = () => {
            setFocusedState(true);
        };

        const onBlur = () => {
            setFocusedState(false);
        };

        const onKeyDown = (event) => {
            if (event.code === 'Space' || event.key === ' ') {
                // event.key is for Android support
                onClick(event);
            }
        };

        const isChecked = () => {
            return props.checked === props.trueValue;
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

        useUpdateEffect(() => {
            inputRef.current.checked = isChecked();
        }, [props.checked, props.trueValue]);

        useMountEffect(() => {
            if (props.autoFocus) {
                DomHandler.focus(inputRef.current, props.autoFocus);
            }
        });

        const checked = isChecked();
        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
        const otherProps = CheckboxBase.getOtherProps(props);
        const ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);
        const iconProps = mergeProps(
            {
                className: cx('icon')
            },
            ptm('icon')
        );
        const icon = checked ? props.icon || <CheckIcon {...iconProps} /> : null;
        const checkboxIcon = IconUtils.getJSXIcon(icon, { ...iconProps }, { props, checked });
        const rootProps = mergeProps(
            {
                id: props.id,
                className: classNames(props.className, cx('root', { checked, focusedState })),
                style: props.style,
                onClick: (e) => onClick(e),
                'data-p-highlight': checked,
                'data-p-disabled': props.disabled,
                onContextMenu: props.onContextMenu,
                onMouseDown: props.onMouseDown
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
                id: props.inputId,
                type: 'checkbox',
                name: props.name,
                tabIndex: props.tabIndex,
                defaultChecked: checked,
                onFocus: (e) => onFocus(e),
                onBlur: (e) => onBlur(e),
                onKeyDown: (e) => onKeyDown(e),
                disabled: props.disabled,
                readOnly: props.readOnly,
                required: props.required,
                ...ariaProps
            },
            ptm('hiddenInput')
        );

        const inputProps = mergeProps(
            {
                className: cx('input', { checked, focusedState }),
                'data-p-highlight': checked,
                'data-p-disabled': props.disabled,
                'data-p-focus': focusedState
            },
            ptm('input')
        );

        return (
            <>
                <div ref={elementRef} {...rootProps}>
                    <div {...hiddenInputWrapperProps}>
                        <input ref={inputRef} {...hiddenInputProps} />
                    </div>
                    <div {...inputProps}>{checkboxIcon}</div>
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} pt={ptm('tooltip')} {...props.tooltipOptions} />}
            </>
        );
    })
);

Checkbox.displayName = 'Checkbox';
