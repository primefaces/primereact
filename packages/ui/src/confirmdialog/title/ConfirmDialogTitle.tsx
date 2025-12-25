'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Dialog, useDialogContext } from 'primereact/dialog';
import * as React from 'react';
import { useConfirmDialogContext } from '../ConfirmDialog.context';
import { defaultTitleProps } from './ConfirmDialogTitle.props';

export const ConfirmDialogTitle = withComponent({
    name: 'ConfirmDialogTitle',
    defaultProps: defaultTitleProps,
    setup() {
        const confirmdialog = useConfirmDialogContext();
        const dialog = useDialogContext();

        return { confirmdialog, dialog };
    },
    render(instance) {
        const { props, ptmi, confirmdialog } = instance;

        const rootProps = mergeProps(ptmi('root'));

        // @ts-expect-error: Dialog.Title expects a type prop, but we are using it as a title.
        return <Component as={Dialog.Title} instance={instance} attrs={rootProps} pt={confirmdialog?.ptm('title')} children={props.children} />;
    }
});
