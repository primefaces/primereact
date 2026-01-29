'use client';
import { Component, withComponent } from '@primereact/core/component';
import { isElementOfType } from '@primereact/core/utils';
import { useInputNumber } from '@primereact/headless/inputnumber';
import { mergeProps, omit } from '@primeuix/utils';
import * as React from 'react';
import { InputNumberProvider } from './InputNumber.context';
import { defaultProps } from './InputNumber.props';

export const InputNumber = withComponent({
    name: 'InputNumber',
    defaultProps,
    setup(instance) {
        const inputnumber = useInputNumber(instance?.inProps);

        return inputnumber;
    },
    render(instance) {
        const { id, props, ptmi, cx, state, onInput, onInputKeyDown, onInputKeyPress, onInputClick, onInputPaste, onInputFocus, onInputBlur } = instance;
        const { as, ...restProps } = props;

        const asProps = isElementOfType(as, 'InputText')
            ? {
                  defaultValue: state.formattedValue
              }
            : undefined;

        const rootProps = mergeProps(
            omit(restProps, 'styles', 'format', 'useGrouping', 'allowEmpty', 'highlightOnFocus', 'minFractionDigits', 'maxFractionDigits', 'currencyDisplay', 'onValueChange', 'value', 'defaultValue'),
            asProps,
            {
                id,
                className: cx('root'),
                role: 'spinbutton',
                'aria-valuemin': props.min,
                'aria-valuemax': props.max,
                'aria-valuenow': state.value,
                inputMode: props.mode === 'decimal' && !props.minFractionDigits ? 'numeric' : 'decimal',
                onInput: onInput,
                onKeyDown: onInputKeyDown,
                onKeyPress: onInputKeyPress,
                onClick: onInputClick,
                onPaste: onInputPaste,
                onFocus: onInputFocus,
                onBlur: onInputBlur
            },
            ptmi('root')
        );

        return (
            <InputNumberProvider value={instance}>
                <Component as={as} instance={instance} attrs={rootProps} children={props.children} />
            </InputNumberProvider>
        );
    }
});
