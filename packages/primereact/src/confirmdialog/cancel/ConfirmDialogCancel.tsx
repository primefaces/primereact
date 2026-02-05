'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useConfirmDialogContext } from '../ConfirmDialog.context';
import { defaultCancelProps } from './ConfirmDialogCancel.props';

export const ConfirmDialogCancel = withComponent({
    name: 'ConfirmDialog.Cancel',
    defaultProps: defaultCancelProps,
    setup() {
        const confirmdialog = useConfirmDialogContext();

        return { confirmdialog };
    },
    render(instance) {
        const { props, ptmi, confirmdialog } = instance;
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                type: 'button',
                className: confirmdialog?.cx('cancel'),
                onClick: confirmdialog?.close
            },
            confirmdialog?.ptm('cancel'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
