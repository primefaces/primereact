'use client';
import { Component } from '@primereact/core/component';
import { cn, mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Dialog, useDialogContext } from 'primereact/dialog';
import * as React from 'react';
import { useConfirmDialogContext } from '../ConfirmDialog.context';
import { defaultTriggerProps } from './ConfirmDialogTrigger.props';

export const ConfirmDialogTrigger = withComponent({
    name: 'ConfirmDialogTrigger',
    defaultProps: defaultTriggerProps,
    setup() {
        const confirmdialog = useConfirmDialogContext();
        const dialog = useDialogContext();

        return { confirmdialog, dialog };
    },
    render(instance) {
        const { props, ptmi, confirmdialog, dialog } = instance;

        const rootProps = mergeProps(
            {
                className: cn(dialog?.cx('trigger'), confirmdialog?.cx('trigger'))
            },
            ptmi('root')
        );

        // @ts-expect-error: Button expects a type prop, but we are using it as a trigger.
        return <Component as={Dialog.Trigger} instance={instance} attrs={{ ...props, ...rootProps }} pt={confirmdialog?.ptm('trigger')} children={props.children} />;
    }
});
