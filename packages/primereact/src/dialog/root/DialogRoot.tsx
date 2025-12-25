'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useDialog } from '@primereact/headless/dialog';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { DialogProvider } from '../Dialog.context';
import { defaultRootProps } from './DialogRoot.props';

export const DialogRoot = withComponent({
    name: 'DialogRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const dialog = useDialog(instance.inProps);

        return dialog;
    },
    render(instance) {
        const { id, props, state, ptmi, cx, sx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                style: sx('root'),
                'data-p-opened': state.opened,
                'data-p-maximized': state.maximized
            },
            ptmi('root')
        );

        return (
            <DialogProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </DialogProvider>
        );
    }
});
