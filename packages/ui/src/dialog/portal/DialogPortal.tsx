'use client';
import { Component, withComponent } from '@primereact/core/component';
import { Motion } from '@primereact/core/motion';
import { mergeProps } from '@primeuix/utils';
import { Portal } from 'primereact/portal';
import * as React from 'react';
import { useDialogContext } from '../Dialog.context';
import { defaultPortalProps } from './DialogPortal.props';

export const DialogPortal = withComponent({
    name: 'DialogPortal',
    defaultProps: defaultPortalProps,
    setup() {
        const dialog = useDialogContext();

        return { dialog };
    },
    render(instance) {
        const { dialog, props, ptmi, inProps } = instance;

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
                className: dialog?.cx('root'),
                style: dialog?.sx('root'),
                role: 'dialog',
                'aria-labelledby': dialog?.inProps?.ariaLabelledby ?? dialog?.id + '_header',
                'aria-modal': dialog?.props.modal,
                onEnter: dialog?.onMotionEnter,
                onAfterEnter: dialog?.onMotionAfterEnter,
                onBeforeLeave: dialog?.onMotionBeforeLeave,
                onLeave: dialog?.onMotionLeave,
                onAfterLeave: dialog?.onMotionAfterLeave
            },
            {
                style: inProps?.style
            },
            dialog?.ptm('mask')
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
    }
});
