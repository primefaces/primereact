'use client';
import { Component } from '@primereact/core/component';
import { useDialog } from '@primereact/headless/dialog';
import { styles } from '@primereact/styles/dialog';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { DialogClose } from './close';
import { DialogContent } from './content';
import { DialogProvider } from './Dialog.context';
import { defaultProps } from './Dialog.props';
import { DialogFooter } from './footer';
import { DialogHeader } from './header';
import { DialogHeaderActions } from './headeractions';
import { DialogMaximizable } from './maximizable';
import { DialogPortal } from './portal';
import { DialogTitle } from './title';
import { DialogTrigger } from './trigger';

export const Dialog = withComponent({
    name: 'Dialog',
    defaultProps,
    styles,
    setup(instance) {
        const dialog = useDialog(instance.inProps);

        return dialog;
    },
    render(instance) {
        const { id, props, state, ptmi, cx, sx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                style: sx('root'),
                'data-p-opened': state.opened,
                'data-p-maximized': state.maximized
            },
            ptmi('root')
        );

        return (
            <DialogProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </DialogProvider>
        );
    },
    components: {
        Close: DialogClose,
        Content: DialogContent,
        Footer: DialogFooter,
        Header: DialogHeader,
        HeaderActions: DialogHeaderActions,
        Maximizable: DialogMaximizable,
        Portal: DialogPortal,
        Title: DialogTitle,
        Trigger: DialogTrigger
    }
});
