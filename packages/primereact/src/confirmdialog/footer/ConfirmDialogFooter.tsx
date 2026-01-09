'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { useDialogContext } from 'primereact/dialog';
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
        const { as, ...restProps } = props;

        const rootProps = mergeProps(restProps, confirmdialog?.ptm('footer'), ptmi('root'));

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
