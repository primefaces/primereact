'use client';
import { Component } from '@primereact/core/component';
import { Motion } from '@primereact/core/motion';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Portal } from 'primereact/portal';
import * as React from 'react';
import { useConfirmPopupContext } from '../ConfirmPopup.context';
import { defaultPortalProps } from './ConfirmPopupPortal.props';

export const ConfirmPopupPortal = withComponent({
    name: 'ConfirmPopupPortal',
    defaultProps: defaultPortalProps,
    setup() {
        const confirmpopup = useConfirmPopupContext();

        return { confirmpopup };
    },
    render(instance) {
        const { confirmpopup, props, ptmi, inProps } = instance;

        const motionProps = mergeProps(
            {
                id: confirmpopup?.id,
                in: confirmpopup?.state.opened,
                appear: true,
                name: 'p-confirmpopup',
                className: confirmpopup?.cx('root'),
                style: { ...(confirmpopup?.sx('root') || {}), ...((inProps && inProps.style) || {}) },
                role: 'alertdialog',
                'aria-modal': confirmpopup?.state.opened,
                onEnter: confirmpopup?.onMotionEnter,
                onAfterEnter: confirmpopup?.onMotionAfterEnter,
                onLeave: confirmpopup?.onMotionLeave,
                onAfterLeave: confirmpopup?.onMotionAfterLeave
            },
            confirmpopup?.ptm('root')
        );

        const portalProps = mergeProps(confirmpopup?.ptm('portal'), ptmi('root'));

        const portalElement = (
            <Motion {...motionProps} ref={confirmpopup?.motionRef}>
                <Component instance={instance} attrs={portalProps} children={props.children} />
            </Motion>
        );

        return <Portal element={portalElement} visible />;
    }
});
