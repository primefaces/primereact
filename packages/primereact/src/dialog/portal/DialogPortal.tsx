'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Backdrop } from 'primereact/backdrop';
import { Portal } from 'primereact/portal';
import * as React from 'react';
import { useDialogContext } from '../Dialog.context';
import { defaultPortalProps } from './DialogPortal.props';

export const DialogPortal = withComponent({
    name: 'Dialog.Portal',
    defaultProps: defaultPortalProps,
    setup() {
        const dialog = useDialogContext();

        return { dialog };
    },
    render(instance) {
        const { dialog, props, ptmi, inProps } = instance;

        const rootProps = mergeProps(
            {
                id: dialog?.id,
                visible: dialog?.state.opened,
                className: dialog?.cx('root'),
                style: dialog?.sx('root'),
                motionProps: {
                    name: 'p-dialog',
                    appear: true,
                    onEnter: dialog?.onEnter,
                    onAfterEnter: dialog?.onAfterEnter,
                    onLeave: dialog?.onLeave,
                    onAfterLeave: dialog?.onAfterLeave
                },
                role: 'dialog',
                'aria-labelledby': dialog?.inProps?.ariaLabelledby ?? dialog?.id + '_header',
                'data-open': dialog?.state.opened ? '' : undefined,
                'data-position': dialog?.props.position
            },
            {
                className: inProps?.className,
                style: inProps?.style
            },
            ptmi('root')
        );

        const portalProps = mergeProps(dialog?.ptm('portal'), ptmi('root'));

        const portalElement = (
            <Backdrop {...rootProps} ref={dialog?.rootRef}>
                <Component instance={instance} attrs={portalProps} children={props.children} />
            </Backdrop>
        );

        return <Portal element={portalElement} appendTo={dialog?.props.appendTo} />;
    }
});
