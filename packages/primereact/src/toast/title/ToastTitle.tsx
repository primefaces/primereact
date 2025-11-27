'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/toast';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useToastItemContext } from '../item/ToastItem.context';
import { useToastContext } from '../Toast.context';
import { defaultTitleProps } from './ToastTitle.props';

export const ToastTitle = withComponent({
    name: 'ToastTitle',
    defaultProps: defaultTitleProps,
    styles,
    setup() {
        const toastItem = useToastItemContext();
        const toast = useToastContext();

        return { toast, toastItem };
    },
    render(instance) {
        const { props, toastItem, toast, ptmi } = instance;

        const rootProps = mergeProps(
            {
                className: toast?.cx('title')
            },
            toast?.ptm('title'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children ?? toastItem?.props.toast.title} />;
    }
});
