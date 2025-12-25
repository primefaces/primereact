'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Dialog, useDialogContext } from 'primereact/dialog';
import * as React from 'react';
import { useConfirmDialogContext } from '../ConfirmDialog.context';
import { defaultFooterProps } from './ConfirmDialogFooter.props';

export const ConfirmDialogFooter = withComponent({
    name: 'ConfirmDialogFooter',
    defaultProps: defaultFooterProps,
    setup() {
        const confirmdialog = useConfirmDialogContext();
        const dialog = useDialogContext();

        return { confirmdialog, dialog };
    },
    render(instance) {
        const { props, ptmi, confirmdialog } = instance;

        const rootProps = mergeProps(ptmi('root'));

        // @ts-expect-error: Dialog.Footer expects a type prop, but we are using it as a footer.
        return <Component as={Dialog.Footer} instance={instance} attrs={rootProps} pt={confirmdialog?.ptm('footer')} children={props.children} />;
    }
});
