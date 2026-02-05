'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Backdrop } from 'primereact/backdrop';
import { Portal } from 'primereact/portal';
import * as React from 'react';
import { useDrawerContext } from '../Drawer.context';
import { defaultPortalProps } from './DrawerPortal.props';

export const DrawerPortal = withComponent({
    name: 'Drawer.Portal',
    defaultProps: defaultPortalProps,
    setup() {
        const drawer = useDrawerContext();

        return { drawer };
    },
    render(instance) {
        const { drawer, props, ptmi, inProps } = instance;

        const maskProps = mergeProps(
            {
                visible: drawer?.state.opened,
                className: drawer?.cx('mask'),
                style: drawer?.sx('mask'),
                motionProps: {
                    name: 'p-overlay-mask',
                    appear: true,
                    onEnter: drawer?.onMaskEnter
                },
                onMouseDown: drawer?.onMaskMouseDown,
                onMouseUp: drawer?.onMaskMouseUp
            },
            drawer?.ptm('mask')
        );

        const rootProps = mergeProps(
            {
                id: drawer?.id,
                visible: drawer?.state.opened,
                className: drawer?.cx('root'),
                style: drawer?.sx('root'),
                motionProps: {
                    name: 'p-drawer',
                    appear: true,
                    onEnter: drawer?.onEnter,
                    onAfterEnter: drawer?.onAfterEnter,
                    onLeave: drawer?.onLeave,
                    onAfterLeave: drawer?.onAfterLeave
                },
                role: 'complementary',
                'aria-modal': drawer?.props.modal ? '' : undefined,
                'data-open': drawer?.state.opened ? '' : undefined,
                'data-position': drawer?.props.position
            },
            {
                className: inProps?.className,
                style: inProps?.style
            },
            ptmi('root')
        );

        const portalProps = mergeProps(drawer?.ptm('portal'), ptmi('root'));

        const portalElement = (
            <Backdrop {...maskProps} ref={drawer?.maskRef}>
                <Backdrop {...rootProps} ref={drawer?.rootRef}>
                    <Component instance={instance} attrs={portalProps} children={props.children} />
                </Backdrop>
            </Backdrop>
        );

        return <Portal element={portalElement} appendTo={drawer?.props.appendTo} />;
    }
});
