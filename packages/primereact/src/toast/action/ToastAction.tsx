'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/toast';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
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
        const { id, props, ptmi, toastItem } = instance;

        const actionProps = toastItem?.props.data.action ?? {};

        const rootProps = mergeProps(
            {
                id,
                ...actionProps
            },
            ptmi('root')
        );

        return <Component pIf={!!toastItem?.props.data.action} instance={instance} attrs={rootProps} children={actionProps?.children ?? props.children} />;
    }
});
