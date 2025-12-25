'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useInputNumber } from '@primereact/headless/inputnumber';
import { styles } from '@primereact/styles/inputnumber';
import { mergeProps, resolve } from '@primeuix/utils';
import { InputText } from 'primereact/inputtext';
import * as React from 'react';
import { InputNumberProvider } from './InputNumber.context';
import { defaultProps } from './InputNumber.props';

export const InputNumber = withComponent({
    name: 'InputNumber',
    defaultProps,
    styles,
    setup(instance) {
        const inputnumber = useInputNumber(instance?.inProps);

        return inputnumber;
    },
    render(instance) {
        const { id, props, ptmi, ptm, cx, state, inputRef, onInput, onInputKeyDown, onInputKeyPress, onInputClick, onPaste, onInputFocus, onInputBlur } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        const createText = () => {
            const textProps = mergeProps({
                defaultValue: state.value,
                id: props.inputId,
                className: cx('text'),
                role: 'spinbutton',
                'aria-valuemin': props.min,
                'aria-valuemax': props.max,
                'aria-valuenow': state.value,
                'aria-labelledby': props['aria-labelledby'],
                'aria-label': props['aria-label'],
                inputMode: props.mode === 'decimal' && !props.minFractionDigits ? 'numeric' : 'decimal',
                name: props.name,
                disabled: props.disabled,
                readOnly: props.readonly,
                placeholder: props.placeholder,
                required: props.required,
                size: props.size,
                invalid: props.invalid,
                variant: props.variant,
                fluid: props.fluid,
                onInput: onInput,
                onKeyDown: onInputKeyDown,
                onKeyPress: onInputKeyPress,
                onClick: onInputClick,
                onPaste,
                onFocus: onInputFocus,
                onBlur: onInputBlur
            });

            return <InputText ref={inputRef} {...textProps} pt={ptm('pcInputText')} />;
        };

        const text = createText();

        return (
            <InputNumberProvider value={instance}>
                <Component instance={instance} attrs={rootProps}>
                    {text}
                    {resolve(props.children, instance)}
                </Component>
            </InputNumberProvider>
        );
    }
});
