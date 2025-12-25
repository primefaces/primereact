'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Menu, useMenuContext } from 'primereact/menu';
import * as React from 'react';
import { useContextMenuContext } from '../ContextMenu.context';
import { ContextMenuSubProvider } from './ContextMenuSub.context';
import { defaultSubProps } from './ContextMenuSub.props';

export const ContextMenuSub = withComponent({
    name: 'ContextMenuSub',
    defaultProps: defaultSubProps,
    setup() {
        const contextmenu = useContextMenuContext();
        const menu = useMenuContext();

        return { contextmenu, menu };
    },
    render(instance) {
        const { props, ptmi, contextmenu } = instance;

        const rootProps = mergeProps(
            {
                className: contextmenu?.cx('submenu')
            },
            ptmi('root')
        );

        return (
            <ContextMenuSubProvider value={instance}>
                {/* @ts-expect-error: Menu.Sub expects a type prop, but we are using it as a submenu. */}
                <Component as={Menu.Sub} instance={instance} attrs={rootProps} pt={contextmenu?.ptm('submenu')} children={props.children} />
            </ContextMenuSubProvider>
        );
    }
});
