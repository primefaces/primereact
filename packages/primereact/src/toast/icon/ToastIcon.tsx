'use client';
import { Component, withComponent } from '@primereact/core/component';
import { ToastVariant } from '@primereact/types/shared/toaster';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useToastContext } from '../Toast.context';
import { defaultIconProps } from './ToastIcon.props';

export const ToastIcon = withComponent({
    name: 'Toast.Icon',
    defaultProps: defaultIconProps,
    setup() {
        const toast = useToastContext();

        return { toast };
    },
    render(instance) {
        const { props, ptmi, toast } = instance;

        const rootProps = mergeProps(
            {
                className: toast?.cx('icon'),
                'data-variant': toast?.props.toast.variant
            },
            toast?.ptm('icon'),
            ptmi('root')
        );

        return (
            <Component
                pIf={!!props.children || !!toast?.props.toast.icon || !!toast?.toaster?.props.icons?.[toast?.props.toast.variant as ToastVariant]}
                instance={instance}
                attrs={rootProps}
                children={props.children ?? toast?.props.toast.icon ?? toast?.toaster?.props.icons?.[toast?.props.toast.variant as ToastVariant]}
            />
        );
    }
});
