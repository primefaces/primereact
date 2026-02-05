'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useConfirmDialogContext } from '../ConfirmDialog.context';
import { defaultContentProps } from './ConfirmDialogContent.props';

export const ConfirmDialogContent = withComponent({
    name: 'ConfirmDialog.Content',
    defaultProps: defaultContentProps,
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
                className: confirmdialog?.cx('content')
            },
            confirmdialog?.ptm('content'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
