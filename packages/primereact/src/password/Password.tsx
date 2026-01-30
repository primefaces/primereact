'use client';
import { Component, withComponent } from '@primereact/core/component';
import { isElementOfType } from '@primereact/core/utils';
import { usePassword } from '@primereact/headless/password';
import { mergeProps, omit } from '@primeuix/utils';
import * as React from 'react';
import { PasswordProvider } from './Password.context';
import { defaultProps } from './Password.props';

export const Password = withComponent({
    name: 'Password',
    defaultProps,
    setup(instance) {
        const password = usePassword(instance?.inProps);

        return password;
    },
    render(instance) {
        const { id, props, ptmi, cx, state, onInputChange } = instance;
        const { as, ...restProps } = props;
        const isControlled = props.value !== undefined;
        const asProps = isElementOfType(as, 'InputText') ? (isControlled ? { value: state.value } : { defaultValue: state.value }) : undefined;

        const rootProps = mergeProps(
            omit(restProps, 'styles', 'onValueChange', 'value', 'defaultValue', 'mask', 'defaultMask', 'onMaskChange'),
            asProps,
            {
                id,
                className: cx('root'),
                type: state.mask ? 'password' : 'text',
                onChange: onInputChange
            },
            ptmi('root')
        );

        return (
            <PasswordProvider value={instance}>
                <Component as={as} instance={instance} attrs={rootProps} children={props.children} />
            </PasswordProvider>
        );
    }
});
