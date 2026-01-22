'use client';
import { Component, withComponent } from '@primereact/core/component';
import { InputText } from '@primereact/ui/inputtext';
import { mergeDefaultProps } from '@primeuix/utils';
import { defaultInputProps, PasswordInput } from 'primereact/password';
import * as React from 'react';

export const UIPasswordInput = withComponent({
    name: 'Password.Input',
    defaultProps: defaultInputProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: InputText }, instance.inProps);

        return <Component as={PasswordInput} attrs={rootProps} />;
    }
});
