'use client';
import { Component } from '@primereact/core/component';
import { Motion } from '@primereact/core/motion';
import { cn, mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { useDialogContext } from 'primereact/dialog';
import { Portal } from 'primereact/portal';
import * as React from 'react';
import { useConfirmDialogContext } from '../ConfirmDialog.context';
import { defaultPortalProps } from './ConfirmDialogPortal.props';

export const ConfirmDialogPortal = withComponent({
    name: 'ConfirmDialogPortal',
    defaultProps: defaultPortalProps,
    setup() {
        const confirmdialog = useConfirmDialogContext();
        const dialog = useDialogContext();

        return { confirmdialog, dialog };
    },
    render(instance) {
        const { confirmdialog, dialog, props, ptmi, inProps } = instance;

        const maskProps = mergeProps(
            {
                className: dialog?.cx('mask'),
                style: dialog?.sx('mask'),
                onMouseDown: (event: React.MouseEvent) => dialog?.onMaskMouseDown?.(event),
                onMouseUp: dialog?.onMaskMouseUp
            },
            dialog?.ptm('mask')
        );

        const motionProps = mergeProps(
            {
                id: dialog?.id,
                in: dialog?.state.opened,
                appear: true,
                name: 'p-dialog',
                className: cn(dialog?.cx('root'), confirmdialog?.cx('root')),
                style: { ...(dialog?.sx('root') || {}), ...((inProps && inProps.style) || {}) },
                role: 'dialog',
                'aria-labelledby': dialog?.inProps?.ariaLabelledby ?? dialog?.id + '_header',
                'aria-modal': dialog?.props.modal,
                onEnter: dialog?.onMotionEnter,
                onAfterEnter: dialog?.onMotionAfterEnter,
                onBeforeLeave: dialog?.onMotionBeforeLeave,
                onLeave: dialog?.onMotionLeave,
                onAfterLeave: dialog?.onMotionAfterLeave
            },
            confirmdialog?.ptm('mask')
        );

        const portalProps = mergeProps(dialog?.ptm('portal'), ptmi('root'));

        const portalElement = (
            <Component pIf={dialog?.state.maskVisible} as="div" attrs={maskProps} ref={dialog?.maskRef}>
                <Motion {...motionProps} ref={dialog?.motionRef}>
                    <Component instance={instance} attrs={portalProps} children={props.children} />
                </Motion>
            </Component>
        );

        return <Portal element={portalElement} appendTo={dialog?.props.appendTo} visible />;

        // const rootProps = mergeProps(ptmi('root'));

        // // @ts-expect-error: Dialog.Portal is a special component that handles closing the dialog
        // return <Component as={Dialog.Portal} instance={instance} attrs={{ ...rootProps }} children={props.children} />;
    }
});
