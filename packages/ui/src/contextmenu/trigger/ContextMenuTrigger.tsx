'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Menu, useMenuContext } from 'primereact/menu';
import * as React from 'react';
import { useContextMenuContext } from '../ContextMenu.context';
import { useContextMenuSubContext } from '../sub/ContextMenuSub.context';
import { defaultTriggerProps } from './ContextMenuTrigger.props';

export const ContextMenuTrigger = withComponent({
    name: 'ContextMenuTrigger',
    defaultProps: defaultTriggerProps,
    setup() {
        const contextmenu = useContextMenuContext();
        const submenu = useContextMenuSubContext();
        const menu = useMenuContext();

        return { contextmenu, submenu, menu };
    },
    render(instance) {
        const { props, ptmi, contextmenu, submenu, menu } = instance;

        const rootProps = mergeProps(
            {
                className: contextmenu?.cx('trigger'),
                onContextMenu: menu?.onTriggerClick
            },
            contextmenu?.ptm('trigger'),
            ptmi('root')
        );

        return submenu ? <Component as={Menu.Trigger} instance={instance} attrs={{}} children={props.children} /> : <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
