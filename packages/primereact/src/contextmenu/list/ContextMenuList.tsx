'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Menu, useMenuContext } from 'primereact/menu';
import * as React from 'react';
import { useContextMenuContext } from '../ContextMenu.context';
import { defaultListProps } from './ContextMenuList.props';

export const ContextMenuList = withComponent({
    name: 'ContextMenuList',
    defaultProps: defaultListProps,
    setup() {
        const contextmenu = useContextMenuContext();
        const menu = useMenuContext();

        return { contextmenu, menu };
    },
    render(instance) {
        const { props, ptmi, contextmenu } = instance;

        const rootProps = mergeProps(
            {
                className: contextmenu?.cx('list')
            },
            ptmi('root')
        );

        // @ts-expect-error: Menu.List expects a type prop, but we are using it as a list.
        return <Component as={Menu.List} instance={instance} attrs={rootProps} pt={contextmenu?.ptm('list')} children={props.children} />;
    }
});
