'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useToastContext } from '../Toast.context';
import { defaultTitleProps } from './ToastTitle.props';

export const ToastTitle = withComponent({
    name: 'Toast.Title',
    defaultProps: defaultTitleProps,
    setup() {
        const toast = useToastContext();

        return { toast };
    },
    render(instance) {
        const { props, toast, ptmi } = instance;

        const rootProps = mergeProps(
            {
                className: toast?.cx('title'),
                'data-variant': toast?.props.toast.variant
            },
            toast?.ptm('title'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children ?? toast?.props.toast.title} />;
    }
});
