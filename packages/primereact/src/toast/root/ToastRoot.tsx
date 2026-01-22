'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useToast } from '@primereact/headless/toast';
import * as React from 'react';
import { ToastProvider } from '../Toast.context';
import { defaultRootProps } from './ToastRoot.props';
//import './styles.css';

export const ToastRoot = withComponent({
    name: 'Toast.Root',
    defaultProps: defaultRootProps,
    setup(instance) {
        const toast = useToast(instance.inProps);

        return toast;
    },
    render(instance) {
        const { props } = instance;

        return (
            <ToastProvider value={instance}>
                <Component instance={instance} children={props.children} />
            </ToastProvider>
        );
    }
});
