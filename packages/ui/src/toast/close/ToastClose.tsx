'use client';
import { Component, withComponent } from '@primereact/core/component';
import { styles } from '@primereact/styles/toast';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useToastItemContext } from '../item/ToastItem.context';
import { useToastContext } from '../Toast.context';
import { defaultCloseProps } from './ToastClose.props';

export const ToastClose = withComponent({
    name: 'ToastClose',
    defaultProps: defaultCloseProps,
    styles,
    setup() {
        const toastItem = useToastItemContext();
        const toast = useToastContext();

        return { toast, toastItem };
    },
    render(instance) {
        const { id, props, ptmi, toastItem, toast } = instance;

        const rootProps = mergeProps(
            {
                id,
                onClick: toastItem?.handleCloseOnClick,
                className: toast?.cx('close')
            },
            toast?.ptm('close'),
            ptmi('root')
        );

        return <Component pIf={toastItem?.props.toast.variant !== 'loading' && toastItem?.props.toast.dismissible !== false} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
