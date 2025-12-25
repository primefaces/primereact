'use client';
import { Component, withComponent } from '@primereact/core/component';
import { styles } from '@primereact/styles/toast';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useToastItemContext } from '../item/ToastItem.context';
import { useToastContext } from '../Toast.context';
import { defaultActionProps } from './ToastAction.props';

export const ToastAction = withComponent({
    name: 'ToastAction',
    defaultProps: defaultActionProps,
    styles,
    setup() {
        const toastItem = useToastItemContext();
        const toast = useToastContext();

        return { toast, toastItem };
    },
    render(instance) {
        const { id, props, ptmi, toastItem, toast } = instance;

        const actionProps = toastItem?.props.toast.action ?? {};

        const rootProps = mergeProps(
            {
                id,
                ...actionProps,
                className: toast?.cx('action')
            },
            toast?.ptm('action'),
            ptmi('root')
        );

        return <Component pIf={!!toastItem?.props.toast.action} instance={instance} attrs={rootProps} children={actionProps?.children ?? props.children} />;
    }
});
