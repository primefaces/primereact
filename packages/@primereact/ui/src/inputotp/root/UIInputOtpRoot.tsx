'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/inputotp';
import { withComponent } from '@primereact/ui/base';
import { InputOtpRoot, defaultRootProps } from 'primereact/inputotp';
import * as React from 'react';

export const UIInputOtpRoot = withComponent({
    name: 'UIInputOtpRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={InputOtpRoot} attrs={rootProps} />;
    }
});
