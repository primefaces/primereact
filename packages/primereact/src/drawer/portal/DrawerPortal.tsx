'use client';
import { Component } from '@primereact/core/component';
import { Motion } from '@primereact/core/motion';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { Portal } from '../../portal';
import { useDrawerContext } from '../Drawer.context';
import { defaultPortalProps } from './DrawerPortal.props';

export const DrawerPortal = withComponent({
    name: 'DrawerPortal',
    defaultProps: defaultPortalProps,
    setup() {
        const drawer = useDrawerContext();

        return { drawer };
    },
    render(instance) {
        const { drawer, props, ptmi, inProps } = instance;

        const maskProps = mergeProps(
            {
                className: drawer?.cx('mask'),
                style: drawer?.sx('mask'),
                onMouseDown: drawer?.onMaskClick
            },
            drawer?.ptm('mask')
        );

        const motionProps = mergeProps(
            {
                id: drawer?.id,
                in: drawer?.state.opened,
                appear: true,
                name: 'p-drawer',
                className: drawer?.cx('root'),
                style: { ...(drawer?.sx('root') || {}), ...((inProps && inProps.style) || {}) },
                role: 'complementary',
                'aria-modal': drawer?.props.modal,
                onEnter: drawer?.onMotionEnter,
                onAfterEnter: drawer?.onMotionAfterEnter,
                onBeforeLeave: drawer?.onMotionBeforeLeave,
                onAfterLeave: drawer?.onMotionAfterLeave
            },
            drawer?.ptmi('root')
        );

        const portalProps = mergeProps(drawer?.ptm('portal'), ptmi('root'));

        const portalElement = (
            <Component pIf={drawer?.state.maskVisible} as="div" attrs={maskProps} ref={drawer?.maskRef}>
                <Motion {...motionProps} ref={drawer?.motionRef}>
                    <Component instance={instance} attrs={portalProps} children={props.children} />
                </Motion>
            </Component>
        );

        return <Portal element={portalElement} visible />;
    }
});
