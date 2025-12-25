'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Dialog, useDialogContext } from 'primereact/dialog';
import * as React from 'react';
import { useConfirmDialogContext } from '../ConfirmDialog.context';
import { defaultHeaderProps } from './ConfirmDialogHeader.props';

export const ConfirmDialogHeader = withComponent({
    name: 'ConfirmDialogHeader',
    defaultProps: defaultHeaderProps,
    setup() {
        const confirmdialog = useConfirmDialogContext();
        const dialog = useDialogContext();

        return { confirmdialog, dialog };
    },
    render(instance) {
        const { props, ptmi, confirmdialog } = instance;

        const rootProps = mergeProps(ptmi('root'));

        // @ts-expect-error: Dialog.Header expects a type prop, but we are using it as a header.
        return <Component as={Dialog.Header} instance={instance} attrs={rootProps} pt={confirmdialog?.ptm('header')} children={props.children} />;
    }
});
