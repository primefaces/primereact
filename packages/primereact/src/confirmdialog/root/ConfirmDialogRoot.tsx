'use client';
import { withComponent } from '@primereact/core/component';
import { useConfirmDialog } from '@primereact/headless/confirmdialog';
import { ConfirmDialogInstance, ConfirmDialogProps } from '@primereact/types/shared/confirmdialog';
import { mergeProps } from '@primeuix/utils';
import { Dialog } from 'primereact/dialog';
import * as React from 'react';
import { ConfirmDialogProvider } from '../ConfirmDialog.context';
import { defaultRootProps } from './ConfirmDialogRoot.props';

export const ConfirmDialogRoot = withComponent({
    name: 'ConfirmDialogRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const confirmdialog = useConfirmDialog(instance.inProps);

        return confirmdialog;
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
            <ConfirmDialogProvider value={instance as unknown as ConfirmDialogInstance}>
                <Dialog.Root {...(props as ConfirmDialogProps)} {...rootProps}>
                    {props.children}
                </Dialog.Root>
            </ConfirmDialogProvider>
        );
    }
});
