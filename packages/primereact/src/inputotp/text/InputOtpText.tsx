'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useInputOtpContext } from '../InputOtp.context';
import { defaultTextProps } from './InputOtpText.props';

export const InputOtpText = withComponent({
    name: 'InputOtp.Text',
    defaultProps: defaultTextProps,
    setup() {
        const inputotp = useInputOtpContext();

        return { inputotp };
    },
    render(instance) {
        const { props, ptmi, inputotp } = instance;
        const { as, ...restProps } = props;
        const indexRef = React.useRef<number | null>(null);

        if (indexRef.current === null && inputotp?.registerText) {
            indexRef.current = inputotp?.registerText();
        }

        const index = indexRef.current ?? 0;

        const rootProps = mergeProps(
            restProps,
            {
                value: inputotp?.state.tokens[index] ?? '',
                type: inputotp?.inputType,
                inputMode: inputotp?.inputMode,
                className: inputotp?.cx('text'),
                size: inputotp?.props.size ?? props.size,
                variant: inputotp?.props.variant ?? props.variant,
                disabled: inputotp?.props.disabled ?? props.disabled,
                'data-pc-index': index,
                onInput: (e: React.SyntheticEvent<HTMLInputElement>) => inputotp?.onInput?.(e, index),
                onClick: inputotp?.onClick,
                onKeyDown: inputotp?.onKeyDown,
                onPaste: inputotp?.onPaste
            },
            inputotp?.ptm('pcInputText'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
