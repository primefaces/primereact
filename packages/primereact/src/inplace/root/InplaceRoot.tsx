'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useInplace } from '@primereact/headless/inplace';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { InplaceProvider } from '../Inplace.context';
import { defaultRootProps } from './InplaceRoot.props';

export const InplaceRoot = withComponent({
    name: 'InplaceRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const inplace = useInplace(instance.inProps);

        return inplace;
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
            <InplaceProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </InplaceProvider>
        );
    }
});
