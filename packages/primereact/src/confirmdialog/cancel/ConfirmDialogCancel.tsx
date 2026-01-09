'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
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
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                type: 'button',
                className: confirmdialog?.cx('cancel'),
                onClick: dialog?.close
            },
            confirmdialog?.ptm('cancel'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
