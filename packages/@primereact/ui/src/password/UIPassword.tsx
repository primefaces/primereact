'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/password';
import { withComponent } from '@primereact/ui/base';
import { InputText } from '@primereact/ui/inputtext';
import { mergeDefaultProps } from '@primeuix/utils';
import { Password, defaultProps } from 'primereact/password';
import * as React from 'react';

export const UIPassword = withComponent({
    name: 'Password',
    defaultProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: InputText, styles }, instance.inProps);

        return <Component as={Password} attrs={rootProps} />;
    }
});
