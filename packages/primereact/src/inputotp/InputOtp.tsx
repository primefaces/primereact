'use client';
import { Component } from '@primereact/core/component';
import { useInputOtp } from '@primereact/headless/inputotp';
import { styles } from '@primereact/styles/inputotp';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { InputOtpProvider } from './InputOtp.context';
import { defaultProps } from './InputOtp.props';
import { InputOtpText } from './text';

export const InputOtp = withComponent({
    name: 'InputOtp',
    defaultProps,
    styles,
    setup(instance) {
        const inputotp = useInputOtp(instance?.inProps);

        return inputotp;
    },
    render(instance) {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <InputOtpProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </InputOtpProvider>
        );
    },
    components: {
        Text: InputOtpText
    }
});
