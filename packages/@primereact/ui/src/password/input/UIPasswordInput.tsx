'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { InputText } from '@primereact/ui/inputtext';
import { defaultInputProps, PasswordInput } from 'primereact/password';
import * as React from 'react';

export const UIPasswordInput = withComponent({
    name: 'UIPasswordInput',
    defaultProps: defaultInputProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: InputText }, instance.inProps);

        return <Component as={PasswordInput} attrs={rootProps} />;
    }
});
