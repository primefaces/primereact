'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useToastContext } from '../Toast.context';
import { defaultActionProps } from './ToastAction.props';

export const ToastAction = withComponent({
    name: 'Toast.Action',
    defaultProps: defaultActionProps,
    setup() {
        const toast = useToastContext();

        return { toast };
    },
    render(instance) {
        const { id, props, ptmi, toast } = instance;

        const actionProps = toast?.props.toast.action ?? {};

        const rootProps = mergeProps(
            {
                id,
                ...actionProps,
                className: toast?.cx('action'),
                'data-variant': toast?.props.toast.variant
            },
            toast?.ptm('action'),
            ptmi('root')
        );

        return <Component pIf={!!toast?.props.toast.action} instance={instance} attrs={rootProps} children={actionProps?.children ?? props.children} />;
    }
});
