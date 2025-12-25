'use client';
import { Component, withComponent } from '@primereact/core/component';
import { styles } from '@primereact/styles/toast';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useToastItemContext } from '../item/ToastItem.context';
import { useToastContext } from '../Toast.context';
import { defaultDescriptionProps } from './ToastDescription.props';

export const ToastDescription = withComponent({
    name: 'ToastDescription',
    defaultProps: defaultDescriptionProps,
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
                className: toast?.cx('description')
            },
            toast?.ptm('description'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children ?? toastItem?.props.toast.description} />;
    }
});
