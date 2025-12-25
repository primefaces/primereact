'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Menu, useMenuContext } from 'primereact/menu';
import * as React from 'react';
import { useContextMenuContext } from '../ContextMenu.context';
import { defaultItemProps } from './ContextMenuItem.props';

export const ContextMenuItem = withComponent({
    name: 'ContextMenuItem',
    defaultProps: defaultItemProps,
    setup() {
        const contextmenu = useContextMenuContext();
        const menu = useMenuContext();

        return { contextmenu, menu };
    },
    render(instance) {
        const { props, ptmi, contextmenu } = instance;

        const rootProps = mergeProps(
            {
                className: contextmenu?.cx('item')
            },
            ptmi('root')
        );

        // @ts-expect-error: Menu.Item expects a type prop, but we are using it as a item.
        return <Component as={Menu.Item} instance={instance} attrs={rootProps} pt={contextmenu?.ptm('item')} children={props.children} />;
    }
});
