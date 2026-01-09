'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { InputText } from '@primereact/ui/inputtext';
import { defaultTextProps, InputOtpText } from 'primereact/inputotp';
import * as React from 'react';

export const UIInputOtpText = withComponent({
    name: 'UIInputOtpText',
    defaultProps: defaultTextProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: InputText }, instance.inProps);

        return <Component as={InputOtpText} attrs={rootProps} />;
    }
});
