'use client';
import { Component, withComponent } from '@primereact/core/component';
import { toast as toastHeadless, useToaster } from '@primereact/headless/toaster';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { ToasterProvider } from '../Toaster.context';
import { defaultRootProps } from './ToasterRoot.props';

export const toast = toastHeadless;

export const ToasterRoot = withComponent({
    name: 'Toaster.Root',
    defaultProps: defaultRootProps,
    setup(instance) {
        const toaster = useToaster(instance.inProps);

        return toaster;
    },
    render(instance) {
        const { props, cx, ptm } = instance;

        const rootProps = mergeProps(
            {
                className: cx('root'),
                ...(props.richColors && { 'data-rich-colors': '' }),
                'data-position': props.position
            },
            ptm('root')
        );

        return (
            <ToasterProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </ToasterProvider>
        );
    }
});
