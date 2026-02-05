'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useConfirmDialogContext } from '../ConfirmDialog.context';
import { defaultTitleProps } from './ConfirmDialogTitle.props';

export const ConfirmDialogTitle = withComponent({
    name: 'ConfirmDialog.Title',
    defaultProps: defaultTitleProps,
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
                className: confirmdialog?.cx('title')
            },
            confirmdialog?.ptm('title'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
