'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Portal } from 'primereact/portal';
import * as React from 'react';
import { useDialogContext } from '../Dialog.context';
import { defaultBackdropProps } from './DialogBackdrop.props';

export const DialogBackdrop = withComponent({
    name: 'Dialog.Backdrop',
    defaultProps: defaultBackdropProps,
    setup() {
        const dialog = useDialogContext();

        return { dialog };
    },
    render(instance) {
        const { dialog, ptmi } = instance;

        const rootProps = mergeProps(
            {
                visible: dialog?.state.opened,
                className: dialog?.cx('backdrop'),
                style: dialog?.sx('backdrop'),
                motionProps: {
                    name: 'p-overlay-mask',
                    appear: true,
                    onEnter: dialog?.onMaskEnter
                },
                onMouseDown: dialog?.onMaskMouseDown,
                onMouseUp: dialog?.onMaskMouseUp
            },
            dialog?.ptm('backdrop'),
            ptmi('root')
        );

        const backdropElement = <Component ref={dialog?.maskRef} instance={instance} attrs={rootProps} />;

        return <Portal element={backdropElement} appendTo={dialog?.props.appendTo} />;
    }
});
