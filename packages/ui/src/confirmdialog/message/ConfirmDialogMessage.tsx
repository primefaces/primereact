'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useConfirmDialogContext } from '../ConfirmDialog.context';
import { defaultMessageProps } from './ConfirmDialogMessage.props';

export const ConfirmDialogMessage = withComponent({
    name: 'ConfirmDialogMessage',
    defaultProps: defaultMessageProps,
    setup() {
        const confirmdialog = useConfirmDialogContext();

        return { confirmdialog };
    },
    render(instance) {
        const { props, ptmi, confirmdialog } = instance;

        const rootProps = mergeProps(
            {
                className: confirmdialog?.cx('message')
            },
            confirmdialog?.ptm('message'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
