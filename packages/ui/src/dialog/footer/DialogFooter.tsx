'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useDialogContext } from '../Dialog.context';
import { defaultFooterProps } from './DialogFooter.props';

export const DialogFooter = withComponent({
    name: 'DialogFooter',
    defaultProps: defaultFooterProps,
    setup() {
        const dialog = useDialogContext();

        return { dialog };
    },
    render(instance) {
        const { props, ptmi, dialog } = instance;

        const footerProps = mergeProps(
            {
                className: dialog?.cx('footer')
            },
            dialog?.ptm('footer'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={footerProps} children={props.children} />;
    }
});
