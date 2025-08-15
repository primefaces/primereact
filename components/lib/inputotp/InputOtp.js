import React, { useContext, useRef, useState } from 'react';
import { PrimeReactContext, ariaLabel } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps, useUpdateEffect } from '../hooks/Hooks';
import { InputText } from '../inputtext/InputText';
import { ObjectUtils } from '../utils/Utils';
import { InputOtpBase } from './BaseInputOtp';

export const InputOtp = React.memo(
    React.forwardRef((inProps, ref) => {
        const elementRef = useRef(ref);
        const mergeProps = useMergeProps();
        const context = useContext(PrimeReactContext);
        const props = InputOtpBase.getProps(inProps, context);
        const { ptm, cx, isUnstyled } = InputOtpBase.setMetaData({
            props,
            ...props.__parentMetadata,
            context: {
                disabled: props.disabled
            }
        });

        useHandleStyle(InputOtpBase.css.styles, isUnstyled, { name: 'inputotp' });

        const defaultValue = props.value ? props.value?.toString()?.split?.('') : new Array(props.length);
        const [tokens, setTokens] = useState(defaultValue);

        const findNextInput = (element) => {
            const nextInput = element.nextElementSibling;

            if (!nextInput) return;

            return nextInput.nodeName === 'INPUT' ? nextInput : findNextInput(nextInput);
        };

        const findPrevInput = (element) => {
            const prevInput = element.previousElementSibling;

            if (!prevInput) return;

            return prevInput.nodeName === 'INPUT' ? prevInput : findPrevInput(prevInput);
        };

        const moveToNextInput = (event) => {
            const nextInput = findNextInput(event.target);

            if (nextInput) {
                nextInput.focus();
                nextInput.select();
            }
        };

        const moveToPrevInput = (event) => {
            const prevInput = findPrevInput(event.target);

            if (prevInput) {
                prevInput.focus();
                prevInput.select();
            }
        };

        const onChange = (event, value) => {
            props?.onChange?.({
                originalEvent: event,
                value: value.join('')
            });
        };

        const updateTokens = (event, index) => {
            const inputValue = event.target.value;
            let newTokens = [...tokens];

            newTokens[index] = inputValue;
            newTokens = newTokens.join('');
            newTokens = newTokens ? newTokens.split('') : new Array(props.length);

            setTokens(newTokens);
            onChange(event, newTokens);
        };

        const onInput = (event, index) => {
            if (props.disabled || props.readOnly) {
                return;
            }

            if (event.nativeEvent.inputType === 'insertFromPaste') {
                return; // handled in onPaste
            }

            updateTokens(event, index);

            if (event.nativeEvent.inputType === 'deleteContentBackward') {
                moveToPrevInput(event);
            } else if (event.nativeEvent.inputType === 'insertText') {
                moveToNextInput(event);
            }
        };

        const onPaste = (event) => {
            if (props.disabled || props.readOnly) {
                return;
            }

            let paste = event.clipboardData.getData('text');

            if (paste.length) {
                let pastedCode = paste.substring(0, props.length + 1);

                if (!props.integerOnly || !isNaN(pastedCode)) {
                    const newTokens = pastedCode.split('');

                    setTokens(newTokens);
                    onChange(event, newTokens);
                }
            }
        };

        const onFocus = (event) => {
            event.target.select();
            props?.focus?.(event);
        };

        const onBlur = (event) => {
            props?.blur?.(event);
        };

        const onKeydown = (event) => {
            if (props.disabled || props.readOnly) {
                return;
            }

            // special keys should be ignored, if it is CTRL+V is handled in onPaste
            if (event.altKey || event.ctrlKey || event.metaKey) {
                return;
            }

            switch (event.code) {
                case 'ArrowLeft': {
                    moveToPrevInput(event);
                    event.preventDefault();
                    break;
                }

                case 'ArrowRight': {
                    moveToNextInput(event);
                    event.preventDefault();
                    break;
                }

                case 'Delete': {
                    event.preventDefault();
                    const idx = Number(event.target.id);

                    if (!Number.isNaN(idx) && !isAllEmpty(tokens, props.length)) {
                        updateTokens({ ...event, target: { ...event.target, value: '' } }, idx);
                        moveToNextInput(event);
                    }

                    break;
                }

                case 'Backspace': {
                    if (event.target?.value?.length === 0) {
                        moveToPrevInput(event);
                        event.preventDefault();
                    }

                    break;
                }

                case 'ArrowUp':

                case 'ArrowDown': {
                    event.preventDefault();
                    break;
                }

                case 'Tab':

                case 'NumpadEnter':

                case 'Enter': {
                    break;
                }

                default: {
                    //Prevent non-numeric characters from being entered if integerOnly is true or if the length of the input is greater than the specified length
                    if ((props?.integerOnly && !(event.code !== 'Space' && Number(event.key) >= 0 && Number(event.key) <= 9)) || (tokens.join('').length >= props.length && event.code !== 'Delete')) {
                        event.preventDefault();
                    }

                    break;
                }
            }
        };

        const isAllEmpty = (arr, n) => {
            return arr.length === n && arr.every((item) => item === '' || item == null);
        };

        useUpdateEffect(() => {
            const value = props.value ? props.value?.toString()?.split?.('') : new Array(props.length);

            setTokens(value);
        }, [props.value]);

        const createInputElements = (remainingInputs) => {
            if (remainingInputs <= 0) {
                return [];
            }

            const inputElementIndex = props.length - remainingInputs;
            const inputElementEvents = {
                onInput: (event) => onInput(event, inputElementIndex),
                onKeyDown: onKeydown,
                onFocus,
                onBlur,
                onPaste
            };
            const inputElementProps = {
                value: tokens[inputElementIndex] || '',
                type: props?.mask ? 'password' : 'text',
                variant: props?.variant,
                readOnly: props?.readOnly,
                disabled: props?.disabled,
                tabIndex: props?.tabIndex,
                autoFocus: props?.autoFocus && inputElementIndex === 0,
                'aria-label': ariaLabel('otpLabel', { 0: inputElementIndex + 1 }),
                'data-index': inputElementIndex,
                className: cx('input')
            };
            const inputElement = props?.inputTemplate ? (
                ObjectUtils.getJSXElement(props?.inputTemplate, {
                    events: inputElementEvents,
                    props: inputElementProps
                })
            ) : (
                <InputText {...inputElementProps} {...inputElementEvents} invalid={props?.invalid} unstyled={props?.unstyled} pt={ptm('input')} inputMode={props?.integerOnly ? 'numeric' : 'text'} key={inputElementIndex} />
            );
            const inputElements = [inputElement, ...createInputElements(remainingInputs - 1)];

            return inputElements.map((input, index) => <React.Fragment key={index}>{input}</React.Fragment>);
        };

        const rootElementProps = mergeProps(
            {
                className: cx('root'),
                ref: elementRef,
                style: props?.style
            },
            ptm('root')
        );

        return <div {...rootElementProps}>{createInputElements(props.length)}</div>;
    })
);

InputOtp.displayName = 'InputOtp';
