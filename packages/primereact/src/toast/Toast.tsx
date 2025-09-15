'use client';
import { Component } from '@primereact/core/component';
import { useToast } from '@primereact/headless/toast';
import { styles } from '@primereact/styles/toast';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { ToastProvider } from './Toast.context';
import { defaultProps } from './Toast.props';
import { ToastAction } from './action';
import { ToastClose } from './close/ToastClose';
import { ToastDescription } from './description';
import { ToastIcon } from './icon/ToastIcon';
import { ToastItem } from './item';
import { ToastPortal } from './portal/ToastPortal';
import { ToastRegion } from './region/ToastRegion';
import './styles.css';
import { ToastTitle } from './title';

export const Toast = withComponent({
    name: 'Toast',
    defaultProps,
    styles,
    setup(instance) {
        const toast = useToast(instance.inProps);

        return toast;
    },
    render(instance) {
        const { props } = instance;

        return (
            <ToastProvider value={instance}>
                <Component as={React.Fragment} instance={instance} attrs={{}} children={props.children} />
            </ToastProvider>
        );
    },
    components: {
        Portal: ToastPortal,
        Region: ToastRegion,
        Item: ToastItem,
        Close: ToastClose,
        Title: ToastTitle,
        Description: ToastDescription,
        Icon: ToastIcon,
        Action: ToastAction
    }
});
