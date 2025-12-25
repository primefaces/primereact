'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Dialog, useDialogContext } from 'primereact/dialog';
import * as React from 'react';
import { useConfirmDialogContext } from '../ConfirmDialog.context';
import { defaultHeaderActionsProps } from './ConfirmDialogHeaderActions.props';

export const ConfirmDialogHeaderActions = withComponent({
    name: 'ConfirmDialogHeaderActions',
    defaultProps: defaultHeaderActionsProps,
    setup() {
        const confirmdialog = useConfirmDialogContext();
        const dialog = useDialogContext();

        return { confirmdialog, dialog };
    },
    render(instance) {
        const { props, ptmi, confirmdialog } = instance;

        const rootProps = mergeProps(ptmi('root'));

        // @ts-expect-error: Dialog.HeaderActions expects a type prop, but we are using it as a header actions.
        return <Component as={Dialog.HeaderActions} instance={instance} attrs={rootProps} pt={confirmdialog?.ptm('headerActions')} children={props.children} />;
    }
});
