'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useToastContext } from '../Toast.context';
import { defaultDescriptionProps } from './ToastDescription.props';

export const ToastDescription = withComponent({
    name: 'Toast.Description',
    defaultProps: defaultDescriptionProps,
    setup() {
        const toast = useToastContext();

        return { toast };
    },
    render(instance) {
        const { props, toast, ptmi } = instance;

        const rootProps = mergeProps(
            {
                className: toast?.cx('description'),
                'data-variant': toast?.props.toast.variant
            },
            toast?.ptm('description'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children ?? toast?.props.toast.description} />;
    }
});
