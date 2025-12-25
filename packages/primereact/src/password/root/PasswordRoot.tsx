'use client';
import { Component, withComponent } from '@primereact/core/component';
import { usePassword } from '@primereact/headless/password';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { PasswordProvider } from '../Password.context';
import { defaultRootProps } from './PasswordRoot.props';

export const PasswordRoot = withComponent({
    name: 'PasswordRoot',
    defaultProps: defaultRootProps,
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
    }
});
