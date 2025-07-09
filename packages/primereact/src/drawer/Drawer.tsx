'use client';
import { Component } from '@primereact/core/component';
import { useDrawer } from '@primereact/headless/drawer';
import { styles } from '@primereact/styles/drawer';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { DrawerClose } from './close';
import { DrawerContent } from './content';
import { DrawerProvider } from './Drawer.context';
import { defaultProps } from './Drawer.props';
import { DrawerFooter } from './footer';
import { DrawerHeader } from './header';
import { DrawerPortal } from './portal';
import { DrawerTitle } from './title';
import { DrawerTrigger } from './trigger';

export const Drawer = withComponent({
    name: 'Drawer',
    defaultProps,
    styles,
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
    },
    components: {
        Close: DrawerClose,
        Content: DrawerContent,
        Footer: DrawerFooter,
        Header: DrawerHeader,
        Portal: DrawerPortal,
        Title: DrawerTitle,
        Trigger: DrawerTrigger
    }
});
