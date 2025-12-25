'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Dialog, useDialogContext } from 'primereact/dialog';
import * as React from 'react';
import { useConfirmDialogContext } from '../ConfirmDialog.context';
import { defaultCloseProps } from './ConfirmDialogClose.props';

export const ConfirmDialogClose = withComponent({
    name: 'ConfirmDialogClose',
    defaultProps: defaultCloseProps,
    setup() {
        const confirmdialog = useConfirmDialogContext();
        const dialog = useDialogContext();

        return { confirmdialog, dialog };
    },
    render(instance) {
        const { props, ptmi, confirmdialog } = instance;

        const rootProps = mergeProps(ptmi('root'));

        // @ts-expect-error: Dialog.Close is a special component that handles closing the dialog
        return <Component as={Dialog.Close} instance={instance} attrs={{ ...props, ...rootProps }} pt={confirmdialog?.ptm('close')} children={props.children} />;
    }
});
