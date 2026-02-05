'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useConfirmDialogContext } from '../ConfirmDialog.context';
import { defaultActionProps } from './ConfirmDialogAction.props';

export const ConfirmDialogAction = withComponent({
    name: 'ConfirmDialog.Action',
    defaultProps: defaultActionProps,
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
                className: confirmdialog?.cx('action'),
                autoFocus: true,
                onClick: confirmdialog?.close
            },
            confirmdialog?.ptm('action'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
