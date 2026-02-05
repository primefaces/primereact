'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { useDialogContext } from 'primereact/dialog';
import * as React from 'react';
import { useConfirmDialogContext } from '../ConfirmDialog.context';
import { defaultPortalProps } from './ConfirmDialogPortal.props';

export const ConfirmDialogPortal = withComponent({
    name: 'ConfirmDialog.Portal',
    defaultProps: defaultPortalProps,
    setup() {
        const confirmdialog = useConfirmDialogContext();
        const dialog = useDialogContext();

        return { confirmdialog, dialog };
    },
    render(instance) {
        const { confirmdialog, props, ptmi } = instance;
        const { as, ...restProps } = props;

        const portalProps = mergeProps(
            restProps,
            {
                className: confirmdialog?.cx('root')
            },
            confirmdialog?.ptm('root'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={portalProps} children={props.children} />;
    }
});
