'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Portal } from 'primereact/portal';
import * as React from 'react';
import { useDrawerContext } from '../Drawer.context';
import { defaultBackdropProps } from './DrawerBackdrop.props';

export const DrawerBackdrop = withComponent({
    name: 'Drawer.Backdrop',
    defaultProps: defaultBackdropProps,
    setup() {
        const drawer = useDrawerContext();

        return { drawer };
    },
    render(instance) {
        const { drawer, ptmi } = instance;

        const rootProps = mergeProps(
            {
                visible: drawer?.state.opened,
                className: drawer?.cx('backdrop'),
                style: drawer?.sx('backdrop'),
                motionProps: {
                    name: 'p-overlay-mask',
                    appear: true,
                    onEnter: drawer?.onMaskEnter
                },
                onMouseDown: drawer?.onMaskMouseDown,
                onMouseUp: drawer?.onMaskMouseUp
            },
            drawer?.ptm('backdrop'),
            ptmi('root')
        );

        const backdropElement = <Component ref={drawer?.maskRef} instance={instance} attrs={rootProps} />;

        return <Portal element={backdropElement} appendTo={drawer?.props.appendTo} />;
    }
});
