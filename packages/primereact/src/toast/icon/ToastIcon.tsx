'use client';
import { Component } from '@primereact/core/component';
import { Icon } from '@primereact/core/icon';
import { CheckIcon, ExclamationTriangleIcon, InfoCircleIcon, SpinnerIcon, TimesCircleIcon } from '@primereact/icons';
import { ToastVariant, useToastProps } from '@primereact/types/shared/toast';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useToastItemContext } from '../item/ToastItem.context';
import { useToastContext } from '../Toast.context';
import { defaultIconProps } from './ToastIcon.props';

const defaultIcons: useToastProps['icons'] = {
    danger: <TimesCircleIcon />,
    warn: <ExclamationTriangleIcon />,
    info: <InfoCircleIcon />,
    success: <CheckIcon />,
    loading: <SpinnerIcon />
};

export const ToastIcon = withComponent({
    name: 'ToastIcon',
    defaultProps: defaultIconProps,
    setup() {
        const toast = useToastContext();

        const toastItem = useToastItemContext();

        return { toast, toastItem };
    },
    render(instance) {
        const { props, ptmi, toast, toastItem } = instance;

        const rootProps = mergeProps(
            {
                className: toast?.cx('icon'),
                ...(toastItem?.props.data.variant === 'loading' && { spin: true })
            },
            toast?.ptm('icon'),
            ptmi('root')
        );

        return (
            <Component
                pIf={!!toastItem?.props.data.icon || !!defaultIcons[toastItem?.props.data.variant as ToastVariant]}
                as={Icon}
                instance={instance}
                attrs={rootProps}
                children={toastItem?.props.data.icon ?? defaultIcons[toastItem?.props.data.variant as ToastVariant] ?? props.children}
            />
        );
    }
});
