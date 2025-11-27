'use client';
import { Component } from '@primereact/core/component';
import { Icon } from '@primereact/core/icon';
import { CheckIcon, ExclamationTriangleIcon, InfoCircleIcon, SpinnerIcon, TimesCircleIcon } from '@primereact/icons';
import { ToastIconProps, ToastVariant } from '@primereact/types/shared/toast';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useToastItemContext } from '../item/ToastItem.context';
import { useToastContext } from '../Toast.context';
import { defaultIconProps } from './ToastIcon.props';

const defaultIcons: ToastIconProps['icons'] = {
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
                ...(toastItem?.props.toast.variant === 'loading' && { spin: true })
            },
            toast?.ptm('icon'),
            ptmi('root')
        );

        const icons = { ...defaultIcons, ...props.icons };

        return (
            <Component
                pIf={!!toastItem?.props.toast.icon || !!icons[toastItem?.props.toast.variant as ToastVariant]}
                as={Icon}
                instance={instance}
                attrs={rootProps}
                children={toastItem?.props.toast.icon ?? icons[toastItem?.props.toast.variant as ToastVariant] ?? props.children}
            />
        );
    }
});
