'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useConfirmDialogContext } from '../ConfirmDialog.context';
import { defaultTriggerProps } from './ConfirmDialogTrigger.props';

export const ConfirmDialogTrigger = withComponent({
    name: 'ConfirmDialog.Trigger',
    defaultProps: defaultTriggerProps,
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
                className: confirmdialog?.cx('trigger'),
                type: 'button',
                'aria-expanded': confirmdialog?.state.opened,
                'aria-controls': confirmdialog?.id,
                onClick: confirmdialog?.onOpenStateChange
            },
            confirmdialog?.ptm('trigger'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
