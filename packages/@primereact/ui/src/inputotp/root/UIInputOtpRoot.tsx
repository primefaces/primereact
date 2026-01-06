'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/inputotp';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { InputOtpRoot, defaultRootProps } from 'primereact/inputotp';
import * as React from 'react';

export const UIInputOtpRoot = withComponent({
    name: 'InputOtpRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={InputOtpRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
