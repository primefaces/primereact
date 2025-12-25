'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Button } from 'primereact/button';
import { useDialogContext } from 'primereact/dialog';
import * as React from 'react';
import { useConfirmDialogContext } from '../ConfirmDialog.context';
import { defaultActionProps } from './ConfirmDialogAction.props';

export const ConfirmDialogAction = withComponent({
    name: 'ConfirmDialogAction',
    defaultProps: defaultActionProps,
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
                className: confirmdialog?.cx('action'),
                autoFocus: true,
                onClick: dialog?.close
            },
            confirmdialog?.ptm('action'),
            ptmi('root')
        );

        // @ts-expect-error: Button expects a type prop, but we are using it as a action button.
        return <Component as={Button} instance={instance} attrs={{ ...props, ...rootProps }} pt={confirmdialog?.ptm('action')} children={props.children} />;
    }
});
