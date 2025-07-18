'use client';
import { useConfirmDialog } from '@primereact/headless/confirmdialog';
import { styles } from '@primereact/styles/confirmdialog';
import { ConfirmDialogInstance, ConfirmDialogProps } from '@primereact/types/shared/confirmdialog';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Dialog } from 'primereact/dialog';
import * as React from 'react';
import { ConfirmDialogAction } from './action';
import { ConfirmDialogCancel } from './cancel';
import { ConfirmDialogClose } from './close';
import { ConfirmDialogProvider } from './ConfirmDialog.context';
import { defaultProps } from './ConfirmDialog.props';
import { ConfirmDialogContent } from './content';
import { ConfirmDialogFooter } from './footer';
import { ConfirmDialogHeader } from './header';
import { ConfirmDialogHeaderActions } from './headeractions';
import { ConfirmDialogIcon } from './icon';
import { ConfirmDialogMessage } from './message';
import { ConfirmDialogPortal } from './portal';
import { ConfirmDialogTitle } from './title';
import { ConfirmDialogTrigger } from './trigger';

export const ConfirmDialog = withComponent({
    name: 'ConfirmDialog',
    defaultProps,
    styles,
    setup(instance) {
        const confirmdialog = useConfirmDialog(instance.inProps);

        return confirmdialog;
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
            <ConfirmDialogProvider value={instance as unknown as ConfirmDialogInstance}>
                <Dialog {...(props as ConfirmDialogProps)} {...rootProps}>
                    {props.children}
                </Dialog>
            </ConfirmDialogProvider>
        );
    },
    components: {
        Action: ConfirmDialogAction,
        Cancel: ConfirmDialogCancel,
        Close: ConfirmDialogClose,
        Content: ConfirmDialogContent,
        Footer: ConfirmDialogFooter,
        Header: ConfirmDialogHeader,
        HeaderActions: ConfirmDialogHeaderActions,
        Icon: ConfirmDialogIcon,
        Message: ConfirmDialogMessage,
        Portal: ConfirmDialogPortal,
        Title: ConfirmDialogTitle,
        Trigger: ConfirmDialogTrigger
    }
});
