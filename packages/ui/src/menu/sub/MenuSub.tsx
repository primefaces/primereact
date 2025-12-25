'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useMenuSub } from '@primereact/headless/menu/sub';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useMenuContext } from '../Menu.context';
import { useMenuLevelContext } from '../MenuLevel.context';
import { MenuSubProvider } from './MenuSub.context';
import { defaultSubProps } from './MenuSub.props';

export const MenuSub = withComponent({
    name: 'MenuSub',
    defaultProps: defaultSubProps,
    setup(instance) {
        const submenu = useMenuSub(instance?.inProps);
        const menu = useMenuContext();
        const parentLevel = useMenuLevelContext();

        return {
            ...submenu,
            menu,
            parentLevel
        };
    },
    render(instance) {
        const { props, ptmi, menu } = instance;

        const rootProps = mergeProps(
            {
                className: menu?.cx('submenu'),
                style: menu?.sx('submenu')
            },
            ptmi('root')
        );

        return (
            <MenuSubProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </MenuSubProvider>
        );
    }
});
