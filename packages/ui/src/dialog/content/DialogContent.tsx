'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useDialogContext } from '../Dialog.context';
import { defaultContentProps } from './DialogContent.props';

export const DialogContent = withComponent({
    name: 'DialogContent',
    defaultProps: defaultContentProps,
    setup() {
        const dialog = useDialogContext();

        return { dialog };
    },
    render(instance) {
        const { props, ptmi, dialog } = instance;

        const contentProps = mergeProps(
            {
                className: dialog?.cx('content')
            },
            dialog?.ptm('content'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={contentProps} children={props.children} />;
    }
});
