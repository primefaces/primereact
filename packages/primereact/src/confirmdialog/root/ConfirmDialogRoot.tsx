'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useConfirmDialog } from '@primereact/headless/confirmdialog';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { ConfirmDialogProvider } from '../ConfirmDialog.context';
import { defaultRootProps } from './ConfirmDialogRoot.props';

export const ConfirmDialogRoot = withComponent({
    name: 'ConfirmDialog.Root',
    defaultProps: defaultRootProps,
    setup(instance) {
        const confirmdialog = useConfirmDialog(instance.inProps);

        return confirmdialog;
    },
    render(instance) {
        const { id, props, ptmi, cx, sx, dialog } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                style: sx('root'),
                dialogInstance: dialog
            },
            ptmi('root')
        );

        return (
            <ConfirmDialogProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </ConfirmDialogProvider>
        );
    }
});
