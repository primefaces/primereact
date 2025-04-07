import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps, useMountEffect } from '../hooks/Hooks';
import { Tooltip } from '../tooltip/Tooltip';
import { DomHandler, ObjectUtils, classNames } from '../utils/Utils';
import { RadioButtonBase } from './RadioButtonBase';

export const RadioButton = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = RadioButtonBase.getProps(inProps, context);

        const elementRef = React.useRef(null);
        const inputRef = React.useRef(props.inputRef);

        const { ptm, cx, isUnstyled } = RadioButtonBase.setMetaData({
            props
        });

        useHandleStyle(RadioButtonBase.css.styles, isUnstyled, { name: 'radiobutton' });

        const select = (event) => {
            onChange(event);
        };

        const onChange = (event) => {
            if (props.disabled || props.readOnly) {
                return;
            }

            if (props.onChange) {
                const checked = props.checked;
                const radioClicked = event.target instanceof HTMLDivElement;
                const inputClicked = event.target === inputRef.current;
                const isInputToggled = inputClicked && event.target.checked !== checked;
                const isRadioToggled = radioClicked && (DomHandler.hasClass(elementRef.current, 'p-radiobutton-checked') === checked ? !checked : false);
                const value = !checked;

                const eventData = {
                    originalEvent: event,
                    value: props.value,
                    checked: value,
                    stopPropagation: () => {
                        event?.stopPropagation();
                    },
                    preventDefault: () => {
                        event?.preventDefault();
                    },
                    target: {
                        type: 'radio',
                        name: props.name,
                        id: props.id,
                        value: props.value,
                        checked: value
                    }
                };

                if (isInputToggled || isRadioToggled) {
                    props?.onChange?.(eventData);

                    // do not continue if the user defined click wants to prevent
                    if (event.defaultPrevented) {
                        return;
                    }

                    if (isRadioToggled) {
                        inputRef.current.checked = value;
                    }
                }

                DomHandler.focus(inputRef.current);
            }
        };

        const onFocus = (event) => {
            props?.onFocus?.(event);
        };

        const onBlur = (event) => {
            props?.onBlur?.(event);
        };

        React.useImperativeHandle(ref, () => ({
            props,
            select,
            focus: () => DomHandler.focus(inputRef.current),
            getElement: () => elementRef.current,
            getInput: () => inputRef.current
        }));

        React.useEffect(() => {
            if (inputRef.current) {
                inputRef.current.checked = props.checked;
            }
        }, [props.checked]);

        React.useEffect(() => {
            ObjectUtils.combinedRefs(inputRef, props.inputRef);
        }, [inputRef, props.inputRef]);

        useMountEffect(() => {
            if (props.autoFocus) {
                DomHandler.focus(inputRef.current, props.autoFocus);
            }
        });

        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
        const otherProps = RadioButtonBase.getOtherProps(props);

        const rootProps = mergeProps(
            {
                id: props.id,
                className: classNames(props.className, cx('root', { context })),
                style: props.style,
                'data-p-checked': props.checked
            },
            otherProps,
            ptm('root')
        );

        delete rootProps.input;
        delete rootProps.box;
        delete rootProps.icon;

        const createInputElement = () => {
            const ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);
            const inputProps = mergeProps(
                {
                    id: props.inputId,
                    type: 'radio',
                    name: props.name,
                    defaultChecked: props.checked,
                    onFocus: onFocus,
                    onBlur: onBlur,
                    onChange: onChange,
                    disabled: props.disabled,
                    readOnly: props.readOnly,
                    required: props.required,
                    tabIndex: props.tabIndex,
                    className: cx('input'),
                    ...ariaProps
                },
                inProps.input,
                ptm('input')
            );

            return <input ref={inputRef} {...inputProps} />;
        };

        const createBoxElement = () => {
            const boxProps = mergeProps(
                {
                    className: cx('box')
                },
                inProps.box,
                ptm('box')
            );

            const iconProps = mergeProps(
                {
                    className: cx('icon')
                },
                inProps.icon,
                ptm('icon')
            );

            return (
                <div {...boxProps}>
                    <div {...iconProps} />
                </div>
            );
        };

        return (
            <>
                <div ref={elementRef} {...rootProps}>
                    {createInputElement()}
                    {createBoxElement()}
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} pt={ptm('tooltip')} {...props.tooltipOptions} />}
            </>
        );
    })
);

RadioButton.displayName = 'RadioButton';
