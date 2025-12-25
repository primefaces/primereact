'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { MenuItemHandlers } from '../MenuItemHandlers';
import { MenuItemSetup } from '../MenuItemSetup';
import { defaultItemProps } from './MenuItem.props';

export const MenuItem = withComponent({
    name: 'MenuItem',
    defaultProps: defaultItemProps,
    setup({ props }) {
        return MenuItemSetup(props);
    },
    render(instance) {
        const { props, ptmi, menu, submenu, portal, itemRef, itemId, focused, ariaLevel, ariaPosInSet, ariaSetSize } = instance;
        const isDisabled = !props.disabled;

        const { onItemMouseDown, onItemMouseMove, onItemMouseEnter } = MenuItemHandlers({
            isDisabled,
            itemId,
            itemRef,
            menu,
            portal
        });

        const rootProps = mergeProps(
            {
                id: itemId,
                className: menu?.cx('item', { disabled: props.disabled, focused }),
                role: 'menuitem',
                tabIndex: props.disabled ? -1 : focused ? 0 : -1,
                'aria-disabled': props.disabled,
                'aria-level': ariaLevel,
                'aria-posinset': ariaPosInSet,
                'aria-setsize': ariaSetSize,
                'aria-expanded': submenu ? submenu.state.opened : undefined,
                'data-p-focused': focused,
                'data-p-disabled': props.disabled,
                onMouseDown: onItemMouseDown,
                onMouseMove: onItemMouseMove,
                onMouseEnter: menu?.props.composite ? onItemMouseEnter : undefined
            },
            menu?.ptm('item'),
            ptmi('root')
        );

        return <Component ref={itemRef} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
