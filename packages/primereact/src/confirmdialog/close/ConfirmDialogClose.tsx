'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useConfirmDialogContext } from '../ConfirmDialog.context';
import { defaultCloseProps } from './ConfirmDialogClose.props';

export const ConfirmDialogClose = withComponent({
    name: 'ConfirmDialog.Close',
    defaultProps: defaultCloseProps,
    setup() {
        const confirmdialog = useConfirmDialogContext();

        return { confirmdialog };
    },
    render(instance) {
        const { props, ptmi, confirmdialog } = instance;
        const { as, ...restProps } = props;

        const rootProps = mergeProps(restProps, confirmdialog?.ptm('close'), ptmi('root'));

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
