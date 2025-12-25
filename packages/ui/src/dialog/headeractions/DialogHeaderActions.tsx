'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useDialogContext } from '../Dialog.context';
import { defaultHeaderActionsProps } from './DialogHeaderActions.props';

export const DialogHeaderActions = withComponent({
    name: 'DialogHeaderActions',
    defaultProps: defaultHeaderActionsProps,
    setup() {
        const dialog = useDialogContext();

        return { dialog };
    },
    render(instance) {
        const { props, ptmi, dialog } = instance;

        const rootProps = mergeProps(
            {
                className: dialog?.cx('headerActions')
            },
            dialog?.ptm('headerActions'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
