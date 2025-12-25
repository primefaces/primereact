'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useInputOtp } from '@primereact/headless/inputotp';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { InputOtpProvider } from '../InputOtp.context';
import { defaultRootProps } from './InputOtpRoot.props';

export const InputOtpRoot = withComponent({
    name: 'InputOtpRoot',
    defaultProps: defaultRootProps,
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
    }
});
