'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useInputIcon } from '@primereact/headless/inputicon';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { InputIconProvider } from './InputIcon.context';
import { defaultProps } from './InputIcon.props';

export const InputIcon = withComponent({
    name: 'InputIcon',
    defaultProps,
    setup(instance) {
        const inputicon = useInputIcon(instance?.inProps);

        return inputicon;
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
            <InputIconProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </InputIconProvider>
        );
    }
});
