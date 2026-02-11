'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useToastContext } from '../Toast.context';
import { defaultCloseProps } from './ToastClose.props';

export const ToastClose = withComponent({
    name: 'Toast.Close',
    defaultProps: defaultCloseProps,
    setup() {
        const toast = useToastContext();

        return { toast };
    },
    render(instance) {
        const { id, props, ptmi, toast } = instance;

        const rootProps = mergeProps(
            {
                id,
                onClick: toast?.handleCloseOnClick,
                className: toast?.cx('close'),
                'data-variant': toast?.props.toast.variant
            },
            toast?.ptm('close'),
            ptmi('root')
        );

        return <Component pIf={toast?.props.toast.variant !== 'loading' && toast?.props.toast.dismissible !== false} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
