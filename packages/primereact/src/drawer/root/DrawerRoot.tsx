'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useDrawer } from '@primereact/headless/drawer';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { DrawerProvider } from '../Drawer.context';
import { defaultRootProps } from './DrawerRoot.props';

export const DrawerRoot = withComponent({
    name: 'DrawerRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const drawer = useDrawer(instance.inProps);

        return drawer;
    },
    render(instance) {
        const { id, props, state, ptmi, cx, sx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                style: sx('root'),
                'data-p-opened': state.opened
            },
            ptmi('root')
        );

        return (
            <DrawerProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </DrawerProvider>
        );
    }
});
