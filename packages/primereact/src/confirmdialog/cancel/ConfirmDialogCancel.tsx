'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Button } from 'primereact/button';
import { useDialogContext } from 'primereact/dialog';
import * as React from 'react';
import { useConfirmDialogContext } from '../ConfirmDialog.context';
import { defaultCancelProps } from './ConfirmDialogCancel.props';

export const ConfirmDialogCancel = withComponent({
    name: 'ConfirmDialogCancel',
    defaultProps: defaultCancelProps,
    setup() {
        const confirmdialog = useConfirmDialogContext();
        const dialog = useDialogContext();

        return { confirmdialog, dialog };
    },
    render(instance) {
        const { props, ptmi, confirmdialog, dialog } = instance;

        const rootProps = mergeProps(
            {
                type: 'button',
                className: confirmdialog?.cx('cancel'),
                onClick: dialog?.close
            },
            ptmi('root')
        );

        // @ts-expect-error: Button expects a type prop, but we are using it as a close button.
        return <Component as={Button} instance={instance} attrs={{ ...props, ...rootProps }} pt={confirmdialog?.ptm('cancel')} children={props.children} />;
    }
});
