'use client';
import { Component } from '@primereact/core/component';
import { useMenuSub } from '@primereact/headless/menu/sub';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useMenuContext } from '../Menu.context';
import { useMenuLevelContext } from '../MenuLevel.context';
import { MenuSubProvider } from './MenuSub.context';
import { defaultSubProps } from './MenuSub.props';

export const MenuSub = withComponent({
    name: 'MenuSub',
    defaultProps: defaultSubProps,
    setup({ props }) {
        const menu = useMenuContext();
        const parentLevel = useMenuLevelContext();

        //TODO:
        // Extract useMenuSub props and internal component props
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { open, defaultOpen, onOpenChange, disabled, pIf: _pIf, as: _as, asChild: _asChild, ptOptions: _ptOptions, unstyled: _unstyled, pt: _pt, ...restProps } = props;
        const menusub = useMenuSub({ open, defaultOpen, onOpenChange, disabled });

        return {
            ...menusub,
            menu,
            restProps,
            parentLevel
        };
    },
    render(instance) {
        const { props, ptmi, menu, restProps } = instance;

        const rootProps = mergeProps(
            {
                className: menu?.cx('submenu')
            },
            restProps,
            ptmi('root')
        );

        // DON'T wrap children with MenuLevelProvider here!
        // The Trigger should remain in the parent level context.
        // Only MenuList will create a new level for its children.
        return (
            <MenuSubProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </MenuSubProvider>
        );
    }
});
