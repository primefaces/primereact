'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useDialogContext } from '../Dialog.context';
import { defaultTitleProps } from './DialogTitle.props';

export const DialogTitle = withComponent({
    name: 'DialogTitle',
    defaultProps: defaultTitleProps,
    setup() {
        const dialog = useDialogContext();

        return { dialog };
    },
    render(instance) {
        const { props, ptmi, dialog } = instance;

        const titleProps = mergeProps(
            {
                className: dialog?.cx('title')
            },
            dialog?.ptm('title'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={titleProps} children={props.children} />;
    }
});
