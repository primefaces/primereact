'use client';
import { Component, withComponent } from '@primereact/core/component';
import { usePassword } from '@primereact/headless/password';
import { styles } from '@primereact/styles/password';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { PasswordProvider } from './Password.context';
import { defaultProps } from './Password.props';
import { PasswordClearIcon } from './clearicon';
import { PasswordInput } from './input';
import { PasswordMeter } from './meter';
import { PasswordPortal } from './portal';
import { PasswordStrength } from './strength';

export const Password = withComponent({
    name: 'Password',
    defaultProps,
    styles,
    setup(instance) {
        const password = usePassword(instance?.inProps);

        return password;
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
            <PasswordProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </PasswordProvider>
        );
    },
    components: {
        ClearIcon: PasswordClearIcon,
        Input: PasswordInput,
        Meter: PasswordMeter,
        Portal: PasswordPortal,
        Strength: PasswordStrength
    }
});
