'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Dialog, useDialogContext } from 'primereact/dialog';
import * as React from 'react';
import { useConfirmDialogContext } from '../ConfirmDialog.context';
import { defaultContentProps } from './ConfirmDialogContent.props';

export const ConfirmDialogContent = withComponent({
    name: 'ConfirmDialogContent',
    defaultProps: defaultContentProps,
    setup() {
        const confirmdialog = useConfirmDialogContext();
        const dialog = useDialogContext();

        return { confirmdialog, dialog };
    },
    render(instance) {
        const { props, ptmi, confirmdialog } = instance;

        const rootProps = mergeProps(ptmi('root'));

        // @ts-expect-error: Dialog.Content expects a type prop, but we are using it as a content.
        return <Component as={Dialog.Content} instance={instance} attrs={rootProps} pt={confirmdialog?.ptm('content')} children={props.children} />;
    }
});
