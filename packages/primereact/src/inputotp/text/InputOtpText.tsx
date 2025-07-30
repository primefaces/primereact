'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { InputText } from 'primereact/inputtext';
import * as React from 'react';
import { useInputOtpContext } from '../InputOtp.context';
import { defaultTextProps } from './InputOtpText.props';

export const InputOtpText = withComponent({
    name: 'InputOtpText',
    defaultProps: defaultTextProps,
    setup() {
        const inputotp = useInputOtpContext();

        return { inputotp };
    },
    render(instance) {
        const { props, ptmi, inputotp } = instance;
        const indexRef = React.useRef<number | null>(null);

        if (indexRef.current === null && inputotp?.registerText) {
            indexRef.current = inputotp?.registerText();
        }

        const index = indexRef.current !== null ? indexRef.current : 0;

        const rootProps = mergeProps(
            {
                value: inputotp?.state.tokens[index] ?? '',
                type: inputotp?.inputType(),
                inputMode: inputotp?.inputMode(),
                className: inputotp?.cx('text'),
                size: inputotp?.props.size ?? props.size,
                variant: inputotp?.props.variant ?? props.variant,
                disabled: inputotp?.props.disabled ?? props.disabled,
                'data-pc-index': index,
                onInput: (e: React.FormEvent<HTMLInputElement>) => inputotp?.onInput?.(e, index),
                onClick: inputotp?.onClick,
                onKeyDown: inputotp?.onKeyDown,
                onPaste: inputotp?.onPaste
            },
            ptmi('root')
        );

        // @ts-expect-error: InputText expects a type prop, but we are using it as a text.
        return <Component as={InputText} instance={instance} attrs={{ ...props, ...rootProps }} pt={inputotp?.ptm('text')} children={props.children} />;
    }
});
